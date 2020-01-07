<template>
    <div id="OrderWinxin">
      <Header></Header>
      <div class="Winxin">
        <div class="code">
          <p>订单将在<span v-text="keepTime"></span>小时后关闭，请及时付款</p>
          <img src="../assets/img/weixinpa.png">
          <p>请使用微信扫一扫完成支付</p>
        </div>
        <div class="infor">
          <p>大卖网订单</p>
          <p>支付订单号：400000000000</p>
          <p>商品名称：开心麻花爆笑舞台剧</p>
          <p>订单金额：￥<span>{{mons}}</span></p>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '@/mengmeng/Header'
  import Footer from '@/zhanghuan/Footer'
    export default {
      name: "OrderWinxin",
      components: {
        Header,
        Footer
      },
      data() {
        return {
          keepTime: '2',
          limittime: 120,
          settime: '',
          flag: false,
          mons:'',
          timeroff:false
        }
      },
      methods: {
        cos(){
          this.mons =this.$route.params.pamy
          //console.log(this.$route.params.off)
          this.timeroff = this.$route.params.off
        },
        StartCountDown() {
          var mydate = new Date();
          mydate.setMinutes(mydate.getMinutes() + this.limittime);
          this.settime = mydate;

          let time = setInterval(() => {
            if (this.flag == true) {
              clearInterval(time)
            }
            this.timeDown()
          }, 100)
        },
        timeDown() {
          const endTime = new Date(this.settime);
          const nowTime = new Date();
          let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
         /* let d = parseInt(leftTime / (24 * 60 * 60));*/
          let h = this.formate(parseInt(leftTime / (60 * 60) % 24));
          let m = this.formate(parseInt(leftTime / 60 % 60));
          let s = this.formate(parseInt(leftTime % 60));
          if (leftTime <= 0) {
            this.flag = true;
            alert("时间到，停止作答");
          }
          this.keepTime = `${h}:${m}:${s}`;
        },
        formate(time) {
          if (time >= 10) {
            return time
          } else {
            return `0${time}`
          }
        }
      },
      created() {
        this.cos()
        if(this.timeroff) {
          this.StartCountDown()
        }
      }
    }
</script>

<style scoped lang="less">
  #OrderWinxin{
    background: #f5f5f5;
    .Winxin{
      width: 1160px;
      margin: 0 auto;
      overflow: hidden;
      background: #fff;
      padding: 80px 20px;
      font-size: 12px;
      display: flex;
      .code{
        width: 40%;
        text-align: center;
        img{
          margin: 24px auto;
        }
        p{
          height: 28px;
          line-height: 28px;
        }
      }
      .infor{
        width: 60%;
        font-size: 14px;
        p{
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
</style>
