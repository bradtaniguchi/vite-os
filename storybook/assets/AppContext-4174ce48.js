import{H as i,j as t}from"./hello-world-def-ec278bc5.js";import{r as p}from"./index-c013ead5.js";const d={id:"welcome",name:"Welcome",icon:"👋"},o=[i,d],a=new Set;for(const e of o){if(a.has(e.id))throw new Error(`Duplicate app id: ${e.id}`);a.add(e.id)}const l=p.createContext(null),u=p.createContext(null);function P(e,n){switch(n.type){case"OPEN_APP_LIST":return{...e,listOpened:!0};case"CLOSE_APP_LIST":return{...e,listOpened:!1};case"CLOSE_APP":return{...e,appInstances:e.appInstances.filter(({instanceId:r})=>r!==n.appInstanceId)};case"OPEN_APP":return{...e,appInstances:[...e.appInstances,n.appInstance]};case"MINIMIZE_APP":return{...e,appInstances:e.appInstances.map(r=>r.instanceId===n.appInstanceId?{...r,viewState:"minimized"}:r)};case"MAXIMIZE_APP":return{...e,appInstances:e.appInstances.map(r=>r.instanceId===n.appInstanceId?{...r,viewState:"normal"}:r)};default:return e}}function s(e){const{apps:n}=e,[r,c]=p.useReducer(P,{listOpened:!1,apps:n??o,appInstances:[]});return p.useEffect(()=>{console.log(">> state:",r)},[r]),t.jsx(l.Provider,{value:r,children:t.jsx(u.Provider,{value:c,children:e.children})})}try{s.displayName="AppProvider",s.__docgenInfo={description:"Component that provides the AppProvider context to manage global app state.",displayName:"AppProvider",props:{apps:{defaultValue:null,description:"List of apps that could be provided to override the defaults.",name:"apps",required:!1,type:{name:"App[]"}}}}}catch{}export{l as A,u as a,s as b};
//# sourceMappingURL=AppContext-4174ce48.js.map
