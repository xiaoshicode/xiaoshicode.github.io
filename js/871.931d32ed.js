"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[871],{15871:function(a,t,s){s.r(t),s.d(t,{default:function(){return _}});var e=function(){var a=this,t=a._self._c;return t("div",[t("typeNav"),t("div",{staticClass:"main"},[t("div",{staticClass:"py-container"},[t("div",{staticClass:"bread"},[a._m(0),t("ul",{staticClass:"fl sui-tag"},[a.searchParams.categoryName?t("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.categoryName)),t("i",{on:{click:a.removeCategoryName}},[a._v("×")])]):a._e(),a.searchParams.keyword?t("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.keyword)),t("i",{on:{click:a.removeKeyword}},[a._v("×")])]):a._e(),a.searchParams.trademark?t("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.trademark.split(":")[1])),t("i",{on:{click:a.removeTradeMark}},[a._v("×")])]):a._e(),a._l(a.searchParams.props,(function(s,e){return t("li",{key:e,staticClass:"with-x"},[a._v(" "+a._s(s.split(":")[1])),t("i",{on:{click:function(t){return a.removeAttr(e)}}},[a._v("×")])])}))],2)]),t("SearchSelector",{on:{trademarkInfo:a.trademarkInfo,attrInfo:a.attrInfo}}),t("div",{staticClass:"details clearfix"},[t("div",{staticClass:"sui-navbar"},[t("div",{staticClass:"navbar-inner filter"},[t("ul",{staticClass:"sui-nav"},[t("li",{class:{active:a.isOne},on:{click:function(t){return a.changeOrder("1")}}},[t("a",[a._v("综合"),t("span",{directives:[{name:"show",rawName:"v-show",value:a.isOne,expression:"isOne"}],staticClass:"iconfont",class:{"icon-jiantou_xiangshang":a.isAsc,"icon-jiantou_xiangxia":a.isDesc}})])]),t("li",{class:{active:a.isTwo},on:{click:function(t){return a.changeOrder("2")}}},[t("a",[a._v("价格"),t("span",{directives:[{name:"show",rawName:"v-show",value:a.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-jiantou_xiangshang":a.isAsc,"icon-jiantou_xiangxia":a.isDesc}})])])])])]),t("div",{staticClass:"goods-list"},[t("ul",{staticClass:"yui3-g"},a._l(a.goodsList,(function(s,e){return t("li",{key:s.id,staticClass:"yui3-u-1-5"},[t("div",{staticClass:"list-wrap"},[t("div",{staticClass:"p-img"},[t("router-link",{attrs:{to:`/detail/${s.id}`}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.defaultImg,expression:"good.defaultImg"}]})])],1),t("div",{staticClass:"price"},[t("strong",[t("em",[a._v("¥")]),t("i",[a._v(a._s(s.price)+".00")])])]),t("div",{staticClass:"attr"},[t("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[a._v(a._s(s.title))])]),a._m(1,!0),a._m(2,!0)])])})),0)]),t("Pagination",{attrs:{pageNo:a.searchParams.pageNo,pageSize:a.searchParams.pageSize,total:a.total,continues:5},on:{getPageNo:a.getPageNo}})],1)],1)])],1)},r=[function(){var a=this,t=a._self._c;return t("ul",{staticClass:"fl sui-breadcrumb"},[t("li",[t("a",{attrs:{href:"#"}},[a._v("全部结果")])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"commit"},[t("i",{staticClass:"command"},[a._v("已有"),t("span",[a._v("2000")]),a._v("人评价")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"operate"},[t("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[a._v("加入购物车")]),t("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[a._v("收藏")])])}],i=function(){var a=this,t=a._self._c;return t("div",{staticClass:"clearfix selector"},[t("div",{staticClass:"type-wrap logo"},[t("div",{staticClass:"fl key brand"},[a._v("品牌")]),t("div",{staticClass:"value logos"},[t("ul",{staticClass:"logo-list"},a._l(a.trademarkList,(function(s,e){return t("li",{key:s.tmId,on:{click:function(t){return a.tradeMarkHandler(s)}}},[a._v(a._s(s.tmName)+"（SONY）")])})),0)]),a._m(0)]),a._l(a.attrsList,(function(s,e){return t("div",{key:s.attrId,staticClass:"type-wrap"},[t("div",{staticClass:"fl key"},[a._v(a._s(s.attrName))]),t("div",{staticClass:"fl value"},[t("ul",{staticClass:"type-list"},a._l(s.attrValueList,(function(e,r){return t("li",{key:r,on:{click:function(t){return a.attrInfo(s,e)}}},[t("a",[a._v(a._s(e))])])})),0)]),t("div",{staticClass:"fl ext"})])}))],2)},c=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"ext"},[t("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[a._v("多选")]),t("a",{attrs:{href:"javascript:void(0);"}},[a._v("更多")])])}],o=s(63822),n={name:"SearchSelector",computed:{...(0,o.Se)(["trademarkList","attrsList"])},methods:{tradeMarkHandler(a){this.$emit("trademarkInfo",a)},attrInfo(a,t){this.$emit("attrInfo",a,t)}}},l=n,h=s(1001),d=(0,h.Z)(l,i,c,!1,null,"1b83182a",null),u=d.exports,m={name:"Search",data(){return{searchParams:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:10,props:[],trademark:""}}},components:{SearchSelector:u},beforeMount(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},mounted(){this.getDate()},computed:{...(0,o.Se)(["goodsList"]),isOne(){return 0!=this.searchParams.order.includes("1")},isTwo(){return 0!=this.searchParams.order.includes("2")},isAsc(){return 0!=this.searchParams.order.includes("asc")},isDesc(){return 0!=this.searchParams.order.includes("desc")},...(0,o.rn)({total:a=>a.search.searchList.total})},methods:{getDate(){this.$store.dispatch("getSearchList",this.searchParams)},removeCategoryName(){this.searchParams.categoryName=void 0,this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0,this.$router.push(this.$route.path)},removeKeyword(){this.searchParams.keyword=void 0,this.$bus.$emit("clear"),this.$route.query&&this.$router.push({name:"search",query:this.$route.query})},trademarkInfo(a){this.searchParams.trademark=`${a.tmId}:${a.tmName}`,this.getDate()},removeTradeMark(){this.searchParams.trademark=void 0,this.getDate()},attrInfo(a,t){let s=`${a.attrId}:${t}:${a.attrName}`;-1==this.searchParams.props.indexOf(s)&&(this.searchParams.props.push(s),this.getDate())},removeAttr(a){this.searchParams.props.splice(a,1),this.getDate()},changeOrder(a){this.searchParams.order;let t=this.searchParams.order.split(":")[0],s=this.searchParams.order.split(":")[1],e="";e=a==t?`${t} : ${"desc"==s?"asc":"desc"}`:`${a}:desc`,this.searchParams.order=e,this.getDate()},getPageNo(a){this.searchParams.pageNo=a,this.getDate()}},watch:{$route(a,t){Object.assign(this.searchParams,this.$route.query,this.$route.params),this.getDate(),this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0}}},v=m,g=(0,h.Z)(v,e,r,!1,null,"636ff975",null),_=g.exports}}]);