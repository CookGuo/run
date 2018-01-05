<template>
  <div>
    <container></container>
  	<install></install>
    <motion-data></motion-data>
    <bottom></bottom>
  </div>
</template>

<script>
import Install from './install'
import MotionData from './data'
import Container from './container'
import Bottom from 'components/common/bottom'
export default {
  name: 'index',
  components: {
    Bottom,
    Install,
    MotionData,
    Container
  }
}
</script>

<style>
</style>