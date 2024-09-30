import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as b}from"./index-eK40FDle.js";import{D as d}from"./index-02ZOFDzY.js";import"./use-controlled-3NL49yyH.js";import"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";import"./use-portal-_c5zPIwn.js";import"./index-fcRgSpbG.js";const F=b.createContext({});function x(l){const{open:c,placement:i="right",children:h,...D}=l,X=b.useMemo(()=>({placement:i}),[i]);return e.jsx(F.Provider,{value:X,children:e.jsx(d.Root,{...D,role:"presentation",open:c,children:h})})}x.displayName="Drawer";x.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'right' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:`drawer 열리는 위치
@default right`}},composes:["DialogProps"]};const j=b.forwardRef((l,c)=>{const{placement:i}=b.useContext(F);return e.jsx(d.Content,{"data-placement":i,...l,ref:c})});j.displayName="Drawer.Content";const L=j;j.__docgenInfo={description:"",methods:[],displayName:"Drawer.Content"};const r={Root:x,Trigger:d.Trigger,Portal:d.Portal,Content:L,Close:d.Close,Backdrop:d.Backdrop};var t="_1l5hy9j0",y="_1l5hy9j5",o="_1l5hy9j3",s="_1l5hy9j2",J="_1l5hy9j6",a="_1l5hy9j4";const Q={title:"Components/Drawer"};function u(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Drawer"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})}),e.jsx("div",{className:y,children:"Drawer Content"}),e.jsxs("div",{className:J,children:[e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"취소"})}),e.jsx("button",{type:"button",style:{color:"var(--primary-text-color)",borderColor:"var(--primary-color)",background:"var(--primary-color)"},children:"확인"})]})]})]})]})]})}function p(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Placement"}),e.jsxs(r.Root,{placement:"left",children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Left"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]}),e.jsxs(r.Root,{placement:"top",children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Top"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]}),e.jsxs(r.Root,{placement:"right",children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Right"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]}),e.jsxs(r.Root,{placement:"bottom",children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Bottom"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]})]})}function m(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Size"}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"60%"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,style:{width:"60%"},children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"20%"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,style:{width:"20%"},children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"200px"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,style:{width:200},children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})})]})]})]})]})}function C(){const[l,c]=b.useState(!1),i=h=>{h(D=>!D)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"OpenChildDrawer"}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Drawer"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})}),e.jsxs("div",{className:y,children:[e.jsx("div",{className:"title",children:"Parent Drawer"}),e.jsx("button",{type:"button",onClick:()=>{i(c)},children:"openChild"})]}),e.jsx(r.Root,{open:l,onOpenChange:h=>{c(h)},children:e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsx(r.Content,{className:s,style:{width:"20%"},children:e.jsx("div",{className:y,children:e.jsx("div",{className:"title",children:"Child Drawer"})})})]})})]})]})]})]})}function w(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"destroyOnClose"}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{type:"button",children:"Open Drawer - destroyOnClose"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Backdrop,{className:t}),e.jsxs(r.Content,{className:s,destroyOnClose:!1,children:[e.jsx("div",{className:a,children:"Title"}),e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",className:o,children:e.jsx(n,{})})}),e.jsx("div",{className:y,children:"Drawer Content"}),e.jsxs("div",{className:J,children:[e.jsx(r.Close,{asChild:!0,children:e.jsx("button",{type:"button",style:{color:"var(--primary-color)",backgroundColor:"transparent",marginRight:3},children:"취소"})}),e.jsx("button",{type:"button",style:{color:"var(--primary-text-color)",borderColor:"var(--primary-color)",background:"var(--primary-color)"},children:"확인"})]})]})]})]})]})}function n(l){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor"})})}u.__docgenInfo={description:"",methods:[],displayName:"Basic"};p.__docgenInfo={description:"",methods:[],displayName:"Placement"};m.__docgenInfo={description:"",methods:[],displayName:"Size"};C.__docgenInfo={description:"",methods:[],displayName:"OpenChildDrawer"};w.__docgenInfo={description:"",methods:[],displayName:"destroyOnClose"};var g,N,v;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
            <div className={styles.body}>Drawer Content</div>
            <div className={styles.footer}>
              <Drawer.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  취소
                </button>
              </Drawer.Close>
              <button type="button" style={{
              color: 'var(--primary-text-color)',
              borderColor: 'var(--primary-color)',
              background: 'var(--primary-color)'
            }}>
                확인
              </button>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>;
}`,...(v=(N=u.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var T,k,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`function Placement(): JSX.Element {
  return <>
      <h1>Placement</h1>
      <Drawer.Root placement="left">
        <Drawer.Trigger asChild>
          <button type="button">Left</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="top">
        <Drawer.Trigger asChild>
          <button type="button">Top</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="right">
        <Drawer.Trigger asChild>
          <button type="button">Right</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="bottom">
        <Drawer.Trigger asChild>
          <button type="button">Bottom</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>;
}`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var P,f,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`function Size(): JSX.Element {
  return <>
      <h1>Size</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">60%</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} style={{
          width: '60%'
        }}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">20%</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} style={{
          width: '20%'
        }}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">200px</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} style={{
          width: 200
        }}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>;
}`,...(B=(f=m.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var O,_,S;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`function OpenChildDrawer(): JSX.Element {
  const [openChild, setOpenChild] = React.useState(false);
  const onClick = (cb: React.Dispatch<React.SetStateAction<boolean>>): void => {
    // eslint-disable-next-line n/no-callback-literal
    cb((prop: boolean) => !prop);
  };
  return <>
      <h1>OpenChildDrawer</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
            <div className={styles.body}>
              <div className="title">Parent Drawer</div>
              <button type="button" onClick={() => {
              onClick(setOpenChild);
            }}>
                openChild
              </button>
            </div>

            <Drawer.Root open={openChild} onOpenChange={_open => {
            setOpenChild(_open);
          }}>
              <Drawer.Portal>
                <Drawer.Backdrop className={styles.backdrop} />
                <Drawer.Content className={styles.content} style={{
                width: '20%'
              }}>
                  <div className={styles.body}>
                    <div className="title">Child Drawer</div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>;
}`,...(S=(_=C.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var I,z,E;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`function destroyOnClose(): JSX.Element {
  return <>
      <h1>destroyOnClose</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">Open Drawer - destroyOnClose</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} destroyOnClose={false}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
            <div className={styles.body}>Drawer Content</div>
            <div className={styles.footer}>
              <Drawer.Close asChild>
                <button type="button" style={{
                color: 'var(--primary-color)',
                backgroundColor: 'transparent',
                marginRight: 3
              }}>
                  취소
                </button>
              </Drawer.Close>
              <button type="button" style={{
              color: 'var(--primary-text-color)',
              borderColor: 'var(--primary-color)',
              background: 'var(--primary-color)'
            }}>
                확인
              </button>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>;
}`,...(E=(z=w.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const U=["Basic","Placement","Size","OpenChildDrawer","destroyOnClose"];export{u as Basic,C as OpenChildDrawer,p as Placement,m as Size,U as __namedExportsOrder,Q as default,w as destroyOnClose};
