import{d as P,a as d,F as x,b as n,e,r as u,o as i,u as f,t as h,c as I,f as N,g,w as o,h as a,P as S,D as $,i as k,j as v,R as B,C as D,k as R}from"./index-Bxl3Pb19.js";const w={class:"input-item"},E={class:"input-item"},F=P({__name:"DefinedParameterItem",setup(t){return(p,s)=>{const c=u("el-Input"),l=u("el-Checkbox");return i(),d(x,null,[n("div",w,[e(c,{style:{width:"100%"},placeholder:"请输入参数名称"})]),n("div",E,[e(l)]),s[0]||(s[0]=n("div",{class:"input-item"},null,-1))],64)}}}),V={class:"process-node"},j={class:"tf-node-toolbar"},q={key:0},H={class:"node"},T={__name:"ProcessNode",props:{data:{type:Object,required:!0},sourcePosition:{type:String},targetPosition:{type:String}},setup(t){const p=t,s=f({type:"target"}),c=f({type:"source"}),l=h(()=>s.value.length<=0);h(()=>c.value.length<=0);const C=I(()=>p.data.hasError?"❌":"🏠"),y=m=>{console.log(m)},b={id:"执行节点"};return(m,_)=>{const r=u("el-button");return i(),d("div",V,[e(a($),{"is-visible":!0,position:a(S).Top},{default:o(()=>[n("div",j,[e(r,{link:""},{default:o(()=>[e(B)]),_:1}),e(r,{link:""},{default:o(()=>[e(D)]),_:1}),e(r,{link:"",onClick:_[0]||(_[0]=L=>y(t.data))},{default:o(()=>[e(R)]),_:1})])]),_:1},8,["position"]),l.value?g("",!0):(i(),N(a(k),{key:0,type:"target",position:t.targetPosition},{default:o(()=>[!t.data.isRunning&&!t.data.isFinished&&!t.data.isCancelled&&!t.data.isSkipped&&!t.data.hasError?(i(),d("span",q,"📥 ")):g("",!0)]),_:1},8,["position"])),e(a(k),{type:"source",position:t.sourcePosition},null,8,["position"]),n("div",H,[n("h3",null,v(b.id),1),e(F)]),n("span",null,v(C.value),1)])}}};export{T as default};
