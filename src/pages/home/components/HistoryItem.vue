<template>
  <!--4.彩票历史记录-->
  <div class="row item" >
    <!--左边11个格子-->
    <div class="col-xs-11">
      <!--开奖日期-->
      <div class="row">
        <span style="font-size: 18px;">第{{history.code}}期</span>
        <span style="margin-left: 10px;">{{history.date}}</span>
      </div>
      <!--开奖号码-->
      <div class="row" style="margin-top: 10px;">
        <div class="ball-item ball-red" v-for="red in history.red.split(',')">{{red}}</div>

        <div class="ball-item ball-blue">{{history.blue}}</div>
      </div>
    </div>
    <!--右边1个格子-->
    <div class="col-xs-1 div-right">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </div>
  </div>
</template>
<!--
  {
      "code": "2018012",
      "name": "双色球",
      "date": "2018-01-28(日)",
      "week": "日",
      "red": "11,12,13,19,26,28",
      "blue": "12",
      "sales": "367108128",
      "poolmoney": "406003688",
      "content": "山西1注,上海1注,江苏2注,湖北1注,广西1注,西藏1注,深圳1注,共8注。"
   }
-->
<script>
    export default {
        name: "history-item",
        props:['history']
    }
</script>

<style scoped>
  .item{
    border: 1px solid gainsboro;
    height: 80px;
    padding-top: 5px;
    padding-left:15px;
  }

  .div-right{
    padding-left: 0px;
    padding-top: 30px;
  }
</style>
