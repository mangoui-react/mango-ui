import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as u}from"./index-eK40FDle.js";import{u as ge}from"./use-controlled-3NL49yyH.js";import{S as ye}from"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";const E=u.createContext({disabledPlusButton:!1,disabledMinusButton:!1,setDisabledPlusButton:()=>{},setdisabledMinusButton:()=>{},onPlus:()=>{},onMinus:()=>{},onNumberInputChange:()=>{},onNumberInputBlur:()=>{},onNumberInputKeyDown:()=>{}}),Be=/^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,J=u.forwardRef((l,y)=>{const{name:b,defaultValue:I,value:G,disabled:i,readOnly:c,min:x=-1/0,max:a=1/0,step:j=1,children:g,onValueChange:r,onBlur:h,onKeyDown:B,...P}=l,[o,C]=ge(G,I),[O,k]=u.useState(!1),[D,f]=u.useState(!1),U=u.useCallback(t=>t==null?!1:t>=a,[a]),Z=u.useCallback(t=>t==null?!1:t<=x,[x]),$=u.useCallback(t=>!!Be.test(t),[]),M=u.useCallback(t=>{k(U(t)),f(Z(t)),C(t),r==null||r(t)},[U,Z,r,C]),R=u.useCallback(t=>{let m=t;return t>a?m=a:t<x&&(m=x),m},[a,x]),q=u.useCallback(t=>{const m=t.target.value;if(m!==""&&!$(m)){C(m),r==null||r(m);return}const je=m===""?null:+m;M(je)},[M,$,r,C]),H=u.useCallback(()=>{if(i||c)return;const t=typeof o=="string"?0:(o||0)+j,m=R(t);M(m)},[M,R,i,c,j,o]),Q=u.useCallback(()=>{if(i||c)return;const t=typeof o=="string"?0:(o||0)-j,m=R(t);M(m)},[M,R,i,c,j,o]),z=u.useCallback(()=>{const t=typeof o=="number"?R(o):null;M(t)},[M,R,o]),T=u.useCallback(t=>{z(),h==null||h(t)},[z,h]),W=u.useCallback(t=>{t.key==="Enter"&&(t.preventDefault(),z()),B==null||B(t)},[z,B]),fe=u.useMemo(()=>({name:b,value:o,disabled:i,readOnly:c,disabledPlusButton:O,disabledMinusButton:D,setDisabledPlusButton:k,setdisabledMinusButton:f,onPlus:H,onMinus:Q,onNumberInputChange:q,onNumberInputBlur:T,onNumberInputKeyDown:W}),[i,D,O,T,q,W,Q,H,b,c,o]);return e.jsx(E.Provider,{value:fe,children:e.jsx("div",{"data-disabled":i?"":void 0,"data-readonly":c?"":void 0,...P,ref:y,children:g})})});J.displayName="NumberInput";const Me=J;J.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};const L=u.forwardRef((l,y)=>{const{children:b,...I}=l;return e.jsx("span",{...I,ref:y,children:b})});L.displayName="NumberInput.ButtonGroup";const Ge=L;L.__docgenInfo={description:"",methods:[],displayName:"NumberInput.ButtonGroup"};const X=u.forwardRef((l,y)=>{const{name:b,value:I,disabled:G,readOnly:i,onNumberInputChange:c,onNumberInputBlur:x,onNumberInputKeyDown:a}=u.useContext(E),{name:j=b,value:g=I,disabled:r=G,readOnly:h=i,onChange:B,onBlur:P,onKeyDown:o,...C}=l,O=f=>{c(f),B==null||B(f)},k=f=>{x(f),P==null||P(f)},D=f=>{a(f),o==null||o(f)};return e.jsx("input",{...C,ref:y,name:j,value:Number.isNaN(g)?"":(g==null?void 0:g.toString())??"",disabled:r,readOnly:h,onChange:O,onBlur:k,onKeyDown:D})});X.displayName="NumberInput.Field";const Ce=X;X.__docgenInfo={description:"",methods:[],displayName:"NumberInput.Field"};function Ie(l){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:e.jsx("path",{d:"M8 11L3.5 6L12.5 6L8 11Z",fill:"currentColor"})})}Ie.__docgenInfo={description:"",methods:[],displayName:"ArrowDownIcon"};const A=u.forwardRef((l,y)=>{const{disabled:b,disabledMinusButton:I,onMinus:G}=u.useContext(E),{disabled:i=b,children:c,asChild:x,onClick:a,...j}=l,g=x?ye:"button",r=h=>{G(h),a==null||a(h)};return e.jsx(g,{...j,ref:y,type:"button",disabled:i??I,onClick:r,children:c??e.jsx(Ie,{})})});A.displayName="NumberInput.Minus";const Re=A;A.__docgenInfo={description:"",methods:[],displayName:"NumberInput.Minus"};function xe(l){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:e.jsx("path",{d:"M8 6L3.5 11L12.5 11L8 6Z",fill:"currentColor"})})}xe.__docgenInfo={description:"",methods:[],displayName:"ArrowUpIcon"};const K=u.forwardRef((l,y)=>{const{disabled:b,disabledPlusButton:I,onPlus:G}=u.useContext(E),{disabled:i=b,children:c,asChild:x,onClick:a,...j}=l,g=x?ye:"button",r=h=>{G(h),a==null||a(h)};return e.jsx(g,{...j,ref:y,type:"button",disabled:i??I,onClick:r,children:c??e.jsx(xe,{})})});K.displayName="NumberInput.Plus";const Pe=K;K.__docgenInfo={description:"",methods:[],displayName:"NumberInput.Plus"};const s={Root:Me,Field:Ce,ButtonGroup:Ge,Plus:Pe,Minus:Re};var n="doiviy3",d="doiviy2",p="doiviy1",N="doiviy0";const ve={title:"Components/NumberInput"};function F(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(s.Root,{className:N,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n,asChild:!0,children:e.jsx("button",{type:"button",style:{padding:"0px 3px"},children:"+"})}),e.jsx(s.Minus,{className:n,asChild:!0,children:e.jsx("button",{type:"button",style:{padding:"0px 3px"},children:"-"})})]})]})]})}function S(){const[l,y]=u.useState(null),b=I=>{y(I)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"onValueChange"}),e.jsxs(s.Root,{className:N,value:l,onValueChange:b,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]})]})}function w(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"disabled"}),e.jsxs(s.Root,{className:N,disabled:!0,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,defaultValue:2,disabled:!0,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,disabled:!0,children:[e.jsx(s.Field,{className:p,placeholder:"placeholder"}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{})]})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"readOnly"}),e.jsxs(s.Root,{className:N,readOnly:!0,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,defaultValue:2,readOnly:!0,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,readOnly:!0,children:[e.jsx(s.Field,{className:p,placeholder:"placeholder"}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]}),e.jsx("br",{})]})}function _(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Min/Max"}),e.jsxs(s.Root,{className:N,min:0,max:100,step:5,defaultValue:50,children:[e.jsx(s.Field,{className:p}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]})]})}function v(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Custom"}),e.jsxs(s.Root,{className:N,defaultValue:2,children:[e.jsx(s.Field,{className:p,style:{fontSize:"0.75rem",height:"1.5rem"}}),e.jsxs(s.ButtonGroup,{className:d,style:{height:"1.5rem"},children:[e.jsx(s.Plus,{className:n,style:{fontSize:"0.75rem",height:"0.75rem"}}),e.jsx(s.Minus,{className:n,style:{fontSize:"0.75rem",height:"0.75rem"}})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,defaultValue:2,children:[e.jsx(s.Field,{className:p,style:{fontSize:"1.125rem",height:"3rem"}}),e.jsxs(s.ButtonGroup,{className:d,style:{height:"3rem"},children:[e.jsx(s.Plus,{className:n,style:{fontSize:"1.5rem",height:"1.5rem"}}),e.jsx(s.Minus,{className:n,style:{fontSize:"1.5rem",height:"1.5rem"}})]})]}),e.jsx("br",{}),e.jsxs(s.Root,{className:N,style:{border:"0.0625rem solid",borderColor:"var(--error)"},children:[e.jsx(s.Field,{className:p,style:{border:"none",outline:"none",boxShadow:"none"}}),e.jsxs(s.ButtonGroup,{className:d,children:[e.jsx(s.Plus,{className:n}),e.jsx(s.Minus,{className:n})]})]})]})}F.__docgenInfo={description:"",methods:[],displayName:"Basic"};S.__docgenInfo={description:"",methods:[],displayName:"OnValueChange"};w.__docgenInfo={description:"",methods:[],displayName:"Disabled"};V.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};_.__docgenInfo={description:"",methods:[],displayName:"MinMax"};v.__docgenInfo={description:"",methods:[],displayName:"Custom"};var Y,ee,se;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <NumberInput.Root className={styles.root}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />

      <NumberInput.Root className={styles.root}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} asChild>
            <button type="button" style={{
            padding: '0px 3px'
          }}>
              +
            </button>
          </NumberInput.Plus>
          <NumberInput.Minus className={styles.button} asChild>
            <button type="button" style={{
            padding: '0px 3px'
          }}>
              -
            </button>
          </NumberInput.Minus>
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>;
}`,...(se=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ne,ue;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState<NumberInputValue>(null);
  const onValueChange = (val: NumberInputValue): void => {
    setValue(val);

    // if (typeof val === 'string') {
    //   console.log('input number 유효하지 않은 값', val);
    //   return;
    // }
    // console.log('input number 유효한 값', val);
  };
  return <>
      <h1>onValueChange</h1>
      <NumberInput.Root className={styles.root} value={value} onValueChange={onValueChange}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>;
}`,...(ue=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var le,ae,oe;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`function Disabled(): JSX.Element {
  return <>
      <h1>disabled</h1>
      <NumberInput.Root className={styles.root} disabled>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} defaultValue={2} disabled>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} disabled>
        <NumberInput.Field className={styles.field} placeholder="placeholder" />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
    </>;
}`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,me,ie;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`function ReadOnly(): JSX.Element {
  return <>
      <h1>readOnly</h1>
      <NumberInput.Root className={styles.root} readOnly>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} defaultValue={2} readOnly>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} readOnly>
        <NumberInput.Field className={styles.field} placeholder="placeholder" />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
    </>;
}`,...(ie=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};var ce,de,pe;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`function MinMax(): JSX.Element {
  return <>
      <h1>Min/Max</h1>
      <NumberInput.Root className={styles.root} min={0} max={100} step={5} defaultValue={50}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>;
}`,...(pe=(de=_.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var Ne,be,he;v.parameters={...v.parameters,docs:{...(Ne=v.parameters)==null?void 0:Ne.docs,source:{originalSource:`function Custom(): JSX.Element {
  return <>
      <h1>Custom</h1>
      <NumberInput.Root className={styles.root} defaultValue={2}>
        <NumberInput.Field className={styles.field} style={{
        fontSize: '0.75rem',
        height: '1.5rem'
      }} />
        <NumberInput.ButtonGroup className={styles.buttonGroup} style={{
        height: '1.5rem'
      }}>
          <NumberInput.Plus className={styles.button} style={{
          fontSize: '0.75rem',
          height: '0.75rem'
        }} />
          <NumberInput.Minus className={styles.button} style={{
          fontSize: '0.75rem',
          height: '0.75rem'
        }} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />

      <NumberInput.Root className={styles.root} defaultValue={2}>
        <NumberInput.Field className={styles.field} style={{
        fontSize: '1.125rem',
        height: '3rem'
      }} />
        <NumberInput.ButtonGroup className={styles.buttonGroup} style={{
        height: '3rem'
      }}>
          <NumberInput.Plus className={styles.button} style={{
          fontSize: '1.5rem',
          height: '1.5rem'
        }} />
          <NumberInput.Minus className={styles.button} style={{
          fontSize: '1.5rem',
          height: '1.5rem'
        }} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />

      <NumberInput.Root className={styles.root} style={{
      border: '0.0625rem solid',
      borderColor: 'var(--error)'
    }}>
        <NumberInput.Field className={styles.field} style={{
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>;
}`,...(he=(be=v.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Oe=["Basic","OnValueChange","Disabled","ReadOnly","MinMax","Custom"];export{F as Basic,v as Custom,w as Disabled,_ as MinMax,S as OnValueChange,V as ReadOnly,Oe as __namedExportsOrder,ve as default};
