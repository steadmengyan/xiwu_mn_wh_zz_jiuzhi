<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
.ter {
  position: absolute;
}
.ter_nav {
  width: 1610px;
  height: 86px;
  display: block;
  margin: 0;
  padding: 0 15px;
  position: relative;
  background: rgba(253, 253, 253, 0.95);
}
.ter_wrap {
  position: absolute;
  width: 100%;
  height: 86px;
  top: 0px;
  left: 0px;
  padding: 0px 0px 0px 15px;
}
.ter_nav_main {
  height: 50px;
  width: 1595px;
  line-height: 50px;
}
.ter_main_fl {
  // width: 120px;
  height: 50px;
  float: left;
  line-height: 50px;
  font-size: 16px;
  color: #333;
}
.brand {
  width: 24px;
  height: 24px;
  margin: 0 6px 4px 0;
  float: left;
}
.brand img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: middle;
}
.ter_main_con {
  width: 1250px;
  height: 50px;
  float: left;
}
.ter_main_fr {
  width: 205px;
  height: 50px;
  float: left;
  line-height: 50px;
}
.btn {
  text-decoration: none;
}
.btn1 {
  margin: 0 10px;
  vertical-align: middle;
  color: #22d7bb;
}
.btn2 {
  display: inline-block;
  padding: 0 10px;
  vertical-align: middle;
  color: #ddd;
}
.btn2 i {
  font-size: 20px;
}
.reads {
  margin-bottom: 0;
  border-bottom: 0;
  padding: 0 20px;
  height: 39px;
}
.reads > li {
  position: relative;
  display: block;
  float: left;
  width: 102px;
  height: 35px;
  text-align: center;
  line-height: 35px;
}
.reads li a {
  text-decoration: none;
  padding: 5px 9px 9px;
  color: #333;
  font-size: 14px;
  border-radius: 0;
}
.reads li.cur {
  border-bottom: solid 2px #22d7bb;
}
.reads li.cur a {
  color: #22d7bb;
}
.center-content {
  height: 860px;
  position: absolute;
  top: 86px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(218, 218, 218);
}
</style>

<template>
  <div class="ter">
    <div class="ter_nav">
      <div class="ter_wrap">
        <div class="ter_nav_main">
          <div class="ter_main_fl">
            <div class="brand">
              <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png">
            </div>
            <span>小特机器人</span>
            <i class="iconfont icon-xiala"></i>
          </div>
          <div class="ter_main_con">没有东西</div>
          <div class="ter_main_fr">
            <a href="javascript:;" class="btn btn1">全部标为已读</a>
            <a href="javascript:;" class="btn btn2">
              <i class="iconfont icon-shezhi"></i>
            </a>
          </div>
        </div>
        <div >
          <ul class="reads" >
            <li v-for="(item,index) of readList" @click="routerGo(item.url)" :class="{cur : $route.name.indexOf(item.title) != -1}">
              <a href="javascript:;">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="center-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readList: [
        {
          url: "/message/ter/news",
          title: "信息"
        },
        {
          url: "/message/ter/file",
          title: "文件"
        },
        {
          url: "/message/ter/fixed",
          title: "固定消息"
        }
      ]
    };
  },
  methods: {
    routerGo(url) {
      // 路由跳转
      this.$router.push({ path: url });
      // console.log(this.$route)
    }
  }
};
</script>
