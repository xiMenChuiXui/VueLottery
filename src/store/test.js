const state= {
  //定义数据
  username:'张三',
    all:['aa','bb','cc']
}
const getters={
  allLength:state=>state.all.length,
    username:state=>state.username
}
const actions={
  //一些操作数据的方法
  changeAction:(context,newName)=>{
    context.commit('changeMutation',newName)
  }
}
const mutations= {
  //真正去修改数据的地方
  changeMutation (state,newName) {
    console.log(newName);
    state.username = newName
  }
}

export default {
  state,getters,actions,mutations
}
