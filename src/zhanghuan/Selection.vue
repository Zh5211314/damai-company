<template>
    <div id="select">
      <Head></Head>
      <div class="main">
        <div class="brandNav">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">大麦</el-breadcrumb-item>
            <el-breadcrumb-item>北京</el-breadcrumb-item>
            <el-breadcrumb-item>电影</el-breadcrumb-item>
            <el-breadcrumb-item>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</el-breadcrumb-item>
            <el-breadcrumb-item>这里是用户选择的时间</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="seat">
          <img src="../assets/img/zuowei_03.jpg"/>
          <div class="seat_wrap">
            <div class="seat_left">
              <div id="seatMap">
                <div class="seat-charts-row" v-for="(item,x) in seatOrder"  :key="x">
                  <div @click="userChoiceFn(x,y,subItem)" ref="allSeat" class="allPublicGray" v-for="(subItem,y) in getItems(item)" :key="y">
                    <div v-if="subItem =='a'" :class="{bgBlack: seatGrade[0].off}"><img src="../assets/img/A.png"/></div>
                    <div v-if="subItem =='b'" :class="{bgBlack: seatGrade[1].off}"><img src="../assets/img/B.png"/></div>
                    <div v-if="subItem =='c'" :class="{bgBlack: seatGrade[2].off}"><img src="../assets/img/C.png"/></div>
                    <div v-if="subItem =='_'"></div>
                  </div>
                </div>
              </div>
              <div class="seatStatus">
                <ul>
                  <li v-for="(item, index) in seatGrade" :key="index">
                    <span>{{item.price}}</span>
                    <span>{{item.grade}}</span>
                    <input @click="choiceGradeFn(index)" type="checkbox">
                  </li>
                </ul>
                <img src="../assets/img/seatG_03.jpg"/>
              </div>
            </div>
            <div class="seat_right">
              <h3>已选座位【{{seatNumber}}】</h3>
              <ul v-if="getSeatCode != []">
                <li v-for="(item, index) in getSeatCode" :key="index">
                  <p>座位：{{item.col}}排{{item.row}}号</p>
                  <p>价格：{{item.price}}</p>
                  <p>看台：中心剧院</p>
                  <p>楼层：剧场</p>
                </li>
              </ul>
              <h1 v-if="seatNumber != 0">
                <p>总价：{{allMoney}}元</p>
                <a @click="toOrder()" href="javascript:;">购买</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Head from '@/zhanghuan/Head'
import Footer from '@/zhanghuan/Footer'
var seatOrder = [
  "_____aaaaa_____aaaa_____aaaa____",
  "___ccccccc____cccccc____ccccc___",
  "__aaaaaaaa___aaaaaaaa___aaaaaa__",
  "__cccccccc__bbbbbbbbbb__ccccccc_",
  "_aaccccccc_bbbbbbbbbbbb_ccccccca",
  "_aaccccccc_bbbbbbbbbbbb_ccccccca",
  "________________________________",
  "_aaaaaaaaa__cccccccccc__aaaaaaaa",
  "_aaaaaaaaa__cccccccccc__aaaaaaaa",
  "__aaaaaaaa___aaaaaaaa___aaaaaaa_",
  "__aaaaaaaa___aaaaaaaa___aaaaaaa_"
]
var seatGrade = [
  {
    'price':'120元',
    'grade':'A级',
    'off':false,
  },
  {
    'price':'100元',
    'grade':'B级',
    'off':false
  },
  {
    'price':'90元',
    'grade':'C级',
    'off':false
  }
]
export default {
  name: 'Selection',
  data () {
    return {
      seatOrder,
      seatGrade,
      getSeatCode:[],
      seatNumber:0,
      allMoney:0
    }
  },
  components: {
    Head,
    Footer
  },
  methods: {
    //选座页面的放大缩小和移动
    bindScroll() {
      //  添加鼠标点下和移动事件，通过这两个事件进行监听，通过修改position的top和left值进行界面的移动。
      var oImg = document.getElementById("seatMap");
      oImg.onmousedown = function(ev) {
        var ev = ev || event;
        var disX = ev.clientX - oImg.offsetLeft;
        var disY = ev.clientY - oImg.offsetTop;
        if (oImg.setCapture) {
          oImg.setCapture();
        }
        document.onmousemove = function(ev) {
          var ev = ev || event;
          oImg.style.left = ev.clientX - disX + "px";
          oImg.style.top = ev.clientY - disY + "px";
        };
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null;
          //释放全局捕获 releaseCapture();
          if (oImg.releaseCapture) {
            oImg.releaseCapture();
          }
        };
        return false;
      };
      // 监听滚轮滚动事件，并使用scale 对页面进行操作，实现界面的放大和缩小。
      oImg.onmousewheel = fn;
      if (oImg.addEventListener) {
        oImg.addEventListener("DOMMouseScroll", fn, false);
      }
      var scaleSize = 1;
      function fn(ev) {
        var ev = ev || event;
        var b = true;
        if (ev.wheelDelta) {    //ev.wheelDelta和ev.detail做兼容
          b = ev.wheelDelta > 0 ? true : false;
        } else {
          b = ev.detail < 0 ? true : false;
        }
        if (b) {
          scaleSize += 0.03;
          scaleSize = scaleSize > 2 ? 2 : scaleSize;
        } else {
          scaleSize -= 0.03;
          scaleSize = scaleSize < 0.5 ? 0.5 : scaleSize;
        }
        this.style.transform = "scale(" + scaleSize + ")";
        if (ev.preventDefault) {
          ev.preventDefault();
        }
        return false;
      }
    },
    getItems (item) {  //封装的将字符串转成一个数组的方法，遍历数组中每一个元素
      return item.match(/[a-z_]{1}(\[[0-9a-z_]{0,}(,[0-9a-z_ ]+)?\])?/gi);
    },
    choiceGradeFn (index) {//三个等级座位分布展示
      this.seatGrade[index].off = !this.seatGrade[index].off
        //console.log(this.seatGrade[index].off, index)
    },
    userChoiceFn (x,y,subItem) {//x:一行  y:一列  subItem：每个div
      var price = 0
      if (subItem == 'a') {
        price = 120
      }else if(subItem == 'b'){
        price = 100
      }else {
        price = 90
      }
      var obj = {   //每次push进右边的选择数组中的数据
        'col':x,
        'row':y,
        'price':price,
        'num': x+'-'+y  //传给后台字段，根据这个字段找到用户要取消的座位
      }
      var userSitNum = x*32+y//计算当前用户点击的座位的下标
      let oDivs = document.getElementsByClassName('allPublicGray')//选中所有的座位
      //console.log(oDivs[userSitNum].off)
      oDivs[userSitNum].off = !oDivs[userSitNum].off//用户点击当前座位自定义属性取反，也就是选中和取消
      if(oDivs[userSitNum].off){
          if(subItem == 'a' || subItem == 'b' || subItem == 'c'){  //判断点击空白处不添加背景和座位信息
                this.getSeatCode.push(obj)//点击添加座位信息

                this.$refs.allSeat[userSitNum].innerHTML = '<img style="width: 16px;height: 16px" src="../../static/img/geted.png"/>'

                this.seatNumber = this.getSeatCode.length//座位个数
                //计算总价
                var userPrice = this.getSeatCode.map(function (item,index) { //薅出来数组中每项的价格组成新数组
                  return item.price
                })
                if(userPrice.length > 1){  //判断当用户只添加一个座位时reduce
                    this.allMoney = userPrice.reduce(function (prev,next) {  //将价格相加
                      return  prev + next
                    })
                }else if(userPrice.length == 1) {
                  this.allMoney = userPrice[0]
                }
                //console.log(userPrice)
          }
      }else {
        if (subItem == 'a'){
                var deleteArr = this.getSeatCode.filter(function (item,index) {//筛选出用户取消的座位信息
                  return item.num == x+'-'+y
                })
                //console.log(deleteArr)
                this.getSeatCode.remove(deleteArr[0])
                this.seatNumber = this.getSeatCode.length//计算用户选择的座位总数
                //计算总价
                var userPrice = this.getSeatCode.map(function (item,index) { //薅出来数组中每项的价格组成新数组
                  return item.price
                })
                if(userPrice.length > 1){
                  this.allMoney = userPrice.reduce(function (prev,next) {  //将价格相加
                    return  prev + next
                  })
                }else if(userPrice.length == 1) {
                  this.allMoney = userPrice[0]
                }
          this.$refs.allSeat[userSitNum].innerHTML = '<img style="width: 16px;height: 16px" src="../../static/img/A.png"/>'
        }else if(subItem == 'b'){
                var deleteArr = this.getSeatCode.filter(function (item,index) {
                  return item.num == x+'-'+y
                })
                this.getSeatCode.remove(deleteArr[0])
                this.seatNumber = this.getSeatCode.length//计算用户选择的座位总数
                //计算总价
                var userPrice = this.getSeatCode.map(function (item,index) { //薅出来数组中每项的价格组成新数组
                  return item.price
                })
                if(userPrice.length > 1){
                  this.allMoney = userPrice.reduce(function (prev,next) {  //将价格相加
                    return  prev + next
                  })
                }else if(userPrice.length == 1) {
                  this.allMoney = userPrice[0]
                }
          this.$refs.allSeat[userSitNum].innerHTML = '<img style="width: 16px;height: 16px" src="../../static/img/B.png"/>'
        }else if(subItem == 'c'){
                var deleteArr = this.getSeatCode.filter(function (item,index) {
                  return item.num == x+'-'+y
                })
                this.getSeatCode.remove(deleteArr[0])
                this.seatNumber = this.getSeatCode.length//计算用户选择的座位总数
                //计算总价
                var userPrice = this.getSeatCode.map(function (item,index) { //薅出来数组中每项的价格组成新数组
                  return item.price
                })
                if(userPrice.length > 1){
                  this.allMoney = userPrice.reduce(function (prev,next) {  //将价格相加
                    return  prev + next
                  })
                }else if(userPrice.length == 1) {
                  this.allMoney = userPrice[0]
                }
          this.$refs.allSeat[userSitNum].innerHTML = '<img style="width: 16px;height: 16px" src="../../static/img/C.png"/>'
        }
      }
      //console.log(this.getSeatCode)
    },
    toOrder () {//点击购买
      this.$router.push('/order')
      this.$store.commit('getSitcode',this.getSeatCode)
      //console.log(this.$store.state.sitCode)
    },
  },
  mounted () {
    this.bindScroll()
    let oDivs = document.getElementsByClassName('allPublicGray')
    for (var i = 0; i < oDivs.length ; i++){
      oDivs[i].off = false
    }
    Array.prototype.indexOf = function(val) {   //封装的数组删除指定元素的方法，在217行调用
      for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
      }
      return -1;
    }
    Array.prototype.remove = function(val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped lang="less">
#select{
  background: #f5f5f5 ;
  .main{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .brandNav{
      margin-bottom: 40px;
      .el-breadcrumb{
        margin-left: 15px;
      }
    }
    .seat{
      background: #fff;
      margin-bottom: 20px;
      &>img{
        width: 1202px;
      }
      .seat_wrap{
        display: flex;
        justify-content: space-between;
        .seat_left{
          width: 1000px;
          height: 674px;
          background: #fff;
          position: relative;
          overflow: hidden;
          #seatMap{
            width: 800px;
            height: 574px;
            position: absolute;
            left: 100px;
            top: 50px;
            .seat-charts-row{
              margin-bottom: 32px;
            }
            .allPublicGray{
              width: 18px;
              height: 18px;
              display: inline-block;
              margin-right: 7px;
              text-align: center;
              line-height: 18px;
              img{
                width:16px;
                height: 16px;
                display: inline-block;
              }
            }
            .bgBlack{
              background: url("../assets/img/black.png") no-repeat;
              background-size: 18px;
            }
          }
          .seatStatus {
            position: absolute;
            border: 1px solid red;
            width: 200px;
            height: 200px;
            left: 0;
            bottom: 0;
            background: #fff;
            border-radius: 8px;
            &>img{
              margin-left: 20px;
            }
            ul{
              font-size: 12px;
              margin: 20px;
              border-bottom: 1px solid #ccc;
              li{
                margin-bottom: 10px;
                padding: 0 5px;
                span:first-of-type{
                  background: red;
                  display: inline-block;
                  width: 56px;
                  text-align: center;
                }
                span:last-of-type{
                  font-weight: bold;
                  padding-left: 10px;
                }
                input{
                  margin-left: 10px;
                }
              }
              li:nth-of-type(2){
                span:first-of-type{
                  background: #fd68a6;
                }
              }
              li:nth-of-type(3){
                span:first-of-type{
                  background: #65a9fd;
                }
              }
            }
          }
        }
        .seat_right{
          width: 200px;
          height: 674px;
          background: #efefef;
          overflow:auto ;
          h3{
            background: #eee;
            height: 30px;
            line-height: 30px;
            font-size: 17px;
            text-align: center;
            font-weight: normal;
            margin-bottom: 10px;
          }
          h1{
            text-align: center;
            p{
              font-size: 16px;
              color: red;
              height: 40px;
              line-height: 40px;
            }
            a{
              display: block;
              width: 100px;
              height: 32px;
              text-align: center;
              line-height: 32px;
              margin: 0 auto;
              font-size: 14px;
              color: #fff;
              background: red;
              border-radius: 5px;
            }
          }
          ul{
            font-size: 14px;
            li{
              border-bottom: 1px solid #ccc;
              margin-bottom: 10px;
              padding-left: 10px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
