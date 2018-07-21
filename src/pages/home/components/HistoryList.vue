<template>
    <div>
   <!--   &lt;!&ndash;声明式的跳转&ndash;&gt;
      <router-link tag="div" to="/detail?code=123">点击跳转</router-link>
      &lt;!&ndash;编程方式进行跳转&ndash;&gt;
      <button @click="goToDetail('/detail?code=456')">编程方式跳转</button>-->


      <history-item
        v-for="history in data"
        :key="history.code"
        :history="history"
        @click.native="goToDetail('/detail?code='+history.code)" >
      </history-item>


    </div>
</template>

<script>
    import HistoryItem from './HistoryItem'

    //[{},{}]

    export default {
        name: "history-list",
        props:['data'],
        components:{
          HistoryItem
        },
        methods:{
          goToDetail(path){
            // /detail?code=123
            this.$router.push(path);

            // this.$router : 代表的全局的路由器
            // this.$route : 代表的是当前的路由信息
          }
        }
    }
</script>

<style scoped>

</style>
