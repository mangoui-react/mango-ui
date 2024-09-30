import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as a}from"./index-eK40FDle.js";import{g as k}from"./get-progress-state-maqc7S8G.js";const E=a.createContext({computedValue:0,max:100}),P=a.forwardRef((c,i)=>{const{value:s=0,max:n=100,indeterminate:o,children:t,...h}=c,m=a.useMemo(()=>Math.round((s<=n&&s>=0?s:0)/n*100),[n,s]),B=a.useMemo(()=>({value:s,max:n,computedValue:m,indeterminate:o}),[m,o,n,s]);return e.jsx(E.Provider,{value:B,children:e.jsx("div",{"data-state":k(s,n,o),"data-value":s,"data-max":n,...h,ref:i,role:"progressbar",children:t})})});P.displayName="Progress";const F=P;P.__docgenInfo={description:"",methods:[],displayName:"Progress"};const y=a.forwardRef((c,i)=>{const{style:s,...n}=c,{value:o,max:t,computedValue:h,indeterminate:m}=a.useContext(E);return e.jsx("div",{"data-state":k(o,t,m),"data-value":o,"data-max":t,...n,ref:i,style:{...m?{backgroundImage:"linear-gradient(to right, transparent 0%, var(--es-primary, #1976d2) 50%, transparent 100%)"}:{width:`${h}%`},...s}})});y.displayName="Progress.Indicator";const J=y;y.__docgenInfo={description:"",methods:[],displayName:"Progress.Indicator"};const r={Root:F,Indicator:J};var l="_19jeb4y2",d="_19jeb4y0";const T={title:"Components/Progress"};function u(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsx(r.Root,{className:d,value:30,children:e.jsx(r.Indicator,{className:l})}),e.jsx("br",{}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(r.Root,{className:d,value:30,children:e.jsx(r.Indicator,{className:l})}),e.jsx("span",{children:"30%"})]})]})}function p(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Indeterminate"}),e.jsx(r.Root,{className:d,indeterminate:!0,children:e.jsx(r.Indicator,{className:l})})]})}function g(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Custom"}),e.jsx(r.Root,{className:d,value:50,style:{height:4},children:e.jsx(r.Indicator,{className:l})}),e.jsx("br",{}),e.jsx(r.Root,{className:d,value:50,children:e.jsx(r.Indicator,{className:l,style:{backgroundColor:"#ff4d4f"}})})]})}function x(){const[c]=a.useState(100),[i,s]=a.useState(0),n=()=>{let t=i-10;t<0&&(t=0),s(t)},o=()=>{let t=i+10;t>c&&(t=c),s(t)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Value Controlled"}),e.jsx(r.Root,{className:d,value:i,max:c,children:e.jsx(r.Indicator,{className:l})}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",marginTop:10,marginLeft:10},children:[e.jsx("button",{type:"button",onClick:n,children:"-"}),e.jsx("button",{type:"button",onClick:o,children:"+"})]})]})}u.__docgenInfo={description:"",methods:[],displayName:"Basic"};p.__docgenInfo={description:"",methods:[],displayName:"Indeterminate"};g.__docgenInfo={description:"",methods:[],displayName:"Custom"};x.__docgenInfo={description:"",methods:[],displayName:"ValueControlled"};var f,j,I;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Progress.Root className={styles.root} value={30}>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
      <br />

      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <Progress.Root className={styles.root} value={30}>
          <Progress.Indicator className={styles.indicator} />
        </Progress.Root>
        <span>30%</span>
      </div>
    </>;
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var N,v,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`function Indeterminate(): JSX.Element {
  return <>
      <h1>Indeterminate</h1>
      <Progress.Root className={styles.root} indeterminate>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
    </>;
}`,...(R=(v=p.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var C,b,_;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`function Custom(): JSX.Element {
  return <>
      <h1>Custom</h1>
      <Progress.Root className={styles.root} value={50} style={{
      height: 4
    }}>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
      <br />

      <Progress.Root className={styles.root} value={50}>
        <Progress.Indicator className={styles.indicator} style={{
        backgroundColor: '#ff4d4f'
      }} />
      </Progress.Root>
    </>;
}`,...(_=(b=g.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var w,S,V;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`function ValueControlled(): JSX.Element {
  const [max] = React.useState(100);
  const [percent, setPercent] = React.useState<number>(0);
  const down = (): void => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };
  const up = (): void => {
    let newPercent = percent + 10;
    if (newPercent > max) {
      newPercent = max;
    }
    setPercent(newPercent);
  };
  return <>
      <h1>Value Controlled</h1>
      <Progress.Root className={styles.root} value={percent} max={max}>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
      <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: 10,
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
}`,...(V=(S=x.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const $=["Basic","Indeterminate","Custom","ValueControlled"];export{u as Basic,g as Custom,p as Indeterminate,x as ValueControlled,$ as __namedExportsOrder,T as default};
