<template>
    <div id="OrderHeader">
      <div class="HeadWrap">
        <div class="head">
          <div class="left">
            <p>HI,欢迎来大麦</p>
            <p>
              [<router-link tag="span" to="/logining">登录</router-link>
              <router-link tag="span" to="/resigter">注册</router-link>]
            </p>
            <div @mouseleave="myinfoHide"  @mouseenter="myinfoShow" class="left_myinfo">
              <p>我的大麦<span class="iconfont icon-down-trangle"></span></p>
              <ul :style="{opacity:opacityNum,height:heightNum+'px'}" v-show="off1">
                <router-link tag="li" to="/yan">个人信息</router-link>
                <router-link tag="li" to="/yan">订单管理</router-link>
              </ul>
            </div>
          </div>
          <div class="right">
            <ul @mouseleave="toolHide">
              <li @mouseenter="toolShow(indexM)" v-for="(itemM, indexM) in ulCode" :key="indexM">
                {{itemM}}<span v-if="indexM == 2 || indexM == 3" class="iconfont icon-down-trangle"></span>
                <div @mouseenter="boxShowFn" :style="{display:indexMshow  == 0? 'block':'none'}" v-if="indexM === 0 " class="chatCode">
                  <img src="../assets/img/erWeima.jpg"/>
                </div>
                <div @mouseenter="boxShowFn" :style="{display:indexMshow  == 1? 'block':'none'}" v-if="indexM === 1" class="chatCode">
                  <img src="../assets/img/erWeima.jpg"/>
                </div>
                <div @mouseenter="boxShowFn" :style="{display:indexMshow  == 2? 'block':'none'}" v-if="indexM === 2" class="right_serivce">
                  <ul>
                    <li>帮助中心</li>
                    <li>在线客服</li>
                    <li>人工服务</li>
                  </ul>
                </div>
                <div @mouseenter="boxShowFn" :style="{display:indexMshow  == 3? 'flex':'none'}" v-if="indexM === 3" class="right_city">
                  <div class="right_city_left">
                    <h3>演出分类</h3>
                    <div class="city_left_sort">
                      <ul v-for="(item, index) in showCode" :key="index">
                        <li v-for="(items, indexs) in item">
                          {{items}}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="right_city_right">
                    <h3>城市切换</h3>
                    <div class="city_right_sort">
                      <ul v-for="(item, index) in cityCode">
                        <li @click="changCity(items)" v-for="(items, indexs) in item">
                          {{items}}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  var showCode = {
    oneCode:['演唱会','舞蹈芭蕾','度假休闲','话剧歌剧'],
    twoCode:['音乐会','曲苑杂坛','儿童亲子','动漫']
  }
  var cityCode = {
    oneCode: ['北京','台州','宁波','昆明','南昌','苏州'],
    twoCode: ['广州','西安','无锡','南宁','温州','郑州'],
    threCode: ['上海','杭州','深圳','佛山','长沙','东莞'],
    fourCode: ['南京','成都','武汉','太远','福州'],
    fiveCode: ['香港','重庆','济南','哈尔滨','天津']
  }
  var ulCode = ['大麦网微信','手机版','客户服务','网站导航','English']
    export default {
      name: "Header",
      data () {
        return {
          showCode,
          cityCode,
          off1:false,
          opacityNum:0,
          timer1:null,
          heightNum:0,
          ulCode,
          indexMshow:-1,
          timer2:null,
          cityName:'北京',
          //以上都是Head里的数据
        }
      },
      methods: {
        myinfoShow () {//我的大卖显示
          let _this = this
          clearInterval(this.timer1)
          this.timer1 = setInterval(function () {
            if(_this.opacityNum >= 1){
              clearInterval(_this.timer1)
              _this.opacityNum = 1
              _this.heightNum = 68
            }
            _this.heightNum += 7
            _this.opacityNum += 0.1
          },50)

          this.off1 = true
        },
        myinfoHide () {//我的大卖隐藏
          let _this = this
          clearInterval(this.timer1)
          this.timer1 = setInterval(function () {
            if(_this.opacityNum <= 0){
              clearInterval(_this.timer1)
              _this.opacityNum = 0
              _this.heightNum = 0
              _this.off1 = false
            }
            _this.heightNum -= 7
            _this.opacityNum -= 0.1
          },50)
        },
        toolShow (indexM) {//右侧导航滑过显示子菜单
          this.indexMshow = indexM
        },
        toolHide () {//右侧导航滑出延时隐藏
          var _this = this
          this.timer2 = setTimeout(function () {
            _this.indexMshow = -1
          },300)
        },
        boxShowFn () {//子菜单滑出隐藏
          clearTimeout(this.timer2)
        },
        changCity (items) {//点击更换城市
          this.cityName = items
        },
        //以上为Head里的事件
      }

    }
</script>

<style scoped lang="less">
  #OrderHeader{
    .HeadWrap{
      height: 34px;
      line-height: 34px;
      border-bottom: 1px solid #ccc;
      background: #f7f7f7;
    }
    .head{
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #495060;
      .left{
        display: flex;
        p:first-of-type{
          padding-right: 4px;
        }
        p:nth-of-type(2){
          margin-right: 10px;
          span:first-of-type{
            color: red;
            padding-left: 3px;
            cursor: pointer;
          }
          span:last-of-type{
            color: #1b1b1b;
            padding-right: 3px;
            cursor: pointer;
          }
        }
        .left_myinfo{
          position: relative;
          &>p{
            cursor: pointer;
          }
          &>ul{
            text-align: center;
            cursor: pointer;
            background: #fff;
            box-shadow: 0px 0px 4px #ccc;
            width: 100px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 44px;
            z-index: 3;
            li:hover{
              background: #ccc;
              color: green;
            }
          }
        }
      }
      .right{
        &>ul{
          display: flex;
          &>li{
            cursor: pointer;
            margin-right: 26px;
            position: relative;
            &>div{
              background: #fff;
              box-shadow: 0 0 3px #ccc;
              padding: 10px;
              border-radius: 4px;
              position: absolute;
              top: 44px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 3;
              &.chatCode{
                -display: none;
              }
            }
            &:nth-of-type(3){
              &>div{
                text-align: center;
                width: 100px;
                -display: none;
                &>ul{
                  width: 100%;
                  li:hover{
                    background: #ccc;
                    color: green;
                  }
                }
              }
            }
            &:nth-of-type(4){
              &>div{
                width: 440px;
                height: 242px;
                padding: 14px 0 21px 0;
                display: flex;
                -display: none;
                &>div{
                  h3{
                    margin-top: 6px;
                    text-indent: 10px;
                    font-size: 14px;
                    color: #5f5f5f;
                    height: 30px;
                    line-height: 30px;
                    font-weight: normal;
                  }
                }
                .right_city_left{
                  width: 153px;
                  border-right: 1px solid #ccc;
                  .city_left_sort{
                    display: flex;
                    color: #252525;
                    ul{
                      margin-left: 10px;
                      li:hover{
                        color: red;
                      }
                    }
                    ul:last-of-type{
                      margin-left: 20px;
                    }
                  }
                }
                .right_city_right{
                  width: 280px;
                  .city_right_sort{
                    display: flex;
                    ul{
                      margin-left: 28px;
                      li:hover{
                        color: red;
                      }
                    }
                    ul:first-of-type{
                      margin-left: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
