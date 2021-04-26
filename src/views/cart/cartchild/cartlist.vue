<template>
  <div class="view-warpper">
    <div class="container">
      <!-- 提醒登录信息 -->
      <div class="login-container">
        <a href="#" class="login">
          <span class="flex">登录后享受更多优惠</span>
          <em class="flex">去登录</em>
        </a>
      </div>
      <!-- 空购物车 -->
      <div class="empty-cart">
        <a href="#">
          <span>购物车还是空的</span>
          <em>去逛逛</em>
        </a>
      </div>
      <div class="cartlist">
        <cartlistitem v-for="(item,index) in cartlist" :key="index" :item-info='item'></cartlistitem>
      </div>
    </div>
  </div>
</template>

<script>

import cartlistitem from './cartlistitem'

export default {
  name:'view-warpper',
  data(){
    return{
      cartlist:{},
    }
  },
  components:{
    cartlistitem
  },
  created(){
    this.cartlist = this.$store.state.cartList
  }
}
</script>

<style scoped>
    .flex{
      flex: 1 1 auto;
    }
    a,em{
      text-decoration: none;
      font-style: normal;
    }
    .view-warpper{
      position: relative;
    }
    .login{
      display: flex;
      justify-content: space-between;
      height: 50px;
      padding-left: 16px;
      padding-right: 30px;
      position: relative;
      align-items: center;
    }
    .login > span{
      text-align: left;
      color:rgba(0, 0, 0, .87);
      display: block;
    }
    .login>em{
      text-align: right;
      color:rgba(0, 0, 0, .54);
      font-size: 12px;
    }
    .login::after{
      content: "";
      height: 8px;
      width: 8px;
      position: absolute;
      right: 15px;
      top: 50%;
      border-left: 1px solid currentColor;
      border-top: 1px solid currentColor;
      transform: translate3d(0,-50%,0) rotate(135deg);
    }
    .empty-cart{
      position: absolute;
      padding: 10px;
      height: 60px;
      line-height: 40px;
      background-color: #ebebeb;
      text-align: center;
      margin-top: -6px;
      width: 100%;
    }
    .empty-cart>a{
      /* height: 16px; */
      text-align: center;
      font-size: 12.5px;
    }
    .empty-cart>a span{
      display: inline-block;
      height: 40px;
      color:rgba(0, 0, 0, .27);
      padding-left: 50px;
      padding-right: 8px;
      background: url('~assets/img/carts/empty.png') no-repeat 0;
      background-size: auto 100%;
    }
    .empty-cart>a em{
      display: inline-block;
      border: 1px solid rgba(0,0,0,.15);
      box-sizing: border-box;
      height: 24px;
      line-height: 24px;
      padding:0 12.5px;
      color:rgba(0, 0, 0, .87);
      font-style: normal;
    }

</style>