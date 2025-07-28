import { type HTMLAttributes } from 'react';

export type SelectValue = string | string[];

// export interface SelectContentProps extends HTMLAttributes<HTMLDivElement> {
//   asChild?: boolean;
//   align?: 'start' | 'center' | 'end';
//   side?: 'top' | 'right' | 'bottom' | 'left';
//   sideOffset?: number;
//   alignOffset?: number;
//   avoidCollisions?: boolean;
//   collisionPadding?: number;
//   sticky?: 'partial' | 'always';
//   hideWhenDetached?: boolean;
// }

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
  asChild?: boolean;
}

export interface SelectLabelProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface SelectGroupProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
