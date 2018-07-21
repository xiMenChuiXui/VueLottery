<template>
    <div>
      <!--标题栏-->
      <title-bar :title="title"  ></title-bar>

      <!--轮播图-->
      <carousel></carousel>

      <!--历史记录-->
      <history-list :data="historyList"></history-list>

      <!--底部菜单栏显示-->
      <menu-bar index="1"></menu-bar>
    </div>
</template>

<script>
    import TitleBar from '@/pages/common/TitleBar';
    import Carousel from '@/pages/common/Carousel';
    import HistoryList from '@/pages/home/components/HistoryList';
    import MenuBar from '@/pages/common/MenuBar'
    import axios from 'axios'

    export default {
        name: "home-page",
        components:{
          TitleBar,
          Carousel,
          HistoryList,
          MenuBar
        },
        data(){
          return {
            title:'博彩首页',
            historyList:[]
          }
        },
        mounted(){
          //发起请求,当数据请求回来的时候,我要将数据渲染到页面上 axios
          // http://localhost:80/api/index
          // http://localhost:3000/api/index
          axios.get('/api/index').then(resp=>{
            this.historyList = resp.data.data
          });
        }
    }
</script>

<style scoped>

</style>
