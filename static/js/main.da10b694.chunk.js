(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),i=(n(14),n(2)),s=n(3),b=n(5),d=n(4),u=n(9),l=n.n(u),j=n(6),h=n.n(j),p=n(0),O=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,e=t.onLeaveFeedback;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:h.a.btn,type:"button",onClick:e,children:"Good"}),Object(p.jsx)("button",{className:h.a.btn,type:"button",onClick:e,children:"Neutral"}),Object(p.jsx)("button",{className:h.a.btn,type:"button",onClick:e,children:"Bad"})]})}}]),n}(a.Component),v=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,a=t.bad,c=t.total,o=void 0===c?0:c,r=t.positivePercentage,i=void 0===r?0:r;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:["Good: ",e]}),Object(p.jsxs)("p",{children:["Neutral: ",n," "]}),Object(p.jsxs)("p",{children:["Bad: ",a]}),Object(p.jsxs)("p",{children:["Total: ",o]}),Object(p.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]})}}]),n}(a.Component),f=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{children:e}),n]})},g=function(t){var e=t.message;return Object(p.jsx)("p",{children:e})},x=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.HandlerClick=function(e){"Good"===e.target.textContent&&t.setState((function(t){return{good:t.good+1}})),"Neutral"===e.target.textContent&&t.setState((function(t){return{neutral:t.neutral+1}})),"Bad"===e.target.textContent&&t.setState((function(t){return{bad:t.bad+1}}))},t}return Object(s.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.countTotalFeedback();return console.log(t),(t?this.state.good/t*100:0).toFixed(2)}},{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(p.jsxs)("div",{className:l.a.App,children:[Object(p.jsx)(f,{title:"Please leave feedback",children:Object(p.jsx)(O,{onLeaveFeedback:this.HandlerClick})}),Object(p.jsx)(f,{title:"Statistics",children:this.countTotalFeedback()?Object(p.jsx)(v,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(g,{message:"No feedback given"})})]})}}]),n}(a.Component);n(16);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={btn:"FeedbackOptions_btn__1b7Ig"}},9:function(t,e,n){t.exports={App:"App_App__2Q1dD"}}},[[17,1,2]]]);
//# sourceMappingURL=main.da10b694.chunk.js.map