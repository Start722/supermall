<template>
  <div id="home">
    <navbar class="homenav">
      <div slot="center">首页</div>
    </navbar>
    <tabcontrol  class="toptabcontrol" v-show="istabfixed"
    :title="['流行','新款','精选']" 
      @tabclick='tabclick' ref="tabcontrol1"/>
    <scroll class="scrollcontent" ref="scroll" 
    :probetype="3" @position='position' 
    :pullupload='true' @pullingup='pullingup'>
      <homeswiper :banners='banners' @swiperimageload='swiperimageload'/>
      <recommendview :recommends='recommends'/>
      <featureview/>
      <tabcontrol :title="['流行','新款','精选']"
      @tabclick='tabclick' ref="tabcontrol2"  v-show="!istabfixed"/>
      <goodslist :goods="goods[currenttype].list"></goodslist>
    </scroll>
    <backtop @click.native="backtop" v-show="isshowbacktop"></backtop>
  </div>
</template>

<script>

import navbar from 'components/common/navbar/navbar';
import tabcontrol from 'components/content/tabcontrol/tabcontrol';
import goodslist from 'components/content/Goods/goodslist';
import scroll from 'components/common/scroll/scroll';
import backtop from 'components/content/backtop/backtop';

import homeswiper from './childcomps/Homeswiper';
import recommendview from './childcomps/recommendview';
import featureview from './childcomps/featureview';

import {getHomeMultidata,getHomeGoods} from 'network/home';

export default{
  name:'home',
  components:{
    navbar,
    tabcontrol,
    homeswiper,
    recommendview,
    featureview,
    goodslist,
    scroll,
    backtop,
  },data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currenttype:'pop',
      isshowbacktop:false,
      taboffsettop:0,
      istabfixed:false,
      saveY:0
    }
  },
  //bscroll记录离开时的位置，回来时导入位置
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,1)
    this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
    //console.log(this.saveY);
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    tabclick(index){
      switch(index){
        case 0:
          this.currenttype = 'pop'
          break
        case 1:
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
          break
      }
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;
    },
    //回到顶部
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500);
    },
    //backtop隐藏
    position(position){
      //此处应该监听浏览器滚动做防抖
      //console.log(position);
      if(-position.y > 1000){
        this.isshowbacktop = true
      }else{
        this.isshowbacktop = false
      }
      //吸顶效果
      if(-position.y > this.taboffsettop){
        this.istabfixed = true
      }else{
        this.istabfixed = false
      }
    },
    //上拉加载更多
    pullingup(){
      this.getHomeGoods(this.currenttype)
      this.$refs.scroll.scroll.refresh()
      //console.log(this.$refs.scroll.scroll.refresh); 
    },
    swiperimageload(){
      this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop - 44;
    },
    //以下是网络请求相关方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.scroll.finishPullUp()
      })
    },
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    overflow: hidden;
  }
  .homenav{
    background-color: coral;
    color: white;
    font-weight: 100;
    font-size: 18px;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
    position: relative;
    z-index: 9;
  }
  .scrollcontent{
    height: calc(100% - 93px);
  }
  .toptabcontrol{
    position: relative;
    z-index: 9;
  }
</style>
