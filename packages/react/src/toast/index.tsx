// export { default } from './Toast';
// export { default as ToastContent } from './ToastContent';
// export { default as ToastViewport } from './ToastViewport';
// export { default as ToastTitle } from './ToastTitle';
// export { default as ToastDescription } from './ToastDescription';
// export { default as ToastAction } from './ToastAction';
// export { default as ToastClose } from './ToastClose';
import Root from './Toast';
import Close from './ToastClose';
import Content from './ToastContent';
import Viewport from './ToastViewport';

export * from './Toast';
export * from './ToastContent';
export * from './ToastViewport';
export * from './ToastClose';

const Toast = {
  Root,
  Close,
  Content,
  Viewport,
};

export default Toast;
