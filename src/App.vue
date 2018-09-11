<template>
  <div class="box">
    <nav>
      <ul>
        <!-- cur 样式要在点击的标题与路由中的标题匹配时展示 -->
        <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur : item.title==$router.name}">
          <!-- 做跳转 -->
          <!-- <router-link :to="item.url">{{item.title}}</router-link> -->
          {{item.title}}
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
        },{
          url:'/message/',
          title:"消息"
        },{
          url:'/menology/',
          title:"日历"
        },{
          url:'/network/',
          title:"云盘"
        },{
          url:'/address/',
          title:"通讯录"  
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
    width:2000px;
    height:100%;
    position: relative;
  }
  nav{
    position: absolute;
    left:0;
    top:0;
    width: 70px;
    background: #22d7bb;
  }
  nav ul li{
    width: 70px;
    height:70px;
    border-bottom:1px solid red;
  }
  .box_con{
    position: absolute;
    left:70px;
    top:0;
    width:1833px;
    height:985px;
  }
</style>