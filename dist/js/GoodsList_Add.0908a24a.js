(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GoodsList_Add"],{1276:function(e,t,r){"use strict";var a=r("2ba4"),n=r("c65b"),o=r("e330"),i=r("d784"),s=r("44e7"),l=r("825a"),c=r("1d80"),d=r("4840"),u=r("8aa5"),g=r("50c4"),p=r("577e"),m=r("dc4a"),f=r("4dae"),h=r("14c3"),b=r("9263"),v=r("9f7f"),_=r("d039"),x=v.UNSUPPORTED_Y,y=4294967295,w=Math.min,F=[].push,k=o(/./.exec),$=o(F),R=o("".slice),D=!_((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));i("split",(function(e,t,r){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var o=p(c(this)),i=void 0===r?y:r>>>0;if(0===i)return[];if(void 0===e)return[o];if(!s(e))return n(t,o,e,i);var l,d,u,g=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=new RegExp(e.source,m+"g");while(l=n(b,v,o)){if(d=v.lastIndex,d>h&&($(g,R(o,h,l.index)),l.length>1&&l.index<o.length&&a(F,g,f(l,1)),u=l[0].length,h=d,g.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return h===o.length?!u&&k(v,"")||$(g,""):$(g,R(o,h)),g.length>i?f(g,0,i):g}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:n(t,this,e,r)}:t,[function(t,r){var a=c(this),i=void 0==t?void 0:m(t,e);return i?n(i,t,a,r):n(o,p(a),t,r)},function(e,a){var n=l(this),i=p(e),s=r(o,n,i,a,o!==t);if(s.done)return s.value;var c=d(n,RegExp),m=n.unicode,f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(x?"g":"y"),b=new c(x?"^(?:"+n.source+")":n,f),v=void 0===a?y:a>>>0;if(0===v)return[];if(0===i.length)return null===h(b,i)?[i]:[];var _=0,F=0,k=[];while(F<i.length){b.lastIndex=x?0:F;var D,I=h(b,x?R(i,F):i);if(null===I||(D=w(g(b.lastIndex+(x?F:0)),i.length))===_)F=u(i,F,m);else{if($(k,R(i,_,F)),k.length===v)return k;for(var L=1;L<=I.length-1;L++)if($(k,I[L]),k.length===v)return k;F=_=D}}return $(k,R(i,_)),k}]}),!D,x)},"14c3":function(e,t,r){var a=r("da84"),n=r("c65b"),o=r("825a"),i=r("1626"),s=r("c6b6"),l=r("9263"),c=a.TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var a=n(r,e,t);return null!==a&&o(a),a}if("RegExp"===s(e))return n(l,e,t);throw c("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),o=r("785a"),i=r("17c2"),s=r("9112"),l=function(e){if(e&&e.forEach!==i)try{s(e,"forEach",i)}catch(t){e.forEach=i}};for(var c in n)n[c]&&l(a[c]&&a[c].prototype);l(o)},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),o=n("forEach");e.exports=o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),o=r("b622"),i=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},6293:function(e,t,r){"use strict";r("ec26")},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},a15b:function(e,t,r){"use strict";var a=r("23e7"),n=r("e330"),o=r("44ad"),i=r("fc6a"),s=r("a640"),l=n([].join),c=o!=Object,d=s("join",",");a({target:"Array",proto:!0,forced:c||!d},{join:function(e){return l(i(this),void 0===e?",":e)}})},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("23cb"),i=r("5926"),s=r("07fa"),l=r("7b0b"),c=r("65f0"),d=r("8418"),u=r("1dde"),g=u("splice"),p=n.TypeError,m=Math.max,f=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!g},{splice:function(e,t){var r,a,n,u,g,v,_=l(this),x=s(_),y=o(e,x),w=arguments.length;if(0===w?r=a=0:1===w?(r=0,a=x-y):(r=w-2,a=f(m(i(t),0),x-y)),x+r-a>h)throw p(b);for(n=c(_,a),u=0;u<a;u++)g=y+u,g in _&&d(n,u,_[g]);if(n.length=a,r<a){for(u=y;u<x-a;u++)g=u+a,v=u+r,g in _?_[v]=_[g]:delete _[v];for(u=x;u>x-a+r;u--)delete _[u-1]}else if(r>a)for(u=x-a;u>y;u--)g=u+a-1,v=u+r-1,g in _?_[v]=_[g]:delete _[v];for(u=0;u<r;u++)_[u+y]=arguments[u+2];return _.length=x-a+r,n}})},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},c740:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").findIndex,o=r("44d2"),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},cb38:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("商品列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getGoodsList},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getGoodsList.apply(null,arguments)}},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodsList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:e.goAddPage}},[e._v("添加商品")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.goodsList,stripe:"",border:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",width:"660px"}}),r("el-table-column",{attrs:{prop:"goods_price",label:"商品价格/元",width:"100px"}}),r("el-table-column",{attrs:{prop:"goods_weight",label:"商品重量"}}),r("el-table-column",{attrs:{prop:"add_time",label:"创建时间",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.row.add_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"top",enterable:!1}},[r("el-button",{attrs:{circle:"",size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.handleEdit(t.row.goods_id)}}})],1),r("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[r("el-button",{attrs:{circle:"",size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row.goods_id)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"修改商品信息",visible:e.editDialogVisible,width:"40%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{attrs:{clearable:""},model:{value:e.editForm.goods_name,callback:function(t){e.$set(e.editForm,"goods_name",t)},expression:"editForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.goods_price,callback:function(t){e.$set(e.editForm,"goods_price",t)},expression:"editForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.goods_weight,callback:function(t){e.$set(e.editForm,"goods_weight",t)},expression:"editForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.goods_number,callback:function(t){e.$set(e.editForm,"goods_number",t)},expression:"editForm.goods_number"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editGoods}},[e._v("确 定")])],1)],1)],1)},n=[],o=r("1da1"),i=(r("96cf"),{components:{},data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:5},goodsList:[],total:0,editDialogVisible:!1,editForm:{goods_name:"",goods_price:0,goods_number:0,goods_weight:0},editFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}]}}},methods:{getGoodsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("goods",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品列表失败"));case 6:e.goodsList=a.data.goods,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodsList()},goAddPage:function(){this.$router.push("/goods/add")},handleEdit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.editDialogVisible=!0,r.next=3,t.$http.get("goods/".concat(e));case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error(n.meta.msg));case 7:t.editForm=n.data;case 8:case"end":return r.stop()}}),r)})))()},editGoods:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("goods/"+e.editForm.goods_id,{goods_name:e.editForm.goods_name,goods_price:e.editForm.goods_price,goods_number:e.editForm.goods_number,goods_weight:e.editForm.goods_weight});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.$message.success("更新商品信息成功"),e.editDialogVisible=!1,e.getGoodsList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("goods/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("删除失败"));case 6:t.$message({type:"success",message:"删除成功!"}),t.getGoodsList();case 8:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getGoodsList()}}),s=i,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"6b032c60",null);t["default"]=c.exports},d784:function(e,t,r){"use strict";r("ac1f");var a=r("e330"),n=r("6eeb"),o=r("9263"),i=r("d039"),s=r("b622"),l=r("9112"),c=s("species"),d=RegExp.prototype;e.exports=function(e,t,r,u){var g=s(e),p=!i((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=p&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!p||!m||r){var f=a(/./[g]),h=t(g,""[e],(function(e,t,r,n,i){var s=a(e),l=t.exec;return l===o||l===d.exec?p&&!i?{done:!0,value:f(t,r,n)}:{done:!0,value:s(r,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(d,g,h[1])}u&&l(d[g],"sham",!0)}},e9c4:function(e,t,r){var a=r("23e7"),n=r("da84"),o=r("d066"),i=r("2ba4"),s=r("e330"),l=r("d039"),c=n.Array,d=o("JSON","stringify"),u=s(/./.exec),g=s("".charAt),p=s("".charCodeAt),m=s("".replace),f=s(1..toString),h=/[\uD800-\uDFFF]/g,b=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,_=function(e,t,r){var a=g(r,t-1),n=g(r,t+1);return u(b,e)&&!u(v,n)||u(v,e)&&!u(b,a)?"\\u"+f(p(e,0),16):e},x=l((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&a({target:"JSON",stat:!0,forced:x},{stringify:function(e,t,r){for(var a=0,n=arguments.length,o=c(n);a<n;a++)o[a]=arguments[a];var s=i(d,null,o);return"string"==typeof s?m(s,h,_):s}})},ec01:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contemt"},[r("el-card",[r("el-alert",{attrs:{title:"添加商品信息",type:"info",closable:!1,"show-icon":"",center:""}}),r("el-steps",{attrs:{active:e.activeIndex-0,"finish-status":"success"}},[r("el-step",{attrs:{title:"基本信息"}}),r("el-step",{attrs:{title:"商品参数"}}),r("el-step",{attrs:{title:"商品属性"}}),r("el-step",{attrs:{title:"商品图片"}}),r("el-step",{attrs:{title:"商品内容"}}),r("el-step",{attrs:{title:"完成"}})],1),r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"80px","label-position":"top"}},[r("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},on:{"tab-click":e.handleTabClick},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{attrs:{clearable:""},model:{value:e.addForm.goods_name,callback:function(t){e.$set(e.addForm,"goods_name",t)},expression:"addForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_price,callback:function(t){e.$set(e.addForm,"goods_price",t)},expression:"addForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_weight,callback:function(t){e.$set(e.addForm,"goods_weight",t)},expression:"addForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_number,callback:function(t){e.$set(e.addForm,"goods_number",t)},expression:"addForm.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[r("el-cascader",{attrs:{options:e.cateList,props:e.cascaderProps,clearable:""},on:{change:e.handleCascaderChange},model:{value:e.addForm.goods_cat,callback:function(t){e.$set(e.addForm,"goods_cat",t)},expression:"addForm.goods_cat"}})],1)],1),r("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-checkbox-group",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return r("el-checkbox",{key:t,attrs:{label:e,border:""}})})),1)],1)})),1),r("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-input",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}})],1)})),1),r("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[r("el-upload",{attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"list-type":"picture",headers:e.headerObj}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),r("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[r("quill-editor",{ref:"myQuillEditor",model:{value:e.addForm.goods_introduce,callback:function(t){e.$set(e.addForm,"goods_introduce",t)},expression:"addForm.goods_introduce"}}),r("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.picDialogVisible,width:"30%"},on:{"update:visible":function(t){e.picDialogVisible=t}}},[r("img",{attrs:{src:e.previewURL,alt:"预览"}})])],1)},n=[],o=r("1da1"),i=(r("d3b7"),r("159b"),r("ac1f"),r("1276"),r("c740"),r("a434"),r("e9c4"),r("a15b"),r("96cf"),{components:{},data:function(){return{activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],goods_introduce:"",pics:[],attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"change"}]},cateList:[],cascaderProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},selActive:"many",manyTableData:[],onlyTableData:[],uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},previewURL:"",picDialogVisible:!1}},computed:{cateId:function(){return 3!==this.addForm.goods_cat.length?null:this.addForm.goods_cat[2]}},methods:{getCateList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(a.meta.msg));case 6:e.cateList=a.data;case 7:case"end":return t.stop()}}),t)})))()},handleCascaderChange:function(){if(3!==this.addForm.goods_cat.length)return this.addForm.goods_cat.length=0,this.manyTableData.length=0,void(this.onlyTableData.length=0)},beforeTabLeave:function(e,t){if("0"===t&&3!==this.addForm.goods_cat.length)return this.$message.error("请先选择商品分类"),!1},getParamsData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories/".concat(e.cateId,"/attributes"),{params:{sel:e.selActive}});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(a.meta.msg));case 6:"many"===e.selActive?(a.data.forEach((function(e){e.attr_vals=e.attr_vals?e.attr_vals.split(" "):[]})),e.manyTableData=a.data):e.onlyTableData=a.data;case 7:case"end":return t.stop()}}),t)})))()},handleTabClick:function(){"1"===this.activeIndex?(this.selActive="many",this.getParamsData()):"2"===this.activeIndex&&(this.selActive="only",this.getParamsData())},handlePreview:function(e){this.previewURL=e.response.data.url,this.picDialogVisible=!0},handleRemove:function(e){e.response.data.tmp_path;var t=this.addForm.pics.findIndex((function(e){e.pic}));this.addForm.pics.splice(t,1)},handleSuccess:function(e){var t={pic:e.data.tmp_path};this.addForm.pics.push(t)},add:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写必要的表单项"));case 2:return a=JSON.parse(JSON.stringify(e.addForm)),a.goods_cat=a.goods_cat.join(","),e.manyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals.join(" ")};e.addForm.attrs.push(r)})),e.onlyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals};e.addForm.attrs.push(r)})),a.attrs=e.addForm.attrs,t.next=9,e.$http.post("goods",a);case 9:if(n=t.sent,o=n.data,201===o.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error(o.meta.msg));case 13:e.$message.success("添加商品成功"),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},created:function(){this.getCateList()}}),s=i,l=(r("6293"),r("2877")),c=Object(l["a"])(s,a,n,!1,null,"64702786",null);t["default"]=c.exports},ec26:function(e,t,r){}}]);
//# sourceMappingURL=GoodsList_Add.0908a24a.js.map