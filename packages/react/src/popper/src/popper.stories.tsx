import React from 'react';

import { Popper } from '.';
import * as styles from './popper.stories.css';

export default { title: 'Utilities/Popper' };

export function Basic(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>기본</h1>
      <Popper.Root>
        <Popper.Anchor
          className={styles.anchor}
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Popper
        </Popper.Anchor>
        {open && (
          <Popper.Content className={styles.content} sideOffset={5}>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              close
            </button>
            <Popper.Arrow className={styles.arrow} width={20} height={10} />
          </Popper.Content>
        )}
      </Popper.Root>
    </>
  );
}

export function WithCustomArrow(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>WithCustomArrow</h1>
      <Popper.Root>
        <Popper.Anchor
          className={styles.anchor}
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Popper
        </Popper.Anchor>
        {open && (
          <Popper.Content className={styles.content} side="right" sideOffset={5}>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              close
            </button>
            <Popper.Arrow offset={20} asChild>
              <CustomArrow width={20} height={10} />
            </Popper.Arrow>
          </Popper.Content>
        )}
      </Popper.Root>
    </>
  );
}

function CustomArrow(props: any): React.JSX.Element {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        width: 20,
        height: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'tomato',
      }}
    />
  );
}

// export function OnOpenChange(): React.JSX.Element {
//   const [open, setOpen] = React.useState<boolean>(false);

//   const onOpenChange = (isOpen: boolean): void => {
//     setOpen(isOpen);
//   };

//   return (
//     <>
//       <h1>onOpenChange</h1>
//       <Popover.Root open={open} onOpenChange={onOpenChange}>
//         <Popover.Trigger asChild>
//           <button type="button">Open Popover</button>
//         </Popover.Trigger>
//         <Popover.Portal>
//           <Popover.Content className={styles.content}>
//             <div style={{ padding: 10 }}>This is a Popover Content</div>
//           </Popover.Content>
//         </Popover.Portal>
//       </Popover.Root>
//     </>
//   );
// }

// export function CloseOnBlur(): React.JSX.Element {
//   return (
//     <>
//       <h1>closeOnBlur (closeOnBlur=false)</h1>
//       <Popover.Root>
//         <Popover.Trigger asChild>
//           <button type="button">Open Popover</button>
//         </Popover.Trigger>
//         <Popover.Portal>
//           <Popover.Content className={styles.content} closeOnBlur={false}>
//             <div style={{ padding: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
//               This is a Popover Content
//               <Popover.Close asChild>
//                 <button type="button">닫기</button>
//               </Popover.Close>
//             </div>
//           </Popover.Content>
//         </Popover.Portal>
//       </Popover.Root>
//     </>
//   );
// }

// export function DestroyOnClose(): React.JSX.Element {
//   return (
//     <>
//       <h1>destroyOnClose (false)</h1>
//       <Popover.Root>
//         <Popover.Trigger asChild>
//           <button type="button">Open Popover</button>
//         </Popover.Trigger>
//         <Popover.Portal>
//           <Popover.Content className={styles.content} destroyOnClose={false}>
//             <div style={{ padding: 10 }}>This is a Popover Content</div>
//           </Popover.Content>
//         </Popover.Portal>
//       </Popover.Root>
//     </>
//   );
// }

// export function ForceMount(): React.JSX.Element {
//   return (
//     <>
//       <h1>forceMount</h1>
//       <Popover.Root>
//         <Popover.Trigger asChild>
//           <button type="button">Open Popover</button>
//         </Popover.Trigger>
//         <Popover.Portal>
//           <Popover.Content className={styles.content} forceMount>
//             <div style={{ padding: 10 }}>This is a Popover Content</div>
//           </Popover.Content>
//         </Popover.Portal>
//       </Popover.Root>
//     </>
//   );
// }

// export function Position(): React.JSX.Element {
//   return (
//     <>
//       <h1>Position</h1>
//       <h3>
//         triggerPosition: bottom, right <br />
//         contentPosition: top, left
//       </h3>
//       <Popover.Root>
//         <Popover.Trigger asChild>
//           <button type="button">Open Popover</button>
//         </Popover.Trigger>
//         <Popover.Portal>
//           <Popover.Content
//             className={styles.content}
//             triggerPosition={{ vertical: 'bottom', horizontal: 'right' }}
//             contentPosition={{ vertical: 'top', horizontal: 'left' }}
//           >
//             <div style={{ padding: 10 }}>This is a Popover Content</div>
//           </Popover.Content>
//         </Popover.Portal>
//       </Popover.Root>

//       <div style={{ width: '100%', height: 30 }} />
//       <h3>맨 우측 위치시</h3>
//       <div style={{ display: 'flex', gap: 5 }}>
//         <div style={{ width: '100%' }} />
//         <Popover.Root>
//           <Popover.Trigger asChild>
//             <button type="button" style={{ whiteSpace: 'nowrap' }}>
//               Open Popover
//             </button>
//           </Popover.Trigger>
//           <Popover.Portal>
//             <Popover.Content className={styles.content}>
//               <div style={{ padding: 10, whiteSpace: 'nowrap' }}>This is a Popover Content</div>
//             </Popover.Content>
//           </Popover.Portal>
//         </Popover.Root>
//       </div>
//     </>
//   );
// }

// export function Container(): React.JSX.Element {
//   // const containerRef = React.useRef(null);
//   const [container, setContainer] = React.useState<HTMLElement>();

//   React.useEffect(() => {
//     setContainer(document.getElementById('container') as HTMLElement);
//   }, []);

//   return (
//     <>
//       <h1>Container</h1>
//       {/* <div ref={containerRef} /> */}
//       <div id="container" />
//       <Popover.Root>
//         <Popover.Trigger asChild>
//           <button type="button">Open Popover</button>
//         </Popover.Trigger>
//         <Popover.Portal container={container}>
//           {/* container={containerRef.current} */}
//           <Popover.Content className={styles.content}>
//             <div style={{ padding: 10 }}>This is a Popover Content</div>
//           </Popover.Content>
//         </Popover.Portal>
//       </Popover.Root>
//     </>
//   );
// }
