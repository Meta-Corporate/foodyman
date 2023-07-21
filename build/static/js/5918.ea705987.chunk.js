"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5918],{89802:function(e,n,t){t.d(n,{q:function(){return d}});var a=t(1413),i=t(29439),r=t(45987),l=t(47313),s=t(74294),o=t(72652),c=t(46417),u=["fetchOptions","refetch"],d=function(e){var n=e.fetchOptions,t=e.refetch,d=void 0!==t&&t,f=(0,r.Z)(e,u),h=(0,l.useState)(!1),m=(0,i.Z)(h,2),p=m[0],v=m[1],x=(0,l.useState)([]),Z=(0,i.Z)(x,2),b=Z[0],y=Z[1];return(0,c.jsx)(s.Z,(0,a.Z)((0,a.Z)({labelInValue:!0,filterOption:!1,notFoundContent:p?(0,c.jsx)(o.Z,{size:"small"}):"no results"},f),{},{options:p?[]:b,onFocus:function(){b.length&&!d||(v(!0),n().then((function(e){y(e),v(!1)})))}}))}},95918:function(e,n,t){t.r(n);var a=t(1413),i=t(29439),r=t(47313),l=t(58467),s=t(34491),o=t(18197),c=t(77181),u=t(68197),d=t(59624),f=t(6289),h=t(99096),m=t(86345),p=t(59491),v=t(2717),x=t(90954),Z=t(18333),b=t(24511),y=t(70816),j=t.n(y),_=t(13783),g=t(73346),k=t(89802),C=t(51282),w=t(46417);n.default=function(){var e=(0,b.$)().t,n=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,t=(0,v.I0)(),y=o.Z.useForm(),N=(0,i.Z)(y,1)[0],O=(0,l.s0)(),S=(0,r.useState)(!1),q=(0,i.Z)(S,2),I=q[0],E=q[1],D=(0,r.useState)(!1),Y=(0,i.Z)(D,2),F=Y[0],M=Y[1],T=(0,v.v9)((function(e){return e.myShop}),v.wU).myShop,P=(0,l.UO)().id;(0,r.useEffect)((function(){return function(){var e=N.getFieldsValue(!0);e.expired_at=JSON.stringify(null===e||void 0===e?void 0:e.expired_at),t((0,x.nc)({activeMenu:n,data:e}))}}),[]);var V=function(e){M(!0),g.Z.getById(e).then((function(e){!function(e){var n,t,i,r,l;N.setFieldsValue((0,a.Z)((0,a.Z)({},e),{},{expired_at:j()(e.expired_at,"YYYY-MM-DD"),bonus_stock_id:{label:(null===e||void 0===e||null===(n=e.bonusStock)||void 0===n||null===(t=n.product)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title)+" "+(null===(r=e.bonusStock)||void 0===r?void 0:r.extras.map((function(e){return e.value})).join(", ")),value:null===e||void 0===e||null===(l=e.bonusStock)||void 0===l?void 0:l.id}})),M(!1)}(e.data)})).finally((function(){return t((0,x.A_)(n))}))};(0,r.useEffect)((function(){n.refetch&&V(P)}),[n.refetch]);return(0,w.jsx)(c.Z,{title:e("edit.bonus"),className:"h-100",children:F?(0,w.jsx)(C.Z,{}):(0,w.jsxs)(o.Z,{name:"bonus-add",layout:"vertical",onFinish:function(i){var r={expired_at:j()(i.expired_at).format("YYYY-MM-DD"),status:i.status,type:"sum",value:i.value,bonus_stock_id:i.bonus_stock_id.value,bonus_quantity:i.bonus_quantity,bonusable_id:T.id};E(!0);var l="seller/bonus/shop";g.Z.update(P,r).then((function(){s.Am.success(e("successfully.created")),t((0,x.ph)((0,a.Z)((0,a.Z)({},n),{},{nextUrl:l}))),O("/".concat(l)),t((0,_.Q)())})).finally((function(){return E(!1)}))},form:N,initialValues:(0,a.Z)((0,a.Z)({status:!0},n.data),function(){var e,t;if(null===(e=n.data)||void 0===e||!e.expired_at)return{};var a=JSON.parse(null===(t=n.data)||void 0===t?void 0:t.expired_at);return{expired_at:j()(a,"HH:mm:ss")}}()),className:"d-flex flex-column h-100",children:[(0,w.jsxs)(u.Z,{gutter:12,children:[(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(o.Z.Item,{label:e("order.amount"),name:"value",rules:[{required:!0,message:e("required")}],children:(0,w.jsx)(f.Z,{className:"w-100"})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(o.Z.Item,{label:e("bonus.product.stock"),name:"bonus_stock_id",rules:[{required:!0,message:e("required")}],children:(0,w.jsx)(k.q,{fetchOptions:function(){return Z.Z.getStock().then((function(e){return e.data.map((function(e){return{label:e.product.translation.title+" "+e.extras.map((function(e){return e.value})).join(", "),value:e.id}}))}))},debounceTimeout:200})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(o.Z.Item,{label:e("bonus.product.quantity"),name:"bonus_quantity",rules:[{required:!0,message:e("required")}],children:(0,w.jsx)(f.Z,{className:"w-100"})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(o.Z.Item,{name:"expired_at",label:e("expired.at"),rules:[{required:!0,message:e("required")}],children:(0,w.jsx)(h.Z,{className:"w-100",placeholder:"",disabledDate:function(e){return j()().add(-1,"days")>=e}})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(o.Z.Item,{label:e("active"),name:"status",valuePropName:"checked",children:(0,w.jsx)(m.Z,{})})})]}),(0,w.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,w.jsx)("div",{className:"pb-5",children:(0,w.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:I,children:e("submit")})})})]})})}},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(87462),i=t(4942),r=t(47313),l=t(29439),s=t(45987),o=t(46123),c=t.n(o),u=t(10288),d=t(49242),f=r.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,m=e.defaultChecked,p=e.disabled,v=e.loadingIcon,x=e.checkedChildren,Z=e.unCheckedChildren,b=e.onClick,y=e.onChange,j=e.onKeyDown,_=(0,s.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),g=(0,u.Z)(!1,{value:h,defaultValue:m}),k=(0,l.Z)(g,2),C=k[0],w=k[1];function N(e,n){var t=C;return p||(w(t=e),null===y||void 0===y||y(t,n)),t}var O=c()(o,f,(t={},(0,i.Z)(t,"".concat(o,"-checked"),C),(0,i.Z)(t,"".concat(o,"-disabled"),p),t));return r.createElement("button",Object.assign({},_,{type:"button",role:"switch","aria-checked":C,disabled:p,className:O,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?N(!1,e):e.which===d.Z.RIGHT&&N(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=N(!C,e);null===b||void 0===b||b(n,e)}}),v,r.createElement("span",{className:"".concat(o,"-inner")},C?x:Z))}));f.displayName="Switch";var h=f,m=t(82508),p=t(46479),v=t(91964),x=t(21631),Z=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},b=r.forwardRef((function(e,n){var t,l=e.prefixCls,s=e.size,o=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,b=Z(e,["prefixCls","size","loading","className","disabled"]),y=r.useContext(v.E_),j=y.getPrefixCls,_=y.direction,g=r.useContext(x.Z),k=j("switch",l),C=r.createElement("div",{className:"".concat(k,"-handle")},o&&r.createElement(m.Z,{className:"".concat(k,"-loading-icon")})),w=c()((t={},(0,i.Z)(t,"".concat(k,"-small"),"small"===(s||g)),(0,i.Z)(t,"".concat(k,"-loading"),o),(0,i.Z)(t,"".concat(k,"-rtl"),"rtl"===_),t),d);return r.createElement(p.Z,{insertExtraNode:!0},r.createElement(h,(0,a.Z)({},b,{prefixCls:k,className:w,disabled:f||o,ref:n,loadingIcon:C})))}));b.__ANT_SWITCH=!0,b.displayName="Switch";var y=b}}]);