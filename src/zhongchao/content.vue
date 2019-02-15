<template>
  <div>
    <div class="main" v-for="(item,i) in contbigpic" :key="i">
      <div class="mainleft">
        <div class="lefthead">
          <p>{{item.numbers}}F</p>
          <p>{{item.titlehead}}</p>
        </div>
        <div class="bigpic">
          <img :src="item.bigImg" alt="">
          <div class="twopbox">
            <p>{{item.bigcont | fonts}}</p>
            <p>{{item.bigprice}}元</p>
          </div>
        </div>
        <div class="smollpic">
          <ul>
            <li v-for="(item,k) in asd" :key="k">
              <p><img :src="item.liImg" alt=""></p>
              <dl>
                <dt>{{item.title | over}}</dt>
                <dd><span>{{item.begintime}}</span>--<span>{{item.endTime}}</span></dd>
                <dd><span>{{item.city}}</span><span>{{item.province}}</span></dd>
                <dd>¥<span>{{item.price}}</span>起</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="mainright">
        <p>热门戏剧排行<span>产看更多》</span></p>
        <ul>
          <li v-for="(item,l) in lis" :key="l">
            <span>{{item.number}}</span>{{item.cont | lista}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "contents",
      data(){
          return{
            contbigpic:[],
            asd:[],
            lis:[],
            lista:[],
          }
      },
      filters:{
        fonts:function (txt) {
          return txt.substring(0,8) + '...'
        },
        over:function (tst) {
          return tst.substring(0,8) + '...'
        },
        lista:function (tat) {
          return tat.substring(0,14) + '...'
        }
      },
      methods:{
        getconttt(){
          this.$http.get(this.$url + 'homeshowcoede').then((con) => {
            this.contbigpic = con.data.data
            this.asd = this.contbigpic[0].ulList
            this.lis = this.contbigpic[0].newsList
          })
        },
      },
      created(){
        this.getconttt()
      }
    }
</script>

<style scoped lang="less">
  .main{
    width: 1200px;
    margin: 30px auto 30px;
    overflow: hidden;
  .mainleft{
    width: 894px;
    float: left;
    padding-bottom: 44px;
    background: white;
  .lefthead{
    overflow: hidden;
  p:first-of-type{
    height: 58px;
    line-height: 58px;
    font-size: 16px;
    color: #fe3b1b;
    font-weight: bold;
    float: left;
    margin-left: 26px;
  }
  p:last-of-type{
    height: 58px;
    line-height: 58px;
    font-size: 15px;
    padding-left: 11px;
    float: left;
  }
  }
  .bigpic{
    width: 238px;
    height: 363px;
    border: 1px solid red;
    margin-left: 26px;
    float: left;
    position: relative;
  .twopbox{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #b92d14;
    padding: 17px 0 65px 0;
    p:first-of-type{
      font-size: 12px;
      color: white;
      text-indent: 29px;
    }
    p:last-of-type{
      font-size: 12px;
      text-indent: 29px;
      color: white;
      opacity: 0.6;
    }
  }
  }
  .smollpic{
  ul{
    overflow: hidden;
  li:first-of-type{
    padding-top: 0;
  }
  li:nth-of-type(2){
    padding-top: 0;
  }
  li{
    float: left;
    overflow: hidden;
    padding: 58px 0 0 34px;
  p{
    width: 112px;
    height: 150px;
    border: 1px solid red;
    float: left;
  }
  dl{
    float: left;
  dt{
    font-size: 11px;
    width: 152px;
    padding-left: 8px;
  }
  dd:first-of-type{
    font-size: 9px;
    padding: 50px 0 0 8px;
    color: #9b9b9b;
    span:first-of-type{
      display: inline-block;
      width: 70px;
      height: 14px;
      overflow: hidden;
    }
    span:last-of-type{
      display: inline-block;
      width: 70px;
      height: 14px;
      overflow: hidden;
    }
  }
  dd:nth-of-type(2){
    font-size: 11px;
    height: 40px;
    line-height: 40px;
    color: #9b9b9b;
    padding-left: 8px;
    span:first-of-type{
      padding-right: 6px;
    }
  }
  dd:last-of-type{
    color: #9b9b9b;
    font-size: 11px;
    padding-left: 8px;
  }
  }
  }
  }
  }
  }
  .mainright{
    width: 280px;
    height: 467px;
    float: right;
    background: white;
    ul{
      li:first-of-type{
        span{
          background: #ff3c1b;
        }
      }
      li:nth-of-type(2){
        span{
          background: #ff3c1b;
        }
      }
      li:nth-of-type(3){
        span{
          background: #ff3c1b;
        }
      }
      li{
        font-size: 11px;
        height: 30px;
        line-height: 30px;
        padding-left: 32px;
        cursor: pointer;
        &:hover{
          color: red;
        }
        span{
          height: 12px;
          line-height: 12px;
          display: inline-block;
          padding: 0 4px;
          margin-right: 9px;
          background-color: #808080;
        }
      }
    }
  p{
    font-size: 17px;
    height: 58px;
    line-height: 58px;
    text-indent: 25px;
    span{
      display: inline-block;
      padding-left: 30px;
      font-size: 12px;
    }
  }
  }
  }
</style>
