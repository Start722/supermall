<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <a @click="btnclick(isShow)"><img class="returnbtn" src="~assets/img/return.png"/></a>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">注册</a>
        </div>
      </div>
      <!-- 内容部分 -->
      <div class="login_content">
         <form @submit.prevent="login">
             <!-- 登录 -->
           <div :class="{on: loginWay}" class="logincontent" v-if="loginchange">
                 <section class="login_message">
                   <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
                  <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" @click.prevent="getCode" @click="codeonsubmit">{{computeTime>0 ? `(${computeTime}s)已发送` : '获取验证码'}}</button>
                 </section>
                 <section class="login_verification">
                     <input type="tel" maxlength="6" placeholder="验证码" v-model="code">
                 </section>
                 <button class="login_submit" :disabled='iscode' :class="{btncolor:iscode}" @click="codeloginonsubmit">登录</button>
                 <a href="#" @click="loginchange=false" class="loginchange">切换登录</a>  
            </div>
            <div :class="{on: loginWay}" class="logincontent" v-else>
                 <section class="login_message">
                   <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
                 </section>
                 <section class="login_verification">
                     <input type="password" maxlength="20" placeholder="密码" v-model="pwd">
                 </section>
                 <button class="login_submit" :disabled='ispassword' :class="{btncolor:ispassword}" @click="loginonsubmit" >登录</button>
                 <a href="#" @click="loginchange=true" class="loginchange" >切换登录</a>  
            </div>
             <!-- 注册 -->
            <div :class="{on:!loginWay}">
               <section class="login_message">
                 <input type="text" maxlength="16" placeholder="用户名" v-model="username" />
                </section>
                <section class="login_message">
                 <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
                </section>
                <section class="login_verification">
                  <input type="password" maxlength="20" placeholder="密码"  v-model="pwd"/>
                </section>
                <button class="login_submit" @click="onsubmit" :disabled='!islogin' :class="{btncolor:!islogin}">注册</button>
            </div>
         </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: "login",
    data() {
      return {
        loginWay:false,//true代表短信登陆, false代表密码
        phone:'',//手机号,
        computeTime: 0,
        code:'',//验证码
        timer:null,
        pwd:'',
        username:'',
        loginchange:true,
      }
  },
  props:{
    isShow:Boolean,
  },
  computed:{
    islogin(){
      let flag = this.rightPhone==true && this.rightusername==true && this.rightpwd==true;
      //console.log(flag)
      return flag
    },
    iscode(){
      let flag = this.code.length == 6;
      //console.log(!flag)
      return !flag
    },
    ispassword(){
      let flag = this.pwd == '';
      return flag
    },
    rightPhone(){
      //利用正则对手机号匹配
      return /^1[3456789]\d{9}$/.test(this.phone);
    },
    rightusername(){
      return /^[a-zA-Z0-9_-]{4,16}$/.test(this.username);
    },
    rightpwd(){
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.pwd);
    }
  },
  methods:{
    btnclick(isShow){
      isShow = !isShow
      //console.log(isShow)
      this.$emit('isShow',isShow);
    },
    getCode(){
      if(!this.computeTime){
        this.computeTime = 30;
        this.timer = setInterval(() => {
            this.computeTime --;
            if( this.computeTime <= 0){
              clearInterval(this.timer)
            }
        }, 1000);
      }
    },
    login(){
      //登陆
      if(this.loginWay){
        if(!this.rightPhone){
        alert('手机号不正确');
         }
      }
      if(!this.loginWay){
        //注册
       if(!this.rightusername){
        alert("用户名需要4到16位（字母，数字，下划线，减号）")
         }else if(!this.rightPhone){
          alert('手机号不正确')
        }else if(!this.rightpwd){
         alert('密码至少包含 数字和英文，长度6-20')
        }
      }
    },
    //注册
    onsubmit(){
      const payload = {
        phone:this.phone,
        pwd:this.pwd,
        username:this.username
      }
      this.translation(payload)
    },
    translation(payload){
      const path = 'http://192.168.1.103:5000/register'
      axios.post(path,payload)
        .then(()=>{
          this.gettl()
          //console.log(payload)
          this.tips = 'submit success'
          this.showMessage = true
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    gettl(){
      const path = 'http://192.168.1.103:5000/register'
      axios.get(path)
        .then((res) => {
          this.msgtips = res.data.data.data
          //console.log(this.msgtips)
          alert(this.msgtips)
        })
        .catch((error) => {
          console.error(error);
        })
    },
    //登陆
    loginonsubmit(){
      const payload = {
        phone:this.phone,
        pwd:this.pwd,
      }
      this.logintranslation(payload)
    },
    logintranslation(payload){
      const path = 'http://192.168.1.103:5000/inlog'
      axios.post(path,payload)
        .then(()=>{
          this.logingettl()
          //console.log(payload)
          this.tips = 'submit success'
          this.showMessage = true
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    logingettl(){
      const path = 'http://192.168.1.103:5000/inlog'
      axios.get(path)
        .then((res) => {
          this.aftlname = res.data.data.name
          //console.log(this.aftlname)
          alert(this.aftlname)
          this.$emit('aftlname',this.aftlname)
          let flag = !this.isShow
          //console.log(flag)
          this.$emit('returnfirst',flag)
        })
        .catch((error) => {
          console.error(error);
        })
    },
    //验证码获取
    codeonsubmit(){
      const payload = {
        phone:this.phone,
      }
      this.codetranslation(payload)
    },
    codetranslation(payload){
      const path = 'http://192.168.1.103:5000/sendcode'
      axios.post(path,payload)
        .then(()=>{
          this.codegettl()
          //console.log(payload)
          this.tips = 'submit success'
          this.showMessage = true
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    codegettl(){
      const path = 'http://192.168.1.103:5000/sendcode'
      axios.get(path)
        .then((res) => {
          this.listname = res.data.data.name
          this.listtime = res.data.data.time
          this.listcode = res.data.data.code
          //console.log(this.listname+this.listtime+this.listcode)
          if(this.listcode == 'error'){
            alert('该手机号未注册！')
          }
        })
        .catch((error) => {
          console.error(error);
        })
    },
    //验证码登录
    codeloginonsubmit(){
      let time = new Date()
      if(time.getTime()/1000 - this.listtime <= 300 ){
        if(this.code === this.listcode){
          let flag = !this.isShow
          //console.log(flag)
          this.$emit('returnfirst',flag)
          this.$emit('listname',this.listname)
        }else{
          alert('验证码错误！')
        }
      }else{
          alert('验证码已失效！')
        }
    }
  }
}
</script>

<style scoped>

.returnbtn{
  height: 20px;
  width: 20px;
  position: absolute;
  left: 20px;
  top: 64px;
}
.loginContainer {
  background: #fff;
  border-radius: 18px;
  margin: 8px;
}
.loginInner {
  width: 80%;
  margin: 0 auto;
}
.loginInner .login_header{
  color: coral;
  font-weight: bolder;
  font-size:40px;
  text-align:center;
}
.login_header .login_header_title{
  text-align:center;
}
.login_header_title a{
  text-decoration: none;
  font-size:14px;
  color:#333;
  padding-bottom:4px;
}
.login_header_title a:first-child{
  margin-right:40px;
}
.login_header_title a.on{
  color :coral;
  font-weight: bolder;
  border-bottom:2px solid coral;
}
.login_content form div{
   display:none;
}
.login_content form div.on{
  display:block;
}
.login_content form  input{
  width:100%;
  height:100%;
  border: 1px solid #ddd;
  border-radius :4px;
  outline: none;
  padding-left:10px;
  box-sizing: border-box;
}
.login_content form  input:focus{
   border: 1px solid coral;
}
.login_message{
   position:relative;
   margin-top:16px;
   height:40px;
   font-size:14px;
   background:#fff;
}
.login_message .get_verification{
 position:absolute;
 top:50%;
 right:10px;
 transform: translateY(-50%);
 border:none;
 color:#ccc;
 background :transparent;
 font-size:14px;
}
.login_message .get_verification.right_phone{
 color:#000;
}
.login_verification{
  position:relative;
  margin-top:16px;
  height:40px;
  font-size:14px;
  background:#fff;
}
.login_submit{
  margin-bottom: 10px;
  width:100%;
  height:40px;
  margin-top:18px;
  background :coral;
  border-radius:4px;
  font-size:16px;
  line-height:42px;
  color:#fff;
  text-align:center;
  border:none;
}
.btncolor{
  background-color: #e0e0e0;
}
.logincontent{
  position: relative;
}
.loginchange{
  position: absolute;
  left: 50%;
  margin-left: -35px;
  display: block;
  width: 70px;
  height: 10px;
  font-size: 12px;
  color: #e0e0e0;
  text-align: center;
}
.loginchange:hover{
  color: #333;
}

</style>