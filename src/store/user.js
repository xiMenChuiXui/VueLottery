//保存数据的地方
const state={
  user:null
}
//对外提供获取数据的计算属性,对外暴露的get

const getters={
  //判断用户是否已经登录
  isLogin:state=>state.user != null,
  //获取用户信息
  user:state=>state.user
}

//外部可以调用修改数据的方法,对外暴露的set
const actions={
  //保存用户的信息
  setUser:(context,user)=>{
    context.commit('mSetUser',user)
  }
}

//mutations 真正持久去修改数据的
const mutations={
  mSetUser:(state,user)=>{
    state.user = user;
  }
}


export default {
  state,getters,actions,mutations
}
