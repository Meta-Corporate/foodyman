"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3196],{53233:function(e,t,n){var o=n(1413),a=n(29439),i=n(47313),r=n(56140),l=n(67251),c=n(45705),u=n(86345),s=n(78267),d=n(37388),f=n(59491),v=n(99587),h=n(24511),p=n(46417),m=r.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,r=e.setColumns,Z=e.style,g=e.size,x=void 0===g?"":g,w=e.iconOnly,C=(0,h.$)().t,k=(0,i.useState)(!1),b=(0,a.Z)(k,2),_=b[0],y=b[1],j=(0,p.jsx)(l.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(l.Z.Item,{children:(0,p.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(u.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));r(t)}(e)}})]})},e+t)}))});return(0,p.jsx)(s.Z,{overlay:j,trigger:["click"],onVisibleChange:function(e){y(e)},visible:_,children:(0,p.jsx)(d.Z,{title:C("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,o.Z)({},Z),size:x,icon:(0,p.jsx)(v.Z,{}),children:w?null:C("Columns")})})})}},80314:function(e,t,n){var o=n(47313);t.Z=function(e,t){var n=(0,o.useRef)(!1);(0,o.useEffect)((function(){if(n.current)return e&&e();n.current=!0}),t)}},83196:function(e,t,n){n.r(t);var o=n(29439),a=n(66204),i=n(68197),r=n(59624),l=n(77181),c=n(45705),u=n(74294),s=n(59491),d=n(78508),f=n(47313),v=n(63243),h=n(2717),p=n(26441),m=n(90954),Z=n(53233),g=n(68377),x=n(80314),w=n(24511),C=n(58467),k=n(46417);t.default=function(){var e=(0,h.I0)(),t=(0,w.$)().t,n=(0,C.s0)(),b=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu,_=(0,h.v9)((function(e){return e.stockReport}),h.wU),y=_.loading,j=_.productList,S=(0,f.useState)([]),z=(0,o.Z)(S,2),N=z[0],H=z[1],I=(0,f.useState)(!1),E=(0,o.Z)(I,2),O=E[0],V=E[1],P=(0,f.useState)(!0),R=(0,o.Z)(P,2),T=R[0],K=R[1],M=(0,f.useState)([{title:"Product title",dataIndex:"product_translation_title",key:"product_translation_title",render:function(o,a){var i;return(0,k.jsx)("a",{onClick:function(){return o=a,e((0,m.bL)({url:"report/products",id:"report.products",name:t("report.products")})),void n("/report/products?product_id=".concat(o.id));var o},children:null===a||void 0===a||null===(i=a.translation)||void 0===i?void 0:i.title})},is_show:!0,sorter:function(e,t){var n,o;return null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title.localeCompare(null===t||void 0===t||null===(o=t.translation)||void 0===o?void 0:o.title)}},{title:"Bar code",dataIndex:"product_bar_code",key:"product_bar_code",is_show:!0,render:function(e,t){return(0,k.jsx)(k.Fragment,{children:(null===t||void 0===t?void 0:t.bar_code)||"-"})}},{title:"Status",key:"status",dataIndex:"status",render:function(e,t){return(0,k.jsx)(a.Z,{children:t.status},t.id)},is_show:!0},{title:"Stock",key:"stock",dataIndex:"quantity",render:function(e,t){return null===t||void 0===t?void 0:t.stocks_sum_quantity},is_show:!0,sorter:function(e,t){return(null===e||void 0===e?void 0:e.stocks_sum_quantity)-(null===t||void 0===t?void 0:t.stocks_sum_quantity)}}]),q=(0,o.Z)(M,2),D=q[0],L=q[1],A={page:b.page,perPage:b.perPage,status:T},B=function(t,n){e((0,g.wS)({page:t,perPage:n}))};(0,x.Z)((function(){B(A)}),[T]),(0,f.useEffect)((function(){b.refetch&&(B(A),e((0,m.A_)(b)))}),[b.refetch]);var F={selectedRowKeys:N,onChange:function(e){return H(e)}};return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(i.Z,{gutter:24,children:(0,k.jsx)(r.Z,{span:24,children:(0,k.jsxs)(l.Z,{title:t("stock"),children:[(0,k.jsxs)(c.Z,{className:"d-flex justify-content-end",children:[(0,k.jsx)(u.Z,{style:{width:"200px"},onChange:function(e){return K(e)},options:[{value:null,label:"All products"},{value:"in_stock",label:"In stock"},{value:"low_stock",label:"Low stock"},{value:"out_of_stock",label:"Out of stock"}],defaultValue:null}),(0,k.jsx)(s.Z,{icon:(0,k.jsx)(v.Z,{}),loading:O,onClick:function(){V(!0),p.Z.getStocks({export:"excel"}).then((function(e){var t=e.data.link;t&&(window.location.href=t)})).finally((function(){return V(!1)}))},children:t("download")}),(0,k.jsx)(Z.Z,{columns:D,setColumns:L})]}),(0,k.jsx)(d.Z,{scroll:{x:!0},rowSelection:F,columns:null===D||void 0===D?void 0:D.filter((function(e){return e.is_show})),dataSource:j.data||[],rowKey:function(e){return e.id},loading:y,pagination:{pageSize:null===j||void 0===j?void 0:j.per_page,page:(null===j||void 0===j?void 0:j.current_page)||1,total:null===j||void 0===j?void 0:j.total,defaultCurrent:1},onChange:function(e){var t=e.pageSize,n=e.current;B(n,t)}})]})})})})}},63243:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(1413),a=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"},r=n(17469),l=function(e,t){return a.createElement(r.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:i}))};l.displayName="CloudDownloadOutlined";var c=a.forwardRef(l)},99587:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(1413),a=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=n(17469),l=function(e,t){return a.createElement(r.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:i}))};l.displayName="TableOutlined";var c=a.forwardRef(l)},86345:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(87462),a=n(4942),i=n(47313),r=n(29439),l=n(45987),c=n(46123),u=n.n(c),s=n(10288),d=n(49242),f=i.forwardRef((function(e,t){var n,o=e.prefixCls,c=void 0===o?"rc-switch":o,f=e.className,v=e.checked,h=e.defaultChecked,p=e.disabled,m=e.loadingIcon,Z=e.checkedChildren,g=e.unCheckedChildren,x=e.onClick,w=e.onChange,C=e.onKeyDown,k=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,s.Z)(!1,{value:v,defaultValue:h}),_=(0,r.Z)(b,2),y=_[0],j=_[1];function S(e,t){var n=y;return p||(j(n=e),null===w||void 0===w||w(n,t)),n}var z=u()(c,f,(n={},(0,a.Z)(n,"".concat(c,"-checked"),y),(0,a.Z)(n,"".concat(c,"-disabled"),p),n));return i.createElement("button",Object.assign({},k,{type:"button",role:"switch","aria-checked":y,disabled:p,className:z,ref:t,onKeyDown:function(e){e.which===d.Z.LEFT?S(!1,e):e.which===d.Z.RIGHT&&S(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var t=S(!y,e);null===x||void 0===x||x(t,e)}}),m,i.createElement("span",{className:"".concat(c,"-inner")},y?Z:g))}));f.displayName="Switch";var v=f,h=n(82508),p=n(46479),m=n(91964),Z=n(21631),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},x=i.forwardRef((function(e,t){var n,r=e.prefixCls,l=e.size,c=e.loading,s=e.className,d=void 0===s?"":s,f=e.disabled,x=g(e,["prefixCls","size","loading","className","disabled"]),w=i.useContext(m.E_),C=w.getPrefixCls,k=w.direction,b=i.useContext(Z.Z),_=C("switch",r),y=i.createElement("div",{className:"".concat(_,"-handle")},c&&i.createElement(h.Z,{className:"".concat(_,"-loading-icon")})),j=u()((n={},(0,a.Z)(n,"".concat(_,"-small"),"small"===(l||b)),(0,a.Z)(n,"".concat(_,"-loading"),c),(0,a.Z)(n,"".concat(_,"-rtl"),"rtl"===k),n),d);return i.createElement(p.Z,{insertExtraNode:!0},i.createElement(v,(0,o.Z)({},x,{prefixCls:_,className:j,disabled:f||c,ref:t,loadingIcon:y})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var w=x}}]);