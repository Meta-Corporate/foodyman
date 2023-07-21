"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6625],{6625:function(e,n,a){a.r(n);var t=a(1413),i=a(29439),c=a(47313),l=a(18197),r=a(77181),s=a(68197),d=a(59624),o=a(66672),u=a(86345),f=a(59491),m=a(72652),h=a(34491),Z=a(58467),v=a(2717),p=a(90954),b=a(97421),g=a(24511),x=a(48697),y=a(73253),C=a(5764),j=a(46417);n.default=function(){var e,n,a=(0,g.$)().t,w=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,k=(0,Z.UO)().id,N=(0,v.I0)(),E=(0,v.v9)((function(e){return e.brand}),v.wU).params,I=(0,c.useState)(null!==(e=w.data)&&void 0!==e&&e.image?[null===(n=w.data)||void 0===n?void 0:n.image]:[]),O=(0,i.Z)(I,2),S=O[0],_=O[1],F=l.Z.useForm(),P=(0,i.Z)(F,1)[0],T=(0,Z.s0)(),V=(0,c.useState)(!1),R=(0,i.Z)(V,2),U=R[0],z=R[1],A=(0,c.useState)(!1),D=(0,i.Z)(A,2),K=D[0],L=D[1];(0,c.useEffect)((function(){return function(){var e=P.getFieldsValue(!0);N((0,p.nc)({activeMenu:w,data:e}))}}),[]);var q=function(e){return{name:e,url:b.bV+e}};return(0,c.useEffect)((function(){w.refetch&&function(e){z(!0),x.Z.getById(e).then((function(e){var n=e.data;P.setFieldsValue((0,t.Z)((0,t.Z)({},n),{},{image:[q(n.img)]})),_([q(n.img)])})).finally((function(){z(!1),N((0,p.A_)(w))}))}(k)}),[w.refetch]),(0,j.jsx)(r.Z,{title:a("edit.brand"),children:U?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,j.jsx)(m.Z,{size:"large",className:"py-5"})}):(0,j.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:function(e){var n,i=(0,t.Z)((0,t.Z)({},e),{},{active:e.active?1:0,"images[0]":null===(n=S[0])||void 0===n?void 0:n.name});L(!0);var c=(0,t.Z)({},E),l="seller/brands";x.Z.update(k,i).then((function(){h.Am.success(a("successfully.updated")),N((0,p.ph)((0,t.Z)((0,t.Z)({},w),{},{nextUrl:l}))),T("/".concat(l)),N((0,y.RJ)(c))})).finally((function(){return L(!1)}))},form:P,initialValues:(0,t.Z)({},w.data),children:[(0,j.jsxs)(s.Z,{gutter:12,children:[(0,j.jsx)(d.Z,{span:12,children:(0,j.jsx)(l.Z.Item,{label:a("title"),name:"title",rules:[{required:!0,message:a("required")}],children:(0,j.jsx)(o.Z,{})})}),(0,j.jsx)(d.Z,{span:6,children:(0,j.jsx)(l.Z.Item,{label:a("image"),children:(0,j.jsx)(C.Z,{type:"brands",imageList:S,setImageList:_,form:P,multiple:!1})})}),(0,j.jsx)(d.Z,{span:6,children:(0,j.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,j.jsx)(l.Z.Item,{label:a("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(u.Z,{})})})})]}),(0,j.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:K,children:a("submit")})]})})}},86345:function(e,n,a){a.d(n,{Z:function(){return x}});var t=a(87462),i=a(4942),c=a(47313),l=a(29439),r=a(45987),s=a(46123),d=a.n(s),o=a(10288),u=a(49242),f=c.forwardRef((function(e,n){var a,t=e.prefixCls,s=void 0===t?"rc-switch":t,f=e.className,m=e.checked,h=e.defaultChecked,Z=e.disabled,v=e.loadingIcon,p=e.checkedChildren,b=e.unCheckedChildren,g=e.onClick,x=e.onChange,y=e.onKeyDown,C=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,o.Z)(!1,{value:m,defaultValue:h}),w=(0,l.Z)(j,2),k=w[0],N=w[1];function E(e,n){var a=k;return Z||(N(a=e),null===x||void 0===x||x(a,n)),a}var I=d()(s,f,(a={},(0,i.Z)(a,"".concat(s,"-checked"),k),(0,i.Z)(a,"".concat(s,"-disabled"),Z),a));return c.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?E(!1,e):e.which===u.Z.RIGHT&&E(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=E(!k,e);null===g||void 0===g||g(n,e)}}),v,c.createElement("span",{className:"".concat(s,"-inner")},k?p:b))}));f.displayName="Switch";var m=f,h=a(82508),Z=a(46479),v=a(91964),p=a(21631),b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]])}return a},g=c.forwardRef((function(e,n){var a,l=e.prefixCls,r=e.size,s=e.loading,o=e.className,u=void 0===o?"":o,f=e.disabled,g=b(e,["prefixCls","size","loading","className","disabled"]),x=c.useContext(v.E_),y=x.getPrefixCls,C=x.direction,j=c.useContext(p.Z),w=y("switch",l),k=c.createElement("div",{className:"".concat(w,"-handle")},s&&c.createElement(h.Z,{className:"".concat(w,"-loading-icon")})),N=d()((a={},(0,i.Z)(a,"".concat(w,"-small"),"small"===(r||j)),(0,i.Z)(a,"".concat(w,"-loading"),s),(0,i.Z)(a,"".concat(w,"-rtl"),"rtl"===C),a),u);return c.createElement(Z.Z,{insertExtraNode:!0},c.createElement(m,(0,t.Z)({},g,{prefixCls:w,className:N,disabled:f||s,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var x=g}}]);