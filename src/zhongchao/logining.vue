<template>
  <div class="login">
    <div class="headbox">
      <div class="head">
        <router-link to="/"> <img src="../assets/img/logo.png" alt=""></router-link>
        <p>欢迎登录</p>
      </div>
    </div>
    <div class="midd">
      <div class="autob">
        <img src="../assets/img/logopic-1.jpg" alt="">
        <form class="rightbox">
          <div class="twop">
            <p v-for="(item,i) in tod" :key="i" :class="{active:i === index}" @click="changed(i)">{{item}}</p>
          </div>
          <div class="widthbox" :style="{left:olefts + 'px'}">
            <div class="lebox">
              <div class="box">
                <span><i class="iconfont icon-user"></i></span>
                <input
                  type="text"
                  placeholder="请输入手机号"
                  v-model="onephone"
                  @focus="afocus()"
                >
              </div>
              <p class="phonep" v-show="loading">{{tastsphoneas}}</p>
              <div class="box">
                <span><i class="iconfont icon-password"></i></span>
                <input
                  type="password"
                  placeholder="请输入登录密码"
                  v-model="onepass"
                  @focus="afocus()"
                >
              </div>
              <p class="phonepass" v-show="loading">{{tastsnowpassas}}</p>
            </div>
            <div class="ribox">
              <div class="boxa">
                <span><i class="iconfont icon-user"></i></span>
                <input type="text" placeholder="请输入手机号" v-model="pheee">
              </div>
              <div class="clicksa">
                <p></p>
                <p @click="yanzheng()"><span v-if="!off">{{time}}</span><span>{{txt}}</span></p>
              </div>
            </div>
          </div>
          <p class="logo" @click="denglu()">登录</p>
          <div class="lrbox">
            <div class="bottombox">
              <input type="checkbox" id="asd">
              <label for="asd">下次自动登录</label>
            </div>
            <div class="rigbox">
              <p class="one">忘记密码?</p>
              <router-link tag="p" class="two" to="/resigter">立即注册</router-link>
            </div>
          </div>
          <div class="weisinbox">
            <p class="last">其他登录:</p>
            <img src="../assets/img/weixin.jpg" alt="">
          </div>
        </form>
      </div>
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
    name: "logining",
    data() {
      return{
        olefts:0,
        index:0,
        tod:[
          "账户登录","短信快捷登录"
        ],
        onephone:"",
        onepass:"",
        pheee:"",
        time:60,
        timers:null,
        off:true,
        txt:"获取验证码",
        tastsphoneas:"",
        tastsnowpassas:"",
        loading: false,
        cla:"tivea",
        detailCode:{}
      }
    },
    methods: {
      afocus(){
        this.tastsphoneas = ""
        this.tastsnowpassas = ""
      },
      changed(i) {
        this.index = i;
        if(i == 1){
          this.olefts = -466
          this.tastsphoneas = ""
          this.tastsnowpassas = ""
        }else{
          this.olefts = 0
        }
      },
      denglu(){
        var _this = this
        var ophone = localStorage.getItem("cartData")
        var Transformation = JSON.parse(ophone)
        var zhuce = Transformation.some(function (item,index) {  //验证注册过的账号和密码是否对应
          return item.phone == _this.onephone && item.pass == _this.onepass
        })
        var reg = Transformation.some(function (item,index) {   //验证用户是否注册
          return item.phone == _this.onephone
        })
        if(this.onephone == ""){
          this.loading = true
          this.tastsphoneas = "请输入手机号"
        }else if(!(/^1[34578]\d{9}$/.test(this.onephone))){
          this.loading = true
          this.tastsphoneas = "电话号码格式错误"
        }else if(this.onepass == ""){
          this.loading = true
          this.tastsnowpassas = "请输入密码"
        }else if(!reg){
          alert('该用户没有注册！！')
        }else if(!zhuce){
          alert('账号或者密码不对')
        }else{
          alert('登录成功！！')
          this.detailCode = {
            phone: this.onephone,
            pass: this.onepass
          }
          localStorage.setItem('userLogin',JSON.stringify(this.detailCode))
          this.$router.push('/')
        }
      },
      afocus () {   //获取焦点的时候提示取消
        this.loading = false
        this.tastsphoneas = ""
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
        },10)
      },
    }
  }
</script>

<style scoped lang="less">
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
  .midd{
    width: 100%;
    padding-top: 90px;
    background: #f5f5f5;
    .autob{
      width: 1000px;
      margin: 0 auto;
      overflow: hidden;
      img{
        float: left;
      }
      .rightbox{
        width: 458px;
        float: left;
        margin-left: 14px;
        border: 1px solid #e6e6e6;
        background: white;
        overflow: hidden;
        padding-bottom: 91px;
        .twop{
          height: 31px;
          overflow: hidden;
          position: relative;
          p:first-of-type{
            border: 1px solid #dddee1;
            width: 88px;
            height: 29px;
            line-height: 29px;
            text-align: center;
            z-index: 10;
            font-size: 12px;
            float: left;
          }
          p:last-of-type{
            border: 1px solid #dddee1;
            height: 29px;
            line-height: 29px;
            width: 116px;
            text-align: center;
            font-size: 12px;
            float: left;
            margin-left: 6px;
            position: relative;
            &:before{
              content: '';
              display: inline-block;
              width: 7px;
              height: 1px;
              background: #dddee1;
              position: absolute;
              top: 27px;
              left: -7px;
            }
            &:after{
              content: '';
              display: inline-block;
              width: 300px;
              height: 1px;
              background: #dddee1;
              position: absolute;
              top: 27px;
              left: 115px;
            }
          }
          p{
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            background: white;
            cursor: pointer;
            box-sizing: border-box;
            color: red;
            &.active{
              background: #f8f8f9;
              border-bottom: none;
              color: black;
            }
          }
        }
        .widthbox{
          height: 112px;
          width: 1000px;
          position: relative;
          transition: 1s;
          .lebox{
            float: left;
            position: relative;
            .box:last-of-type{
              margin-top: 24px;
            }
            .box{
              width: 403px;
              overflow: hidden;
              border: 1px solid #dddee1;
              border-radius: 4px;
              margin: 17px 0 0 24px;
              span{
                display: inline-block;
                float: left;
                width: 25px;
                height: 34px;
                background: #eee;
                border-right: 1px solid #dddee1;
                .icon-user{
                  display: inline-block;
                  margin: 8px 0 0 5px;
                  color: #495060;
                }
                .icon-password{
                  font-size: 11px;
                  display: inline-block;
                  margin: 10px 0 0 7px;
                  color: #495060;
                }
              }
              input{
                width: 376px;
                height: 34px;
                line-height: 34px;
                font-size: 12px;
                color: #bbbec4;
                text-indent: 7px;
                border: none;
                float: left;
              }
            }
            .phonep{
              position: absolute;
              top: 52px;
              left: 24px;
              font-size: 12px;
              color: red;
            }
            .phonepass{
              position: absolute;
              top: 110px;
              left: 24px;
              font-size: 12px;
              color: red;
            }
          }
          .ribox{
            float: left;
            padding-left: 40px;
            .boxa{
              width: 403px;
              overflow: hidden;
              border: 1px solid #dddee1;
              border-radius: 4px;
              margin: 17px 0 0 24px;
              span{
                display: inline-block;
                float: left;
                width: 25px;
                height: 34px;
                background: #eee;
                border-right: 1px solid #dddee1;
                .icon-user{
                  display: inline-block;
                  margin: 8px 0 0 5px;
                  color: #495060;
                }
              }
              input{
                width: 376px;
                height: 34px;
                line-height: 34px;
                font-size: 12px;
                color: #bbbec4;
                text-indent: 7px;
                border: none;
                float: left;
              }
            }
            .clicksa{
              padding-left: 24px;
              overflow: hidden;
              padding-top: 24px;
              p:last-of-type{
                height: 34px;
                line-height: 34px;
                font-size: 12px;
                cursor: pointer;
              }
              p:first-of-type{
                width: 80px;
                height: 34px;
                line-height: 34px;
                border: 1px solid #dddee1;
                float: left;
                margin-right: 10px;
              }
            }
          }
        }
        .logo{
          width: 404px;
          height: 40px;
          line-height: 40px;
          margin: 32px auto 26px;
          font-size: 11px;
          color: white;
          text-align: center;
          background: #ff3c1b;
          border-radius: 4px;
        }
        .lrbox{
          overflow: hidden;
          .bottombox{
            overflow: hidden;
            float: left;
            padding-left: 26px;
            label{
              line-height: 11px;
              font-size: 11px;
              float: left;
              text-indent: 3px;
            }
            input{
              float: left;
            }
          }
          .rigbox{
            float: right;
            overflow: hidden;
            .one{
              float: left;
              line-height: 11px;
              font-size: 11px;
              padding-right: 6px;
            }
            .two{
              float: left;
              line-height: 11px;
              font-size: 11px;
              padding-right: 49px;
              color: #ff0000;
              cursor: pointer;
            }
          }
        }
        .weisinbox{
          .last{
            float: left;
            height: 30px;
            font-size: 11px;
            color: #495060;
            text-indent: 26px;
            margin-top: 21px;
          }
          img{
            float: left;
            margin: 20px 0 0 6px;
          }
        }
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
</style>
