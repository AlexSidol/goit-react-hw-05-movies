"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{151:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(87),a=n(689),c="TrendingList_movie__aEx-2",u="TrendingList_movie__wrapper__WD5pp",i="TrendingList_movie__title__cEkTw",o="TrendingList_movie__img__Gopom",s=n(184),p=function(t){var e=t.movies,n=(0,a.TH)();return(0,s.jsx)("ul",{className:c,children:e.map((function(t){return(0,s.jsx)("li",{className:u,children:(0,s.jsxs)(r.rU,{to:"/movies/".concat(t.id),state:{from:n},children:[(0,s.jsx)("h2",{className:i,children:t.title}),(0,s.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})]})},t.id)}))})}},134:function(t,e,n){n.r(e);var r=n(439),a=n(87),c=n(791),u=n(963),i=n(768),o=n(151),s=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],p=e[1],f=(0,a.lr)(),_=(0,r.Z)(f,2),l=_[0],m=_[1];return(0,c.useEffect)((function(){var t=l.get("query");t&&u.z1(t).then((function(t){return p(t)}))}),[l]),(0,s.jsxs)("div",{className:i.Z.search__blok,children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m({query:t.target[0].value})},children:[(0,s.jsx)("input",{type:"text",placeholder:"Search...",autoComplete:"off",autoFocus:!0}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),n.length>0&&(0,s.jsx)(o.Z,{movies:n})]})}},963:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return p},q5:function(){return _},z1:function(){return s},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=fd58d78770f5e002deebabf4164f4fc6",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie".concat(i,"&query=").concat(e,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e).concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},768:function(t,e){e.Z={top:"HomePage_top__hJ9i5",search__blok:"HomePage_search__blok__fTw9U",movie__wrapper:"HomePage_movie__wrapper__JZ94-",link:"HomePage_link__UCsQr",go__back:"HomePage_go__back__SXXz7"}}}]);
//# sourceMappingURL=134.00430621.chunk.js.map