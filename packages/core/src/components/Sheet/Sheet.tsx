import {
  forwardRef,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence, useDragControls, type PanInfo } from 'motion/react';
import { cn } from '../../utils/cn';
import './Sheet.css';

export type SheetPosition = 'bottom' | 'right' | 'left';
export type SheetSize = 'sm' | 'md' | 'lg' | 'full';

export interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: SheetPosition;
  size?: SheetSize;
  children: ReactNode;
  dismissible?: boolean;
  snapPoints?: number[];
  modal?: boolean;
  className?: string;
}

const DRAG_CLOSE_THRESHOLD = 100;

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  (
    {
      open,
      onOpenChange,
      position = 'bottom',
      size = 'md',
      children,
      dismissible = true,
      modal = true,
      className,
    },
    ref
  ) => {
    const dragControls = useDragControls();
    const constraintsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (open && modal) {
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open, modal]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open && dismissible) {
          onOpenChange(false);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, dismissible, onOpenChange]);

    const handleDragEnd = (_: never, info: PanInfo) => {
      if (!dismissible) return;

      const shouldClose =
        (position === 'bottom' && info.offset.y > DRAG_CLOSE_THRESHOLD) ||
        (position === 'right' && info.offset.x > DRAG_CLOSE_THRESHOLD) ||
        (position === 'left' && info.offset.x < -DRAG_CLOSE_THRESHOLD);

      if (shouldClose) {
        onOpenChange(false);
      }
    };

    const getInitialPosition = () => {
      switch (position) {
        case 'bottom':
          return { y: '100%' };
        case 'right':
          return { x: '100%' };
        case 'left':
          return { x: '-100%' };
      }
    };

    const getDragConstraints = () => {
      switch (position) {
        case 'bottom':
          return { top: 0, bottom: 0 };
        case 'right':
          return { left: 0, right: 0 };
        case 'left':
          return { left: 0, right: 0 };
      }
    };

    const getDragDirection = (): 'x' | 'y' => {
      return position === 'bottom' ? 'y' : 'x';
    };

    return (
      <AnimatePresence>
        {open && (
          <div
            ref={constraintsRef}
            className={cn('ds-sheet-container', modal && 'ds-sheet-container--modal')}
          >
            {modal && (
              <motion.div
                className="ds-sheet-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => dismissible && onOpenChange(false)}
                aria-hidden="true"
              />
            )}
            <motion.div
              ref={ref}
              role="dialog"
              aria-modal={modal}
              className={cn(
                'ds-sheet',
                `ds-sheet--${position}`,
                `ds-sheet--${size}`,
                className
              )}
              initial={getInitialPosition()}
              animate={{ x: 0, y: 0 }}
              exit={getInitialPosition()}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              drag={dismissible ? getDragDirection() : false}
              dragControls={dragControls}
              dragConstraints={getDragConstraints()}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {dismissible && position === 'bottom' && (
                <div
                  className="ds-sheet__handle"
                  onPointerDown={(e) => dragControls.start(e)}
                >
                  <div className="ds-sheet__handle-bar" />
                </div>
              )}
              <div className="ds-sheet__content">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

Sheet.displayName = 'Sheet';
