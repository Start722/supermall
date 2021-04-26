<template>
<div class="cart">
  <navbar class="cartsnav">
    <div slot="center">{{'购物车' + '(' + $store.state.cartList.length + ')'}}</div>
    <img slot="right" class="search" src="~assets/img/carts/search.png"/>
  </navbar>
  <scroll class="cartcontent" :pullupload='true' ref="scroll">
    <cartlist></cartlist>
  </scroll>
  <pay></pay>
</div>
</template>

<script>

import navbar from 'components/common/navbar/navbar'
import pay from 'views/cart/cartchild/pay'
import cartlist from 'views/cart/cartchild/cartlist'
import scroll from 'components/common/scroll/scroll';

export default{
  name:'carts',
  components:{
    navbar,
    pay,
    cartlist,
    scroll,
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style>
  .cart{
    height: 100vh;
  }
  .cartsnav{
    background-color: coral;
    color: white;
    font-size: 18px;
    position: relative;
    z-index: 9;
  }
  .search{
    height: 24px;
    width: 24px;
    margin-top: 10px;
  }
  .cartcontent{
    height:calc(100% - 44px - 48px - 52px);
    overflow: hidden;
  }
</style>
