<template>
  <div class="move">
    <ul>
      <li>
        <dl>
          <dt v-for = "(itev,inm) in bgs" :key="inm" v-if="inm == 1">
             <img :src=itev.image alt="图片">
          </dt>
          <dd>
            小可音乐剧未来三部曲之《我变了，我没变》
          </dd>
            <dd>
              2018.1.8-2018.1.9
            </dd>
              <dd>
                深圳市少年宫剧场
              </dd>
              <dd>
             <span>￥120</span> 起
              </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt v-for = "(itev,inm) in bgs" :key="inm" v-if="inm == 1">
            <img :src=itev.image alt="图片">
          </dt>
          <dd>
            小可音乐剧未来三部曲之《我变了，我没变》
          </dd>
          <dd>
            2018.1.8-2018.1.9
          </dd>
          <dd>
            深圳市少年宫剧场
          </dd>
          <dd>
            <span>￥120</span> 起
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt v-for = "(itev,inm) in bgs" :key="inm" v-if="inm == 1">
            <img :src=itev.image alt="图片">
          </dt>
          <dd>
            小可音乐剧未来三部曲之《我变了，我没变》
          </dd>
          <dd>
            2018.1.8-2018.1.9
          </dd>
          <dd>
            深圳市少年宫剧场
          </dd>
          <dd>
            <span>￥120</span> 起
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt v-for = "(itev,inm) in bgs" :key="inm" v-if="inm == 1">
            <img :src=itev.image alt="图片">
          </dt>
          <dd>
            小可音乐剧未来三部曲之《我变了，我没变》
          </dd>
          <dd>
            2018.1.8-2018.1.9
          </dd>
          <dd>
            深圳市少年宫剧场
          </dd>
          <dd>
            <span>￥120</span> 起
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt v-for = "(itev,inm) in bgs" :key="inm" v-if="inm == 1">
            <img :src=itev.image alt="图片">
          </dt>
          <dd>
            小可音乐剧未来三部曲之《我变了，我没变》
          </dd>
          <dd>
            2018.1.8-2018.1.9
          </dd>
          <dd>
            深圳市少年宫剧场
          </dd>
          <dd>
            <span>￥120</span> 起
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt v-for = "(itev,inm) in bgs" :key="inm" v-if="inm == 1">
            <img :src=itev.image alt="图片">
          </dt>
          <dd>
            小可音乐剧未来三部曲之《我变了，我没变》
          </dd>
          <dd>
            2018.1.8-2018.1.9
          </dd>
          <dd>
            深圳市少年宫剧场
          </dd>
          <dd>
            <span>￥120</span> 起
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "Move",
      data(){
         return {
           bgs :[]
         }
      },
      methods:{
          gest(){
            this.$http.get(this.$url + 'hot').then((res)=>{
              this.bgs = res.data.data
            })
          }
      },
      created() {
          this.gest()
      }
    }
</script>

<style scoped lang="less">
.move{
  height: 273px;

  ul{
    margin-top: 20px;
    li{
      width: 376px;
      height: 100px;
      float: left;
      margin-bottom: 10px;
      margin-left: 5px;
      margin-right:16px ;
      dl{
        dt{
          width: 212px;
          height: 100px;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        dd{
          width: 156px;
          float: left;
          font-size: 12px;
          padding-left: 8px;
          line-height: 19px;
        }
        dd:nth-of-type(1){
          margin-top: 4px;
          font-weight: bold;

        }
      }
    }
  }
}
</style>
