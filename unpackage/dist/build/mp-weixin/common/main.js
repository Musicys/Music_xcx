(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"14ae":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("7677"),r=t("b8bb"),c={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},data:function(){return{}},methods:{userlogo:function(){e.login({provider:"weixin",onlyAuthorize:!0,success:function(e){var n=e.code;console.log("用户",n),(0,r.userlodin)(n).then((function(e){(0,o.setStorageSync)("messge",e),console.log("token",(0,o.getStorageSync)("messge").access_token),console.log("openid",(0,o.getStorageSync)("messge").openid)}))},fail:function(e){}})}},mounted:function(){this.userlogo()}};n.default=c}).call(this,t("543d")["default"])},"200a":function(e,n,t){"use strict";t.r(n);var o=t("2600");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("a0f9");var c=t("f0c5"),u=Object(c["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);n["default"]=u.exports},2600:function(e,n,t){"use strict";t.r(n);var o=t("14ae"),r=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=r.a},"68e3":function(e,n,t){"use strict";(function(e,n){var o=t("4ea4"),r=o(t("9523"));t("fd4b");var c=o(t("200a")),u=o(t("66fd"));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}t("9934"),e.__webpack_require_UNI_MP_PLUGIN__=t,u.default.config.productionTip=!1,c.default.mpType="app";var a=new u.default(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c.default));n(a).$mount()}).call(this,t("bc2e")["default"],t("543d")["createApp"])},6968:function(e,n,t){},a0f9:function(e,n,t){"use strict";var o=t("6968"),r=t.n(o);r.a}},[["68e3","common/runtime","common/vendor"]]]);