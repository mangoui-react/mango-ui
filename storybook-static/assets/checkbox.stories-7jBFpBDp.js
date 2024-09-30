import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as t}from"./index-eK40FDle.js";import{u as te}from"./use-checked-_moT1goV.js";import{u as re}from"./use-controlled-3NL49yyH.js";const se=t.createContext({}),U=t.forwardRef((n,r)=>{const{orientation:h="horizontal",name:i,defaultValue:b=[],value:k,disabled:d,readOnly:m,children:I,onValueChange:N,...x}=n,[C,u]=re(k,b),y=t.useCallback(()=>C??b??[],[b,C]),G=t.useCallback((L,S)=>{let v=[...y()];S?v.push(L):v=v.filter(j=>j!==L),N==null||N(v),u(v)},[y,N,u]),_=t.useMemo(()=>({name:i,value:y(),disabled:d,readOnly:m,onValueChange:G}),[d,y,G,i,m]);return e.jsx(se.Provider,{value:_,children:e.jsx("div",{"data-orientation":h,...x,ref:r,children:I})})});U.displayName="Checkbox.Group";const he=U;U.__docgenInfo={description:"",methods:[],displayName:"Checkbox.Group"};function B(n,r){return r===!0?"indeterminate":n?"checked":"unchecked"}const V=t.createContext({checked:!1,uuid:"eds-checkbox",onIndicatorClick:()=>{}}),M=t.forwardRef((n,r)=>{const{name:h,value:i,disabled:b,readOnly:k,onValueChange:d}=t.useContext(se),{defaultChecked:m=!1,checked:I,name:N=h,value:x,disabled:C=b??!1,readOnly:u=k??!1,indeterminate:y=!1,inputProps:G,children:_,onCheckedChange:L,...S}=n,v=t.useMemo(()=>typeof i<"u"&&typeof x<"u"?i.some(p=>p===x):I,[I,x,i]),[j,H]=te(v,m),z=t.useCallback(p=>{H(p),L==null||L(p),d==null||d(x,p)},[L,d,H,x]),le=p=>{const J=p.target.checked;z(J)},q=t.useCallback(p=>{z(!j)},[z,j]),O=t.useId(),ne=t.useMemo(()=>({uuid:O,checked:j,indeterminate:y,disabled:C,readOnly:u,onIndicatorClick:q}),[j,C,q,y,u,O]);return e.jsx(V.Provider,{value:ne,children:e.jsxs("div",{"data-state":B(j,y),"data-disabled":C?"":void 0,"data-readonly":u?"":void 0,...S,ref:r,children:[e.jsx("input",{type:"checkbox",id:O,name:N,value:x,checked:j,disabled:C,readOnly:u,onChange:le,...G}),_]})})});M.displayName="Checkbox";const ie=M;M.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};function ce(n){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}ce.__docgenInfo={description:"",methods:[],displayName:"CheckedCheckboxIcon"};function ae(n){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"})})}ae.__docgenInfo={description:"",methods:[],displayName:"IndeterminateCheckboxIcon"};function oe(n){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})})}oe.__docgenInfo={description:"",methods:[],displayName:"UncheckedCheckboxIcon"};const de=e.jsx(ce,{}),xe=e.jsx(oe,{}),be=e.jsx(ae,{}),P=t.forwardRef(({checkedIcon:n=de,uncheckedIcon:r=xe,indeterminateIcon:h=be,...i},b)=>{const{checked:k,indeterminate:d}=t.useContext(V),m={ref:b,...i};return d?t.cloneElement(h,{...m}):t.cloneElement(k?n:r,{...m})});P.displayName="Checkbox.Icon";const me=P;P.__docgenInfo={description:"",methods:[],displayName:"Checkbox.Icon",props:{checkedIcon:{defaultValue:{value:"<CheckedCheckboxIcon />",computed:!1},required:!1},uncheckedIcon:{defaultValue:{value:"<UncheckedCheckboxIcon />",computed:!1},required:!1},indeterminateIcon:{defaultValue:{value:"<IndeterminateCheckboxIcon />",computed:!1},required:!1}}};const E=t.forwardRef((n,r)=>{const{children:h,onClick:i,...b}=n,{checked:k,indeterminate:d,disabled:m,readOnly:I,onIndicatorClick:N}=t.useContext(V),x=u=>{m||I||(N(u),i==null||i(u))},C=typeof h=="function"?h(k,d):h;return e.jsx("span",{"data-state":B(k,d),...b,ref:r,onClick:x,children:C})});E.displayName="Checkbox.Indicator";const Ce=E;E.__docgenInfo={description:"",methods:[],displayName:"Checkbox.Indicator"};const F=t.forwardRef((n,r)=>{const{children:h,...i}=n,{uuid:b,checked:k,indeterminate:d,disabled:m,readOnly:I}=t.useContext(V),N=C=>{C.stopPropagation()},x=m||I?void 0:b;return e.jsx("label",{"data-state":B(k,d),...i,ref:r,htmlFor:x,onClick:N,children:h})});F.displayName="Checkbox.Label";const ke=F;F.__docgenInfo={description:"",methods:[],displayName:"Checkbox.Label"};const s={Root:ie,Icon:me,Group:he,Indicator:Ce,Label:ke};var R="xmu86u4",l="xmu86u2",c="xmu86u1",a="xmu86u3",o="xmu86u0";const je={title:"Components/Checkbox"};function f(){const[n,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스"})]}),e.jsx("h1",{children:"defaultChecked"}),e.jsxs(s.Root,{className:o,defaultChecked:!0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"defaultChecked"})]}),e.jsx("h1",{children:"disabled/readOnly"}),e.jsxs(s.Root,{className:o,disabled:!0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"disabled"})]}),e.jsxs(s.Root,{className:o,readOnly:!0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"readOnly"})]}),e.jsx("h1",{children:"indeterminate"}),e.jsxs(s.Root,{className:o,indeterminate:!0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"indeterminate"})]}),e.jsx("h1",{children:"onCheckedChange"}),e.jsxs(s.Root,{className:o,checked:n,onCheckedChange:h=>{r(h)},children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스"})]})]})}function g(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Custom Size"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsxs(s.Root,{className:o,style:{fontSize:"0.875rem"},children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l,style:{fontSize:"1.25rem"}})}),e.jsx(s.Label,{className:a,children:"small"})]}),e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"medium"})]}),e.jsxs(s.Root,{className:o,style:{fontSize:"1.125rem"},children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l,style:{fontSize:"1.75rem"}})}),e.jsx(s.Label,{className:a,children:"large"})]})]}),e.jsx("h1",{children:"Custom Color"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,style:{color:"#9812f1"},children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"#9812f1"})]}),e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,style:{color:"#1446eb"},children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"#1446eb"})]}),e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,style:{color:"#f11a0b"},children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"#f11a0b"})]})]}),e.jsx("h1",{children:"Custom Checked"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:30},children:[e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,children:n=>n?e.jsx(X,{}):e.jsx($,{})}),e.jsx(s.Label,{className:a,children:"함수로 아이콘 설정"})]}),e.jsxs(s.Root,{className:o,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l,checkedIcon:e.jsx(X,{}),uncheckedIcon:e.jsx($,{})})}),e.jsx(s.Label,{className:a,children:"prop 으로 아이콘 설정"})]})]})]})}function w(){const[n,r]=t.useState([0,1]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"CheckboxGroup"}),e.jsxs(s.Group,{className:R,children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"onValueChange"}),e.jsxs(s.Group,{className:R,value:n,onValueChange:h=>{r(h)},children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"orientation=vertical"}),e.jsxs(s.Group,{className:R,orientation:"vertical",children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"defaultValue"}),e.jsxs(s.Group,{className:R,defaultValue:[0,2],children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"disabled"}),e.jsxs(s.Group,{className:R,defaultValue:[0,2],disabled:!0,children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"readOnly"}),e.jsxs(s.Group,{className:R,defaultValue:[1],readOnly:!0,children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"spacing=35"}),e.jsxs(s.Group,{className:R,style:{gap:35},children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]}),e.jsx("h1",{children:"orientation=vertical, spacing=35"}),e.jsxs(s.Group,{className:R,orientation:"vertical",style:{gap:35},children:[e.jsxs(s.Root,{className:o,value:0,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스1"})]}),e.jsxs(s.Root,{className:o,value:1,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스2"})]}),e.jsxs(s.Root,{className:o,value:2,children:[e.jsx(s.Indicator,{className:c,children:e.jsx(s.Icon,{className:l})}),e.jsx(s.Label,{className:a,children:"체크박스3"})]})]})]})}function X(n){return e.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#00A8FF"})})}function $(n){return e.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#cacdcf"})})}f.__docgenInfo={description:"",methods:[],displayName:"Basic"};g.__docgenInfo={description:"",methods:[],displayName:"Custom"};w.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup"};var A,D,K;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`function Basic(): JSX.Element {
  const [checked, setChecked] = React.useState(false);
  return <>
      <h1>기본</h1>
      <Checkbox.Root className={styles.root}>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>체크박스</Checkbox.Label>
      </Checkbox.Root>

      <h1>defaultChecked</h1>
      <Checkbox.Root className={styles.root} defaultChecked>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>defaultChecked</Checkbox.Label>
      </Checkbox.Root>

      <h1>disabled/readOnly</h1>
      <Checkbox.Root className={styles.root} disabled>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>disabled</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root className={styles.root} readOnly>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>readOnly</Checkbox.Label>
      </Checkbox.Root>

      <h1>indeterminate</h1>
      <Checkbox.Root className={styles.root} indeterminate>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>indeterminate</Checkbox.Label>
      </Checkbox.Root>

      <h1>onCheckedChange</h1>
      <Checkbox.Root className={styles.root} checked={checked} onCheckedChange={(newChecked: boolean) => {
      setChecked(newChecked);
    }}>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>체크박스</Checkbox.Label>
      </Checkbox.Root>
    </>;
}`,...(K=(D=f.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var Q,T,W;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`function Custom(): JSX.Element {
  return <>
      <h1>Custom Size</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <Checkbox.Root className={styles.root} style={{
        fontSize: '0.875rem'
      }}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} style={{
            fontSize: '1.25rem'
          }} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>small</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>medium</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} style={{
        fontSize: '1.125rem'
      }}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} style={{
            fontSize: '1.75rem'
          }} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>large</Checkbox.Label>
        </Checkbox.Root>
      </div>

      <h1>Custom Color</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator} style={{
          color: '#9812f1'
        }}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>#9812f1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator} style={{
          color: '#1446eb'
        }}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>#1446eb</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator} style={{
          color: '#f11a0b'
        }}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>#f11a0b</Checkbox.Label>
        </Checkbox.Root>
      </div>

      <h1>Custom Checked</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }}>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator}>
            {(checked: boolean) => {
            if (checked) return <CheckedUserIcon />;
            return <UncheckedUserIcon />;
          }}
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>함수로 아이콘 설정</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>prop 으로 아이콘 설정</Checkbox.Label>
        </Checkbox.Root>
      </div>
    </>;
}`,...(W=(T=g.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`function CheckboxGroup(): JSX.Element {
  const [checkedValues, setCheckedValues] = React.useState<CheckboxValue[]>([0, 1]);
  return <>
      <h1>CheckboxGroup</h1>
      <Checkbox.Group className={styles.group}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>onValueChange</h1>
      <Checkbox.Group className={styles.group} value={checkedValues} onValueChange={(value: CheckboxValue[]) => {
      setCheckedValues(value);
    }}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>orientation=vertical</h1>
      <Checkbox.Group className={styles.group} orientation="vertical">
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>defaultValue</h1>
      <Checkbox.Group className={styles.group} defaultValue={[0, 2]}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>disabled</h1>
      <Checkbox.Group className={styles.group} defaultValue={[0, 2]} disabled>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>readOnly</h1>
      <Checkbox.Group className={styles.group} defaultValue={[1]} readOnly>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>spacing=35</h1>
      <Checkbox.Group className={styles.group} style={{
      gap: 35
    }}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>orientation=vertical, spacing=35</h1>
      <Checkbox.Group className={styles.group} orientation="vertical" style={{
      gap: 35
    }}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>
    </>;
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pe=["Basic","Custom","CheckboxGroup"];export{f as Basic,w as CheckboxGroup,g as Custom,pe as __namedExportsOrder,je as default};
