import React from 'react';

export interface ComponentBaseProps {
  /** css class 이름 */
  className?: string;
  /** 버튼 컴포넌트의 컨텐츠 */
  children?: React.ReactNode;
  /** style */
  style?: React.CSSProperties;
}

// TODO: 아래 rule은 좀 더 알아보고 rule 대로 하자
// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace TypeAttributes {
  type Size = 'sm' | 'md' | 'lg';
  type Orientation = 'horizontal' | 'vertical';
  type Variant = 'default' | 'primary' | 'link' | 'ghost' | 'dashed';
  // type Status = 'info' | 'success' | 'warning' | 'error';
  type OverlayTrigger = 'hover' | 'click';
  // type Placement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
  type OverlayPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'auto'
    | 'auto-start'
    | 'auto-end';
}

// export type As = React.ElementType | string = React.ElementType;
// export interface WithAsProps<As extends React.ElementType | string = React.ElementType>
//   extends StandardProps {
//   /** You can use a custom element for this component */
//   as?: As;
// }
