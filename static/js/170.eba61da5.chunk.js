"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{170:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,c,a,s,o=n(861),i=n(885),u=n(687),l=n.n(u),p=n(689),d=n(791),h=n(228),f=n(168),v=n(934),x=n(731),g=(0,v.Z)(x.OL)(r||(r=(0,f.Z)(["\n  text-decoration: none;\n  font-weight: 500;\n"]))),m=(0,v.Z)(x.OL)(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  &.active {\n    font-weight: 500;\n    text-decoration: underline #0dd10d;\n  }\n"]))),j=v.Z.div(a||(a=(0,f.Z)(["\n  display: flex;\n  margin-top: 10px;\n"]))),w=v.Z.div(s||(s=(0,f.Z)(["\n  display: block;\n  margin-left: 20px;\n  border-bottom: 1px solid black;\n"]))),k=n(184),y=function(){var e,t,n=(0,p.UO)().movieId,r=(0,d.useState)(null),c=(0,i.Z)(r,2),a=c[0],s=c[1],u="https://image.tmdb.org/t/p/w300",f=null!==(e=null===(t=(0,p.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,d.useEffect)((function(){function e(){return e=(0,o.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.TP)(t);case 3:n=e.sent,s(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),e.apply(this,arguments)}!function(t){e.apply(this,arguments)}(n)}),[n]),(0,k.jsx)("div",{children:a&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g,{to:f,children:" \u2190 Go back"}),(0,k.jsxs)(j,{children:[null===a.poster_path?(0,k.jsx)("img",{src:"".concat(u).concat("/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg"),alt:a.title}):(0,k.jsx)("img",{src:"".concat(u).concat(a.poster_path),alt:a.title}),(0,k.jsxs)(w,{children:[(0,k.jsxs)("h2",{children:[a.title," ",""===a.release_date||void 0===a.release_date?"(No date)":"(".concat(a.release_date.slice(0,4),")")]}),(0,k.jsxs)("p",{children:["User score: ",Math.floor(10*a.vote_average),"%"]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:a.overview}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:0===a.genres.length?"No genres":"".concat(a.genres.map((function(e){return e.name})).join(", "),".")})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(m,{to:"cast",state:{from:f},children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(m,{to:"reviews",state:{from:f},children:"Reviews"})})]}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)("p",{children:"Loading..."}),children:(0,k.jsx)(p.j3,{})})]})]})})}},228:function(e,t,n){n.d(t,{HG:function(){return p},Hg:function(){return u},M1:function(){return v},TP:function(){return h},tx:function(){return g}});var r=n(861),c=n(687),a=n.n(c),s=n(44),o="https://api.themoviedb.org/3",i="a428d57ec2e1a0989962c4fdb6383b23";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/search/movie?api_key=").concat(i,"&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=170.eba61da5.chunk.js.map