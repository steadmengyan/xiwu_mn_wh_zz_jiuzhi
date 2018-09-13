<style lang="scss" scoped >
div {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.iconfont {
  font-size: 20px;
}
.message {
  position: relative;
  background: rgb(238, 238, 238);
}
.message_fl {
  position: relative;
  float: left;
  width: 240px;
  height: 950px;
  background: rgba(253, 253, 253, 0.95);
  border-right: 1px solid #ddd;
}
.message_fr {
  position: relative;
  float: left;
}
.header {
  height: 50px;
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
  position: relative;
  text-align: right;
}
.header .more .btn {
  cursor: pointer;
  color: #ddd;
  min-width: 0;
}
.header .more .btn i {
  display: inline-block;
  line-height: 1;
  margin: 0;
}
.btn_menu {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.18);
  border: 0;
  border-radius: 0;
  padding: 5px 0;
  margin-top: -2px;
  min-width: 240px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
}
.btn_menu li {
  font-size: 14px;
  padding: 0;
  margin: 0;
  display: block;
  -webkit-transition: background 0.2s;
  transition: background 0.2s;
}
.btn_menu li a {
  box-sizing: border-box;
  padding: 10px 18px;
  font-weight: 400;
  color: #666;
  display: block;
  line-height: 1.42857143;
  white-space: nowrap;
}
.btn_menu li:hover a {
  background-color: rgb(234, 234, 234);
  transition: ease 0.5s 0s;
}
.search_area {
  padding: 0 20px 10px;
  position: relative;
}
.search_icon {
  position: absolute;
  top: 12px;
  left: 30px;
  color: #8f8f8f;
  font-size: 16px;
}
.search_inp {
  background: #f3f3f3;
  color: #666;
  height: 36px;
  font-size: 14px;
  padding-left: 28px;
  border-radius: 20px;
  border: 1px solid transparent;
  outline: none;
}
// .search_inp:hover {
//   background: #fff;
//   border: 1px solid gray;
// }
.chat_list {
  width: 240px;
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0;
}
.chat_list > li {
  position: relative;
  width: 236px;
  height: 46px;
}
.chat_list > li > a {
  display: block;
  border-radius: 0;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding: 11px 0 11px 30px;
  line-height: 23px;
  border-right: 4px solid transparent;
}
.chat_list > li > a > img {
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border-radius: 24px;
  vertical-align: middle;
}
.cur {
  background: #e7f9f6;
  color: #22d7bb;
  border-right: 4px solid #22d7bb;
}
li.active {
  background: #e7f9f6;
  color: #22d7bb;
  border-right: 4px solid #22d7bb;
}

.cuo {
  display: block;
  font-size: 12px;
  position: absolute;
  top: 12px;
  right: 10px;
  color: #aaa;
}
.lc {
  background: #fdfdfd;
  border: 1px solid #22d7bb;
}
.chat_list li:hover {
  box-shadow: 0 0 8px 2px #eee;
  background: 0 0;
  text-decoration: none;
}
</style>

<template>
<div class="message">
    <div class="message_fl">
        <div class="header">
            <div class="title">
                信息
                <i class="iconfont icon-xiaoxi"></i>
            </div>
            <div class="more" @click="showToggle">
                <a href="javascript:;" class="btn">
                  <i class="iconfont icon-shouye"></i>
                </a>
                <ul class="btn_menu" v-show="isShow">
                    <li>
                        <a href="javascript:;">
                          创建群组
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                          加入群组
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                          发起私聊
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                          添加成员
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="body-list">
          <div class="search_area">
            <i class="search_icon iconfont icon-search"></i>
            <input type="text" class="search_inp" placeholder="搜索成员、消息" @focus="inphuo()" @blur="inpshi()" :class="{lc : lc}">
          </div>
          <ul class="chat_list">
            <li v-for="(item,index) of mesList" @click="routerGo(item.url)" :class="{active : $route.name.indexOf(item.title) != -1}"
>
              <a href="javascript:;">
                <img :src="item.icon">
                <span>{{item.title}}</span>
                <span class="cuo">×</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
    <div class="message_fr">
      <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      mesList: [
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_24x24.png",
          url: "/message/sky",
          title: "网盘助手"
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
          url: "/message/pro",
          title: "项目助手"
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
          url: "/message/ent",
          title: "企业公告"
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png",
          url: "/message/ter",
          title: "小特机器人"
        },
        {
          icon:
            "https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png",
          url: "/message/day",
          title: "日程助手"
        }
      ],
      isShow: false,
      lc: false
    };
  },
  methods: {
    routerGo(url) {
      // 路由跳转
      this.$router.push({ path: url });
      // console.log(this.$route)
    },
    showToggle() {
      this.isShow = !this.isShow;
    },
    inphuo() {
      this.lc = !this.lc;
    },
    inpshi() {
      this.lc = !this.lc;
    }
  }
};
</script>

