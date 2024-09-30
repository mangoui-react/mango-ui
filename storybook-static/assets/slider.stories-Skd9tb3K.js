import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as r}from"./index-eK40FDle.js";import{u as P}from"./use-merged-ref-IdjoZWBX.js";import{u as pe}from"./use-controlled-3NL49yyH.js";function ve(t,a,l){return(l-a)*t+a}function ke(t){if(Math.abs(t)<1){const l=t.toExponential().split("e-"),o=l[0].split(".")[1];return(o?o.length:0)+parseInt(l[1],10)}const a=t.toString().split(".")[1];return a?a.length:0}function Ve(t,a,l){const o=Math.round((t-l)/a)*a+l;return Number(o.toFixed(ke(a)))}function Le(t,a,l){return t==null?a:Math.min(Math.max(a,t),l)}function Me(t,a,l){if(t[l]===a)return t;const o=t.slice();return o[l]=a,o}function K(t,a){return t-a}function _e(t,a){const l=t.reduce((n,c,i)=>{const u=Math.abs(a-c);return n===null||u<n.distance||u===n.distance?{distance:u,index:i}:n},null),{index:o}=l??{index:0};return o}function we({rail:t,pointer:a,rangeInfo:l,min:o,max:n,step:c,orientation:i}){if(!t)return{newValue:0,activeIndex:0};const{width:u,height:x,bottom:N,left:h}=t.getBoundingClientRect(),j=i==="horizontal"?(a.x-h)/u:(N-a.y)/x;let m=ve(j,o,n);const f=c<1?1:c;m=Ve(m,f,o),m=Le(m,o,n);let S=0;const{range:v,values:M}=l;if(v){const k=M.sort(K);S=_e(k,m),m=Me(k,m,S).sort(K)}return{newValue:m,activeIndex:S}}function Q(t,a,l){return(t-a)*100/(l-a)}function Ie({sliderRef:t,railRef:a,name:l,value:o,defaultValue:n,min:c,max:i,step:u,orientation:x,onValueChange:N}){const[h,j]=pe(o,n??c),m=Array.isArray(h),f=r.useMemo(()=>Array.isArray(h)?h.slice():[],[h]),[S,v]=r.useState(!1),[M,k]=r.useState(0),V=r.useMemo(()=>Array.isArray(h)?h.map(b=>Q(b??0,c,i)):Q(h??0,c,i),[i,c,h]),p=r.useCallback(b=>{const I={x:b.clientX,y:b.clientY},{current:J}=a,{newValue:G,activeIndex:H}=we({rail:J,pointer:I,rangeInfo:{range:m,values:f},min:c,max:i,step:u,orientation:x});j(G),k(H),N==null||N(G,H)},[i,c,N,x,a,m,j,u,f]),_=r.useCallback(b=>{p(b)},[p]),L=r.useCallback(()=>{v(!1)},[]),w=r.useCallback(b=>{v(!0),p(b)},[p]);return r.useEffect(()=>{var I;const b=((I=t.current)==null?void 0:I.ownerDocument)??document;return S?(b.addEventListener("mousemove",_),b.addEventListener("mouseup",L)):(b.removeEventListener("mousemove",_),b.removeEventListener("mouseup",L)),()=>{b.removeEventListener("mousemove",_),b.removeEventListener("mouseup",L)}},[_,L,S,t]),{value:h,percentValue:V,onMouseDown:w,isMouseDown:S,activeIndex:M}}const D=r.createContext({railRef:null,percentValue:0,isMouseDown:!1,activeIndex:0,thumbMap:new Map}),B=r.forwardRef((t,a)=>{const{name:l,value:o,defaultValue:n,min:c=0,max:i=100,step:u=1,disabled:x,orientation:N="horizontal",children:h,onValueChange:j,onMouseDown:m,...f}=t,S=r.useRef(null),v=r.useRef(null),M=P(a,S),{current:k}=r.useRef(new Map),{value:V,percentValue:p,onMouseDown:_,isMouseDown:L,activeIndex:w}=Ie({sliderRef:S,railRef:v,name:l,value:o,defaultValue:n,min:c,max:i,step:u,orientation:N,onValueChange:j}),b=J=>{_(J),m==null||m(J)},I=r.useMemo(()=>({railRef:v,value:V,percentValue:p,orientation:N,disabled:x,isMouseDown:L,activeIndex:w,thumbMap:k}),[w,x,L,N,p,k,V]);return e.jsx(D.Provider,{value:I,children:e.jsxs("div",{"data-disabled":x?"":void 0,"data-orientation":N,...f,ref:M,onMouseDown:b,children:[h,e.jsx("input",{type:"hidden",name:l,value:V==null?void 0:V.toString()})]})})});B.displayName="Slider";const De=B;B.__docgenInfo={description:"",methods:[],displayName:"Slider"};const U=r.forwardRef((t,a)=>{const{style:l,...o}=t,{percentValue:n,orientation:c,disabled:i}=r.useContext(D),u=r.useMemo(()=>c==="vertical"?Array.isArray(n)?{bottom:`${n[0]}%`,height:`${n[1]-n[0]}%`}:{bottom:"0%",height:`${n}%`}:Array.isArray(n)?{left:`${n[0]}%`,width:`${n[1]-n[0]}%`}:{width:`${n}%`},[c,n]);return e.jsx("div",{"data-disabled":i?"":void 0,"data-orientation":c,...o,ref:a,style:{...u,...l}})});U.displayName="Slider.Range";const Ae=U;U.__docgenInfo={description:"",methods:[],displayName:"Slider.Range"};function Ce({thumbRef:t}){const{value:a,percentValue:l,isMouseDown:o,activeIndex:n,thumbMap:c}=r.useContext(D),[i,u]=r.useState(),x=r.useMemo(()=>(c.set(t,{ref:t}),Array.from(c,f=>f[1])),[c,t]);r.useEffect(()=>{const f=t?x.findIndex(S=>S.ref.current===t.current):-1;u(f)},[x,t]);const N=r.useMemo(()=>Array.isArray(a)?i===void 0||a===void 0?0:a[i]:a??0,[i,a]),h=r.useMemo(()=>Array.isArray(l)?i===void 0||l===void 0?0:l[i]:l,[l,i]),j=r.useMemo(()=>Array.isArray(a)?o&&n===i:o,[n,o,i,a]),m=Array.isArray(a)&&i===void 0?"none":void 0;return{thumbValue:N,thumbPercentValue:h,thumbIsMouseDown:j,displayStyle:m}}const Re=r.createContext({thumbValue:0,isActiveThumb:!1}),W=r.forwardRef((t,a)=>{const{style:l,children:o,onMouseOver:n,onMouseOut:c,...i}=t,{orientation:u,disabled:x}=r.useContext(D),N=r.useRef(null),h=P(a,N),{thumbValue:j,thumbPercentValue:m,thumbIsMouseDown:f,displayStyle:S}=Ce({thumbRef:N}),[v,M]=r.useState(!1),k=w=>{M(!0),n==null||n(w)},V=w=>{M(!1),c==null||c(w)},p=v===!0||f===!0,_=r.useMemo(()=>u==="horizontal"?{left:`${m}%`,display:S}:{bottom:`${m}%`,display:S},[S,u,m]),L=r.useMemo(()=>({thumbValue:j,isActiveThumb:p}),[p,j]);return e.jsx(Re.Provider,{value:L,children:e.jsx("div",{"data-disabled":x?"":void 0,"data-orientation":u,...i,ref:h,style:{..._,...l},onMouseOver:k,onMouseOut:V,children:o})})});W.displayName="Slider.Thumb";const Oe=W;W.__docgenInfo={description:"",methods:[],displayName:"Slider.Thumb"};const Y=r.forwardRef((t,a)=>{const{auto:l,children:o,...n}=t,{orientation:c,disabled:i}=r.useContext(D),{thumbValue:u,isActiveThumb:x}=r.useContext(Re);return l&&!x?null:e.jsx("span",{"data-disabled":i?"":void 0,"data-orientation":c,...n,ref:a,children:o??u})});Y.displayName="Slider.ThumbLabel";const Ee=Y;Y.__docgenInfo={description:"",methods:[],displayName:"Slider.ThumbLabel"};const q=r.forwardRef((t,a)=>{const{children:l,...o}=t,{railRef:n,disabled:c,orientation:i}=r.useContext(D),u=P(a,n);return e.jsx("div",{"data-disabled":c?"":void 0,"data-orientation":i,...o,ref:u,children:l})});q.displayName="Slider.Track";const $e=q;q.__docgenInfo={description:"",methods:[],displayName:"Slider.Track"};const s={Root:De,Range:Ae,Thumb:Oe,ThumbLabel:Ee,Track:$e};var T="_1nvta8z2",y="_1nvta8z0",d="_1nvta8z3",R="_1nvta8z4",g="_1nvta8z1";const Pe={title:"Components/Slider"};function A(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(s.Root,{className:y,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d})]})]})}function C(){const[t,a]=r.useState(30),l=o=>{a(o)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"onValueChange"}),e.jsxs(s.Root,{className:y,value:t,onValueChange:l,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d})]}),e.jsxs("div",{children:["값: ",t]})]})}function O(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Thumb Label"}),e.jsxs(s.Root,{className:y,defaultValue:20,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(s.Root,{className:y,defaultValue:20,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R,auto:!0})})]})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Disabled"}),e.jsxs(s.Root,{className:y,defaultValue:30,disabled:!0,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d})]})]})}function $(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Min/Max"}),e.jsxs(s.Root,{className:y,min:10,max:120,step:10,defaultValue:30,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d})]})]})}function F(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Orientation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:10},children:[e.jsxs(s.Root,{className:y,orientation:"vertical",style:{height:300},children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d})]}),e.jsxs(s.Root,{className:y,orientation:"vertical",defaultValue:30,style:{height:300},children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R,auto:!0})})]})]})]})}function X(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Range"}),e.jsxs(s.Root,{className:y,defaultValue:[10,30],children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d}),e.jsx(s.Thumb,{className:d})]}),e.jsx("h1",{children:"Range Thumb Label"}),e.jsxs(s.Root,{className:y,defaultValue:[10,30],children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R})})]}),e.jsx("h1",{children:"Range Thumb Label - auto"}),e.jsxs(s.Root,{className:y,defaultValue:[10,30],children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R,auto:!0})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R,auto:!0})})]}),e.jsx("h1",{children:"Range Disabled"}),e.jsxs(s.Root,{className:y,defaultValue:[10,30],disabled:!0,children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d}),e.jsx(s.Thumb,{className:d})]})]})}function z(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Range Orientation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:50},children:[e.jsxs(s.Root,{className:y,defaultValue:[10,30],orientation:"vertical",style:{height:300},children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d}),e.jsx(s.Thumb,{className:d})]}),e.jsxs(s.Root,{className:y,defaultValue:[10,30],orientation:"vertical",style:{height:300},children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R})})]}),e.jsxs(s.Root,{className:y,defaultValue:[10,30],orientation:"vertical",style:{height:300},children:[e.jsx(s.Track,{className:g,children:e.jsx(s.Range,{className:T})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R,auto:!0})}),e.jsx(s.Thumb,{className:d,children:e.jsx(s.ThumbLabel,{className:R,auto:!0})})]})]})]})}A.__docgenInfo={description:"",methods:[],displayName:"Basic"};C.__docgenInfo={description:"",methods:[],displayName:"OnValueChange"};O.__docgenInfo={description:"",methods:[],displayName:"ThumbLabel"};E.__docgenInfo={description:"",methods:[],displayName:"Disabled"};$.__docgenInfo={description:"",methods:[],displayName:"MinMax"};F.__docgenInfo={description:"",methods:[],displayName:"Orientation"};X.__docgenInfo={description:"",methods:[],displayName:"Range"};z.__docgenInfo={description:"",methods:[],displayName:"RangeOrientation"};var Z,ee,se;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Slider.Root className={styles.root}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>;
}`,...(se=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,te,le;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState(30);
  const onValueChange = (newValue: number | number[]): void => {
    setValue((newValue as number));
  };
  return <>
      <h1>onValueChange</h1>
      <Slider.Root className={styles.root} value={value} onValueChange={onValueChange}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
      <div>값: {value}</div>
    </>;
}`,...(le=(te=C.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,ne,oe;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`function ThumbLabel(): JSX.Element {
  return <>
      <h1>Thumb Label</h1>
      <Slider.Root className={styles.root} defaultValue={20}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} />
        </Slider.Thumb>
      </Slider.Root>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Slider.Root className={styles.root} defaultValue={20}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} auto />
        </Slider.Thumb>
      </Slider.Root>
    </>;
}`,...(oe=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,ie,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`function Disabled(): JSX.Element {
  return <>
      <h1>Disabled</h1>
      <Slider.Root className={styles.root} defaultValue={30} disabled>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>;
}`,...(ue=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,me,he;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`function MinMax(): JSX.Element {
  return <>
      <h1>Min/Max</h1>
      <Slider.Root className={styles.root} min={10} max={120} step={10} defaultValue={30}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>;
}`,...(he=(me=$.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var be,Ne,Se;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`function Orientation(): JSX.Element {
  return <>
      <h1>Orientation</h1>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 10
    }}>
        <Slider.Root className={styles.root} orientation="vertical" style={{
        height: 300
      }}>
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb} />
        </Slider.Root>

        <Slider.Root className={styles.root} orientation="vertical" defaultValue={30} style={{
        height: 300
      }}>
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} auto />
          </Slider.Thumb>
        </Slider.Root>
      </div>
    </>;
}`,...(Se=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var xe,Te,ye;X.parameters={...X.parameters,docs:{...(xe=X.parameters)==null?void 0:xe.docs,source:{originalSource:`function Range(): JSX.Element {
  return <>
      <h1>Range</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>

      <h1>Range Thumb Label</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} />
        </Slider.Thumb>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} />
        </Slider.Thumb>
      </Slider.Root>

      <h1>Range Thumb Label - auto</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} auto />
        </Slider.Thumb>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} auto />
        </Slider.Thumb>
      </Slider.Root>

      <h1>Range Disabled</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]} disabled>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>;
}`,...(ye=(Te=X.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var ge,fe,je;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`function RangeOrientation(): JSX.Element {
  return <>
      <h1>Range Orientation</h1>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 50
    }}>
        <Slider.Root className={styles.root} defaultValue={[10, 30]} orientation="vertical" style={{
        height: 300
      }}>
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb} />
          <Slider.Thumb className={styles.thumb} />
        </Slider.Root>

        <Slider.Root className={styles.root} defaultValue={[10, 30]} orientation="vertical" style={{
        height: 300
      }}>
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} />
          </Slider.Thumb>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} />
          </Slider.Thumb>
        </Slider.Root>

        <Slider.Root className={styles.root} defaultValue={[10, 30]} orientation="vertical" style={{
        height: 300
      }}>
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} auto />
          </Slider.Thumb>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} auto />
          </Slider.Thumb>
        </Slider.Root>
      </div>
    </>;
}`,...(je=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};const Be=["Basic","OnValueChange","ThumbLabel","Disabled","MinMax","Orientation","Range","RangeOrientation"];export{A as Basic,E as Disabled,$ as MinMax,C as OnValueChange,F as Orientation,X as Range,z as RangeOrientation,O as ThumbLabel,Be as __namedExportsOrder,Pe as default};
