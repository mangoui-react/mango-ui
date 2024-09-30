import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as n}from"./index-eK40FDle.js";import{g as N}from"./get-progress-state-maqc7S8G.js";const b=n.createContext({computedValue:0,max:100}),p=n.forwardRef((d,l)=>{const{value:r=0,max:t=100,indeterminate:o,children:a,...m}=d,g=n.useMemo(()=>Math.round((r<=t&&r>=0?r:0)/t*100),[t,r]),P=n.useMemo(()=>({value:r,max:t,computedValue:g,indeterminate:o}),[g,o,t,r]);return e.jsx(b.Provider,{value:P,children:e.jsx("div",{"data-state":N(r,t,o),"data-value":r,"data-max":t,...m,ref:l,children:a})})});p.displayName="CircularProgress";const J=p;p.__docgenInfo={description:"",methods:[],displayName:"CircularProgress"};const f=n.forwardRef((d,l)=>{const{strokeWidth:r=10,bgStyle:t,barStyle:o,...a}=d,{value:m,max:g,computedValue:P,indeterminate:F}=n.useContext(b),v=(P??0)*2.64;return e.jsxs("svg",{"data-state":N(m,g,F),"data-value":m,"data-max":g,...a,viewBox:"0 0 100 100",ref:l,children:[e.jsx("circle",{"data-component":"bg",cx:50,cy:50,r:42,fill:"transparent",strokeWidth:r,style:t}),e.jsx("circle",{"data-component":"bar",cx:50,cy:50,r:42,fill:"transparent",strokeWidth:r,strokeDasharray:`${v} ${264-v}`,style:o})]})});f.displayName="CircularProgress.Indicator";const X=f;f.__docgenInfo={description:"",methods:[],displayName:"CircularProgress.Indicator"};const j=n.forwardRef((d,l)=>{const{children:r,...t}=d,{value:o,max:a,indeterminate:m}=n.useContext(b);return e.jsx("div",{"data-state":N(o,a,m),"data-value":o,"data-max":a,...t,ref:l,children:r??o})});j.displayName="CircularProgress.Label";const M=j;j.__docgenInfo={description:"",methods:[],displayName:"CircularProgress.Label"};const s={Root:J,Indicator:X,Label:M};var c="_1ua3o2s2",u="_1ua3o2s4",i="_1ua3o2s0";const O={title:"Components/CircularProgress"};function h(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(s.Root,{className:i,value:30,children:[e.jsx(s.Indicator,{className:c}),e.jsx(s.Label,{className:u,children:"30%"})]}),e.jsxs(s.Root,{className:i,value:50,children:[e.jsx(s.Indicator,{className:c,barStyle:{stroke:"#ff4d4f"}}),e.jsx(s.Label,{className:u,children:"50%"})]}),e.jsxs(s.Root,{className:i,value:100,children:[e.jsx(s.Indicator,{className:c,barStyle:{stroke:"#1976d2"}}),e.jsx(s.Label,{className:u,children:"100%"})]}),e.jsxs(s.Root,{className:i,value:30,children:[e.jsx(s.Indicator,{className:c}),e.jsx(s.Label,{className:u})]})]})}function C(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Indeterminate"}),e.jsx(s.Root,{className:i,indeterminate:!0,children:e.jsx(s.Indicator,{className:c})})]})}function y(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Size"}),e.jsxs(s.Root,{className:i,value:50,style:{fontSize:34,width:34,height:34},children:[e.jsx(s.Indicator,{className:c}),e.jsx(s.Label,{className:u,children:"50%"})]}),e.jsxs(s.Root,{className:i,value:50,children:[e.jsx(s.Indicator,{className:c,barStyle:{stroke:"#ff4d4f"}}),e.jsx(s.Label,{className:u,children:"50%"})]}),e.jsxs(s.Root,{className:i,value:50,style:{fontSize:100,width:100,height:100},children:[e.jsx(s.Indicator,{className:c,barStyle:{stroke:"#1976d2"}}),e.jsx(s.Label,{className:u,children:"50%"})]}),e.jsxs(s.Root,{className:i,value:50,style:{width:200,height:200,fontSize:200},children:[e.jsx(s.Indicator,{className:c}),e.jsx(s.Label,{className:u,children:"50%"})]}),e.jsxs("div",{style:{display:"inline-block"},children:[e.jsx("div",{style:{textAlign:"center"},children:"strokeWidth"}),e.jsxs(s.Root,{className:i,value:50,style:{width:200,height:200},children:[e.jsx(s.Indicator,{className:c,strokeWidth:2}),e.jsx(s.Label,{className:u,style:{fontSize:50},children:"50%"})]})]})]})}function x(){const[d]=n.useState(100),[l,r]=n.useState(0),t=n.useCallback(()=>{let a=l-10;a<0&&(a=0),r(a)},[l]),o=n.useCallback(()=>{let a=l+10;a>d&&(a=d),r(a)},[l,d]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Value Controlled"}),e.jsxs(s.Root,{className:i,value:l,max:d,style:{fontSize:100,width:100,height:100},children:[e.jsx(s.Indicator,{className:c}),e.jsxs(s.Label,{className:u,children:[l,"%"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",marginLeft:10},children:[e.jsx("button",{type:"button",onClick:t,children:"-"}),e.jsx("button",{type:"button",onClick:o,children:"+"})]})]})}h.__docgenInfo={description:"",methods:[],displayName:"Basic"};C.__docgenInfo={description:"",methods:[],displayName:"Indeterminate"};y.__docgenInfo={description:"",methods:[],displayName:"Size"};x.__docgenInfo={description:"",methods:[],displayName:"ValueControlled"};var R,I,S;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <CircularProgress.Root className={styles.root} value={30}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>30%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={50}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{
        stroke: '#ff4d4f'
      }} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={100}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{
        stroke: '#1976d2'
      }} />
        <CircularProgress.Label className={styles.label}>100%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={30}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label} />
      </CircularProgress.Root>
    </>;
}`,...(S=(I=h.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,w,k;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`function Indeterminate(): JSX.Element {
  return <>
      <h1>Indeterminate</h1>
      <CircularProgress.Root className={styles.root} indeterminate>
        <CircularProgress.Indicator className={styles.indicator} />
      </CircularProgress.Root>
    </>;
}`,...(k=(w=C.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var _,z,V;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`function Size(): JSX.Element {
  return <>
      <h1>Size</h1>
      <CircularProgress.Root className={styles.root} value={50} style={{
      fontSize: 34,
      width: 34,
      height: 34
    }}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={50}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{
        stroke: '#ff4d4f'
      }} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={50} style={{
      fontSize: 100,
      width: 100,
      height: 100
    }}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{
        stroke: '#1976d2'
      }} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={50} style={{
      width: 200,
      height: 200,
      fontSize: 200
    }}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <div style={{
      display: 'inline-block'
    }}>
        <div style={{
        textAlign: 'center'
      }}>strokeWidth</div>
        <CircularProgress.Root className={styles.root} value={50} style={{
        width: 200,
        height: 200
      }}>
          <CircularProgress.Indicator className={styles.indicator} strokeWidth={2} />
          <CircularProgress.Label className={styles.label} style={{
          fontSize: 50
        }}>
            50%
          </CircularProgress.Label>
        </CircularProgress.Root>
      </div>
    </>;
}`,...(V=(z=y.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var E,B,W;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`function ValueControlled(): JSX.Element {
  const [max] = React.useState(100);
  const [percent, setPercent] = React.useState<number>(0);
  const down = React.useCallback(() => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  }, [percent]);
  const up = React.useCallback(() => {
    let newPercent = percent + 10;
    if (newPercent > max) {
      newPercent = max;
    }
    setPercent(newPercent);
  }, [percent, max]);
  return <>
      <h1>Value Controlled</h1>
      <CircularProgress.Root className={styles.root} value={percent} max={max} style={{
      fontSize: 100,
      width: 100,
      height: 100
    }}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>{percent}%</CircularProgress.Label>
      </CircularProgress.Root>
      <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      marginLeft: 10
    }}>
        <button type="button" onClick={down}>
          -
        </button>
        <button type="button" onClick={up}>
          +
        </button>
      </div>
    </>;
}`,...(W=(B=x.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const q=["Basic","Indeterminate","Size","ValueControlled"];export{h as Basic,C as Indeterminate,y as Size,x as ValueControlled,q as __namedExportsOrder,O as default};
