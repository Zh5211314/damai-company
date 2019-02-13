<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="420px">
      <el-carousel-item v-for="(item,index) in lunbo" :key="index">
        <h3><img :src="item.image"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        name: "lunbo",
      data (){
        return{
          lunbo: []
        }
      },
      methods:{
        getlunbo(){
          this.$http.get(this.$url + 'index.lunbo').then((lun) => {
            //console.log(lun)
            this.lunbo = lun.data.data
          })
        }
      },
      created(){
        this.getlunbo()
      }
    }
</script>

<style scoped lang="less">
  .block{
    width: 1200px;
    height: 420px;
    position: absolute;
    top: 50px;
    left: 0;
    .el-carousel{
      .el-carousel__container{
        position: relative;
        .el-carousel__arrow--left{
          position: fixed !important;
          left: -20% !important;
        }
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    width: 1200px !important;
    height: 420px !important;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
