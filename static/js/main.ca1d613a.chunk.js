(this["webpackJsonpprojeto-react-dinho"]=this["webpackJsonpprojeto-react-dinho"]||[]).push([[0],{111:function(e,t,n){e.exports=n(187)},116:function(e,t,n){},119:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),o=(n(116),n(117),n(35)),u=n.n(o),s=n(64),m=n(21),i=(n(119),n(193)),b=n(190),E=n(46),p=n(192),d=n(189),f=n(191);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){var e=Object(a.useState)({}),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(m.a)(c,2),h=o[0],y=o[1],g=Object(a.useState)([]),j=Object(m.a)(g,2),x=j[0],O=j[1],S=Object(a.useState)(!1),w=Object(m.a)(S,2),C=w[0],v=w[1],k=Object(a.useState)(!1),I=Object(m.a)(k,2),A=I[0],N=I[1],P=Object(a.useState)([]),T=Object(m.a)(P,2),z=T[0],R=T[1],B=Object(a.useState)(!1),D=Object(m.a)(B,2),H=D[0],U=D[1],F=Object(a.useState)(!1),J=Object(m.a)(F,2),W=J[0],K=J[1],L=Object(a.useState)(!1),$=Object(m.a)(L,2),q=$[0],G=$[1],M=i.a.Header,Q=(i.a.Footer,i.a.Sider,i.a.Content);function V(){return(V=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,y(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,v(!1),O(a),K(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,fetch("https://jsonplaceholder.typicode.com/comments?postId=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,N(!1),R(a),U(!0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){V.apply(this,arguments)}()}),[]),l.a.createElement(i.a,{style:{background:"#fff"}},l.a.createElement(M,null,l.a.createElement("h1",{style:{color:"#fff",textAlign:"center"}},"REACT HOOKS TESTE DO DINHO")),l.a.createElement(Q,null,l.a.createElement(b.a,{loading:C,header:"Usu\xe1rios",style:{margin:"24px 24px 24px 24px"},pagination:{onChange:function(e){console.log(e)},pageSize:5},dataSource:h,bordered:!0,renderItem:function(e){return l.a.createElement(b.a.Item,{action:[]},l.a.createElement("b",null,"Nome:")," ",e.name,l.a.createElement("br",null),l.a.createElement("b",null,"Usu\xe1rio:")," ",e.username,l.a.createElement("br",null),l.a.createElement("b",null,"E-mail")," ",e.email,l.a.createElement("br",null),l.a.createElement(E.a,{type:"primary",icon:"user",style:{marginRight:"4px"},onClick:function(){r(e),G(!0)}},"Perfil"),l.a.createElement(E.a,{type:"success",icon:"message",style:{marginRight:"4px"},onClick:function(){!function(e){X.apply(this,arguments)}(e.id)}},"Posts"))}}),l.a.createElement(p.a,{visible:q,onClose:function(){r({}),G(!1)}},l.a.createElement("h3",{style:{textAlign:"center"}},"Dados Pessoais"),l.a.createElement(d.a,null),l.a.createElement("b",null,"Nome"),": ",l.a.createElement("br",null),n.name,l.a.createElement("br",null),l.a.createElement("b",null,"Usu\xe1rio"),": ",l.a.createElement("br",null)," ",n.username,l.a.createElement("br",null),l.a.createElement("b",null,"Telefone"),": ",l.a.createElement("br",null),n.phone,l.a.createElement("br",null),l.a.createElement("b",null,"E-mail"),": ",l.a.createElement("br",null),n.email,l.a.createElement("br",null),l.a.createElement("b",null,"Site"),": ",l.a.createElement("br",null),n.website,l.a.createElement("br",null),l.a.createElement(d.a,null),l.a.createElement("h3",{style:{textAlign:"center"}},"Empresa"),l.a.createElement(d.a,null),l.a.createElement("b",null,"Nome"),": ",l.a.createElement("br",null),n.company?n.company.name:"",l.a.createElement("br",null),l.a.createElement("b",null,"Frase de busca "),": ",l.a.createElement("br",null),n.company?n.company.catchPhrase:"",l.a.createElement("br",null),l.a.createElement("b",null,"BS"),": ",l.a.createElement("br",null),n.company?n.company.bs:"",l.a.createElement("br",null),l.a.createElement(d.a,null),l.a.createElement("h3",{style:{textAlign:"center"}},"Endere\xe7o"),l.a.createElement(d.a,null),l.a.createElement("b",null,"Rua"),": ",l.a.createElement("br",null),n.address?n.address.street:"",l.a.createElement("br",null),l.a.createElement("b",null,"Logradouro"),": ",l.a.createElement("br",null),n.address?n.address.suite:"",l.a.createElement("br",null),l.a.createElement("b",null,"Cidade"),": ",l.a.createElement("br",null),n.address?n.address.city:"",l.a.createElement("br",null),l.a.createElement("b",null,"Codigo Postal "),": ",l.a.createElement("br",null),n.address?n.address.zipcode:"",l.a.createElement("br",null)),l.a.createElement(f.a,{width:"90%",visible:W,onCancel:function(){K(!1)},footer:""},l.a.createElement(b.a,{loading:A,pagination:{onChange:function(e){console.log(e)},pageSize:5},header:"posts",style:{margin:"24px 24px 24px 24px"},dataSource:x,bordered:!0,renderItem:function(e){return l.a.createElement(b.a.Item,null,l.a.createElement("b",null,"Titulo:")," ",e.title,l.a.createElement("br",null),l.a.createElement(E.a,{type:"primary",icon:"comment",onClick:function(){!function(e){Y.apply(this,arguments)}(e.id)}},"Comentarios"))}})),l.a.createElement(f.a,{visible:H,onCancel:function(){U(!1)},footer:""},l.a.createElement(b.a,{pagination:{onChange:function(e){console.log(e)},pageSize:5},header:"Comentarios",style:{margin:"24px 24px 24px 24px"},dataSource:z,bordered:!0,renderItem:function(e){return l.a.createElement(b.a.Item,null,l.a.createElement("b",null,"Nome:")," ",e.name,l.a.createElement("br",null),l.a.createElement("b",null,"E-mail:")," ",e.email,l.a.createElement("br",null),l.a.createElement("b",null,"Comentario:")," ",e.body,l.a.createElement("br",null))}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[111,1,2]]]);
//# sourceMappingURL=main.ca1d613a.chunk.js.map