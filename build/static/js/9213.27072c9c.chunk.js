"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9213],{99213:function(t,e,n){n.r(e);var i=n(1413),a=n(29439),u=n(47313),c=n(58467),r=n(34491),s=n(83999),l=n(18197),o=n(77181),d=n(2717),v=n(90954),f=n(24511),m=n(73431),Z=n(14241),h=n(65436),p=n(46417),g=s.Z.Step;e.default=function(){var t,e,n,x=(0,f.$)().t,k=(0,d.v9)((function(t){return t.menu}),d.wU).activeMenu,_=(0,d.I0)(),j=l.Z.useForm(),y=(0,a.Z)(j,1)[0],b=(0,c.s0)(),S=(0,u.useState)(null!==(t=k.data)&&void 0!==t&&t.image?[null===(e=k.data)||void 0===e?void 0:e.image]:[]),F=(0,a.Z)(S,2),w=F[0],q=F[1],C=(0,u.useState)((null===(n=k.data)||void 0===n?void 0:n.step)||0),I=(0,a.Z)(C,2),M=I[0],U=I[1],V=function(){U(M+1)},A=function(){U(M-1)},E=(0,u.useState)(!1),N=(0,a.Z)(E,2),$=N[0],z=N[1];(0,u.useEffect)((function(){return function(){var t=y.getFieldsValue(!0);_((0,v.nc)({activeMenu:k,data:t}))}}),[]);return(0,p.jsx)(o.Z,{title:x("add.recepe"),extra:(0,p.jsx)(m.Z,{}),children:(0,p.jsxs)(l.Z,{layout:"vertical",onFinish:function(t){var e;y.validateFields();var n=(0,i.Z)((0,i.Z)({},t),{},{images:null===w||void 0===w?void 0:w.map((function(t){return t.name})),category_id:t.category_id.value,stocks:null===(e=t.stocks)||void 0===e?void 0:e.map((function(t){return{min_quantity:t.min_quantity,stock_id:t.stock_id.value}}))});z(!0);var a="seller/recept";Z.Z.create(n).then((function(){r.Am.success(x("successfully.created")),b("/".concat(a)),_((0,v.ph)((0,i.Z)((0,i.Z)({},k),{},{nextUrl:a})))})).finally((function(){return z(!1)}))},form:y,initialValues:(0,i.Z)({active:!0},k.data),children:[(0,p.jsx)(s.Z,{current:M,children:h.S.map((function(t){return(0,p.jsx)(g,{title:x(t.title)},t.title)}))}),h.S.map((function(t){var e=t.content;return(0,p.jsx)("div",{className:"steps-content ".concat(t.step!==M+1&&"hidden"),children:(0,p.jsx)(e,{next:V,prev:A,loading:$,image:w,setImage:q})},t.title)}))]})})}}}]);