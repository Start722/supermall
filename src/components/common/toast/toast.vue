<template>
  <transition name="content">
    <div class="toastcontent" v-show="isshow">
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name:'toast',
  props:{
    message:String,
    isshow:Boolean
  }
}
</script>

<style scoped>
  .toastcontent{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px 20px;
    border-radius: 10px;
    transform: translate(-50%,-50%);
    background-color:rgba(0,0,0,.6);
    color: #fff;
  }
  .content-enter,
  .content-leave-to{
    opacity: 0;
  }
  .content-enter-to,
  .content-leave{
    opacity: 1;
  }
  .content-enter-active,
  .content-leave-active{
    transition: all .5s;
  }
</style>