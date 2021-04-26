<template>
  <div id="detail">
    <detailnavbar class="detailnavbar" @titleclick='titleclick' ref="nav"></detailnavbar>
    <!-- <div>{{this.$store.state.cartList[0]}}</div> -->
    <scroll class="content" ref="scroll" :pullupload='true' :probetype="3" @position="contentscroll">
      <detailswiper :topimg='topimg'></detailswiper>
      <detailbaseinfo :goods='goods'></detailbaseinfo>
      <detailshopinfo :shop='shop'></detailshopinfo>
      <detailgoodsinfo :detail-info='detailInfo' @imageLoad='imageLoad'></detailgoodsinfo>
      <detailparaminfo :param-info='paramInfo' ref="params"></detailparaminfo>
      <detailcmtinfo :comment-info='commentInfo' ref="comment"></detailcmtinfo>
      <goodslist :goods='recommends' ref="recommend"></goodslist>
    </scroll>
    <detailbottombar @addcart='addcart' class="detailbtm"></detailbottombar>
    <backtop @click.native="backtop" v-show="isshowbacktop"></backtop>
    <toast message='已加入购物车' :isshow='isshow'></toast>
  </div>
</template>

<script>

import detailnavbar from './childcomps/detailnavbar'
import detailswiper from './childcomps/detailswiper'
import detailbaseinfo from './childcomps/detailbaseinfo'
import detailshopinfo from './childcomps/detailshopinfo'
import detailgoodsinfo from './childcomps/detailgoodsinfo'
import detailparaminfo from './childcomps/detailparaminfo'
import detailcmtinfo from './childcomps/detailcmtinfo'
import detailbottombar from './childcomps/detailbottombar'

import scroll from 'components/common/scroll/scroll'
import goodslist from 'components/content/Goods/goodslist'
import toast from 'components/common/toast/toast'

import {getdetail,goods,shop,goodsparam,getrecommend} from 'network/detail'
import {backtopmixin} from 'common/mixin'

export default {
  name:'detail',
  mixins:[backtopmixin],  //混入
  data(){
    return{
      iid:null,
      topimg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themetopys:[],
      currentindex:0,
      isshow:false
    }
  },
  components:{
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    scroll,
    detailgoodsinfo,
    detailparaminfo,
    detailcmtinfo,
    goodslist,
    detailbottombar,
    backtopmixin,
    toast
  },
  created(){
    this.iid = this.$route.params.iid

    getdetail(this.iid).then(res => {
      const data = res.result
      //顶部图片轮播数据
      this.topimg = data.itemInfo.topImages
      //商品信息的获取
      this.goods = new goods(data.itemInfo,data.columns,data.shopInfo.services)
      //获取店铺信息
      this.shop = new shop(data.shopInfo)
      //保存商品详情数据
      this.detailInfo = data.detailInfo
      //商品参数
      this.paramInfo = new goodsparam(data.itemParams.info,data.itemParams.rule)
      //取出评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
       //在每个组件渲染完成有数据之后再进行回调
      // this.$nextTick(() => {
      //   //dom已经渲染出来了
      //   //但是图片可能还没有请求完
      //   this.themetopys = []
      //   this.themetopys.push(0);
      //   this.themetopys.push(this.$refs.params.$el.offsetTop - 44);
      //   this.themetopys.push(this.$refs.comment.$el.offsetTop - 44);
      //   this.themetopys.push(this.$refs.recommend.$el.offsetTop - 44);
      //   console.log(this.themetopys);
      // })
    })
    //推荐商品信息
    getrecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  methods:{
    //点击跳转到相应模块的位置
    imageLoad(){
      this.$refs.scroll.scroll.refresh();
      this.themetopys = [];
      this.themetopys.push(0);
      this.themetopys.push(this.$refs.params.$el.offsetTop - 44);
      this.themetopys.push(this.$refs.comment.$el.offsetTop - 44);
      this.themetopys.push(this.$refs.recommend.$el.offsetTop - 44);
      //console.log(this.themetopys);
    },
    titleclick(index){
      //console.log(index);
      this.$refs.scroll.scroll.scrollTo(0,-this.themetopys[index],200)
    },
    //到相应模块的时候将顶部相应标题变色
    contentscroll(position){
      //console.log(position);
      const positionY = -position.y
      let length = this.themetopys.length
      for(let i = 0; i < length; i++){
        if(this.currentindex !== i && ((i < length - 1 && positionY >= this.themetopys[i] && positionY < 
        this.themetopys[i+1]) || (i === length - 1 && positionY >= this.themetopys[i]))){
          this.currentindex = i;
          //console.log(i);
          this.$refs.nav.currentindex = this.currentindex
        }
      }
      if(-position.y > 1000){
        this.isshowbacktop = true
      }else{
        this.isshowbacktop = false
      }
    },
    addcart(){
      //获取购物车需要展示的信息
      const product = {}
      product.image = this.topimg[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      //将商品添加到购物车里
      this.$store.commit('addcart',product)
      //console.log(this.$store.state.cartList[0]);
      this.isshow = true
      setTimeout(() => {
        this.isshow = false
      }, 800);
    }
  }
}
</script>

<style scoped>
  #detail{
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }
  .content{
    height: calc(100% - 44px - 50px);
  }
  .detailnavbar{
    position: relative;
    z-index: 9;
  }
  .detailbtm{
    z-index: 9;
  }
</style>