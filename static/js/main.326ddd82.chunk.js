(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{20:function(e,t,a){e.exports={container:"Cards_container__2pBzB",infected:"Cards_infected__144J7",recovered:"Cards_recovered__FIbby",deaths:"Cards_deaths__10MOG"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(68),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(69),d=a(70),p=a(82),f=a(83),m=a(29),v=a(71),h=a(30),b=a.n(h),y="https://covid19.mathdro.id/api",_=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y,t&&(a="".concat(y,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(72),x=a.n(C),O=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(m.a)(l,2),p=(d[0],d[1]);Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(v.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:x.a.container},f)},j=a(230),w=a(229),k=a(73),N=a.n(k),S=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:N.a.formControl},r.a.createElement(w.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"World Wide"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},D=a(228),I=a(226),B=a(231),U=a(227),T=a(78),V=a.n(T),A=a(79),J=a.n(A),G=a(80),M=a.n(G),P=function(e){var t=e.className,a=e.cardTitle,n=e.value,c=e.lastUpdate,o=e.cardSubtitle;return r.a.createElement(I.a,{item:!0,xs:12,md:3,component:B.a,className:J()(M.a.card,t)},r.a.createElement(U.a,null,r.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0},a),r.a.createElement(D.a,{variant:"h5",component:"h2"},r.a.createElement(V.a,{start:0,end:n,duration:2.75,separator:","})),r.a.createElement(D.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(D.a,{variant:"body2",component:"p"},o)))},R=a(20),W=a.n(R),z=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:W.a.container},r.a.createElement(D.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Global"),r.a.createElement(I.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(P,{className:W.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Number of active cases from COVID-19."}),r.a.createElement(P,{className:W.a.recovered,cardTitle:"Recovered",value:n.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),r.a.createElement(P,{className:W.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."}))):"Loading..."},F=a(41),H=a.n(F),L=a(81),Z=a.n(L),q=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:Z.a,alt:"COVID-19"}),r.a.createElement(z,{data:t}),r.a.createElement(S,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},41:function(e,t,a){e.exports={container:"App_container__30HoN",image:"App_image__2avuy"}},72:function(e,t,a){e.exports={container:"Chart_container__3-2lj"}},73:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__Befc0"}},80:function(e,t,a){e.exports={card:"Card_card__1TZ5x"}},81:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},85:function(e,t,a){e.exports=a(208)}},[[85,1,2]]]);
//# sourceMappingURL=main.326ddd82.chunk.js.map