(this.webpackJsonpthe=this.webpackJsonpthe||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(13),o=n.n(s),u=n(2),c=n(3),l=n.n(c),i="/api/persons",m=function(){return l.a.get(i)},f=function(e){return l.a.post(i,e)},d=function(e,t){return l.a.put("".concat(i,"/").concat(e),t)},E=function(e){return l.a.delete("".concat(i,"/").concat(e))},b=function(e){return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("div",null,"name: ",a.a.createElement("input",{onChange:e.handleNewName,value:e.newName})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{onChange:e.handleNumber,value:e.number})),a.a.createElement("div",null,a.a.createElement("button",{onClick:e.handleSubmit,type:"submit"},"add"))))},h=function(e){return a.a.createElement("div",null,e.personArray.map((function(t,n){return a.a.createElement("p",{key:n},t.name," ",t.number," ",a.a.createElement("button",{onClick:function(){return n=t.name,r=t.id,void(window.confirm("Delete ".concat(n," ?"))&&E(r).catch((function(t){console.log(t),e.setStatus("error"),e.setErrorMessage("Information of ".concat(n," has already been removed from server, error")),setTimeout((function(){e.setErrorMessage(null)}),5e3)})).then((function(t){e.setPersons(e.persons.filter((function(e){return e.name!==n})))})));var n,r}},"Delete"))})))},p=function(e){return a.a.createElement("div",null,e.filterValue?a.a.createElement(h,{personArray:e.searchResults,setErrorMessage:e.setErrorMessage,setPersons:e.setPersons,persons:e.persons,setStatus:e.setStatus}):a.a.createElement(h,{personArray:e.persons,setErrorMessage:e.setErrorMessage,setPersons:e.setPersons,persons:e.persons,setStatus:e.setStatus}))},v=function(e){return a.a.createElement("div",null,"filter shown with",a.a.createElement("input",{onChange:e.handleFilterName,value:e.filterValue}))},g=function(e){var t=e.message,n=e.status;return console.log("status value ",n),"error"==n?a.a.createElement("div",{className:"error"},t):a.a.createElement("div",{className:"message"},t)},w=(n(36),function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),c=Object(u.a)(o,2),l=c[0],i=c[1],E=Object(r.useState)(""),h=Object(u.a)(E,2),w=h[0],j=h[1],O=Object(r.useState)(""),S=Object(u.a)(O,2),N=S[0],C=S[1],y=Object(r.useState)(""),k=Object(u.a)(y,2),M=k[0],P=k[1],L=Object(r.useState)(""),A=Object(u.a)(L,2),T=A[0],V=A[1],D=Object(r.useState)(""),F=Object(u.a)(D,2),I=F[0],J=F[1];Object(r.useEffect)((function(){m().then((function(e){console.log("response ",e.data),s(e.data)}))}),[l,w]),Object(r.useEffect)((function(){console.log("error message updated")}),[T,I]);var R=function(e){var t=n.filter((function(t){return t.name.toLowerCase().includes(e)}));P(t)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),T&&a.a.createElement(g,{message:T,status:I}),a.a.createElement(v,{handleFilterName:function(e){var t=e.target.value;C(t.toLowerCase()),R(N)},filterValue:N}),a.a.createElement("h3",null,"Add a new "),a.a.createElement(b,{handleNewName:function(e){i(e.target.value)},newName:l,handleNumber:function(e){j(e.target.value)},number:w,handleSubmit:function(e){if(e.preventDefault(),l.length>0&&w.length>0)if(n.some((function(e){return e.name.toLowerCase()===l.toLowerCase()}))){if(window.confirm("".concat(l," is already added to phonebook, replace the old number with a new one"))){var t=n.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}));d(t.id,{name:l,number:w}).then((function(){V("Edited ".concat(l,", success")),J("success"),setTimeout((function(){V(null)}),5e3)}))}i(""),j("")}else f({name:l,number:w}).then((function(e){s(n.concat(e)),V("Added ".concat(l,", success")),J("success"),setTimeout((function(){V(null)}),5e3),i(""),j("")})).catch((function(e){console.log(e.response.data.error),V(e.response.data.error),J("error"),setTimeout((function(){V(null)}),5e3)}));else console.log("missing name or number"),J("error"),V("missing name or number, error"),setTimeout((function(){V(null),J(null)}),5e3)}}),a.a.createElement("h3",null,"Numbers"),a.a.createElement(p,{filterValue:N,searchResults:M,setErrorMessage:V,setPersons:s,persons:n,setStatus:function(e){J(e)}}))}),j=function(){return a.a.createElement("div",null,a.a.createElement(w,null))};o.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7f98d7af.chunk.js.map