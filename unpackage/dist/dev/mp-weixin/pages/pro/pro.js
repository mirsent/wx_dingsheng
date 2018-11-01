require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],[,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=n(i(0)),a=n(i(15));function n(t){return t&&t.__esModule?t:{default:t}}new s.default(a.default).$mount()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(17),a=i.n(s),n=i(18),r=!1;var o=function(t){r||i(16)},l=i(1)(a.a,n.a,o,null,null);l.options.__file="F:\\project\\DingSheng\\pages\\pro\\pro.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] pro.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{bannerList:[],indicatorDots:!0,autoplay:!0,interval:5e3,duration:1e3,typeFixed:!1,typeList:["全部"],typeIndex:0,proList:[]}},onLoad:function(e){var i=this;t.request({url:this.$requestUrl+"get_pro_type",method:"GET",success:function(t){i.typeList=t.data.data},fail:function(){}}),t.request({url:this.$requestUrl+"get_pro_banner",method:"GET",success:function(t){i.bannerList=t.data.data},fail:function(){}}),this.getListInfo()},methods:{getListInfo:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.showLoading(),t.request({url:this.$requestUrl+"get_pro_list",method:"GET",data:{type:i},success:function(t){e.proList=t.data.data},fail:function(){},complete:function(){t.hideLoading()}})},toDetail:function(e){var i=e.currentTarget.dataset.id;t.navigateTo({url:"../pro_detail/pro_detail?proid="+i})},typeChange:function(t){this.typeIndex=t.detail.value;var e=this.typeList[t.detail.value];this.getListInfo(e)},scroll:function(t){var e=t.detail.scrollTop;this.typeFixed=e>=150}},onShareAppMessage:function(){return{title:"鼎盛润泽--产品展示",path:"/pages/pro/pro"}}}}).call(e,i(2).default)},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"container"},[i("scroll-view",{staticStyle:{height:"100vh"},attrs:{"scroll-y":"",eventid:"h0S-1"},on:{scroll:t.scroll}},[i("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.bannerList,function(t,e){return i("swiper-item",{key:t,attrs:{mpcomid:"HjS-0-"+e}},[i("image",{staticStyle:{width:"100%"},attrs:{src:t.banner_url,mode:"scaleToFill"}})])})),i("view",{staticClass:"type uni-flex",class:{"type-fixed":t.typeFixed}},[i("view",{staticClass:"left uni-flex"},[i("image",{attrs:{src:"../../static/image/tab_pro.png"}}),i("text",{staticClass:"fs-head"},[t._v("产品")])]),i("view",{staticClass:"right uni-flex"},[i("picker",{staticClass:"picker-item",attrs:{mode:"selector",value:t.typeIndex,range:t.typeList,eventid:"8Wk-0"},on:{change:t.typeChange}},[i("view",{staticClass:"fs-head pciker-text"},[t._v(t._s(t.typeList[t.typeIndex])),i("image",{attrs:{src:"../../static/image/icon_list.png"}})])])],1)]),i("view",{staticClass:"uni-list"},[t._l(t.proList,function(e,s){return i("view",{key:s,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("view",{staticClass:"uni-media-list"},[i("image",{staticClass:"uni-media-list-logo",attrs:{src:e.product_url}}),i("view",{staticClass:"uni-media-list-body"},[i("view",{staticClass:"uni-media-list-text-top fs-head"},[t._v(t._s(e.product_title))]),i("view",{staticClass:"uni-media-list-text-bottom fs-part"},[t._v(t._s(e.product_brief))])])])])}),0==t.proList.length?i("view",{staticClass:"none"},[t._v("\n\t\t\t\t暂无产品信息...\n\t\t\t")]):t._e()],2)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a}],[14]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pro/pro.js.map