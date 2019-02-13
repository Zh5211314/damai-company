<template>
    <div class="resigter">
      <div class="headbox">
        <div class="head">
        <img src="../assets/img/resigter-logo.png" alt="">
        <p>欢迎登录</p>
      </div>
      </div>
      <div class="bigbox">
        <form class="resibox">
          <div class="publicbox">
            <div class="inpphone">
              <span class="iconfont icon-user"></span>
              <input type="text" v-model="newPhone" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号" @blur="likaione()">          <!--未输入框框变红-->
            </div>
            <!--<p>请填写手机号</p>                                     &lt;!&ndash;所有p标签已经隐藏&ndash;&gt;-->
          </div>
          <div class="publicbox">
            <div class="inppass">
              <span class="iconfont icon-password"></span>
              <input type="text" placeholder="请输入登录密码" v-model="newpass" @blur="likaitwo()">
            </div>
            <!--<p>请填写密码</p>-->
          </div>
          <div class="publicbox">
            <div class="inppasssure">
              <span class="iconfont icon-password"></span>
              <input type="text" placeholder="请输入再次登录密码" v-model="pass" @blur="likaithree()">
            </div>
            <!--<p>请填写确认密码</p>-->
          </div>
          <div class="verification">
            <div>
              <span class="iconfont icon-xinxi"></span>
              <input type="text" placeholder="请输入验证码">
            </div>
            <p>获取验证码</p>
          </div>
          <input class="resi" type="submit" value="立即注册">
        </form>
        <div class="foot">
          <ul>
            <li>公司介绍</li>
            <li>品牌识别</li>
            <li>企业荣誉</li>
            <li>隐私声明</li>
            <li>联系及合作</li>
            <li>招聘信息</li>
            <li>网站地图</li>
            <li>友情链接</li>
            <li>公司大事记</li>
          </ul>
          <p>京ICP证031086号 | 京ICP备1013248号 | 京公安网11032040599500349号 | 广播电视节目制作经营许可证（京）字第032256号</p>
          <p>网络文化经营许可证 京网文[2018]3243-534号 | 营业性演出许可证 京市演出888号</p>
          <p>北京阿博文化有限公司 大麦网 Copyright 2008-2018 All Right Reserved</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "resigter",
      data() {
        return {
          loading: false,
          newPhone: "",
          newpass:"",
          pass:"",
          state: null,
          show: false,
          time:60,
          timers:null
        }
      },
      methods:{
        likaione() {
          const self = this;
          if (self.newPhone == "" || !self.newPhone) {
            console.log("请输入电话号码");
          }
          else if (!(/^1[34578]\d{9}$/.test(self.newPhone))) {
            console.log("电话号码格式错误");
          }
        },
        likaitwo(){
          const asself = this;
          if (asself.newpass == "" || !asself.newpass) {
            console.log("请输入密码");
          }else if (!(/^(?![^a-zA-Z]+$)(?!\D+$)/.test(asself.newpass))) {
            console.log("密码格式错误");
          }
        },
        likaithree(){
          const opassnow = this;
          if (opassnow.pass == "" || !opassnow.pass) {
            console.log("请输入密码");
          }else if (opassnow.pass != this.newpass) {
            console.log("密码错误");
          }
        },
      }
    }
</script>

<style scoped lang="less">
.resigter{
  width: 100%;
  background: red;
  .headbox{
    width: 100%;
    background: white;
    .head{
      width: 960px;
      height: 88px;
      margin: 0 auto;
      overflow: hidden;
      img{
        width: 155px;
        height: 56px;
        float: left;
        padding: 17px 36px 0 0;
      }
      p{
        font-size: 22px;
        height: 50px;
        line-height: 50px;
        float: left;
        border-left: 2px solid #dadada;
        padding-left: 15px;
        margin-top: 24px;
        color: #495060;
      }
    }
  }
  .bigbox{
    //background: #f5f5f5;
    padding-top: 90px;
    .resibox{
      width: 600px;
      background: white;
      margin: 0 auto;
      padding: 50px 200px 104px 200px;
      .publicbox{
        height: 66px;
        position: relative;
        div{
          height: 34px;
          width: 600px;
          border: 1px solid #dddee1;
          border-radius: 4px;
          span{
            display: inline-block;
            width: 25px;
            height: 34px;
            line-height: 34px;
            border-right: 1px solid #dddee1;
            padding-left: 8px;
          }
          input{
            height: 34px;
            width: 500px;
            line-height: 34px;
            border: none;
          }
        }
        p{
          position: absolute;
          font-size: 12px;
          color: #ed3f14;
          top: 36px;
          left: 0;
          display: none;
        }
      }
      .verification{
        height: 30px;
        overflow: hidden;
        div{
          width: 322px;
          height: 28px;
          border: 1px solid #dddee1;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          float: left;
          span{
            display: inline-block;
            width: 24px;
            height: 28px;
            line-height: 30px;
            padding-left: 7px;
            background: #eee;
          }
          input{
            height: 26px;
            line-height: 26px;
            border: none;
          }
        }
        p{
          height: 28px;
          line-height: 28px;
          margin-left: 25px;
          padding: 0 14px;
          border: 1px solid #dddee1;
          border-radius: 4px;
          font-size: 11px;
          color: #495060;
          float: left;
        }
      }
      .resi{
        height: 32px;
        line-height: 31px;
        width: 600px;
        color: white;
        background: #ed3f14;
        margin-top: 24px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
    }
    .foot{
      width: 1000px;
      margin: 135px auto 0;
      padding-bottom: 14px;
      ul{
        width: 840px;
        margin: 0 auto;
        overflow: hidden;
        li{
          float: left;
          font-size: 11px;
          color: #1b1b1b;
          padding-right: 13px;
          margin-left: 25px;
          border-right: 2px solid #6eb1dd;
          &:last-of-type{
            border-right: none;
          }
        }
      }
      p:first-of-type{
        font-size: 11px;
        text-align: center;
        padding-top: 79px;
        color: #495060;
      }
      p:nth-of-type(2){
        height: 48px;
        line-height: 48px;
        color: #495060;
        text-align: center;
        font-size: 11px;
      }
      p:last-of-type{
        color: #495060;
        text-align: center;
        font-size: 11px;
      }
    }
  }
}
</style>
