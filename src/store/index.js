import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  //对state的数据进行修改都要经过mutations
  mutations: {
    addcart(state,payload){
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldproduct = item;
      //   }
      // }
      //在已有的carlist里用find方法（遍历）查找iid
      //find返回数组中符合条件的第一个元素
      let oldproduct = state.cartList.find(item => item.iid === payload.iid)
      if(oldproduct){
        oldproduct.count += 1
      }else{
        payload.count = 1
        payload.isChecked = false
        state.cartList.push(payload)
      }
    } 
  },
  actions: {
  },
  modules: {
  }
})
