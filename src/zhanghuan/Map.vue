<template>
    <div>
      <div id="allmap" class="allmap" ref="allmap" style="height: 500px;width: 500px"></div>
      <div class="bottmobox" :style="{display: myIndex == 0? 'block':'none'}">1</div>
      <div class="bottmobox" :style="{display: myIndex == 1? 'block':'none'}">2</div>
      <div class="bottmobox" :style="{display: myIndex == 2? 'block':'none'}">3</div>
      <div class="bottmobox" :style="{display: myIndex == 3? 'block':'none'}">4</div>
      <div class="bottmobox" :style="{display: myIndex == 4? 'block':'none'}">5</div>
      <div class="bottmobox" :style="{display: myIndex == 5? 'block':'none'}">6</div>
    </div>
</template>

<script>
import BMap from 'BMap';
export default {
    name: 'Map',
    data () {
      return {
        myIndex:0
      }
    },
    mounted() {
      this.ready();
    },
    methods: {
      ready: function() {
        var map = new BMap.Map("allmap");  // 创建Map实例
        map.addControl(new BMap.MapTypeControl({//添加地图类型控件
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}));
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放*/
        //map.centerAndZoom("西安市临潼区老李家牛羊肉",25);//当前地址
        map.enableDoubleClickZoom(true);//点击地图上某地标移至地图中央

        var localSearch = new BMap.LocalSearch(map);
        localSearch.enableAutoViewport(); //允许自动调节窗体大小
        localSearch.setSearchCompleteCallback(function (searchResult) {
          var poi = searchResult.getPoi(0);//获取经纬度
          console.log(poi.point.lng + "," + poi.point.lat)
          map.centerAndZoom(poi.point, 23);//根据localSearch.search('杭州')的内容确定中心地标
          //把标注添加到地图上
          var marker = new BMap.Marker(new BMap.Point(poi.point.lng,poi.point.lat));
          map.addOverlay(marker);
        });
        //目的地
        localSearch.search('西安市临潼区老李家牛羊肉泡馍');
        //map.enableContinuousZoom(false);    //启用地图惯性拖拽，默认禁用
        //map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开
        /*BMAP_ANCHOR_TOP_LEFT 表示控件定位于地图的左上角。
        BMAP_ANCHOR_TOP_RIGHT 表示控件定位于地图的右上角。
        BMAP_ANCHOR_BOTTOM_LEFT 表示控件定位于地图的左下角。
        BMAP_ANCHOR_BOTTOM_RIGHT 表示控件定位于地图的右下角。*/
        //添加缩略图控件
        //map.addControl(new BMap.OverviewMapControl({isOpen:false,anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));
        //添加缩放平移控件
        //map.addControl(new BMap.NavigationControl());
        //添加比例尺控件
        //map.addControl(new BMap.ScaleControl());
        //添加地图类型控件
        //map.addControl(new BMap.MapTypeControl());
      },
      /*mouseenterFn (index) {
        this.myIndex = index
      }*/
    }
}
</script>

<style scoped>

</style>
