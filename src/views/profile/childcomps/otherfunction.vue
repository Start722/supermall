<template>
  <div class="quit">
    <div class="quit-size" @click="quit">退出</div>
  </div>
</template>

<script>

export default{
  name:'other',
  methods:{
    quit(){
      this.$router.go(0)
    }
  }
}
</script>

<style>
  .quit{
    background-color: #fff;
    height: 45px;
    border-radius: 10px;
    margin: 8px;
  }
  .quit-size{
    color: red;
    font-weight: 520;
    padding-top: 15px;
    text-align: center;
  }
</style>