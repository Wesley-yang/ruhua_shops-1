(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shops-xieyi-xieyi"],{"0958":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{type:"",content:""}},onLoad:function(n){this.type=n.type,this._load()},methods:{_load:function(){var n=this;this.$api.http.get("index/get_file?type="+this.type).then((function(t){n.content=t}))}}};t.default=e},4653:function(n,t,r){"use strict";var e;r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return e}));var i=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-uni-view",{staticClass:"xieyi"},[r("v-uni-rich-text",{attrs:{nodes:n.content}})],1)},a=[]},"724a":function(n,t,r){"use strict";var e=r("bd35"),i=r.n(e);i.a},bd35:function(n,t,r){var e=r("c5bc");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=r("4f06").default;i("be193e36",e,!0,{sourceMap:!1,shadowMode:!1})},c5bc:function(n,t,r){var e=r("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.xieyi[data-v-339a9a79]{font-size:14px;padding:15px}.xieyi .title[data-v-339a9a79]{padding:15px 10px;text-align:center;font-size:18px;font-weight:600}.xieyi .con[data-v-339a9a79]{padding:10px}',""]),n.exports=t},ccb2:function(n,t,r){"use strict";r.r(t);var e=r("4653"),i=r("ed8f");for(var a in i)"default"!==a&&function(n){r.d(t,n,(function(){return i[n]}))}(a);r("724a");var c,o=r("f0c5"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"339a9a79",null,!1,e["a"],c);t["default"]=s.exports},ed8f:function(n,t,r){"use strict";r.r(t);var e=r("0958"),i=r.n(e);for(var a in e)"default"!==a&&function(n){r.d(t,n,(function(){return e[n]}))}(a);t["default"]=i.a}}]);