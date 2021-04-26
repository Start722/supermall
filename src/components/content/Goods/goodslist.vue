<template>
  <div class="goodslist">
    <goodslistitem v-for="item in goods" :key="item.index" :goodsitem="item"></goodslistitem>
  </div>
</template>

<script>

import goodslistitem from './goodslistitem'

export default{
  name:'goodslist',
  components:{
    goodslistitem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style >
  .goodslist{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
