<template>
  <div class="home">
    <div class="classification">
      <p class="iconfont icon-xiangzuo"></p>
      <div class="classificationhead">
        <p>全部商品分类</p>
       <div class="ulbox">
         <ul>
           <li>喜剧</li>
           <li>体育</li>
           <li>亲子</li>
           <li>舞蹈古典</li>
           <li>摇滚</li>
         </ul>
       </div>
      </div>
      <div class="rotation">
        <!--轮播图-->
      </div>
      <div class="listb">
        <ul class="leftul">
          <li>
            <i class="iconfont icon-huatong1"></i>
            演唱会
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-yinlehui"></i>
            音乐会
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-huajugeju"></i>
            歌剧话剧
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-shanzi"></i>
            曲苑杂坛
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-zuqiu"></i>
            体育比赛
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-ertong"></i>
            儿童亲子
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
          <li>
            <i class="iconfont icon-flamenco"></i>
            舞蹈芭蕾
            <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
          </li>
        </ul>
        <div class="listbox">
          <div class="topbox">
            <p>演唱会</p>
            <i class="iconfont icon-xiangyou"></i>
            <ul>
              <li>子类1</li>
              <li>子类2</li>
            </ul>
            <span class="iconfont icon-guanbi"></span>
          </div>
          <div class="bottombox">
            <p class="headp">相关热门</p>
            <ul>
              <li>
                <p>img</p>
                <p>ziziziaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p>票价：¥</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="iconfont icon-xiangyou1"></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Chao"
    }
</script>

<style scoped lang="less">
.home{
  .classification{
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .classificationhead{
      width: 1200px;
      overflow: hidden;
      p{
        float: left;
        font-size: 12px;
        height: 50px;
        line-height: 50px;
        padding: 0 64px;
        background: #000;
        color: white;
      }
      .ulbox{
        width: 998px;
        border: 1px solid #dcdcdc;
        float: left;
        ul{
          width: 490px;
          display: flex;
          justify-content: space-around;
          li{
            font-size: 15px;
            height: 48px;
            line-height: 48px;
            cursor: pointer;
          }
        }
      }
    }
    .rotation{
      width: 1200px;
      height: 420px;
      background: black;
      opacity: 0.3;
    }
    .listb{
      position: absolute;
      top: 50px;
      left: 0;
      overflow: hidden;
      .leftul{
        width: 200px;
        padding-bottom: 66px;
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
            height: 18x;
            margin-left: 610px;
            cursor: pointer;
          }
          ul{
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
          .headp{
            height: 58px;
            line-height: 56px;
            font-size: 18px;
          }
          ul{
            li{
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
            }
          }
        }
      }
    }
  }
}
</style>
