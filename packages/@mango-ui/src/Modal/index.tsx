// export { default } from './Modal';
// export { default as ModalTrigger } from './ModalTrigger';
// export { default as ModalPortal } from './ModalPortal';
// export { default as ModalContent } from './ModalContent';
// export { default as ModalHeader } from './ModalHeader';
// export { default as ModalBody } from './ModalBody';
// export { default as ModalFooter } from './ModalFooter';
// export { default as ModalClose } from './ModalClose';
// export { default as ModalCloseButton } from './ModalCloseButton';
// export { default as ModalBackdrop } from './ModalBackdrop';
import Root from './Modal';
import Backdrop from './ModalBackdrop';
import Body from './ModalBody';
import Close from './ModalClose';
import CloseButton from './ModalCloseButton';
import Content from './ModalContent';
import Footer from './ModalFooter';
import Header from './ModalHeader';
import Portal from './ModalPortal';
import Trigger from './ModalTrigger';

export * from './Modal';
export * from './ModalTrigger';
export * from './ModalPortal';
export * from './ModalContent';
export * from './ModalHeader';
export * from './ModalBody';
export * from './ModalFooter';
export * from './ModalClose';
export * from './ModalCloseButton';
export * from './ModalBackdrop';

const Modal = {
  Root,
  Trigger,
  Portal,
  Content,
  Header,
  Body,
  Footer,
  Close,
  CloseButton,
  Backdrop,
};

export default Modal;
