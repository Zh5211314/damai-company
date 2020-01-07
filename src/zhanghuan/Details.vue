<template>
    <div id="details">
      <Head></Head>
      <div class="showDetail">
        <div class="brandNav">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">大卖</el-breadcrumb-item>
            <el-breadcrumb-item>北京</el-breadcrumb-item>
            <el-breadcrumb-item>电影</el-breadcrumb-item>
            <el-breadcrumb-item>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="detailBox">
          <div class="dentailLeft">
            <img src="../assets/img/detail_03.jpg"/>
            <div class="dentailLeftCont">
                <h2>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</h2>
                <p>“奇门遁甲”</p>
                <div class="contRange">
                  <el-steps :space="200" :active="2" finish-status="success">
                    <el-step title="项目待定"></el-step>
                    <el-step title="预售/预定"></el-step>
                    <el-step title="售票中"></el-step>
                    <el-step title="演出开始"></el-step>
                  </el-steps>
                </div>
                <div class="contTime">
                  <p>演出时间</p>
                  <div class="timeBox">
                    <span
                      v-for="(item, index) in showTime"
                      :key="index"
                      :class="{active: timeIndex == index}"
                      @click="choiceTimeFn(index)"
                    >
                      {{item}}
                    </span>
                  </div>
                </div>
                <div class="contPrice">
                  <span>选择票价</span>
                  <i
                    v-for="(item, index) in showPrice"
                    :key="index"
                    :class="{active:priceIndex==index}"
                    @click="choicePriceFn(index)"
                  >
                    {{item}}
                  </i>
                </div>
                <div @click="toSelect" class="buyBtn">
                  选座购买
                </div>
            </div>
          </div>
          <div class="dentailRight">
            <ul>
              <li>
                <p>大卖网评分</p>
                <el-rate
                  v-model="value3"
                  show-score
                  score-template="{value}"
                  allow-half
                  text-color="red"
                  :colors="['red', 'red', '#F7BA2A']"
                >
                </el-rate>
                <span>3000人参与评论</span>
              </li>
              <li>
                <p>演出时间</p>
                <p>2014-02-31  至   2015-23-02</p>
              </li>
              <li>
                <p>演出场馆</p>
                <p>中国儿童中心剧院 - 海淀</p>
                <p><span class="iconfont icon-dibiao"></span>交通路线</p>
              </li>
              <li>
                <p>票品支持</p>
                <p><span class="iconfont icon-meiyuan"></span>返积分</p>
              </li>
              <li>
                <p>实票配送</p>
                <p>
                  同城满100.00元免运费,不满收10.00元,快递发出1-3天送达
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="showInfoWrap">
        <div class="showInfoLeft">
          <ul class="leftTitle">
            <li :class="{active: index == LiIndex}"
                v-for="(item, index) in ['演出信息','精彩剧评','购买说明','付款方式']"
                :key="index"
                @click="changCardFn(index)"
            >
              {{item}}
            </li>
          </ul>
          <div class="leftContWrap"><!--less中给了这个四个盒子固定height-->
            <div class="leftContOne leftCont">
              <div>
                <h2>基本信息</h2>
                <div>
                  <table>
                    <tr>
                      <td>演出时间</td>
                      <td>2017.12.23 - 12.25</td>
                      <td>演出场馆</td>
                      <td>中国儿童中心剧院</td>
                    </tr>
                    <tr>
                      <td>演出时长</td>
                      <td>约70分钟</td>
                      <td>入场时间</td>
                      <td>约演出前30分钟</td>
                    </tr>
                    <tr>
                      <td>付款时小提醒</td>
                      <td>在中华民族传统节日农历春节来临之际，
                        习近平总书记在京看望慰问基层干部群众，
                        包饺子、拉家常、看望“快递小哥”，
                        并向全国各族人民致以美好的新春祝福。
                        亲切的问候、暖心的祝福、感人的情景……习近平总书记对人民群众的关怀和惦念犹如春风送暖，
                        温暖着每个人的心田。
                      </td>
                      <td>缺货登记梯形</td>
                      <td>
                        包饺子、拉家常、看望“快递小哥”，
                        并向全国各族人民致以美好的新春祝福。
                        亲切的问候、暖心的祝福、感人的情景……习近平总书记对人民群众的关怀和惦念犹如春风送暖，
                        温暖着每个人的心田。
                      </td>
                    </tr>
                    <tr>
                      <td>限购</td>
                      <td>亲切的问候、暖心的祝福、感人的情景</td>
                      <td>儿童入场梯形</td>
                      <td>儿童一律凭票入场</td>
                    </tr>
                    <tr>
                      <td>发票说明</td>
                      <td>演出结束后主办方开具</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
                <h2>项目介绍</h2>
                <div class="info_proj">
                  <h4>项目概况</h4>
                  <p>爱丽丝梦游仙境:</p>
                  <p>
                    人民是习近平总书记心中最深的牵挂。
                    党的十八大以来，每逢新春佳节，
                    到人民群众当中送祝福、问冷暖、听民声、解民忧，已经成为了习近平总书记的工作惯例。
                    从曾经“瘠苦甲于天下”的甘肃定西，到冰天雪地的内蒙古阿尔山；
                    从陕北高原上的梁家河黄土地，到红色圣地井冈山革命老区；
                    从“堆银砌玉”的张北草原，到坡急沟深的四川大凉山……习近平总书记的足迹遍及大江南北，
                    嘘寒问暖，访贫问苦，与人民群众心心相印，以行动彰显着人民勤务员的本色。
                  </p>
                </div>
              </div>
            </div>
            <div class="leftContTwo leftCont">
              <div>
                <h2>写剧评</h2>
                <div class="info_eval">
                  <p>
                    <span>打个分吧：</span>
                    <el-rate
                      v-model="value5"
                      show-score
                      text-color="red"
                      allow-half
                      score-template="{value}">
                    </el-rate>
                  </p>
                  <textarea v-model="evaluateCode" placeholder="写个评价吧10-10000字"></textarea>
                  <a @click="publishFn" href="javascript:;">
                    发布
                  </a>
                </div>
                <div class="eval_List">
                  <ul>
                    <li v-for="(item, index) in evalList">
                      <div class="eval_List_Left">
                        <p>
                          <span class="iconfont icon-user"></span>
                        </p>
                        <p>{{item.userName}}</p>
                      </div>
                      <div class="eval_List_right">
                        <p>
                          {{item.userCont}}
                        </p>
                        <el-rate
                          v-model="item.userVal"
                          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                          disabled
                        >
                        </el-rate>
                        <span>{{item.userTime}}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="leftContThr leftCont">
              <div>
                <h2>特别提示</h2>
                <div class="specialTip">
                  <h6>售前提示</h6>
                  <ul>
                    <li>
                      1，以行贿罪判处有期徒刑六年，决定执行死刑，缓期二年执行，剥夺政治权利终身，并处没收个人全部财产。
                      以行贿罪判处有期徒刑六年，决定执行死刑，缓期二年执行，剥夺政治权利终身，并处没收个人全部财产。
                      <span>取票地址>></span>
                    </li>
                    <li>
                      2，为他人谋取利益，3次索要和收受他人贿赂，共计142.9万余元；2004年至2007年期间
                    </li>
                    <li>
                      3，枣庄市中级人民法院审理认为，被告人彭庆国身为国家工作人员，利用职务上的便利，侵吞、骗取公共财物，数额特别巨大
                      为他人谋取利益，3次索要和收受他人贿赂，共计142.9万余元；2004年至2007年期间民法院审理认为，被告人彭庆国身为
                    </li>
                  </ul>
                  <h6>支付方式</h6>
                  <ul>
                    <li>被告人彭庆国为谋求个人职务晋升、工作安排等方面的不正当利益，先后3次送给他人银行卡</li>
                  </ul>
                  <h6>退/换货说明</h6>
                  <ul>
                    <li>
                      数额巨大，其行为已构成受贿罪；为谋取不正当利益，给予国家工作人员财物，情节严重，其行为已构成行贿罪
                      <span>大卖网退换货说明>></span>
                    </li>
                  </ul>
                </div>
                <h2>无线端购票</h2>
                <div class="wifiBuy">
                  <ul>
                    <li>
                      1，我们要在全社会大力弘扬家国情怀，培育和践行社会主义核心价值观，弘扬爱国主义、集体主义、社会主义精神
                    </li>
                    <li>
                      2，习总书记的重要讲话情真意切、温暖人心，必将激发起全国人民向着中华民族伟大复兴奋进的豪情壮志
                    </li>
                  </ul>
                  <div class="wifiBuy_edition">
                    <img src="../assets/img/buy_03.jpg"/>
                    <img src="../assets/img/buy_05.jpg"/>
                    <img src="../assets/img/buy_08.jpg"/>
                  </div>
                </div>
                <h2>网上订购</h2>
                <div class="wifiOrder">
                  <ul>
                    <li>
                      1，千千万万个家庭是国家发展、民族进步、社会和谐的重要基点，国家富强的成就源自每一个家庭涓滴成海。
                    </li>
                    <li>
                      2，要求真务实，脚踏实地，实干苦干，始终保持着那么一股子劲头、热情和精神，努力在新时代建功立业。
                    </li>
                  </ul>
                  <img src="../assets/img/buy_13.jpg"/>
                </div>
              </div>
            </div>
            <div class="leftContFour leftCont">
              <div>
                <h2>在线支付</h2>
                <p>
                  将个人志向建筑在为国家、为人民有益的事业中，以强烈的责任感担当起新时代赋予的使命与重任
                </p>
                <div class="payWay">
                  <p>支付平台:</p>
                  <p>
                    <img src="../assets/img/buy_17.jpg"/>
                    <img src="../assets/img/buy_19.jpg"/>
                  </p>
                </div>
                <h2>柜台付款</h2>
                <p>
                  民风相融汇国风。万家团圆、共享天伦、共祝美好的新春佳节，也是千家万户代际相融、凝聚共识、继往开来的美好时节
                </p>
                <h2>电子钱包</h2>
                <p>
                  继续投身伟大事业，始终与国家共命运，与时代共融合，与人民共奋斗，用辛勤劳动创造中国人民的美好生活
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="showInfoRight">
          <div class="right_recomd">
            <h1>热门推荐</h1>
            <div class="big_recomd">
              <img src="../assets/img/recom_03.jpg"/>
              <p>
                流光之城  光谷十年·就制成影展
              </p>
            </div>
            <ul>
              <li>
                <p>孟京辉戏剧作品 《两只狗的生活意见》武汉站</p>
                <p>2017-12-31 20:00</p>
              </li>
              <li>
                <p>伊藤瑞二经典美学AR作品展</p>
                <p>2017-12-31 18:00</p>
              </li>
            </ul>
          </div>
          <div class="right_history">
            <h1>浏览历史</h1>
            <ul>
              <li v-for="(item, index) in historyCode">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Head from '@/zhanghuan/Head'
import Footer from '@/zhanghuan/Footer'
var evalList = [   //已有的用户评论假数据
  {
    'userName':'小王的名',
    'userCont':'这是一段很长的剧评，' +
                '很长很长的剧评这是一段很长的剧评 很长很长的剧评这是一段' +
                '很长的剧评很长很长的剧评这是一段很长的剧评，很长很长的剧评',
    'userTime':'2017-12-31',
    'userVal':3.5
  },
  {
    'userName':'例子的名',
    'userCont':'我们要在全社会大力弘扬家国情怀，' +
                '培育和践行社会主义核心价值观，' +
                '弘扬爱国主义、集体主义、社会主义精神，提倡爱家爱国相统一，' +
                '让每个人、每个家庭都为中华民族大家庭作出贡献',
    'userTime':'2018-02-21',
    'userVal':2
  },
]
var historyCode = [
  "2019《致亲爱的你》情人节演唱会，一声情人，一生情人",
  "林宥嘉idol世界巡回演唱会成都站",
  "《印象陕北》原生陕北民歌特色演出",
  "“千与千寻”久石让.宫崎骏动漫视听作品 新春专场音乐会",
  "舞剧《永不消逝的电波》",
  "2019《致亲爱的你》情人节演唱会，一声情人，一生情人",
  "林宥嘉idol世界巡回演唱会成都站",

]
var showTime = [
  "1995-02-31 05:20:55",
  "1995-02-31 05:20:55",
  "1995-02-31 05:20:55",
  "1995-02-31 05:20:55",
  "1995-02-31 05:20:55"
]
var showPrice = [
  "80元","90元","100元"
]
export default {
  name: 'Details',
  data () {
    return {
      value3:3.5,
      LiIndex:0,
      value5:2.5,
      evaluateCode:null,
      value4:3,
      evalList,
      nowTime:'',
      historyCode,
      showTime,
      timeIndex:0,
      showPrice,
      priceIndex:0
    }
  },
  components: {
    Head,
    Footer,
  },
  methods : {
    changCardFn (index) {//点击切换选项卡
      this.LiIndex = index
      let tabCard = document.querySelectorAll(".leftCont")
      for(var i = 0; i < tabCard.length; i++) {
        tabCard[i].style.display = "none"
      }
      tabCard[index].style.display = "block"
    },
    publishFn () {//点击发表评论
      this.timeFormate()//调用事件函数
      var obj = {
        'userName':'这个用户名是从登陆的户名那里获取的',
        'userCont':this.evaluateCode,
        'userTime':this.nowTime,
        'userVal': this.value5
      }
      if(this.evaluateCode != null && this.evaluateCode.length >= 10){
        this.evalList.unshift(obj)
        this.evaluateCode = ''
        console.log(this.nowTime)
        obj = {
          'userName':'',
          'userCont':'',
          'userTime':'',
          'userVal': 0
        }
      }
    },
    timeFormate() {//时间函数
      let year = new Date().getFullYear();
      let month =new Date().getMonth() + 1 < 10? "0" + (new Date().getMonth() + 1): new Date().getMonth() + 1;
      let date =new Date().getDate() < 10? "0" + new Date().getDate(): new Date().getDate();
      let hh =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
      let mm =new Date().getMinutes() < 10? "0" + new Date().getMinutes(): new Date().getMinutes();
      this.nowTime = year + "-" + month + "-" + date +"   "+hh+":"+mm ;
    },
    choiceTimeFn (index) {//选择时间
      this.timeIndex = index
    },
    choicePriceFn (index) {
      this.priceIndex = index
    },
    toSelect () {
      this.$router.push('/select')
    }
  }

}
</script>

<style scoped lang="less">
#details{
  background: #f5f5f5 ;
  .showDetail{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    height: 488px;
    .brandNav{
      height: 33px;
      background: #f5f5f5 ;
      padding-left: 30px;
    }
    .detailBox{
      height: 424px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 31px;
      .dentailLeft{
        width: 896px;
        height: 100%;
        margin-left: 21px;
        display: flex;
        justify-content: space-between;
        &>img{
          width:276px ;
          height: 371px;
        }
        .dentailLeftCont{
          width: 600px;
          height: 100%;
          &>h2{
            font-size: 17px;
            height: 24px;
            line-height: 24px;
          }
          &>p{
            margin: 36px 0 24px 0;
            font-size: 12px;
          }
          .contRange{
            height: 85px;
            background: #f7f7f7;
            overflow: hidden;
            margin-bottom: 25px;
            .el-steps{
              margin: 20px 0 0 50px;
            }
          }
          .contTime{
            display: flex;
            font-size: 12px;
            margin-bottom: 25px;
            &>p{
              width: 88px;
              height: 70px;
              line-height: 70px;
            }
            .timeBox{
              span{
                border: 1px solid #ccc;
                width: 144px;
                height: 30px;
                display: inline-block;
                margin-top: 4px;
                border-radius: 5px;
                line-height: 30px;
                text-align: center;
                cursor: pointer;
                margin-right: 10px;
                &.active{
                  border: 1px solid red;
                  color: red;
                }
              }
            }
          }
          .contPrice{
            font-size: 12px;
            margin-bottom: 25px;
            &>span{
              padding-right: 10px;
            }
            i{
              border: 1px solid #ccc;
              display: inline-block;
              width: 60px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              border-radius: 3px;
              cursor: pointer;
              margin-right: 10px;
              &.active{
                border: 1px solid red;
                color: red;
              }
            }
          }
          .buyBtn{
            background: red;
            color: #fff;
            width: 150px;
            height: 40px;
            border-radius: 5px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            margin-left: 63px;
          }
        }
      }
      .dentailRight{
        width: 262px;
        height: 100%;
        margin-right: 11px;
        ul{
          li{
            border-bottom: 1px dashed #ccc;
            p:first-of-type{
              height: 40px;
              line-height: 40px;
              font-size: 12px;
            }
            p:last-of-type{
              line-height: 40px;
              font-size: 11px;
              span{
                color: red;
              }
            }
          }
          li:first-of-type{
            overflow: hidden;
            font-size: 12px;
            .el-rate{
              float: left;
            }
            span{
              float: right;
            }
          }
          li:last-of-type{
            p:last-of-type{
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  .showInfoWrap{
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;
    .showInfoLeft{
      width: 917px;
      background: #fff;
      float: left;
      .leftTitle{
        margin-bottom: 30px ;
        display: flex;
        li{
          cursor: pointer;
          padding: 0 15px;
          height: 30px;
          line-height: 30px;
          border-top: 2px solid transparent;
          font-size: 14px;
          &.active{
            border-top: 2px solid red;
            color: red;
          }
        }
      }
      .leftContWrap{
        &>div{
          display: none;
          width: 100%;
          &>div{
            width: 887px;
            margin: 0 auto;
            &>h2{
              font-size: 17px;
              height:18px ;
              line-height: 18px;
              color: #8c8c8c;
              font-weight: normal;
              padding-left: 12px;
              position: relative;
              &:before{
                content: '';
                display: inline-block;
                width: 2px;
                height: 18px;
                background: red;
                position: absolute;
                left: 0;
                top: 0;
              }
              &:after{
                content: '';
                display: inline-block;
                width: 780px;
                height: 0;
                border-top: 2px dotted #8b8b8b;
                position: absolute;
                right: 0;
                top: 50%;
              }
            }
          }
        }
        .leftContOne{
          display: block;
          table{
            color: #666;
            font-size: 14px;
            border-collapse:collapse;
            border-top: 2px solid #888;
            margin: 30px 0 30px 105px;
            tr{
              td{
                border-bottom: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
                padding: 12px 0;
              }
              td:nth-of-type(1),td:nth-of-type(3){
                width: 113px;
                background: #f6f6f6;
                color: #656565;
                font-weight: bold;
                text-indent: 12px;
              }
              td:nth-of-type(2){
                width: 258px;
                padding: 0 12px;
              }
              td:nth-of-type(4){
                width: 220px;
                border-right: none;
                padding: 0 12px;
              }
            }
          }
          .info_proj{
            margin: 30px 0 60px 105px;
            &>h4{
              height: 40px;
              line-height: 40px;
              background: #f6f6f6;
              font-size: 14px;
              text-indent: 12px;
              font-weight: normal;
              margin-bottom: 20px;
            }
            &>p{
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
        .leftContTwo{
          .info_eval{
            margin: 14px 0 43px 105px;
            &>p{
              overflow: hidden;
              margin-bottom: 13px;
              span{
                float: left;
                font-size: 12px;
                position: relative;
                top: 3px;
              }
              .el-rate{
                float: left;
              }
            }
            textarea{
              width: 744px;
              height: 52px;
              padding: 12px;
            }
            &>a{
              display: block;
              width: 150px;
              height: 42px;
              line-height: 42px;
              background: red;
              color: #fff;
              font-size: 17px;
              border-radius: 5px;
              margin-top: 12px;
              text-align: center;
            }
          }
          .eval_List{
            ul{
              li{
                display: flex;
                justify-content: space-between;
                margin-bottom: 36px;
                .eval_List_Left{
                  width: 44px;
                  font-size: 12px;
                  p:first-of-type{
                    border: 1px solid #ccc;
                    background:#f0f0f0;
                    width: 43px;
                    height: 43px;
                    line-height: 43px;
                    text-align: center;
                    span{
                      font-size: 35px;
                      color: #ccc;
                    }
                  }
                  p:last-of-type{
                    margin-top: 9px;
                    -ms-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    height: 14px;
                  }
                }
                .eval_List_right{
                  width: 820px;
                  background: #f0f0f0;
                  height: 85px;
                  p{
                    -ms-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    height: 57px;
                    line-height: 57px;
                    font-size: 12px;
                    color: #000;
                    padding-left: 23px;
                  }
                  .el-rate{
                    margin-left: 23px;
                    float: left;
                  }
                  &>span{
                    float: left;
                    padding-left: 40px;
                  }
                }
              }
            }
          }
        }
        .leftContThr{
          h2:nth-of-type(2){
            margin-top: 25px;
          }
          .specialTip{
            margin-top: 15px;
            font-size: 12px;
            h6{
              height: 26px;
              line-height: 26px;
              color: #fa5a36;
              font-weight: normal;
            }
            ul{
              width: 780px;
              li{
                line-height: 24px;
                span{
                  color: #fa5a36;
                  cursor: pointer;
                }
              }
            }
          }
          .wifiBuy{
            margin-top: 15px;
            ul{
              font-size: 12px;
              li{
                line-height: 24px;
              }
            }
            .wifiBuy_edition{
              margin: 25px 0 47px 0;
              img{
                margin-right: 10px;
                display: inline-block;
              }
            }
          }
          .wifiOrder{
            ul{
              margin: 10px 0 35px 0;
              font-size: 12px;
              line-height: 24px;
            }
            img{
              margin-bottom: 39px;
            }
          }
        }
        .leftContFour{
          p{
            height:70px ;
            line-height: 70px;
            font-size: 12px;
            &:first-of-type{
              font-weight: bold;
            }
          }
          .payWay{
            p:first-of-type{
              height: 20px;
              line-height: 20px;
              font-size: 12px;
            }
            p:last-of-type{
              margin-top: 5px;
              img{
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
    .showInfoRight{
      width: 273px;
      float: right;
      font-size: 12px;
      h1{
        font-size: 16px;
        padding: 6px 0 17px 0;
        border-bottom: 1px solid #ccc;
      }
      .right_recomd{
        background: #fff;
        padding: 10px 10px 0 20px;
        .big_recomd{
          margin-top: 13px;
          border-bottom: 1px dotted #ccc;
          p{
            height: 27px;
            line-height: 27px;
            color: #737373;
          }
        }
        ul{
          li{
            p{
              line-height: 22px;
            }
          }
        }
      }
      .right_history{
        background: #fff;
        margin-top: 20px;
        padding: 10px 10px 0 20px;
        ul{
          margin-top: 15px;
          li{
            line-height: 26px;
            margin-bottom: 10px;
            color: #424242;
          }
        }
      }

    }
  }
}

</style>
