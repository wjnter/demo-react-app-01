(this["webpackJsonpdemo-react"]=this["webpackJsonpdemo-react"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(34),s=n.n(i),r=(n(142),n(96)),j=n.n(r),o=n(122),l=n(133),d=n(59),u=n(239),b=n(240),p=(n(143),n(101)),m=n(242),O=n(243),h=n(40),x=n(244),f=n(11),y=function(e){var t="Please input this field!",n=m.a.useForm(),a=Object(d.a)(n,1)[0];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Add New Employee"}),Object(f.jsxs)(m.a,{form:a,layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},onFinish:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{key:Object(x.a)()});e.getEmployee(n),a.resetFields()},children:[Object(f.jsx)(m.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:t}],children:Object(f.jsx)(O.a,{type:"text"})}),Object(f.jsx)(m.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:t}],children:Object(f.jsx)(O.a,{type:"email"})}),Object(f.jsx)(m.a.Item,{label:"Position",name:"position",rules:[{required:!0,message:t}],children:Object(f.jsx)(O.a,{type:"text"})}),Object(f.jsx)(m.a.Item,{wrapperCol:{offset:8,span:16},children:Object(f.jsxs)(u.a,{justify:"end",children:[Object(f.jsx)(h.a,{type:"primary",onClick:function(){a.resetFields()},children:"Clear"}),Object(f.jsx)(h.a,{style:{marginLeft:10},htmlType:"submit",type:"primary",children:"Add"})]})})]})]})},g=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(h.a,{type:"primary",onClick:function(){return c((function(e){return e+1}))},children:"Increase"}),Object(f.jsx)(h.a,{type:"primary",onClick:function(){return c(0)},children:"Reset"}),Object(f.jsxs)("div",{children:["Counter: ",n]})]})},v=n(241),C=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(v.a,{columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Position",dataIndex:"position",key:"position"}],dataSource:e.data,pagination:{position:["bottomCenter"],pageSize:5}})})},k=n(129),I=n.n(k),F=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://610a0dcad71b670017639b71.mockapi.io/api/employees");case 2:200===(t=e.sent).status&&(console.log(t.data),c(t.data));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Sample React"}),Object(f.jsx)("h2",{children:"Counter"}),Object(f.jsx)(g,{}),Object(f.jsx)("h2",{children:"Employee Table"}),Object(f.jsxs)(u.a,{justify:"space-around",children:[Object(f.jsx)(b.a,{span:7,children:Object(f.jsx)(y,{getEmployee:function(e){var t=Object(l.a)(n);t.push(e),c(t)}})}),Object(f.jsx)(b.a,{span:16,children:Object(f.jsx)(C,{data:n})})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};n(235);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root")),E()}},[[236,1,2]]]);
//# sourceMappingURL=main.33f1fbe9.chunk.js.map