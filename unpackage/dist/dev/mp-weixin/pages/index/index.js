require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],[,,,,,,,,,function(e,t,n){"use strict";var a=s(n(0)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}new a.default(o.default).$mount()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),o=n.n(a),s=n(13),i=!1;var l=function(e){i||n(11)},c=n(1)(o.a,s.a,l,null,null);c.options.__file="F:\\project\\DingSheng\\pages\\index\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},function(e,t){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"",nameEN:"",location:"",tel:"",fax:""}},onLoad:function(t){var n=this;e.showLoading(),e.request({url:this.$requestUrl+"get_company_info",method:"GET",success:function(e){var t=e.data.data;n.name=t.company_name,n.nameEN=t.company_name_en,n.location=t.company_location,n.tel=t.company_tel,n.fax=t.company_fax},fail:function(){},complete:function(){e.hideLoading()}})},onShareAppMessage:function(){return{title:"天津鼎盛润泽商贸有限公司",path:"/pages/index/index"}},methods:{makePhoneCall:function(){e.makePhoneCall({phoneNumber:this.tel})}}}}).call(t,n(2).default)},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"container"},[e._m(0),n("view",{staticClass:"info fs-part"},[n("text",{staticClass:"name fs-head"},[e._v(e._s(e.name))]),n("text",{staticClass:"name-en"},[e._v(e._s(e.nameEN))]),n("text",{staticClass:"location"},[e._v(e._s(e.location))]),n("view",{staticClass:"tel"},[e._v("电话: "),n("text",{attrs:{eventid:"i7Y-0"},on:{tap:e.makePhoneCall}},[e._v(e._s(e.tel))]),e._v(" 传真: "+e._s(e.fax))])])])};a._withStripped=!0;var o={render:a,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/image/logo.png",mode:"aspectFit"}})])}]};t.a=o}],[9]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map