"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[749],{749:function(a,i,e){e.r(i);var t=e(1413),n=e(29439),d=e(47313),l=e(73591),s=e(18197),o=e(77181),r=e(58467),u=e(70816),v=e(49986),c=e(51282),h=e(65559),f=e(2717),m=e(90954),Z=e(24511),b=e(45713),g=e(92815),p=e(8550),j=e(94748),x=e(78067),w=e(46417),y=l.Z.TabPane;i.default=function(){var a,i=(0,Z.$)().t,e=s.Z.useForm(),_=(0,n.Z)(e,1)[0],k=(0,f.v9)((function(a){return a.menu}),f.wU).activeMenu,S=(0,f.I0)(),C=(0,r.UO)().uuid,I=(0,d.useState)(!1),F=(0,n.Z)(I,2),M=F[0],P=F[1],U=(0,d.useState)("edit"),z=(0,n.Z)(U,2),A=z[0],B=z[1],E=(0,d.useState)([]),K=(0,n.Z)(E,2),O=K[0],T=K[1],V=(0,d.useState)(null),$=(0,n.Z)(V,2),q=$[0],D=$[1],G=null===k||void 0===k||null===(a=k.data)||void 0===a?void 0:a.role;(0,d.useEffect)((function(){null!==k&&void 0!==k&&k.refetch&&function(a){P(!0),v.Z.getById(a).then((function(a){var i,e,n=a.data,d=(0,t.Z)((0,t.Z)({},n),{},{image:(0,p.Z)(n.img)});S((0,m.nc)({activeMenu:k,data:d})),_.setFieldsValue({firstname:n.firstname,lastname:n.lastname,email:n.email,phone:n.phone,birthday:u(n.birthday),gender:n.gender,password_confirmation:n.password_confirmation,password:n.password,image:[(0,p.Z)(n.img)],shop_id:0!==n.invitations.length?n.invitations.map((function(a){var i,e,t;return{label:null===(i=a.shop)||void 0===i||null===(e=i.translation)||void 0===e?void 0:e.title,value:null===(t=a.shop)||void 0===t?void 0:t.id}})):void 0}),D(null===(i=a.data)||void 0===i||null===(e=i.delivery_man_setting)||void 0===e?void 0:e.id),T([(0,p.Z)(n.img)])})).finally((function(){P(!1),S((0,m.A_)(k))}))}(C)}),[null===k||void 0===k?void 0:k.refetch]);return(0,w.jsx)(o.Z,{title:i("user.settings"),children:M?(0,w.jsx)(c.Z,{}):(0,w.jsxs)(l.Z,{activeKey:A,onChange:function(a){B(a)},tabPosition:"left",size:"small",children:[(0,w.jsx)(y,{tab:i("edit.user"),children:(0,w.jsx)(h.Z,{data:null===k||void 0===k?void 0:k.data,form:_,image:O,setImage:T})},"edit"),(0,w.jsx)(y,{tab:i("orders"),children:(0,w.jsx)(b.Z,{data:null===k||void 0===k?void 0:k.data})},"order"),"deliveryman"===G&&(0,w.jsx)(y,{tab:i("deliveryman"),children:(0,w.jsx)(x.Z,{id:q,data:k.data})},"delivery"),(0,w.jsx)(y,{tab:i("wallet"),children:(0,w.jsx)(g.Z,{data:null===k||void 0===k?void 0:k.data})},"wallet"),(0,w.jsx)(y,{tab:i("password"),children:(0,w.jsx)(j.Z,{data:null===k||void 0===k?void 0:k.data})},"password")]})})}}}]);