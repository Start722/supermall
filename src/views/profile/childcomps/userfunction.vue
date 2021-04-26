<template>
  <div class="userfunction">
    <div class="functions">
      <div v-for="(item,index) in title" :key="item" class="font" :class="{active:index === currentindex}" @click="itemclick(index)">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="fontleft">我的订单</div>
    <div class="positions">
      <div class="functionicon">
        <div class="iconimg"><img src="~assets/img/payfor.png"/></div>
        <div class="iconimg"><img src="~assets/img/recive.png"/></div>
        <div class="iconimg"><img src="~assets/img/express.png"/></div>
        <div class="iconimg"><img src="~assets/img/comment.png"/></div>
        <div class="iconimg"><img src="~assets/img/afterbuy.png"/></div>
      </div>
      <div class="functioniconbuttom">
        <div class="functioniconfont">付款</div>
        <div class="functioniconfont">发货</div>
        <div class="functioniconfont">签收</div>
        <div class="functioniconfont">评价</div>
        <div class="functioniconfont">售后</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
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
    }
  }
}
</script>

<style scoped>
  .positions{
    position: relative;
    margin-left: 12%;
  }
  .functioniconbuttom{
    display: flex;
  }
  .functioniconfont{
    font-size: 12px;
    flex: 1;
  }
  .fontleft{
    margin: 10px 10px;
    font-weight: 500;
  }
  .userfunction{
    height: 150px;
    background-color:white;
    border-radius: 15px;
    margin: 6px;
  }
  .functions{
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 10px;
  }
  .font{
    font-size: 15px;
    flex:1;
    text-align: center;
    position: relative;
    top: 10%;
  }
  .active{
    color: coral;
  }
  .active span{
    border-bottom: 2px solid coral;
    padding: 3px;
  }
  .functionicon{
    display: flex;
  }
  .iconimg img{
    width: 27px;
    height: 27px;
    position: relative;
    margin-top: 3px;
  }
  .iconimg{
    flex: 1;
    width: 35px;
    height: 35px;
  }
</style>