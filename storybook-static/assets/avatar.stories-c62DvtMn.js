import{j as t}from"./jsx-runtime-bkLU2cdM.js";import{R as s}from"./index-eK40FDle.js";import{S as J}from"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";const h=s.forwardRef((e,l)=>{const{children:a,...n}=e;return t.jsx("div",{...n,ref:l,children:a})});h.displayName="Avatar";const M=h;h.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const A=s.createContext({computedMax:5,extraAvatarCount:{current:0}}),g=s.forwardRef((e,l)=>{const{max:a=5,children:n,...m}=e,i=s.useRef(0),c=a<1?1:a,r=s.useMemo(()=>({computedMax:c,extraAvatarCount:i}),[c]);return t.jsx(A.Provider,{value:r,children:t.jsx("div",{...m,ref:l,children:n})})});g.displayName="Avatar.Group";const X=g;g.__docgenInfo={description:"",methods:[],displayName:"Avatar.Group"};const N=s.forwardRef((e,l)=>{const{children:a,asChild:n,...m}=e,{extraAvatarCount:i}=s.useContext(A),c=n?J:M,r=i.current;return r>0?t.jsx(c,{...m,ref:l,children:a??`+${r}`}):null});N.displayName="Avatar.Extra";const $=N;N.__docgenInfo={description:"",methods:[],displayName:"Avatar.Extra"};const f=s.forwardRef((e,l)=>{const{children:a,...n}=e,{computedMax:m,extraAvatarCount:i}=s.useContext(A),c=s.Children.count(a);return i.current=c>m?c-m:0,t.jsx("div",{...n,ref:l,children:s.Children.toArray(a).slice(0,c-i.current).map(r=>s.isValidElement(r)?s.cloneElement(r):null)})});f.displayName="Avatar.GroupContent";const L=f;f.__docgenInfo={description:"",methods:[],displayName:"Avatar.GroupContent"};function V({src:e,srcSet:l,crossOrigin:a,referrerPolicy:n}){const[m,i]=s.useState("pending");return s.useEffect(()=>{if(!e)return;i("loading");let c=!0;const r=new Image;return r.onload=()=>{c&&i("loaded")},r.onerror=()=>{c&&i("error")},r.src=e,l&&(r.srcset=l),a&&(r.crossOrigin=a),n&&(r.referrerPolicy=n),()=>{c=!1}},[a,n,e,l]),m}const j=s.forwardRef((e,l)=>{const{src:a,srcSet:n,sizes:m,alt:i,crossOrigin:c,referrerPolicy:r,...z}=e,F=V({src:a,srcSet:n,crossOrigin:c,referrerPolicy:r});return a&&F!=="error"?t.jsx("img",{...z,ref:l,alt:i,src:a,srcSet:n,sizes:m}):null});j.displayName="Avatar.Img";const O=j;j.__docgenInfo={description:"",methods:[],displayName:"Avatar.Img"};const o={Root:M,Extra:$,Group:X,GroupContent:L,Img:O};var R="_1546hs40",y="_1546hs41",P="_1546hs43",d="_1546hs42";const K={title:"Components/Avatar"};function p(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"기본"}),t.jsx(o.Root,{className:d,children:"U"}),t.jsx(o.Root,{className:d,children:t.jsx(u,{})})]})}function v(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"이미지"}),t.jsx(o.Root,{className:d,children:t.jsx(o.Img,{className:P,src:"/images/avatar.png"})})]})}function x(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"그룹핑"}),t.jsxs(o.Group,{className:R,children:[t.jsxs(o.GroupContent,{className:y,children:[t.jsx(o.Root,{className:d,children:t.jsx(u,{})}),t.jsx(o.Root,{className:d,children:t.jsx(u,{})}),t.jsx(o.Root,{className:d,children:t.jsx(u,{})})]}),t.jsx(o.Extra,{})]}),t.jsxs(o.Group,{className:R,max:2,children:[t.jsxs(o.GroupContent,{className:y,children:[t.jsx(o.Root,{className:d,children:t.jsx(u,{})}),t.jsx(o.Root,{className:d,children:t.jsx(u,{})}),t.jsx(o.Root,{className:d,children:t.jsx(u,{})})]}),t.jsx(o.Extra,{className:d})]})]})}function u(e){return t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}p.__docgenInfo={description:"",methods:[],displayName:"Basic"};v.__docgenInfo={description:"",methods:[],displayName:"Img"};x.__docgenInfo={description:"",methods:[],displayName:"Grouping"};var I,C,G;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Avatar.Root className={styles.root}>U</Avatar.Root>
      <Avatar.Root className={styles.root}>
        <UserIcon />
      </Avatar.Root>
    </>;
}`,...(G=(C=p.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var _,E,w;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`function Img(): JSX.Element {
  return <>
      <h1>이미지</h1>
      <Avatar.Root className={styles.root}>
        <Avatar.Img className={styles.img} src="/images/avatar.png" />
      </Avatar.Root>
    </>;
}`,...(w=(E=v.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var U,S,B;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`function Grouping(): JSX.Element {
  return <>
      <h1>그룹핑</h1>
      <Avatar.Group className={styles.group}>
        <Avatar.GroupContent className={styles.groupContent}>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
        </Avatar.GroupContent>
        <Avatar.Extra />
      </Avatar.Group>

      <Avatar.Group className={styles.group} max={2}>
        <Avatar.GroupContent className={styles.groupContent}>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
          <Avatar.Root className={styles.root}>
            <UserIcon />
          </Avatar.Root>
        </Avatar.GroupContent>
        <Avatar.Extra className={styles.root} />

        {/* <Avatar.Extra asChild>
          <Avatar.Root className={styles.root}>+1</Avatar.Root>
         </Avatar.Extra> */}
      </Avatar.Group>
    </>;
}`,...(B=(S=x.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const Q=["Basic","Img","Grouping"];export{p as Basic,x as Grouping,v as Img,Q as __namedExportsOrder,K as default};
