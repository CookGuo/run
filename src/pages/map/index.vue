<!-- <template>
 <div class="map">
   <el-amap vid="amap" :plugin="plugin" class="amap-demo"></el-amap>
   <div class="container"></div>
 </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'app',
    data () {
      let self = this
      return {
        positions: {
          lng: '',
          lat: '',
          address: '',
          loaded: false
        },
        center: [121.59996, 31.197646],
        plugin: [{
          pName: 'Geolocation',
          events: {
            init (o) {
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.str = result.formattedAddress
                  self.positions.address = self.str.substring(self.str.indexOf('市') + 1)
                  self.positions.lng = result.position.lng
                  self.positions.lat = result.position.lat
                  self.positions.loaded = true
                  self.$nextTick()
                  axios.get('/map?dest=' + self.positions.lng + ',' + self.positions.lat + '&hideRouteIcon=1&key=1d1f79ae4bc33f3215ecabdc975d6fd8')
                }
              })
            }
          }
        }]
      }
    }
  }
</script>

<style scoped>
  .map{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .amap-demo {
    display: block;
  }
</style> -->

<template>
  <div>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
        <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
        <el-amap-marker :position="marker.position" :events="marker.events" :draggable="marker.draggable"></el-amap-marker>
       <!--  <el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle> -->
      </el-amap>
    </div>
  </div>
</template>

<style>
  .amap-page-container {
    height: 500px;
  }
</style>


<script>
export default {
  data () {
    return {
      zoom: 15,
      center: [121.5273285, 31.21515044],
      circle: {
        clickable: true,
        center: [121.5273285, 31.21515044],
        radius: 200,
        fillOpacity: 0.3,
        strokeStyle: 'dashed',
        fillColor: '#FFFF00',
        strokeColor: '#00BFFF'
      },
      marker: {
        position: [121.5273285, 31.21515044],
        events: {
          click: () => {
            if (this.mywindow.visible === true) {
              this.mywindow.visible = false
            } else {
              this.mywindow.visible = true
            }
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        visible: true,
        draggable: false
      },
      mywindow: {
        position: [121.5273285, 31.21515044],
        visible: true,
        events: {
          close () {
            this.mywindow.visible = false
          }
        }
      },
      plugin: {
        pName: 'Scale',
        events: {
          init (o) {
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.str = result.formattedAddress
                self.positions.address = self.str.substring(self.str.indexOf('市') + 1)
                self.positions.lng = result.position.lng
                self.positions.lat = result.position.lat
                self.positions.loaded = true
                self.$nextTick()
                axios.get('/map?dest=' + self.positions.lng + ',' + self.positions.lat + '&hideRouteIcon=1&key=1d1f79ae4bc33f3215ecabdc975d6fd8')
              }
            })
          },
        }
      }
    }
  }
}
</script>