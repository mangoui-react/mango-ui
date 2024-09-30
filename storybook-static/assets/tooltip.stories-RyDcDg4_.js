import{j as o}from"./jsx-runtime-bkLU2cdM.js";import{R as a}from"./index-eK40FDle.js";import{P as E}from"./index-hIbLIYwv.js";import{u as U}from"./use-controlled-3NL49yyH.js";import{u as z}from"./use-merged-ref-IdjoZWBX.js";import{u as W}from"./use-portal-_c5zPIwn.js";import{S as Z}from"./slot-Ej57t_-l.js";import"./index-fcRgSpbG.js";const O=a.createContext({triggerRef:{current:null},isPointerInTransitRef:{current:!1},onPointerInTransitChange:()=>{},onOpen:()=>{},onClose:()=>{}});function L(t){const{open:n,defaultOpen:e,children:r,onOpenChange:s}=t,i=a.useRef(null),l=a.useRef(!1),[T,d]=U(n,e),m=a.useCallback(()=>{d(!0),s==null||s(!0)},[s,d]),p=a.useCallback(()=>{d(!1),s==null||s(!1)},[s,d]),w=a.useCallback(y=>{l.current=y},[]),C=a.useMemo(()=>({open:T,triggerRef:i,isPointerInTransitRef:l,onPointerInTransitChange:w,onOpen:m,onClose:p}),[p,m,w,T]);return o.jsx(E.Root,{children:o.jsx(O.Provider,{value:C,children:r})})}L.displayName="Tooltip";L.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{open:{required:!1,tsType:{name:"boolean"},description:"Tooltip show/hide"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"TooltipTrigger 마우스 오버시 open = true, 마우스 아웃시 open = false"}}};const k=a.forwardRef((t,n)=>o.jsx(E.Arrow,{...t,ref:n}));k.displayName="Tooltip.Arrow";const ee=k;k.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Arrow"};function te(t,n){const e=Math.abs(n.top-t.y),r=Math.abs(n.bottom-t.y),s=Math.abs(n.right-t.x),i=Math.abs(n.left-t.x);switch(Math.min(e,r,s,i)){case i:return"left";case s:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function oe(t,n,e=5){const r=[];switch(n){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function ne(t){const{top:n,right:e,bottom:r,left:s}=t;return[{x:s,y:n},{x:e,y:n},{x:e,y:r},{x:s,y:r}]}function re(t,n){const{x:e,y:r}=t;let s=!1;for(let i=0,l=n.length-1;i<n.length;l=i++){const T=n[i].x,d=n[i].y,m=n[l].x,p=n[l].y;d>r!=p>r&&e<(m-T)*(r-d)/(p-d)+T&&(s=!s)}return s}function se(t){const n=t.slice();return n.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),ie(n)}function ie(t){if(t.length<=1)return t.slice();const n=[];for(let r=0;r<t.length;r++){const s=t[r];for(;n.length>=2;){const i=n[n.length-1],l=n[n.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))n.pop();else break}n.push(s)}n.pop();const e=[];for(let r=t.length-1;r>=0;r--){const s=t[r];for(;e.length>=2;){const i=e[e.length-1],l=e[e.length-2];if((i.x-l.x)*(s.y-l.y)>=(i.y-l.y)*(s.x-l.x))e.pop();else break}e.push(s)}return e.pop(),n.length===1&&e.length===1&&n[0].x===e[0].x&&n[0].y===e[0].y?n:n.concat(e)}const M=a.forwardRef((t,n)=>{const{side:e="top",style:r,children:s,...i}=t,{open:l,triggerRef:T,onClose:d,onPointerInTransitChange:m}=a.useContext(O),[p,w]=a.useState(null),C=z(n,h=>{w(h)}),[y,P]=a.useState(null),u=T.current,x=a.useCallback(()=>{P(null),m(!1)},[m]),v=a.useCallback((h,g)=>{const f=h.currentTarget,N={x:h.clientX,y:h.clientY},_=te(N,f.getBoundingClientRect()),S=oe(N,_),K=ne(g.getBoundingClientRect()),Q=se([...S,...K]);P(Q),m(!0)},[m]);return a.useEffect(()=>()=>{x()},[x]),a.useEffect(()=>{if(u&&p){const h=f=>{console.log("content ============ trigger:handleTriggerLeave"),v(f,p)},g=f=>{console.log("content ============ content:handleTriggerLeave"),v(f,u)};return u.addEventListener("pointerleave",h),p.addEventListener("pointerleave",g),()=>{u.removeEventListener("pointerleave",h),p.removeEventListener("pointerleave",g)}}},[u,p,v,x]),a.useEffect(()=>{if(y){const h=g=>{const f=g.target,N={x:g.clientX,y:g.clientY},_=(u==null?void 0:u.contains(f))||(p==null?void 0:p.contains(f)),S=!re(N,y);_?x():S&&(x(),d())};return document.addEventListener("pointermove",h),()=>{document.removeEventListener("pointermove",h)}}},[p,x,d,y,u]),a.useEffect(()=>{if(u){const h=g=>{const f=g.target;f!=null&&f.contains(u)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>{window.removeEventListener("scroll",h,{capture:!0})}}},[d,u]),l?o.jsx(E.Content,{"data-state":l?"open":"closed",side:e,...i,ref:C,style:{...r,"--melio-tooltip-content-transform-origin":"var(--melio-popper-transform-origin)","--melio-tooltip-content-available-width":"var(--melio-popper-available-width)","--melio-tooltip-content-available-height":"var(--melio-popper-available-height)","--melio-tooltip-trigger-width":"var(--melio-popper-anchor-width)","--melio-tooltip-trigger-height":"var(--melio-popper-anchor-height)"},children:s}):null});M.displayName="Tooltip.Content";const le=M;M.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Content"};function q(t){const{container:n,children:e}=t,{Portal:r}=W(n);return o.jsx(r,{children:e})}q.displayName="Tooltip.Portal";q.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Portal",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},container:{required:!1,tsType:{name:"ContainerType"},description:`Tooltip 이 mount 되는 node
open 과 함께 사용해야 적용됨
@default document.body`}}};const B=a.forwardRef((t,n)=>{const{children:e,asChild:r,onPointerMove:s,onPointerLeave:i,...l}=t,{open:T,triggerRef:d,isPointerInTransitRef:m,onOpen:p,onClose:w}=a.useContext(O),C=z(d,n),y=a.useRef(!1),P=r?Z:"button",u=v=>{!y.current&&!m.current&&(p(),y.current=!0),s==null||s(v)},x=v=>{m.current&&w(),y.current=!1,i==null||i(v)};return o.jsx(E.Anchor,{asChild:!0,children:o.jsx(P,{type:"button","data-state":T?"open":"closed",...l,ref:C,onPointerMove:u,onPointerLeave:x,children:e??"Tooltip"})})});B.displayName="Tooltip.Trigger";const ae=B;B.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Trigger"};const c={Root:L,Arrow:ee,Content:le,Portal:q,Trigger:ae};var I="_1an74lw1",A="_1an74lw0";const Te={title:"Components/Tooltip"};function R(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"기본"}),o.jsxs(c.Root,{children:[o.jsx(c.Trigger,{asChild:!0,children:o.jsx("div",{style:{width:120},children:"Tooltip"})}),o.jsx(c.Portal,{children:o.jsx(c.Content,{className:A,sideOffset:5,children:"tooltip message"})})]})]})}function j(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Arrow"}),o.jsxs(c.Root,{children:[o.jsx(c.Trigger,{asChild:!0,children:o.jsx("div",{style:{width:120,border:".0625rem solid #618761",padding:10},children:"Tooltip"})}),o.jsx(c.Portal,{children:o.jsxs(c.Content,{className:A,children:["tooltip message",o.jsx(c.Arrow,{className:I})]})})]})]})}function b(){return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Position"}),o.jsxs(c.Root,{children:[o.jsx(c.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",style:{width:200},children:"BOTTOM-END"})}),o.jsx(c.Portal,{children:o.jsxs(c.Content,{className:A,side:"bottom",align:"end",children:["tooltip message",o.jsx(c.Arrow,{className:I})]})})]}),o.jsx("div",{style:{width:"100%",height:30}}),o.jsx("h3",{children:"맨 우측 위치시"}),o.jsxs("div",{style:{display:"flex",gap:5},children:[o.jsx("div",{style:{width:"100%"}}),o.jsxs(c.Root,{children:[o.jsx(c.Trigger,{asChild:!0,children:o.jsx("button",{type:"button",style:{whiteSpace:"nowrap"},children:"Open Popover"})}),o.jsx(c.Portal,{children:o.jsxs(c.Content,{className:A,side:"top",align:"start",children:[o.jsx("div",{style:{padding:10,whiteSpace:"nowrap"},children:"This is a Tooltip Content"}),o.jsx(c.Arrow,{className:I})]})})]})]})]})}R.__docgenInfo={description:"",methods:[],displayName:"Basic"};j.__docgenInfo={description:"",methods:[],displayName:"Arrow"};b.__docgenInfo={description:"",methods:[],displayName:"Position"};var G,F,X;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div style={{
          width: 120
        }}>Tooltip</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content} sideOffset={5}>
            tooltip message
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </>;
}`,...(X=(F=R.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var H,J,D;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`function Arrow(): JSX.Element {
  return <>
      <h1>Arrow</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div style={{
          width: 120,
          border: '.0625rem solid #618761',
          padding: 10
        }}>Tooltip</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content}>
            tooltip message
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </>;
}`,...(D=(J=j.parameters)==null?void 0:J.docs)==null?void 0:D.source}}};var Y,$,V;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`function Position(): JSX.Element {
  return <>
      <h1>Position</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button type="button" style={{
          width: 200
        }}>
            BOTTOM-END
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content} side="bottom" align="end">
            tooltip message
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <div style={{
      width: '100%',
      height: 30
    }} />
      <h3>맨 우측 위치시</h3>
      <div style={{
      display: 'flex',
      gap: 5
    }}>
        <div style={{
        width: '100%'
      }} />
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button type="button" style={{
            whiteSpace: 'nowrap'
          }}>
              Open Popover
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className={styles.content} side="top" align="start">
              <div style={{
              padding: 10,
              whiteSpace: 'nowrap'
            }}>This is a Tooltip Content</div>
              <Tooltip.Arrow className={styles.arrow} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </>;
}`,...(V=($=b.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};const ye=["Basic","Arrow","Position"];export{j as Arrow,R as Basic,b as Position,ye as __namedExportsOrder,Te as default};
