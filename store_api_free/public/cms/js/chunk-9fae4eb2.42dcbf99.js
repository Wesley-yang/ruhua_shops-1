(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9fae4eb2"],{"2f21":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop_nav"},[s("div",{staticClass:"top-title"},[t._v("商家管理")]),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.act},on:{open:t.handleOpen,close:t.handleClose}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("span",[t._v("商家")])]),s("el-menu-item",{attrs:{index:"1-1"},on:{click:t.jump_to_a}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("商家列表")])]),s("el-menu-item",{attrs:{index:"1-2"},on:{click:t.jump_to_assistant}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 店员管理")])])],2),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("span",[t._v("商品")])]),s("el-menu-item",{attrs:{index:"2-1"},on:{click:t.jump_pro_list}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("商品列表")])]),s("el-menu-item",{attrs:{index:"2-2"},on:{click:t.jump_pro_category}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("商品分类")])])],2)],1)],1)},o=[],r={data:function(){return{act:""}},props:{ac:String},mounted:function(){this.act=this.ac},methods:{jump_to_a:function(){this.$router.push({path:"/shops/shop_list"})},jump_to_b:function(){this.$router.push({path:"/shops/shop_approve"})},jump_to_assistant:function(){this.$router.push({path:"/shops/assistant_list"})},jump_pro_list:function(){this.$router.push({path:"/shops/pro_list"})},jump_pro_category:function(){this.$router.push({path:"/shops/pro_category"})},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleselect:function(t,e){this.act=t,localStorage.setItem("act",t)}}},i=r,n=s("c701"),l=Object(n["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},"609b":function(t,e,s){"use strict";s("c4fd")},"73f5":function(t,e,s){"use strict";var a=s("981f"),o=s("a49b"),r=s("e1fd"),i=a["a"].service,n=function(){Object(r["Message"])({message:"演示版",type:"error",duration:5e3})};e["a"]={getAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({url:"/shops/cms/store_all",method:"post",data:t})},add_store:function(t){if(!o["b"])return i({url:"shops/cms/store_add",method:"post",data:t});n()},add_assistant:function(t){if(!o["b"])return i({url:"shops/cms/assistant_add",method:"post",data:t});n()},close_store:function(t){if(!o["b"])return i({url:"shops/cms/stop_store",method:"put",data:t});n()},open_store:function(t){if(!o["b"])return i({url:"shops/cms/recover_store",method:"put",data:t});n()}}},c4fd:function(t,e,s){},e313:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"assistant bg-white"},[s("el-container",{staticClass:"container"},[s("el-aside",{staticClass:"not-print bg-white erbian",attrs:{width:"160px"}},[s("Nav",{attrs:{ac:"1-2"}})],1),s("el-main",{staticClass:"main"},[[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v("商家")]),s("el-breadcrumb-item",[t._v("店员管理")])],1),s("div",{staticClass:"H10"}),s("div",{staticClass:"zhang t_l "},[s("div",{staticStyle:{"padding-bottom":"20px"}},[s("el-row",[s("el-col",{attrs:{span:1}},[s("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.back}},[t._v("返回")])],1)],1)],1),s("div",{staticClass:"widt"},[s("el-form",{ref:"box-a",attrs:{rules:t.rules,model:t.form,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"店员姓名",prop:"username"}},[s("el-input",{attrs:{width:"60%"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),s("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[s("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",t._n(e))},expression:"form.mobile"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("el-form-item",{attrs:{label:"所属门店",prop:"shop_id"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.shop_id,callback:function(e){t.$set(t.form,"shop_id",e)},expression:"form.shop_id"}},t._l(t.store_list,(function(t){return s("el-option",{key:t.shop_id,attrs:{label:t.shop_name,value:t.shop_id}})})),1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),s("el-button",[t._v("取消")])],1)],1)],1)])]],2)],1)],1)},o=[],r=s("73f5"),i=s("2f21"),n={components:{Nav:i["a"]},data:function(){return{form:{username:"",mobile:"",shop_id:"",password:""},store_list:[],value:"",rules:{username:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],mobile:[{required:!0,message:"请填写电话",trigger:"blur"},{type:"number",message:"电话必须为数字值"}],shop_id:[{required:!0,message:"请选择店铺",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){var t=this;r["a"].getAll().then((function(e){t.store_list=e.data}))},methods:{onSubmit:function(){var t=this;this.$refs["box-a"].validate((function(e){if(!e)return console.log("未通过检测"),!1;r["a"].add_assistant(t.form).then((function(e){t.clear_data(),t.$message({message:"操作成功",type:"success"}),t.back()}))}))},back:function(){this.$router.go(-1)},clear_data:function(){this.form={username:"",mobile:"",shop_id:"",password:""}}}},l=n,u=(s("609b"),s("c701")),c=Object(u["a"])(l,a,o,!1,null,null,null);e["default"]=c.exports}}]);