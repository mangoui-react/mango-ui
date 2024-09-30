import{j as s}from"./jsx-runtime-bkLU2cdM.js";import{R as o}from"./index-eK40FDle.js";const v=o.createContext({status:"info"}),A=o.forwardRef((e,n)=>{const{status:l="info",children:h,...N}=e,j=o.useMemo(()=>({status:l}),[l]);return s.jsx(v.Provider,{value:j,children:s.jsx("div",{...N,"data-status":l,ref:n,children:h})})});A.displayName="Alert";const H=A;A.__docgenInfo={description:"",methods:[],displayName:"Alert"};const C=o.forwardRef((e,n)=>{const{status:l="info"}=o.useContext(v);return s.jsx("div",{...e,"data-status":l,ref:n})});C.displayName="Alert.Content";const V=C;C.__docgenInfo={description:"",methods:[],displayName:"Alert.Content"};function M(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})})}M.__docgenInfo={description:"",methods:[],displayName:"ErrorIcon"};function z(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})})}z.__docgenInfo={description:"",methods:[],displayName:"InfoIcon"};function k(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})})}k.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};function B(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})})}B.__docgenInfo={description:"",methods:[],displayName:"WarningIcon"};const W={info:s.jsx(z,{}),success:s.jsx(k,{}),warning:s.jsx(B,{}),error:s.jsx(M,{})},f=o.forwardRef(({info:e,success:n,warning:l,error:h,...N},j)=>{const{status:i="info"}=o.useContext(v),E=o.useMemo(()=>i==="success"?n:i==="warning"?l:i==="error"?h:e,[h,e,i,n,l]);return o.cloneElement(E??W[i],{ref:j,...N})});f.displayName="Alert.StatusIcon";const $=f;f.__docgenInfo={description:"",methods:[],displayName:"Alert.StatusIcon"};const t={Root:H,StatusIcon:$,Content:V};var r="a3nrmh2",g="a3nrmh4",a="a3nrmh1",c="a3nrmh0",x="a3nrmh3";const O={title:"Components/Alert"};function d(){return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"기본"}),s.jsxs("div",{className:g,children:[s.jsxs(t.Root,{className:c,children:[s.jsx(t.StatusIcon,{className:a}),s.jsx(t.Content,{className:r,children:"This is an info alert"})]}),s.jsxs(t.Root,{className:c,status:"success",children:[s.jsx(t.StatusIcon,{className:a}),s.jsx(t.Content,{className:r,children:"This is an success alert"})]}),s.jsxs(t.Root,{className:c,status:"warning",children:[s.jsx(t.StatusIcon,{className:a}),s.jsx(t.Content,{className:r,children:"This is an warning alert"})]}),s.jsxs(t.Root,{className:c,status:"error",children:[s.jsx(t.StatusIcon,{className:a}),s.jsx(t.Content,{className:r,children:"This is an error alert"})]})]})]})}function m(){return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"타이틀"}),s.jsxs("div",{className:g,children:[s.jsxs(t.Root,{className:c,children:[s.jsx(t.StatusIcon,{className:a}),s.jsxs(t.Content,{className:r,children:[s.jsx("div",{className:x,children:"information"}),s.jsx("div",{children:"This is an info alert"})]})]}),s.jsxs(t.Root,{className:c,status:"success",children:[s.jsx(t.StatusIcon,{className:a}),s.jsxs(t.Content,{className:r,children:[s.jsx("div",{className:x,children:"success"}),s.jsx("div",{children:"This is an success alert"})]})]}),s.jsxs(t.Root,{className:c,status:"warning",children:[s.jsx(t.StatusIcon,{className:a}),s.jsxs(t.Content,{className:r,children:[s.jsx("div",{className:x,children:"warning"}),s.jsx("div",{children:"This is an warning alert"})]})]}),s.jsxs(t.Root,{className:c,status:"error",children:[s.jsx(t.StatusIcon,{className:a}),s.jsxs(t.Content,{className:r,children:[s.jsx("div",{className:x,children:"error"}),s.jsx("div",{children:"This is an error alert"})]})]})]})]})}function u(){const[e,n]=o.useState("info");return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"아이콘"}),s.jsxs("div",{className:g,children:[s.jsxs(t.Root,{className:c,children:[s.jsx(p,{className:a}),s.jsx(t.Content,{className:r,children:"This is an custom icon alert"})]}),s.jsxs(t.Root,{className:c,status:e,children:[s.jsx(t.StatusIcon,{className:a,info:s.jsx(p,{}),success:s.jsx(F,{}),warning:s.jsx(J,{}),error:s.jsx(X,{})}),s.jsx(t.Content,{className:r,children:"This is an custom icon alert by AlertStatusIcon"})]}),s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:()=>{n("info")},children:"info"}),s.jsx("button",{type:"button",onClick:()=>{n("success")},children:"success"}),s.jsx("button",{type:"button",onClick:()=>{n("warning")},children:"warning"}),s.jsx("button",{type:"button",onClick:()=>{n("error")},children:"error"})]})]})]})}function p(e){return s.jsx("svg",{width:"1em",height:"1em",viewBox:"64 64 896 896",focusable:"false","data-icon":"check",fill:"currentColor","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})})}function F(e){return s.jsx("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})})}function J(e){return s.jsx("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})})}function X(e){return s.jsx("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};m.__docgenInfo={description:"",methods:[],displayName:"Title"};u.__docgenInfo={description:"",methods:[],displayName:"Icon"};var w,y,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <div className={styles.flexCol}>
        <Alert.Root className={styles.root}>
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an info alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="success">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an success alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="warning">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an warning alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="error">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an error alert</Alert.Content>
        </Alert.Root>
      </div>
    </>;
}`,...(I=(y=d.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var S,R,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`function Title(): JSX.Element {
  return <>
      <h1>타이틀</h1>
      <div className={styles.flexCol}>
        <Alert.Root className={styles.root}>
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>information</div>
            <div>This is an info alert</div>
          </Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="success">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>success</div>
            <div>This is an success alert</div>
          </Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="warning">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>warning</div>
            <div>This is an warning alert</div>
          </Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="error">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>error</div>
            <div>This is an error alert</div>
          </Alert.Content>
        </Alert.Root>
      </div>
    </>;
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var b,L,_;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`function Icon(): JSX.Element {
  const [status, setStatus] = React.useState<AlertProps['status']>('info');
  return <>
      <h1>아이콘</h1>
      <div className={styles.flexCol}>
        <Alert.Root className={styles.root}>
          <CheckIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an custom icon alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status={status}>
          <Alert.StatusIcon className={styles.icon} info={<CheckIcon />} success={<SuccessIcon />} warning={<WarningIcon />} error={<ErrorIcon />} />
          <Alert.Content className={styles.content}>
            This is an custom icon alert by AlertStatusIcon
          </Alert.Content>
        </Alert.Root>
        <div>
          <button type="button" onClick={() => {
          setStatus('info');
        }}>
            info
          </button>
          <button type="button" onClick={() => {
          setStatus('success');
        }}>
            success
          </button>
          <button type="button" onClick={() => {
          setStatus('warning');
        }}>
            warning
          </button>
          <button type="button" onClick={() => {
          setStatus('error');
        }}>
            error
          </button>
        </div>
      </div>
    </>;
}`,...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const q=["Basic","Title","Icon"];export{d as Basic,u as Icon,m as Title,q as __namedExportsOrder,O as default};
