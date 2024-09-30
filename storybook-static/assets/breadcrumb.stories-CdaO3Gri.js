import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as c}from"./index-eK40FDle.js";import{S as q}from"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";const g=c.forwardRef((a,l)=>e.jsx("nav",{...a,ref:l}));g.displayName="Breadcrumb.Root";const A=g;g.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.Root"};const L=c.forwardRef((a,l)=>{const{children:o="...",...m}=a;return e.jsx("li",{...m,ref:l,children:o})});L.displayName="Breadcrumb.Collapse";const D=L;L.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.Collapse"};const k=c.forwardRef((a,l)=>{const{children:o,...m}=a;return e.jsx("li",{...m,ref:l,children:o})});k.displayName="Breadcrumb.Item";const G=k;k.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.Item"};const S=c.forwardRef((a,l)=>{const{href:o,as:m=o!==void 0?"a":"span",children:b,asChild:x,...I}=a,j=x?q:m;return e.jsx(j,{...I,ref:l,href:o,children:b})});S.displayName="Breadcrumb.Link";const K=S;S.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.Link"};const C=c.forwardRef((a,l)=>{const{maxItems:o=5,collapse:m,children:b,...x}=a,[I,j]=c.useState(!1),y=c.useMemo(()=>{const d=[];return c.Children.forEach(b,N=>{c.isValidElement(N)&&d.push(N)}),d},[b]),O=c.useCallback(d=>m?[...d.slice(0,2),c.cloneElement(m,{key:`collapsed-${d.length}`,onClick:N=>{var _,w;j(!0),c.isValidElement(m)&&((w=(_=m.props).onClick)==null||w.call(_,N))}}),...d.slice(d.length-2,d.length)]:(console.warn("maxItems 설정 시 collapse 도 설정이 필요합니다."),d),[m]);return e.jsx("ol",{...x,ref:l,children:I||o&&y.length<=o?y:O(y)})});C.displayName="Breadcrumb.List";const Q=C;C.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.List"};const R=c.forwardRef((a,l)=>{const{children:o="/",...m}=a;return e.jsx("li",{...m,ref:l,children:o})});R.displayName="Breadcrumb.Separator";const T=R;R.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.Separator"};const s={Root:A,List:Q,Item:G,Collapse:D,Link:K,Separator:T};var W="_11wrs6m4",r="_11wrs6m1",t="_11wrs6m2",B="_11wrs6m0",n="_11wrs6m3";const re={title:"Components/Breadcrumb"};function i(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsx(s.Root,{children:e.jsxs(s.List,{className:B,children:[e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/",children:"Home"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page",children:"Page"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:"Current"})]})})]})}function u(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"CustomSeparator"}),e.jsx(s.Root,{children:e.jsxs(s.List,{className:B,children:[e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/",children:"Home"})}),e.jsx(s.Separator,{className:n,children:">"}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page",children:"Page"})}),e.jsx(s.Separator,{className:n,children:">"}),e.jsx(s.Item,{className:r,children:"Current"})]})}),e.jsx(s.Root,{children:e.jsxs(s.List,{className:B,children:[e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/",children:"Home"})}),e.jsx(s.Separator,{className:n,children:"-"}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page",children:"Page"})}),e.jsx(s.Separator,{className:n,children:"-"}),e.jsx(s.Item,{className:r,children:"Current"})]})})]})}function p(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Icon"}),e.jsx(s.Root,{children:e.jsxs(s.List,{className:B,children:[e.jsx(s.Item,{className:r,children:e.jsxs(s.Link,{className:t,href:"/",children:[e.jsx("span",{style:{display:"flex",marginRight:4},children:e.jsx(f,{})}),"Home"]})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:e.jsxs(s.Link,{className:t,href:"/page",children:[e.jsx("span",{style:{display:"flex",marginRight:4},children:e.jsx(f,{})}),"Page"]})}),e.jsx(s.Separator,{className:n}),e.jsxs(s.Item,{className:r,children:[e.jsx("span",{style:{display:"flex",marginRight:4},children:e.jsx(f,{})}),"Current"]})]})})]})}function h(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Collapsed"}),e.jsx(s.Root,{children:e.jsxs(s.List,{className:B,maxItems:5,collapse:e.jsx(s.Collapse,{className:W}),children:[e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/",children:"Home"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page1",children:"Page1"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page2",children:"Page2"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page3",children:"Page3"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:e.jsx(s.Link,{className:t,href:"/page4",children:"Page4"})}),e.jsx(s.Separator,{className:n}),e.jsx(s.Item,{className:r,children:"Current"})]})})]})}function f(a){return e.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}i.__docgenInfo={description:"",methods:[],displayName:"Basic"};u.__docgenInfo={description:"",methods:[],displayName:"CustomSeparator"};p.__docgenInfo={description:"",methods:[],displayName:"Icon"};h.__docgenInfo={description:"",methods:[],displayName:"Collapsed"};var P,v,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>;
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var H,F,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`function CustomSeparator(): JSX.Element {
  return <>
      <h1>CustomSeparator</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>{'>'}</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>{'>'}</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>-</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator}>-</Breadcrumb.Separator>

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>;
}`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var U,X,z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`function Icon(): JSX.Element {
  return <>
      <h1>Icon</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              <span style={{
              display: 'flex',
              marginRight: 4
            }}>
                <UserIcon />
              </span>
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page">
              <span style={{
              display: 'flex',
              marginRight: 4
            }}>
                <UserIcon />
              </span>
              Page
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <span style={{
            display: 'flex',
            marginRight: 4
          }}>
              <UserIcon />
            </span>
            Current
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>;
}`,...(z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var M,V,$;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`function Collapsed(): JSX.Element {
  return <>
      <h1>Collapsed</h1>

      <Breadcrumb.Root>
        <Breadcrumb.List className={styles.list} maxItems={5} collapse={<Breadcrumb.Collapse className={styles.collapse} />}>
          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/">
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page1">
              Page1
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page2">
              Page2
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page3">
              Page3
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>
            <Breadcrumb.Link className={styles.link} href="/page4">
              Page4
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator className={styles.separator} />

          <Breadcrumb.Item className={styles.item}>Current</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </>;
}`,...($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const ae=["Basic","CustomSeparator","Icon","Collapsed"];export{i as Basic,h as Collapsed,u as CustomSeparator,p as Icon,ae as __namedExportsOrder,re as default};
