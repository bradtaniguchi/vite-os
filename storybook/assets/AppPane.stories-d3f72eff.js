import{j as a,H as E}from"./hello-world-def-ec278bc5.js";import{c as C,a as j,f as v,L as z,b as I,d as R,g as A,e as M,l as S,C as w}from"./layout-fac7d046.js";import{r as n}from"./index-c013ead5.js";import{a as L}from"./apps-539dedd7.js";import{g as P}from"./get-id-2999bd34.js";import"./index-169ee69c.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-6c0337ea.js";import"../sb-preview/runtime.js";const k=C(j);function B({children:o,features:e,strict:r=!1}){const[,t]=n.useState(!m(e)),s=n.useRef(void 0);if(!m(e)){const{renderer:l,...i}=e;s.current=l,v(i)}return n.useEffect(()=>{m(e)&&e().then(({renderer:l,...i})=>{v(i),s.current=l,t(!0)})},[]),n.createElement(z.Provider,{value:{renderer:s.current,strict:r}},o)}function m(o){return typeof o=="function"}const O={renderer:I,...R,...A},V={...O,...M,...S};function H({title:o,titleId:e,...r},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":e},r),o?n.createElement("title",{id:e},o):null,n.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z",clipRule:"evenodd"}))}const F=n.forwardRef(H),D=F;function N({title:o,titleId:e,...r},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":e},r),o?n.createElement("title",{id:e},o):null,n.createElement("path",{fillRule:"evenodd",d:"M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z",clipRule:"evenodd"}))}const _=n.forwardRef(N),W=_;function q({title:o,titleId:e,...r},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":e},r),o?n.createElement("title",{id:e},o):null,n.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}const K=n.forwardRef(q),T=K,X=n.createContext(null),h={didCatch:!1,error:null};class U extends n.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=h}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var r,t,s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];(r=(t=this.props).onReset)===null||r===void 0||r.call(t,{args:l,reason:"imperative-api"}),this.setState(h)}}componentDidCatch(e,r){var t,s;(t=(s=this.props).onError)===null||t===void 0||t.call(s,e,r)}componentDidUpdate(e,r){const{didCatch:t}=this.state,{resetKeys:s}=this.props;if(t&&r.error!==null&&G(e.resetKeys,s)){var l,i;(l=(i=this.props).onReset)===null||l===void 0||l.call(i,{next:s,prev:e.resetKeys,reason:"keys"}),this.setState(h)}}render(){const{children:e,fallbackRender:r,FallbackComponent:t,fallback:s}=this.props,{didCatch:l,error:i}=this.state;let c=e;if(l){const u={error:i,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(s))c=s;else if(typeof r=="function")c=r(u);else if(t)c=n.createElement(t,u);else throw i}return n.createElement(X.Provider,{value:{didCatch:l,error:i,resetErrorBoundary:this.resetErrorBoundary}},c)}}function G(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return o.length!==e.length||o.some((r,t)=>!Object.is(r,e[t]))}function f(o){const{appInstance:e,desktopRef:r,onMinimize:t,onMaximize:s,onClose:l}=o,i=n.useMemo(()=>L.get(e.id)(),[e]),c=n.useCallback(d=>{d.stopPropagation(),t(e)},[e,t]),u=n.useCallback(d=>{d.stopPropagation(),s(e)},[e,s]),b=n.useCallback(d=>{d.stopPropagation(),l(e)},[e,l]);return a.jsx(B,{features:V,children:a.jsx(k.div,{drag:!0,dragConstraints:r,children:a.jsxs(w,{children:[a.jsx(w,{className:"w-full h-8",children:a.jsxs("div",{className:"flex flex-row justify-between p-2",children:[a.jsxs("div",{children:[e.icon,e.name]}),a.jsxs("div",{children:[(()=>e.viewState==="maximized"||e.viewState==="normal"?a.jsx("button",{type:"button","aria-label":"minimize window",onClick:c,children:a.jsx(D,{className:"h-6 w-6"})}):e.viewState==="minimized"||e.viewState==="normal"?a.jsx("button",{type:"button","aria-label":"maximize window",onClick:u,children:a.jsx(W,{className:"h-6 w-6"})}):null)(),a.jsx("button",{type:"button","aria-label":"close window",onClick:b,children:a.jsx(T,{className:"h-6 w-6"})})]})]})}),a.jsx("div",{id:`panel-content-${e.instanceId}`,children:a.jsx(U,{fallback:a.jsx("div",{children:a.jsx("h1",{children:"Something went wrong, check the browser console"})}),children:a.jsx(n.Suspense,{fallback:a.jsx("div",{children:"loading..."}),children:a.jsx(i,{})})})})]})})})}try{f.displayName="AppPane",f.__docgenInfo={description:`An app-pane is what contains the actual app-instance.
The pane or "window" is what can be dragged around and resized.`,displayName:"AppPane",props:{appInstance:{defaultValue:null,description:"",name:"appInstance",required:!0,type:{name:"AppInstance"}},desktopRef:{defaultValue:null,description:"",name:"desktopRef",required:!0,type:{name:"RefObject<Element>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(appInstance: AppInstance) => void"}},onMinimize:{defaultValue:null,description:"",name:"onMinimize",required:!0,type:{name:"(appInstance: AppInstance) => void"}},onMaximize:{defaultValue:null,description:"",name:"onMaximize",required:!0,type:{name:"(appInstance: AppInstance) => void"}}}}}catch{}const ae={component:f},p={args:{appInstance:{...E,instanceId:P(),viewState:"normal"}}};var g,x,y;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    appInstance: {
      ...HELLO_WORLD_APP,
      instanceId: getId(),
      viewState: "normal"
    }
  }
}`,...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const oe=["HelloWorld"];export{p as HelloWorld,oe as __namedExportsOrder,ae as default};
//# sourceMappingURL=AppPane.stories-d3f72eff.js.map
