<template>
<div class="message">
    <div class="message_fl">
        <div class="header">
            <span class="title">
                信息
                <i>*</i>
            </span>
            <div class="dropdown more">
                <a href="javascript:;" class="btn"><i>*</i></a>
                <ul>
                    <li class="dropdown-menu">
                        <a href="javascript:;"class="ng-scope">创建群组</a>
                    </li>
                    <li class="dropdown-menu">
                        <a href="javascript:;"class="ng-scope">加入群组</a>
                    </li>
                    <li class="dropdown-menu">
                        <a href="javascript:;"class="ng-scope">发起私聊</a>
                    </li>
                    <li class="dropdown-menu">
                        <a href="javascript:;"class="ng-scope">添加成员</a>
                    </li>
                </ul>
            </div>
        </div>
        <ul>
            <li v-for="(item,index) of mesList" @click="routerGo(item.url)">{{item.title}}</li>
        </ul>
    </div>
    <div class="message_fr">
      <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      mesList: [
        {
          url: "/message/sky",
          title: "网盘助手"
        },
        {
          url: "/message/pro",
          title: "项目助手"
        },
        {
          url: "/message/ent",
          title: "企业公告"
        },
        {
          url: "/message/ter",
          title: "小特机器人"
        },
        {
          url: "/message/day",
          title: "日程助手"
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
<style lang="scss" scoped >
a {
  text-decoration: none;
}
.message {
  position: relative;
  width: calc(100%);
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-box-flex: 1;
  flex: 1 1 0;
  background: rgb(238, 238, 238);
  box-sizing: border-box;
}
.message_fl {
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  width: 240px;
  background: rgba(253, 253, 253, 0.95);
  border-right: 1px solid #ddd;
  transition: width 0.2s ease-in-out;
  box-sizing: border-box;
}
.message_fr {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  overflow-wrap: break-word;
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  -webkit-box-direction: normal;
  box-sizing: border-box;
}
.header {
  height: 50px;
  box-sizing: border-box;
}
.header .title {
  float: left;
  margin: 0 20px;
  color: #333;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
}
.header .more {
  float: right;
  margin: 0 20px;
  line-height: 50px;
}
.dropdown,
.dropup {
  position: relative;
}
.dropdown .btn {
  cursor: pointer;
  min-width: 0;
  color: #ddd;
  padding: 0;
  display: inline-block;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.469rem 26px;
  font-size: 0.875rem;
  line-height: 1.5;
  min-width: 106px;
  border-radius: 1.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
