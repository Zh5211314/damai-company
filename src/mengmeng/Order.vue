<template>
  <div id="Order">
    <Header></Header>
    <div class="Ordercon">
      <OrderNav></OrderNav><!--头部导航-->
      <div class="infor">
        <h4>
          <span>实名证件信息</span>
        </h4>
        <div class="cont">
          <p>
            <label>购票人：</label>
            <button type="button" @click="show">选择购票人</button>
          </p>
          <div class="ticket" v-show="isShow">
            <button type="button"  @click="shows">新建购票人</button>
            <table >
              <tr>
                <th><input type="checkbox"> </th>
                <th>姓名</th>
                <th>卡类型</th>
                <th>身份证号</th>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>李明</td>
                <td>身份证</td>
                <td>420000000000000</td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td>王佳</td>
                <td>身份证</td>
                <td>4200000000000001</td>
              </tr>
            </table>
            <div class="people" v-show="isShows">
              <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <h5>
                常用购票人 <span>X</span>
              </h5>
                <p>
                  <label><i>*</i>用户姓名</label>
                  <input type="text" placeholder="请输入你的用户姓名">
                </p>
                <p>
                  <label><i>*</i>身份证号</label>
                  <input type="text" placeholder="请输入你的身份证号码">
                </p>
                <p>
                  <label><i>*</i>卡类型</label>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      请输入持卡类型<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>护照</el-dropdown-item>
                      <el-dropdown-item disabled>身份证</el-dropdown-item>
                      <el-dropdown-item divided>户口本</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </p>
              </el-form>-->
            </div>
          </div>
        </div>
      </div>
      <!--付款方式-->
      <div class="mode">
        <h4>
          <span>选择付款方式</span>
        </h4>
        <p>
          <el-radio v-model="radio" ></el-radio>
          <span>网上付款</span>
        </p>
      </div>
      <div class="list">
        <h4>
          <span>商品清单</span>
        </h4>
        <table>
          <tr>
            <th>商品名称</th>
            <th>座位号</th>
            <th>价格</th>
            <th>数量</th>
            <th>价格小计(元)</th>
          </tr>
          <tr v-for="item in listArr">
            <td>2019【旅程】世界巡回演唱会 - 杭州</td>
            <td>{{item.col}}排{{item.row}}号</td>
            <td>{{item.price}}</td>
            <td>1</td>
            <td>{{item.sumpay}}</td>
          </tr>
        </table>
      </div>
      <div class="invoice">
        <h4>
          <span>我要开发票</span>
        </h4>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="公司" name="first" class="invoicecon">
            <p>
              公司抬头：<input type="text" placeholder="请输入公司抬头">
            </p>
            <p>
              公司税号：<input type="text" placeholder="请输入公司税号">
            </p>
            <button type="button">确认发票信息</button>
          </el-tab-pane>
          <el-tab-pane label="个人" name="second" class="invoicecon">
            <p>
              个人信息：<input type="text" placeholder="请输入个人信息">
            </p>
            <p>
              个人信息：<input type="text" placeholder="请输入个人信息">
            </p>
            <button type="button">确认发票信息</button>
          </el-tab-pane>
        </el-tabs>
        <!--<p>
          <span class="oactive">公司</span>
          <span>个人</span>
        </p>-->
        <!--<ul>
          <li>
            <p>
              公司抬头：<input type="text" placeholder="请输入公司抬头">
            </p>
            <p>
              公司税号：<input type="text" placeholder="请输入公司税号">
            </p>
            <button type="button">确认发票信息</button>
          </li>
          <li>
            <p>
              个人信息：<input type="text" placeholder="请输入个人信息">
            </p>
            <p>
              个人信息：<input type="text" placeholder="请输入个人信息">
            </p>
            <button type="button">确认发票信息</button>
          </li>
        </ul>-->
      </div>
      <ul class="insurance">
        <li>
          <input type="checkbox"  @click="offs1">
          购买"安心订票保险"，本单保费金额：20:00元
        </li>
        <li>查看&nbsp;保险服务说明&nbsp;和&nbsp;《安心订票保险条款》</li>
        <li>购买保险请填写真实姓名</li>
        <li>商品金额：<span>￥{{allNum}}</span> </li>
        <li>商品保险：+<span>￥20:00</span> </li>
      </ul>
      <ul class="payment">
        <li><strong>待支付总额</strong><span>￥{{allNums}}</span></li>
        <li>
          <input type="checkbox"  @click="offs2">
          <strong>我已阅读并同意</strong>&nbsp;
          《订购服务条款》&nbsp;《退换货约定》&nbsp;《退款约定》
        </li>
        <li>同意“票品为不记名凭证，请您妥善保管，遗失不补”</li>
        <li>
          <button @click="cli"
                       :style="{background: isoff&&isoffs? '#ff3c1b': '#e6e6e6'}"
          >同意以上协议并提交订单</button>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  /*var listArr = [
    {
      'tit':'张韶涵 2019【旅程】世界巡回演唱会 - 杭州',
      'position':'1排7号',
      'price':1680,
      'num':2,
      'sumpay':0,
    },
    {
      'tit':'开心麻花爆笑舞台剧',
      'position':'9排7号',
      'price':400,
      'num':4,
      'sumpay':0,
    }
  ]*/
  import Header from '@/mengmeng/Header'
  import Footer from '@/zhanghuan/Footer'
  import OrderNav from '@/mengmeng/OrderNav'
    export default {
      name: "Order",
      components: {
        Header,
        Footer,
        OrderNav
      },
      data() {
        return {
          activeName: 'first',
          radio: '1',
          isShow:false,
          isShows:false,
          isoff:false,
          isoffs:false,
          sum:0,
          listArr:[],
          allNum:0,
          allNums:0
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        show() {
          this.isShow = true;
        },
        shows() {
          this.isShows = true;
        },
        offs1() {
          this.isoff = !this.isoff;
        },
        offs2() {
          this.isoffs = !this.isoffs;
        },
        cli(){
          if(this.isoff&&this.isoffs){
            this.$router.push({
              name: 'OrderPayment',
              params:{
                numCode:this.allNums
              }
            })
          }
        }
      },
      created() {
        this.listArr = this.$store.state.sitCode
        this.listArr.forEach(function (item,index) {
          item.sumpay = item.price
        })
        for (var j = 0 ; j < this.listArr.length; j++){
          this.listArr[j].sumpay= this.listArr[j].price
          this.allNum += this.listArr[j].sumpay
        }

        this.allNums=this.allNum+20
      }
    }
</script>

<style scoped lang="less">
  .bu{
    width: 92px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: #fff;
    background: #ff3c1b;
    border: none;
    border-radius: 4px;
  }
  #Order{
    background: #f5f5f5;
    .Ordercon{
      width: 1160px;
      margin: 0 auto;
      overflow: hidden;
      background: #fff;
      padding: 0 20px;
      font-size: 12px;
      h4{
        border-bottom: 1px solid #f5f5f5;
        height: 31px;
        font-weight: normal;
        margin-top: 8px;
        &>span{
          display: inline-block;
          font-size: 16px;
          height: 32px;
          line-height: 32px;
          color: #ff3c1b;
          padding: 0 10px;
          border-bottom: 1px solid #ff3c1b;
        }
      }
      .infor{
        .cont{
          margin: 10px 0 30px;
          p{
            button{
              .bu;
            }
          }
          .ticket{
            overflow: hidden;
            &>button{
              .bu;
              float: right;
            }
            table{
              width: 100%;
              margin-top: 100px;
              border-right: 1px solid #f5f5f5;
              border-bottom: 1px solid #f5f5f5;
              tr {
                width: 100%;
                th, td {
                  border-left: 1px solid #f5f5f5;
                  border-top: 1px solid #f5f5f5;
                  line-height: 20px;
                  padding: 10px 20px;
                }
                th {
                  font-weight: normal;
                  text-align: left;
                  background: #f8f8f9;
                  th:first-of-type {
                    width: 230px;
                  }
                }
              }
            }
          }
        }
      }
      .mode{
        p{
          height: 40px;
          line-height: 40px;
          margin-bottom: 10px;
        }
      }
      .list{
        table{
          width: 100%;
          margin-top: 10px;
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

      }
      .invoice{
        &>p{
          height: 34px;
          span{
            display: inline-block;
            width: 60px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            margin-right: 20px;
          }
          span.oactive{
            color: #ff3c1b;
            border-bottom: 2px solid #ff3c1b;
          }
        }
        .invoicecon{
          width: 100%;
          border: 1px solid #f5f5f5;
          padding-left: 15px;
          &>p{
            margin-top: 32px;
            height: 32px;
            line-height: 32px;
            input{
              width: 300px;
              height: 32px;
              line-height: 32px;
              text-indent: 4px;
              border: 1px solid #c3c3c3;
              color: #757575;
              border-radius: 4px;
            }
          }
          button{
            .bu;
            margin:30px;
          }
        }
      }
      .insurance,.payment{
        margin-top: 20px;
        border-top: 1px solid #c3c3c3;
        text-align: right;
        padding: 20px 0;
        &>li{
          height: 26px;
          line-height: 26px;
          span{
            color: #ff3c1b;
          }
          &>button{
            .bu;
            width: 164px;
            margin-top: 20px;
            background: #e6e6e6;
          }
        }
      }
      .payment{
        height: 200px;
        border-top: 1px dashed #c3c3c3;
      }
    }
  }
</style>
