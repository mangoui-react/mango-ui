import{j as e}from"./jsx-runtime-bkLU2cdM.js";import{R as o}from"./index-eK40FDle.js";import{u as Q}from"./use-controlled-3NL49yyH.js";const M=o.createContext({selectedIndex:0,setSelected:()=>{}}),_=o.forwardRef((l,i)=>{const{value:d,defaultValue:c,orientation:b,renderMode:m="selecting",children:p,onValueChange:T,...v}=l,[C,u]=o.useState(0),[s,r]=Q(d,c),h=o.useCallback((y,g)=>{u(y),r(g),g&&g!==s&&(T==null||T(g))},[T,s,u,r]),j=o.useMemo(()=>({selectedIndex:C,selectedValue:s,setSelected:h,orientation:b,renderMode:m}),[b,m,C,s,h]);return e.jsx(M.Provider,{value:j,children:e.jsx("div",{"data-orientation":b,...v,ref:i,children:o.Children.map(p,(y,g)=>o.isValidElement(y)?o.cloneElement(y,{index:g-1}):y)})})});_.displayName="Tabs";const Y=_;_.__docgenInfo={description:"",methods:[],displayName:"Tabs"};function K({index:l,value:i,selectedIndex:d,selectedValue:c}){return c!==void 0?i===c:l===d}const S=o.forwardRef((l,i)=>{const{selectedIndex:d,selectedValue:c,renderMode:b}=o.useContext(M),{index:m=0,value:p,renderMode:T=b,children:v,...C}=l,u=K({index:m,value:p,selectedIndex:d,selectedValue:c}),s=o.useRef(!1),r=()=>(T==="selected"&&u&&(s.current=!0),T==="force"||s.current||u?v:null);return e.jsx("div",{"data-state":u?"active":"inactive",role:"tabpanel",...C,ref:i,children:r()})});S.displayName="Tabs.Content";const Z=S;S.__docgenInfo={description:"",methods:[],displayName:"Tabs.Content"};const E=o.forwardRef((l,i)=>{const{children:d,...c}=l;return e.jsx("ul",{role:"tablist",...c,ref:i,children:o.Children.map(d,(b,m)=>o.isValidElement(b)?o.cloneElement(b,{index:m}):b)})});E.displayName="Tabs.List";const ee=E;E.__docgenInfo={description:"",methods:[],displayName:"Tabs.List"};const O=o.forwardRef((l,i)=>{const{index:d=0,value:c,disabled:b,children:m,onClick:p,...T}=l,{selectedIndex:v,selectedValue:C,setSelected:u}=o.useContext(M),s=K({index:d,value:c,selectedIndex:v,selectedValue:C}),r=h=>{b||(u(d,c),p==null||p(h))};return e.jsx("li",{"data-state":s?"active":"inactive","data-disabled":b?"":void 0,role:"tab",...T,ref:i,onClick:r,children:m})});O.displayName="Tabs.Tab";const ae=O;O.__docgenInfo={description:"",methods:[],displayName:"Tabs.Tab"};const a={Root:Y,Tab:ae,Content:Z,List:ee};var n="_1w1yla83",x="_1w1yla81",N="_1w1yla80",t="_1w1yla82";const oe={title:"Components/Tabs"};function f(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"기본"}),e.jsxs(a.Root,{className:N,children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,children:"Tab1"}),e.jsx(a.Tab,{className:t,disabled:!0,children:"Tab2"}),e.jsxs(a.Tab,{className:t,children:[e.jsx(L,{style:{marginRight:5}}),"Tab3"]})]}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent3"})})]})]})}function R(){const[l,i]=o.useState("tab1"),d=c=>{i(c)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"defaultValue"}),e.jsxs(a.Root,{className:N,defaultValue:"tab2",children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,value:"tab1",children:"Tab1"}),e.jsx(a.Tab,{className:t,value:"tab2",children:"Tab2"}),e.jsxs(a.Tab,{className:t,value:"tab3",children:[e.jsx(L,{style:{marginRight:5}}),"Tab3"]})]}),e.jsx(a.Content,{className:n,value:"tab1",children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,value:"tab2",children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,value:"tab3",children:e.jsx("p",{children:"TabContent3"})})]}),e.jsx("h1",{children:"value"}),e.jsxs(a.Root,{className:N,value:l,onValueChange:d,children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,value:"tab1",children:"Tab1"}),e.jsx(a.Tab,{className:t,value:"tab2",children:"Tab2"}),e.jsxs(a.Tab,{className:t,value:"tab3",children:[e.jsx(L,{style:{marginRight:5}}),"Tab3"]})]}),e.jsx(a.Content,{className:n,value:"tab1",children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,value:"tab2",children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,value:"tab3",children:e.jsx("p",{children:"TabContent3"})})]})]})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Orientation"}),e.jsxs(a.Root,{className:N,orientation:"vertical",children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,children:"Tab1"}),e.jsx(a.Tab,{className:t,children:"Tab2"}),e.jsxs(a.Tab,{className:t,style:{display:"flex",alignItems:"center"},children:[e.jsx(L,{width:"2em",height:"2em"}),"Tab3"]})]}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent3"})})]})]})}function w(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"renderMode: selecting (선택한 tab만 랜더링: default)"}),e.jsxs(a.Root,{className:N,renderMode:"selecting",children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,children:"Tab1"}),e.jsx(a.Tab,{className:t,children:"Tab2"}),e.jsx(a.Tab,{className:t,children:"Tab3"})]}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent3"})})]}),e.jsx("h1",{children:"renderMode: selected (선택되었던 tab 랜더링)"}),e.jsxs(a.Root,{className:N,renderMode:"selected",children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,children:"Tab1"}),e.jsx(a.Tab,{className:t,children:"Tab2"}),e.jsx(a.Tab,{className:t,children:"Tab3"})]}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent3"})})]}),e.jsx("h1",{children:"renderMode: force (모두 랜더링)"}),e.jsxs(a.Root,{className:N,renderMode:"force",children:[e.jsxs(a.List,{className:x,children:[e.jsx(a.Tab,{className:t,children:"Tab1"}),e.jsx(a.Tab,{className:t,children:"Tab2"}),e.jsx(a.Tab,{className:t,children:"Tab3"})]}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent1"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent2"})}),e.jsx(a.Content,{className:n,children:e.jsx("p",{children:"TabContent3"})})]})]})}function I(){const[l,i]=o.useState([]),[d,c]=o.useState(""),[b,m]=o.useState(""),p=s=>{c(s)},T=s=>{m(s.target.value)},v=()=>{const s=[...l],r=`value_${Math.floor(Math.random()*1e3)}`;s.push({value:r,tab:`New Tab(${s.length})`,panel:e.jsx("p",{children:`tab value: ${r}`})}),i(s),c(r)},C=s=>{let r=0;l.forEach((j,y)=>{j.value===s&&(r=y)});const h=l.filter(j=>j.value!==s);if(i(h),h.length>0){h.length-1<r&&(r=h.length-1);const j=h[r].value;c(j)}},u=()=>{C(b)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"AddRemove"}),e.jsx("div",{style:{marginBottom:5},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:3},children:[e.jsx("button",{type:"button",onClick:v,children:"ADD"}),e.jsx("button",{type:"button",onClick:u,children:"REMOVE"}),e.jsx("input",{placeholder:"삭제할 value를 입력하세요.",value:b,onChange:T,style:{width:"100%",minWidth:0,position:"relative",border:"1px solid var(--border)",backgroundColor:"var(--component-bg)",color:"inherit",padding:"5px 11px",lineHeight:1,fontSize:"1rem"}})]})}),e.jsxs(a.Root,{className:N,value:d,onValueChange:p,children:[e.jsx(a.List,{className:x,children:l.map(s=>e.jsxs(a.Tab,{value:s.value,className:t,children:[s.tab,e.jsx("span",{onClick:r=>{r.stopPropagation(),C(s.value)},children:e.jsx(se,{})})]},s.value))}),l.map(s=>e.jsx(a.Content,{value:s.value,className:n,children:s.panel},s.value))]})]})}function L(l){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}function se(l){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...l,children:e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"currentColor"})})}f.__docgenInfo={description:"",methods:[],displayName:"Basic"};R.__docgenInfo={description:"",methods:[],displayName:"OnValueChange"};V.__docgenInfo={description:"",methods:[],displayName:"Orientation"};w.__docgenInfo={description:"",methods:[],displayName:"RenderMode"};I.__docgenInfo={description:"",methods:[],displayName:"AddRemove"};var k,A,B;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`function Basic(): JSX.Element {
  return <>
      <h1>기본</h1>
      <Tabs.Root className={styles.root}>
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab} disabled>
            Tab2
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab}>
            <UserIcon style={{
            marginRight: 5
          }} />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>;
}`,...(B=(A=f.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var $,z,F;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState<string>('tab1');
  const onValueChange = (value: string): void => {
    setValue(value);
  };
  return <>
      <h1>defaultValue</h1>
      <Tabs.Root className={styles.root} defaultValue="tab2">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab} value="tab1">
            Tab1
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab2">
            Tab2
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab3">
            <UserIcon style={{
            marginRight: 5
          }} />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content} value="tab1">
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab2">
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab3">
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>

      <h1>value</h1>
      <Tabs.Root className={styles.root} value={value} onValueChange={onValueChange}>
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab} value="tab1">
            Tab1
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab2">
            Tab2
          </Tabs.Tab>
          <Tabs.Tab className={styles.tab} value="tab3">
            <UserIcon style={{
            marginRight: 5
          }} />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content} value="tab1">
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab2">
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content} value="tab3">
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>;
}`,...(F=(z=R.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var J,U,X;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`function Orientation(): JSX.Element {
  return <>
      <h1>Orientation</h1>
      <Tabs.Root className={styles.root} orientation="vertical">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab} style={{
          display: 'flex',
          alignItems: 'center'
        }}>
            <UserIcon width="2em" height="2em" />
            Tab3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>;
}`,...(X=(U=V.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var D,P,H;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`function RenderMode(): JSX.Element {
  return <>
      <h1>renderMode: selecting (선택한 tab만 랜더링: default)</h1>
      <Tabs.Root className={styles.root} renderMode="selecting">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>

      <h1>renderMode: selected (선택되었던 tab 랜더링)</h1>
      <Tabs.Root className={styles.root} renderMode="selected">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>

      <h1>renderMode: force (모두 랜더링)</h1>
      <Tabs.Root className={styles.root} renderMode="force">
        <Tabs.List className={styles.list}>
          <Tabs.Tab className={styles.tab}>Tab1</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab2</Tabs.Tab>
          <Tabs.Tab className={styles.tab}>Tab3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Content className={styles.content}>
          <p>TabContent1</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent2</p>
        </Tabs.Content>
        <Tabs.Content className={styles.content}>
          <p>TabContent3</p>
        </Tabs.Content>
      </Tabs.Root>
    </>;
}`,...(H=(P=w.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var W,q,G;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`function AddRemove(): JSX.Element {
  const [tabs, setTabs] = React.useState<Array<{
    value: string;
    tab: string;
    panel: React.ReactNode;
  }>>([]);
  const [value, setValue] = React.useState<string | undefined>('');
  const [inputValue, setInputValue] = React.useState<string>('');
  const handleValueChange = (value: string): void => {
    setValue(value);
  };
  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };
  const handleTabAdd = (): void => {
    const newTabs = [...tabs];
    const newValue = \`value_\${Math.floor(Math.random() * 1000)}\`;
    newTabs.push({
      value: newValue,
      tab: \`New Tab(\${newTabs.length})\`,
      panel: <p>{\`tab value: \${newValue}\`}</p>
    });
    setTabs(newTabs);
    setValue(newValue);
  };
  const handleTabClose = (value: string): void => {
    let index = 0;
    tabs.forEach((item, i) => {
      if (item.value === value) {
        index = i;
      }
    });
    const newTabs = tabs.filter(item => item.value !== value);
    setTabs(newTabs);
    if (newTabs.length > 0) {
      if (newTabs.length - 1 < index) {
        index = newTabs.length - 1;
      }
      const _value = newTabs[index].value;
      setValue(_value);
    }
  };
  const handleTabRemove = (): void => {
    handleTabClose(inputValue);
  };
  return <>
      <h1>AddRemove</h1>
      <div style={{
      marginBottom: 5
    }}>
        <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3
      }}>
          <button type="button" onClick={handleTabAdd}>
            ADD
          </button>
          <button type="button" onClick={handleTabRemove}>
            REMOVE
          </button>
          <input placeholder="삭제할 value를 입력하세요." value={inputValue} onChange={handleInputValueChange} style={{
          width: '100%',
          minWidth: 0,
          position: 'relative',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--component-bg)',
          color: 'inherit',
          padding: '5px 11px',
          lineHeight: 1,
          fontSize: '1rem'
        }} />
        </div>
      </div>

      <Tabs.Root className={styles.root} value={value} onValueChange={handleValueChange}>
        <Tabs.List className={styles.list}>
          {tabs.map(item => <Tabs.Tab key={item.value} value={item.value} className={styles.tab}>
              {item.tab}
              <span onClick={event => {
            event.stopPropagation();
            handleTabClose(item.value);
          }}>
                <CloseIcon />
              </span>
            </Tabs.Tab>)}
        </Tabs.List>
        {tabs.map(item => <Tabs.Content key={item.value} value={item.value} className={styles.content}>
            {item.panel}
          </Tabs.Content>)}
      </Tabs.Root>
    </>;
}`,...(G=(q=I.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ce=["Basic","OnValueChange","Orientation","RenderMode","AddRemove"];export{I as AddRemove,f as Basic,R as OnValueChange,V as Orientation,w as RenderMode,ce as __namedExportsOrder,oe as default};
