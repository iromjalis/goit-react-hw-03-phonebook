(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){e.exports={ContainerWrapper:"Container_ContainerWrapper__1a-HO"}},19:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),i=n.n(c),o=(n(19),n(14)),s=n(10),l=n(2),u=n(3),d=n(5),h=n(4),b=n(6),m=n.n(b),j=(n(28),n(8)),p=n(12),f=n.n(p),O=n(0),v=function(e){var t=e.title,n=e.onChange,a=e.value,r=e.nameInputId;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("label",{htmlFor:r,children:[t,Object(O.jsx)("input",{id:r,value:a,onChange:n,type:"text",name:t,placeholder:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})},C=function(e){var t=e.title,n=e.onChange,a=e.value;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("label",{htmlFor:"",children:[t,Object(O.jsx)("input",{value:a,placeholder:t,onChange:n,type:"tel",name:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})})},g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=m.a.generate(),e.numberInputId=m.a.generate(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;console.log(a,r),e.setState(Object(j.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:f.a.ContactFormWrapper,onSubmit:this.handleSubmit,children:[Object(O.jsx)(v,{nameInputId:this.nameInputId,title:"name",value:this.state.name,onChange:this.handleChange}),Object(O.jsx)(C,{title:"number",value:this.state.number,onChange:this.handleChange}),Object(O.jsx)("button",{type:"submit",children:"Send"})]})}}]),n}(a.Component);g.defaultProps={};var x=g,S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.handleDeleteContact,t=this.props.contacts;return Object(O.jsx)("div",{className:"ContactListWrapper",children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(O.jsxs)("li",{children:[a," ",r,Object(O.jsx)("button",{type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})}}]),n}(a.Component);S.defaultProps={};var y=S,A=n(13),F=n.n(A),I=function(e){var t=e.children;return Object(O.jsx)("div",{className:F.a.ContainerWrapper,children:t})},k=function(e){var t=e.value,n=e.handleFilterChange;return Object(O.jsx)("div",{className:"FilterWrapper",children:Object(O.jsx)("form",{action:"",children:Object(O.jsxs)("label",{htmlFor:"",children:[Object(O.jsx)("p",{children:" Find contacts by name"}),Object(O.jsx)("input",{placeholder:"Find contacts",onChange:n,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})})};k.defaultProps={};var w=k,z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.handleSubmit=function(t){e.setState(Object(s.a)({},t)),e.setState({name:"",number:""})},e.handleFilterChange=function(t){e.setState({filter:t.currentTarget.value})},e.handleDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleAddContact=function(t){var n=Object(s.a)({id:m.a.generate()},t);e.state.contacts.some((function(e){return e.name===t.name}))?alert("".concat(t.name," already exists")):(e.setState((function(e){var t=e.contacts;return{contacts:[n].concat(Object(o.a)(t))}})),e.setState({name:"",number:""}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;n!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.filter,r=e.contacts.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(I,{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(x,{name:t,number:n,handleSubmit:this.handleSubmit,onSubmit:this.handleAddContact}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(w,{value:a,handleFilterChange:this.handleFilterChange}),Object(O.jsx)(y,{contacts:r,handleDeleteContact:this.handleDeleteContact})]})})}}]),n}(a.Component);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b20e6c4f.chunk.js.map