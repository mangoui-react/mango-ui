import React from 'react';

import Modal, { ModalProps } from '../modal';

export interface DrawerProps extends ModalProps {
  /** drawer 열리는 위치
   * @default right
   */
  placement?: 'top' | 'bottom' | 'right' | 'left';
}

export interface DrawerContextValue extends Pick<DrawerProps, 'placement'> {}
export const DrawerContext = React.createContext<DrawerContextValue>({});
/**
 * 드로어 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
export default function Drawer(props: DrawerProps): JSX.Element {
  const { open, placement = 'right', children, ...rest } = props;

  // 애니메이션은 app 에서 처리 - eds 는 animation prop 만 제공
  // const defaultAnimation = React.useMemo(() => {
  //   let from = { transform: 'translateX(100%)' };
  //   let to = { transform: 'translateX(0%)' };

  //   if (placement === 'left') {
  //     from = { transform: 'translateX(-100%)' };
  //     to = { transform: 'translateX(0%)' };
  //   } else if (placement === 'top') {
  //     from = { transform: 'translateY(-100%)' };
  //     to = { transform: 'translateY(0%)' };
  //   } else if (placement === 'bottom') {
  //     from = { transform: 'translateY(100%)' };
  //     to = { transform: 'translateY(0%)' };
  //   }

  //   return {
  //     // keyframes: [{ [placement]: `calc(-1 * ${_size})` }, { [placement]: '0px' }],
  //     keyframes: [from, to],
  //     options: 200,
  //   };
  // }, [placement]);

  const contextValue = React.useMemo(
    () => ({
      placement,
    }),
    [placement],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <Modal.Root
        role="presentation"
        open={open}
        // animation={defaultAnimation}
        {...rest}
      >
        {children}
      </Modal.Root>
    </DrawerContext.Provider>
  );
}

Drawer.displayName = 'Drawer';
