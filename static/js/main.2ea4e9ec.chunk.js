(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={list:"Statistics_list__1IGB7",item:"Statistics_item__1HK-Q"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__2capc",box:"FeedbackOptions_box__3fKR-"}},,,,,,function(e,t,a){e.exports={container:"Container_container__1u5rK"}},function(e,t,a){e.exports={theme:"Section_theme__3TuOn"}},function(e,t,a){e.exports={text:"Notification_text__1Eyht"}},,,function(e,t,a){e.exports=a(23)},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=a(6),s=a(7),l=a(8),u=a(13),d=a(12),m=a(9),b=a.n(m),p=function(e){var t=e.children;return r.a.createElement("div",{className:b.a.container},t)},v=a(1),f=a.n(v),g=a(3),k=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement("div",{className:g.box},t.map((function(e){return r.a.createElement("button",{type:"button",name:e,key:e,onClick:a,className:g.button},e)})))};k.protoTypes={options:f.a.node.isRequired,onLeaveFeedback:f.a.func.isRequired};var E=k,h=a(2),_=a.n(h),F=function(e){var t=e.good,a=e.bad,n=e.neutral,o=e.total,i=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:_.a.list},r.a.createElement("li",{className:_.a.item},"Good: ",t),r.a.createElement("li",{className:_.a.item},"Neutural: ",n),r.a.createElement("li",{className:_.a.item},"Bad: ",a),r.a.createElement("li",{className:_.a.item},"Total: ",o()),r.a.createElement("li",{className:_.a.item},"Positive feedback: ",i(),"%")))};F.protoTypes={good:f.a.string.isRequired,bad:f.a.string.isRequired,neutral:f.a.string.isRequired,total:f.a.func.isRequired,positivePercentage:f.a.func.isRequired};var N=F,x=a(10),y=function(e){var t=e.children,a=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:x.theme},a),r.a.createElement("div",null,t))};y.protoTypes={children:f.a.node.isRequired,title:f.a.string.isRequired};var T=y,R=a(11);Notification.propTypes={message:f.a.string.isRequired};var q=function(e){var t=e.message;return r.a.createElement("p",{className:R.text},t)},P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.onLeaveFeedback=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(c.a)({},a,e[a]+1)})),e.countTotalFeedback()},e.countTotalFeedback=function(){var t=e.state;return t.neutral+t.bad+t.good},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return t?Math.round(t/a*100):t?void 0:0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.state,a=t.good,n=t.neutral,o=t.bad;return r.a.createElement(p,null,r.a.createElement(T,{title:"Please live feedback"},r.a.createElement(E,{options:e,onLeaveFeedback:this.onLeaveFeedback})),r.a.createElement(T,{title:"Statistics"},this.countTotalFeedback()?r.a.createElement(N,{good:a,neutral:n,bad:o,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):r.a.createElement(q,{message:"No feedback given"})))}}]),a}(n.Component);P.defaultProps={good:0,neutral:0,bad:0};var O=P;a(21),a(22);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2ea4e9ec.chunk.js.map