import{j as t}from"./jsx-runtime-bkLU2cdM.js";import{R as n}from"./index-eK40FDle.js";const N=n.createContext({}),g=n.forwardRef((e,S)=>{const{currentStep:a,orientation:r="horizontal",children:o,...i}=e,c=n.useMemo(()=>({currentStep:a,orientation:r}),[a,r]);return t.jsx(N.Provider,{value:c,children:t.jsx("div",{"data-orientation":r,...i,ref:S,children:n.Children.map(o,(u,m)=>n.cloneElement(u,{index:m}))})})});g.displayName="Steps";const $=g;g.__docgenInfo={description:"",methods:[],displayName:"Steps"};const f=n.createContext({}),_=n.forwardRef((e,S)=>{const{status:a,index:r=0,children:o,...i}=e,{currentStep:c=0,orientation:u}=n.useContext(N),m=n.useMemo(()=>a!==void 0?a:c===r?"process":c>r?"finish":"wait",[c,r,a]),w=n.useMemo(()=>({index:r,status:m}),[r,m]);return t.jsx(f.Provider,{value:w,children:t.jsx("div",{"data-status":m,"data-orientation":u,...i,ref:S,children:o})})});_.displayName="Steps.Step";const D=_;_.__docgenInfo={description:"",methods:[],displayName:"Steps.Step"};const R=n.forwardRef((e,S)=>{const{children:a,...r}=e,{orientation:o}=n.useContext(N),{status:i="wait"}=n.useContext(f),c=typeof a=="function"?a(i):a;return t.jsx("div",{"data-status":i,"data-orientation":o,...r,ref:S,children:c})});R.displayName="Steps.Content";const G=R;R.__docgenInfo={description:"",methods:[],displayName:"Steps.Content"};const T=n.forwardRef((e,S)=>{const{children:a,...r}=e,{orientation:o}=n.useContext(N),{status:i="wait"}=n.useContext(f),c=typeof a=="function"?a(i):a;return t.jsx("div",{"data-status":i,"data-orientation":o,...r,ref:S,children:c})});T.displayName="Steps.Indicator";const K=T;T.__docgenInfo={description:"",methods:[],displayName:"Steps.Indicator"};const B=n.forwardRef((e,S)=>{const{orientation:a}=n.useContext(N);return t.jsx("div",{"data-orientation":a,...e,ref:S})});B.displayName="Steps.Separator";const Q=B;B.__docgenInfo={description:"",methods:[],displayName:"Steps.Separator"};function A(e){return t.jsx("svg",{width:"1em",height:"1em",viewBox:"64 64 896 896",focusable:"false","data-icon":"check",fill:"currentColor","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})})}A.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};function H(e){return t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor"})})}H.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"};const W={finish:t.jsx(A,{}),wait:null,process:null,error:t.jsx(H,{})},E=n.forwardRef((e,S)=>{const{orientation:a}=n.useContext(N),{index:r=0,status:o="wait"}=n.useContext(f),{finish:i,wait:c,process:u,error:m,...w}=e,F=n.useMemo(()=>o==="finish"?i:o==="process"?u:o==="error"?m:c,[m,i,u,o,c])??W[o];return F?n.cloneElement(F,{}):t.jsx("div",{"data-status":o,"data-orientation":a,...w,ref:S,children:r+1})});E.displayName="Steps.Status";const Y=E;E.__docgenInfo={description:"",methods:[],displayName:"Steps.Status"};const s={Root:$,Step:D,Content:G,Indicator:K,Separator:Q,Status:Y};var p="xmnw7q3",d="xmnw7q2",I="xmnw7q0",h="xmnw7q4",l="xmnw7q1";const et={title:"Components/Steps"};function j(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"기본"}),t.jsxs(s.Root,{className:I,currentStep:1,children:[t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step01"})}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsxs(s.Content,{className:p,children:[t.jsx("div",{children:"Step02"}),t.jsx("div",{children:"This is a description"})]}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step03"})})]})]})]})}function v(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"함수사용 Children"}),t.jsxs(s.Root,{className:I,currentStep:1,children:[t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,style:{width:"3rem",height:"3rem"},children:e=>e==="finish"?"완료":e}),t.jsx(s.Content,{className:p,children:e=>e==="finish"?t.jsxs("div",{children:["Step01 - ",e]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:["Step01 - ",e]}),t.jsx("div",{children:"This is a description"})]})}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsxs(s.Content,{className:p,children:[t.jsx("div",{children:"Step02"}),t.jsx("div",{children:"This is a description"})]}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step03"})})]})]})]})}function y(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Custom Status"}),t.jsxs(s.Root,{className:I,currentStep:1,children:[t.jsxs(s.Step,{className:l,status:"error",children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{finish:t.jsx(x,{}),error:t.jsx(x,{color:"red"})})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step01"})}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{finish:t.jsx(x,{}),error:t.jsx(x,{color:"red"})})}),t.jsxs(s.Content,{className:p,children:[t.jsx("div",{children:"Step02"}),t.jsx("div",{children:"This is a description"})]}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:e=>e==="wait"?t.jsx(x,{color:"gray"}):t.jsx(x,{})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step03"})})]})]})]})}function C(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Orientation"}),t.jsxs(s.Root,{className:I,orientation:"vertical",currentStep:1,children:[t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step01"})}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsxs(s.Content,{className:p,children:[t.jsx("div",{children:"Step02"}),t.jsx("div",{children:"This is a description"})]}),t.jsx(s.Separator,{className:h})]}),t.jsxs(s.Step,{className:l,children:[t.jsx(s.Indicator,{className:d,children:t.jsx(s.Status,{})}),t.jsx(s.Content,{className:p,children:t.jsx("div",{children:"Step03"})})]})]})]})}function x(e){return t.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}j.__docgenInfo={description:"",methods:[],displayName:"Basic"};v.__docgenInfo={description:"",methods:[],displayName:"ChildrenByFunc"};y.__docgenInfo={description:"",methods:[],displayName:"CustomStatus"};C.__docgenInfo={description:"",methods:[],displayName:"Orientation"};var O,U,M;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Steps.Root className={styles.root} currentStep={1}>
        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step01</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>;
}`,...(M=(U=j.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var P,q,z;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`function ChildrenByFunc(): JSX.Element {
  return <>
      <h1>함수사용 Children</h1>
      <Steps.Root className={styles.root} currentStep={1}>
        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator} style={{
          width: '3rem',
          height: '3rem'
        }}>
            {(status: StepStatusValue) => status === 'finish' ? '완료' : status}
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            {(status: StepStatusValue) => status === 'finish' ? <div>Step01 - {status}</div> : <>
                  <div>Step01 - {status}</div>
                  <div>This is a description</div>
                </>}
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>;
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var V,J,X;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`function CustomStatus(): JSX.Element {
  return <>
      <h1>Custom Status</h1>
      <Steps.Root className={styles.root} currentStep={1}>
        <Steps.Step className={styles.step} status="error">
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status finish={<UserIcon />} error={<UserIcon color="red" />} />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step01</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status finish={<UserIcon />} error={<UserIcon color="red" />} />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            {(status: StepStatusValue) => status === 'wait' ? <UserIcon color="gray" /> : <UserIcon />}
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>;
}`,...(X=(J=y.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var k,L,b;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`function Orientation(): JSX.Element {
  return <>
      <h1>Orientation</h1>
      <Steps.Root className={styles.root} orientation="vertical" currentStep={1}>
        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step01</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>;
}`,...(b=(L=C.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const nt=["Basic","ChildrenByFunc","CustomStatus","Orientation"];export{j as Basic,v as ChildrenByFunc,y as CustomStatus,C as Orientation,nt as __namedExportsOrder,et as default};
