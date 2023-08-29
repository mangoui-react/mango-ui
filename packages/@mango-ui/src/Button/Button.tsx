// 'use client';

import React, { useCallback } from 'react';
// import { UrlObject } from 'url'; // TODO: dependency 안하는 방법으로 찾아보자 @types/node 설치해야 함

import { ComponentBaseProps } from '../types/common';

// import Tooltip from '../Tooltip';

export interface ButtonProps
  extends ComponentBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** 버튼 type */
  type?: 'button' | 'submit' | 'reset';
  /** url */
  href?: string;
  // href?: string | UrlObject;
  as?: React.ElementType;
  /**
   * 값이 true 라면 비활성, false 라면 활성
   * @default false
   */
  disabled?: boolean;
  /** Tooltip */
  // tooltip?: React.ReactNode;
  /** 버튼 클릭시 발생 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      href,
      as: Component = href !== undefined ? 'a' : 'button',
      type = 'button',
      disabled = false,
      // tooltip,
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        onClick?.(e);
      },
      [disabled, onClick],
    );

    // return tooltip ? <Tooltip message={tooltip}>{buttonEl}</Tooltip> : buttonEl;
    const rootProps = {
      ref,
      href,
      type,
      disabled,
      onClick: handleClick,
      ...rest,
    };

    return <Component {...rootProps}>{children}</Component>;
  },
);

Button.displayName = 'Button';

export default Button;
