<template>
  <div class="bottom-submit">
    <div class="box-flex">
      <check-button :is-checked='isselectall' class="checkbtn" @click.native="checkclick"></check-button>
      <div class="price-box flex">
        <span>合计：</span>
        <strong>{{totalprice}}</strong>
        <span>元</span>
      </div>
      <a href="#" class="btn flex">去结算</a>
    </div>
  </div>
</template>

<script>

import CheckButton from "components/content/checkbutton/checkbutton";

export default {
  name:'pay',
  components:{
    CheckButton
  },
  methods:{
    checkclick(){
      if(this.isselectall){
        this.$store.state.cartList.forEach(item => item.isChecked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.isChecked = true)
      }
    }
  },
  computed:{
    totalprice(){
      //filter遍历数组，过滤出item.click为true的对象，item为value值
      return this.$store.state.cartList.filter(item => {
        return item.isChecked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    isselectall(){
      //过滤所有cartlist中未选中的，计算其长度，如果为0，则全部选中，返回true
      return !(this.$store.state.cartList.filter(item => !item.isChecked).length)
    }
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
.checkbtn{
  position: relative;
  top: 15px;
  left: 15px;
}
.bottom-submit {
  height: 52px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ebebeb;
  box-shadow: 0 3px 14px 2px rgb(0 0 0 / 12%);
  margin-bottom: 48px;
}
.box-flex {
  display: flex;
}
.price-box {
  width: 100%;
  height: 44px;
  text-align: center;
  padding-top: 8px;
  font-size: 14px;
  color: #999;
  margin-top: 3px;
}
.price-box > strong {
  color: #ff5722;
  margin-right: 4px;
  font-size: 20px;
}
.btn {
  display: block;
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
  background-color: #ff6700;
  color: #fff;
}
.continue {
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  color: #333;
}
</style>