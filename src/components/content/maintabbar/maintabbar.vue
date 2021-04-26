<template>
  <tab-bar>
      <tab-bar-item path='/home' activeColor='coral'>
        <img slot="item-icon" src="~assets/img/firstpage.png">
        <img slot="item-icon-active" src="~assets/img/firstpage-active.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/sort' activeColor='coral'>
        <img slot="item-icon" src="~assets/img/sort.png">
        <img slot="item-icon-active" src="~assets/img/sort-active.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/carts' activeColor='coral'>
        <img slot="item-icon" src="~assets/img/maket.png">
        <img slot="item-icon-active" src="~assets/img/maket-active.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/mine' activeColor='coral'>
        <img slot="item-icon" src="~assets/img/mine.png">
        <img slot="item-icon-active" src="~assets/img/mine-active.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from 'components/common/tabbar/tabbar'
import TabBarItem from 'components/common/tabbar/tabbaritem'

export default {
  name: 'maintabbar',
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style>
</style>
