"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5296,1318,6265,5152],{73431:function(e,n,t){var a=t(47313),r=t(39180),l=t(2717),o=t(28830),i=t(60535),c=t(46417);n.Z=function(){var e=(0,l.I0)(),n=(0,l.v9)((function(e){return e.formLang}),l.wU),t=n.languages,s=n.defaultLang;(0,a.useEffect)((function(){i.Z.getAllActive().then((function(n){var t=n.data;e((0,o.dc)(t)),e((0,o.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.ZP.Group,{value:s,onChange:function(n){var t=n.target.value;e((0,o.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},75296:function(e,n,t){t.r(n);var a=t(1413),r=t(93433),l=t(4942),o=t(29439),i=t(47313),c=t(18197),s=t(77181),u=t(68197),d=t(59624),f=t(66672),p=t(74294),v=t(86345),h=t(59491),m=t(72652),y=t(34491),Z=t(58467),g=t(73431),b=t(52421),x=t(2717),C=t(90954),k=t(24511),j=t(5764),w=t(74380),E=t(47647),O=t(46417);n.default=function(){var e,n,t=(0,k.$)().t,N=(0,Z.s0)(),P=(0,x.I0)(),I=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,S=(0,i.useState)(!1),_=(0,o.Z)(S,2),F=_[0],K=_[1],q=(0,i.useState)(null!==(e=I.data)&&void 0!==e&&e.image?[null===(n=I.data)||void 0===n?void 0:n.image]:[]),L=(0,o.Z)(q,2),M=L[0],D=L[1],U=c.Z.useForm(),R=(0,o.Z)(U,1)[0],T=(0,i.useState)(!1),B=(0,o.Z)(T,2),A=B[0],V=B[1],z=(0,i.useState)(null),G=(0,o.Z)(z,2),H=G[0],Q=G[1],W=(0,Z.UO)().uuid,$=(0,x.v9)((function(e){return e.formLang}),x.wU),J=$.defaultLang,X=$.languages;(0,i.useEffect)((function(){return function(){var e=R.getFieldsValue(!0);P((0,C.nc)({activeMenu:I,data:e}))}}),[]);var Y=function(e){return{name:e,url:e}};var ee=function(e){K(!0),E.Z.getById(e).then((function(e){var n,t=e.data,o=(0,a.Z)((0,a.Z)((0,a.Z)({},t),function(e){if(!e)return{};var n=e.translations,t=X.map((function(e){var t,a,r;return r={},(0,l.Z)(r,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,l.Z)(r,"description[".concat(e.locale,"]"),null===(a=n.find((function(n){return n.locale===e.locale})))||void 0===a?void 0:a.description),r}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(t)))}(t)),{},{image:[Y(t.img)],keywords:t.keywords.split(","),parent_id:{label:t.parent?null===t||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title:"---",value:t.parent?null===t||void 0===t?void 0:t.id:0,key:t.parent?null===t||void 0===t?void 0:t.id:0}});R.setFieldsValue(o),D([Y(t.img)])})).finally((function(){K(!1),P((0,C.A_)(I))}))};return(0,i.useEffect)((function(){I.refetch&&ee(W)}),[I.refetch]),(0,O.jsx)(s.Z,{title:t("recipe.category.clone"),extra:(0,O.jsx)(g.Z,{}),children:F?(0,O.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,O.jsx)(m.Z,{size:"large",className:"mt-5 pt-5"})}):(0,O.jsxs)(c.Z,{name:"basic",layout:"vertical",onFinish:function(e){var n,r,l;V(!0);var o=(0,a.Z)((0,a.Z)({},e),{},{type:"receipt",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:0===(null===(n=e.parent_id)||void 0===n?void 0:n.value)?null:null===(r=e.parent_id)||void 0===r?void 0:r.value,"images[0]":null===(l=M[0])||void 0===l?void 0:l.name}),i="catalog/recipe-categories";E.Z.create(o).then((function(){y.Am.success(t("successfully.updated")),P((0,C.ph)((0,a.Z)((0,a.Z)({},I),{},{nextUrl:i}))),P((0,w.P2)()),N("/".concat(i))})).catch((function(e){return Q(e.response.data.params)})).finally((function(){return V(!1)}))},initialValues:(0,a.Z)({parent_id:{title:"---",value:0,key:0},active:!0},I.data),form:R,children:[(0,O.jsxs)(u.Z,{gutter:12,children:[(0,O.jsx)(d.Z,{span:12,children:X.map((function(e,n){return(0,O.jsx)(c.Z.Item,{label:t("name"),name:"title[".concat(e.locale,"]"),help:H&&H["title.".concat(J)]?H["title.".concat(J)][0]:null,validateStatus:H?"error":"success",rules:[{required:e.locale===J,message:t("required")}],hidden:e.locale!==J,children:(0,O.jsx)(f.Z,{})},e.title+n)}))}),(0,O.jsx)(d.Z,{span:12,children:X.map((function(e,n){return(0,O.jsx)(c.Z.Item,{label:t("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===J,message:t("required")}],hidden:e.locale!==J,children:(0,O.jsx)(b.Z,{rows:4})},e.locale+n)}))}),(0,O.jsx)(d.Z,{span:12,children:(0,O.jsx)(c.Z.Item,{label:t("keywords"),name:"keywords",rules:[{required:!0,message:t("required")}],children:(0,O.jsx)(p.Z,{mode:"tags",style:{width:"100%"}})})}),(0,O.jsx)(d.Z,{span:12,children:(0,O.jsx)(c.Z.Item,{label:t("parent.category"),name:"parent_id",rules:[{required:!0,message:t("required")}],help:H&&H.parent_id?H.parent_id[0]:null,validateStatus:H?"error":"success",children:(0,O.jsx)(p.Z,{children:(0,O.jsx)(p.Z.Option,{value:0,children:"---"})})})}),(0,O.jsx)(d.Z,{span:4,children:(0,O.jsx)(c.Z.Item,{label:t("image"),children:(0,O.jsx)(j.Z,{type:"categories",imageList:M,setImageList:D,form:R,multiple:!1})})}),(0,O.jsx)(d.Z,{span:2,children:(0,O.jsx)(c.Z.Item,{label:t("active"),name:"active",valuePropName:"checked",children:(0,O.jsx)(v.Z,{})})})]}),(0,O.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:A,children:t("submit")})]})})}},39180:function(e,n,t){t.d(n,{ZP:function(){return S}});var a=t(4942),r=t(87462),l=t(47313),o=t(56482),i=t(46123),c=t.n(i),s=t(16945),u=t(4431),d=t(91964),f=l.createContext(null),p=f.Provider,v=f,h=l.createContext(null),m=h.Provider,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},Z=function(e,n){var t,i=l.useContext(v),f=l.useContext(h),p=l.useContext(d.E_),m=p.getPrefixCls,Z=p.direction,g=l.useRef(),b=(0,s.sQ)(n,g),x=(0,l.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,w=e.style,E=y(e,["prefixCls","className","children","style"]),O=m("radio",C),N="button"===((null===i||void 0===i?void 0:i.optionType)||f)?"".concat(O,"-button"):O,P=(0,r.Z)({},E);i&&(P.name=i.name,P.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,n)},P.checked=e.value===i.value,P.disabled=e.disabled||i.disabled);var I=c()("".concat(N,"-wrapper"),(t={},(0,a.Z)(t,"".concat(N,"-wrapper-checked"),P.checked),(0,a.Z)(t,"".concat(N,"-wrapper-disabled"),P.disabled),(0,a.Z)(t,"".concat(N,"-wrapper-rtl"),"rtl"===Z),(0,a.Z)(t,"".concat(N,"-wrapper-in-form-item"),x),t),k);return l.createElement("label",{className:I,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(o.Z,(0,r.Z)({},P,{type:"radio",prefixCls:N,ref:b})),void 0!==j?l.createElement("span",null,j):null)},g=l.forwardRef(Z);g.displayName="Radio";var b=g,x=t(29439),C=t(10288),k=t(21631),j=t(81176),w=l.forwardRef((function(e,n){var t=l.useContext(d.E_),o=t.getPrefixCls,i=t.direction,s=l.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),f=(0,x.Z)(u,2),v=f[0],h=f[1];return l.createElement(p,{value:{onChange:function(n){var t=v,a=n.target.value;"value"in e||h(a);var r=e.onChange;r&&a!==t&&r(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,y=e.disabled,Z=e.children,g=e.size,x=e.style,C=e.id,k=e.onMouseEnter,w=e.onMouseLeave,E=o("radio",u),O="".concat(E,"-group"),N=Z;p&&p.length>0&&(N=p.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(b,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:v===e},e):l.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var P=g||s,I=c()(O,"".concat(O,"-").concat(m),(t={},(0,a.Z)(t,"".concat(O,"-").concat(P),P),(0,a.Z)(t,"".concat(O,"-rtl"),"rtl"===i),t),f);return l.createElement("div",(0,r.Z)({},(0,j.Z)(e),{className:I,style:x,onMouseEnter:k,onMouseLeave:w,id:C,ref:n}),N)}())})),E=l.memo(w),O=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},N=function(e,n){var t=l.useContext(d.E_).getPrefixCls,a=e.prefixCls,o=O(e,["prefixCls"]),i=t("radio",a);return l.createElement(m,{value:"button"},l.createElement(b,(0,r.Z)({prefixCls:i},o,{type:"radio",ref:n})))},P=l.forwardRef(N),I=b;I.Button=P,I.Group=E;var S=I},86345:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(87462),r=t(4942),l=t(47313),o=t(29439),i=t(45987),c=t(46123),s=t.n(c),u=t(10288),d=t(49242),f=l.forwardRef((function(e,n){var t,a=e.prefixCls,c=void 0===a?"rc-switch":a,f=e.className,p=e.checked,v=e.defaultChecked,h=e.disabled,m=e.loadingIcon,y=e.checkedChildren,Z=e.unCheckedChildren,g=e.onClick,b=e.onChange,x=e.onKeyDown,C=(0,i.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,u.Z)(!1,{value:p,defaultValue:v}),j=(0,o.Z)(k,2),w=j[0],E=j[1];function O(e,n){var t=w;return h||(E(t=e),null===b||void 0===b||b(t,n)),t}var N=s()(c,f,(t={},(0,r.Z)(t,"".concat(c,"-checked"),w),(0,r.Z)(t,"".concat(c,"-disabled"),h),t));return l.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":w,disabled:h,className:N,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?O(!1,e):e.which===d.Z.RIGHT&&O(!0,e),null===x||void 0===x||x(e)},onClick:function(e){var n=O(!w,e);null===g||void 0===g||g(n,e)}}),m,l.createElement("span",{className:"".concat(c,"-inner")},w?y:Z))}));f.displayName="Switch";var p=f,v=t(82508),h=t(46479),m=t(91964),y=t(21631),Z=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},g=l.forwardRef((function(e,n){var t,o=e.prefixCls,i=e.size,c=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,g=Z(e,["prefixCls","size","loading","className","disabled"]),b=l.useContext(m.E_),x=b.getPrefixCls,C=b.direction,k=l.useContext(y.Z),j=x("switch",o),w=l.createElement("div",{className:"".concat(j,"-handle")},c&&l.createElement(v.Z,{className:"".concat(j,"-loading-icon")})),E=s()((t={},(0,r.Z)(t,"".concat(j,"-small"),"small"===(i||k)),(0,r.Z)(t,"".concat(j,"-loading"),c),(0,r.Z)(t,"".concat(j,"-rtl"),"rtl"===C),t),d);return l.createElement(h.Z,{insertExtraNode:!0},l.createElement(p,(0,a.Z)({},g,{prefixCls:j,className:E,disabled:f||c,ref:n,loadingIcon:w})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var b=g},56482:function(e,n,t){var a=t(87462),r=t(4942),l=t(45987),o=t(1413),i=t(15671),c=t(43144),s=t(60136),u=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,s.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,i.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,o=n.className,i=n.style,c=n.name,s=n.id,u=n.type,f=n.disabled,v=n.readOnly,h=n.tabIndex,m=n.onClick,y=n.onFocus,Z=n.onBlur,g=n.onKeyDown,b=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,k=n.value,j=n.required,w=(0,l.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),O=this.state.checked,N=p()(t,o,(e={},(0,r.Z)(e,"".concat(t,"-checked"),O),(0,r.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:N,style:i},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:j,readOnly:v,disabled:f,tabIndex:h,className:"".concat(t,"-input"),checked:!!O,onClick:m,onFocus:y,onBlur:Z,onKeyUp:x,onKeyDown:g,onKeyPress:b,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,o.Z)((0,o.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);