<template>
<div class="administration">
 <div  class="administration-a">
   <div class="left">
     <h2>
       我的大麦
     </h2>
     <ul class="list">
       <li>
         <h6 @click="mast">
           交易中心
           <span class="fa fa-angle-down" v-show="show2"></span>
           <span class="fa fa-angle-up" v-show="show1"></span>
         </h6>
         <ul class="list-1" v-show="show1">
           <li :class="{active:asdt=kst}" @click="one">订单管理</li>
         </ul>
       </li>
       <li>
         <h6 @click="masts">
           账户中心
           <span class="fa fa-angle-down" v-show="show3"></span>
           <span class="fa fa-angle-up" v-show="show4"></span>
         </h6>
         <ul class="list-1" v-show="show4">
           <li @click="dist" :class="{active:asdt=kst1}">个人信息 </li>
           <li @click="three" :class="{active:asdt=kst2}">常用购票人</li>
         </ul>
       </li>
     </ul>
   </div>
   <div class="rigth" v-show="show5"><!--订单管理-->
    <div class="rigth-1">
      <ul class="rigth-1a">
        <li>我的大麦></li>
        <li>交易中心></li>
        <li>订单管理</li>
      </ul>
    </div>
     <h2>
       <p>近期订单列表</p>
     </h2>
     <div class="rigth-2">
       <div class="rigth-2-a1">
         <el-select v-model="value5" multiple placeholder="全部订单">
           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>

         <el-select
           v-model="value11"
           multiple
           collapse-tags
           style="margin-left: 20px;"
           placeholder=" 全部 ">
           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
       </div>
      <p>
        <input type="text" placeholder="请输入订单编号,商品名称" class="iuputs">
        <input type="button" value="查询" class="iuputs1">
      </p>
     </div>
     <div class="rigth-3">
       <table  border=0 cellpadding="0" cellspacing="0" >
         <tr >
           <th>订单编号</th>
           <th>购买时间</th>
           <th>商品名称</th>
           <th>数量</th>
           <th>单价</th>
           <th>订单金额</th>
           <th>交易状态</th>
           <th>操作</th>
         </tr>
         <tr>
           <td>622522199203260566</td>
           <td>2019-02-24 09:12:02</td>
           <td><p>你好  你好你好和你还能你好  你好你好和你还能</p></td>
           <td>2</td>
           <td>100</td>
           <td>200</td>
           <td>待支付</td>
           <td>      </td>
         </tr>
         <tr>
         <td>622522199203260566</td>
         <td>2019-02-24 09:12:02</td>
         <td><p>你好  你好你好和你还能你好  你好你好和你还能</p></td>
         <td>2</td>
         <td>100</td>
         <td>200</td>
         <td>待支付</td>
         <td>      </td>
       </tr>
         <tr>
           <td>622522199203260566</td>
           <td>2019-02-24 09:12:02</td>
           <td><p>你好  你好你好和你还能你好  你好你好和你还能</p></td>
           <td>2</td>
           <td>100</td>
           <td>200</td>
           <td>待支付</td>
           <td>      </td>
         </tr>
       </table>
     </div>
   </div>
   <div class="rigth" v-show="show6"><!--个人信息-->
     <div class="rigth-1">
       <ul class="rigth-1a">
         <li>我的大麦></li>
         <li>交易中心></li>
         <li>订单管理</li>
       </ul>
     </div>
     <div class="rigth2">
       <ul>
         <li
           @click="tabsSwitch(index)"
           v-bind:class="{active:tab.isActive}"
           class="tab-link"
           v-for="(tab,index) in tabsName">{{tab.name}}</li>
       </ul>
       <div class="rigth2-a">
         <div class="cont"  style="display: block;"><!--个人信息-->
           <h5>
             完善更多个人信息，有助于我们为您提供更加个性化的服务，大麦网将尊重并保护您的隐私。
           </h5>
           <p>
             <span class="fa fa-asterisk est"></span>昵称
             <input type="text" @blur="blurFn3" ref="texts" @click="blurFn2">
             <span v-show="reds4">4到40个汉字</span>
             <span class="red" v-show="reds5">请输入正确昵称</span>
           </p>
           <p>
             <span class="fa fa-asterisk est"></span>联系电话
             <input type="text" @blur="blurFn" ref="sear" @click="blurFn1">
             <span v-show="reds">11位数字组成</span>
             <span class="red" v-show="reds1">请输入正确手机号</span>
           </p>
           <p>
            真实姓名
             <input type="text" @blur="blurFn5" ref="texts1" @click="blurFn4">
             <span v-show="reds6">0到40个汉字</span>
             <span class="red" v-show="reds7">请输入正确真实姓名</span>
           </p>
           <p>
             身份证号码
             <input type="text" @blur="blurFn7" ref="texts2" @click="blurFn6">
             <span v-show="reds8">请输入15到18位身份证号码</span>
             <span class="red" v-show="reds9">请输入正确身份证号码</span>
           </p>
           <p>
             生日
             <input type="text">
             <span class="fa fa-window-maximize gtre"></span>
           </p>
           <p>
             性别：
             <el-radio v-model="radio" label="1">男</el-radio>
             <el-radio v-model="radio" label="2">女</el-radio>
           </p>
           <button @click="trues">保存</button>
         </div>
         <div class="cont"><!--照片-->
           <div class="cont-left">
             <div class="cont-left-a">
               <p>选择一张照片</p>
               <button>选择照片</button>
             </div>
           </div>
           <div class="cont-rigth">
             <p>头像预览150*150</p>
             <p></p>
             <button>选择照片</button>
             <p>支持JPG，PNG</p>
             <button>保存</button>
           </div>
        </div>
         <div class="cont"><!--输入评论-->
           <textarea placeholder="请在这里输入文本" rows="8"  cols="50"></textarea>
         </div>
       </div>
     </div>
   </div>
   <div class="rigth" v-show="show7"><!--常用购票人-->
     <div class="rigth-1">
       <ul class="rigth-1a">
         <li>我的大麦></li>
         <li>交易中心></li>
         <li>订单管理</li>
       </ul>
     </div>
     <div class="shree">
       <button @click="ticket1" v-show="reds10">新建购票人</button>
     </div>
     <div class="shree-1"v-show="ticket2" >
       <table  border=0 cellpadding="0" cellspacing="0" >
         <tr >
           <th>#</th>
           <th>姓名</th>
           <th>卡类型</th>
           <th>身份证号</th>
           <th>操作</th>
         </tr>
         <tr v-for="(item,index) in tableinfo" :key="index">
           <td>{{index+1}}</td>
           <td>{{item.name}}</td>
           <td>{{item.cardtype}}</td>
           <td>{{item.id}}</td>
           <td>
            <button @click="remove(index)" >删除</button>
             <!--<el-button @click="remove(index)"  size="mini" type="danger">删除</el-button>-->
           </td>
         </tr>
       </table>
     </div>
     <div class="shree-2" v-show="ticket"><!--新增购票人信息-->
       <div class="shree-2a"><h5 >新增购票人信息</h5></div>
       <div class="shree-2b">
         <el-form :rules="rules" ref="formwrap" class="addinfo" label-position="right" label-width="80px" :model="addinfo">
           <el-form-item label="姓名" prop="name">
             <el-input v-model="addinfo.name"></el-input>
           </el-form-item>
           <el-form-item label="卡类型" prop="cardtype">
             <el-select v-model="addinfo.cardtype" placeholder="请选择卡类型">
               <el-option label="身份证" value="身份证"></el-option>
               <el-option label="护照" value="护照"></el-option>
               <el-option label="港澳通行证" value="港澳通行证"></el-option>
               <el-option label="台胞证" value="台胞证"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="身份证号" prop="id">
             <el-input v-model.number="addinfo.id"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit('formwrap')">保存</el-button>
             <el-button @click="reslove">取消</el-button>
           </el-form-item>
         </el-form>
       </div>
     </div>
   </div>
 </div>
</div>
</template>

<script>
export default {
    name: 'Yan',
  data(){
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    var checkid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('身份证号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (reg.test(value) === false) {
            callback(new Error('身份证输入不合法'))
          } else {
            callback()
          }
        }
      }, 200)
    }
      return{
        /* 单个添加的购票人信息 */
        addinfo: {
          name: '',
          cardtype: '',
          id: ''
        },
        /* 表单验证规则 */
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],
          cardtype: [
            { required: true, message: '请选择卡类型', trigger: 'change' }
          ],
          id: [
            {validator: checkid, trigger: 'blur'}
          ]
        },
        radio: '1',
        options1: [{
          value: '选项1',
          label: '身份证'
        }, {
          value: '选项2',
          label: '护照'
        }, {
          value: '选项3',
          label: '港澳通行证'
        }, {
          value: '选项4',
          label: '台胞证'
        }],
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }],
        tableinfo: [
          {
            name: '燕燕',
            cardtype: '身份证',
            id: '421658956123456789'
          },
          {
            name: '小美',
            cardtype: '身份证',
            id: '421658956123456345'
          },
          {
            name: '小丫',
            cardtype: '身份证',
            id: '421658954567328906'
          }
        ],
        value5: [],
        value11: [],
        show1:false,
        show2:true,
        show4:false,
        show3:true,
        off:true,
        off1:true,
        show5:true,
        show6:false,
        show7:false,
        kst:true,
        kst1:false,
        kst2:false,
        list:false,
        list1:true,
        ticket:false,
        ticket2:true,
        reds:false,
        reds1:false,
        reds4:false,
        reds5:false,
        reds6:false,
        reds7:false,
        reds8:false,
        reds9:false,
        reds10:true,
        tabsName: [{
          name: "基本资料",
          isActive: true
        }, {
          name: "头像设置",
          isActive: false
        }, {
          name: "兴趣爱好",
          isActive: false
        }],
      }
  },
  methods:{
      /*选项卡*/
    tabsSwitch(tabIndex){
      var tabCardCollection = document.querySelectorAll(".cont"),
         len = tabCardCollection.length;
      for(var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    },
    /*手机验证*/
    blurFn1(){
      this.reds=true
      this.reds1=false
      let res = /^1[3|4|5|7|8][0-9]{9}$/
      if(res.test(this.$refs.sear.value)){
        this.reds=false
      }
    },
    /*手机验证*/
    blurFn () {
      let res = /^1[3|4|5|7|8][0-9]{9}$/
      if(!res.test(this.$refs.sear.value)){
        //alert('请输入正确的手机号')
        this.reds1=true
        this.reds=false
      }else{
        return true
      }
    },
    /*姓名验证*/
    blurFn2(){
      this.reds4=true
      this.reds5=false
      let res = /^[\u4e00-\u9fa5]{4,40}$/
      if(res.test(this.$refs.texts.value)){
        this.reds4=false
      }
    },
    /*姓名验证*/
    blurFn3 () {
        let res =/^[\u4e00-\u9fa5]{4,40}$/
      if(!res.test(this.$refs.texts.value)){
        this.reds5=true
        this.reds4=false
      }else{
        return true
      }
    },
    blurFn4(){
      this.reds6=true
      this.reds7=false
      let res = /^[\u4e00-\u9fa5]{4,40}$/
      if(res.test(this.$refs.texts1.value)){
        this.reds6=false
      }
    },
    blurFn5 () {
      let res =/^[\u4e00-\u9fa5]{4,40}$/
      if(!res.test(this.$refs.texts1.value)){
        this.reds7=true
        this.reds6=false
      }else{
        return true
      }
    },
    /*身份证验证*/
    blurFn6(){
      this.reds8=true
      this.reds9=false
      let res = /^\d{15}|\d{18}$/
      if(res.test(this.$refs.texts2.value)){
        this.reds8=false
      }
    },
    /*身份证验证*/
    blurFn7 () {
      let res =/^\d{15}|\d{18}$/
      if(!res.test(this.$refs.texts2.value)){
        this.reds9=true
        this.reds8=false
      }else{
        return true
      }
    },
    reslove(){
      this.ticket=false
      this.ticket2=true
      this.reds10=true
    },
    trues(){

    },
    /* 删除身份信息 */
    remove: function (index) {
      this.tableinfo.splice(index, 1)
    },
    /* 验证成功信息添加 */
    onSubmit: function (addinfo) {
      this.$refs[addinfo].validate((valid) => {
        if (valid) {
          this.tableinfo.push(this.addinfo)
          this.show = false
          this.ticket2=true
          this.ticket=false
          this.reds10=true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    one(){
      this.show6=false
      this.show5=true
      this.show7=false
      this.kst=true
      this.kst2=false
      this.kst1=false
    },
    dist(){
     this.show6=true
      this.show5=false
      this.show7=false
      this.kst1=true
      this.kst2=false
      this.kst=false
    },
    three(){
      this.show6=false
      this.show5=false
      this.show7=true
      this.kst2=true
      this.kst1=false
      this.kst=false
      this.ticket2=true
      this.ticket=false
    },
    mast(){
      if(this.off){
        this.show1=true
        this.show2=false
      }else{
        this.show1=false
        this.show2=true
      }
      this.off=!this.off
    },
    listis(){
      if(this.list1){
        this.list=false
      }else {
        this.list=true
      }
      this.list1=!this.list1
    },
    ticket1(){
      this.ticket=true
      this.ticket2=false
      this.reds10=false
    },
    masts(){
      if(this.off1){
        this.show3=true
        this.show4=false
      }else{
        this.show3=false
        this.show4=true
      }
      this.off1=!this.off1
    }
  }
}
</script>

<style scoped lang="less">
  .administration{
    margin-top: 100px;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    background: #f5f5f5;
    border-top: 2px solid red;
    .administration-a{
      width: 1200px;
      margin: 0 auto;
      background: #fff;
      margin-top: 20px;
      margin-bottom: 20px ;
      overflow: hidden;
      .left{
        width: 198px;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
        cursor:pointer;
        float: left;
        background: #fff;
        h2{
          height: 50px;
          line-height: 50px;
          color: #fff;
          font-size: 14px;
          text-indent: 24px;
          width: 100%;
          background: #ff5c41;
          font-weight: 500;
        }
        .list{
          width: 100%;
          li{
            width: 100%;
            font-weight: 500;
            h6{
              width: 100%;
              text-indent: 24px;
              height: 50px;
              line-height: 50px;
              font-size: 14px;
              color: #495060;
              position: relative;
              font-weight: 500;
              span{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 30px;
                color: #725060;
              }
            }
            h6:hover{
              background: #e6e6e6;
            }
            ul{
              width: 100%;
              li{
                width: 100%;
                height: 50px;
                line-height: 50px;
                text-indent: 44px;
                font-size: 14px;
                font-weight: 400;
                color: #495060;
              }
              li:hover{
                background: #e6e6e6;
              }
              .active{
                color: red;
                border-right: 2px solid red;
              }
            }
          }
        }
      }
      .rigth{
       float: left;
       width: 980px;
       margin-left: 22px;
        .rigth-1{
          width: 980px;
          height: 38px;
          .rigth-1a{
            height: 38px;
            line-height: 38px;
            width: 960px;
            overflow: hidden;
            padding-left: 20px;
            border-bottom: 1px solid #efefef;
            border-left: 1px solid #efefef;
            background: linear-gradient( top,#efefef,#fff);
            li{
              float: left;
              font-size: 12px;
            }
          }
        }
        h2{
          width: 980px;
          height: 40px;
          border-bottom: 1px solid #efefef;
          p{
            width: 120px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            color: #ff5c41;
            border-bottom: 1px solid #ff5c41;
            margin-top: 26px;
            text-align: center;
            font-weight: 300;
          }
        }
        .shree{
          width: 100%;
          overflow: hidden;
          margin-top: 16px;
          button{
            float: right;
            width: 92px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #ed3f14;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        }
        .rigth-2{
          width: 980px;
          height: 40px;
          margin-top:16px ;
          overflow: hidden;
          .rigth-2-a1{
            float: left;
          }
          p:nth-of-type(1){
            float: right;
            width: 360px;
            border: none;
            margin-right: 2px;
            .iuputs{
              display: block;
              width: 300px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              float: left;
              text-indent: 10px;
              border-radius: 4px;
            }
            .iuputs1{
              display: block;
              width:55px;
              float: right;
              box-sizing: border-box;
              height: 40px;
              line-height: 40px;
              border-radius: 4px;
              border: 1px solid #ccc;
              cursor: pointer;
            }
          }
        }
        .rigth-3{
          width: 980px;
          border: 1px solid #ccc;
          margin-top: 26px;
          border-bottom: none;
          margin-bottom: 40px;
          table{
            th{
              border-right: 1px solid #e9eaec;
              border-bottom: 1px solid #e9eaec;
              text-align: left;
              background: #f8f8f9;
              height: 40px;
              line-height: 40px;
              font-size: 12px;
              color: #495060;
              text-indent: 20px;
            }
            th:nth-of-type(1){
             width: 182px;
            }
            th:nth-of-type(2){
              width: 182px;
            }
            th:nth-of-type(3){
               width: 182px;
             }
            th:nth-of-type(4){
              width: 80px;
            }
            th:nth-of-type(5){
              width: 80px;
            }
            th:nth-of-type(8){
              width: 80px;
              border-right: none;
            }
            th:nth-of-type(6){
              width: 100px;
            }
            th:nth-of-type(7){
              width: 100px;
            }
            td{
              height: 40px;
              line-height: 40px;
              font-size: 12px;
              border-right: 1px solid #e9eaec;
              border-bottom: 1px solid #e9eaec;
              text-indent: 20px;
            }
            td:nth-of-type(3){
              width: 182px;
              height: 40px;
              line-height: normal;
              p{
                width: 162px;
                margin: 0 auto;
              }
            }
            td:nth-of-type(8){
              border-right: none;
            }
          }
        }
        .shree-1{
          width: 980px;
          border: 1px solid #ccc;
          margin-top: 26px;
          border-bottom: none;
          margin-bottom: 40px;
          box-sizing: border-box;
          border-right: 1px solid #e9eaec;
          table{
            th{
              border-right: 1px solid #e9eaec;
              border-bottom: 1px solid #e9eaec;
              text-align: left;
              background: #f8f8f9;
              height: 40px;
              line-height: 40px;
              font-size: 12px;
              color: #495060;
              text-indent: 20px;
              box-sizing: border-box;
            }
            th:nth-of-type(1){
              width: 62px;
            }
            th:nth-of-type(2){
              width: 256px;
            }
            th:nth-of-type(3){
              width: 256px;
            }
            th:nth-of-type(4){
              width: 256px;
            }
            th:nth-of-type(5){
              width: 150px;
              text-indent: 0px;
              text-align: center;
            }
            td:nth-of-type(5){
              width: 150px;
              text-indent: 0px;
              text-align: center;
              button{
                cursor: pointer;
                width: 40px;
                height: 24px;
                font-size: 12px;
                text-align: center;
                background: #ed3f14;
                color: #fff;
                border: none;
                border-radius: 4px;
              }
            }
            td{
              height: 40px;
              line-height: 40px;
              font-size: 12px;
              border-right: 1px solid #e9eaec;
              border-bottom: 1px solid #e9eaec;
              text-indent: 20px;
              box-sizing: border-box;
            }
          }
        }
        .shree-2{
          width: 980px;
          border: 1px solid #ccc;
          margin-top: 26px;
          .shree-2a{
            width: 980px;
            height: 50px;
            line-height: 50px;
            border-bottom: 2px solid #ccc;
            h5{
              width: 160px;
              height: 50px;
              border-bottom: 2px solid red;
              text-align: center;
              font-size: 16px;
              font-weight: normal;
            }
          }
          .shree-2b{
            width: 980px;
            margin-top: 30px;
          }
        }
        .rigth2{
          width: 980px;
          margin-top: 16px;
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          border-top-left-radius: 4px;
          ul{
            overflow: hidden;
            width: 980px;
            height: 32px;
            border-bottom: 1px solid #ccc;
            li{
              float: left;
              text-align: center;
              font-size: 12px;
              width: 98px;
              height: 32px;
              line-height: 32px;
              color: #495060;
              border-right: 1px solid #ccc;
              border-top: 1px solid #ccc;
              border-left: 1px solid #ccc;
              background: #f8f8f9;
              margin-right: 5px;
              border-top-right-radius: 4px;
              border-top-left-radius: 4px;
              cursor: pointer;
            }
            li:nth-of-type(1){
              border-left: none;
            }
            .tab-link.active {
              background: #fff;
              color: red;
            }
          }
          .rigth2-a{
            width: 100%;
            .cont{
              width: 100%;
              display: none;
              overflow: hidden;
              .cont-left{
                float: left;
                width: 470px;
                height: 355px;
                background: #ccc;
                margin-top: 30px;
                margin-bottom: 40px;
                margin-left: 40px;
                .cont-left-a{
                  width: 150px;
                  height: 100px;
                  background: #fff;
                  margin-left: 160px;
                  margin-top: 130px;
                  p:nth-of-type(1){
                    width: 150px;
                    height: 56px;
                    line-height: 56px;
                    text-indent: 0;
                    color: #000;
                  }
                  button{
                    margin: 0 auto;
                    margin-left: 25px;
                    width: 100px;
                    height: 30px;
                    background: red;
                  }
                }
              }
              .cont-rigth{
                width: 150px;
                float: left;
                margin-left: 60px;
                p:nth-of-type(1){
                  margin-left: 20px;
                }
                p:nth-of-type(2){
                  width: 150px;
                  height: 150px;
                  background: #ccc;
                  margin-top: 10px;
                }
                p:nth-of-type(3){
                  margin-top: -50px;
                  font-size: 12px;
                  margin-left: 46px;
                }
                button:nth-of-type(1){
                 width: 100px;
                 margin-left: 50px;
                }
                button:nth-of-type(2){
                  width: 60px;
                  margin-left: 70px;
                }
              }
              h5{
                width: 940px;
                height: 40px;
                line-height: 40px;
                margin: 20px auto;
                color: #999;
                background: #fffdee;
                text-indent: 22px;
                border-radius: 6px;
                border: 2px solid #edd28b;
                font-size: 12px;
              }
              p{
                .est{
                  color: red;
                  font-size: 12px;
                }
                .red{
                  color: red;
                }
                width: 100%;
                height: 30px;
                line-height: 30px;
                margin-top: 24px;
                margin-left: 30px;
                input{
                  display: inline-block;
                  margin-left: 10px;
                  width: 320px;
                  height: 30px;
                  line-height: 30px;
                  border-radius: 4px;
                  box-sizing: border-box;
                  border: 1px solid #ccc;
                  background: none;
                  text-indent: 10px;
                }
              }
              p:nth-of-type(1){
                text-indent: 20px;
              }
              p:nth-of-type(2){
                text-indent: 4px;
              }
              p:nth-of-type(3){
                text-indent:16px;
              }
              p:nth-of-type(5){
                text-indent:48px;
                position: relative;
                .gtre{
                  position: absolute;
                  top: 10px;
                  left: 210px;
                  color: #80848f;
                }
                input{
                  width: 188px;
                }
              }
              p:nth-of-type(6){
                text-indent:48px;
                input{
                  margin-left: 0;
                  width: 16px;
                  height: 16px;
                }
              }
              button{
                width: 60px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                background: #ff3c1b;
                border: none;
                margin-left: 100ppx;
                margin: 20px 0 50px 100px;
                cursor: pointer;
                color: #fff;
              }
              textarea{
                width: 90%;
                height: 100%;
                margin-left: 5%;
                margin-top: 20px;
                margin-bottom: 40px;
              }
            }
          }
        }
      }
    }
  }
</style>
