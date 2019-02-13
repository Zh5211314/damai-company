<template>
    <div id="ListPage">
      <Head></Head>
      <div class="listHead">
        共<span>{{goodsNum}}</span>个商品
      </div>
      <div class="listWrap">
        <div class="listSort">
          <div class="listSortTitle">
            <ul>
              <li ref="liT" v-for="(item, index) in sortTitle" :key="index">
                <span>{{item.title}}</span>：
                <a href="javascript:;"
                   v-for="(items, indexs) in item.links"
                   :key="indexs"
                   :class="{'active': indexs == item.index}"
                   @click="choiceFn(index, indexs)"
                >
                  {{items}}
                </a>
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']"
                  v-if="index == 3"
                >
                </el-date-picker>
              </li>
            </ul>
          </div>
          <div class="listSortShow">
            <div class="showTitle">
              <ul>
                <li v-for="(item, index) in cartTitle"
                    :key="index"
                    :class="{'active':cardTitleClass == index}"
                    @click="changeCardFn(index)"
                >
                  {{item}}
                </li>
              </ul>
              <p>
                <span @click="layOutChangeFn(index)"
                      :class="{'active':layoutClass == index}"
                      v-for="(item, index) in [0,1]"
                      :key="index"
                >
                  <i v-if="index !== 1" class="iconfont icon-caidan"></i>
                  <i v-if="index !== 0" class="iconfont icon-menu"></i>
                </span>
              </p>
            </div>
            <div class="showList">
              <ul :class="lengthWays">
                <li @click="goDetailFn"
                    v-for="(item, index) in showData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    :key="index"
                >
                  <img src="../assets/img/list.jpg"/>
                  <div class="liExplain">
                    <h3>
                      <span>[{{item.city}}]</span>
                      {{item.title}}
                    </h3>
                    <p>{{item.explain}}</p>
                    <p>
                      <span class="iconfont icon-mofangdaohang" v-if="lengthWays !== 'lengthWays'"></span>
                      {{item.date}}
                    </p>
                    <p  @click.stop="myMapFn(index)" v-if="lengthWays !== 'lengthWays'">
                      <span class="iconfont icon-dibiao"></span>
                      <i>{{item.province}} {{item.city}} {{item.region}}</i>
                    </p>
                    <p><span>{{item.price1}}-{{item.price2}}元</span>售票中</p>
                    <p v-if="lengthWays !== 'lengthWays'">
                      <span class="iconfont icon-saomiao"></span>
                      电子票
                    </p>
                  </div>
                </li>
              </ul>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[6, 12, 18, 24]"
                background
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="showData.length">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="listLike">
          <h4>您可能还喜欢</h4>
          <div class="likeShow">
            <ul>
              <li v-for="(item, index) in likeDatas" :key="index">
                <img src="../assets/img/list.jpg"/>
                <div class="likeShowlow">
                    <h4>{{item.title}}</h4>
                    <p>
                      <span>{{item.province}}</span>
                      <span>{{item.city}}</span>
                      <span>{{item.region}}</span>
                    </p>
                    <p>{{item.date}}</p>
                    <p>
                      <span>{{item.price1}}</span>元起
                    </p>
                </div>
              </li>
              <!--<li v-for="(item, index) in [1,2,3]" :key="index">
                <img src="../assets/img/list.jpg"/>
                <div class="likeShowlow">
                  <h4>我的一戏剧表演</h4>
                  <p>
                    <span>陕西省</span>
                    <span>西安市</span>
                    <span>临潼区</span>
                  </p>
                  <p>2019-01-01</p>
                  <p>
                    <span>85</span>元起
                  </p>
                </div>
              </li>-->
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <div v-show="mapShow" class="list_Map">
        <div id="allmap" class="allmap" ref="allmap" style="height: 600px;width: 600px"></div>
        <span @click="mapCloseFn" class="iconfont icon-guanbi1"></span>
      </div>
    </div>
</template>

<script>
import Head from '@/zhanghuan/Head'                 //写完推送的时候记得改index.js跟路由,当前问题，easy-mock网站崩溃，正在写地图
import Footer from '@/zhanghuan/Footer'
import BMap from 'BMap'
var sortTitle = [
  {
    'title': '城市',
    'links': ['全部','北京','上海','深圳','杭州','广州','成都','西安']
  },
  {
    'title': '分类',
    'links': ['全部','音乐会','朗诵','曲苑杂坛','独奏','管弦乐','声乐及合唱']
  },
  {
    'title': '子类',
    'links': ['全部','其他','戏曲','相声']
  },
  {
    'title': '时间',
    'links': ['全部','今天','明天','一周内']
  }
]
var cartTitle = ['热门推荐','最近开场','最新上架']
var showData = [
  {
    'title':'这是一段戏剧抬头',
    'explain':'这是关于这段戏剧的解释说明什么巴拉',
    'date':'2014-20-32',
    'province':'陕西省',
    'city':'西安市',
    'region':'临潼区',
    'price1':'80',
    'price2':'117'
  },
  {
    'title':'这是一段戏剧抬头',
    'explain':'这是关于这段戏剧的解释说明什么巴拉',
    'date':'2014-20-32',
    'province':'山东省',
    'city':'烟台市',
    'region':'莱山区',
    'price1':'80',
    'price2':'117'
  },
  {
    'title':'这是一段戏剧抬头',
    'explain':'这是关于这段戏剧的解释说明什么巴拉',
    'date':'2014-20-32',
    'province':'河北省',
    'city':'秦皇岛市',
    'region':'北戴河区',
    'price1':'80',
    'price2':'117'
  },
  {
    'title':'这是一段戏剧抬头',
    'explain':'这是关于这段戏剧的解释说明什么巴拉',
    'date':'2014-20-32',
    'province':'广东省',
    'city':'珠海市',
    'region':'斗门区',
    'price1':'80',
    'price2':'117'
  },
  {
    'title':'这是一段戏剧抬头',
    'explain':'这是关于这段戏剧的解释说明什么巴拉',
    'date':'2014-20-32',
    'province':'陕西省',
    'city':'宝鸡市',
    'region':'金台区',
    'price1':'80',
    'price2':'117'
  },
  {
    'title':'这是一段戏剧抬头',
    'explain':'这是关于这段戏剧的解释说明什么巴拉',
    'date':'2014-20-32',
    'province':'陕西省',
    'city':'咸阳市',
    'region':'杨陵区',
    'price1':'80',
    'price2':'117'
  }
]
var cuerAdressCode = ['陕西省西安市临潼区',
                      '浙江省杭州市拱墅区',
                      '江苏省苏州市昆山市',
                      '河北省唐山市路北区',
                      '河北省沧州市运河区',
                      '安徽省合肥市包河区',
                      '陕西省安康市',
                      '河南省开封市',
                      '江西省南昌市',
                      '江西省宜春市']
sortTitle.forEach((item) => {
  item.index = 0
})
export default {
    name: 'List',
    data () {
      return {
        value1: '',
        value2: '',
        sortTitle,
        goodsNum:25,
        cartTitle,
        cardTitleClass:0,
        layoutClass:0,
        lengthWays:'crossr',
        showData:[],
        likeDatas:[],
        mapShow:false,
        addressCode:null,
        //分页器数据
        currentPage:1, //初始页
        pagesize:6,    //    每页的数据
        timer:null
      }
    },
    components: {
      Head,
      Footer,
    },
    methods: {
      choiceFn (index,indexs) { //切换分类事件
        this.sortTitle[index].index = indexs
        //console.log(this.$refs.liT[2])
        this.goodsNum = parseInt(Math.random()*39) //随机商品总数
        this.getListData()//切换分类的时候切换数据
        if(index === 1 && indexs !== 0){  //判断子类是否显示
          this.$refs.liT[2].style.display = 'block'
        }else if (index === 1 && indexs === 0){
          this.$refs.liT[2].style.display = 'none'
        }
      },
      changeCardFn (index) { //切换选项卡事件
        this.cardTitleClass = index
        this.getListData()//切换选项卡的时候切换数据
      },
      layOutChangeFn (index) { //切换布局事件
        this.layoutClass = index
        if(index == 0){
          this.lengthWays = 'crossr'
        }else{
          this.lengthWays = 'lengthWays'
          //console.log(this.showData)
        }
      },
      goDetailFn () {
        this.$router.push('/detail')
      },
      getListData () {//获取商品信息假数据
        this.$http.get(this.$url + 'list').then((res) => {
          this.showData = res.data.data
          this.likeDatas = res.data.likeData
        })
      },
      myMapFn (index) {//点击弹出地图
        this.mapShow = true
        this.addressCode = this.showData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)[index].city //获取每次点击的地址,配合分页器
        console.log(this.addressCode)
        this.ready(this.addressCode)//将地址传入地图
      },
      mapCloseFn () {
        this.mapShow = false
        this.addressCode = null
      },
      ready(a) {//地图
        console.log(a)
        var map = new BMap.Map("allmap");  // 创建Map实例
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放*/
        map.enableDoubleClickZoom(true);//点击地图上某地标移至地图中央

        var localSearch = new BMap.LocalSearch(map);
        //localSearch.enableAutoViewport(); //允许自动调节窗体大小
        localSearch.setSearchCompleteCallback(function (searchResult) {
          var poi = searchResult.getPoi(0);//获取经纬度
          //console.log(poi.point.lng + "," + poi.point.lat)
          map.centerAndZoom(poi.point, 23);//根据localSearch.search('杭州')的内容确定中心地标
          //把标注添加到地图上
          var marker = new BMap.Marker(new BMap.Point(poi.point.lng,poi.point.lat));
          map.addOverlay(marker);
        });
        //目的地
        localSearch.search(a);
      },
      //以下是分页器事件 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
        //动态返回顶部
        var _this = this
        this.timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          let ispeed = Math.floor(-osTop / 3)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
          //this.isTop = true
          if (osTop === 0) {
            clearInterval(_this.timer)
          }
        },30)
      }
    },
    mounted() {
      //this.ready();
    },
    created () {
      this.getListData()
    }
}
</script>

<style scoped lang="less">
#allmap{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: pink;
}
#ListPage{
  background: #f5f5f5;
  .listHead{
    width: 1200px;
    background: #fff;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    text-indent:20px ;
    span{
      color: red;
      padding: 0 5px;
    }
  }
  .list_Map{
    border: 2px solid red;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) ;
    background: pink;
    width: 800px;
    height: 600px;
    &>span{
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 10;
      color: #000;
      cursor: pointer ;
    }
  }
  .listWrap{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    .listSort{
      width: 928px;
      .listSortTitle{
        border: 1px solid #ccc;
        background: #fff;
        padding: 0 24px;
        ul{
          li{
            height: 68px;
            padding-top: 10px;
            border-bottom: 1px dashed #e9ebee;
            font-size: 14px;
            &:nth-of-type(3){
              display: none;
            }
            a{
              color: #333;
              padding: 0 6px;
              margin: 0 20px;
            }
            a.active{
              background: red;
              color: #fff;
            }
          }
        }
      }
      .listSortShow{
        border: 1px solid #ccc;
        background: #fff;
        margin: 18px 0 42px 0;
        .showTitle{
          height: 32px;
          line-height: 32px;
          background: #f8f8f9;
          display: flex;
          justify-content: space-between;
          &>ul{
            display: flex;
            font-size: 13px;
            li{
              width: 90px;
              text-align: center;
              cursor: pointer;
              &.active{
                background: #fff;
                color: red;
              }
            }
          }
          &>p{
            margin-right: 29px;
            span{
              border: 1px solid #ccc;
              border-radius: 3px;
              float: left;
              box-sizing: border-box;
              padding: 0 16px;
              cursor: pointer;
              &.active{
                color: red;
                border: 1px solid red;
              }
            }
          }
        }
        .showList{
          margin-top: 30px;
          .el-pagination{
            padding: 10px 0;
            width: 721px;
            margin: 0 auto;
          }
          &>ul.crossr{
            padding: 0 10px;
            li{
              height: 207px;
              border-bottom: 1px dashed #eee;
              padding: 25px 0 18px 10px;
              display: flex;
              &>img{
                width: 153px;
                height: 206px;
                margin-right: 20px;
              }
              .liExplain{
                &>h3{
                  font-size: 15px;
                  color: #495060;
                  height: 24px;
                  line-height: 24px;
                  margin-bottom: 4px;
                }
                &>h3:hover{
                  color: red;
                  cursor: pointer;
                }
                p{
                  height: 30px;
                  line-height: 30px;
                  font-size: 12px;
                  color: #999;
                  span{
                    color: red;
                    padding-right: 10px;
                  }
                  i{
                    font-style: normal;
                  }
                  &:nth-of-type(3){
                    cursor: pointer;
                  }
                }
              }
            }
          }
          &>ul.lengthWays{
            padding: 0 30px;
            overflow: hidden;
            li{
              height: 300px;
              width: 183px;
              float: left;
              border: none;
              padding: 0;
              margin: 0 40px 20px 0;
              //background: pink ;
              display: block;
              position: relative;
              &>img{
                width: 183px;
                height: 210px;
                margin: 0 auto 5px;
              }
              &:nth-of-type(4n){
                margin-right: 0;
              }
              .liExplain{
                &>h3{
                  position: absolute;
                  top: 180px;
                  height: 30px;
                  line-height: 30px;
                  background: red;
                  display: none;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 13px;
                  color: #fff;
                  left: 0;
                  right: 0;
                  padding: 0 5px;
                  font-weight: normal;
                }
                p{
                  line-height: 20px;
                }
                p:first-of-type{
                  font-size: 12px;
                }
                p:first-of-type:hover{
                  color: green;
                  cursor: pointer;
                }
                p:nth-of-type(2){
                  font-size: 12px;
                  color: #ccc;
                }
                p:last-of-type{
                  font-size: 12px;
                  span{
                    color: red;
                    padding-right: 10px;
                  }
                }
              }
              &:hover .liExplain h3{
                display: block;
              }
            }
          }
        }
      }
    }
    .listLike{
      width: 256px;
      background: #fff;
      position: absolute;
      right: 0;
      top: 0;
      &>h4{
        height: 38px;
        line-height: 38px;
        font-size: 13px;
        background: #e6e6e6;
        text-indent: 15px;
        border: 1px solid #ccc;
        color: #495060;
        font-weight: normal;
      }
      .likeShow{
        padding: 0 24px 15px 15px;
        &>ul{
          li{
            height: 132px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            &>img{
              width: 98px;
              height: 132px;
            }
            .likeShowlow{
              width: 119px;
              height: 132px;
              padding-left: 10px;
              &>h4{
                height: 15px;
                line-height:15px ;
                font-size: 12px;
                color: #1b1b1b;
              }
              &>p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:nth-of-type(1),&:nth-of-type(2){
                   height: 19px;
                   line-height: 19px;
                   font-size: 12px;
                   color: #1b1b1b;
                   margin-top: 47px;
                }
                &:nth-of-type(2){
                  margin-top: 0;
                }
                &:last-of-type{
                  color: #1b1b1b;
                  margin-top: 8px;
                  span{
                    color: red;
                    padding-right: 5px;
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
