<template>
    <div>
      <div class="col-xs-ball" v-for="ball in balls"  @click="handleBlueClick(ball)">
        <div class="ball-item ball-blue" :class="{'ball-blue-selected':ball.selected}">{{ball.number}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "blueball-picker",
        props:['randomBlue'],
        data(){
          return {
            balls:[],
            selectedBlueBall:null // 记录的上一次的球
          }
        },
        watch:{
          randomBlue(newVal,oldVal){
            // 将篮球的状态进行更新  "16"
            this.balls.forEach((item)=>{
              if(item.number === newVal){
                item.selected = true;
                this.selectedBlueBall = item;
              }else{
                item.selected = false;
              }
            });

            //告诉父组件数据变化了
            this.$emit('on-blueball-change',this.selectedBlueBall.number)
          }
        },
        methods:{
          handleBlueClick(ball){
            ball.selected = !ball.selected;

            //将上一次选中的球的状态取消
            if(this.selectedBlueBall){
              this.selectedBlueBall.selected = false;
            }

            //判断当前球的状态
            if(ball.selected){
              //记录当前选中的蓝球
              this.selectedBlueBall = ball;
              //告诉父组件蓝球选中发生了变化
              this.$emit('on-blueball-change',ball.number)
            }else{
              this.selectedBlueBall = null;
              //告诉父组件蓝球选中发生了变化
              this.$emit('on-blueball-change',null)
            }
          }
        },
        mounted(){
          for(let i=1;i<=16;i++){
            if(i<10){
              i = "0"+i;
            }
            this.balls.push({number:i.toString(),selected:false});
          }
        }
    }
</script>

<style scoped>

</style>
