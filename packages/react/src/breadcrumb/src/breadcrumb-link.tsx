import React from 'react';

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
  /** click 시 발생 */
  onClick?: (event: React.MouseEvent) => void;
}

const BreadcrumbLink = (props: BreadcrumbLinkProps): JSX.Element => {
  const { href, to, as: Component = href !== undefined ? 'a' : 'span', children, ...rest } = props;

  return (
    <Component href={href} to={to} {...rest}>
      {children}
    </Component>
  );
};

BreadcrumbLink.displayName = 'Breadcrumb.Link';

export default BreadcrumbLink;
