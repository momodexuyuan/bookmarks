webpackJsonp([0],[,,function(e,t,n){"use strict";var r=n(0),o=n(15),a=n(12),i=n.n(a);r.default.use(o.a),t.a=new o.a({routes:[{path:"/",name:"Hello",component:i.a}]})},function(e,t){},function(e,t){},,function(e,t,n){n(11);var r=n(1)(n(7),n(14),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{tree:{}}},created:function(){var e=this;chrome.bookmarks.getTree(function(t){console.log(t),e.tree=t[0].children})},methods:{search:function(e){var t=this;chrome.bookmarks.search(e,function(e){console.log(e),t.tree=e[0].children})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(6),a=n.n(o),i=n(2),s=n(5),c=n.n(s),u=n(3),l=(n.n(u),n(4));n.n(l);r.default.use(c.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:i.a,render:function(e){return e(a.a)}})},function(e,t){},function(e,t){},function(e,t,n){n(10);var r=n(1)(n(8),n(13),"data-v-1ff23824",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("mu-appbar",{staticClass:"topbar",attrs:{title:"便捷书签"}},[n("mu-text-field",{staticClass:"appbar-search-field",staticStyle:{"margin-bottom":"0"},attrs:{icon:"search",hintText:"请输入搜索内容"},on:{change:e.search},slot:"right"})],1),e._v(" "),n("router-view"),e._v(" "),n("div",{staticClass:"content"},[n("mu-list",e._l(e.tree,function(t,r){return n("mu-list-item",{key:r,attrs:{title:t.title,toggleNested:t.children.length>0,open:!1}},e._l(t.children,function(r,o){return t.children.length>0?n("mu-list-item",{key:o,attrs:{title:r.title,open:!1},slot:"nested"}):e._e()}))}))],1)],1)},staticRenderFns:[]}}],[9]);
//# sourceMappingURL=app.18d0a8de0edbcd5503b1.js.map