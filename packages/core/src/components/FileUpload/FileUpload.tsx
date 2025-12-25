import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  type InputHTMLAttributes,
  type DragEvent,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';
import './FileUpload.css';

export interface FileUploadFile {
  file: File;
  id: string;
  progress?: number;
  error?: string;
}

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange?: (files: File[]) => void;
  onRemove?: (file: FileUploadFile) => void;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  disabled?: boolean;
  files?: FileUploadFile[];
  dropzoneLabel?: ReactNode;
  error?: string;
  showFileList?: boolean;
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      onChange,
      onRemove,
      accept,
      maxSize,
      maxFiles = 10,
      multiple = false,
      disabled = false,
      files = [],
      dropzoneLabel,
      error,
      showFileList = true,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputId = id || 'file-upload';

    const validateFiles = useCallback(
      (fileList: File[]): File[] => {
        let validFiles = fileList;

        if (maxSize) {
          validFiles = validFiles.filter((file) => file.size <= maxSize);
        }

        if (!multiple) {
          validFiles = validFiles.slice(0, 1);
        } else if (maxFiles) {
          const remainingSlots = maxFiles - files.length;
          validFiles = validFiles.slice(0, remainingSlots);
        }

        return validFiles;
      },
      [maxSize, multiple, maxFiles, files.length]
    );

    const handleFiles = useCallback(
      (fileList: FileList | null) => {
        if (!fileList || disabled) return;

        const filesArray = Array.from(fileList);
        const validFiles = validateFiles(filesArray);

        if (validFiles.length > 0) {
          onChange?.(validFiles);
        }
      },
      [validateFiles, onChange, disabled]
    );

    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    };

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
        e.preventDefault();
        inputRef.current?.click();
      }
    };

    const combinedRef = (node: HTMLInputElement) => {
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <div className={cn('ds-file-upload', className)}>
        <div
          className={cn(
            'ds-file-upload__dropzone',
            isDragging && 'ds-file-upload__dropzone--dragging',
            disabled && 'ds-file-upload__dropzone--disabled',
            error && 'ds-file-upload__dropzone--error'
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-describedby={error ? `${inputId}-error` : undefined}
        >
          <input
            ref={combinedRef}
            type="file"
            id={inputId}
            className="ds-file-upload__input"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleInputChange}
            {...props}
          />
          <div className="ds-file-upload__content">
            <span className="ds-file-upload__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </span>
            {dropzoneLabel || (
              <div className="ds-file-upload__label">
                <span className="ds-file-upload__label-primary">
                  Dra og slipp filer her, eller <span className="ds-file-upload__link">velg filer</span>
                </span>
                {maxSize && (
                  <span className="ds-file-upload__label-secondary">
                    Maks størrelse: {formatFileSize(maxSize)}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {error && (
          <p id={`${inputId}-error`} className="ds-file-upload__error" role="alert">
            {error}
          </p>
        )}

        {showFileList && files.length > 0 && (
          <ul className="ds-file-upload__list" aria-label="Opplastede filer">
            {files.map((fileItem) => (
              <li key={fileItem.id} className="ds-file-upload__file">
                <div className="ds-file-upload__file-info">
                  <span className="ds-file-upload__file-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </span>
                  <div className="ds-file-upload__file-details">
                    <span className="ds-file-upload__file-name">{fileItem.file.name}</span>
                    <span className="ds-file-upload__file-size">{formatFileSize(fileItem.file.size)}</span>
                  </div>
                </div>
                {fileItem.progress !== undefined && fileItem.progress < 100 && (
                  <div className="ds-file-upload__progress">
                    <div
                      className="ds-file-upload__progress-bar"
                      style={{ width: `${fileItem.progress}%` }}
                      role="progressbar"
                      aria-valuenow={fileItem.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                )}
                {fileItem.error && (
                  <span className="ds-file-upload__file-error">{fileItem.error}</span>
                )}
                {onRemove && (
                  <button
                    type="button"
                    className="ds-file-upload__remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(fileItem);
                    }}
                    aria-label={`Fjern ${fileItem.file.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
