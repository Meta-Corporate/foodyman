(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3947],{89802:function(e,t,n){"use strict";n.d(t,{q:function(){return d}});var i=n(1413),a=n(29439),r=n(45987),l=n(47313),s=n(74294),c=n(72652),u=n(46417),o=["fetchOptions","refetch"],d=function(e){var t=e.fetchOptions,n=e.refetch,d=void 0!==n&&n,f=(0,r.Z)(e,o),v=(0,l.useState)(!1),m=(0,a.Z)(v,2),Z=m[0],h=m[1],p=(0,l.useState)([]),x=(0,a.Z)(p,2),j=x[0],g=x[1];return(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({labelInValue:!0,filterOption:!1,notFoundContent:Z?(0,u.jsx)(c.Z,{size:"small"}):"no results"},f),{},{options:Z?[]:j,onFocus:function(){j.length&&!d||(h(!0),t().then((function(e){g(e),h(!1)})))}}))}},73431:function(e,t,n){"use strict";var i=n(47313),a=n(39180),r=n(2717),l=n(28830),s=n(60535),c=n(46417);t.Z=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.formLang}),r.wU),n=t.languages,u=t.defaultLang;(0,i.useEffect)((function(){s.Z.getAllActive().then((function(t){var n=t.data;e((0,l.dc)(n)),e((0,l.mh)(n.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP.Group,{value:u,onChange:function(t){var n=t.target.value;e((0,l.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===n||void 0===n?void 0:n.map((function(e){return(0,c.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},33834:function(e,t,n){"use strict";n.d(t,{K:function(){return c}});var i=n(4942),a=n(1413),r=n(58467),l=n(74776),s=n.n(l),c=function(){var e=(0,r.s0)(),t=(0,r.TH)(),n=s().parse(t.search,{ignoreQueryPrefix:!0});return{values:n,set:function(t,r){return e({search:s().stringify((0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,r)))})},reset:function(t){var i=(0,a.Z)({},n);i[t]&&delete i[t],e({search:s().stringify((0,a.Z)({},i))})},clear:function(){return e({search:s().stringify({})})},merge:function(t){return e({search:s().stringify((0,a.Z)((0,a.Z)({},n),t))})}}}},33403:function(e,t,n){"use strict";var i=n(34344),a={getAll:function(e){return i.Z.get("dashboard/seller/units/paginate",{params:e})},getById:function(e,t){return i.Z.get("dashboard/seller/units/".concat(e),{params:t})}};t.Z=a},89355:function(e,t,n){"use strict";n.r(t);var i=n(4942),a=n(93433),r=n(1413),l=n(29439),s=n(47313),c=n(82494),u=n(83999),o=n(77181),d=n(72652),f=n(32723),v=n(1939),m=n(33072),Z=n(73431),h=n(58467),p=n(18333),x=n(2717),j=n(90954),g=n(24511),y=n(33834),b=n(46417),q=u.Z.Step;t.default=function(){var e,t=(0,g.$)().t,n=(0,h.UO)().uuid,I=(0,y.K)(),k=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,w=(0,x.v9)((function(e){return e.formLang}),x.wU).languages,N=(0,x.I0)(),S=Number((null===(e=I.values)||void 0===e?void 0:e.step)||0),_=(0,s.useState)(k.refetch),U=(0,l.Z)(_,2),F=U[0],O=U[1],C=function(){var e=S+1;I.set("step",e)},M=function(){var e=S-1;I.set("step",e)},L=function(e){return e?{label:e.translation?e.translation.title:e.title,value:e.id}:null};function A(e){O(!0),p.Z.getById(e).then((function(e){var t,n=(0,r.Z)((0,r.Z)((0,r.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var t=e.translations,n=w.map((function(e){var n,a,r;return r={},(0,i.Z)(r,"title[".concat(e.locale,"]"),null===(n=t.find((function(t){return t.locale===e.locale})))||void 0===n?void 0:n.title),(0,i.Z)(r,"description[".concat(e.locale,"]"),null===(a=t.find((function(t){return t.locale===e.locale})))||void 0===a?void 0:a.description),r}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(n)))}(e.data)),{},{shop:L(e.data.shop),unit:L(e.data.unit),extras:null===(t=e.data.stocks[0])||void 0===t?void 0:t.extras.map((function(e){return e.extra_group_id})),stocks:e.data.stocks.map((function(e){return(0,r.Z)((0,r.Z)((0,r.Z)({},e),Object.assign.apply(Object,[{}].concat((0,a.Z)(e.extras.map((function(e,t){return(0,i.Z)({},"extras[".concat(t,"]"),e.id)})))))),{},{quantity:e.quantity||0,extras:void 0})})),properties:e.data.properties.map((function(e,t){var n;return n={id:t},(0,i.Z)(n,"key[".concat(e.locale,"]"),e.key),(0,i.Z)(n,"value[".concat(e.locale,"]"),e.value),n})),translation:void 0,translations:void 0});N((0,j.nc)({activeMenu:k,data:n}))})).finally((function(){O(!1),N((0,j.A_)(k))}))}(0,s.useEffect)((function(){k.refetch&&A(n)}),[k.refetch]);return(0,b.jsxs)(o.Z,{title:t("addon.edit"),extra:(0,b.jsx)(Z.Z,{}),children:[(0,b.jsx)(u.Z,{current:S,onChange:function(e){N((0,j.nc)({activeMenu:k,data:(0,r.Z)((0,r.Z)({},k.data),{},{step:e})})),I.set("step",e)},children:c.S.map((function(e){return(0,b.jsx)(q,{title:t(e.title)},e.title)}))}),F?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===c.S[S].content&&(0,b.jsx)(m.Z,{next:C,action_type:"edit"}),"Third-content"===c.S[S].content&&(0,b.jsx)(v.Z,{next:C,prev:M,current:S}),"Finish-content"===c.S[S].content&&(0,b.jsx)(f.Z,{prev:M})]})]})}},32723:function(e,t,n){"use strict";var i=n(1413),a=n(93433),r=n(4942),l=n(29439),s=n(47313),c=n(83371),u=n(45705),o=n(59491),d=n(72652),f=n(2717),v=n(58467),m=n(90954),Z=n(24511),h=n(18333),p=n(81890),x=n(46417);t.Z=function(e){var t,n,j,g=e.prev,y=(0,Z.$)().t,b=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,q=(0,f.v9)((function(e){return e.formLang}),f.wU),I=q.defaultLang,k=q.languages,w=(0,v.s0)(),N=(0,f.I0)(),S=(0,s.useState)({}),_=(0,l.Z)(S,2),U=_[0],F=_[1],O=(0,s.useState)(null),C=(0,l.Z)(O,2),M=C[0],L=C[1],A=(0,v.UO)().uuid,E=(0,f.v9)((function(e){return e.addons}),f.wU).params;function T(e){L(!0),h.Z.getById(e).then((function(e){var t=(0,i.Z)((0,i.Z)((0,i.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var t=e.translations,n=k.map((function(e){var n,i,a;return a={},(0,r.Z)(a,"title[".concat(e.locale,"]"),null===(n=t.find((function(t){return t.locale===e.locale})))||void 0===n?void 0:n.title),(0,r.Z)(a,"description[".concat(e.locale,"]"),null===(i=t.find((function(t){return t.locale===e.locale})))||void 0===i?void 0:i.description),a}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(n)))}(e.data)),{},{properties:e.data.properties.map((function(e,t){var n;return n={id:t},(0,r.Z)(n,"key[".concat(e.locale,"]"),e.key),(0,r.Z)(n,"value[".concat(e.locale,"]"),e.value),n})),translation:void 0,translations:void 0});F(t)})).finally((function(){return L(!1)}))}return(0,s.useEffect)((function(){T(A)}),[]),M?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(c.Z,{title:y("product.info"),bordered:!0,children:[(0,x.jsx)(c.Z.Item,{label:"".concat(y("title")," (").concat(I,")"),span:3,children:U["title[".concat(I,"]")]}),(0,x.jsx)(c.Z.Item,{label:"".concat(y("description")," (").concat(I,")"),span:3,children:U["description[".concat(I,"]")]}),(0,x.jsx)(c.Z.Item,{label:y("shop"),span:1.5,children:null===(t=U.shop)||void 0===t?void 0:t.translation.title}),(0,x.jsx)(c.Z.Item,{label:y("unit"),span:1.5,children:null===(n=U.unit)||void 0===n?void 0:n.translation.title}),(0,x.jsx)(c.Z.Item,{label:y("tax"),children:U.tax}),(0,x.jsx)(c.Z.Item,{label:y("min.quantity"),children:U.min_qty}),(0,x.jsx)(c.Z.Item,{label:y("max.quantity"),children:U.max_qty})]}),null===(j=U.stocks)||void 0===j?void 0:j.map((function(e,t){return e?(0,x.jsxs)(c.Z,{bordered:!0,className:"mt-4",children:[(0,x.jsx)(c.Z.Item,{label:y("price"),span:2,children:e.price}),(0,x.jsx)(c.Z.Item,{label:y("quantity"),span:2,children:e.quantity}),e.extras.map((function(e,t){var n,i;return(0,x.jsx)(c.Z.Item,{label:null===e||void 0===e||null===(n=e.group)||void 0===n||null===(i=n.translation)||void 0===i?void 0:i.title,children:null===e||void 0===e?void 0:e.value},"extra"+t)}))]},"desc"+t):""})),(0,x.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(o.Z,{onClick:g,children:y("prev")}),(0,x.jsx)(o.Z,{type:"primary",onClick:function(){var e=(0,i.Z)({status:"published"},E),t="seller/addons";N((0,m.ph)((0,i.Z)((0,i.Z)({},b),{},{nextUrl:t}))),N((0,p.I4)(e)),w("/".concat(t))},children:y("finish")})]})})]})}},33072:function(e,t,n){"use strict";var i=n(1413),a=n(29439),r=n(47313),l=n(18197),s=n(68197),c=n(59624),u=n(77181),o=n(66672),d=n(6289),f=n(86345),v=n(59491),m=n(2717),Z=n(18333),h=n(90954),p=n(58467),x=n(24511),j=n(33403),g=n(49080),y=n(89802),b=n(46417);t.Z=function(e){var t=e.next,n=e.action_type,q=void 0===n?"":n,I=(0,x.$)().t,k=l.Z.useForm(),w=(0,a.Z)(k,1)[0],N=(0,m.I0)(),S=(0,p.UO)().uuid,_=(0,p.s0)(),U=(0,r.useState)(null),F=(0,a.Z)(U,2),O=F[0],C=F[1],M=(0,m.v9)((function(e){return e.myShop}),m.wU).myShop,L=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,A=(0,m.v9)((function(e){return e.formLang}),m.wU),E=A.defaultLang,T=A.languages,B=(0,r.useState)(!1),P=(0,a.Z)(B,2),V=P[0],$=P[1];(0,r.useEffect)((function(){return function(){var e=w.getFieldsValue(!0);N((0,h.nc)({activeMenu:L,data:(0,i.Z)((0,i.Z)({},L.data),e)}))}}),[]);return(0,b.jsxs)(l.Z,{layout:"vertical",form:w,initialValues:(0,i.Z)({active:!0},L.data),onFinish:function(e){var n;$(!0);var a=(0,i.Z)((0,i.Z)({},e),{},{active:Number(e.active),shop_id:M.id,unit_id:null===(n=e.unit)||void 0===n?void 0:n.value,shop:void 0,addon:Number(1)});"edit"===q?function(e,n){Z.Z.update(S,n).then((function(){N((0,h.nc)({activeMenu:L,data:e})),t()})).catch((function(e){return C(e.response.data.params)})).finally((function(){return $(!1)}))}(e,a):function(e,t){Z.Z.create(t).then((function(t){var n=t.data;N((0,h.SS)({id:"addons-".concat(n.uuid),url:"seller/addon/".concat(n.uuid),name:I("add.addons"),data:e,refetch:!1})),_("/seller/addon/".concat(n.uuid,"?step=1"))})).catch((function(e){return C(e.response.data.params)})).finally((function(){return $(!1)}))}(e,a)},className:"addon-menu",children:[(0,b.jsxs)(s.Z,{gutter:12,children:[(0,b.jsxs)(c.Z,{xs:24,sm:24,md:16,children:[(0,b.jsxs)(u.Z,{title:I("basic.info"),children:[T.map((function(e){return(0,b.jsx)(l.Z.Item,{label:I("name"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===E,message:I("required")}],hidden:e.locale!==E,children:(0,b.jsx)(o.Z,{})},"name"+e.id)})),T.map((function(e){return(0,b.jsx)(l.Z.Item,{label:I("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===E,message:I("required")}],hidden:e.locale!==E,children:(0,b.jsx)(g.Z,{rows:4,span:4})},"description"+e.id)}))]}),(0,b.jsx)(u.Z,{title:I("price"),children:(0,b.jsxs)(s.Z,{gutter:12,children:[(0,b.jsx)(c.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:I("min.qty"),name:"min_qty",rules:[{required:!0,message:I("required")}],children:(0,b.jsx)(d.Z,{min:0,className:"w-100"})})}),(0,b.jsx)(c.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:I("max.qty"),name:"max_qty",rules:[{required:!0,message:I("required")}],children:(0,b.jsx)(d.Z,{min:0,className:"w-100"})})}),(0,b.jsx)(c.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:I("tax"),name:"tax",rules:[{required:!0,message:I("required")}],children:(0,b.jsx)(d.Z,{min:0,className:"w-100",addonAfter:"%"})})}),(0,b.jsx)(c.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:I("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(f.Z,{})})})]})})]}),(0,b.jsx)(c.Z,{xs:24,sm:24,md:8,children:(0,b.jsxs)(u.Z,{title:I("addition"),children:[(0,b.jsx)(l.Z.Item,{label:I("unit"),name:"unit",rules:[{required:!0,message:I("required")}],children:(0,b.jsx)(y.q,{style:{width:"100%"},fetchOptions:function(e){var t={search:e};return j.Z.getAll(t).then((function(e){return function(e){return e.map((function(e){var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}(e.data)}))}})}),(0,b.jsx)(l.Z.Item,{label:I("qr.code"),name:"bar_code",rules:[{required:!0,message:I("required")}],help:null!==O&&void 0!==O&&O.bar_code?O.bar_code[0]:null,validateStatus:null!==O&&void 0!==O&&O.bar_code?"error":"success",children:(0,b.jsx)(o.Z,{className:"w-100"})})]})})]}),(0,b.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:V,children:I("next")})]})}},1939:function(e,t,n){"use strict";var i=n(29439),a=n(47313),r=n(18197),l=n(68197),s=n(59624),c=n(6289),u=n(45705),o=n(59491),d=n(2717),f=n(18333),v=n(24511),m=n(58467),Z=n(90954),h=n(46417);t.Z=function(e){var t=e.prev,n=e.next,p=(e.current,(0,v.$)().t),x=r.Z.useForm(),j=(0,i.Z)(x,1)[0],g=(0,m.UO)().uuid,y=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,b=(0,a.useState)(null),q=(0,i.Z)(b,2),I=q[0],k=q[1],w=(0,d.I0)();return(0,a.useEffect)((function(){var e,t,n,i;w((0,Z.xo)(y)),j.setFieldsValue({price:null!==(e=y.data)&&void 0!==e&&null!==(t=e.stocks)&&void 0!==t&&t.length?y.data.stocks[0].price:[""],quantity:null!==(n=y.data)&&void 0!==n&&null!==(i=n.stocks)&&void 0!==i&&i.length?y.data.stocks[0].quantity:[""]})}),[]),(0,h.jsxs)(r.Z,{layout:"vertical",form:j,onFinish:function(e){var t;k(!0),t=[{price:e.price,quantity:e.quantity}],f.Z.stocks(g,{extras:t}).then((function(){return n()})).finally((function(){return k(!1)}))},children:[(0,h.jsxs)(l.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,h.jsx)(s.Z,{children:(0,h.jsx)(r.Z.Item,{label:p("price"),name:"price",rules:[{required:!0,message:p("required")}],children:(0,h.jsx)(c.Z,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,h.jsx)(s.Z,{children:(0,h.jsx)(r.Z.Item,{label:p("quantity"),name:"quantity",rules:[{required:!0,message:p("required")}],children:(0,h.jsx)(c.Z,{min:0,className:"w-100",style:{minWidth:200}})})})]}),(0,h.jsxs)(u.Z,{className:"mt-4",children:[(0,h.jsx)(o.Z,{onClick:t,children:p("prev")}),(0,h.jsx)(o.Z,{type:"primary",htmlType:"submit",loading:!!I,children:p("next")})]})]})}},82494:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});var i=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]},24654:function(){}}]);