import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as r}from"./index-eK40FDle.js";import{u as ee}from"./use-controlled-3NL49yyH.js";function O(n,s){return r.useMemo(()=>s&&(typeof n>"u"||n===null||!Array.isArray(n))?[]:n,[n,s])}function J(n,s,a){const c=a&&!Array.isArray(n)?void 0:n,[o,l]=ee(c,s);return[o,l]}const B=r.createContext({expandedIndex:0,setExpanded:()=>{}}),F=r.forwardRef((n,s)=>{const{defaultValue:a,value:c,children:o,toggle:l,multiple:m,disabled:h,renderMode:u="selecting",onValueChange:i,...x}=n,y=O(void 0,m),[d,p]=J(void 0,y,m),f=O(a,m),[A,N]=J(c,f,m),C=r.useCallback((v,Z,b)=>{p(Z),N(b),b!==void 0&&b!==A&&(i==null||i(b))},[A,i,p,N]),Y=r.useMemo(()=>({expandedIndex:d,expandedValue:A,setExpanded:C,toggle:l,multiple:m,disabled:h,renderMode:u}),[d,A,C,l,m,h,u]);let L=-1;return e.jsx(B.Provider,{value:Y,children:e.jsx("div",{...x,ref:s,children:r.Children.map(o,v=>r.isValidElement(v)?(L++,r.cloneElement(v,{index:L})):v)})})});F.displayName="Accordion";const ne=F;F.__docgenInfo={description:"",methods:[],displayName:"Accordion"};function Q(n){return e.jsx("svg",{width:"1em",height:"1em",focusable:"false",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}Q.__docgenInfo={description:"",methods:[],displayName:"ArrowOutlineDownIcon"};function V(n){return n?"open":"closed"}function se({index:n,value:s,expandedIndex:a,expandedValue:c}){return s!==void 0?Array.isArray(c)?c.some(o=>s===o):s===c:Array.isArray(a)?a.some(o=>n===o):n===a}function T({index:n,value:s,expandedIndex:a,expandedValue:c,setExpanded:o,toggle:l,multiple:m,disabled:h}){const u=se({index:n,value:s,expandedIndex:a,expandedValue:c}),i=r.useCallback(d=>{u?o(d,null,null):o(d,n,s)},[u,s,n,o]),x=r.useCallback(d=>{const p=Array.isArray(a)?a:[],f=Array.isArray(c)?c:[];if(u){const A=p.filter(C=>C!==n),N=f.filter(C=>C!==s);o(d,A,N)}else{const A=[...p,n],N=[...f];s!==void 0&&N.push(s),o(d,A,N)}},[a,c,u,o,n,s]),y=r.useCallback(d=>{h||(m?x(d):l?i(d):o(d,n,s))},[h,s,n,m,x,o,l,i]);return{expanded:u,onHeaderClick:y}}const R=r.createContext({index:0,expanded:!1,renderMode:"selected"}),D=r.forwardRef((n,s)=>{const{expandedIndex:a,expandedValue:c,setExpanded:o,toggle:l,multiple:m,disabled:h,renderMode:u}=r.useContext(B),{index:i=0,value:x,disabled:y=h,renderMode:d=u,children:p,...f}=n,{expanded:A}=T({index:i,value:x,expandedIndex:a,expandedValue:c,setExpanded:o,toggle:l,multiple:m,disabled:y}),N=typeof p=="function"?p(A):p,C=r.useMemo(()=>({index:i,value:x,expanded:A,disabled:y,renderMode:d}),[y,A,x,i,d]);return e.jsx(R.Provider,{value:C,children:e.jsx("div",{...f,"data-state":V(A),"data-disabled":y?"":void 0,ref:s,children:N})})});D.displayName="Accordion.Item";const oe=D;D.__docgenInfo={description:"",methods:[],displayName:"Accordion.Item"};const E=r.forwardRef((n,s)=>{const{style:a,...c}=n,{expanded:o}=r.useContext(R);return e.jsx(Q,{...c,ref:s,style:o?{transform:"rotate(180deg)",...a}:{transition:"transform 0.2s",...a}})});E.displayName="Accordion.ArrowIcon";const te=E;E.__docgenInfo={description:"",methods:[],displayName:"Accordion.ArrowIcon"};const S=r.forwardRef((n,s)=>{const{style:a,children:c,...o}=n,{expanded:l,disabled:m,renderMode:h}=r.useContext(R),u=l?{display:"block",height:"auto"}:{display:"none",height:0},i=r.useRef(!1),x=()=>(h==="selected"&&l&&(i.current=!0),h==="force"||i.current||l?c:null);return e.jsx("div",{...o,"data-state":V(l),"data-disabled":m?"":void 0,ref:s,style:{...u,...a},children:x()})});S.displayName="Accordion.Content";const re=S;S.__docgenInfo={description:"",methods:[],displayName:"Accordion.Content"};const $=r.forwardRef((n,s)=>{const{children:a,onClick:c,...o}=n,{expandedIndex:l,expandedValue:m,setExpanded:h,toggle:u,multiple:i}=r.useContext(B),{index:x,value:y,expanded:d,disabled:p}=r.useContext(R),{onHeaderClick:f}=T({index:x,value:y,expandedIndex:l,expandedValue:m,setExpanded:h,toggle:u,multiple:i,disabled:p}),A=N=>{f(N),c==null||c(N)};return e.jsx("div",{...o,"data-state":V(d),"data-disabled":p?"":void 0,ref:s,onClick:A,children:a})});$.displayName="Accordion.Header";const ce=$;$.__docgenInfo={description:"",methods:[],displayName:"Accordion.Header"};const t={Root:ne,Item:oe,Header:ce,Content:re,ArrowIcon:te};var k="_164a44n7 _164a44n5",I="_164a44n4",j="_164a44n2",w="_164a44n1",P="_164a44n6 _164a44n5",U="_164a44n0",H="_164a44n3";const ie={title:"Components/Accordion"};function g(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(t.Root,{className:U,children:[e.jsxs(t.Item,{className:w,children:[e.jsxs(t.Header,{className:j,children:[e.jsx("span",{className:H,children:"Panel Header1"}),e.jsx(t.ArrowIcon,{})]}),e.jsx(t.Content,{className:I,children:"Content1"})]}),e.jsxs(t.Item,{className:w,children:[e.jsxs(t.Header,{className:j,children:[e.jsx("span",{className:H,children:"Panel Header2"}),e.jsx(t.ArrowIcon,{})]}),e.jsx(t.Content,{className:I,children:"Content2"})]}),e.jsxs(t.Item,{className:w,children:[e.jsxs(t.Header,{className:j,children:[e.jsx("span",{className:H,children:"Panel Header3"}),e.jsx(t.ArrowIcon,{})]}),e.jsx(t.Content,{className:I,children:"Content3"})]})]})]})}function _(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"children 이 함수"}),e.jsxs(t.Root,{className:U,children:[e.jsx(t.Item,{className:w,children:n=>e.jsxs(e.Fragment,{children:[e.jsxs(t.Header,{className:j,children:[e.jsx("span",{className:H,children:"Panel Header1"}),e.jsx(M,{className:`${n?P:k}`})]}),e.jsx(t.Content,{className:I,children:"Content1"})]})}),e.jsx(t.Item,{className:w,children:n=>e.jsxs(e.Fragment,{children:[e.jsxs(t.Header,{className:j,children:[e.jsx("span",{className:H,children:"Panel Header2"}),e.jsx(M,{className:`${n?P:k}`})]}),e.jsx(t.Content,{className:I,children:"Content2"})]})}),e.jsx(t.Item,{className:w,children:n=>e.jsxs(e.Fragment,{children:[e.jsxs(t.Header,{className:j,children:[e.jsx("span",{className:H,children:"Panel Header3"}),e.jsx(M,{className:`${n?P:k}`})]}),e.jsx(t.Content,{className:I,children:"Content3"})]})})]})]})}function M(n){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"1em",height:"1em",...n,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}g.__docgenInfo={description:"",methods:[],displayName:"Basic"};_.__docgenInfo={description:"",methods:[],displayName:"ItemByFunc"};var X,z,W;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Accordion.Root className={styles.root}>
        <Accordion.Item className={styles.item}>
          <Accordion.Header className={styles.header}>
            <span className={styles.title}>Panel Header1</span>
            <Accordion.ArrowIcon />
          </Accordion.Header>
          <Accordion.Content className={styles.content}>Content1</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          <Accordion.Header className={styles.header}>
            <span className={styles.title}>Panel Header2</span>
            <Accordion.ArrowIcon />
          </Accordion.Header>
          <Accordion.Content className={styles.content}>Content2</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          <Accordion.Header className={styles.header}>
            <span className={styles.title}>Panel Header3</span>
            <Accordion.ArrowIcon />
          </Accordion.Header>
          <Accordion.Content className={styles.content}>Content3</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>;
}`,...(W=(z=g.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var q,G,K;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`function ItemByFunc(): JSX.Element {
  return <>
      <h1>children 이 함수</h1>
      <Accordion.Root className={styles.root}>
        <Accordion.Item className={styles.item}>
          {(expanded: boolean) => <>
              <Accordion.Header className={styles.header}>
                <span className={styles.title}>Panel Header1</span>
                <ChevronDownIcon className={\`\${expanded ? styles.openArrow : styles.closeArrow}\`} />
              </Accordion.Header>
              <Accordion.Content className={styles.content}>Content1</Accordion.Content>
            </>}
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          {(expanded: boolean) => <>
              <Accordion.Header className={styles.header}>
                <span className={styles.title}>Panel Header2</span>
                <ChevronDownIcon className={\`\${expanded ? styles.openArrow : styles.closeArrow}\`} />
              </Accordion.Header>
              <Accordion.Content className={styles.content}>Content2</Accordion.Content>
            </>}
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          {(expanded: boolean) => <>
              <Accordion.Header className={styles.header}>
                <span className={styles.title}>Panel Header3</span>
                <ChevronDownIcon className={\`\${expanded ? styles.openArrow : styles.closeArrow}\`} />
              </Accordion.Header>
              <Accordion.Content className={styles.content}>Content3</Accordion.Content>
            </>}
        </Accordion.Item>
      </Accordion.Root>
    </>;
}`,...(K=(G=_.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const me=["Basic","ItemByFunc"];export{g as Basic,_ as ItemByFunc,me as __namedExportsOrder,ie as default};
