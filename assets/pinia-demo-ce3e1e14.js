import{C as m,h as C,D as f,d as _,G as N,c as v,b as a,w as c,u as s,a as u,z as l,E as b,o as k,e as p}from"./index-467b8d54.js";/* empty css                  */const S=m("counter",()=>{const o=C(0),e=f(()=>o.value*2);function n(){o.value++}return{count:o,doubleCount:e,increment:n}}),B=_({__name:"pinia-demo",setup(o){const e=S(),n=N(),d=()=>{n.$reset(),e.$reset()};return($,t)=>{const r=b;return k(),v("div",null,[a(r,{type:"success",onClick:t[0]||(t[0]=i=>s(e).increment())},{default:c(()=>[p("state++")]),_:1}),u("p",null," usecounter.count："+l(s(e).count),1),u("p",null," usecounter.doubleCount："+l(s(e).doubleCount),1),u("p",null," useUser.uName："+l(s(n).uName),1),a(r,{type:"success",onClick:t[1]||(t[1]=i=>s(n).changeName("用户2"))},{default:c(()=>[p("ChangeName")]),_:1}),u("p",null,[a(r,{type:"success",onClick:t[2]||(t[2]=i=>d())},{default:c(()=>[p("resetStore")]),_:1})])])}}});export{B as default};
