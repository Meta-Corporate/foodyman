"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6913],{4014:function(i,e,t){function n(i){var e,t,n=null===i||void 0===i?void 0:i.slice(0,1),a=null===i||void 0===i?void 0:i.lastIndexOf("@"),d=null===i||void 0===i?void 0:i.slice(1,a-1);d=null===(e=d)||void 0===e?void 0:e.replace(/./g,"*");var l=null===i||void 0===i?void 0:i.slice(a-1,i.length);return null===n||void 0===n||null===(t=n.concat(d))||void 0===t?void 0:t.concat(l)}t.d(e,{Z:function(){return n}})},16913:function(i,e,t){t.r(e);var n=t(1413),a=t(29439),d=t(47313),l=t(73591),o=t(18197),s=t(77181),u=t(58467),r=t(70816),v=t.n(r),c=t(49986),f=t(51282),h=t(65559),m=t(2717),Z=t(90954),g=t(24511),p=t(45713),b=t(92815),x=t(8550),j=t(94748),w=t(78067),y=t(79492),_=t(4014),k=t(46417),I=l.Z.TabPane;e.default=function(){var i,e=(0,g.$)().t,t=o.Z.useForm(),r=(0,a.Z)(t,1)[0],S=(0,m.v9)((function(i){return i.menu}),m.wU).activeMenu,C=(0,m.I0)(),F=(0,u.UO)().uuid,M=(0,d.useState)(!1),O=(0,a.Z)(M,2),P=O[0],U=O[1],z=(0,d.useState)("edit"),A=(0,a.Z)(z,2),B=A[0],D=A[1],E=(0,d.useState)([]),K=(0,a.Z)(E,2),T=K[0],V=K[1],$=(0,d.useState)(null),q=(0,a.Z)($,2),G=q[0],H=q[1],J=null===S||void 0===S||null===(i=S.data)||void 0===i?void 0:i.role,L=(0,y.Z)().isDemo;(0,d.useEffect)((function(){null!==S&&void 0!==S&&S.refetch&&function(i){U(!0),c.Z.getById(i).then((function(i){var e,t,a=i.data,d=(0,n.Z)((0,n.Z)({},a),{},{image:a.img?(0,x.Z)(a.img):[]});C((0,Z.nc)({activeMenu:S,data:d})),r.setFieldsValue({firstname:a.firstname,lastname:a.lastname,email:L?(0,_.Z)(a.email):a.email,phone:a.phone,birthday:v()(a.birthday),gender:a.gender,password_confirmation:a.password_confirmation,password:a.password,shop_id:0!==a.invitations.length?a.invitations.map((function(i){var e,t,n;return{label:null===(e=i.shop)||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===(n=i.shop)||void 0===n?void 0:n.id}})):void 0}),V(a.img?[(0,x.Z)(a.img)]:[]),H(null===(e=i.data)||void 0===e||null===(t=e.delivery_man_setting)||void 0===t?void 0:t.id)})).finally((function(){U(!1),C((0,Z.A_)(S))}))}(F)}),[null===S||void 0===S?void 0:S.refetch]);return(0,k.jsx)(s.Z,{title:e("user.settings"),children:P?(0,k.jsx)(f.Z,{}):(0,k.jsxs)(l.Z,{activeKey:B,onChange:function(i){return D(i)},tabPosition:"left",size:"small",children:[(0,k.jsx)(I,{tab:e("edit.user"),children:(0,k.jsx)(h.Z,{data:null===S||void 0===S?void 0:S.data,form:r,image:T,setImage:V,action_type:"edit"})},"edit"),"cook"===J&&(0,k.jsx)(I,{tab:e("orders"),children:(0,k.jsx)(p.Z,{data:null===S||void 0===S?void 0:S.data})},"order"),"deliveryman"===J&&(0,k.jsx)(I,{tab:e("deliveryman"),children:(0,k.jsx)(w.Z,{id:G,data:S.data})},"delivery"),(0,k.jsx)(I,{tab:e("wallet"),children:(0,k.jsx)(b.Z,{data:null===S||void 0===S?void 0:S.data})},"wallet"),(0,k.jsx)(I,{tab:e("password"),children:(0,k.jsx)(j.Z,{data:null===S||void 0===S?void 0:S.data})},"password")]})})}}}]);