"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[51],{90354:function(e,n,t){t(47313);var a=t(58467),c=t(77181),i=t(59491),l=t(2717),r=t(90954),o=t(55768),u=t(46417);n.Z=function(e){var n=e.children,t=e.containerName,s=e.headerTitle,d=(e.subtitle,e.navLInkTo),f=e.buttonTitle,h=(e.state,(0,l.I0)()),Z=(0,a.s0)();return(0,u.jsx)("div",{className:t,children:(0,u.jsx)(c.Z,{title:s,extra:f?(0,u.jsx)(i.Z,{type:"primary",icon:(0,u.jsx)(o.Z,{}),onClick:function(){var e,n=d.split("");"/"===n[0]&&n.shift();var t={id:e=n.join(""),url:e,name:f};h((0,r.bL)(t)),Z(d)},children:f}):null,children:n})})}},73431:function(e,n,t){var a=t(47313),c=t(39180),i=t(2717),l=t(28830),r=t(60535),o=t(46417);n.Z=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.formLang}),i.wU),t=n.languages,u=n.defaultLang;(0,a.useEffect)((function(){r.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(c.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},62019:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(93433),c=t(4942);function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["title"];if(!n)return{};var i=n.translations,l=e.flatMap((function(e){return t.flatMap((function(n){return(0,c.Z)({},"".concat(n,"[").concat(e.locale,"]"),function(e,n){var t=i.find((function(n){return n.locale===e.locale}));return t||(0,c.Z)({},n,"")}(e,n)[n])}))}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(l)))}},75336:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(93433),c=t(4942);function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",i=e.map((function(e){return(0,c.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(i)))}},30051:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(29439),c=t(47313),i=t(86345),l=t(78508),r=t(74580),o=t(90354),u=t(69658),s=t(2717),d=t(42111),f=t(90954),h=t(26457),Z=t(24511),v=t(1413),m=t(18197),p=t(84695),x=t(59491),g=t(68197),j=t(59624),b=t(66672),y=t(51282),C=t(73431),k=t(75336),w=t(62019),_=t(46417);function I(e){var n=e.modal,t=e.handleCancel,i=(0,s.v9)((function(e){return e.menu}),s.wU).activeMenu,l=(0,s.v9)((function(e){return e.formLang}),s.wU),r=l.languages,o=l.defaultLang,u=m.Z.useForm(),d=(0,a.Z)(u,1)[0],I=(0,s.I0)(),N=(0,Z.$)().t,O=(0,c.useState)(!1),E=(0,a.Z)(O,2),S=E[0],q=E[1],T=(0,c.useState)(!1),L=(0,a.Z)(T,2),M=L[0],P=L[1];(0,c.useEffect)((function(){var e;n&&(e=n.id,q(!0),h.Z.getById(e).then((function(e){var n=e.data,t=(0,w.Z)(r,n,["title","client_title","secret_title"]);d.setFieldsValue((0,v.Z)((0,v.Z)({},n),t))})).finally((function(){return q(!1)})))}),[n]);return(0,_.jsx)(p.Z,{visible:!!n,title:N("edit.payment"),onCancel:t,footer:[(0,_.jsx)(x.Z,{type:"primary",onClick:function(){return d.submit()},loading:M,children:N("save")},"save-btn"),(0,_.jsx)(x.Z,{type:"default",onClick:t,children:N("cancel")},"cancel-btn")],children:S?(0,_.jsx)(y.Z,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"d-flex justify-content-end",children:(0,_.jsx)(C.Z,{})}),(0,_.jsx)(m.Z,{form:d,layout:"vertical",onFinish:function(e){var a={client_id:e.client_id,secret_id:e.secret_id,title:(0,k.Z)(r,e,"title"),client_title:(0,k.Z)(r,e,"client_title"),secret_title:(0,k.Z)(r,e,"secret_title")};P(!0),h.Z.update(n.id,a).then((function(){t(),I((0,f.xo)(i))})).finally((function(){return P(!1)}))},children:(0,_.jsxs)(g.Z,{gutter:12,children:[(0,_.jsx)(j.Z,{span:24,children:r.map((function(e){return(0,_.jsx)(m.Z.Item,{label:N("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===o,message:N("required")}],hidden:e.locale!==o,children:(0,_.jsx)(b.Z,{})})}))}),(0,_.jsx)(j.Z,{span:24,children:r.map((function(e){return(0,_.jsx)(m.Z.Item,{label:N("client.title"),name:"client_title[".concat(e.locale,"]"),rules:[{required:e.locale===o,message:N("required")}],hidden:e.locale!==o,children:(0,_.jsx)(b.Z,{})})}))}),(0,_.jsx)(j.Z,{span:24,children:r.map((function(e){return(0,_.jsx)(m.Z.Item,{label:N("secret.title"),name:"secret_title[".concat(e.locale,"]"),rules:[{required:e.locale===o,message:N("requried")}],hidden:e.locale!==o,children:(0,_.jsx)(b.Z,{})})}))}),(0,_.jsx)(j.Z,{span:24,children:(0,_.jsx)(m.Z.Item,{label:N("client.id"),name:"client_id",rules:[{required:!0,message:N("required")}],children:(0,_.jsx)(b.Z,{})})}),(0,_.jsx)(j.Z,{span:24,children:(0,_.jsx)(m.Z.Item,{label:N("secret.id"),name:"secret_id",rules:[{required:!0,message:N("required")}],children:(0,_.jsx)(b.Z,{})})})]})})]})})}function N(){var e=(0,Z.$)().t,n=(0,c.useState)(null),t=(0,a.Z)(n,2),v=t[0],m=t[1],p=(0,c.useState)(null),x=(0,a.Z)(p,2),g=x[0],j=x[1],b=(0,c.useState)(!1),y=(0,a.Z)(b,2),C=y[0],k=y[1],w=(0,c.useContext)(r._).setIsModalVisible,N=(0,s.v9)((function(e){return e.payment}),s.wU),O=N.payments,E=N.loading,S=(0,s.v9)((function(e){return e.menu}),s.wU).activeMenu,q=(0,s.I0)(),T=[{title:e("title"),dataIndex:"tag",key:"tag"},{title:e("active"),dataIndex:"active",key:"active",render:function(e,n){return(0,_.jsx)(i.Z,{onChange:function(){w(!0),m(n.id)},checked:e})}}];return(0,c.useEffect)((function(){S.refetch&&(q((0,d.cQ)()),q((0,f.A_)(S)))}),[S.refetch]),(0,_.jsxs)(o.Z,{headerTitle:e("payments"),children:[(0,_.jsx)(l.Z,{scroll:{x:!0},columns:T,dataSource:O,rowKey:function(e){return e.id},loading:E,pagination:!1}),(0,_.jsx)(u.Z,{click:function(){k(!0),h.Z.setActive(v).then((function(){w(!1),m(null),q((0,d.cQ)())})).finally((function(){return k(!1)}))},text:e("set.active.payment"),loading:C}),g&&(0,_.jsx)(I,{modal:g,handleCancel:function(){return j(null)}})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),c=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},l=t(17469),r=function(e,n){return c.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};r.displayName="PlusCircleOutlined";var o=c.forwardRef(r)},86345:function(e,n,t){t.d(n,{Z:function(){return j}});var a=t(87462),c=t(4942),i=t(47313),l=t(29439),r=t(45987),o=t(46123),u=t.n(o),s=t(10288),d=t(49242),f=i.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,Z=e.defaultChecked,v=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,j=e.onChange,b=e.onKeyDown,y=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,s.Z)(!1,{value:h,defaultValue:Z}),k=(0,l.Z)(C,2),w=k[0],_=k[1];function I(e,n){var t=w;return v||(_(t=e),null===j||void 0===j||j(t,n)),t}var N=u()(o,f,(t={},(0,c.Z)(t,"".concat(o,"-checked"),w),(0,c.Z)(t,"".concat(o,"-disabled"),v),t));return i.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":w,disabled:v,className:N,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?I(!1,e):e.which===d.Z.RIGHT&&I(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var n=I(!w,e);null===g||void 0===g||g(n,e)}}),m,i.createElement("span",{className:"".concat(o,"-inner")},w?p:x))}));f.displayName="Switch";var h=f,Z=t(82508),v=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},g=i.forwardRef((function(e,n){var t,l=e.prefixCls,r=e.size,o=e.loading,s=e.className,d=void 0===s?"":s,f=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),j=i.useContext(m.E_),b=j.getPrefixCls,y=j.direction,C=i.useContext(p.Z),k=b("switch",l),w=i.createElement("div",{className:"".concat(k,"-handle")},o&&i.createElement(Z.Z,{className:"".concat(k,"-loading-icon")})),_=u()((t={},(0,c.Z)(t,"".concat(k,"-small"),"small"===(r||C)),(0,c.Z)(t,"".concat(k,"-loading"),o),(0,c.Z)(t,"".concat(k,"-rtl"),"rtl"===y),t),d);return i.createElement(v.Z,{insertExtraNode:!0},i.createElement(h,(0,a.Z)({},g,{prefixCls:k,className:_,disabled:f||o,ref:n,loadingIcon:w})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var j=g}}]);