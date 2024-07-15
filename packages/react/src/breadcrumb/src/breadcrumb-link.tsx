import React from 'react';

import { Slot } from '@melio-ui/slot';

// TODO: dependency 안하는 방법으로 찾아보자. @types/node 설치해야 함
// import { UrlObject } from 'url';

export interface BreadcrumbLinkProps extends React.Attributes {
  /** css class 이름 */
  className?: string;
  /** 버튼 컴포넌트의 컨텐츠 */
  children?: React.ReactNode;
  /** style */
  style?: React.CSSProperties;
  /** custom element */
  as?: React.ElementType;
  /** link url */
  // href?: string | UrlObject;
  href?: string;
  /** React/Reach Router Link to */
  to?: string;
  asChild?: boolean;
  /** click 시 발생 */
  onClick?: (event: React.MouseEvent) => void;
}

const BreadcrumbLink = React.forwardRef<HTMLElement, BreadcrumbLinkProps>(
  (props, ref): JSX.Element => {
    const {
      href,
      to,
      as: ComponentProp = href !== undefined ? 'a' : 'span',
      children,
      asChild,
      ...rest
    } = props;

    const Component = asChild ? Slot : ComponentProp;

    return (
      <Component {...rest} ref={ref} href={href} to={to}>
        {children}
      </Component>
    );
  },
);

BreadcrumbLink.displayName = 'Breadcrumb.Link';

export default BreadcrumbLink;
