import{j as a}from"./jsx-runtime-bkLU2cdM.js";import{R as t}from"./index-eK40FDle.js";import{u as Ga}from"./use-controlled-3NL49yyH.js";import{u as ha}from"./use-checked-_moT1goV.js";const ra=t.createContext({}),M=t.forwardRef((n,d)=>{const{orientation:r="horizontal",name:i,defaultValue:G,value:p,disabled:m,readOnly:h,children:x,onValueChange:I,...R}=n,[N,y]=Ga(p,G),z=t.useCallback(b=>{y(b),I==null||I(b)},[I,y]),E=t.useMemo(()=>({name:i,value:N,disabled:m,readOnly:h,onValueChange:z}),[m,z,i,h,N]);return a.jsx(ra.Provider,{value:E,children:a.jsx("div",{"data-orientation":r,...R,ref:d,children:x})})});M.displayName="RadioGroup.Root";const xa=M;M.__docgenInfo={description:"",methods:[],displayName:"RadioGroup.Root"};function da(n){return a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:[a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),a.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})]})}da.__docgenInfo={description:"",methods:[],displayName:"CheckedRadioIcon"};function ma(n){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})})}ma.__docgenInfo={description:"",methods:[],displayName:"UncheckedRadioIcon"};function J(n){return n?"checked":"unchecked"}const B=t.createContext({checked:!1,uuid:"eds-radio",onIndicatorClick:()=>{}}),X=t.forwardRef((n,d)=>{const{name:r,value:i,disabled:G,readOnly:p,onValueChange:m}=t.useContext(ra),{defaultChecked:h=!1,checked:x,name:I=r,value:R,disabled:N=G,readOnly:y=p??!1,inputProps:z,children:E,onChange:b,...ua}=n,pa=typeof i<"u"?i===R:x,[w,$]=ha(pa,h),F=t.useCallback(O=>{$(O),m==null||m(R??"")},[m,$,R]),Ia=O=>{F(!0),b==null||b(O)},D=t.useCallback(O=>{F(!0)},[F]),P=t.useId(),Ra=t.useMemo(()=>({uuid:P,checked:w,disabled:N,readOnly:y,onIndicatorClick:D}),[w,N,D,y,P]);return a.jsx(B.Provider,{value:Ra,children:a.jsxs("div",{"data-state":J(w),"data-disabled":N?"":void 0,"data-readonly":y?"":void 0,...ua,ref:d,children:[a.jsx("input",{type:"radio",id:P,name:I,value:R,checked:w,disabled:N,readOnly:y,onChange:Ia,...z}),E]})})});X.displayName="RadioGroup.Item";const ya=X;X.__docgenInfo={description:"",methods:[],displayName:"RadioGroup.Item"};const ba=a.jsx(da,{}),ja=a.jsx(ma,{}),q=t.forwardRef(({checkedIcon:n=ba,uncheckedIcon:d=ja,...r},i)=>{const{checked:G}=t.useContext(B),p={ref:i,...r};return t.cloneElement(G?n:d,{...p})});q.displayName="RadioGroup.Icon";const va=q;q.__docgenInfo={description:"",methods:[],displayName:"RadioGroup.Icon",props:{checkedIcon:{defaultValue:{value:"<CheckedRadioIcon />",computed:!1},required:!1},uncheckedIcon:{defaultValue:{value:"<UncheckedRadioIcon />",computed:!1},required:!1}}};const A=t.forwardRef((n,d)=>{const{children:r,onClick:i,...G}=n,{checked:p,disabled:m,readOnly:h,onIndicatorClick:x}=t.useContext(B),I=N=>{m||h||(x(N),i==null||i(N))},R=typeof r=="function"?r(p):r;return a.jsx("span",{"data-state":J(p),...G,ref:d,onClick:I,children:R})});A.displayName="RadioGroup.Indicator";const La=A;A.__docgenInfo={description:"",methods:[],displayName:"RadioGroup.Indicator"};const Z=t.forwardRef((n,d)=>{const{children:r,...i}=n,{uuid:G,checked:p,disabled:m,readOnly:h}=t.useContext(B),x=R=>{R.stopPropagation()},I=m||h?void 0:G;return a.jsx("label",{htmlFor:I,"data-state":J(p),...i,ref:d,onClick:x,children:r})});Z.displayName="RadioGroup.Label";const fa=Z;Z.__docgenInfo={description:"",methods:[],displayName:"RadioGroup.Label"};const e={Root:xa,Item:ya,Indicator:La,Icon:va,Label:fa};var Ca="_1gvmc9i8",j="_1gvmc9i7",v="_1gvmc9i6",L="_1gvmc9i9",f="_1gvmc9i5",c="_1gvmc9i3",s="_1gvmc9i2",o="_1gvmc9i1",l="_1gvmc9i4",u="_1gvmc9i0";const za={title:"Components/RadioGroup"};function C(){return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"기본"}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오3"})]}),a.jsxs(e.Item,{className:o,value:"4",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오4"})]}),a.jsxs(e.Item,{className:o,value:"5",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오5"})]})]}),a.jsx("h1",{children:"defaultChecked"}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",defaultChecked:!0,children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오3"})]}),a.jsxs(e.Item,{className:o,value:"4",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오4"})]}),a.jsxs(e.Item,{className:o,value:"5",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오5"})]})]}),a.jsx("h1",{children:"disabled"}),a.jsxs(e.Root,{className:u,disabled:!0,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오3"})]})]}),a.jsx("h1",{children:"readOnly"}),a.jsxs(e.Root,{className:u,readOnly:!0,children:[a.jsxs(e.Item,{className:o,value:"1",checked:!0,children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오3"})]})]})]})}function k(){const[n,d]=t.useState(""),r=i=>{d(i)};return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"onValueChange"}),a.jsxs(e.Root,{className:u,value:n,onValueChange:r,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오3"})]})]})]})}function g(){return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Custom Size"}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",style:{fontSize:"0.875rem"},children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c,style:{fontSize:"1.25rem"}})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",style:{fontSize:"0.875rem"},children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c,style:{fontSize:"1.25rem"}})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",style:{fontSize:"0.875rem"},children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c,style:{fontSize:"1.25rem"}})}),a.jsx(e.Label,{className:l,children:"라디오3"})]})]}),a.jsx("br",{}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",style:{fontSize:"1.125rem"},children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c,style:{fontSize:"1.75rem"}})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",style:{fontSize:"1.125rem"},children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c,style:{fontSize:"1.75rem"}})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",style:{fontSize:"1.125rem"},children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c,style:{fontSize:"1.75rem"}})}),a.jsx(e.Label,{className:l,children:"라디오3"})]})]}),a.jsx("h1",{children:"Custom Color"}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,style:{color:"#9812f1"},children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"#9812f1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,style:{color:"#1446eb"},children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"#1446eb"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,style:{color:"#f11a0b"},children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"#f11a0b"})]})]}),a.jsx("h1",{children:"Custom Checked"}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:n=>n?a.jsx(U,{}):a.jsx(V,{})}),a.jsx(e.Label,{className:l,children:"함수로 아이콘 설정1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:n=>n?a.jsx(U,{}):a.jsx(V,{})}),a.jsx(e.Label,{className:l,children:"함수로 아이콘 설정2"})]})]}),a.jsx("br",{}),a.jsxs(e.Root,{className:u,children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{checkedIcon:a.jsx(U,{}),uncheckedIcon:a.jsx(V,{})})}),a.jsx(e.Label,{className:l,children:"prop 으로 아이콘 설정1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{checkedIcon:a.jsx(U,{}),uncheckedIcon:a.jsx(V,{})})}),a.jsx(e.Label,{className:l,children:"prop 으로 아이콘 설정2"})]})]})]})}function S(){return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"orientation"}),a.jsxs(e.Root,{className:u,orientation:"vertical",children:[a.jsxs(e.Item,{className:o,value:"1",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오1"})]}),a.jsxs(e.Item,{className:o,value:"2",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오2"})]}),a.jsxs(e.Item,{className:o,value:"3",children:[a.jsx(e.Indicator,{className:s,children:a.jsx(e.Icon,{className:c})}),a.jsx(e.Label,{className:l,children:"라디오3"})]})]})]})}function _(){return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"ButtonStyle"}),a.jsxs(e.Root,{className:Ca,children:[a.jsxs(e.Item,{className:f,value:"1",children:[a.jsx(e.Indicator,{className:v,children:a.jsx(e.Icon,{className:j})}),a.jsx(e.Label,{className:L,children:"라디오1"})]}),a.jsxs(e.Item,{className:f,value:"2",children:[a.jsx(e.Indicator,{className:v,children:a.jsx(e.Icon,{className:j})}),a.jsx(e.Label,{className:L,children:"라디오2"})]}),a.jsxs(e.Item,{className:f,value:"3",children:[a.jsx(e.Indicator,{className:v,children:a.jsx(e.Icon,{className:j})}),a.jsx(e.Label,{className:L,children:"라디오3"})]}),a.jsxs(e.Item,{className:f,value:"4",children:[a.jsx(e.Indicator,{className:v,children:a.jsx(e.Icon,{className:j})}),a.jsx(e.Label,{className:L,children:"라디오4"})]}),a.jsxs(e.Item,{className:f,value:"5",children:[a.jsx(e.Indicator,{className:v,children:a.jsx(e.Icon,{className:j})}),a.jsx(e.Label,{className:L,children:"라디오5"})]})]})]})}function U(n){return a.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#00A8FF"})})}function V(n){return a.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...n,children:a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#cacdcf"})})}C.__docgenInfo={description:"",methods:[],displayName:"Basic"};k.__docgenInfo={description:"",methods:[],displayName:"OnValueChange"};g.__docgenInfo={description:"",methods:[],displayName:"Custom"};S.__docgenInfo={description:"",methods:[],displayName:"Orientation"};_.__docgenInfo={description:"",methods:[],displayName:"ButtonStyle"};var H,K,Q;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="4">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오4</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="5">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오5</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>defaultChecked</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2" defaultChecked>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="4">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오4</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="5">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오5</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>disabled</h1>
      <RadioGroup.Root className={styles.root} disabled>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>readOnly</h1>
      <RadioGroup.Root className={styles.root} readOnly>
        <RadioGroup.Item className={styles.item} value="1" checked>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>;
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var T,W,Y;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState('');
  const handleChange = (value: RadioValue): void => {
    setValue((value as string));
  };
  return <>
      <h1>onValueChange</h1>
      <RadioGroup.Root className={styles.root} value={value} onValueChange={handleChange}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>;
}`,...(Y=(W=k.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var aa,ea,sa;g.parameters={...g.parameters,docs:{...(aa=g.parameters)==null?void 0:aa.docs,source:{originalSource:`function Custom(): JSX.Element {
  return <>
      <h1>Custom Size</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1" style={{
        fontSize: '0.875rem'
      }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{
            fontSize: '1.25rem'
          }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2" style={{
        fontSize: '0.875rem'
      }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{
            fontSize: '1.25rem'
          }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3" style={{
        fontSize: '0.875rem'
      }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{
            fontSize: '1.25rem'
          }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
      <br />

      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1" style={{
        fontSize: '1.125rem'
      }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{
            fontSize: '1.75rem'
          }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2" style={{
        fontSize: '1.125rem'
      }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{
            fontSize: '1.75rem'
          }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3" style={{
        fontSize: '1.125rem'
      }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{
            fontSize: '1.75rem'
          }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>Custom Color</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator} style={{
          color: '#9812f1'
        }}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>#9812f1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator} style={{
          color: '#1446eb'
        }}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>#1446eb</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator} style={{
          color: '#f11a0b'
        }}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>#f11a0b</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>Custom Checked</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            {(checked: boolean) => {
            if (checked) return <CheckedUserIcon />;
            return <UncheckedUserIcon />;
          }}
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>함수로 아이콘 설정1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            {(checked: boolean) => {
            if (checked) return <CheckedUserIcon />;
            return <UncheckedUserIcon />;
          }}
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>함수로 아이콘 설정2</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
      <br />

      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>prop 으로 아이콘 설정1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>prop 으로 아이콘 설정2</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>;
}`,...(sa=(ea=g.parameters)==null?void 0:ea.docs)==null?void 0:sa.source}}};var oa,la,ca;S.parameters={...S.parameters,docs:{...(oa=S.parameters)==null?void 0:oa.docs,source:{originalSource:`function Orientation(): JSX.Element {
  return <>
      <h1>orientation</h1>
      <RadioGroup.Root className={styles.root} orientation="vertical">
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>;
}`,...(ca=(la=S.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var na,ta,ia;_.parameters={..._.parameters,docs:{...(na=_.parameters)==null?void 0:na.docs,source:{originalSource:`function ButtonStyle(): JSX.Element {
  return <>
      <h1>ButtonStyle</h1>
      <RadioGroup.Root className={styles.buttonGroup}>
        <RadioGroup.Item className={styles.buttonRoot} value="1">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="2">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="3">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="4">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오4</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="5">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오5</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>;
}`,...(ia=(ta=_.parameters)==null?void 0:ta.docs)==null?void 0:ia.source}}};const wa=["Basic","OnValueChange","Custom","Orientation","ButtonStyle"];export{C as Basic,_ as ButtonStyle,g as Custom,k as OnValueChange,S as Orientation,wa as __namedExportsOrder,za as default};
