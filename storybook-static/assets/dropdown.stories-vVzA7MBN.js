import{j as o}from"./jsx-runtime-bkLU2cdM.js";import{R as s}from"./index-eK40FDle.js";import{P as I,a as Q}from"./index-mrJWxNCz.js";import"./use-controlled-3NL49yyH.js";import"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";import"./use-portal-_c5zPIwn.js";import"./index-fcRgSpbG.js";const U=Q,h=t=>{const{children:r,...d}=t;return o.jsx(I.Root,{...d,children:r})};h.displayName="Dropdown";const W=h;h.__docgenInfo={description:"",methods:[],displayName:"Dropdown",composes:["PopoverProps"]};const x=s.forwardRef((t,r)=>o.jsx(I.Close,{ref:r,...t}));x.displayName="Dropdown.Close";const Y=x;x.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Close"};const V=s.createContext({closeOnItemClick:!0}),j=s.forwardRef((t,r)=>{const{closeOnItemClick:d=!0,...u}=t,m=s.useMemo(()=>({closeOnItemClick:d}),[d]);return o.jsx(V.Provider,{value:m,children:o.jsx(I.Content,{ref:r,role:"menu",...u})})});j.displayName="Dropdown.Content";const Z=j;j.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Content"};const N=s.forwardRef((t,r)=>{const{disabled:d,children:u,onClick:m,...$}=t,{handleClose:q}=s.useContext(U),{closeOnItemClick:A}=s.useContext(V),G=K=>{d||(m==null||m(K),A&&q())};return o.jsx("div",{"data-disabled":d?"":void 0,...$,ref:r,role:"menuitem",tabIndex:-1,onClick:G,children:u})});N.displayName="Dropdown.Item";const oo=N;N.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Item"};function g(t){return o.jsx(I.Portal,{...t})}g.displayName="Dropdown.Portal";g.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Portal",composes:["PopoverPortalProps"]};const C=s.forwardRef((t,r)=>o.jsx(I.Trigger,{ref:r,...t}));C.displayName="Dropdown.Trigger";const eo=C;C.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Trigger"};const e={Root:W,Trigger:eo,Portal:g,Content:Z,Item:oo,Close:Y};var a="_124j9wr0",y="_124j9wr2",n="_124j9wr1",no="_124j9wr4",f="_124j9wr3";const po={title:"Components/Dropdown"};function i(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"기본"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Dropdown"})}),o.jsx(e.Portal,{children:o.jsxs(e.Content,{className:a,children:[o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]})})]})]})}function l(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"destroyOnClose (false)"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Dropdown"})}),o.jsx(e.Portal,{children:o.jsxs(e.Content,{className:a,destroyOnClose:!1,children:[o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]})})]})]})}function c(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"forceMount"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Dropdown"})}),o.jsx(e.Portal,{children:o.jsxs(e.Content,{className:a,forceMount:!0,children:[o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]})})]})]})}function p(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Position"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Dropdown"})}),o.jsx(e.Portal,{children:o.jsxs(e.Content,{className:a,triggerPosition:{vertical:"bottom",horizontal:"right"},contentPosition:{vertical:"top",horizontal:"left"},children:[o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]})})]})]})}function w(){const[t,r]=s.useState();return s.useEffect(()=>{r(document.getElementById("container"))},[]),o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Container"}),o.jsx("div",{id:"container"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Dropdown"})}),o.jsx(e.Portal,{container:t,children:o.jsxs(e.Content,{className:a,children:[o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]})})]})]})}function D(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Custom"}),o.jsxs(e.Root,{children:[o.jsx(e.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",children:"Dropdown"})}),o.jsx(e.Portal,{children:o.jsxs(e.Content,{className:a,children:[o.jsxs("div",{className:y,children:[o.jsx("div",{className:f,children:"제목1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,disabled:!0,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]}),o.jsx("div",{role:"separator",className:no}),o.jsxs("div",{className:y,children:[o.jsx("div",{className:f,children:"제목2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 1"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 2"}),o.jsx(e.Item,{className:n,children:"DropdownItem - 3"})]})]})})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};l.__docgenInfo={description:"",methods:[],displayName:"DestroyOnClose"};c.__docgenInfo={description:"",methods:[],displayName:"ForceMount"};p.__docgenInfo={description:"",methods:[],displayName:"Position"};w.__docgenInfo={description:"",methods:[],displayName:"Container"};D.__docgenInfo={description:"",methods:[],displayName:"Custom"};var P,b,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>;
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var R,_,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`function DestroyOnClose(): JSX.Element {
  return <>
      <h1>destroyOnClose (false)</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content} destroyOnClose={false}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>;
}`,...(T=(_=l.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var E,S,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`function ForceMount(): JSX.Element {
  return <>
      <h1>forceMount</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content} forceMount>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>;
}`,...(O=(S=c.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var M,F,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`function Position(): JSX.Element {
  return <>
      <h1>Position</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content} triggerPosition={{
          vertical: 'bottom',
          horizontal: 'right'
        }} contentPosition={{
          vertical: 'top',
          horizontal: 'left'
        }}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>;
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var J,X,k;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`function Container(): JSX.Element {
  // const containerRef = React.useRef(null);
  const [container, setContainer] = React.useState<HTMLElement>();
  React.useEffect(() => {
    setContainer((document.getElementById('container') as HTMLElement));
  }, []);
  return <>
      <h1>Container</h1>
      {/* <div ref={containerRef} /> */}
      <div id="container" />
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal container={container}>
          <Dropdown.Content className={styles.content}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>;
}`,...(k=(X=w.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};var z,H,L;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`function Custom(): JSX.Element {
  return <>
      <h1>Custom</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content}>
            <div className={styles.group}>
              <div className={styles.title}>제목1</div>
              <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
              <Dropdown.Item className={styles.item} disabled>
                DropdownItem - 2
              </Dropdown.Item>
              <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
            </div>
            <div role="separator" className={styles.separator} />
            <div className={styles.group}>
              <div className={styles.title}>제목2</div>
              <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
              <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
              <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
            </div>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>;
}`,...(L=(H=D.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const wo=["Basic","DestroyOnClose","ForceMount","Position","Container","Custom"];export{i as Basic,w as Container,D as Custom,l as DestroyOnClose,c as ForceMount,p as Position,wo as __namedExportsOrder,po as default};
