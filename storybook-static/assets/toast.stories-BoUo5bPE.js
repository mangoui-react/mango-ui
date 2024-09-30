import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as o}from"./index-eK40FDle.js";import{u as B}from"./use-controlled-3NL49yyH.js";import{S as J}from"./slot-Ej57t_-l.js";import{b as X}from"./index-fcRgSpbG.js";import{u as G}from"./use-merged-ref-IdjoZWBX.js";const b=o.createContext({duration:5e3,viewport:null,onViewportChange:n=>{},handleOpen:()=>{},handleClose:()=>{}});function x(n){const{open:t,defaultOpen:l,duration:i=5e3,children:r,onOpenChange:s}=n,[c,d]=B(t,l),[p,u]=o.useState(null),m=o.useCallback(()=>{c||(d(!0),s==null||s(!0))},[s,c,d]),w=o.useCallback(()=>{d(!1),s==null||s(!1)},[s,d]),F=o.useMemo(()=>({open:c,duration:i,viewport:p,onViewportChange:u,handleOpen:m,handleClose:w}),[i,w,m,c,p]);return e.jsx(b.Provider,{value:F,children:r})}x.displayName="Toast";x.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!1,tsType:{name:"boolean"},description:"Toast open 여부"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},duration:{required:!1,tsType:{name:"number"},description:`보여지는 시간 - milliseconds
@default 5000`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const j=o.forwardRef((n,t)=>{const{children:l,asChild:i,onClick:r,...s}=n,{handleClose:c}=o.useContext(b),d=i?J:"button",p=u=>{c(),r==null||r(u)};return e.jsx(d,{type:"button",...s,ref:t,onClick:p,children:l??"Close"})});j.displayName="Toast.Close";const M=j;j.__docgenInfo={description:"",methods:[],displayName:"Toast.Close"};const N=o.forwardRef((n,t)=>{const{children:l,...i}=n,{open:r,duration:s,viewport:c,handleClose:d}=o.useContext(b),p=o.useRef(0),u=o.useCallback(m=>{!m||m===1/0||(window.clearTimeout(p.current),p.current=window.setTimeout(d,m))},[d]);return o.useEffect(()=>{r&&u(s)},[s,r,u]),r?e.jsx(e.Fragment,{children:X.createPortal(e.jsx("div",{"data-state":r?"open":"closed",tabIndex:0,...i,ref:t,children:l}),c??document.body)}):null});N.displayName="Toast.Content";const U=N;N.__docgenInfo={description:"",methods:[],displayName:"Toast.Content"};const O=o.forwardRef((n,t)=>{const{placement:l="top",children:i,...r}=n,{onViewportChange:s}=o.useContext(b),c=G(t,s);return e.jsx("div",{"data-placement":l,tabIndex:-1,...r,ref:c,children:i})});O.displayName="Toast.Viewport";const $=O;O.__docgenInfo={description:"",methods:[],displayName:"Toast.Viewport"};const a={Root:x,Close:M,Content:U,Viewport:$};var y="_19js4bg2",T="_19js4bg3";const Y={title:"Components/Toast"};function h(){const[n,t]=o.useState(!1),l=i=>{i(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsx("button",{type:"button",onClick:()=>{l(t)},children:"Open"}),e.jsxs(a.Root,{open:n,onOpenChange:t,children:[e.jsx(a.Content,{className:y,children:e.jsx("div",{style:{backgroundColor:"#dffadc",height:50,padding:15,color:"black"},children:"Notification"})}),e.jsx(a.Viewport,{className:T})]})]})}function f(){const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Placement"}),e.jsx("button",{type:"button",onClick:()=>{t(!0)},children:"Open"}),e.jsxs(a.Root,{open:n,onOpenChange:t,children:[e.jsx(a.Content,{className:y,children:e.jsx("div",{style:{backgroundColor:"#dffadc",height:50,padding:15,color:"black"},children:"Notification"})}),e.jsx(a.Viewport,{className:T,placement:"bottom-right"})]})]})}function C(){const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Duration(default: 5000)"}),e.jsx("button",{type:"button",onClick:()=>{t(!0)},children:"Open"}),e.jsxs(a.Root,{duration:1e3,open:n,onOpenChange:t,children:[e.jsx(a.Content,{className:y,children:e.jsx("div",{style:{backgroundColor:"#dffadc",height:50,padding:15,color:"black"},children:"Notification"})}),e.jsx(a.Viewport,{className:T})]})]})}function g(){const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Close"}),e.jsx("button",{type:"button",onClick:()=>{t(!0)},children:"Open"}),e.jsxs(a.Root,{open:n,onOpenChange:t,children:[e.jsxs(a.Content,{className:y,style:{display:"grid",gridTemplateAreas:'"title action" "description action"',gridTemplateColumns:"auto max-content",columnGap:15,alignItems:"center",backgroundColor:"#dffadc"},children:[e.jsx("div",{style:{height:50,padding:15,color:"black",gridArea:"title"},children:"Notification"}),e.jsx(a.Close,{style:{gridArea:"action"},asChild:!0,children:e.jsx("button",{type:"button",children:"Undo"})})]}),e.jsx(a.Viewport,{className:T})]})]})}h.__docgenInfo={description:"",methods:[],displayName:"Basic"};f.__docgenInfo={description:"",methods:[],displayName:"Placement"};C.__docgenInfo={description:"",methods:[],displayName:"Duration"};g.__docgenInfo={description:"",methods:[],displayName:"Close"};var k,R,v;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`function Basic(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const onClick = (cb: React.Dispatch<React.SetStateAction<boolean>>): void => {
    // eslint-disable-next-line n/no-callback-literal
    cb(true);
  };
  return <>
      <h1>기본</h1>
      <button type="button" onClick={() => {
      onClick(setOpen);
    }}>
        Open
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content}>
          <div style={{
          backgroundColor: '#dffadc',
          height: 50,
          padding: 15,
          color: 'black'
        }}>
            Notification
          </div>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} />
      </Toast.Root>
    </>;
}`,...(v=(R=h.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var S,_,V;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`function Placement(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  return <>
      <h1>Placement</h1>
      <button type="button" onClick={() => {
      setOpen(true);
    }}>
        Open
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content}>
          <div style={{
          backgroundColor: '#dffadc',
          height: 50,
          padding: 15,
          color: 'black'
        }}>
            Notification
          </div>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} placement="bottom-right" />
      </Toast.Root>
    </>;
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var I,P,A;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`function Duration(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  return <>
      <h1>Duration(default: 5000)</h1>
      <button type="button" onClick={() => {
      setOpen(true);
    }}>
        Open
      </button>

      <Toast.Root duration={1000} open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content}>
          <div style={{
          backgroundColor: '#dffadc',
          height: 50,
          padding: 15,
          color: 'black'
        }}>
            Notification
          </div>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} />
      </Toast.Root>
    </>;
}`,...(A=(P=C.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,E,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`function Close(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  return <>
      <h1>Close</h1>
      <button type="button" onClick={() => {
      setOpen(true);
    }}>
        Open
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content} style={{
        display: 'grid',
        gridTemplateAreas: \`"title action" "description action"\`,
        gridTemplateColumns: 'auto max-content',
        columnGap: 15,
        alignItems: 'center',
        //
        backgroundColor: '#dffadc'
      }}>
          <div style={{
          height: 50,
          padding: 15,
          color: 'black',
          gridArea: 'title'
        }}>
            Notification
          </div>
          <Toast.Close style={{
          gridArea: 'action'
        }} asChild>
            <button type="button">Undo</button>
          </Toast.Close>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} />
      </Toast.Root>
    </>;
}`,...(q=(E=g.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const Z=["Basic","Placement","Duration","Close"];export{h as Basic,g as Close,C as Duration,f as Placement,Z as __namedExportsOrder,Y as default};
