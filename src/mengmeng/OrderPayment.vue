<template>
    <div id="OrderPayment">
      <Header></Header>
      <div class="Paymentcont">
        <p class="PayNav">
          <span><i>1</i> 选择商品</span>
          <span><i>2</i> 确认订单信息</span>
          <span><i>3</i> 支付订单</span>
          <span><i>4</i> 收取商品</span>
        </p>
        <table>
          <tr>
            <th>订单编号</th>
            <th>商品名称</th>
            <th>订单金额</th>
            <th>应付金额</th>
          </tr>
          <tr>
            <td>400000000000</td>
            <td>开心麻花爆笑舞台剧</td>
            <td>{{mon}}</td>
            <td class="mon">{{mon}}</td>
          </tr>
        </table>
        <p class="Paymonf">应付总金额：<span class="monf">{{mon}}</span>元 </p>
        <h4>以下支付平台都支持大多数银行卡</h4>
        <div class="wzconfirm">
          <el-radio-group v-model="radio2">
            <el-radio :label="3"><img src="../assets/img/weixin.png"></el-radio>
            <el-radio :label="6"><img src="../assets/img/zhifu.png"></el-radio>
          </el-radio-group>
        </div>
        <router-link :to="{name:'OrderWinxin',params:{pamy:this.$route.params.numCode}}" class="confirm">确认无误，支付</router-link>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '@/mengmeng/Header'
  import Footer from '@/zhanghuan/Footer'
  import OrderNav from '@/mengmeng/OrderNav'
    export default {
      name: "OrderPayment",
      components: {
        Header,
        Footer,
        OrderNav
      },
      data () {
        return {
          radio2: 6,
          mon:''
        };
      },
      methods:{
        getPar () {
           this.mon = this.$route.params.numCode
           console.log(this.mon)
        }
      },
      created() {
        this.getPar()
      }
    }
</script>

<style scoped lang="less">
  #OrderPayment{
    background: #f5f5f5;
    .Paymentcont{
      width: 1160px;
      margin: 0 auto;
      overflow: hidden;
      background: #fff;
      padding: 0 20px;
      font-size: 12px;
      .PayNav {
        width: 100%;
        height: 50px;
        background: #3e3e3e;
        font-size: 18px;
        color: #fff;
        margin-top: 10px;
        span {
          display: inline-block;
          width: 286px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          i {
            font-style: normal;
            font-size: 16px;
          }
        }
        span:nth-of-type(3) {
          height: 52px;
          background: #ff3c1b;
          position: relative;
          top: -2px;
          &:before {
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border-width: 26px 0px 26px 25px;
            border-style: solid;
            border-color: #ff3c1b transparent;
            position: absolute;
            top: 0;
            left: -25px;
            z-index: 6;
          }
          &:after {
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
      table{
        width: 100%;
        margin-top: 20px;
        border-right: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        tr{
          width: 100%;
          th,td{
            border-left: 1px solid #f5f5f5;
            border-top: 1px solid #f5f5f5;
            line-height: 20px;
            padding: 10px 20px;
          }
          th{
            font-weight: normal;
            text-align: left;
            background: #f8f8f9;
            th:first-of-type{
              width: 230px;
            }
          }
        }
      }
      .Paymonf{
        height: 22px;
        line-height: 22px;
        font-size: 14px;
        margin: 10px 0;
        .monf{
          color: #ff3c1b;
        }
      }
      h4{
        height: 20px;
        line-height: 20px;
        font-weight: normal;
      }
      .wzconfirm{
        margin:10px 0 20px;
        display: flex;
        img{
          display: inline-block;
          position: relative;
          top: 6px;
        }
      }
      .confirm{
        display: inline-block;
        width: 116px;
        height: 32px;
        line-height: 32px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background: #ff3c1b;
        border: none;
        border-radius: 4px;
        margin-bottom: 50px;
      }
    }
  }
</style>
