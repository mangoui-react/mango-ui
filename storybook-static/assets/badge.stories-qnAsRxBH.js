import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as c}from"./index-eK40FDle.js";const F=c.createContext({}),N=c.forwardRef((r,B)=>{const{placement:a="top-right",max:p,children:l,...y}=r,J=c.useMemo(()=>({max:p}),[p]);return e.jsx(F.Provider,{value:J,children:e.jsx("div",{...y,"data-placement":a,ref:B,children:l})})});N.displayName="Badge";const X=N;N.__docgenInfo={description:"",methods:[],displayName:"Badge"};const j=c.forwardRef((r,B)=>{const{children:a,...p}=r,{max:l}=c.useContext(F),y=c.useMemo(()=>l&&typeof a=="number"&&a>l?`${l}+`:a,[a,l]);return e.jsx("div",{...p,ref:B,children:y})});j.displayName="Badge.Content";const P=j;j.__docgenInfo={description:"",methods:[],displayName:"Badge.Content"};const n={Root:X,Content:P};var t="_13rljs11",s="_13rljs10";const $={title:"Components/Badge"};function d(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,paddingBottom:20},children:[e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,children:2}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,children:"text"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t}),e.jsx(o,{})]})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,children:"longTextBadge"}),e.jsx(o,{})]})]})}function i(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Max 값 설정"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[e.jsxs(n.Root,{className:s,max:99,children:[e.jsx(n.Content,{className:t,children:1}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,max:99,children:[e.jsx(n.Content,{className:t,children:100}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,max:999,children:[e.jsx(n.Content,{className:t,children:1e3}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,max:99999,children:[e.jsx(n.Content,{className:t,children:1e5}),e.jsx(o,{})]})]})]})}function m(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Size"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20},children:[e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,style:{minWidth:10,height:10,fontSize:"calc(7px)",borderRadius:"calc(5px)",lineHeight:"10px"},children:"small"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,children:"medium"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,style:{minWidth:20,height:20,fontSize:"calc(20px - 3px)",borderRadius:"calc(20px / 2)",lineHeight:"20px"},children:"large"}),e.jsx(o,{})]})]})]})}function g(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Color"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:30},children:[e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,style:{backgroundColor:"green",color:"white"},children:"green"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,style:{backgroundColor:"#ffff00",color:"black"},children:"#ffff00"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,style:{backgroundColor:"#000000",color:"white",border:".0625rem solid white"},children:"#000000"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,children:[e.jsx(n.Content,{className:t,style:{backgroundColor:"#ddbbbb",color:"white"},children:"#ddbbbb"}),e.jsx(o,{})]})]})]})}function x(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,paddingBottom:20},children:[e.jsxs("div",{style:{display:"flex",gap:25,marginLeft:25},children:[e.jsxs(n.Root,{className:s,placement:"top-left",children:[e.jsx(n.Content,{className:t,children:"top-left"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,placement:"top",children:[e.jsx(n.Content,{className:t,children:"top"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,placement:"top-right",children:[e.jsx(n.Content,{className:t,children:"top-right"}),e.jsx(o,{})]})]}),e.jsxs("div",{style:{display:"flex",gap:25,marginLeft:25},children:[e.jsxs(n.Root,{className:s,placement:"bottom-left",children:[e.jsx(n.Content,{className:t,children:"bottom-left"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,placement:"bottom",children:[e.jsx(n.Content,{className:t,children:"bottom"}),e.jsx(o,{})]}),e.jsxs(n.Root,{className:s,placement:"bottom-right",children:[e.jsx(n.Content,{className:t,children:"bottom-right"}),e.jsx(o,{})]})]})]})]})}function h(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"BadgeOnly"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,paddingBottom:20},children:[e.jsx(n.Root,{className:s,children:e.jsx(n.Content,{className:t,style:{minWidth:10,height:10,fontSize:"calc(7px)",borderRadius:"calc(5px)",lineHeight:"10px"}})}),e.jsx(n.Root,{className:s,children:e.jsx(n.Content,{className:t,style:{backgroundColor:"orange"}})}),e.jsx(n.Root,{className:s,children:e.jsx(n.Content,{className:t,style:{minWidth:20,height:20,fontSize:"calc(20px - 3px)",borderRadius:"calc(20px / 2)",lineHeight:"20px",backgroundColor:"#ddbbbb"}})})]})]})}function o(r){return e.jsx("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...r,children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};i.__docgenInfo={description:"",methods:[],displayName:"Max"};m.__docgenInfo={description:"",methods:[],displayName:"Size"};g.__docgenInfo={description:"",methods:[],displayName:"Color"};x.__docgenInfo={description:"",methods:[],displayName:"Placement"};h.__docgenInfo={description:"",methods:[],displayName:"BadgeOnly"};var C,R,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      paddingBottom: 20
    }}>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content}>{2}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content}>text</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} />
          <UserIcon />
        </Badge.Root>
      </div>
      <Badge.Root className={styles.root}>
        <Badge.Content className={styles.content}>longTextBadge</Badge.Content>
        <UserIcon />
      </Badge.Root>
    </>;
}`,...(f=(R=d.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var u,b,I;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`function Max(): JSX.Element {
  return <>
      <h1>Max 값 설정</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }}>
        <Badge.Root className={styles.root} max={99}>
          <Badge.Content className={styles.content}>{1}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root} max={99}>
          <Badge.Content className={styles.content}>{100}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root} max={999}>
          <Badge.Content className={styles.content}>{1000}</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root} max={99999}>
          <Badge.Content className={styles.content}>{100000}</Badge.Content>
          <UserIcon />
        </Badge.Root>
      </div>
    </>;
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var v,S,U;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`function Size(): JSX.Element {
  return <>
      <h1>Size</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }}>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          minWidth: 10,
          height: 10,
          fontSize: 'calc(7px)',
          borderRadius: 'calc(5px)',
          lineHeight: '10px'
        }}>
            small
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content}>medium</Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          minWidth: 20,
          height: 20,
          fontSize: 'calc(20px - 3px)',
          borderRadius: 'calc(20px / 2)',
          lineHeight: '20px'
        }}>
            large
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
      </div>
    </>;
}`,...(U=(S=m.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var _,w,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`function Color(): JSX.Element {
  return <>
      <h1>Color</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }}>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          backgroundColor: 'green',
          color: 'white'
        }}>
            green
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          backgroundColor: '#ffff00',
          color: 'black'
        }}>
            #ffff00
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          backgroundColor: '#000000',
          color: 'white',
          border: '.0625rem solid white'
        }}>
            #000000
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          backgroundColor: '#ddbbbb',
          color: 'white'
        }}>
            #ddbbbb
          </Badge.Content>
          <UserIcon />
        </Badge.Root>
      </div>
    </>;
}`,...(z=(w=g.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var k,M,E;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`function Placement(): JSX.Element {
  return <>
      <h1>기본</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      paddingBottom: 20
    }}>
        <div style={{
        display: 'flex',
        gap: 25,
        marginLeft: 25
      }}>
          <Badge.Root className={styles.root} placement="top-left">
            <Badge.Content className={styles.content}>top-left</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="top">
            <Badge.Content className={styles.content}>top</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="top-right">
            <Badge.Content className={styles.content}>top-right</Badge.Content>
            <UserIcon />
          </Badge.Root>
        </div>

        <div style={{
        display: 'flex',
        gap: 25,
        marginLeft: 25
      }}>
          <Badge.Root className={styles.root} placement="bottom-left">
            <Badge.Content className={styles.content}>bottom-left</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="bottom">
            <Badge.Content className={styles.content}>bottom</Badge.Content>
            <UserIcon />
          </Badge.Root>
          <Badge.Root className={styles.root} placement="bottom-right">
            <Badge.Content className={styles.content}>bottom-right</Badge.Content>
            <UserIcon />
          </Badge.Root>
        </div>
      </div>
    </>;
}`,...(E=(M=x.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var H,W,O;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`function BadgeOnly(): JSX.Element {
  return <>
      <h1>BadgeOnly</h1>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      paddingBottom: 20
    }}>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          minWidth: 10,
          height: 10,
          fontSize: 'calc(7px)',
          borderRadius: 'calc(5px)',
          lineHeight: '10px'
        }} />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          backgroundColor: 'orange'
        }} />
        </Badge.Root>
        <Badge.Root className={styles.root}>
          <Badge.Content className={styles.content} style={{
          minWidth: 20,
          height: 20,
          fontSize: 'calc(20px - 3px)',
          borderRadius: 'calc(20px / 2)',
          lineHeight: '20px',
          backgroundColor: '#ddbbbb'
        }} />
        </Badge.Root>
      </div>
    </>;
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const V=["Basic","Max","Size","Color","Placement","BadgeOnly"];export{h as BadgeOnly,d as Basic,g as Color,i as Max,x as Placement,m as Size,V as __namedExportsOrder,$ as default};
