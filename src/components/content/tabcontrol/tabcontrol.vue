<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in title" :key="item" class="tabcontrolitem"
     :class="{active:index === currentindex}" @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default{
  name:'home',
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentindex:0,
    }
  },
  methods:{
    itemclick(index){
      this.currentindex = index;
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style>
  .tabcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
    margin-top: -3px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabcontrolitem{
    flex: 1;
  }
  .tabcontrolitem span{
    padding:5px
  }
  .active{
    color:coral;
  }
  .active span{
    border-bottom: 3px solid coral;
  }
</style>
