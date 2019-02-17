<template>
  <div class="resigter">
    <div class="headbox">
      <div class="head">
        <router-link to="/"> <img src="../assets/img/logo.png" alt=""></router-link>
        <p>账户注册</p>
      </div>
    </div>
    <div class="bigbox">
      <form class="resibox">
        <div class="publicbox">
          <div class="inpphone">
            <span class="iconfont icon-user"></span>
            <input type="text"
                   v-model="newPhone"
                   oninput="if(value.length>11)value=value.slice(0,11)"
                   placeholder="请输入手机号"
                   @blur="likaione()"
                   @focus="jujiaoone()"
            >          <!--未输入框框变红-->
          </div>
          <p v-show="loading">{{tastsphone}}</p>
        </div>
        <div class="publicbox">
          <div class="inppass">
            <span class="iconfont icon-password"></span>
            <input type="password"
                   placeholder="请输入登录密码"
                   v-model="newpass"
                   @blur="likaitwo()"
                   @focus="jujiaotwo()"
            >
          </div>
          <p v-show="loading">{{tastsnowpass}}</p>
        </div>
        <div class="publicbox">
          <div class="inppasssure">
            <span class="iconfont icon-password"></span>
            <input type="password"
                   placeholder="请输入再次登录密码"
                   v-model="pass"
                   @blur="likaithree()"
                   @focus="jujiaothree()"
            >
          </div>
          <p v-show="loading">{{tastspass}}</p>
        </div>
        <div class="verification">
          <div>
            <span class="iconfont icon-xinxi"></span>
            <input type="text" placeholder="请输入验证码">
          </div>
          <p @click="yanzheng()"><span v-if="!off">{{time}}</span><span>{{txt}}</span></p>
        </div>
        <input class="resi" type="button" value="立即注册" @click="zhuce()">
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
        timers:null,
        off:true,
        txt:"获取验证码",
        tastsphone:"",
        tastsnowpass:"",
        tastspass:"",
        detailCode:{}
      }
    },
    methods:{
      jujiaoone() {
        this.tastsphone = ""
      },
      likaione() {
        const self = this;
        if (self.newPhone == "") {
          self.loading = true
          self.tastsphone = "请输入手机号"
          return false
        }else if (!(/^1[34578]\d{9}$/.test(self.newPhone))) {
          self.loading = true
          self.tastsphone = "电话号码格式错误"
          return false
        }
        return true
      },
      jujiaotwo () {
        this.tastsnowpass = ""
      },
      likaitwo(){
        const asself = this;
        if (asself.newpass == "") {
          asself.loading = true
          asself.tastsnowpass = "请输入密码"
          return false
        }else if (!(/^(?![^a-zA-Z]+$)(?!\D+$)/.test(asself.newpass))) {
          asself.loading = true
          asself.tastsnowpass = "密码格式错误"
          return false
        }
        return true
      },
      jujiaothree () {
        this.tastspass = ""
      },
      likaithree(){
        const opassnow = this;
        if (opassnow.pass == "") {
          opassnow.loading = true
          opassnow.tastspass = "请再次输入密码"
          return false
        }else if (opassnow.pass != opassnow.newpass) {
          opassnow.loading = true
          opassnow.tastspass = "密码错误"
          return false
        }
        return true
      },
      yanzheng(){
        const sff = this
        this.off = false
        sff.txt = '秒后重新发送'
        this.timers = setInterval(function () {
          sff.time--
          if (sff.time <= 0){
            clearInterval(sff.timers)
            sff.off = true
            sff.txt = '重新发送'
            sff.time = 60
          }
        },1000)
      },
      zhuce(){
        if (this.likaione() &&  this.likaitwo() && this.likaithree()) {
          this.detailCode = {
            phone: this.newPhone,
            pass: this.newpass
          }
          let newD = JSON.stringify(this.detailCode)
          let getD = localStorage.getItem('cartData')
          if (!getD) {//为空
            localStorage.setItem('cartData', '[' + newD + ']')
          } else {//有值
            //this.$router.push({path: '/logining'})
            var contrastdata = JSON.parse(localStorage.getItem('cartData'));  //每次用户注册时，先取值待下面判断
            var _this = this    //存这个this因为some函数里要访问this
            var getData = contrastdata.some(function (item, index) {//some这个方法具什么用处看我给你发的图
              return item.phone == _this.newPhone     //return回去是true/false，那么getData就是true/false
            })
            if (getData) {  //用getData判断当账号已经注册过时，提示用户
              alert('该账号已经注册')
            } else {         //否则的话才往localstorge里存值
              localStorage.setItem("cartData", '[' + newD + ',' + getD.substring(1, getD.length - 1) + ']')
              this.$router.push({path: '/logining'})
            }this.$router.push({path: '/'})
          }
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .resigter{
    width: 100%;
    background: #eee;
    height: 100%;
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
      padding-top: 90px;
      .resibox{
        width: 600px;
        background: white;
        margin: 0 auto;
        padding: 50px 200px 132px 200px;
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
            cursor: pointer;
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
