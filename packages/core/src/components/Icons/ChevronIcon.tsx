import type { SVGProps } from 'react';

export interface ChevronIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const rotations = {
  up: 180,
  down: 0,
  left: 90,
  right: -90,
} as const;

export function ChevronIcon({ size = 16, direction = 'down', style, ...props }: ChevronIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ transform: `rotate(${rotations[direction]}deg)`, ...style }}
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
