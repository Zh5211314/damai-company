<template>
  <div class="home">
    <div class="classification">
      <div class="classificationhead">
        <p>全部商品分类</p>
        <ul>
          <li>喜剧</li>
          <li>体育</li>
          <li>亲子</li>
          <li>舞蹈古典</li>
          <li>摇滚</li>
        </ul>
      </div>
      <div class="rotation">
        <p></p>
      </div>
      <div class="listb">
        <ul>
          <li>演唱会</li>
          <li>音乐会</li>
          <li>歌剧话剧</li>
          <li>曲苑杂坛</li>
          <li>体育比赛</li>
          <li>儿童亲子</li>
          <li>舞蹈芭蕾</li>
        </ul>
        <div class="listbox"></div>
      </div>
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
    overflow: hidden;
    .classificationhead{
      width: 1200px;
      p{
        float: left;
        font-size: 12px;
        background: #000;
        padding: 20px 58px;
        color: white;
      }
      ul{
        width: 517px;
        overflow: hidden;
        li{
          float: left;
          font-size: 15px;
          height: 58px;
          line-height: 58px;
        }
      }
    }
  }
}
</style>
