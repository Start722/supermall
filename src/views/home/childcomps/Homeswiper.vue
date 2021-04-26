<template>
    <swiper>
      <swiperitem v-for = "item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" @load="imageload">
        </a>
      </swiperitem>
    </swiper>
</template>

<script>

import {swiper,swiperitem} from 'components/common/swiper';

export default{
  name:'homeswiper',
  data(){
    return{
      isload:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    swiper,
    swiperitem
  },
  methods:{
    imageload(){
      if(!this.isload){
        this.$emit('swiperimageload')
        this.isload = true
      }
    }
  }
}
</script>

<style scopde>
 
</style>