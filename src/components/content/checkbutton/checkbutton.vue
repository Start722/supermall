<template>
<div class="checkbutton" :class="{active:isChecked}">
  <img src="~assets/img/carts/tick.png" alt="" class="tick">
</div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.checkbutton{
  background-color: #eeeeee;
  border-radius: 50%;
  border:solid 1px #aaa;
  height: 18px;
  width: 18px;
}
.active{
  border-color: coral;
  border-radius: 50%;
  background-color: coral;
}
.tick{
  height: 16px;
  width: 16px;
}
</style>