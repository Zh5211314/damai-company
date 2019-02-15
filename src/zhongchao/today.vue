<template>
  <div class="over">
    <ul>
      <li v-for="(item, index) in todays" :key="index">
        <p><img :src="item.image" alt=""></p>
        <p>{{item.title}}</p>
        <p>票价：¥<span>{{item.float}}</span></p>
        <div class="bottom">
          <p>{{item.cparagraph | txt1}}</p>
          <p>{{item.datetime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "today",
      data() {
        return {
          todays:[],
        }
      },
      filters:{
        txt1:function (txts) {
          return txts.substring(0,7) + '...'
        },
      },
      methods:{
        listtoday(){
          this.$http.get(this.$url + 'index.todaytujian').then((to) => {
            this.todays = to.data.today
          })
        },
      },
      created(){
        this.listtoday()
      }
    }
</script>

<style scoped lang="less">
  .over{
    width: 100%;
    position: relative;
    transition: 1s;
    ul{
      padding-top: 20px;
      width: 2350px;
      position: relative;
      li:first-of-type{
        margin-left: 0;
      }
      li{
        float: left;
        margin-left: 54px;
        position: relative;
        p:first-of-type{
          width: 146px;
          height: 192px;
        }
        p:nth-of-type(2){
          padding: 12px 2px 8px;
          width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &:hover .bottom{
          display: block;
        }
        .bottom{
          position: absolute;
          top: 130px;
          left: 0;
          overflow: hidden;
          background: red;
          opacity: 0.7;
          display: none;
          p:first-of-type{
            font-size: 12px;
            float: left;
            height: 20px;
            line-height: 20px;
          }
          p:last-of-type{
            float: left;
          }
        }
      }
    }
  }
</style>
