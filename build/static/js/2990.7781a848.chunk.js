(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2990],{4181:function(e,t,n){"use strict";n.r(t);var a=n(29439),r=n(56140),i=n(99096),l=n(66204),o=n(78508),c=n(72652),u=n(68197),d=n(59624),s=n(45705),v=n(77181),f=n(59491),h=n(47313),x=n(63243),p=n(26441),g=n(90954),Z=n(2717),y=n(70816),m=n.n(y),j=n(93131),_=n(53233),b=n(80314),w=n(58467),k=n(74776),C=n.n(k),q=n(23885),I=n(84017),S=n(43712),N=n(22133),R=n(46417),E=r.Z.Text,z=r.Z.Title,D=i.Z.RangePicker;t.default=function(){var e,t,n,i,y=(0,Z.I0)(),k=(0,w.TH)(),H=C().parse(k.search,[])["?category_id"],M=C().parse(k.search,[])["?product_id"],T=(0,h.useContext)(j.G),A=T.date_from,K=T.date_to,L=T.by_time,O=T.chart,U=T.handleChart,B=T.handleDateRange,G=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,P=(0,Z.v9)((function(e){return e.extrasReport}),Z.wU),V=P.loading,F=P.chartData,J=P.extrasList,Q=(0,h.useState)([]),W=(0,a.Z)(Q,2),X=W[0],Y=W[1],$=(0,h.useState)(!1),ee=(0,a.Z)($,2),te=ee[0],ne=ee[1],ae=(0,h.useState)(""),re=(0,a.Z)(ae,2),ie=re[0],le=(re[1],(0,Z.v9)((function(e){return e.currency}),Z.wU).defaultCurrency),oe=(0,h.useState)([{title:(0,q.t)("title"),dataIndex:"translation_title",key:"translation_title",render:function(e,t){return null===t||void 0===t?void 0:t.translation.title},is_show:!0,sorter:function(e,t){var n,a;return null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title.localeCompare(null===t||void 0===t||null===(a=t.translation)||void 0===a?void 0:a.title)}},{title:(0,q.t)("bar.code"),dataIndex:"bar_code",key:"bar_code",is_show:!0,render:function(e,t){return(0,R.jsx)(R.Fragment,{children:(null===t||void 0===t?void 0:t.bar_code)||"-"})}},{title:(0,q.t)("price"),dataIndex:"price",key:"price",is_show:!0,render:function(e,t){return(0,I.Z)(null===t||void 0===t?void 0:t.price,null===le||void 0===le?void 0:le.symbol)},sorter:function(e,t){return e.price-t.price}},{title:(0,q.t)("quantity"),key:"quantity",dataIndex:"quantity",is_show:!0,sorter:function(e,t){return e.quantity-t.quantity}},{title:(0,q.t)("status"),key:"active",dataIndex:"active",render:function(e,t){var n=Boolean(null===t||void 0===t?void 0:t.active);return(0,R.jsx)(l.Z,{color:n?"green":"red",children:n?"Active":"Inactive"},t.id)},is_show:!0}]),ce=(0,a.Z)(oe,2),ue=ce[0],de=ce[1],se=(0,h.useMemo)((function(){return[{label:"item.sold",value:"avg_quantity",qty:"quantity",price:!1},{label:"net.sales",value:"price",qty:"price",price:!0},{label:"Orders",value:"count",qty:"count",price:!1}]}),[]),ve=function(){var e={date_from:A,date_to:K,type:L,chart:O};H&&(e.categories=[H]),M&&(e.products=[M]),y((0,S.qO)(e))},fe=function(e,t){var n={date_from:A,date_to:K,type:L,page:e,perPage:t,search:ie||null};H&&(n.categories=[H]),M&&(n.products=[M]),y((0,S.SL)(n))};(0,h.useEffect)((function(){U(se[0].value)}),[]),(0,h.useEffect)((function(){G.refetch&&(fe(),ve(),y((0,g.A_)(G)))}),[G.refetch]),(0,b.Z)((function(){fe()}),[K,ie,H,M,A]),(0,b.Z)((function(){ve()}),[K,L,O,H,M,A]);var he={selectedRowKeys:X,onChange:function(e){Y(e)}};return(0,R.jsxs)(c.Z,{size:"large",spinning:V,children:[(0,R.jsx)(u.Z,{gutter:24,className:"mb-3",children:(0,R.jsx)(d.Z,{span:12,children:(0,R.jsx)(s.Z,{size:"large",children:(0,R.jsx)(D,{defaultValue:[m()(A),m()(K)],onChange:B})})})}),(0,R.jsx)(u.Z,{gutter:24,className:"report-products",children:null===se||void 0===se?void 0:se.map((function(e){return(0,R.jsx)(d.Z,{span:8,onClick:function(){return U(e.value)},children:(0,R.jsxs)(v.Z,{className:O===e.value&&"active",children:[(0,R.jsx)(u.Z,{className:"mb-5",children:(0,R.jsx)(d.Z,{children:(0,R.jsx)(E,{children:(0,q.t)(e.label)})})}),(0,R.jsxs)(u.Z,{gutter:24,children:[(0,R.jsx)(d.Z,{span:12,children:(0,R.jsx)(z,{level:2,children:e.price?(0,I.Z)(F[e.qty],null===le||void 0===le?void 0:le.symbol):F[e.qty]})}),(0,R.jsx)(d.Z,{span:12,className:"d-flex justify-content-end",children:(0,R.jsx)(l.Z,{color:"geekblue",className:"d-flex align-items-center",children:"5%"})})]})]})},e.label)}))}),(0,R.jsx)(N.Z,{reportData:F,chart_data:"quantities_sum"}),(0,R.jsxs)(v.Z,{children:[(0,R.jsxs)(s.Z,{className:"d-flex justify-content-between align-center",children:[(0,R.jsx)(r.Z.Text,{strong:!0,level:3,children:"Extras"}),(0,R.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,R.jsx)(f.Z,{icon:(0,R.jsx)(x.Z,{}),loading:te,onClick:function(){ne(!0),p.Z.getReportExtrasList({date_from:A,date_to:K,type:L,export:"excel"}).then((function(e){var t=e.data.link;t&&(window.location.href=t)})).finally((function(){return ne(!1)}))},children:(0,q.t)("download")}),(0,R.jsx)(_.Z,{columns:ue,setColumns:de})]})]}),(0,R.jsx)(o.Z,{expandable:{expandedRowRender:function(e){var t=[{title:(0,q.t)("extras.group"),dataIndex:"Extras Group",render:function(e,t){return t.group.translation.title},key:"Extras name"},{title:(0,q.t)("extras.value"),render:function(e,t){return t.value},dataIndex:"value",key:"name"},{title:(0,q.t)("status"),dataIndex:"active",render:function(e,t){return(0,R.jsx)(l.Z,{children:t.active?"Active":"Inactive"})},key:"active"}];return(0,R.jsx)(o.Z,{scroll:{x:!0},columns:t,dataSource:e.stock_extras,pagination:!1})},defaultExpandedRowKeys:["0"]},rowSelection:he,columns:null===ue||void 0===ue?void 0:ue.filter((function(e){return e.is_show})),dataSource:null===J||void 0===J||null===(e=J.data)||void 0===e?void 0:e.data,rowKey:function(e){return e.id},loading:V,pagination:{pageSize:null===J||void 0===J||null===(t=J.data)||void 0===t?void 0:t.per_page,page:(null===J||void 0===J||null===(n=J.data)||void 0===n?void 0:n.current_page)||1,total:null===J||void 0===J||null===(i=J.data)||void 0===i?void 0:i.total,defaultCurrent:1},onChange:function(e){var t=e.pageSize,n=e.current;fe(n,t)},scroll:{x:1500}})]})]})}},63243:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(1413),r=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"},l=n(17469),o=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};o.displayName="CloudDownloadOutlined";var c=r.forwardRef(o)},24654:function(){}}]);