<template>
  <div>
    <navbar class="minenav">
      <div slot="center">我的</div>
    </navbar>
    <userinfo></userinfo>
    <userfunction class="tabbarcontrol" :title="['收藏','订阅','足迹']"/>
    <otherfunction></otherfunction>
  </div>
</template>

<script>

import navbar from 'components/common/navbar/navbar'
import userinfo from './childcomps/userinfo.vue'
import userfunction from './childcomps/userfunction.vue'
import otherfunction from './childcomps/otherfunction'

export default{
  name:'mine',
  components:{
    navbar,
    userinfo,
    userfunction,
    otherfunction,
  }
}
</script>

<style>
  .minenav{
    background-color: coral;
    color: white;
    font-size: 100;
    font-size: 18px;
  }
</style>
