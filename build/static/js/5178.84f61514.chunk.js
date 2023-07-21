"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5178],{73431:function(e,n,t){var i=t(47313),a=t(39180),r=t(2717),l=t(28830),c=t(60535),u=t(46417);n.Z=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.formLang}),r.wU),t=n.languages,s=n.defaultLang;(0,i.useEffect)((function(){c.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.ZP.Group,{value:s,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,u.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return m}});var i=t(1413),a=t(29439),r=t(45987),l=t(47313),c=t(12279),u=t.n(c),s=t(74294),o=t(72652),d=t(46417),f=["fetchOptions","debounceTimeout"],m=function(e){var n=e.fetchOptions,t=e.debounceTimeout,c=void 0===t?400:t,m=(0,r.Z)(e,f),v=(0,l.useState)(!1),h=(0,a.Z)(v,2),Z=h[0],p=h[1],x=(0,l.useState)([]),j=(0,a.Z)(x,2),g=j[0],b=j[1],y=(0,l.useMemo)((function(){return u()((function(e){b([]),p(!0),n(e).then((function(e){b(e),p(!1)}))}),c)}),[n,c]);return(0,d.jsx)(s.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:y,notFoundContent:Z?(0,d.jsx)(o.Z,{size:"small"}):"no results"},m),{},{options:g,onFocus:function(){g.length||y("")}}))}},65178:function(e,n,t){t.r(n);var i=t(29439),a=t(47313),r=t(43205),l=t(83999),c=t(77181),u=t(39088),s=t(74911),o=t(18325),d=t(73431),f=t(2717),m=t(24511),v=t(46417),h=l.Z.Step;n.default=function(){var e,n=(0,m.$)().t,t=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,Z=(0,a.useState)((null===(e=t.data)||void 0===e?void 0:e.step)||0),p=(0,i.Z)(Z,2),x=p[0],j=p[1],g=function(){j(x+1)},b=function(){j(x-1)};return(0,v.jsxs)(c.Z,{title:n("addon.add"),extra:(0,v.jsx)(d.Z,{}),children:[(0,v.jsx)(l.Z,{current:x,children:r.S.map((function(e){return(0,v.jsx)(h,{title:n(e.title)},e.title)}))}),(0,v.jsxs)("div",{className:"steps-content",children:["First-content"===r.S[x].content&&(0,v.jsx)(o.Z,{next:g}),"Third-content"===r.S[x].content&&(0,v.jsx)(s.Z,{next:g,prev:b}),"Finish-content"===r.S[x].content&&(0,v.jsx)(u.Z,{prev:b})]})]})}},39088:function(e,n,t){var i=t(1413),a=t(93433),r=t(4942),l=t(29439),c=t(47313),u=t(83371),s=t(45705),o=t(59491),d=t(72652),f=t(2717),m=t(58467),v=t(90954),h=t(24511),Z=t(17101),p=t(81890),x=t(46417);n.Z=function(e){var n,t,j,g=e.prev,b=(0,h.$)().t,y=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,q=(0,f.v9)((function(e){return e.formLang}),f.wU),I=q.defaultLang,w=q.languages,S=(0,m.s0)(),k=(0,f.I0)(),N=(0,c.useState)({}),F=(0,l.Z)(N,2),_=F[0],U=F[1],O=(0,c.useState)(null),C=(0,l.Z)(O,2),M=C[0],L=C[1],T=(0,m.UO)().uuid,A=(0,f.v9)((function(e){return e.addons}),f.wU).params;function E(e){L(!0),Z.Z.getById(e).then((function(e){var n=(0,i.Z)((0,i.Z)((0,i.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var n=e.translations,t=w.map((function(e){var t,i,a;return a={},(0,r.Z)(a,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,r.Z)(a,"description[".concat(e.locale,"]"),null===(i=n.find((function(n){return n.locale===e.locale})))||void 0===i?void 0:i.description),a}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(t)))}(e.data)),{},{properties:e.data.properties.map((function(e,n){var t;return t={id:n},(0,r.Z)(t,"key[".concat(e.locale,"]"),e.key),(0,r.Z)(t,"value[".concat(e.locale,"]"),e.value),t})),translation:void 0,translations:void 0});U(n)})).finally((function(){return L(!1)}))}return(0,c.useEffect)((function(){E(T)}),[]),M?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.Z,{title:b("product.info"),bordered:!0,children:[(0,x.jsx)(u.Z.Item,{label:"".concat(b("title")," (").concat(I,")"),span:3,children:_["title[".concat(I,"]")]}),(0,x.jsx)(u.Z.Item,{label:"".concat(b("description")," (").concat(I,")"),span:3,children:_["description[".concat(I,"]")]}),(0,x.jsx)(u.Z.Item,{label:b("shop"),span:1.5,children:null===(n=_.shop)||void 0===n?void 0:n.translation.title}),(0,x.jsx)(u.Z.Item,{label:b("unit"),span:1.5,children:null===(t=_.unit)||void 0===t?void 0:t.translation.title}),(0,x.jsx)(u.Z.Item,{label:b("tax"),children:_.tax}),(0,x.jsx)(u.Z.Item,{label:b("min.quantity"),children:_.min_qty}),(0,x.jsx)(u.Z.Item,{label:b("max.quantity"),children:_.max_qty})]}),null===(j=_.stocks)||void 0===j?void 0:j.map((function(e,n){return e?(0,x.jsxs)(u.Z,{bordered:!0,className:"mt-4",children:[(0,x.jsx)(u.Z.Item,{label:b("price"),span:2,children:e.price}),(0,x.jsx)(u.Z.Item,{label:b("quantity"),span:2,children:e.quantity}),e.extras.map((function(e,n){var t,i;return(0,x.jsx)(u.Z.Item,{label:null===e||void 0===e||null===(t=e.group)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title,children:null===e||void 0===e?void 0:e.value},"extra"+n)}))]},"desc"+n):""})),(0,x.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,x.jsxs)(s.Z,{wrap:!0,children:[(0,x.jsx)(o.Z,{onClick:g,children:b("prev")}),(0,x.jsx)(o.Z,{type:"primary",onClick:function(){var e=(0,i.Z)({status:void 0},A),n="catalog/addons";k((0,v.ph)((0,i.Z)((0,i.Z)({},y),{},{nextUrl:n}))),k((0,p.QA)(e)),S("/".concat(n))},children:b("finish")})]})})]})}},18325:function(e,n,t){var i=t(74165),a=t(15861),r=t(1413),l=t(29439),c=t(47313),u=t(18197),s=t(68197),o=t(59624),d=t(77181),f=t(66672),m=t(6289),v=t(86345),h=t(74294),Z=t(59491),p=t(89281),x=t(53149),j=t(2717),g=t(17101),b=t(90954),y=t(31055),q=t(58467),I=t(24511),w=t(49080),S=t(46417);n.Z=function(e){var n=e.next,t=e.action_type,k=void 0===t?"":t,N=(0,I.$)().t,F=u.Z.useForm(),_=(0,l.Z)(F,1)[0],U=(0,j.I0)(),O=(0,q.UO)().uuid,C=(0,q.s0)(),M=(0,c.useState)(null),L=(0,l.Z)(M,2),T=L[0],A=L[1],E=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu,V=(0,j.v9)((function(e){return e.formLang}),j.wU),P=V.defaultLang,$=V.languages,W=(0,c.useState)(!1),z=(0,l.Z)(W,2),B=z[0],G=z[1],Q=(0,c.useState)([]),X=(0,l.Z)(Q,2),D=X[0],H=X[1];function J(){return(J=(0,a.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n},e.abrupt("return",x.Z.get(t).then((function(e){return e.data.map((function(e){return{label:e.translation?e.translation.title:"no name",value:e.id}}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,c.useEffect)((function(){return function(){var e=_.getFieldsValue(!0);U((0,b.nc)({activeMenu:E,data:(0,r.Z)((0,r.Z)({},E.data),e)}))}}),[]);return(0,c.useEffect)((function(){y.Z.getAll({perPage:100,page:1,active:1}).then((function(e){var n=e.data;return H(function(e){return e.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))}(n))}))}),[]),(0,S.jsxs)(u.Z,{layout:"vertical",form:_,initialValues:(0,r.Z)({active:!0},E.data),onFinish:function(e){var t,i;G(!0);var a=(0,r.Z)((0,r.Z)({},e),{},{min_qty:1,max_qty:1e3,active:Number(e.active),shop_id:null===(t=e.shop)||void 0===t?void 0:t.value,unit_id:null===(i=e.unit)||void 0===i?void 0:i.value,unit:void 0,addon:Number(1),shop:void 0});"edit"===k?function(e,t){g.Z.update(O,t).then((function(){U((0,b.nc)({activeMenu:E,data:e})),n()})).catch((function(e){return A(e.response.data.params)})).finally((function(){return G(!1)}))}(e,a):function(e,n){g.Z.create(n).then((function(n){var t=n.data;U((0,b.SS)({id:"product-".concat(t.uuid),url:"product/".concat(t.uuid),name:N("add.product"),data:e,refetch:!1})),C("/addon/".concat(t.uuid,"?step=1"))})).catch((function(e){return A(e.response.data.params)})).finally((function(){return G(!1)}))}(e,a)},className:"addon-menu",children:[(0,S.jsxs)(s.Z,{gutter:12,children:[(0,S.jsx)(o.Z,{xs:24,sm:24,md:16,children:(0,S.jsx)(d.Z,{title:N("basic.info"),children:(0,S.jsxs)(s.Z,{gutter:24,children:[(0,S.jsx)(o.Z,{span:24,children:$.map((function(e){return(0,S.jsx)(u.Z.Item,{label:N("name"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===P,message:N("required")}],hidden:e.locale!==P,children:(0,S.jsx)(f.Z,{})},"name"+e.id)}))}),(0,S.jsx)(o.Z,{span:24,children:$.map((function(e){return(0,S.jsx)(u.Z.Item,{label:N("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===P,message:N("required")}],hidden:e.locale!==P,children:(0,S.jsx)(w.Z,{rows:4,span:4})},"description"+e.id)}))}),(0,S.jsx)(o.Z,{span:12,children:(0,S.jsx)(u.Z.Item,{label:N("tax"),name:"tax",rules:[{required:!0,message:N("required")}],children:(0,S.jsx)(m.Z,{min:0,className:"w-100",addonAfter:"%"})})}),(0,S.jsx)(o.Z,{span:12,children:(0,S.jsx)(u.Z.Item,{label:N("active"),name:"active",valuePropName:"checked",children:(0,S.jsx)(v.Z,{})})})]})})}),(0,S.jsxs)(o.Z,{xs:24,sm:24,md:8,children:[(0,S.jsx)(d.Z,{title:N("shop/restaurant"),children:(0,S.jsx)(u.Z.Item,{name:"shop",rules:[{required:!0,message:N("required")}],children:(0,S.jsx)(p.h,{fetchOptions:function(e){return J.apply(this,arguments)},disabled:"edit"===k})})}),(0,S.jsxs)(d.Z,{title:N("addition"),children:[(0,S.jsx)(u.Z.Item,{label:N("unit"),name:"unit",rules:[{required:!0,message:N("required")}],children:(0,S.jsx)(h.Z,{labelInValue:!0,filterOption:!1,options:D})}),(0,S.jsx)(u.Z.Item,{label:N("qr.code"),name:"bar_code",rules:[{required:!0,message:N("required")}],help:null!==T&&void 0!==T&&T.bar_code?T.bar_code[0]:null,validateStatus:null!==T&&void 0!==T&&T.bar_code?"error":"success",children:(0,S.jsx)(f.Z,{className:"w-100"})})]})]})]}),(0,S.jsx)(Z.Z,{type:"primary",htmlType:"submit",loading:B,children:N("next")})]})}},74911:function(e,n,t){var i=t(29439),a=t(47313),r=t(18197),l=t(68197),c=t(59624),u=t(6289),s=t(45705),o=t(59491),d=t(2717),f=t(17101),m=t(24511),v=t(58467),h=t(90954),Z=t(46417);n.Z=function(e){var n=e.prev,t=e.next,p=(e.current,(0,m.$)().t),x=r.Z.useForm(),j=(0,i.Z)(x,1)[0],g=(0,v.UO)().uuid,b=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,y=(0,a.useState)(null),q=(0,i.Z)(y,2),I=q[0],w=q[1],S=(0,d.I0)();return(0,a.useEffect)((function(){var e,n,t,i;S((0,h.xo)(b)),j.setFieldsValue({price:null!==(e=b.data)&&void 0!==e&&null!==(n=e.stocks)&&void 0!==n&&n.length?b.data.stocks[0].price:[""],quantity:null!==(t=b.data)&&void 0!==t&&null!==(i=t.stocks)&&void 0!==i&&i.length?b.data.stocks[0].quantity:[""]})}),[]),(0,Z.jsxs)(r.Z,{layout:"vertical",form:j,onFinish:function(e){var n;w(!0),n=[{price:e.price,quantity:e.quantity}],f.Z.stocks(g,{extras:n}).then((function(){return t()})).finally((function(){return w(!1)}))},children:[(0,Z.jsxs)(l.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(r.Z.Item,{label:p("price"),name:"price",rules:[{required:!0,message:p("required")}],children:(0,Z.jsx)(u.Z,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(r.Z.Item,{label:p("quantity"),name:"quantity",rules:[{required:!0,message:p("required")}],children:(0,Z.jsx)(u.Z,{min:0,className:"w-100",style:{minWidth:200}})})})]}),(0,Z.jsxs)(s.Z,{className:"mt-4",children:[(0,Z.jsx)(o.Z,{onClick:n,children:p("prev")}),(0,Z.jsx)(o.Z,{type:"primary",htmlType:"submit",loading:!!I,children:p("next")})]})]})}},43205:function(e,n,t){t.d(n,{S:function(){return i}});var i=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]}}]);