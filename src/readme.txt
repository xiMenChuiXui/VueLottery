首页功能:
  抽取TitleBar组件 :  标题, 可能需要返回按钮
  抽取Carousel组件 :  轮播图
  抽取MenuBar组件  : 底部菜单栏

  获取数据: axios.get(url).then(resp=>{})

  HistoryList
    HistoryItem
博彩详情:
  props:{
    needback:{
      type:Boolean
      default: true
    }
  }

路由:
$router : 全局路由器 , push 方法进行跳转
$route  : 当前组件的路由 , 包含基本信息
<router-link to=  tag=>

