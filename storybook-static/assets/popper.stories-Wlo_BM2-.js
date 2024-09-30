import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as d}from"./index-eK40FDle.js";import{P as o}from"./index-hIbLIYwv.js";import"./slot-Ej57t_-l.js";import"./use-merged-ref-IdjoZWBX.js";import"./index-fcRgSpbG.js";var m="i0rdjh0",f="i0rdjh2",u="i0rdjh1";const g={title:"Utilities/Popper"};function r(){const[t,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(o.Root,{children:[e.jsx(o.Anchor,{className:m,onClick:()=>{n(!0)},children:"Open Popper"}),t&&e.jsxs(o.Content,{className:u,sideOffset:5,children:[e.jsx("button",{onClick:()=>{n(!1)},children:"close"}),e.jsx(o.Arrow,{className:f,width:20,height:10})]})]})]})}function s(){const[t,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"WithCustomArrow"}),e.jsxs(o.Root,{children:[e.jsx(o.Anchor,{className:m,onClick:()=>{n(!0)},children:"Open Popper"}),t&&e.jsxs(o.Content,{className:u,side:"right",sideOffset:5,children:[e.jsx("button",{onClick:()=>{n(!1)},children:"close"}),e.jsx(o.Arrow,{offset:20,asChild:!0,children:e.jsx(C,{width:20,height:10})})]})]})]})}function C(t){return e.jsx("div",{...t,style:{...t.style,width:20,height:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"tomato"}})}r.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomArrow"};var i,a,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`function Basic(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  return <>
      <h1>기본</h1>
      <Popper.Root>
        <Popper.Anchor className={styles.anchor} onClick={() => {
        setOpen(true);
      }}>
          Open Popper
        </Popper.Anchor>
        {open && <Popper.Content className={styles.content} sideOffset={5}>
            <button onClick={() => {
          setOpen(false);
        }}>
              close
            </button>
            <Popper.Arrow className={styles.arrow} width={20} height={10} />
          </Popper.Content>}
      </Popper.Root>
    </>;
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var p,l,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`function WithCustomArrow(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  return <>
      <h1>WithCustomArrow</h1>
      <Popper.Root>
        <Popper.Anchor className={styles.anchor} onClick={() => {
        setOpen(true);
      }}>
          Open Popper
        </Popper.Anchor>
        {open && <Popper.Content className={styles.content} side="right" sideOffset={5}>
            <button onClick={() => {
          setOpen(false);
        }}>
              close
            </button>
            <Popper.Arrow offset={20} asChild>
              <CustomArrow width={20} height={10} />
            </Popper.Arrow>
          </Popper.Content>}
      </Popper.Root>
    </>;
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const R=["Basic","WithCustomArrow"];export{r as Basic,s as WithCustomArrow,R as __namedExportsOrder,g as default};
