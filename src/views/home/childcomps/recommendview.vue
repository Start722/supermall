<template>
  <div class="recommend">
    <div v-for='item in recommends' :key='item.link' class="recommenditems">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default{
  name:'recommondview',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scopde>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 10px;
    padding: 10px 0;
    border-bottom: 6px solid #eee;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    background-color: #fff;
  }
  .recommenditems{
    flex: 1;
  }
  .recommenditems img{
    width: 80%;
    height: 80%;
    margin-bottom: 8px;
  }
</style>