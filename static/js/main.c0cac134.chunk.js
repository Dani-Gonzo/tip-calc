(this["webpackJsonptip-calc"]=this["webpackJsonptip-calc"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(7),r=a.n(c),i=(a(14),a(1)),o=a(2),u=a(4),s=a(3),p=a(5),m=a(8),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={billAmt:"",serviceQual:0,numPeople:"",total:""},a.calculateTip=function(){var e=a.state.billAmt,t=a.state.serviceQual,l=a.state.numPeople;if(""!==e&&0!=t){(""===l||l<=1)&&(l=1);var n=e*t/l;n=(n=Math.round(100*n)/100).toFixed(2),a.setState({total:n})}else alert("Please enter values")},a.changeHandler=function(e){var t=e.target.id,l=e.target.value;a.setState(Object(m.a)({},t,l))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t;return this.state.numPeople>1&&(e=n.a.createElement("small",{id:"each"}," each")),this.state.total&&(t=n.a.createElement("div",{id:"totalTip"},n.a.createElement("sup",null,"$"),n.a.createElement("span",{id:"tip"},this.state.total),e)),n.a.createElement("div",{id:"container"},n.a.createElement("h1",null,"Tip Calculator"),n.a.createElement("div",{id:"calculator"},n.a.createElement("form",null,n.a.createElement("p",null,"How much was your bill?"),n.a.createElement("p",null,"$ ",n.a.createElement("input",{id:"billAmt",type:"text",onChange:this.changeHandler,placeholer:"Bill Amount"})),n.a.createElement("p",null,"How was your service?"),n.a.createElement("p",null,n.a.createElement("select",{id:"serviceQual",value:this.state.serviceQual,onChange:this.changeHandler},n.a.createElement("option",{disabled:!0,value:"0"},"-- Choose an Option --"),n.a.createElement("option",{value:"0.25"},"25% Outstanding"),n.a.createElement("option",{value:"0.2"},"20% Good"),n.a.createElement("option",{value:"0.15"},"15% Okay"),n.a.createElement("option",{value:"0.10"},"10% Bad"),n.a.createElement("option",{value:"0.05"},"5% Terrible")))),n.a.createElement("p",null,"How many people are sharing the bill?"),n.a.createElement("p",null,n.a.createElement("input",{id:"numPeople",type:"text",onChange:this.changeHandler,placeholder:"Number of People"})),n.a.createElement("button",{type:"button",id:"calculate",onClick:this.calculateTip},"Calculate Tip")),t)}}]),t}(l.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(h,null))}}]),t}(l.Component);r.a.render(n.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c0cac134.chunk.js.map