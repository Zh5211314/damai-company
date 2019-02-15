<template>
    <div id="footer">
        <div class="footWrap">
          <div class="footUp">
            <ul>
              <li>订购方式</li>
              <li>在线订购</li>
              <li>电话订购</li>
              <li>上门订购</li>
              <li>大客户团体订购</li>
              <li>大麦超级票订购</li>
            </ul>
            <ul>
              <li>配送方式</li>
              <li>送货上门</li>
              <li>电子票</li>
              <li>上门自取</li>
              <li>大麦自助机换票</li>
            </ul>
            <ul>
              <li>支付方式</li>
              <li>在线支付</li>
              <li>柜台支付</li>
            </ul>
            <ul>
              <li>大麦网微信</li>
              <li><img src="../assets/img/erWeima.jpg"/></li>
            </ul>
            <ul>
              <li>大麦网触屏版</li>
              <li><img src="../assets/img/erWeima.jpg"/></li>
            </ul>
            <ul>
              <li>账户安全</li>
              <li>找回密码</li>
              <li>账户注册</li>
              <li>账户绑定</li>
              <li>SSL安全证书</li>
            </ul>
            <ul>
              <li>退货方式</li>
              <li>退换及缺货说明</li>
              <li>发票帮助</li>
              <li>订票服务条款</li>
            </ul>
            <ul>
              <li>特色服务</li>
              <li>演出订阅</li>
            </ul>
          </div>
          <div class="footLow">
            <div class="footLow_com">
              <ul>
                <li>公司介绍</li>|
                <li>品牌识别</li>|
                <li>企业荣誉</li>|
                <li>隐私声明</li>|
                <li>联系及合作</li>|
                <li>招聘信息</li>|
                <li>网站地图</li>|
                <li>友情链接</li>|
                <li>公司大事记</li>
              </ul>
            </div>
            <div class="footLow_trade">
              <img src="../assets/img/trade1.png"/>
              <img src="../assets/img/trade2.png"/>
              <img src="../assets/img/trade3.png"/>
              <img src="../assets/img/trade4.png"/>
              <img src="../assets/img/trade5.png"/>
              <img src="../assets/img/trade6.png"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
      return {

      }
    }
}
</script>

<style scoped lang="less">
#footer{
  height: 400px;
  background: #e6e6e6;
  overflow: hidden;
  .footWrap{
    width: 1200px;
    margin: 45px auto 0;
    .footUp{
      display: flex;
      justify-content: space-between;
      border-bottom: 3px solid red;
      padding-bottom: 21px;
      &>ul{
        li:first-of-type{
         height: 39px;
         line-height: 39px;
         font-size: 15px;
        }
        li{
          color: #333;
          height: 25px;
          line-height: 25px;
          font-size: 11px;
          cursor: pointer;
          &:hover{
            color: blue;
          }
        }
      }
    }
    .footLow{
      .footLow_com{
        width: 867px;
        margin: 20px auto 32px;
        ul{
          display: flex;
          li{
            margin: 0 16px;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
      .footLow_trade{
        display: flex;
        margin: 0 auto;
        width: 830px;
        justify-content: space-between;
        img{
          height: 100%;
        }
      }
    }
  }
}
</style>
