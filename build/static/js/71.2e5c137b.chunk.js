"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[71],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),i=t(45987),c=(t(47313),t(59491)),l=t(47515),r=t(34491),o=t(24511),s=t(79492),d=t(46417),u=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,m=(0,i.Z)(e,u),Z=(0,o.$)().t,p=(0,s.Z)().isDemo;return(0,d.jsx)(c.Z,(0,a.Z)({size:t,icon:(0,d.jsx)(l.Z,{}),onClick:function(e){p?r.Am.warning(Z("cannot.work.demo")):f(e)},type:v},m))}},53233:function(e,n,t){var a=t(1413),i=t(29439),c=t(47313),l=t(56140),r=t(67251),o=t(45705),s=t(86345),d=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),m=t(46417),Z=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,p=e.style,g=e.size,x=void 0===g?"":g,y=e.iconOnly,j=(0,v.$)().t,C=(0,c.useState)(!1),b=(0,i.Z)(C,2),w=b[0],k=b[1],_=(0,m.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(r.Z.Item,{children:(0,m.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)}})]})},e+n)}))});return(0,m.jsx)(d.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,m.jsx)(u.Z,{title:j("change.columns"),children:(0,m.jsx)(f.Z,{style:(0,a.Z)({},p),size:x,icon:(0,m.jsx)(h.Z,{}),children:y?null:j("Columns")})})})}},48008:function(e,n,t){t(47313);var a=t(84695),i=t(87569),c=t(59491),l=t(24511),r=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,o=e.text,s=e.click,d=e.loading,u=e.subTitle,f=(0,l.$)().t;return(0,r.jsxs)(a.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,r.jsx)(i.ZP,{status:"warning",title:o,subTitle:u}),(0,r.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,r.jsx)(c.Z,{type:"primary",className:"mr-2",onClick:s,loading:d,children:f("yes")}),(0,r.jsx)(c.Z,{onClick:function(){return t()},children:f("no")})]})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),i=t(29439),c=t(45987),l=t(47313),r=t(66672),o=t(16031),s=t(40765),d=t(46417),u=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,c.Z)(e,u),v=(0,l.useState)(t),m=(0,i.Z)(v,2),Z=m[0],p=m[1],g=(0,l.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[]);return(0,l.useEffect)((function(){p(t)}),[f]),(0,d.jsx)(r.Z,(0,a.Z)({value:Z,onChange:function(e){p(e.target.value),g(e.target.value)},prefix:(0,d.jsx)(s.Z,{})},h))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},80314:function(e,n,t){var a=t(47313);n.Z=function(e,n){var t=(0,a.useRef)(!1);(0,a.useEffect)((function(){if(t.current)return e&&e();t.current=!0}),n)}},90071:function(e,n,t){t.r(n);var a=t(4942),i=t(93433),c=t(1413),l=t(29439),r=t(47313),o=t(12019),s=t(66407),d=t(47515),u=t(15386),f=t(55768),h=t(73591),v=t(45705),m=t(66204),Z=t(78891),p=t(59491),g=t(77181),x=t(78508),y=t(97421),j=t(74580),C=t(58467),b=t(34491),w=t(69658),k=t(2717),_=t(90954),N=t(30763),z=t(24511),S=t(55940),V=t(53233),H=t(41481),I=t(80314),O=t(26672),E=t(3925),P=t(48008),T=t(13945),M=t(74380),A=t(46417),R=["blue","red","gold","volcano","cyan","lime"],K=h.Z.TabPane,L=["published","deleted_at"];n.default=function(){var e,n,t,W,D=(0,z.$)().t,$=(0,k.I0)(),B=(0,C.s0)(),F=(0,k.v9)((function(e){return e.menu}),k.wU).activeMenu,U=(0,r.useState)(null),G=(0,l.Z)(U,2),Q=G[0],q=G[1],J=(0,r.useState)("published"),X=(0,l.Z)(J,2),Y=X[0],ee=X[1],ne=(null===(e=F.data)||void 0===e?void 0:e.role)||Y;var te=(0,r.useState)([{title:D("id"),dataIndex:"id",key:"id",is_show:!0},{title:D("name"),dataIndex:"name",key:"name",is_show:!0},{title:D("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,A.jsx)(v.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,A.jsx)(m.Z,{className:"text-uppercase",color:[R[n]],children:e})}))})}},{title:D("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,A.jsx)(Z.Z,{src:n.deleted_at?"https://via.placeholder.com/150":e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+n.id)}},{title:D("status"),dataIndex:"active",key:"active",is_show:!0,render:function(e){return e?(0,A.jsxs)(m.Z,{color:"cyan",children:[" ",D("active")]}):(0,A.jsx)(m.Z,{color:"yellow",children:D("inactive")})}},{title:D("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(p.Z,{type:"primary",icon:(0,A.jsx)(o.Z,{}),onClick:function(){return function(e){$((0,_.bL)({url:"recipe-category/edit/".concat(e.uuid),id:"category_edit",name:D("edit.category")})),B("/recipe-category/edit/".concat(e.uuid),{state:"edit"})}(n)},disabled:n.deleted_at}),(0,A.jsx)(p.Z,{icon:(0,A.jsx)(s.Z,{}),onClick:function(){return e=n.uuid,$((0,_.bL)({id:"category-clone",url:"recipe-category-clone/".concat(e),name:D("category.clone")})),void B("/recipe-category-clone/".concat(e),{state:"clone"});var e},disabled:n.deleted_at}),(0,A.jsx)(S.Z,{disabled:n.deleted_at,icon:(0,A.jsx)(d.Z,{}),onClick:function(){de([n.id]),le(!0),Ce(!0)}})]})}}]),ae=(0,l.Z)(te,2),ie=ae[0],ce=ae[1],le=(0,r.useContext)(j._).setIsModalVisible,re=(0,r.useState)(null),oe=(0,l.Z)(re,2),se=oe[0],de=oe[1],ue=(0,r.useState)(!1),fe=(0,l.Z)(ue,2),he=fe[0],ve=fe[1],me=(0,r.useState)(!1),Ze=(0,l.Z)(me,2),pe=Ze[0],ge=Ze[1],xe=(0,r.useState)(null),ye=(0,l.Z)(xe,2),je=ye[0],Ce=ye[1],be=(0,k.v9)((function(e){return e.recipeCategory}),k.wU),we=be.categories,ke=be.meta,_e=be.loading,Ne=F.data,ze={search:null===Ne||void 0===Ne?void 0:Ne.search,pageSize:ke.per_page,page:(null===Ne||void 0===Ne?void 0:Ne.page)||1,status:ne?void 0:ne,deleted_at:"deleted_at"===ne?ne:void 0};(0,r.useEffect)((function(){F.refetch&&($((0,M.P2)(ze)),$((0,_.A_)(F)))}),[F.refetch]),(0,I.Z)((function(){$((0,M.P2)(ze))}),[F.data]);var Se={selectedRowKeys:se,onChange:function(e){de(e)}},Ve=function(e){var n=F.data;$((0,_.nc)({activeMenu:F,data:(0,c.Z)((0,c.Z)({},n),e)}))};return console.log(we),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g.Z,{className:"p-0",children:(0,A.jsxs)(v.Z,{wrap:!0,size:[14,20],children:[(0,A.jsx)(H.Z,{placeholder:D("search"),className:"w-25",handleChange:function(e){Ve({search:e})},defaultValue:null===(n=F.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=F.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,A.jsx)(S.Z,{size:"",onClick:function(){null===se||0===se.length?b.Am.warning(D("select.the.product")):(le(!0),Ce(!1))},children:D("delete.selected")}),"deleted_at"!==ne?(0,A.jsx)(S.Z,{onClick:function(){return q({delete:!0})},children:D("delete.all")}):(0,A.jsx)(S.Z,{icon:(0,A.jsx)(O.uOc,{className:"mr-2"}),onClick:function(){return q({restore:!0})},children:D("restore.all")}),(0,A.jsxs)(p.Z,{style:{minWidth:150},onClick:function(){$((0,_.bL)({url:"recipe-categories/import",id:"category_import",name:D("import.category")})),B("/recipe-categories/import")},children:[(0,A.jsx)(E.o5r,{className:"mr-2"}),D("import")]}),(0,A.jsxs)(p.Z,{style:{minWidth:150},loading:pe,onClick:function(){ge(!0),N.Z.export().then((function(e){var n=y.S0+e.data.file_name;window.location.href=n})).finally((function(){return ge(!1)}))},children:[(0,A.jsx)(E.bwQ,{className:"mr-2"}),D("export")]}),(0,A.jsx)(p.Z,{icon:(0,A.jsx)(u.Z,{}),onClick:function(){$((0,_.nc)({activeMenu:F,data:void 0}))},disabled:!F.data,style:{minWidth:100}}),(0,A.jsx)(p.Z,{type:"primary",icon:(0,A.jsx)(f.Z,{}),onClick:function(){$((0,_.bL)({id:"category-add",url:"recipe-category/add",name:D("add.category")})),B("/recipe-category/add")},children:D("add.category")}),(0,A.jsx)(V.Z,{columns:ie,setColumns:ce})]})}),(0,A.jsxs)(g.Z,{title:D("categories"),children:[(0,A.jsx)(h.Z,{className:"mt-3",activeKey:ne,onChange:function(e){Ve({role:e,page:1}),ee(e)},type:"card",children:L.map((function(e){return(0,A.jsx)(K,{tab:D(e)},e)}))}),(0,A.jsx)(x.Z,{scroll:{x:!0},rowSelection:Se,columns:null===ie||void 0===ie?void 0:ie.filter((function(e){return e.is_show})),dataSource:we,pagination:{pageSize:ke.per_page,page:(null===Ne||void 0===Ne?void 0:Ne.page)||1,total:ke.total,defaultCurrent:null===Ne||void 0===Ne?void 0:Ne.page,current:null===(W=F.data)||void 0===W?void 0:W.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,i=e.current,l=t.field,r=t.order,o=(0,T.Z)(r);$((0,_.nc)({activeMenu:F,data:(0,c.Z)((0,c.Z)({},F.data),{},{perPage:a,page:i,column:l,sort:o})}))},loading:_e})]}),(0,A.jsx)(w.Z,{click:function(){ve(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(se.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));N.Z.delete(e).then((function(){$((0,M.P2)(ze)),b.Am.success(D("successfully.deleted"))})).finally((function(){le(!1),ve(!1),Ce(null)}))},text:D(je?"delete":"all.delete"),setText:de,loading:he}),Q&&(0,A.jsx)(P.Z,{open:Q,handleCancel:function(){return q(null)},click:Q.restore?function(){ve(!0),N.Z.restoreAll().then((function(){b.Am.success(D("successfully.restored")),$((0,M.P2)()),q(null)})).finally((function(){return ve(!1)}))}:function(){ve(!0),N.Z.dropAll().then((function(){b.Am.success(D("successfully.deleted")),$((0,M.P2)()),q(null)})).finally((function(){return ve(!1)}))},text:Q.restore?D("restore.modal.text"):D("read.carefully"),subTitle:Q.restore?"":D("confirm.deletion"),loading:he,setText:de})]})}},15386:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},l=t(17469),r=function(e,n){return i.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:c}))};r.displayName="ClearOutlined";var o=i.forwardRef(r)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),i=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),r=function(e,n){return i.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:c}))};r.displayName="TableOutlined";var o=i.forwardRef(r)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(87462),i=t(4942),c=t(47313),l=t(29439),r=t(45987),o=t(46123),s=t.n(o),d=t(10288),u=t(49242),f=c.forwardRef((function(e,n){var t,a=e.prefixCls,o=void 0===a?"rc-switch":a,f=e.className,h=e.checked,v=e.defaultChecked,m=e.disabled,Z=e.loadingIcon,p=e.checkedChildren,g=e.unCheckedChildren,x=e.onClick,y=e.onChange,j=e.onKeyDown,C=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,d.Z)(!1,{value:h,defaultValue:v}),w=(0,l.Z)(b,2),k=w[0],_=w[1];function N(e,n){var t=k;return m||(_(t=e),null===y||void 0===y||y(t,n)),t}var z=s()(o,f,(t={},(0,i.Z)(t,"".concat(o,"-checked"),k),(0,i.Z)(t,"".concat(o,"-disabled"),m),t));return c.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:m,className:z,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?N(!1,e):e.which===u.Z.RIGHT&&N(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=N(!k,e);null===x||void 0===x||x(n,e)}}),Z,c.createElement("span",{className:"".concat(o,"-inner")},k?p:g))}));f.displayName="Switch";var h=f,v=t(82508),m=t(46479),Z=t(91964),p=t(21631),g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},x=c.forwardRef((function(e,n){var t,l=e.prefixCls,r=e.size,o=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,x=g(e,["prefixCls","size","loading","className","disabled"]),y=c.useContext(Z.E_),j=y.getPrefixCls,C=y.direction,b=c.useContext(p.Z),w=j("switch",l),k=c.createElement("div",{className:"".concat(w,"-handle")},o&&c.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),_=s()((t={},(0,i.Z)(t,"".concat(w,"-small"),"small"===(r||b)),(0,i.Z)(t,"".concat(w,"-loading"),o),(0,i.Z)(t,"".concat(w,"-rtl"),"rtl"===C),t),u);return c.createElement(m.Z,{insertExtraNode:!0},c.createElement(h,(0,a.Z)({},x,{prefixCls:w,className:_,disabled:f||o,ref:n,loadingIcon:k})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var y=x}}]);