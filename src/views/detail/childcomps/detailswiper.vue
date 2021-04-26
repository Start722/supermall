<template>
  <div class="detailswiper">
    <swiper class="swipers">
      <swiperitem  v-for="item in topimg" :key="item">
        <img :src="item"/>
      </swiperitem>
    </swiper>
  </div>
</template>

<script>

import {swiper,swiperitem} from 'components/common/swiper'

export default {
  name:'detailswiper',
  components:{
    swiper,
    swiperitem
  },
  props:{
    topimg:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .swipers{
    height: 400px;
  }
</style>