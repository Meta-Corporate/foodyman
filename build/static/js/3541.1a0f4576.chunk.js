"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3541],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(45987),c=(t(47313),t(59491)),r=t(47515),o=t(34491),l=t(24511),s=t(79492),u=t(46417),d=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,a.Z)(e,d),m=(0,l.$)().t,p=(0,s.Z)().isDemo;return(0,u.jsx)(c.Z,(0,i.Z)({size:t,icon:(0,u.jsx)(r.Z,{}),onClick:function(e){p?o.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),a=t(29439),c=t(47313),r=t(56140),o=t(67251),l=t(45705),s=t(86345),u=t(78267),d=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,C=e.iconOnly,w=(0,v.$)().t,y=(0,c.useState)(!1),b=(0,a.Z)(y,2),j=b[0],k=b[1],S=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:S,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,Z.jsx)(d.Z,{title:w("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},p),size:g,icon:(0,Z.jsx)(h.Z,{}),children:C?null:w("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(29439),c=t(45987),r=t(47313),o=t(66672),l=t(16031),s=t(40765),u=t(46417),d=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,c.Z)(e,d),v=(0,r.useState)(t),Z=(0,a.Z)(v,2),m=Z[0],p=Z[1],x=(0,r.useMemo)((function(){return(0,l.debounce)((function(e){n(e)}),800)}),[]);return(0,r.useEffect)((function(){p(t)}),[f]),(0,u.jsx)(o.Z,(0,i.Z)({value:m,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,u.jsx)(s.Z,{})},h))}},80314:function(e,n,t){var i=t(47313);n.Z=function(e,n){var t=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},53541:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var i=t(4942),a=t(93433),c=t(1413),r=t(29439),o=t(47313),l=t(12019),s=t(55768),u=t(86345),d=t(45705),f=t(59491),h=t(77181),v=t(78508),Z=t(58467),m=t(34491),p=t(74580),x=t(69658),g=t(2717),C=t(90954),w=t(31055),y=t(40901),b=t(24511),j=t(53233),k=t(55940),S=t(41481),z=t(80314),N=t(46417);function V(){var e,n,t=(0,b.$)().t,V=(0,g.I0)(),I=(0,Z.s0)(),_=(0,o.useState)(null),E=(0,r.Z)(_,2),O=E[0],H=E[1],A=(0,o.useState)(!1),M=(0,r.Z)(A,2),P=M[0],R=M[1],T=(0,o.useContext)(p._).setIsModalVisible,K=(0,o.useState)(null),D=(0,r.Z)(K,2),L=D[0],$=D[1],B=(0,o.useState)(null),U=(0,r.Z)(B,2),F=U[0],G=U[1],W=(0,o.useState)([{title:t("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:t("name"),dataIndex:"translation",is_show:!0,render:function(e){return null===e||void 0===e?void 0:e.title}},{title:t("position"),dataIndex:"position",is_show:!0},{title:t("active"),dataIndex:"active",is_show:!0,render:function(e,n){return(0,N.jsx)(u.Z,{onChange:function(){T(!0),H([n.id]),G(!0)},checked:e})}},{title:t("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(f.Z,{type:"primary",icon:(0,N.jsx)(l.Z,{}),onClick:function(){return function(e){V((0,C.bL)({id:"unit-edit",url:"unit/".concat(e.id),name:t("edit.unit")})),I("/unit/".concat(e.id))}(n)}}),(0,N.jsx)(k.Z,{onClick:function(){H([n.id]),T(!0),$(!0),G(!1)}})]})}}]),q=(0,r.Z)(W,2),J=q[0],Q=q[1],X=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,Y=(0,g.v9)((function(e){return e.unit}),g.wU),ee=Y.units,ne=Y.meta,te=Y.loading,ie=Y.params;(0,o.useEffect)((function(){X.refetch&&(V((0,y.S)()),V((0,C.A_)(X)))}),[X.refetch]);var ae={selectedRowKeys:O,onChange:function(e){H(e)}};return(0,z.Z)((function(){var e=X.data,n={search:null===e||void 0===e?void 0:e.search};V((0,y.S)(n))}),[X.data]),(0,N.jsxs)(h.Z,{title:t("units"),extra:(0,N.jsxs)(d.Z,{wrap:!0,children:[(0,N.jsx)(f.Z,{type:"primary",onClick:function(){V((0,C.bL)({id:"unit-add",url:"unit/add",name:t("add.unit")})),I("/unit/add")},icon:(0,N.jsx)(s.Z,{}),children:t("add.unit")}),(0,N.jsx)(k.Z,{size:"",onClick:function(){null===O||0===O.length?m.Am.warning(t("select.the.product")):(T(!0),$(!1))},children:t("delete.selected")}),(0,N.jsx)(j.Z,{columns:J,setColumns:Q})]}),children:[(0,N.jsx)("div",{className:"d-flex justify-content-between",children:(0,N.jsx)(S.Z,{placeholder:t("search"),className:"w-25",handleChange:function(e){return n=e,t="search",void V((0,C.nc)({activeMenu:X,data:(0,c.Z)((0,c.Z)({},X.data),{},(0,i.Z)({},t,n))}));var n,t},defaultValue:null===(e=X.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(n=X.data)&&void 0!==n&&n.search)})}),(0,N.jsx)(v.Z,{scroll:{x:!0},rowSelection:ae,loading:te,columns:null===J||void 0===J?void 0:J.filter((function(e){return e.is_show})),dataSource:ee,pagination:{pageSize:ie.perPage,page:ie.page,total:ne.total,defaultCurrent:ie.page},onChange:function(e,n){var t=e.pageSize,i=e.current,a=n.field,r=function(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}(n.order);V((0,y.S)((0,c.Z)((0,c.Z)({},ie),{},{perPage:t,page:i,column:a,sort:r})))},rowKey:function(e){return e.id}}),(0,N.jsx)(x.Z,{click:F?function(){R(!0);var e=O.find((function(e){return e}));w.Z.setActive(e).then((function(){T(!1),V((0,y.S)()),H([]),G(!1),m.Am.success(t("successfully.updated"))})).finally((function(){return R(!1)}))}:function(){R(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(O.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));w.Z.delete(e).then((function(){m.Am.success(t("successfully.deleted")),T(!1),$(null),G(!1),V((0,y.S)())})).finally((function(){return R(!1)}))},text:t(F?"set.active.food":L?"delete":"all.delete"),loading:P,setText:H,setActive:G})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};o.displayName="PlusCircleOutlined";var l=a.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};o.displayName="TableOutlined";var l=a.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(87462),a=t(4942),c=t(47313),r=t(29439),o=t(45987),l=t(46123),s=t.n(l),u=t(10288),d=t(49242),f=c.forwardRef((function(e,n){var t,i=e.prefixCls,l=void 0===i?"rc-switch":i,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,C=e.onChange,w=e.onKeyDown,y=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,u.Z)(!1,{value:h,defaultValue:v}),j=(0,r.Z)(b,2),k=j[0],S=j[1];function z(e,n){var t=k;return Z||(S(t=e),null===C||void 0===C||C(t,n)),t}var N=s()(l,f,(t={},(0,a.Z)(t,"".concat(l,"-checked"),k),(0,a.Z)(t,"".concat(l,"-disabled"),Z),t));return c.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:N,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?z(!1,e):e.which===d.Z.RIGHT&&z(!0,e),null===w||void 0===w||w(e)},onClick:function(e){var n=z(!k,e);null===g||void 0===g||g(n,e)}}),m,c.createElement("span",{className:"".concat(l,"-inner")},k?p:x))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},g=c.forwardRef((function(e,n){var t,r=e.prefixCls,o=e.size,l=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),C=c.useContext(m.E_),w=C.getPrefixCls,y=C.direction,b=c.useContext(p.Z),j=w("switch",r),k=c.createElement("div",{className:"".concat(j,"-handle")},l&&c.createElement(v.Z,{className:"".concat(j,"-loading-icon")})),S=s()((t={},(0,a.Z)(t,"".concat(j,"-small"),"small"===(o||b)),(0,a.Z)(t,"".concat(j,"-loading"),l),(0,a.Z)(t,"".concat(j,"-rtl"),"rtl"===y),t),d);return c.createElement(Z.Z,{insertExtraNode:!0},c.createElement(h,(0,i.Z)({},g,{prefixCls:j,className:S,disabled:f||l,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var C=g}}]);