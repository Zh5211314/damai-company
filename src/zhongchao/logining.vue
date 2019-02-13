<template>
    <div class="login">
      <div class="headbox">
        <div class="head">
          <img src="../assets/img/resigter-logo.png" alt="">
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
                  <input type="text" placeholder="请输入手机号">
                </div>
                <div class="box">
                  <span><i class="iconfont icon-password"></i></span>
                  <input type="text" placeholder="请输入登录密码">
                </div>
              </div>
              <div class="ribox">
                <div class="boxa">
                  <span><i class="iconfont icon-user"></i></span>
                  <input type="text" placeholder="请输入手机号">
                </div>
                <div class="clicksa">
                  <p></p>
                  <button>点击发送</button>
                </div>
              </div>
            </div>
            <p class="logo">登录</p>
            <div class="lrbox">
              <div class="bottombox">
                <input type="checkbox" id="asd">
                <label for="asd">下次自动登录</label>
              </div>
              <div class="rigbox">
                <p class="one">忘记密码?</p>
                <p class="two">立即注册</p>
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
          ]
        }
      },
      methods: {
        changed(i) {
          this.index = i;
          if(i == 1){
            this.olefts = -466
          }else {
            this.olefts = 0
          }
        }
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
          border-bottom: 1px solid #dddee1;
          .active{
            background: #ccc;
          }
          p{
            border: 1px solid #dddee1;
            border-bottom: none;
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            background: white;
          }
          p:first-of-type{
            width: 88px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            font-size: 12px;
            float: left;
          }
          p:last-of-type{
            height: 32px;
            line-height: 32px;
            width: 116px;
            text-align: center;
            font-size: 12px;
            position: absolute;
            top: 0;
            left: 94px;
          }
        }
        .widthbox{
          height: 112px;
          width: 1000px;
          position: relative;
          transition: 1s;
          .lebox{
            float: left;
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
              button{
                height: 34px;
                line-height: 34px;
                margin-left: 6px;
              }
              p{
                width: 80px;
                height: 34px;
                line-height: 34px;
                border: 1px solid #dddee1;
                float: left;
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
