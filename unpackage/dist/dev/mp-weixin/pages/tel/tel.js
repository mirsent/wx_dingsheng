require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{19:function(t,e,a){"use strict";var s=o(a(1)),n=o(a(20));function o(t){return t&&t.__esModule?t:{default:t}}new s.default(n.default).$mount()},20:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(22),n=a.n(s),o=a(23),i=!1;var c=function(t){i||a(21)},l=a(0)(n.a,o.a,c,null,null);l.options.__file="F:\\project\\DingSheng\\pages\\tel\\tel.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] tel.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},21:function(t,e){},22:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{logo:"../../static/image/logo_s.png",name:"鼎盛润泽",contact:"",wx:"",tel:"",fax:"",location:"",isShow:!1}},onLoad:function(e){var a=this;t.showLoading(),t.request({url:this.$requestUrl+"get_company_info",method:"GET",success:function(t){var e=t.data.data;a.contact=e.company_contact,a.wx=e.company_wx_code,a.tel=e.company_tel,a.fax=e.company_fax,a.location=e.company_location},fail:function(){},complete:function(){t.hideLoading()}})},methods:{makePhoneCall:function(){t.makePhoneCall({phoneNumber:this.tel})},showTelImg:function(){this.isShow=!0},closeTelImg:function(){this.isShow=!1}},onShareAppMessage:function(){return{title:"鼎盛润泽--联系方式",path:"/pages/tel/tel"}}}}).call(e,a(2).default)},23:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container"},[a("view",{staticClass:"top"},[a("image",{staticClass:"logo",attrs:{src:t.logo}}),a("text",{staticClass:"name fs-minor"},[t._v(t._s(t.contact))]),a("image",{staticClass:"code",attrs:{src:t.wx,eventid:"U26-0"},on:{tap:t.showTelImg}})]),a("view",{staticClass:"tel fs-head"},[t._m(0),a("view",{staticClass:"tel-item"},[a("text",[t._v("联系方式")]),a("text",{attrs:{eventid:"uVo-1"},on:{tap:t.makePhoneCall}},[t._v(t._s(t.tel))])]),a("view",{staticClass:"tel-item"},[a("text",[t._v("传真")]),a("text",[t._v(t._s(t.fax))])])]),a("view",{staticClass:"map"},[a("view",{staticClass:"location fs-head"},[t._v("\n\t\t\t"+t._s(t.location)+"\n\t\t")]),t._m(1)]),t.isShow?a("view",{staticClass:"img-box",attrs:{eventid:"UcH-2"},on:{tap:t.closeTelImg}},[a("image",{attrs:{src:t.wx}})]):t._e()])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"tel-item"},[e("image",{attrs:{src:"../../static/image/icon_tel.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"img"},[e("image",{attrs:{src:"../../static/image/map.png",mode:"widthFix"}})])}]};e.a=n}},[19]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tel/tel.js.map