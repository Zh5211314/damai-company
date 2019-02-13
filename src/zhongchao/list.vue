<template>
  <div class="listb">
    <ul class="leftul">
      <li v-for="(item,o) in lists" :key="o" :class="activeClass == o ? 'active':''" @mouseenter="lisat(o)">
        <i :class="item.names"></i>
        {{item.cont}}
        <span :class="item.clas"></span>
      </li>
    </ul>
    <div class="listbox" v-show="isnone">
      <div class="topbox">
        <p>演唱会</p>
        <i class="iconfont icon-xiangyou"></i>
        <ul>
          <li>子类1</li>
          <li>子类2</li>
        </ul>
        <span class="iconfont icon-guanbi" @click="offs()"></span>
      </div>
      <div class="bottombox" :style="{display: indexs === 0  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in vocala" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
      <div class="bottombox" :style="{display: indexs === 1  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in musica" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
      <div class="bottombox" :style="{display: indexs === 2  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in opreaa" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
      <div class="bottombox" :style="{display: indexs === 3  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in quyuana" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
      <div class="bottombox" :style="{display: indexs === 4  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in sportsa" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
      <div class="bottombox" :style="{display: indexs === 5  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in childrena" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
      <div class="bottombox" :style="{display: indexs === 6  ? 'block':'none'}">
        <p class="headp">相关热门</p>
        <ul v-for="(item,index) in dancea" :key="index">
          <li>
            <p><img :src="item.image" alt=""></p>
            <p>{{item.title}}</p>
            <p>票价：¥<span>{{item.float}}</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "list",
      data() {
        return {
          isnone:false,
          indexs:0,
          activeClass: -1,
          vocala:[],
          musica:[],
          opreaa:[],
          quyuana:[],
          sportsa:[],
          childrena:[],
          dancea:[],
          lists:[
            {
              "names":"iconfont icon-huatong1",
              "cont":"演唱会",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            },
            {
              "names":"iconfont icon-yinlehui",
              "cont":"音乐会",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            },
            {
              "names":"iconfont icon-huajugeju",
              "cont":"歌剧话剧",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            },
            {
              "names":"iconfont icon-shanzi",
              "cont":"曲苑杂坛",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            },
            {
              "names":"iconfont icon-zuqiu",
              "cont":"体育比赛",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            },
            {
              "names":"iconfont icon-ertong",
              "cont":"儿童亲子",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            },
            {
              "names":"iconfont icon-flamenco",
              "cont":"舞蹈芭蕾",
              "clas":"iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            }
          ]
        }
      },
      methods:{
        lisat(o){
          this.activeClass = o
          this.indexs = o
          this.isnone = true
        },
        listbox(){
          this.$http.get(this.$url + 'index.alllists').then((res) => {
            this.vocala = res.data.vocal
            this.musica = res.data.music
            this.opreaa = res.data.oprea
            this.quyuana = res.data.quyuan
            this.sportsa = res.data.sports
            this.childrena = res.data.childrens
            this.dancea = res.data.dance
          })
        },
        offs(){
          this.isnone = false
          this.activeClass = -1
        }
      },
      created(){
        this.listbox()
      }
    }
</script>

<style scoped lang="less">
  .listb{
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 5;
    overflow: hidden;
  .leftul{
    width: 200px;
    padding-bottom: 63px;
    background: red;
    float: left;
  li{
    color: white;
    font-size: 11px;
    height: 51px;
    line-height: 51px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    &.active{
      background-color: red;
      opacity: 0.6;
    }
  }
  }
  .listbox{
    float: left;
    width: 900px;
    height: 420px;
    background: rgba(218,230,244,.9);
  .topbox{
    width: 856px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed black;
  p{
    font-size: 10px;
    padding: 6px 18px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  i{
    margin: 6px 0 0 10px;
  }
  span{
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 610px;
    cursor: pointer;
  }
  ul{
    overflow: hidden;
  li{
    float: left;
    font-size: 10px;
    padding: 0 16px;
    border-right: 1px solid #867080;
    cursor: pointer;
  &:last-of-type{
     border-right: none;
   }
  }
  }
  }
  .bottombox{
    width: 856px;
    margin: 0 auto;
    display: none;        //修改
  .headp{
    height: 58px;
    line-height: 56px;
    font-size: 18px;
  }
  ul{
  li{
    float: left;
  p:first-of-type{
    width: 146px;
    height: 192px;
    border: 1px solid black;
  }
  p:nth-of-type(2){
    padding: 12px 2px 6px;
    width: 146px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:last-of-type{
    span{
      display: inline-block;
      width:60px;
    }
  }
  }
    li:first-of-type{
      margin-left: 0;
    }
  }
  }
  }
  }
</style>
