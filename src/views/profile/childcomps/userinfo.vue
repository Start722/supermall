<template>
  <div class="user">
    <div :class="{cantclick:isclick}" v-if="isActive==true" @click="btnclick" :isShow='isActive'>
      <img class="privateImage" src="~assets/img/usericon.png"/>
      <div class="aaa">{{username}}</div>
    </div>
    <login v-else  @isShow='isShow' @aftlname='aftlname' @returnfirst='returnfirst' @listname="listname"></login>
  </div>
</template>

<script>
import login from './login.vue'
export default {
  components: { login },
  name: "UserInfo",
  data(){
    return{
      isclick:'',
      isActive:true,
      username:'登录/注册'
    }
  },
  methods:{
    btnclick(){
      this.isActive = !this.isActive;
    },
    isShow(isShow){
      //console.log(this.isActive)
      this.isActive = isShow;
    },
    aftlname(aftlname){
      this.username = aftlname;
    },
    returnfirst(flag){
      this.isclick = flag
      this.isActive = flag;
      //console.log(this.isActive);
    },
    listname(listname){
      this.username = listname
    }
  }
}
</script>

<style scoped>
.user{
  background-color:#fff;
  margin: 6px;
  border-radius: 15px;
  padding-bottom: 20px;
}
.privateImage{
  width: 60px;
  height: 60px;
  position: relative;
  margin-top: 20px;
  margin-left: -30px;
  left: 50%;
}
.aaa{
  padding-top: 10px;
  color: #333;
  text-align: center;
}
.bbb{
  font-size: 14px;
  padding:5px;
}
.cantclick{
  pointer-events: none;
}
</style>