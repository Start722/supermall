<template>
  <div class="detailnavbar">
    <navbar>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item" class="titleitem" @click="topbarbtn(index)" :class="{active:index === currentindex}">{{item}}</div>
      </div>
      <div slot="left" class="returnbtn" @click="returnbtn">
        <img src="~assets/img/return.png">
      </div>
    </navbar>
  </div>
</template>

<script>

import navbar from 'components/common/navbar/navbar'

export default {
  name:'detailnavbar',
  components:{
    navbar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentindex:0
    }
  },
  methods:{
    topbarbtn(index){
      this.currentindex = index;
      this.$emit('titleclick',index)
    },
    returnbtn(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .detailnavbar{
    background: #fff
  }
  .title{
    display: flex;
    font-size: 13px;
    color: #030303;
  }
  .titleitem{
    flex: 1;
  }
  .returnbtn img{
    height: 22px;
    width: 22px;
    margin-top: 10px;
  }
  .active{
    color: coral;
  }
</style>