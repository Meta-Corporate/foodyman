"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1717],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(45987),c=(t(47313),t(59491)),r=t(47515),o=t(34491),l=t(24511),s=t(79492),u=t(46417),d=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,a.Z)(e,d),m=(0,l.$)().t,p=(0,s.Z)().isDemo;return(0,u.jsx)(c.Z,(0,i.Z)({size:t,icon:(0,u.jsx)(r.Z,{}),onClick:function(e){p?o.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),a=t(29439),c=t(47313),r=t(56140),o=t(67251),l=t(45705),s=t(86345),u=t(78267),d=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,C=(0,v.$)().t,w=(0,c.useState)(!1),b=(0,a.Z)(w,2),j=b[0],k=b[1],z=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,Z.jsx)(d.Z,{title:C("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},p),size:g,icon:(0,Z.jsx)(h.Z,{}),children:y?null:C("Columns")})})})}},90354:function(e,n,t){t(47313);var i=t(58467),a=t(77181),c=t(59491),r=t(2717),o=t(90954),l=t(55768),s=t(46417);n.Z=function(e){var n=e.children,t=e.containerName,u=e.headerTitle,d=(e.subtitle,e.navLInkTo),f=e.buttonTitle,h=(e.state,(0,r.I0)()),v=(0,i.s0)();return(0,s.jsx)("div",{className:t,children:(0,s.jsx)(a.Z,{title:u,extra:f?(0,s.jsx)(c.Z,{type:"primary",icon:(0,s.jsx)(l.Z,{}),onClick:function(){var e,n=d.split("");"/"===n[0]&&n.shift();var t={id:e=n.join(""),url:e,name:f};h((0,o.bL)(t)),v(d)},children:f}):null,children:n})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},80314:function(e,n,t){var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},11717:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var i=t(4942),a=t(93433),c=t(1413),r=t(29439),o=t(47313),l=t(12019),s=t(47515),u=t(55768),d=t(86345),f=t(45705),h=t(59491),v=t(77181),Z=t(78508),m=t(34491),p=(t(90354),t(69658)),x=t(74580),g=t(2717),y=t(58467),C=t(90954),w=t(80314),b=t(13945),j=t(24511),k=t(5568),z=t(29e3),_=t(55940),I=t(53233),N=t(46417);function S(){var e=(0,j.$)().t,n=(0,g.I0)(),t=(0,y.s0)(),S=(0,o.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("question"),dataIndex:"translation",key:"translation",is_show:!0,render:function(e){return null===e||void 0===e?void 0:e.question}},{title:e("type"),dataIndex:"type",key:"type",is_show:!0},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:e("active"),dataIndex:"active",key:"active",is_show:!0,render:function(e,n){return(0,N.jsx)(d.Z,{checked:e,onChange:function(){A(n.uuid),L(!1),E(!0)}})}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(i,a){return(0,N.jsxs)(f.Z,{children:[(0,N.jsx)(h.Z,{type:"primary",icon:(0,N.jsx)(l.Z,{}),onClick:function(){return function(i){n((0,C.bL)({url:"faq/".concat(i.uuid),id:"faq_".concat(i.uuid),name:e("edit.faq")})),t("/faq/".concat(i.uuid))}(a)}}),(0,N.jsx)(_.Z,{icon:(0,N.jsx)(s.Z,{}),onClick:function(){A([a.uuid]),L(!0),E(!0),J(!0)}})]})}}]),q=(0,r.Z)(S,2),O=q[0],V=q[1],E=(0,o.useContext)(x._).setIsModalVisible,H=(0,o.useState)(null),T=(0,r.Z)(H,2),P=T[0],A=T[1],M=(0,o.useState)(!1),R=(0,r.Z)(M,2),F=R[0],L=R[1],D=(0,o.useState)(!1),K=(0,r.Z)(D,2),$=K[0],B=K[1],U=(0,o.useState)(null),G=(0,r.Z)(U,2),W=G[0],J=G[1],Q=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,X=(0,g.v9)((function(e){return e.faq}),g.wU),Y=X.faqs,ee=X.meta,ne=X.loading,te=X.params;(0,o.useEffect)((function(){Q.refetch&&(n((0,z.F)()),n((0,C.A_)(Q)))}),[Q.refetch]),(0,w.Z)((function(){var e=Q.data,t={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};n((0,z.F)(t))}),[Q.data]);var ie={id:P,onChange:function(e){A(e)}};return(0,N.jsxs)(v.Z,{title:e("faqs"),extra:(0,N.jsxs)(f.Z,{children:[(0,N.jsx)(h.Z,{icon:(0,N.jsx)(u.Z,{}),type:"primary",onClick:function(){n((0,C.bL)({id:"add.faq",url:"faq/add",name:e("add.faq")})),t("/faq/add")},children:e("add.faq")}),(0,N.jsx)(_.Z,{className:"",type:"danger",onClick:function(){null===P||0===P.length?m.Am.warning(e("select.the.product")):(E(!0),J(!1))},children:e("delete.all")}),(0,N.jsx)(I.Z,{columns:O,setColumns:V})]}),children:[(0,N.jsx)(Z.Z,{scroll:{x:!0},rowSelection:ie,columns:null===O||void 0===O?void 0:O.filter((function(e){return e.is_show})),dataSource:Y,pagination:{pageSize:te.perPage,page:te.page,total:ee.total,defaultCurrent:te.page},rowKey:function(e){return e.id},onChange:function(e,t,i){var a=e.pageSize,r=e.current,o=i.field,l=i.order,s=(0,b.Z)(l);n((0,C.nc)({activeMenu:Q,data:(0,c.Z)((0,c.Z)({},Q.data),{},{perPage:a,page:r,column:o,sort:s})}))},loading:ne}),(0,N.jsx)(p.Z,{click:F?function(){B(!0);var t=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(P.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(t).then((function(){m.Am.success(e("successfully.deleted")),n((0,z.F)()),E(!1),J(null)})).finally((function(){return B(!1)}))}:function(){B(!0),k.Z.setActive(P).then((function(){m.Am.success(e("successfully.updated")),n((0,z.F)()),E(!1)})).finally((function(){return B(!1)}))},text:e(F?W?"delete":"all.delete":"set.active.faq"),loading:$,setText:A})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};o.displayName="PlusCircleOutlined";var l=a.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};o.displayName="TableOutlined";var l=a.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(87462),a=t(4942),c=t(47313),r=t(29439),o=t(45987),l=t(46123),s=t.n(l),u=t(10288),d=t(49242),f=c.forwardRef((function(e,n){var t,i=e.prefixCls,l=void 0===i?"rc-switch":i,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,C=e.onKeyDown,w=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,u.Z)(!1,{value:h,defaultValue:v}),j=(0,r.Z)(b,2),k=j[0],z=j[1];function _(e,n){var t=k;return Z||(z(t=e),null===y||void 0===y||y(t,n)),t}var I=s()(l,f,(t={},(0,a.Z)(t,"".concat(l,"-checked"),k),(0,a.Z)(t,"".concat(l,"-disabled"),Z),t));return c.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?_(!1,e):e.which===d.Z.RIGHT&&_(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var n=_(!k,e);null===g||void 0===g||g(n,e)}}),m,c.createElement("span",{className:"".concat(l,"-inner")},k?p:x))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},g=c.forwardRef((function(e,n){var t,r=e.prefixCls,o=e.size,l=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=c.useContext(m.E_),C=y.getPrefixCls,w=y.direction,b=c.useContext(p.Z),j=C("switch",r),k=c.createElement("div",{className:"".concat(j,"-handle")},l&&c.createElement(v.Z,{className:"".concat(j,"-loading-icon")})),z=s()((t={},(0,a.Z)(t,"".concat(j,"-small"),"small"===(o||b)),(0,a.Z)(t,"".concat(j,"-loading"),l),(0,a.Z)(t,"".concat(j,"-rtl"),"rtl"===w),t),d);return c.createElement(Z.Z,{insertExtraNode:!0},c.createElement(h,(0,i.Z)({},g,{prefixCls:j,className:z,disabled:f||l,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);