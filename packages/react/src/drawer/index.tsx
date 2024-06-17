import Backdrop from '../modal/ModalBackdrop';
import Close from '../modal/ModalClose';
import CloseButton from '../modal/ModalCloseButton';
import Portal from '../modal/ModalPortal';
import Trigger from '../modal/ModalTrigger';
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
// } from '../modal';

export type {
  ModalTriggerProps as DrawerTriggerProps,
  ModalPortalProps as DrawerPortalProps,
  ModalCloseProps as DrawerCloseProps,
  ModalCloseButtonProps as DrawerCloseButtonProps,
  ModalBackdropProps as DrawerBackdropProps,
} from '../modal';

const Drawer = {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  CloseButton,
  Backdrop,
};

export default Drawer;
