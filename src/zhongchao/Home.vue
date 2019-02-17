<template>
  <div class="home">
    <Head></Head>
<<<<<<< HEAD
    <div class="classification">
      <p class="iconfont icon-xiangzuo"></p>
      <div class="classificationhead">
        <p>全部商品分类</p>
       <div class="ulbox">
         <ul>
           <li @click="drama">喜剧</li>
           <li @click="dramaone" >体育</li>
           <li @click="dramatwo">亲子</li>
           <li @click="dramatree">舞蹈古典</li>
           <li @click="dramal">摇滚</li>
         </ul>
       </div>
      </div>
      <div class="rotation">
        <!--轮播图-->
      </div>
      <div class="listb">
        <ul class="leftul">
          <li>
            <i class="iconfont icon-huatong1"></i>
            演唱会
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-yinlehui"></i>
            音乐会
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-huajugeju"></i>
            歌剧话剧
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-shanzi"></i>
            曲苑杂坛
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-zuqiu"></i>
            体育比赛
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-ertong"></i>
            儿童亲子
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-flamenco"></i>
            舞蹈芭蕾
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
        </ul>
        <div class="listbox">
          <div class="topbox">
            <p>演唱会</p>
            <i class="iconfont icon-xiangyou"></i>
            <ul>
              <li>子类1</li>
              <li>子类2</li>
            </ul>
            <span class="iconfont icon-guanbi"></span>
          </div>
          <div class="bottombox">
            <p class="headp">相关热门</p>
=======
    <div class="bigger">
      <div class="classification">
        <div class="classificationhead">
          <p>全部商品分类</p>
          <div class="ulbox">                          <!--配置子路由-->
>>>>>>> 44fcc91dbb3958678c0dcee8e9c74c2dec6d2927
            <ul>
              <li class="homexiju">喜剧</li>
              <li class="homesports">体育</li>
              <li class="homeerzi">亲子</li>
              <li class="homexidance">舞蹈古典</li>
              <li class="homeyaogun">摇滚</li>
            </ul>
          </div>
        </div>
        <swipe></swipe>
        <list></list>
      </div>
    </div>
    <div class="today">
      <div class="todthead">
        <p v-for="(item,i) in tod" :key="i" :class="{active:i === index}" @click="changed(i)">{{item}}</p>
      </div>
      <div class="content">
        <toda  :style="{left:oleft + 'px'}"></toda>
      </div>
    </div>
    <conts></conts>
    <Footer></Footer>
  </div>
</template>

<script>
<<<<<<< HEAD
import Head from '@/zhanghuan/Head'
import Footer from '@/zhanghuan/Footer'
export default {
    name: "Chao",
    components: {
      Head,
      Footer
    },
    methods:{
      drama (){
        this.$router.push({path:'/xue' })
      },
      dramaone (){
        this.$router.push({path:'/xuel' })
      },
      dramatwo (){
        this.$router.push({path:'/xueone' })
      },
      dramatree (){
        this.$router.push({path:'/xuetwo' })
      },
      dramal  (){
        this.$router.push({path:'/xuetree' })
=======
  import swipe from '@/zhongchao/lunbo'
  import list from '@/zhongchao/list'
  import toda from '@/zhongchao/today'
  import conts from '@/zhongchao/content'
  import Head from '@/zhanghuan/Head'
  import Footer from '@/zhanghuan/Footer'
    export default {
        name: "Chao",
      components:{
        swipe,
        list,
        toda,
        conts,
        Head,
        Footer
      },
      data(){
          return{
            oleft:0,
            index:0,
            tod:[
              "今日推荐","即将开售"
            ]
          }
      },
      methods: {
        changed(i) {
          this.index = i;
          if(i == 1){
            this.oleft = -1200
          }else {
            this.oleft = 0
          }
        }
>>>>>>> 44fcc91dbb3958678c0dcee8e9c74c2dec6d2927
      }
    }
</script>

<style scoped lang="less">
.home{
  background: #f5f5f5;
  .classification{
    width: 1200px;
    height: 470px;
    margin: 0 auto;
    position: relative;
    .classificationhead{
      width: 1200px;
      overflow: hidden;
      p{
        float: left;
        font-size: 12px;
        height: 50px;
        line-height: 50px;
        padding: 0 64px;
        background: #000;
        color: white;
      }
      .ulbox{
        width: 998px;
        border: 1px solid #dcdcdc;
        float: left;
        background: white;
        ul{
          width: 490px;
          display: flex;
          justify-content: space-around;
          li{
            font-size: 15px;
            height: 48px;
            line-height: 48px;
            cursor: pointer;
          }
        }
      }
    }
    .rotation{
      width: 1200px;
      height: 420px;
      background: black;
      opacity: 0.3;
      overflow: hidden;
      li{
        float: left;
      }
    }
  }
  .today{
    width: 1200px;
    height: 319px;
    margin: 30px auto 0;
    background: white;
    //overflow: hidden;
    padding-bottom: 32px;
    .todthead{
      width: 98%;
      float: right;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      .active{
        border-bottom: 2px solid red;
      }
      p:first-of-type{
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        font-size: 14px;
        float: left;
        margin-right: 16px;
        cursor: pointer;
      }
      p:last-of-type{
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        font-size: 14px;
        float: left;
        cursor: pointer;
      }
    }
    .content{
      width: 98%;
      float: right;
      overflow: hidden;
    }
  }
}
</style>
