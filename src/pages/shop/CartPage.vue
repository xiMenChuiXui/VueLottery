<template>
    <div>
        <!--标题-->
        <title-bar :title="title" :needback="needback"></title-bar>
        <!--轮播图-->
        <carousel></carousel>
        <!--本期的信息-->
        <lottery-info></lottery-info>
        <!--三个按钮组-->
        <!--清除浮动的div-->
        <div class="clearfix"></div>

        <!--按钮组-->
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-xs-4">
            <button type="button" class="btn btn-default" @click="handleClick">+手动选号</button>
          </div>
          <div class="col-xs-4">
            <button type="button" class="btn btn-default" @click="handleRandom">+机选一注</button>
          </div>
          <div class="col-xs-4">
            <button type="button" class="btn btn-default" @click="handleClear">清空列表</button>
          </div>
        </div>

        <!--所有购物项-->
        <cart-item v-for="cartItem in getCarts" :key="cartItem.red +'-'+cartItem.blue" :item="cartItem" ></cart-item>

      <!--主要是解决页面显示不完整-->
      <div style="margin-bottom: 58px;"></div>

      <!--5.底部菜单栏-->
      <div class="menu">
        <div class="col-xs-12 menu-item" style="height: 50px;line-height: 50px;">
          <p>立即付款 {{totalMoney}}元</p>
        </div>
      </div>


    </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar';
  import Carousel from '@/pages/common/Carousel';
  import LotteryInfo from './components/LotteryInfo'
  import CartItem from './components/CartItem'

  //导入辅助函数
  import {mapGetters,mapActions} from 'vuex'
  //导入ballUtils
  import BallUtils from '@/utils/BallUtils.js'


    export default {
        name: "cart-page",
        components:{
          TitleBar,
          Carousel,
          LotteryInfo,
          CartItem
        },
        data(){
          return {
            title:'购物车',
            needback:true
          }
        },
        computed:{
          ...mapGetters(['getCarts','totalMoney'])
        },
        methods:{
          ...mapActions(['addToCart','clearCarts']),
          handleClick(){
            //跳转去前一个页面
            this.$router.go(-1);
          },
          handleRandom(){
            //随机产生一注彩票  {redBalls:this.redBalls,blueBall:this.blueBall,count:1};
            let redBalls = BallUtils.randomRed();
            let blueBall = BallUtils.randomBlue();

            let data = {redBalls:redBalls,blueBall:blueBall,count:1};
            //调用action中的addToCart
            this.addToCart(data);
          },
          handleClear(){
            this.clearCarts();
          }
        }
    }
</script>

<style scoped>

</style>
