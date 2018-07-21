import Vue from 'vue';
import Vuex from 'vuex'
import test from './test.js'
import user from './user.js'
import cart from './cart.js'
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    test,
    user,
    cart
  }
});



/*
定义模块
  test : 相当于是一张表
     state   : 保存数据的地方
     getters : 获取数据
     actions : 修改数据  调用commit   可以做异步操作
     mutations : 真正能够修改数据的地方, vuex为了跟踪数据的变化  , 只能做同步操作

引入模块:
  new Vuex.Store({
    modules:{
      test
    }
  })

在main.js 的根实例中注册store
*/










/*
export default new Vuex.Store({
  state: {
    //定义数据
    username:'张三',
    all:['aa','bb','cc']
  },
  getters:{
    allLength:state=>state.all.length,
    username:state=>state.username
  },
  actions:{
    //一些操作数据的方法
    changeAction:(context,newName)=>{
      context.commit('changeMutation',newName)
    }
  },
  mutations: {
    //真正去修改数据的地方
    changeMutation (state,newName) {
      console.log(newName);
      state.username = newName
    }
  }
});
*/
