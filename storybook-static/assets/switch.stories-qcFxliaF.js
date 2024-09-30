import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as c}from"./index-eK40FDle.js";import{u as ee}from"./use-controlled-3NL49yyH.js";function T(a){return a?"checked":"unchecked"}const g=c.createContext({uuid:"eds-switch",onTrackClick:()=>{}}),_=c.forwardRef((a,n)=>{const{defaultChecked:o=!1,checked:l,name:d,value:i,disabled:t,readOnly:r,children:p,inputProps:S,onCheckedChange:h,...Q}=a,[b,E]=ee(l,o),R=c.useCallback(w=>{E(w),h==null||h(w)},[h,E]),U=w=>{const Z=w.target.checked;R(Z)},D=c.useCallback(()=>{R(!b)},[R,b]),L=c.useId(),Y=c.useMemo(()=>({uuid:L,checked:b,disabled:t,readOnly:r,onTrackClick:D}),[b,t,D,r,L]);return e.jsx(g.Provider,{value:Y,children:e.jsxs("div",{"data-state":T(b),"data-disabled":t?"":void 0,"data-readonly":r?"":void 0,...Q,ref:n,children:[e.jsx("input",{type:"checkbox",id:L,name:d,value:i,checked:b??!1,disabled:t,readOnly:r,onChange:U,...S}),p]})})});_.displayName="Switch";const se=_;_.__docgenInfo={description:"",methods:[],displayName:"Switch"};const v=c.forwardRef((a,n)=>{const{children:o,...l}=a,{uuid:d,checked:i,disabled:t,readOnly:r}=c.useContext(g),p=h=>{h.stopPropagation()},S=t||r?void 0:d;return e.jsx("label",{"data-state":T(i),"data-disabled":t?"":void 0,"data-readonly":r?"":void 0,...l,ref:n,htmlFor:S,onClick:p,children:o})});v.displayName="Switch.Label";const ce=v;v.__docgenInfo={description:"",methods:[],displayName:"Switch.Label"};const O=c.forwardRef((a,n)=>{const{children:o,...l}=a,{checked:d,disabled:i,readOnly:t}=c.useContext(g);return e.jsx("span",{"data-state":T(d),"data-disabled":i?"":void 0,"data-readonly":t?"":void 0,...l,ref:n,children:o})});O.displayName="Switch.Thumb";const ae=O;O.__docgenInfo={description:"",methods:[],displayName:"Switch.Thumb"};const I=c.forwardRef((a,n)=>{const{children:o,onClick:l,...d}=a,{checked:i,disabled:t,readOnly:r,onTrackClick:p}=c.useContext(g),S=h=>{t||r||(p(),l==null||l(h))};return e.jsx("span",{"data-state":T(i),"data-disabled":t?"":void 0,"data-readonly":r?"":void 0,...d,ref:n,onClick:S,children:o})});I.displayName="Switch.Track";const te=I;I.__docgenInfo={description:"",methods:[],displayName:"Switch.Track"};const s={Root:se,Track:te,Thumb:ae,Label:ce};var j="_12ewtpm1",m="_12ewtpm0",u="_12ewtpm3",k="_12ewtpm2";const re={title:"Components/Switch"};function C(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsx(s.Root,{className:m,children:e.jsx(s.Track,{className:k,children:e.jsx(s.Thumb,{className:u})})})]})}function x(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Label"}),e.jsxs(s.Root,{className:m,children:[e.jsx(s.Track,{className:k,children:e.jsx(s.Thumb,{className:u})}),e.jsx(s.Label,{className:j,children:"Label"})]})]})}function y(){const[a,n]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"onCheckedChange"}),e.jsx(s.Root,{className:m,checked:a,onCheckedChange:n,children:e.jsx(s.Track,{className:k,children:e.jsx(s.Thumb,{className:u})})})]})}function N(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Disabled"}),e.jsxs(s.Root,{className:m,checked:!0,disabled:!0,children:[e.jsx(s.Track,{className:k,children:e.jsx(s.Thumb,{className:u})}),e.jsx(s.Label,{className:j,children:"Label"})]}),e.jsx("h1",{children:"ReadOnly"}),e.jsxs(s.Root,{className:m,readOnly:!0,children:[e.jsx(s.Track,{className:k,children:e.jsx(s.Thumb,{className:u})}),e.jsx(s.Label,{className:j,children:"Label"})]})]})}function f(){const[a,n]=c.useState(!1),[o,l]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Custom Size"}),e.jsxs(s.Root,{className:m,checked:a,onCheckedChange:n,children:[e.jsx(s.Track,{className:k,style:{height:32,minWidth:60},children:e.jsx(s.Thumb,{className:u,style:{width:28,height:28,...a&&{left:"calc(100% - 32px)"}}})}),e.jsx(s.Label,{className:j,children:"Size"})]}),e.jsx("h1",{children:"Custom checked/unChecked"}),e.jsx(s.Root,{className:m,checked:o,onCheckedChange:l,children:e.jsxs(s.Track,{className:k,children:[e.jsx(s.Thumb,{className:u}),o?e.jsx("span",{style:{margin:"0 28px 0 5px",color:"#fff"},children:"open"}):e.jsx("span",{style:{margin:"0 5px 0 28px"},children:"close"})]})})]})}C.__docgenInfo={description:"",methods:[],displayName:"Basic"};x.__docgenInfo={description:"",methods:[],displayName:"Label"};y.__docgenInfo={description:"",methods:[],displayName:"OnCheckedChange"};N.__docgenInfo={description:"",methods:[],displayName:"DisabledReadOnly"};f.__docgenInfo={description:"",methods:[],displayName:"Custom"};var F,J,X;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Switch.Root className={styles.root}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
      </Switch.Root>
    </>;
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var z,B,P;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`function Label(): JSX.Element {
  return <>
      <h1>Label</h1>
      <Switch.Root className={styles.root}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Label</Switch.Label>
      </Switch.Root>
    </>;
}`,...(P=(B=x.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var W,$,M;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`function OnCheckedChange(): JSX.Element {
  const [checked, setChecked] = React.useState(false);
  return <>
      <h1>onCheckedChange</h1>
      <Switch.Root className={styles.root} checked={checked} onCheckedChange={setChecked}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
      </Switch.Root>
    </>;
}`,...(M=($=y.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var V,q,A;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`function DisabledReadOnly(): JSX.Element {
  return <>
      <h1>Disabled</h1>
      <Switch.Root className={styles.root} checked disabled>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Label</Switch.Label>
      </Switch.Root>

      <h1>ReadOnly</h1>
      <Switch.Root className={styles.root} readOnly>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Label</Switch.Label>
      </Switch.Root>
    </>;
}`,...(A=(q=N.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`function Custom(): JSX.Element {
  const [checked, setChecked] = React.useState(false);
  const [innerChecked, setInnerChecked] = React.useState(false);
  return <>
      <h1>Custom Size</h1>
      <Switch.Root className={styles.root} checked={checked} onCheckedChange={setChecked}>
        <Switch.Track className={styles.track} style={{
        height: 32,
        minWidth: 60
      }}>
          <Switch.Thumb className={styles.thumb} style={{
          width: 28,
          height: 28,
          ...(checked && {
            left: 'calc(100% - 32px)'
          })
        }} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Size</Switch.Label>
      </Switch.Root>

      <h1>Custom checked/unChecked</h1>
      <Switch.Root className={styles.root} checked={innerChecked} onCheckedChange={setInnerChecked}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
          {innerChecked ? <span style={{
          margin: '0 28px 0 5px',
          color: '#fff'
        }}>open</span> : <span style={{
          margin: '0 5px 0 28px'
        }}>close</span>}
        </Switch.Track>
      </Switch.Root>
    </>;
}`,...(K=(H=f.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const he=["Basic","Label","OnCheckedChange","DisabledReadOnly","Custom"];export{C as Basic,f as Custom,N as DisabledReadOnly,x as Label,y as OnCheckedChange,he as __namedExportsOrder,re as default};
