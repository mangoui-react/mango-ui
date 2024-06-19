import React from 'react';

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'ol'> {
  /**
   * collapse node
   * @default '...'
   */
  collapse?: React.ReactNode;
  /**
   * 보여지는 항목의 최대 개수 설정
   * 최대 개수가 초과되면 처음항목과 마지막 항목, 그 사이는 ... 으로 표시된다.
   * @default 5
   */
  maxItems?: number;
}

/**
 * Breadcrumb 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
// TODO: 현 Breadcrumb 는 BreadcrumbList 로 nav를 Breadcrumb 로 하자.
const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>((props, ref) => {
  const { maxItems = 5, collapse, children, ...rest } = props;

  const [expanded, setExpanded] = React.useState(false);

  const allItems = React.useMemo(() => {
    const items: React.ReactNode[] = [];
    // const count = React.Children.count(children);
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        items.push(child);
      }
    });

    return items;
  }, [children]);

  const renderCollapseItems = React.useCallback(
    (items: React.ReactNode[]) => {
      if (!collapse) {
        console.warn('maxItems 설정 시 collapse 도 설정이 필요합니다.');
        return items;
      }

      return [
        ...items.slice(0, 2),
        React.cloneElement(collapse as React.ReactElement, {
          key: `collapsed-${items.length}`,
          onClick: (event: React.MouseEvent) => {
            setExpanded(true);
            if (React.isValidElement(collapse)) {
              collapse.props.onClick?.(event);
            }
          },
        }),
        ...items.slice(items.length - 2, items.length),
      ];
    },
    [collapse],
  );

  return (
    // <nav ref={ref}  {...rest}>
    //   <ol>
    //     {expanded || (maxItems && allItems.length <= maxItems)
    //       ? allItems
    //       : renderCollapseItems(allItems)}
    //   </ol>
    // </nav>
    <ol ref={ref} {...rest}>
      {expanded || (maxItems && allItems.length <= maxItems)
        ? allItems
        : renderCollapseItems(allItems)}
    </ol>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
