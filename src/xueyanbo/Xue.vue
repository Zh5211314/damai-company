<template>
  <div id="xue">
    <Head></Head>
    <div class="nav">
      <ul>
        <li @click="home">首页</li>
        <li @click="drama" class="active">喜剧</li>
        <li @click="dramaone" >体育</li>
        <li @click="dramatwo">亲子</li>
        <li @click="dramatree">舞蹈古典</li>
        <li @click="dramal">摇滚</li>
        <li class="bnmk">精彩专题</li>
      </ul>
    </div>
    <div class="block">
      <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
      <el-carousel height="419px">
        <el-carousel-item v-for="(item,index) in items" :key="index">
          <p>
            <img :src=item.image alt="图片">
          </p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hot">
     <h2>
       <img src="../assets/img/title.png" alt="">
     </h2>
      <div class="hots">
        <ul  class="bh">
          <li class="byh" v-for="(itemx,index) in lists" :key="index">
            <dl>
              <dt>
                <img :src=itemx.image alt="图片">
              </dt>
             <dd>
               {{itemx.name}}
             </dd>
              <dd>
                票价：<span> ￥{{itemx.number}}</span> 起
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="splendid">
      <h2>
        <img src="../assets/img/titletwo.png" alt="图片">
      </h2>
      <div class="left"  v-for="(itemxx,index) in lists" :key="index" v-if="index == 0">
        <img :src=itemxx.image alt="图片">
      </div>
      <div class="center">
        <ul>
          <li  v-for="(itemf,index) in lists" :key="index">
            <img :src=itemf.image alt="图片">
          </li>
        </ul>
      </div>
      <div class="right"  v-for="(itemxm,inde) in lists" :key="inde" v-if="inde == 1">
        <img :src=itemxm.image alt="图片">
      </div>
    </div>
    <div class="bgs">
      <ul>
        <li>
          <img src="../assets/img/pg.png" alt="图片">
        </li>
        <li>
          <img src="../assets/img/pg.png" alt="图片">
        </li>
        <li>
          <img src="../assets/img/pg.png" alt="图片">
        </li>
      </ul>
    </div>
    <div class="field">
      <ul>
        <router-link exact to="/xue/" tag="li">音乐会专区</router-link>
        <router-link to="/xue/movie" tag="li">舞蹈专区</router-link>
      </ul>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
    <div class="ranking">
       <h2>
         <img src="../assets/img/acon.png" alt="图片">
       </h2>
        <div class="bgl"  v-for="(itemxx,index) in lists" :key="index" v-if="index == 0">
          <img :src=itemxx.image alt="图片">
        </div>
      <div class="rank">
       <ul>
         <li>
           <dl>
             <dt v-for="(itemxxb,index) in lists" :key="index" v-if="index == 0">
               <img :src=itemxxb.image alt="图片">
             </dt>
             <dd>
               小可音乐剧《我变了，我没变》
             </dd>
             <dd>
               2018.1.8-2018.1.9
             </dd>
             <dd>
               深圳市少年宫剧场
             </dd>
             <dd>
               <span>￥120</span>起
             </dd>
           </dl>
         </li>
         <li>
           <dl>
             <dt v-for="(itemxxb,index) in lists" :key="index" v-if="index == 0">
               <img :src=itemxxb.image alt="图片">
             </dt>
             <dd>
               小可音乐剧《我变了，我没变》
             </dd>
             <dd>
               2018.1.8-2018.1.9
             </dd>
             <dd>
               深圳市少年宫剧场
             </dd>
             <dd>
               <span>￥120</span>起
             </dd>
           </dl>
         </li>
         <li>
           <dl>
             <dt v-for="(itemxxb,index) in lists" :key="index" v-if="index == 0">
               <img :src=itemxxb.image alt="图片">
             </dt>
             <dd>
               小可音乐剧《我变了，我没变》
             </dd>
             <dd>
               2018.1.8-2018.1.9
             </dd>
             <dd>
               深圳市少年宫剧场
             </dd>
             <dd>
               <span>￥120</span>起
             </dd>
           </dl>
         </li>
         <li>
           <dl>
             <dt v-for="(itemxxb,index) in lists" :key="index" v-if="index == 0">
               <img :src=itemxxb.image alt="图片">
             </dt>
             <dd>
               小可音乐剧《我变了，我没变》
             </dd>
             <dd>
               2018.1.8-2018.1.9
             </dd>
             <dd>
               深圳市少年宫剧场
             </dd>
             <dd>
               <span>￥120</span>起
             </dd>
           </dl>
         </li>
         <li>
           <dl>
             <dt v-for="(itemxxb,index) in lists" :key="index" v-if="index == 0">
               <img :src=itemxxb.image alt="图片">
             </dt>
             <dd>
               小可音乐剧《我变了，我没变》
             </dd>
             <dd>
               2018.1.8-2018.1.9
             </dd>
             <dd>
               深圳市少年宫剧场
             </dd>
             <dd>
               <span>￥120</span>起
             </dd>
           </dl>
         </li><li>
         <dl>
           <dt v-for="(itemxxb,index) in lists" :key="index" v-if="index == 0">
             <img :src=itemxxb.image alt="图片">
           </dt>
           <dd>
             小可音乐剧《我变了，我没变》
           </dd>
           <dd>
             2018.1.8-2018.1.9
           </dd>
           <dd>
             深圳市少年宫剧场
           </dd>
           <dd>
             <span>￥120</span>起
           </dd>
         </dl>
       </li>
       </ul>
      </div>
    </div>
    <div class="times">
      <ele-calendar
        :render-content="renderContent"
        :data="datedef"
        :prop="prop"
      ></ele-calendar>
    </div>
    <div class="bgh">
      <h2>
        <img src="../assets/img/bg-1.png" alt="图片">
      </h2>
      <ul v-for="(itemxxl,index) in lists" :key="index" v-if="index == 0">
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
        <li> <img :src=itemxxl.image alt="图片"></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Head from '@/zhanghuan/Head'
  import Footer from '@/zhanghuan/Footer'
  import eleCalendar from 'ele-calendar'
  // import Move from '@/xueyanbo/Move'
    export default {
        name: "Xue",
      components: {
        Head,
        Footer,
        eleCalendar
      },
      data (){
          return {
            items : [],
            lists :[],
            datedef:[
              {"date":"2018-06-30","content":null,"cid":null},
              {"date":"2018-06-26","content":null,"cid":null},
            ],
            prop:'date' //对应日期字段名
          }
      },
      methods:{
        home(){
          this.$router.push({path:'/' })
        },
        drama (){
          this.$router.push({path:'/xue' })
          alert(1)
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
        },
        getlist() {
          this.$http.get(this.$url + 'index.lunbo').then((res) => {
            this.items =  res.data.data
          })
          this.$http.get(this.$url + 'hot').then((res) => {
            this.lists = res.data.data
          })
        },
        renderContent(h,parmas) {
          const loop = data =>{
            return (
              data.defvalue.value ? (<div><div>{data.defvalue.text}</div>
                <span  >备选项</span>
                </div>) : <div>{data.defvalue.text}</div>
            )
          }
          return (
            < div
          style = "min-height:170px; min-width:170px;  border:1px solid #eee" >
            {loop(parmas)}
            < /div>
        );
        },
      },
      created() {
       this.getlist ()
      }
    }
</script>
<style scoped lang="less">
  #xue{
    background: #f5f5f5;
  }
  .block{
    width: 1200px;
    margin: 0 auto;
    height: 419px;
    .el-carousel__item{
      p{
        img{
          height: 419px;
        }
      }
    }
    .el-carousel__container{
      height: 419px;
    }
  }
  .nav{
    width: 1200px;
    margin:0 auto;
    height: 50px;
    margin-top: 46px;
    ul{
      border: 1px solid #dcdcdc;
      overflow: hidden;
      li{
        float: left;
        font-size: 14px;
        color: #000;
        width: 88px;
        height: 51px;
        line-height: 51px;
        text-align: center;
      }
      li.bnmk{
          float: right;
      }
      li:hover{
        cursor: pointer;
      }
    }
    .active{
      background: red;
      color: #fff;
    }
  }
  .hot{
    height: 344px;
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    h2{
      height: 80px;
      img{
        margin: 0 auto;
      }
    }
    .hots{
      .bh{
        overflow: hidden;
        display: flex;
       &>.byh{
         flex: 1;
          dl{
            width: 144px  ;
            margin: 0 auto;
            dt{
              img{
                width: 143px;
                height: 193px;
              }
            }
            dd:nth-of-type(1){
              height: 50px;
              line-height: 50px;
              font-size: 12px;
              color: #495060;
            }
            dd:nth-of-type(2){
             font-size: 12px;
              color: #ccc;
              span{
                font-size: 9px;
                color: black;
              }
            }
          }
        }
      }
    }
  }
  .splendid{
    width: 1200px;
    margin: 0 auto;
    height: 628px;
    h2{
      img{
        margin: 0 auto;
      }
    }
    .left{
      float: left;
      img{
        width: 283px;
        height: 537px;
      }
    }
    .center{
      float: left;
      width: 576px;
      margin: 0 22px;
      ul{
        overflow: hidden;
        li{
          width: 188px;
          height: 264px;
          float: left;
          margin: 0 6px 10px 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
        li:nth-of-type(3){
          margin-right: 0;
        }
        li:nth-of-type(6){
          margin-right: 0;
        }
      }
    }
    .right{
      img{
        width: 283px;
        height: 537px;
      }
    }
  }
  .bgs{
    width: 1200px;
    height: 163px;
    margin: 0 auto;
    margin-top: 18px;
    ul{
      li{
        float: left;
        margin-right: 26px;
      }
      li:last-of-type{
        margin-right: 0;
      }
    }
  }
  .movie{
    width: 1200px;
    margin: 0 auto;
    height: 272px;
    ul{
      li{
        float: left;
      }
    }
  }
  .field{
    width: 1200px;
    margin: 0 auto;
    ul{
      width: 100%;
      height: 34px;
      border-bottom: 1px solid #dddee1;
      li{
        float: left;
        width: 105px;
        height: 33px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #dddee1;
        background: #fff;
      }
      li:hover{
        cursor: pointer;
      }
      .router-link-active{
        border-top: 2px solid #ff3c1b;
        border-bottom: none;
      }
    }
  }
  .ranking{
    width: 1200px;
    height: 414px;
    margin:0 auto;
    h2{
      img{
        margin: 0 auto;
      }
    }
    .bgl{
      width: 200px;
      height: 316px;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .rank{
      float: left;
      width: 972px  ;
      height: 315px;
      ul{
        li{
          float: left;
          width:264px;
          height: 150px;
          margin-left: 20px;
          margin-bottom: 15px;
          margin-right: 40px;
          dl{
            dt{
              width: 112px;
              height: 150px;
              float: left;
              img{
                width: 100%;
                height: 100%;
              }
            }
            dd{
              width: 141px;
              font-size: 12px;
              float: left;
              line-height: 22px;
              margin-left: 10px;
            }
            dd:nth-of-type(1){
              line-height: 18px;
              font-size: 12px;
              font-weight: bold;
              margin-bottom: 48px;
            }
          }
        }
      }
    }
  }
  .times{
    width: 1200px;
    height: 1111px;
    margin: 0 auto;
    margin-top: 20px;
    .el-picker-panel-calendar{
      border-radius: 21px;
      overflow: hidden;
      width: 1196px ;
      height: 1111px;
      /deep/.el-picker-panel-calendar__body-wrapper{
        /deep/.el-picker-panel-calendar__body{
          /deep/.el-date-picker-calendar__header{
            margin: 0;
            padding: 0;
            height: 103px;
            line-height: 103px;
            .el-picker-panel-calendar__icon-btn{
              float: none;
              margin: 0;
            }
          }
          background: url("../assets/img/未标题-7.png")no-repeat;
        }
        .el-date-table-calendar{

        }
      }
    }
  }
  .bgh{
    width: 1200px;
    height: 257px;
    margin: 0 auto;
    margin-top: 18px;
    margin-bottom: 20px;
    h2{
      img{
        margin: 0 auto;
      }
    }
    ul{
      width: 943px;
      margin: 0 auto;
      margin-left: 190px;
      li{
        width: 106px;
        height: 54px;
        float: left;
        margin-right: 29px;
        margin-bottom: 44px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
