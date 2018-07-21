<template>
    <!--放置这个组件的模版-->
    <div>
      <!--title bar-->
      <title-bar :title="title" :needback="needback"></title-bar>
      <!--本期的奖池信息-->
      <lottery-info></lottery-info>

      <div style="color:darkgray">请选择6个红球,1个蓝球</div>

      <!--拆出红球组件-->
      <redball-picker :randomRedBalls="randomRedBalls" @on-redballs-change="handleRedballsChange"></redball-picker>

      <!--清除浮动-->
      <div class="clearfix"></div>

      <!--蓝球组件-->
      <blueball-picker :randomBlue="randomBlue" @on-blueball-change="handleBlueballChange"></blueball-picker>

      <!--按钮-->
      <!--清除浮动-->
      <div class="clearfix"></div>

      <!--添加的按钮-->
      <div style="margin-top: 10px;">
        <input type="button" @click="handleAdd" value="添加" class="btn btn-default pull-right" />
      </div>

      <!--清除浮动-->
      <div class="clearfix"></div>

      <!--机选幸运号的按钮-->
      <div style="margin-top: 10px;">
        <input type="button" @click="handleRandom" value="机选幸运号" id="btn_random"  class="btn btn-default pull-right" />
        <select v-model="num" class="form-control pull-right" style="width: 60px;display: inline-block;">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <!--主要是解决页面显示不完整-->
      <div style="margin-bottom: 58px;height: 58px;"></div>

      <!--5.底部菜单栏-->
      <div class="menu">
        <div class="col-xs-6 menu-item" @click="goToCart">
          <span class="glyphicon glyphicon-shopping-cart"></span>
          <span class="badge">{{cartSize}}</span>
          <p>购物车</p>
        </div>
        <div class="col-xs-6 menu-item">
          <span class="glyphicon glyphicon-save"></span>
          <p>立即投注</p>
        </div>

      </div>

    </div>
</template>

<script>
    import TitleBar from '@/pages/common/TitleBar'
    import RedballPicker from './components/RedballPicker'
    import BlueballPicker from './components/BlueballPicker'
    import LotteryInfo from './components/LotteryInfo'
    //导入vuex提供的辅助函数
    import {mapActions,mapGetters} from 'vuex'
    import BallUtils from '@/utils/BallUtils'

  //选号组件 , js逻辑
    export default {
        name: "select-page",
        components:{
          TitleBar,
          RedballPicker,
          BlueballPicker,
          LotteryInfo
        },
        data(){
          return {
            title:'选号',
            needback:true,
            redBalls:null,
            blueBall:null,
            randomRedBalls:null,
            randomBlue:null,
            num:1 // 机选几注,默认1注
          }
        },
        methods:{
          ...mapActions(['addToCart']),
          handleRedballsChange(redballs){
            this.redBalls = redballs;
            //console.log(this.redBalls);
          },
          handleBlueballChange(blueball){
            this.blueBall = blueball;
            console.log(blueball)
          },
          handleAdd(){
            console.log(this.redBalls + ' '+ this.blueBall);
            let item = {redBalls:this.redBalls,blueBall:this.blueBall,count:1};
            this.addToCart(item);
          },
          goToCart(){
            this.$router.push('/cart')
          },
          handleRandom(){
            console.log("机选:"+this.num)
            //获取下拉框中的值,机选几注
            for(let i=0;i<this.num;i++){
              //机选幸运号
              this.randomRedBalls = BallUtils.randomRed();
              this.randomBlue = BallUtils.randomBlue();
              //将机选的信息添加到购物车中
              let item = {redBalls:this.randomRedBalls,blueBall:this.randomBlue,count:1};
              this.addToCart(item);
            }
          }
        },
        computed:{
          ...mapGetters(['cartSize'])
        }
    }
</script>

<style scoped>
  /*组件的样式*/
  .badge{
    background-color: red;
    position: absolute;
    top: -10px;
  }
</style>
