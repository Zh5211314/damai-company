<template>
  <div class="home">
    <Head></Head>
    <div class="bigger">
      <div class="classification">
        <div class="classificationhead">
          <p>全部商品分类</p>
          <div class="ulbox">                          <!--配置子路由-->
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
