import Backdrop from '../Modal/ModalBackdrop';
import Body from '../Modal/ModalBody';
import Close from '../Modal/ModalClose';
import CloseButton from '../Modal/ModalCloseButton';
import Footer from '../Modal/ModalFooter';
import Header from '../Modal/ModalHeader';
import Portal from '../Modal/ModalPortal';
import Trigger from '../Modal/ModalTrigger';
//
import Root from './Drawer';
import Content from './DrawerContent';

export * from './Drawer';
export * from './DrawerContent';

// export {
//   ModalTrigger as DrawerTrigger,
//   ModalPortal as DrawerPortal,
//   // ModalContent as DrawerContent,
//   ModalHeader as DrawerHeader,
//   ModalBody as DrawerBody,
//   ModalFooter as DrawerFooter,
//   ModalClose as DrawerClose,
//   ModalCloseButton as DrawerCloseButton,
//   ModalBackdrop as DrawerBackdrop,
// } from '../Modal';

export type {
  ModalTriggerProps as DrawerTriggerProps,
  ModalPortalProps as DrawerPortalProps,
  // ModalContentProps as DrawerContentProps,
  ModalHeaderProps as DrawerHeaderProps,
  ModalBodyProps as DrawerBodyProps,
  ModalFooterProps as DrawerFooterProps,
  ModalCloseProps as DrawerCloseProps,
  ModalCloseButtonProps as DrawerCloseButtonProps,
  ModalBackdropProps as DrawerBackdropProps,
} from '../Modal';

const Drawer = {
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

export default Drawer;
