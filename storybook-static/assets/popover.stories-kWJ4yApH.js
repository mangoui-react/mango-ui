import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as h}from"./index-eK40FDle.js";import{P as o}from"./index-mrJWxNCz.js";import"./use-controlled-3NL49yyH.js";import"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";import"./use-portal-_c5zPIwn.js";import"./index-fcRgSpbG.js";var n="_1ux9vvw0";const A={title:"Components/Popover"};function t(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,children:e.jsx("div",{style:{padding:10},children:"This is a Popover Content"})})})]})]})}function r(){const[c,d]=h.useState(!1),I=M=>{d(M)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"onOpenChange"}),e.jsxs(o.Root,{open:c,onOpenChange:I,children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,children:e.jsx("div",{style:{padding:10},children:"This is a Popover Content"})})})]})]})}function s(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"closeOnBlur (closeOnBlur=false)"}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,closeOnBlur:!1,children:e.jsxs("div",{style:{padding:10,display:"flex",gap:10,alignItems:"center"},children:["This is a Popover Content",e.jsx(o.Close,{asChild:!0,children:e.jsx("button",{type:"button",children:"닫기"})})]})})})]})]})}function i(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"destroyOnClose (false)"}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,destroyOnClose:!1,children:e.jsx("div",{style:{padding:10},children:"This is a Popover Content"})})})]})]})}function a(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"forceMount"}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,forceMount:!0,children:e.jsx("div",{style:{padding:10},children:"This is a Popover Content"})})})]})]})}function l(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Position"}),e.jsxs("h3",{children:["triggerPosition: bottom, right ",e.jsx("br",{}),"contentPosition: top, left"]}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,triggerPosition:{vertical:"bottom",horizontal:"right"},contentPosition:{vertical:"top",horizontal:"left"},children:e.jsx("div",{style:{padding:10},children:"This is a Popover Content"})})})]}),e.jsx("div",{style:{width:"100%",height:30}}),e.jsx("h3",{children:"맨 우측 위치시"}),e.jsxs("div",{style:{display:"flex",gap:5},children:[e.jsx("div",{style:{width:"100%"}}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",style:{whiteSpace:"nowrap"},children:"Open Popover"})}),e.jsx(o.Portal,{children:e.jsx(o.Content,{className:n,children:e.jsx("div",{style:{padding:10,whiteSpace:"nowrap"},children:"This is a Popover Content"})})})]})]})]})}function p(){const[c,d]=h.useState();return h.useEffect(()=>{d(document.getElementById("container"))},[]),e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Container"}),e.jsx("div",{id:"container"}),e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Popover"})}),e.jsx(o.Portal,{container:c,children:e.jsx(o.Content,{className:n,children:e.jsx("div",{style:{padding:10},children:"This is a Popover Content"})})})]})]})}t.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"OnOpenChange"};s.__docgenInfo={description:"",methods:[],displayName:"CloseOnBlur"};i.__docgenInfo={description:"",methods:[],displayName:"DestroyOnClose"};a.__docgenInfo={description:"",methods:[],displayName:"ForceMount"};l.__docgenInfo={description:"",methods:[],displayName:"Position"};p.__docgenInfo={description:"",methods:[],displayName:"Container"};var v,P,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content}>
            <div style={{
            padding: 10
          }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>;
}`,...(u=(P=t.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};var g,m,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`function OnOpenChange(): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const onOpenChange = (isOpen: boolean): void => {
    setOpen(isOpen);
  };
  return <>
      <h1>onOpenChange</h1>
      <Popover.Root open={open} onOpenChange={onOpenChange}>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content}>
            <div style={{
            padding: 10
          }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>;
}`,...(C=(m=r.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var x,j,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`function CloseOnBlur(): JSX.Element {
  return <>
      <h1>closeOnBlur (closeOnBlur=false)</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} closeOnBlur={false}>
            <div style={{
            padding: 10,
            display: 'flex',
            gap: 10,
            alignItems: 'center'
          }}>
              This is a Popover Content
              <Popover.Close asChild>
                <button type="button">닫기</button>
              </Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>;
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,O,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`function DestroyOnClose(): JSX.Element {
  return <>
      <h1>destroyOnClose (false)</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} destroyOnClose={false}>
            <div style={{
            padding: 10
          }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>;
}`,...(b=(O=i.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var T,R,N;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`function ForceMount(): JSX.Element {
  return <>
      <h1>forceMount</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} forceMount>
            <div style={{
            padding: 10
          }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>;
}`,...(N=(R=a.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var S,_,B;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`function Position(): JSX.Element {
  return <>
      <h1>Position</h1>
      <h3>
        triggerPosition: bottom, right <br />
        contentPosition: top, left
      </h3>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} triggerPosition={{
          vertical: 'bottom',
          horizontal: 'right'
        }} contentPosition={{
          vertical: 'top',
          horizontal: 'left'
        }}>
            <div style={{
            padding: 10
          }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <div style={{
      width: '100%',
      height: 30
    }} />
      <h3>맨 우측 위치시</h3>
      <div style={{
      display: 'flex',
      gap: 5
    }}>
        <div style={{
        width: '100%'
      }} />
        <Popover.Root>
          <Popover.Trigger asChild>
            <button type="button" style={{
            whiteSpace: 'nowrap'
          }}>
              Open Popover
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className={styles.content}>
              <div style={{
              padding: 10,
              whiteSpace: 'nowrap'
            }}>This is a Popover Content</div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </>;
}`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var E,w,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`function Container(): JSX.Element {
  // const containerRef = React.useRef(null);
  const [container, setContainer] = React.useState<HTMLElement>();
  React.useEffect(() => {
    setContainer((document.getElementById('container') as HTMLElement));
  }, []);
  return <>
      <h1>Container</h1>
      {/* <div ref={containerRef} /> */}
      <div id="container" />
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal container={container}>
          {/* container={containerRef.current} */}
          <Popover.Content className={styles.content}>
            <div style={{
            padding: 10
          }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>;
}`,...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const G=["Basic","OnOpenChange","CloseOnBlur","DestroyOnClose","ForceMount","Position","Container"];export{t as Basic,s as CloseOnBlur,p as Container,i as DestroyOnClose,a as ForceMount,r as OnOpenChange,l as Position,G as __namedExportsOrder,A as default};
