<template>
    <!--5.底部菜单栏-->
    <div class="div-height">
      <div class="menu" >
        <div class="col-xs-4 menu-item" :class="{'menu-item-activied':index=='1'}" @click="handleClick('1')">
          <span class="glyphicon glyphicon-home"></span>
          <p>首页</p>
        </div>
        <div class="col-xs-4 menu-item"  @click="handleClick('2')">
          <span class="glyphicon glyphicon-shopping-cart"></span>
          <p>选号</p>
        </div>
        <div class="col-xs-4 menu-item" :class="{'menu-item-activied':index=='3'}"  @click="handleClick('3')">
          <span class="glyphicon glyphicon-user"></span>
          <p>我</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "menu-bar",
        props:{
          index:{
            type:String,
            default:"1"
          }
        },
        methods:{
          handleClick(index){
            console.log(index)
            switch (index){
              case '1':
                //跳转去首页
                this.$router.push('/')
                break;
              case '2':
                this.$router.push('/select')
                //跳转去选号页面
                break;
              case '3':
                this.$router.push('/user')
                //跳转去用户页面
                break;
            }
          }
        }
    }
</script>

<style scoped>
   .div-height{
     height: 50px;
   }
</style>
