import{j as o}from"./jsx-runtime-bkLU2cdM.js";import{R as d}from"./index-eK40FDle.js";import{D as e}from"./index-02ZOFDzY.js";import"./use-controlled-3NL49yyH.js";import"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";import"./use-portal-_c5zPIwn.js";import"./index-fcRgSpbG.js";var s="_1ly7zc40",n="_1ly7zc45",a="_1ly7zc43",l="_1ly7zc42",r="_1ly7zc46";const to={title:"Components/Dialog"};function h(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"기본"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function p(){const[t,c]=d.useState(!1),g=u=>{c(u)};return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"OnOpenChange"}),o.jsxs(e.Root,{open:t,onOpenChange:g,children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function C(){const[t,c]=d.useState(800),[g,u]=d.useState(!1),G=j=>{c(Number(j.target.value))},K=j=>{u(j.target.checked)};return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Width"}),o.jsxs("div",{children:["Dialog width:"," ",o.jsx("input",{value:t.toString(),onChange:G,style:{width:50,minWidth:0,position:"relative",border:"1px solid var(--border)",backgroundColor:"var(--component-bg)",color:"inherit",padding:"5px 11px",lineHeight:1,fontSize:"1rem"}}),"px ",o.jsx("input",{type:"checkbox",onChange:K}),"Full"]}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,style:{...g?{width:"100%"}:{width:t}},children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function m(){const[t,c]=d.useState(30),g=u=>{c(Number(u.target.value))};return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"TopPosition"}),o.jsxs("div",{children:["Dialog top:"," ",o.jsx("input",{value:t.toString(),onChange:g,style:{width:50,minWidth:0,position:"relative",border:"1px solid var(--border)",backgroundColor:"var(--component-bg)",color:"inherit",padding:"5px 11px",lineHeight:1,fontSize:"1rem"}}),"px"]}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,style:{top:t},children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function b(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"preventCloseOnClick"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s,preventCloseOnClick:!0}),o.jsxs(e.Content,{className:l,children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function y(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"destroyOnClose"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,destroyOnClose:!1,children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function x(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"forceMount"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,forceMount:!0,children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function D(){const[t,c]=d.useState();return d.useEffect(()=>{c(document.getElementById("container"))},[]),o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Container"}),o.jsx("div",{id:"container"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Open Dialog"})}),o.jsxs(e.Portal,{container:t,children:[o.jsx(e.Backdrop,{className:s}),o.jsxs(e.Content,{className:l,children:[o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",className:a,children:o.jsx(i,{})})}),o.jsx("div",{className:n,children:"Dialog Content"}),o.jsx("div",{className:r,children:o.jsx(e.Close,{asChild:!0,children:o.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"닫기"})})})]})]})]})]})}function i(t){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t,children:o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor"})})}h.__docgenInfo={description:"",methods:[],displayName:"Basic"};p.__docgenInfo={description:"",methods:[],displayName:"OnOpenChange"};C.__docgenInfo={description:"",methods:[],displayName:"Width"};m.__docgenInfo={description:"",methods:[],displayName:"TopPosition"};b.__docgenInfo={description:"",methods:[],displayName:"Backdrop"};y.__docgenInfo={description:"",methods:[],displayName:"DestroyOnClose"};x.__docgenInfo={description:"",methods:[],displayName:"ForceMount"};D.__docgenInfo={description:"",methods:[],displayName:"Container"};var v,N,k;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var f,R,O;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`function OnOpenChange(): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpenChange = (isOpen: boolean): void => {
    setOpen(isOpen);
  };
  return <>
      <h1>OnOpenChange</h1>
      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var T,B,S;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`function Width(): JSX.Element {
  const [width, setWidth] = React.useState<number>(800);
  const [isFull, setIsFull] = React.useState<boolean>(false);
  const onWidthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWidth(Number(event.target.value));
  };
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsFull(event.target.checked);
  };
  return <>
      <h1>Width</h1>
      <div>
        Dialog width:{' '}
        <input value={width.toString()} onChange={onWidthChange} style={{
        width: 50,
        minWidth: 0,
        position: 'relative',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--component-bg)',
        color: 'inherit',
        padding: '5px 11px',
        lineHeight: 1,
        fontSize: '1rem'
      }} />
        px <input type="checkbox" onChange={handleCheckChange} />
        Full
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} style={{
          ...(isFull ? {
            width: '100%'
          } : {
            width
          })
        }}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(S=(B=C.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var P,I,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`function TopPosition(): JSX.Element {
  const [top, setTop] = React.useState<number>(30);
  const onTopChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTop(Number(event.target.value));
  };
  return <>
      <h1>TopPosition</h1>
      <div>
        Dialog top:{' '}
        <input value={top.toString()} onChange={onTopChange} style={{
        width: 50,
        minWidth: 0,
        position: 'relative',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--component-bg)',
        color: 'inherit',
        padding: '5px 11px',
        lineHeight: 1,
        fontSize: '1rem'
      }} />
        px
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} style={{
          top
        }}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var E,F,w;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`function Backdrop(): JSX.Element {
  return <>
      <h1>preventCloseOnClick</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} preventCloseOnClick />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(w=(F=b.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var W,M,z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`function DestroyOnClose(): JSX.Element {
  return <>
      <h1>destroyOnClose</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} destroyOnClose={false}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(z=(M=y.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var H,J,X;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`function ForceMount(): JSX.Element {
  return <>
      <h1>forceMount</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} forceMount>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var L,q,A;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`function Container(): JSX.Element {
  const [container, setContainer] = React.useState<HTMLElement>();
  React.useEffect(() => {
    setContainer((document.getElementById('container') as HTMLElement));
  }, []);
  return <>
      <h1>Container</h1>
      <div id="container" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>;
}`,...(A=(q=D.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const so=["Basic","OnOpenChange","Width","TopPosition","Backdrop","DestroyOnClose","ForceMount","Container"];export{b as Backdrop,h as Basic,D as Container,y as DestroyOnClose,x as ForceMount,p as OnOpenChange,m as TopPosition,C as Width,so as __namedExportsOrder,to as default};
