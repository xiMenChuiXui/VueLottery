//从浏览器内置的存储去获取数据
let jsonStr = localStorage.getItem("carts");
//将json字符串转成json数组
let defaultCarts = JSON.parse(jsonStr);
if(defaultCarts == null){
  defaultCarts = [];
}
//定义保存数据的地方
const state={
  carts:defaultCarts // {red:'01,02,03,04,05,06',blue:"16",count:1}
}
//对外提供访问数据的方法
const getters={
  cartSize:(state)=>state.carts.length,
  getCarts:(state)=>state.carts,
  totalMoney:(state)=>{

    let totalCount = 0;
    state.carts.forEach((item)=>{
      totalCount+=item.count;
    });
    return totalCount*2;

  }
}

//对外提供获取数据的方法
const actions={
  // {red:'01,02,03,04,05,06',blue:"16",count:1}
  // 传递过来的数据是 {redBalls:this.redBalls,blueBall:this.blueBall,count:1};
  addToCart(context,data){
    console.log("actions中addToCart被调用");
    console.log("action提交数据给mutations去修改")
    let redBalls = data.redBalls;

    let red = "";
    redBalls.forEach((item)=>{
      red +=","+item;
    });
    red = red.substr(1);

    //console.log(red);

    let cartItem = {red:red,blue:data.blueBall,count:data.count};

    context.commit('mAddToCart',cartItem);
  },
  //清空购物车
  clearCarts(context){
    context.commit('mClearCarts');
  },

  //删除某一条记录
  deleteItem(context,cartItem){
    //action调用mutations去真的删除
    context.commit('mDeleteItem',cartItem);
  }

}
//跟踪数据变化的,vue需要的, 真正修改数据
const mutations = {
  mAddToCart(state,cartItem){

    console.log("mutations中修改数据:"+cartItem);
    state.carts.push(cartItem);

    //将内存中的数据保存到浏览器本地
    localStorage.setItem("carts",JSON.stringify(state.carts))
  },

  //真正清空数组的地方
  mClearCarts(state){
    state.carts=[];

    localStorage.clear();
  },
  mDeleteItem(state,cartItem){
    let index = state.carts.indexOf(cartItem);

    //删除记录
    state.carts.splice(index,1);

    localStorage.setItem("carts",JSON.stringify(state.carts))
  }
}

//导出文件的所有内容
export default {
  state,getters,actions,mutations
}
