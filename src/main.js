import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(Vuex)
Vue.use(VueRouter)// 安装路由
// 使用路由管理子组件
// 引入子组件
const Project = require('./components/project/project.vue')// 项目
const Message = require('./components/message/message.vue')//消息
// const Calendar = require('./components/calendar/calendar.vue')// 日历
const Network = require('./components/network/network.vue')// 云盘
const Address = require('./components/address/address.vue')// 联系人
// 路由配置
const r = [
  {
    path: '/project',
    component: Project.default,
    name: "项目"
  }, {
    path: '/message',
    component: Message.default,
    name: "消息",
    children: [
      //配置子路由
      {
        path: '/message/sky',
        component: require('./components/message/sky/sky.vue').default,
        name: '网盘助手'
      },
      {
        path: '/message/pro',
        component: require('./components/message/pro/pro.vue').default,
        name: '项目助手'
      },
      {
        path: '/message/ent',
        component: require('./components/message/ent/ent.vue').default,
        name: '企业公告'
      },
      {
        path: '/message/ter',
        component: require('./components/message/ter/ter.vue').default,
        name: '小特机器人'
      },
      {
        path: '/message/day',
        component: require('./components/message/day/day.vue').default,
        name: '日程助手'
      }
    ]
  }, {
    path: '/network',
    component: Network.default,
    name: "云盘"
  }, {
    path: '/address',
    component: Address.default,
    name: "通讯录"
  }, {
    // 如果随便输入地址,转到首页
    path: '*',
    redirect: '/project'
  }
]
// 路由初始化
const router = new VueRouter({
  routes: r
})
// 设置全局守卫
router.beforeEach((to, from, next) => {
  // console.log(from);
  // console.log(to);
  document.title = to.name;
  next();
})
// 配置vue
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    ADD(state, payload) {
      console.log(state, payload)
    }
  },
  actions: {
    async ADD({ commit }, payload) {
      var data = await fetch("../data/json.json").then(res => res.json());
      console.log(payload);
      commit("ADD", payload);
    }
  }
})
new Vue({
  el: '#app',
  store,
  router,
  // render: h => h(App)
  components: {
    App
  }
})