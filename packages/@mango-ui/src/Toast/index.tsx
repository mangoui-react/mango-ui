// export { default } from './Toast';
// export { default as ToastContent } from './ToastContent';
// export { default as ToastViewport } from './ToastViewport';
// export { default as ToastTitle } from './ToastTitle';
// export { default as ToastDescription } from './ToastDescription';
// export { default as ToastAction } from './ToastAction';
// export { default as ToastClose } from './ToastClose';
import Root from './Toast';
import Action from './ToastAction';
import Close from './ToastClose';
import Content from './ToastContent';
import Description from './ToastDescription';
import Title from './ToastTitle';
import Viewport from './ToastViewport';

export * from './Toast';
export * from './ToastContent';
export * from './ToastViewport';
export * from './ToastTitle';
export * from './ToastDescription';
export * from './ToastAction';
export * from './ToastClose';

const Toast = {
  Root,
  Action,
  Close,
  Content,
  Description,
  Title,
  Viewport,
};

export default Toast;
