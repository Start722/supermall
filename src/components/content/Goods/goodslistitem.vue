<template>
  <div class="goodslistitem" @click="itemclick">
    <img :src="showimage">
    <div class="goodsinfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default{
  name:'goodslistitem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    itemclick(){
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  },
  computed:{
    showimage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style>
  .goodslistitem{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goodslistitem img{
    width: 100%;
    height: 230px;
    border-radius: 5px;
  }
  .goodsinfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodsinfo p{
    height: 12px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 8px;
  }
  .goodsinfo .price{
    color: coral;
    margin-right: 20px;
  }
  .goodsinfo .collect{
    position: relative;
  }
  .goodsinfo .collect::before{
    content: "";
    position:absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/coll.png') 0 0/14px 14px;
  }

</style>
