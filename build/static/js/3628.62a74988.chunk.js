"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3628],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),i=t(45987),l=(t(47313),t(59491)),c=t(47515),r=t(34491),o=t(24511),u=t(79492),s=t(46417),d=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,i.Z)(e,d),m=(0,o.$)().t,p=(0,u.Z)().isDemo;return(0,s.jsx)(l.Z,(0,a.Z)({size:t,icon:(0,s.jsx)(c.Z,{}),onClick:function(e){p?r.Am.warning(m("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var a=t(1413),i=t(29439),l=t(47313),c=t(56140),r=t(67251),o=t(45705),u=t(86345),s=t(78267),d=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),m=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,j=(0,v.$)().t,C=(0,l.useState)(!1),b=(0,i.Z)(C,2),w=b[0],k=b[1],S=(0,Z.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(r.Z.Item,{children:(0,Z.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(u.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(s.Z,{overlay:S,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,Z.jsx)(d.Z,{title:j("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,a.Z)({},p),size:g,icon:(0,Z.jsx)(h.Z,{}),children:y?null:j("Columns")})})})}},73431:function(e,n,t){var a=t(47313),i=t(39180),l=t(2717),c=t(28830),r=t(60535),o=t(46417);n.Z=function(){var e=(0,l.I0)(),n=(0,l.v9)((function(e){return e.formLang}),l.wU),t=n.languages,u=n.defaultLang;(0,a.useEffect)((function(){r.Z.getAllActive().then((function(n){var t=n.data;e((0,c.dc)(t)),e((0,c.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,c.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(i.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),i=t(29439),l=t(45987),c=t(47313),r=t(66672),o=t(16031),u=t(40765),s=t(46417),d=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,l.Z)(e,d),v=(0,c.useState)(t),Z=(0,i.Z)(v,2),m=Z[0],p=Z[1],x=(0,c.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,c.useEffect)((function(){p(t)}),[f]),(0,s.jsx)(r.Z,(0,a.Z)({value:m,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,s.jsx)(u.Z,{})},h))}},75336:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(93433),i=t(4942);function l(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",l=e.map((function(e){return(0,i.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(l)))}},83628:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var a=t(4942),i=t(93433),l=t(1413),c=t(29439),r=t(47313),o=t(45705),u=t(59491),s=t(77181),d=t(78508),f=t(31741),h=t(12019),v=t(47515),Z=t(55768),m=t(34491),p=t(24511),x=t(22307),g=t(2717),y=t(97340),j=t(90954),C=t(18197),b=t(84695),w=t(66672),k=t(73431),S=t(75336),V=t(51282),z=t(46417);function I(e){var n=e.modal,t=e.handleCancel,o=C.Z.useForm(),s=(0,c.Z)(o,1)[0],d=(0,p.$)().t,f=(0,g.I0)(),h=(0,r.useState)(!1),v=(0,c.Z)(h,2),Z=v[0],j=v[1],I=(0,r.useState)(!1),N=(0,c.Z)(I,2),O=N[0],E=N[1],_=(0,g.v9)((function(e){return e.formLang}),g.wU),H=_.languages,A=_.defaultLang;function G(e){E(!0),x.Z.getGroupById(e).then((function(e){var n=e.data;s.setFieldsValue((0,l.Z)((0,l.Z)({},n),function(e){if(!e)return{};var n=e.translations,t=H.map((function(e){var t;return(0,a.Z)({},"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title)}));return Object.assign.apply(Object,[{}].concat((0,i.Z)(t)))}(n)))})).finally((function(){return E(!1)}))}(0,r.useEffect)((function(){n.id&&G(n.id)}),[n]);return(0,z.jsx)(b.Z,{title:n.id?d("edit.extra.group"):d("add.extra.group"),visible:!!n,onCancel:t,footer:[(0,z.jsx)(u.Z,{type:"primary",onClick:function(){return s.submit()},loading:Z,children:d("save")},"save-button-group"),(0,z.jsx)(u.Z,{type:"default",onClick:t,children:d("cancel")},"cancel-button-group")],children:O?(0,z.jsx)(V.Z,{}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:"d-flex justify-content-end",children:(0,z.jsx)(k.Z,{})}),(0,z.jsx)(C.Z,{layout:"vertical",name:"extra-group",form:s,onFinish:function(e){var a={title:(0,S.Z)(H,e),type:"text"};n.id?function(e,n){j(!0),x.Z.updateGroup(e,n).then((function(){m.Am.success(d("successfully.updated")),f((0,y.Vy)()),t()})).finally((function(){return j(!1)}))}(n.id,a):function(e){j(!0),x.Z.createGroup(e).then((function(){m.Am.success(d("successfully.created")),t(),f((0,y.Vy)())})).finally((function(){return j(!1)}))}(a)},children:H.map((function(e){return(0,z.jsx)(C.Z.Item,{rules:[{required:e.locale===A,message:d("required")}],name:"title[".concat(e.locale,"]"),label:d("title"),hidden:e.locale!==A,children:(0,z.jsx)(w.Z,{placeholder:d("title")})},"title"+e.locale)}))})]})})}var N=t(55940),O=t(83371),E=t(78891),_=t(97421);function H(e){var n,t=e.open,a=e.handleClose,i=(0,p.$)().t,l=(0,r.useState)([]),u=(0,c.Z)(l,2),s=u[0],d=u[1],f=(0,r.useState)(!1),h=(0,c.Z)(f,2),v=h[0],Z=h[1];return(0,r.useEffect)((function(){Z(!0),x.Z.getGroupById(t).then((function(e){d(e.data)})).finally((function(){return Z(!1)}))}),[]),(0,z.jsx)(b.Z,{closable:!1,visible:t,footer:null,centered:!0,onCancel:a,children:v?(0,z.jsx)(V.Z,{}):(0,z.jsx)(O.Z,{title:"".concat(i("extra.group.value")),bordered:!0,children:null===(n=s.extra_values)||void 0===n?void 0:n.map((function(e,n){return(0,z.jsx)(O.Z.Item,{label:s.translation.title,span:3,children:"text"===s.type?e.value:"image"===s.type?(0,z.jsx)(E.Z,{src:_.bV+e.value,alt:"images",width:100,height:80}):(0,z.jsxs)(o.Z,{children:[(0,z.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:e.value}}),e.value]})},n)}))})})}var A=t(53233),G=t(69658),M=t(74580);t(41481);function P(){var e=(0,p.$)().t,n=(0,g.I0)(),t=(0,r.useContext)(M._).setIsModalVisible,C=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,b=(0,g.v9)((function(e){return e.extraGroup}),g.wU),w=b.extraGroups,k=b.loading,S=(0,r.useState)(null),V=(0,c.Z)(S,2),O=V[0],E=V[1],_=(0,r.useState)(null),P=(0,c.Z)(_,2),T=P[0],F=P[1],R=(0,r.useState)(null),B=(0,c.Z)(R,2),K=B[0],L=B[1],$=(0,r.useState)(!1),D=(0,c.Z)($,2),U=D[0],q=D[1],W=(0,r.useState)(null),J=(0,c.Z)(W,2),Q=J[0],X=J[1],Y=(0,r.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("title"),dataIndex:"translation",key:"translation",is_show:!0,render:function(e){return null===e||void 0===e?void 0:e.title}},{title:e("type"),dataIndex:"type",key:"type",is_show:!0},{title:e("options"),is_show:!0,render:function(e){return(0,z.jsxs)(o.Z,{children:[(0,z.jsx)(u.Z,{type:"primary",icon:(0,z.jsx)(f.Z,{}),onClick:function(){return F(e.id)}}),(0,z.jsx)(u.Z,{type:"primary",icon:(0,z.jsx)(h.Z,{}),onClick:function(){return L(e)}}),(0,z.jsx)(N.Z,{type:"primary",danger:!0,icon:(0,z.jsx)(v.Z,{}),onClick:function(){t(!0),E([e.id]),X(!0)}})]})}}]),ee=(0,c.Z)(Y,2),ne=ee[0],te=ee[1],ae=function(){F(null),L(null)};(0,r.useEffect)((function(){C.refetch&&(n((0,y.Vy)()),n((0,j.A_)(C)))}),[C.refetch]);var ie={selectedRowKeys:O,onChange:function(e){E(e)}};return(0,z.jsxs)(s.Z,{title:e("extra.group"),extra:(0,z.jsxs)(o.Z,{wrap:!0,children:[(0,z.jsx)(u.Z,{type:"primary",icon:(0,z.jsx)(Z.Z,{}),onClick:function(){return L({})},children:e("add.extra")}),(0,z.jsx)(N.Z,{size:"",onClick:function(){null===O||0===O.length?m.Am.warning(e("select.the.product")):(t(!0),X(!1))},children:e("delete.selected")}),(0,z.jsx)(A.Z,{columns:ne,setColumns:te})]}),children:[(0,z.jsx)(d.Z,{scroll:{x:!0},rowSelection:ie,loading:k,columns:null===ne||void 0===ne?void 0:ne.filter((function(e){return e.is_show})),dataSource:w,rowKey:function(e){return e.id},pagination:!1}),K&&(0,z.jsx)(I,{modal:K,handleCancel:ae}),(0,z.jsx)(G.Z,{click:function(){q(!0);var c=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(O.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));x.Z.deleteGroup(c).then((function(){t(!1),m.Am.success(e("successfully.deleted")),E(null),n((0,y.Vy)())})).finally((function(){return q(!1)}))},text:e(Q?"delete":"all.delete"),loading:U,setText:E}),T&&(0,z.jsx)(H,{open:T,handleClose:ae})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),r=function(e,n){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:l}))};r.displayName="PlusCircleOutlined";var o=i.forwardRef(r)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),r=function(e,n){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:l}))};r.displayName="TableOutlined";var o=i.forwardRef(r)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(87462),i=t(4942),l=t(47313),c=t(29439),r=t(45987),o=t(46123),u=t.n(o),s=t(10288),d=t(49242),f=l.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,j=e.onKeyDown,C=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,s.Z)(!1,{value:h,defaultValue:v}),w=(0,c.Z)(b,2),k=w[0],S=w[1];function V(e,n){var t=k;return Z||(S(t=e),null===y||void 0===y||y(t,n)),t}var z=u()(o,f,(t={},(0,i.Z)(t,"".concat(o,"-checked"),k),(0,i.Z)(t,"".concat(o,"-disabled"),Z),t));return l.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:z,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?V(!1,e):e.which===d.Z.RIGHT&&V(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=V(!k,e);null===g||void 0===g||g(n,e)}}),m,l.createElement("span",{className:"".concat(o,"-inner")},k?p:x))}));f.displayName="Switch";var h=f,v=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},g=l.forwardRef((function(e,n){var t,c=e.prefixCls,r=e.size,o=e.loading,s=e.className,d=void 0===s?"":s,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=l.useContext(m.E_),j=y.getPrefixCls,C=y.direction,b=l.useContext(p.Z),w=j("switch",c),k=l.createElement("div",{className:"".concat(w,"-handle")},o&&l.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),S=u()((t={},(0,i.Z)(t,"".concat(w,"-small"),"small"===(r||b)),(0,i.Z)(t,"".concat(w,"-loading"),o),(0,i.Z)(t,"".concat(w,"-rtl"),"rtl"===C),t),d);return l.createElement(Z.Z,{insertExtraNode:!0},l.createElement(h,(0,a.Z)({},g,{prefixCls:w,className:S,disabled:f||o,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);