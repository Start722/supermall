<template>
  <div>
    <navbar class="sortnav">
      <div slot="center">分类</div>
    </navbar>
    <h2>程序员正在加班加点</h2>
    <h2>程序员正在加班加点</h2>
    <h2>程序员正在加班加点</h2>
    <h2>程序员正在加班加点</h2>
    <h2>程序员正在加班加点</h2>
    <h2>程序员正在加班加点</h2>
    <h2>程序员正在加班加点</h2>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
export default{
  name:'sort',
  components:{
    navbar
  }
}
</script>

<style>
  .sortnav{
    background-color: coral;
    color: white;
    font-size: 100;
    font-size: 18px;
  }
  h2{
    font-size: 50px;
    width: 50px;
    float: left;
    margin: 1.7px;
  }
</style>