<template>
  <div class="box">
    <nav>
      <ul>
        <!-- cur 样式要在点击的标题与路由中的标题匹配时展示 -->
        <li class="nav_top"><p class="iconfont icon-guanli"></p></li>
        <li @click="routerGo(item.url)" v-for="item of tabNav"  :class="item.haveclass">
          <!-- 做跳转 -->
          <transition name="trans">
            <p>
              <span :class="item.classname"></span><br>
              <span class="font">{{item.title}}</span>
            </p>
          </transition>
        </li>
        <li class="peoplename">
          <span>m</span>
        </li>
      </ul>
    </nav>
    <!-- 用于展示路由连接的组件 -->
    <div class="box_con">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      tabNav:[
        {
          url:'/project/',
          title:"项目",
          classname:"iconfont icon-xiangmu",
          haveclass:""
        },{
          url:'/message/',
          title:"消息",
          classname:"iconfont icon-xiaoxi",
          haveclass:""
        },{
          url:'/menology/',
          title:"日历",
          classname:"iconfont icon-rili1",
          haveclass:""
        },{
          url:'/network/',
          title:"云盘",
          classname:"iconfont icon-wangpan",
          haveclass:""
        },{
          url:'/address/',
          title:"通讯录",
          classname:"iconfont icon-tongxunlu",
          haveclass:"downxm"
        }
      ]
    }
  },
  methods:{
    routerGo(url){
      // 路由跳转
      this.$router.push({path:url});
      // console.log(this.$route)
    }
  }
}
</script>
<style lang="scss" scoped>
  .box{
    width: 1903px;
    height:985px;
    position: relative;
    background-color: #22D7BB;
  }
  .nav_top{
    width: 100%;
    height: 100px;
    p{
      display:inline-block;
      height: 40px;
      font-size:30px;
    }
  }
  nav{
    position: absolute;
    left:0;
    top:0;
    width: 70px;
    height:100%;
    background: #22d7bb;
  }
  nav ul li{
    width: 70px;
    height:70px;
    position: relative;
    color:#fff;
    p{
      width: 50px;
      height: 25px;
      font-size:14px;
      position: absolute;
      left:13%;
      top:20px;
      text-align:center;
      .font{
        width:100%;
      }
    }
  }
  li:hover{
    background-color: #18BFA4;
    p{
      top: 15px;
    }
  }
  .downxm{
    position: absolute;
    bottom:80px;
  }
  .box_con{
    position: absolute;
    left:70px;
    top:0;
    width:1833px;
    height:985px;
  }
  .peoplename{
    position: absolute;
    bottom:0px;
    width: 100%;
    height:80px;
    line-height:80px;
    text-align:center;
    span{
      display:inline-block;
      width: 48px;
      height: 48px;
      border-radius:50%;
      background: #EF7EDE;
      color:#fff;
      line-height:48px;
      text-align:center;
    }
  }
  .trans-enter-active,.trans-leave-active{
      transition: all 1s ease-out;
  }
  .trans-enter{
      top:30px;
  }
  .trans-leave-active{
      top:40px;
  }
</style>