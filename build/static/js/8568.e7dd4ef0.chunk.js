"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8568],{89802:function(e,n,t){t.d(n,{q:function(){return d}});var a=t(1413),r=t(29439),i=t(45987),l=t(47313),s=t(74294),c=t(72652),u=t(46417),o=["fetchOptions","refetch"],d=function(e){var n=e.fetchOptions,t=e.refetch,d=void 0!==t&&t,Z=(0,i.Z)(e,o),f=(0,l.useState)(!1),v=(0,r.Z)(f,2),m=v[0],h=v[1],x=(0,l.useState)([]),p=(0,r.Z)(x,2),j=p[0],g=p[1];return(0,u.jsx)(s.Z,(0,a.Z)((0,a.Z)({labelInValue:!0,filterOption:!1,notFoundContent:m?(0,u.jsx)(c.Z,{size:"small"}):"no results"},Z),{},{options:m?[]:j,onFocus:function(){j.length&&!d||(h(!0),n().then((function(e){g(e),h(!1)})))}}))}},32380:function(e,n,t){t.d(n,{o:function(){return d}});var a=t(1413),r=t(29439),i=t(45987),l=t(47313),s=t(84762),c=t(72652),u=t(46417),o=["fetchOptions","refetch"],d=function(e){var n=e.fetchOptions,t=e.refetch,d=void 0!==t&&t,Z=(0,i.Z)(e,o),f=(0,l.useState)(!1),v=(0,r.Z)(f,2),m=v[0],h=v[1],x=(0,l.useState)([]),p=(0,r.Z)(x,2),j=p[0],g=p[1];return(0,u.jsx)(s.Z,(0,a.Z)({treeLine:!0,treeData:m?[]:j,treeDefaultExpandAll:!0,labelInValue:!0,onFocus:function(){j.length&&!d||(h(!0),n().then((function(e){g(e),h(!1)})))},notFoundContent:m?(0,u.jsx)(c.Z,{size:"small"}):"no results"},Z))}},55940:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(1413),r=t(45987),i=(t(47313),t(59491)),l=t(47515),s=t(34491),c=t(24511),u=t(79492),o=t(46417),d=["size","onClick","type"];function Z(e){var n=e.size,t=void 0===n?"":n,Z=e.onClick,f=e.type,v=void 0===f?"default":f,m=(0,r.Z)(e,d),h=(0,c.$)().t,x=(0,u.Z)().isDemo;return(0,o.jsx)(i.Z,(0,a.Z)({size:t,icon:(0,o.jsx)(l.Z,{}),onClick:function(e){x?s.Am.warning(h("cannot.work.demo")):Z(e)},type:v},m))}},73431:function(e,n,t){var a=t(47313),r=t(39180),i=t(2717),l=t(28830),s=t(60535),c=t(46417);n.Z=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.formLang}),i.wU),t=n.languages,u=n.defaultLang;(0,a.useEffect)((function(){s.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return f}});var a=t(1413),r=t(29439),i=t(45987),l=t(47313),s=t(12279),c=t.n(s),u=t(74294),o=t(72652),d=t(46417),Z=["fetchOptions","debounceTimeout"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,s=void 0===t?400:t,f=(0,i.Z)(e,Z),v=(0,l.useState)(!1),m=(0,r.Z)(v,2),h=m[0],x=m[1],p=(0,l.useState)([]),j=(0,r.Z)(p,2),g=j[0],y=j[1],b=(0,l.useMemo)((function(){return c()((function(e){y([]),x(!0),n(e).then((function(e){y(e),x(!1)}))}),s)}),[n,s]);return(0,d.jsx)(u.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:b,notFoundContent:h?(0,d.jsx)(o.Z,{size:"small"}):"no results"},f),{},{options:g,onFocus:function(){g.length||b("")}}))}},11101:function(e,n,t){var a=t(34344),r={getAll:function(e){return a.Z.get("rest/brands/paginate",{params:e})},getById:function(e,n){return a.Z.get("rest/brands/".concat(e),{params:n})}};n.Z=r},29955:function(e,n,t){var a=t(34344),r={getAll:function(e){return a.Z.get("rest/categories/paginate",{params:e})},getById:function(e,n){return a.Z.get("rest/categories/".concat(e),{params:n})},search:function(e){return a.Z.get("rest/categories/search",{params:e})}};n.Z=r},33403:function(e,n,t){var a=t(34344),r={getAll:function(e){return a.Z.get("dashboard/seller/units/paginate",{params:e})},getById:function(e,n){return a.Z.get("dashboard/seller/units/".concat(e),{params:n})}};n.Z=r},2630:function(e,n,t){var a=t(1413),r=t(29439),i=t(47313),l=t(77181),s=t(18197),c=t(68197),u=t(59624),o=t(32697),d=t(45705),Z=t(59491),f=t(72652),v=t(2717),m=t(18333),h=t(90954),x=t(24511),p=t(58467),j=t(22307),g=t(46417);n.Z=function(e){var n=e.next,t=e.prev,y=(0,x.$)().t,b=(0,v.I0)(),k=(0,p.UO)().uuid,q=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,I=(0,i.useState)(!1),w=(0,r.Z)(I,2),S=w[0],N=w[1],O=(0,i.useState)([]),C=(0,r.Z)(O,2),F=C[0],U=C[1],_=(0,i.useState)(!1),L=(0,r.Z)(_,2),A=L[0],M=L[1];(0,i.useEffect)((function(){M(!0),j.Z.getAllGroups({valid:!0}).then((function(e){var n=e.data.map((function(e){var n;return{id:e.id,label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}));U(n)})).finally((function(){return M(!1)}))}),[]);return(0,g.jsx)(l.Z,{children:(0,g.jsx)(s.Z,{layout:"vertical",initialValues:(0,a.Z)({},q.data),onFinish:function(e){N(!0);var t=e.extras||[];t.sort((function(e,n){return e-n})),m.Z.extras(k,{extras:t}).then((function(){b((0,h.nc)({activeMenu:q,data:(0,a.Z)((0,a.Z)({},q.data),{},{extras:t})})),n()})).finally((function(){return N(!1)}))},children:A?(0,g.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,g.jsx)(f.Z,{size:"large",className:"py-5"})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{gutter:12,children:(0,g.jsx)(u.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:y("extras"),name:"extras",children:(0,g.jsx)(o.Z.Group,{options:F})})})}),(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(Z.Z,{onClick:t,children:y("prev")}),(0,g.jsx)(Z.Z,{type:"primary",htmlType:"submit",loading:S,children:y("next")})]})]})})})}},44902:function(e,n,t){var a=t(93433),r=t(4942),i=t(1413),l=t(29439),s=t(47313),c=t(77181),u=t(83371),o=t(68197),d=t(59624),Z=t(45705),f=t(59491),v=t(72652),m=t(2717),h=t(58467),x=t(90954),p=t(95882),j=t(24511),g=t(18333),y=t(97421),b=t(46417);n.Z=function(e){var n,t,k,q,I,w,S=e.prev,N=(0,j.$)().t,O=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,C=(0,m.v9)((function(e){return e.formLang}),m.wU),F=C.defaultLang,U=C.languages,_=(0,h.s0)(),L=(0,m.I0)(),A=(0,s.useState)({}),M=(0,l.Z)(A,2),E=M[0],V=M[1],T=(0,s.useState)(null),z=(0,l.Z)(T,2),B=z[0],P=z[1],G=(0,h.UO)().uuid,W=(0,m.v9)((function(e){return e.product}),m.wU).params;function $(e){P(!0),g.Z.getById(e).then((function(e){var n=(0,i.Z)((0,i.Z)((0,i.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var n=e.translations,t=U.map((function(e){var t,a,i;return i={},(0,r.Z)(i,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,r.Z)(i,"description[".concat(e.locale,"]"),null===(a=n.find((function(n){return n.locale===e.locale})))||void 0===a?void 0:a.description),i}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(t)))}(e.data)),{},{properties:e.data.properties.map((function(e,n){var t;return t={id:n},(0,r.Z)(t,"key[".concat(e.locale,"]"),e.key),(0,r.Z)(t,"value[".concat(e.locale,"]"),e.value),t})),translation:void 0,translations:void 0});V(n)})).finally((function(){return P(!1)}))}return(0,s.useEffect)((function(){$(G)}),[]),B?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(v.Z,{size:"large",className:"py-5"})}):(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)(u.Z,{title:N("product.info"),bordered:!0,children:[(0,b.jsx)(u.Z.Item,{label:"".concat(N("title")," (").concat(F,")"),span:3,children:E["title[".concat(F,"]")]}),(0,b.jsx)(u.Z.Item,{label:"".concat(N("description")," (").concat(F,")"),span:3,children:E["description[".concat(F,"]")]}),(0,b.jsx)(u.Z.Item,{label:N("shop"),span:1.5,children:null===(n=E.shop)||void 0===n?void 0:n.translation.title}),(0,b.jsx)(u.Z.Item,{label:N("category"),span:1.5,children:null===(t=E.category)||void 0===t?void 0:t.translation.title}),(0,b.jsx)(u.Z.Item,{label:N("brand"),span:1.5,children:null===(k=E.brand)||void 0===k?void 0:k.title}),(0,b.jsx)(u.Z.Item,{label:N("unit"),span:1.5,children:null===(q=E.unit)||void 0===q?void 0:q.translation.title}),(0,b.jsx)(u.Z.Item,{label:N("images"),span:3,children:(0,b.jsx)(o.Z,{gutter:12,children:null===E||void 0===E||null===(I=E.galleries)||void 0===I?void 0:I.map((function(e,n){return(0,b.jsx)(d.Z,{children:(0,b.jsx)("img",{width:80,alt:"product",src:y.bV+e.path})},"image"+n)}))})}),(0,b.jsx)(u.Z.Item,{label:N("tax"),children:E.tax}),(0,b.jsx)(u.Z.Item,{label:N("min.quantity"),children:E.min_qty}),(0,b.jsx)(u.Z.Item,{label:N("max.quantity"),children:E.max_qty})]}),null===(w=E.stocks)||void 0===w?void 0:w.map((function(e,n){return e?(0,b.jsxs)(u.Z,{bordered:!0,className:"mt-4",children:[(0,b.jsx)(u.Z.Item,{label:N("price"),span:2,children:e.price}),(0,b.jsx)(u.Z.Item,{label:N("quantity"),span:2,children:e.quantity}),e.extras.map((function(e,n){var t,a;return(0,b.jsx)(u.Z.Item,{label:null===e||void 0===e||null===(t=e.group)||void 0===t||null===(a=t.translation)||void 0===a?void 0:a.title,children:null===e||void 0===e?void 0:e.value},"extra"+n)}))]},"desc"+n):""})),(0,b.jsx)("div",{className:"d-flex mt-4",children:(0,b.jsxs)(Z.Z,{children:[(0,b.jsx)(f.Z,{onClick:S,children:N("prev")}),(0,b.jsx)(f.Z,{type:"primary",onClick:function(){var e=(0,i.Z)((0,i.Z)({},W),{},{status:"published"}),n="seller/products";L((0,x.ph)((0,i.Z)((0,i.Z)({},O),{},{nextUrl:n}))),L((0,p.MW)(e)),_("/".concat(n))},children:N("finish")})]})})]})}},16636:function(e,n,t){t.d(n,{Z:function(){return S}});var a=t(93433),r=t(1413),i=t(29439),l=t(47313),s=t(18197),c=t(45705),u=t(59491),o=t(84695),d=t(77181),Z=t(68197),f=t(59624),v=t(66672),m=t(78508),h=t(12019),x=t(47515),p=t(2717),j=t(73431),g=t(46417);function y(e){var n=e.editData,t=e.handleCancel,a=e.editProperty,c=s.Z.useForm(),u=(0,i.Z)(c,1)[0],d=(0,p.v9)((function(e){return e.formLang}),p.wU),m=d.defaultLang,h=d.languages;return(0,l.useEffect)((function(){u.setFieldsValue(n)}),[n]),(0,g.jsxs)(o.Z,{title:"Edit product property",visible:!!n,okText:"Save",onCancel:t,onOk:function(){return u.submit()},children:[(0,g.jsx)(Z.Z,{className:"mb-3",children:(0,g.jsx)(f.Z,{span:24,children:(0,g.jsx)(j.Z,{})})}),(0,g.jsx)(s.Z,{form:u,layout:"vertical",onFinish:function(e){var t=(0,r.Z)((0,r.Z)({},n),e);a(t)},children:(0,g.jsxs)(Z.Z,{className:"mt-4",children:[(0,g.jsx)(f.Z,{span:24,children:h.map((function(e){return(0,g.jsx)(s.Z.Item,{label:"Key",name:"key[".concat(e.locale,"]"),rules:[{required:e.locale===m,message:""}],hidden:e.locale!==m,children:(0,g.jsx)(v.Z,{})},"key"+e.locale)}))}),(0,g.jsx)(f.Z,{span:24,children:h.map((function(e){return(0,g.jsx)(s.Z.Item,{label:"Value",name:"value[".concat(e.locale,"]"),rules:[{required:e.locale===m,message:""}],hidden:e.locale!==m,children:(0,g.jsx)(v.Z,{})},"value"+e.locale)}))})]})})]})}var b=t(90954),k=t(18333),q=t(24511),I=t(58467),w=t(55940),S=function(e){var n,t=e.next,j=e.prev,S=(0,q.$)().t,N=(0,p.I0)(),O=(0,I.UO)().uuid,C=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,F=(0,p.v9)((function(e){return e.formLang}),p.wU),U=F.defaultLang,_=F.languages,L=s.Z.useForm(),A=(0,i.Z)(L,1)[0],M=(0,l.useState)(null),E=(0,i.Z)(M,2),V=E[0],T=E[1],z=(0,l.useState)((null===(n=C.data)||void 0===n?void 0:n.properties)||[]),B=(0,i.Z)(z,2),P=B[0],G=B[1],W=(0,l.useState)(!1),$=(0,i.Z)(W,2),D=$[0],K=$[1],X=[{key:"2",title:S("key"),render:function(e,n){return n["key[".concat(U,"]")]}},{key:"4",title:S("value"),render:function(e,n){return n["value[".concat(U,"]")]}},{key:"5",title:S("options"),render:function(e){return(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(u.Z,{type:"primary",icon:(0,g.jsx)(h.Z,{}),onClick:function(){return T(e)}}),(0,g.jsx)(w.Z,{type:"primary",danger:!0,icon:(0,g.jsx)(x.Z,{}),onClick:function(){return H(e)}})]})}}];(0,l.useEffect)((function(){if(P.length&&O){var e=P;N((0,b.nc)({activeMenu:C,data:(0,r.Z)((0,r.Z)({},C.data),{},{properties:e})}))}}),[P]);var H=function(e){o.Z.confirm({title:S("delete.product"),okText:S("yes"),okType:"danger",onOk:function(){G((function(n){return n.filter((function(n){return n.id!==e.id}))}))}})},J=function(){return T(null)};return(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(s.Z,{layout:"vertical",form:A,onFinish:function(e){var n=parseInt(50*Math.random()),t=(0,r.Z)((0,r.Z)({},e),{},{id:n});G((function(e){return[].concat((0,a.Z)(e),[t])})),A.resetFields()},children:(0,g.jsxs)(Z.Z,{gutter:12,className:"mb-3",children:[(0,g.jsx)(f.Z,{span:8,children:_.map((function(e){return(0,g.jsx)(s.Z.Item,{name:"key[".concat(e.locale,"]"),rules:[{required:e.locale===U,message:""}],hidden:e.locale!==U,children:(0,g.jsx)(v.Z,{placeholder:S("key")})},"key"+e.locale)}))}),(0,g.jsx)(f.Z,{span:8,children:_.map((function(e){return(0,g.jsx)(s.Z.Item,{name:"value[".concat(e.locale,"]"),rules:[{required:e.locale===U,message:""}],hidden:e.locale!==U,children:(0,g.jsx)(v.Z,{placeholder:S("value")})},"value"+e.locale)}))}),(0,g.jsx)(f.Z,{span:4,children:(0,g.jsx)(u.Z,{type:"primary",htmlType:"submit",children:S("save")})})]})}),(0,g.jsx)(m.Z,{scroll:{x:!0},columns:X,dataSource:P,pagination:!1,rowKey:function(e){return e.id}}),(0,g.jsx)(y,{editData:V,handleCancel:J,editProperty:function(e){G((function(n){return n.map((function(n){return n.id===e.id?e:n}))})),J()}}),(0,g.jsxs)(c.Z,{className:"mt-4",children:[(0,g.jsx)(u.Z,{onClick:j,children:S("prev")}),(0,g.jsx)(u.Z,{type:"primary",onClick:function(){K(!0);var e=function(){var e=[],n=[];return P.forEach((function(t){var a={},r={};_.forEach((function(e){a[e.locale]=t["key[".concat(e.locale,"]")],r[e.locale]=t["value[".concat(e.locale,"]")]})),e.push(a),n.push(r)})),{key:e,value:n}}();k.Z.properties(O,e).then((function(){t()})).finally((function(){return K(!1)}))},loading:D,children:S("next")})]})]})}},63945:function(e,n,t){var a=t(4942),r=t(93433),i=t(1413),l=t(29439),s=t(47313),c=t(18197),u=t(77181),o=t(68197),d=t(59624),Z=t(6289),f=t(59491),v=t(45705),m=t(2717),h=t(22307),x=t(47515),p=t(82138),j=t(18333),g=t(90954),y=t(89802),b=t(24511),k=t(58467),q=t(89281),I=t(51282),w=t(97340),S=t(55940),N=t(46417);n.Z=function(e){var n=e.prev,t=e.next,O=(0,b.$)().t,C=c.Z.useForm(),F=(0,l.Z)(C,1)[0],U=(0,m.I0)(),_=(0,k.UO)().uuid,L=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,A=(0,m.v9)((function(e){return e.myShop}),m.wU).myShop,M=(0,s.useState)(null),E=(0,l.Z)(M,2),V=E[0],T=E[1],z=(0,m.v9)((function(e){return e.extraGroup}),m.wU).extraGroups,B=(0,s.useState)(null),P=(0,l.Z)(B,2),G=P[0],W=P[1];function $(e){var n,t=z.find((function(n){return n.id===e}));return null===t||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title}var D=function(e){var n={search:e,addon:1,shop_id:A.id};return j.Z.getAll(n).then((function(e){return e.data.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:null===e||void 0===e?void 0:e.id}}))}))};return(0,s.useEffect)((function(){!function(e){T(!0),j.Z.getById(e).then((function(e){var n,t,l,s={extras:null===(n=e.data.stocks[0])||void 0===n?void 0:n.extras.map((function(e){return e.extra_group_id})),stocks:e.data.stocks.map((function(e){var n;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),Object.assign.apply(Object,[{}].concat((0,r.Z)(e.extras.map((function(e,n){return(0,a.Z)({},"extras[".concat(n,"]"),{label:e.value,value:e.id})})))))),{},{addons:null===e||void 0===e||null===(n=e.addons)||void 0===n?void 0:n.map((function(e){var n,t,a;return{label:null===e||void 0===e||null===(n=e.product)||void 0===n||null===(t=n.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a.id}})),quantity:e.quantity||0,extras:void 0})}))};F.setFieldsValue({stocks:null!==(t=e.data)&&void 0!==t&&null!==(l=t.stocks)&&void 0!==l&&l.length?s.stocks:[""]})})).finally((function(){T(!1)}))}(_)}),[]),(0,s.useEffect)((function(){U((0,w.Vy)({valid:!0}))}),[]),(0,N.jsx)(u.Z,{children:V?(0,N.jsx)(I.Z,{}):(0,N.jsxs)(c.Z,{layout:"vertical",form:F,onFinish:function(e){var n,a;W(!0);var r,i=e.stocks;r=!(null===(n=L.data)||void 0===n||null===(a=n.extras)||void 0===a||!a.length)?i.map((function(e){var n,t;return{price:e.price,quantity:e.quantity,ids:null===(n=L.data)||void 0===n?void 0:n.extras.map((function(n,t){return e["extras[".concat(t,"]")].value})),addons:e.addons?null===(t=e.addons)||void 0===t?void 0:t.map((function(e){return e.value})):[]}})):[{price:i[0].price,quantity:i[0].quantity,addons:i[0].addons?i[0].addons.map((function(e){return e.value})):[]}],j.Z.stocks(_,{extras:r}).then((function(){return t()})).finally((function(){return W(!1)}))},children:[(0,N.jsx)(c.Z.List,{name:"stocks",children:function(e,n){var t,a,r=n.add,l=n.remove;return(0,N.jsxs)("div",{children:[e.map((function(e,n){var t,a,r,i;return(0,N.jsxs)(o.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},hidden:!(null!==(t=L.data)&&void 0!==t&&null!==(a=t.extras)&&void 0!==a&&a.length)&&e.key,children:[(0,N.jsx)(d.Z,{children:(0,N.jsx)(c.Z.Item,{label:O("price"),name:[n,"price"],rules:[{required:!0,message:O("requried")}],children:(0,N.jsx)(Z.Z,{min:1,className:"w-100",style:{minWidth:200}})})}),(0,N.jsx)(d.Z,{children:(0,N.jsx)(c.Z.Item,{label:O("quantity"),name:[n,"quantity"],rules:[{required:!0,message:O("required")}],children:(0,N.jsx)(Z.Z,{min:1,className:"w-100",style:{minWidth:200}})})}),(0,N.jsx)(d.Z,{children:(0,N.jsx)(c.Z.Item,{label:O("addons"),name:[n,"addons"],rules:[{required:!1,message:O("required")}],children:(0,N.jsx)(q.h,{mode:"multiple",style:{minWidth:"300px"},fetchOptions:D,allowClear:!0})})}),null===(r=L.data)||void 0===r||null===(i=r.extras)||void 0===i?void 0:i.map((function(e,t){return(0,N.jsx)(d.Z,{children:(0,N.jsx)(c.Z.Item,{label:$(e),name:[n,"extras[".concat(t,"]")],rules:[{required:!0,message:O("required")}],children:(0,N.jsx)(y.q,{fetchOptions:function(){return n=e,h.Z.getGroupById(n).then((function(e){return e.data.extra_values.map((function(e){return{label:e.value,value:e.id}}))}));var n},className:"w-100",style:{minWidth:200}})})},"extra"+e)})),(0,N.jsx)(d.Z,{children:e.key?(0,N.jsx)(S.Z,{type:"primary",danger:!0,icon:(0,N.jsx)(x.Z,{}),onClick:function(){return l(e.name)}}):""})]},e.key)})),null!==(t=L.data)&&void 0!==t&&null!==(a=t.extras)&&void 0!==a&&a.length?(0,N.jsx)(f.Z,{type:"dashed",style:{width:"100%"},onClick:function(){r(),function(){var e=F.getFieldsValue(!0);U((0,g.nc)({activeMenu:L,data:(0,i.Z)((0,i.Z)({},L.data),{},{stocks:e.stocks})}))}()},children:(0,N.jsxs)(v.Z,{children:[(0,N.jsx)(p.Z,{}),O("add")]})}):""]})}}),(0,N.jsxs)(v.Z,{className:"mt-4",children:[(0,N.jsx)(f.Z,{onClick:n,children:O("prev")}),(0,N.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:!!G,children:O("next")})]})]})})}},32937:function(e,n,t){var a=t(4942),r=t(93433),i=t(1413),l=t(29439),s=t(47313),c=t(18197),u=t(68197),o=t(59624),d=t(77181),Z=t(66672),f=t(6289),v=t(86345),m=t(59491),h=t(89281),x=t(11101),p=t(29955),j=t(2717),g=t(18333),y=t(90954),b=t(33403),k=t(58467),q=t(24511),I=t(89802),w=t(32380),S=t(5764),N=t(49080),O=t(46417);n.Z=function(e){var n,t,C,F=e.next,U=e.action_type,_=void 0===U?"":U,L=(0,q.$)().t,A=c.Z.useForm(),M=(0,l.Z)(A,1)[0],E=(0,j.I0)(),V=(0,k.UO)().uuid,T=(0,k.s0)(),z=(0,s.useState)(null),B=(0,l.Z)(z,2),P=B[0],G=B[1],W=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu,$=(0,j.v9)((function(e){return e.formLang}),j.wU),D=$.defaultLang,K=$.languages,X=((0,j.v9)((function(e){return e.myShop}),j.wU).myShop,(0,s.useState)(null!==(n=W.data)&&void 0!==n&&n.images?null===(t=W.data)||void 0===t?void 0:t.images:[])),H=(0,l.Z)(X,2),J=H[0],Q=H[1],R=(0,s.useState)(!1),Y=(0,l.Z)(R,2),ee=Y[0],ne=Y[1],te=(0,s.useState)(Boolean(null===(C=W.data)||void 0===C?void 0:C.kcal)),ae=(0,l.Z)(te,2),re=ae[0],ie=ae[1];(0,s.useEffect)((function(){return function(){var e=M.getFieldsValue(!0);E((0,y.nc)({activeMenu:W,data:(0,i.Z)((0,i.Z)({},W.data),e)}))}}),[]);return(0,O.jsxs)(c.Z,{layout:"vertical",form:M,initialValues:(0,i.Z)({active:!0,vegetarian:!0},W.data),onFinish:function(e){var n,t,l,s;ne(!0);var c=(0,i.Z)((0,i.Z)({},e),{},{active:Number(e.active),vegetarian:Number(e.vegetarian),brand_id:null===(n=e.brand)||void 0===n?void 0:n.value,category_id:null===(t=e.category)||void 0===t?void 0:t.value,shop_id:null===(l=e.shop)||void 0===l?void 0:l.value,unit_id:null===(s=e.unit)||void 0===s?void 0:s.value,kcal:re?String(e.kcal):void 0,carbs:re?String(e.carbs):void 0,protein:re?String(e.protein):void 0,fats:re?String(e.fats):void 0,images:void 0,brand:void 0,category:void 0,shop:void 0,unit:void 0},Object.assign.apply(Object,[{}].concat((0,r.Z)(J.map((function(e,n){return(0,a.Z)({},"images[".concat(n,"]"),e.name)}))))));"edit"===_?function(e,n){g.Z.update(V,n).then((function(n){n.data;E((0,y.nc)({activeMenu:W,data:e})),F()})).catch((function(e){return G(e.response.data.params)})).finally((function(){return ne(!1)}))}(e,c):function(e,n){g.Z.create(n).then((function(n){var t=n.data;E((0,y.SS)({id:"product-".concat(t.uuid),url:"seller/product/".concat(t.uuid),name:L("add.product"),data:e,refetch:!1})),T("/seller/product/".concat(t.uuid,"?step=1"))})).catch((function(e){return G(e.response.data.params)})).finally((function(){return ne(!1)}))}(e,c)},children:[(0,O.jsxs)(u.Z,{gutter:12,children:[(0,O.jsx)(o.Z,{span:16,children:(0,O.jsxs)(u.Z,{children:[(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(d.Z,{title:L("basic.info"),children:(0,O.jsxs)(u.Z,{children:[(0,O.jsx)(o.Z,{span:24,children:K.map((function(e){return(0,O.jsx)(c.Z.Item,{label:L("name"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===D,message:L("required")}],hidden:e.locale!==D,children:(0,O.jsx)(Z.Z,{})},"name"+e.id)}))}),(0,O.jsx)(o.Z,{span:24,children:K.map((function(e){return(0,O.jsx)(c.Z.Item,{label:L("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===D,message:L("required")}],hidden:e.locale!==D,children:(0,O.jsx)(N.Z,{rows:3})},"description"+e.id)}))})]})})}),(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(d.Z,{title:L("pricing"),children:(0,O.jsxs)(u.Z,{gutter:12,children:[(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("min.qty"),name:"min_qty",rules:[{required:!0,message:L("required")}],children:(0,O.jsx)(f.Z,{min:0,className:"w-100"})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("max.qty"),name:"max_qty",rules:[{required:!0,message:L("required")}],children:(0,O.jsx)(f.Z,{min:0,className:"w-100"})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("tax"),name:"tax",rules:[{required:!0,message:L("required")}],children:(0,O.jsx)(f.Z,{min:0,className:"w-100",addonAfter:"%"})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("qr.code"),name:"bar_code",rules:[{required:!0,message:L("required")}],help:null!==P&&void 0!==P&&P.bar_code?P.bar_code[0]:null,validateStatus:null!==P&&void 0!==P&&P.bar_code?"error":"success",children:(0,O.jsx)(Z.Z,{className:"w-100"})})})]})})}),(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(d.Z,{title:L("additions"),children:(0,O.jsxs)(u.Z,{gutter:12,children:[(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("active"),name:"active",valuePropName:"checked",children:(0,O.jsx)(v.Z,{})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("vegetarian"),name:"vegetarian",valuePropName:"checked",children:(0,O.jsx)(v.Z,{})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{label:L("nutrition.".concat(re?"on":"off")),valuePropName:"checked",children:(0,O.jsx)(v.Z,{checked:re,onChange:function(e){return ie(e)}})})})]})})}),re&&(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(d.Z,{title:L("nutritional.value.of.food"),children:(0,O.jsxs)(u.Z,{gutter:12,children:[(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{rules:[{required:!0,message:L("required")}],label:L("kcal"),name:"kcal",children:(0,O.jsx)(f.Z,{max:10,className:"w-100"})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{rules:[{required:!0,message:L("required")}],label:L("carbs"),name:"carbs",children:(0,O.jsx)(f.Z,{max:10,className:"w-100"})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{rules:[{required:!0,message:L("required")}],label:L("protein"),name:"protein",children:(0,O.jsx)(f.Z,{max:10,className:"w-100"})})}),(0,O.jsx)(o.Z,{span:6,children:(0,O.jsx)(c.Z.Item,{rules:[{required:!0,message:L("required")}],label:L("fats"),name:"fats",children:(0,O.jsx)(f.Z,{max:10,className:"w-100"})})})]})})})]})}),(0,O.jsx)(o.Z,{span:8,children:(0,O.jsxs)(u.Z,{children:[(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(d.Z,{title:L("organization"),children:(0,O.jsxs)(u.Z,{children:[(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(c.Z.Item,{label:L("category"),name:"category",rules:[{required:!0,message:L("required")}],children:(0,O.jsx)(w.o,{fetchOptions:function(e){var n={search:e||null,type:"main"};return p.Z.getAll(n).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}}))}))}})})}),(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(c.Z.Item,{label:L("brand"),name:"brand",rules:[{required:!1,message:L("required")}],children:(0,O.jsx)(h.h,{fetchOptions:function(e){var n={search:e};return x.Z.getAll(n).then((function(e){return e.data.map((function(e){return{label:e.title,value:e.id}}))}))}})})}),(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(c.Z.Item,{label:L("unit"),name:"unit",rules:[{required:!0,message:L("required")}],children:(0,O.jsx)(I.q,{fetchOptions:function(e){var n={search:e};return b.Z.getAll(n).then((function(e){return function(e){return e.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))}(e.data)}))}})})})]})})}),(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(d.Z,{title:L("media"),children:(0,O.jsx)(u.Z,{children:(0,O.jsx)(o.Z,{span:24,children:(0,O.jsx)(c.Z.Item,{name:"images",children:(0,O.jsx)(S.Z,{type:"products",imageList:J,setImageList:Q,form:M,multiple:!0})})})})})})]})})]}),(0,O.jsx)(m.Z,{type:"primary",htmlType:"submit",loading:ee,children:L("next")})]})}},16848:function(e,n,t){t.d(n,{S:function(){return a}});var a=[{title:"food",content:"First-content"},{title:"food.extras",content:"Second-content"},{title:"stocks",content:"Third-content"},{title:"food.property",content:"Fourth-content"},{title:"finish",content:"Finish-content"}]}}]);