<template>
    <div id="OrderNav">
      <p>
        <span><i>1</i> 选择商品</span>
        <span><i>2</i> 确认订单信息</span>
        <span><i>3</i> 支付订单</span>
        <span><i>4</i> 收取商品</span>
      </p>
    </div>
</template>

<script>
    export default {
        name: "OrderNav",

    }
</script>

<style scoped lang="less">
  #OrderNav{
    width: 100%;
    margin-top: 10px;
    p{
      width: 100%;
      height: 50px;
      background: #3e3e3e;
      font-size: 18px;
      color: #fff;
      span{
        display: inline-block;
        width: 286px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        i{
          font-style: normal;
          font-size: 16px;
        }
      }
      span:nth-of-type(2){
        height: 52px;
        background: #ff3c1b;
        position: relative;
        top:-2px;
        &:before{
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          border-width: 26px 0px 26px 25px;
          border-style: solid;
          border-color: #ff3c1b transparent ;
          position: absolute;
          top: 0;
          left: -25px;
          z-index: 6;
        }
        &:after{
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          border-width: 26px 0px 26px 25px;
          border-style: solid;
          border-color: transparent #ff3c1b;
          position: absolute;
          top: 0;
          right: -25px;
          z-index: 6;
        }
      }
    }
  }
</style>
