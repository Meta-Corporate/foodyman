"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9505],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),c=t(45987),a=(t(47313),t(59491)),o=t(47515),r=t(34491),s=t(24511),l=t(79492),d=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,m=(0,c.Z)(e,u),Z=(0,s.$)().t,p=(0,l.Z)().isDemo;return(0,d.jsx)(a.Z,(0,i.Z)({size:t,icon:(0,d.jsx)(o.Z,{}),onClick:function(e){p?r.Am.warning(Z("cannot.work.demo")):f(e)},type:v},m))}},53233:function(e,n,t){var i=t(1413),c=t(29439),a=t(47313),o=t(56140),r=t(67251),s=t(45705),l=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),m=t(46417),Z=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,w=(0,v.$)().t,C=(0,a.useState)(!1),k=(0,c.Z)(C,2),b=k[0],j=k[1],z=(0,m.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(r.Z.Item,{children:(0,m.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsx)(l.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)}})]})},e+n)}))});return(0,m.jsx)(d.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){j(e)},visible:b,children:(0,m.jsx)(u.Z,{title:w("change.columns"),children:(0,m.jsx)(f.Z,{style:(0,i.Z)({},p),size:g,icon:(0,m.jsx)(h.Z,{}),children:y?null:w("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},80314:function(e,n,t){var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},49505:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var i=t(4942),c=t(93433),a=t(1413),o=t(29439),r=t(47313),s=t(12019),l=t(47515),d=t(55768),u=t(78891),f=t(86345),h=t(45705),v=t(59491),m=t(77181),Z=t(78508),p=t(34491),x=t(69658),g=t(74580),y=t(2717),w=t(58467),C=t(90954),k=t(57409),b=t(69660),j=t(80314),z=t(13945),_=t(24511),I=t(45464),N=t(55940),S=t(53233),O=t(46417);function V(){var e=(0,_.$)().t,n=(0,y.I0)(),t=(0,w.s0)(),V=(0,r.useContext)(g._).setIsModalVisible,E=(0,r.useState)(null),H=(0,o.Z)(E,2),P=H[0],A=H[1],M=(0,r.useState)(null),R=(0,o.Z)(M,2),T=R[0],K=R[1],D=(0,r.useState)(!1),L=(0,o.Z)(D,2),$=L[0],B=L[1],U=(0,r.useState)(null),F=(0,o.Z)(U,2),G=F[0],W=F[1],q=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,J=(0,y.v9)((function(e){return e.discount}),y.wU),Q=J.discounts,X=J.meta,Y=J.loading,ee=J.params,ne=(0,r.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,O.jsx)(u.Z,{src:(0,I.Z)(e),alt:n.type,width:100,className:"rounded",preview:!0,placeholder:!0})}},{title:e("type"),dataIndex:"type",key:"type",is_show:!0},{title:e("price"),dataIndex:"price",key:"price",is_show:!0},{title:e("start.date"),dataIndex:"start",key:"start",is_show:!0},{title:e("end.date"),dataIndex:"end",key:"end",is_show:!0},{title:e("active"),dataIndex:"active",key:"active",is_show:!0,render:function(e,n){return(0,O.jsx)(f.Z,{onChange:function(){V(!0),A([n.id]),K(!0)},disabled:n.deleted_at,checked:n.active})}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(i,c){return(0,O.jsxs)(h.Z,{children:[(0,O.jsx)(v.Z,{type:"primary",icon:(0,O.jsx)(s.Z,{}),onClick:function(){return function(i){n((0,C.bL)({url:"discount/".concat(i.id),id:"discount_edit",name:e("edit.discount")})),t("/discount/".concat(i.id))}(c)}}),(0,O.jsx)(N.Z,{icon:(0,O.jsx)(l.Z,{}),onClick:function(){A([c.id]),K(!1),V(!0),W(!0)}})]})}}]),te=(0,o.Z)(ne,2),ie=te[0],ce=te[1];(0,r.useEffect)((function(){q.refetch&&(n((0,b.k)()),n((0,C.A_)(q)))}),[q.refetch]),(0,j.Z)((function(){var e=q.data,t={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};n((0,b.k)(t))}),[q.data]);var ae={selectedRowKeys:P,onChange:function(e){A(e)}};return(0,O.jsxs)(m.Z,{title:e("discounts"),extra:(0,O.jsxs)(h.Z,{wrap:!0,children:[(0,O.jsx)(v.Z,{icon:(0,O.jsx)(d.Z,{}),type:"primary",onClick:function(){n((0,C.bL)({id:"add-restaurant",url:"discount/add",name:e("add.discount")})),t("/discount/add")},children:e("add.discount")}),(0,O.jsx)(N.Z,{size:"",onClick:function(){null===P||0===P.length?p.Am.warning(e("select.the.product")):(V(!0),W(!1))},children:e("delete.selected")}),(0,O.jsx)(S.Z,{columns:ie,setColumns:ce})]}),children:[(0,O.jsx)(Z.Z,{scroll:{x:!0},rowSelection:ae,columns:null===ie||void 0===ie?void 0:ie.filter((function(e){return e.is_show})),dataSource:Q,pagination:{pageSize:ee.perPage,page:ee.page,total:X.total,defaultCurrent:ee.page},rowKey:function(e){return e.id},onChange:function(e,t,i){var c=e.pageSize,a=e.current,o=i.field,r=i.order,s=(0,z.Z)(r);n((0,C.nc)({activeMenu:q,data:{perPage:c,page:a,column:o,sort:s}}))},loading:Y}),(0,O.jsx)(x.Z,{click:T?function(){B(!0),k.Z.setActive(P[0]).then((function(){p.Am.success(e("successfully.updated")),n((0,b.k)()),V(!1),K(!0)})).finally((function(){return B(!1)}))}:function(){B(!0);var t=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,c.Z)(P.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(t).then((function(){p.Am.success(e("successfully.deleted")),n((0,b.k)()),V(!1)})).finally((function(){return B(!1)}))},text:e(T?"set.active.discount":G?"delete":"all.delete"),setText:A,loading:$,setActive:K})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),c=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},o=t(17469),r=function(e,n){return c.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};r.displayName="PlusCircleOutlined";var s=c.forwardRef(r)},99587:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),c=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),r=function(e,n){return c.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};r.displayName="TableOutlined";var s=c.forwardRef(r)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(87462),c=t(4942),a=t(47313),o=t(29439),r=t(45987),s=t(46123),l=t.n(s),d=t(10288),u=t(49242),f=a.forwardRef((function(e,n){var t,i=e.prefixCls,s=void 0===i?"rc-switch":i,f=e.className,h=e.checked,v=e.defaultChecked,m=e.disabled,Z=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,w=e.onKeyDown,C=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:h,defaultValue:v}),b=(0,o.Z)(k,2),j=b[0],z=b[1];function _(e,n){var t=j;return m||(z(t=e),null===y||void 0===y||y(t,n)),t}var I=l()(s,f,(t={},(0,c.Z)(t,"".concat(s,"-checked"),j),(0,c.Z)(t,"".concat(s,"-disabled"),m),t));return a.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":j,disabled:m,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?_(!1,e):e.which===u.Z.RIGHT&&_(!0,e),null===w||void 0===w||w(e)},onClick:function(e){var n=_(!j,e);null===g||void 0===g||g(n,e)}}),Z,a.createElement("span",{className:"".concat(s,"-inner")},j?p:x))}));f.displayName="Switch";var h=f,v=t(82508),m=t(46479),Z=t(91964),p=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(i=Object.getOwnPropertySymbols(e);c<i.length;c++)n.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(t[i[c]]=e[i[c]])}return t},g=a.forwardRef((function(e,n){var t,o=e.prefixCls,r=e.size,s=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=a.useContext(Z.E_),w=y.getPrefixCls,C=y.direction,k=a.useContext(p.Z),b=w("switch",o),j=a.createElement("div",{className:"".concat(b,"-handle")},s&&a.createElement(v.Z,{className:"".concat(b,"-loading-icon")})),z=l()((t={},(0,c.Z)(t,"".concat(b,"-small"),"small"===(r||k)),(0,c.Z)(t,"".concat(b,"-loading"),s),(0,c.Z)(t,"".concat(b,"-rtl"),"rtl"===C),t),u);return a.createElement(m.Z,{insertExtraNode:!0},a.createElement(h,(0,i.Z)({},g,{prefixCls:b,className:z,disabled:f||s,ref:n,loadingIcon:j})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);