<template>
  <div class ='tabBarItem' @click='itemClick'>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'coral'
    }
  },
  data(){
    return{
      //isActive:false,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(err => err)
    },
  },
}
</script>

<style>
  .tabBarItem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabBarItem img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>