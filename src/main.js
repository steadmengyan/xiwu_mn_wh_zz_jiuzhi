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
const Network = require('./components/network/network.vue')// 云盘
const Address = require('./components/address/address.vue')// 联系人
const Menology = require('./components/menology/menology.vue')// 日历
// 路由配置
const r = [
  {
    path:'/project',
    component:Project.default,
    name:"项目",
    children:[
      {
        path:'/project/peizhi',
        name:'配置中心',
        component:require('./components/project/peizhi/peizhi.vue').default,
        children:[
          {
            path:'/project/peizhi/xiangmu',
            name:'项目',
            component:require('./components/project/peizhi/xiangmu/xiangmu.vue').default,
            children:[
              {
                path:'/project/peizhi/xiangmu/xiangmu',
                name:'项目模板',
                component:require('./components/project/peizhi/xiangmu/xiangmu/xiangmu.vue').default,
              },
              {
                path:'/project/peizhi/xiangmu/zujian',
                name:'组件管理',
                component:require('./components/project/peizhi/xiangmu/zujian/zujian.vue').default,
              },
              {
                path:'/project/peizhi/xiangmu/baobiao',
                name:'报表管理',
                component:require('./components/project/peizhi/xiangmu/baobiao/baobiao.vue').default,
              }
            ]
          },
          {
            path:'/project/peizhi/renwu',
            name:'任务',
            component:require('./components/project/peizhi/renwu/renwu.vue').default,
            children:[
              {
                path:'/project/peizhi/renwu/renwu',
                name:'任务类型',
                component:require('./components/project/peizhi/renwu/renwu/renwu.vue').default,
              },
              {
                path:'/project/peizhi/renwu/shuxing',
                name:'属性管理',
                component:require('./components/project/peizhi/renwu/shuxing/shuxing.vue').default,
              },
              {
                path:'/project/peizhi/renwu/zhuangtai',
                name:'状态管理',
                component:require('./components/project/peizhi/renwu/zhuangtai/zhuangtai.vue').default,
              },
              {
                path:'/project/peizhi/renwu/shuju',
                name:'数据管理',
                component:require('./components/project/peizhi/renwu/shuju/shuju.vue').default,
              },
              {
                path:'/project/peizhi/renwu/biaoqian',
                name:'标签管理',
                component:require('./components/project/peizhi/renwu/biaoqian/biaoqian.vue').default,
              },
              {
                path:'/project/peizhi/renwu/youxianji',
                name:'优先级管理',
                component:require('./components/project/peizhi/renwu/youxianji/youxianji.vue').default,
              }
            ]
          },
          {
            path:'/project/peizhi/anquan',
            name:'安全',
            component:require('./components/project/peizhi/anquan/anquan.vue').default,
            children:[
              {
                path:'/project/peizhi/anquan/juese',
                name:'角色管理',
                component:require('./components/project/peizhi/anquan/juese/juese.vue').default,
              },
              {
                path:'/project/peizhi/anquan/anquan',
                name:'安全管理',
                component:require('./components/project/peizhi/anquan/anquan/anquan.vue').default,
              },
              {
                path:'/project/peizhi/anquan/quanxian',
                name:'权限管理',
                component:require('./components/project/peizhi/anquan/quanxian/quanxian.vue').default,
              },
            ]
          },
          {
            path:'/project/peizhi/gaoji',
            name:'高级',
            component:require('./components/project/peizhi/gaoji/gaoji.vue').default,
            children:[
              {
                path:'/project/peizhi/gaoji/tixing',
                name:'提醒管理',
                component:require('./components/project/peizhi/gaoji/tixing/tixing.vue').default,
              },
              {
                path:'/project/peizhi/gaoji/tongzhi',
                name:'通知管理',
                component:require('./components/project/peizhi/gaoji/tongzhi/tongzhi.vue').default,
              },
              {
                path:'/project/peizhi/gaoji/shijian',
                name:'事件管理',
                component:require('./components/project/peizhi/gaoji/shijian/shijian.vue').default,
              },
            ]
          },
          {
            path:'/project/peizhi/quanju',
            name:'全局',
            component:require('./components/project/peizhi/quanju/quanju.vue').default,
            children:[
              {
                path:'/project/peizhi/quanju/gongzuo',
                name:'全局',
                component:require('./components/project/peizhi/quanju/gongzuo/gongzuo.vue').default,
              }
            ]
          }
        ]
      },
      {
        path:'/project/huishou',
        name:'回收站',
        component:require('./components/project/huishou/huishou.vue').default,
      }
    ]
  },{
    path:'/message',
    component:Message.default,
    name:"消息",
    children: [
      //配置二级子路由
      {
        path: '/message/sky',
        component: require('./components/message/sky/sky.vue').default,
        name: '网盘助手',
        children: [
          //配置三级子路由
          {
            path: '/message/sky/unread',
            component: require('./components/message/sky/unread/unread.vue').default,
            name: '未读',
          },
          {
            path: '/message/sky/read',
            component: require('./components/message/sky/read/read.vue').default,
            name: '已读',
          },
          {
            path: '/message/sky/todoread',
            component: require('./components/message/sky/todoread/todoread.vue').default,
            name: '待处理',
          }
        ]
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
        name: '小特机器人',
        children: [
          //配置三级子路由
          {
            path: '/message/ter/news',
            component: require('./components/message/ter/news/news.vue').default,
            name: '消息',
          },
          {
            path: '/message/ter/file',
            component: require('./components/message/ter/file/file.vue').default,
            name: '文件',
          },
          {
            path: '/message/ter/fixed',
            component: require('./components/message/ter/fixed/fixed.vue').default,
            name: '固定消息',
          }
        ]
      },
      {
        path: '/message/day',
        component: require('./components/message/day/day.vue').default,
        name: '日程助手'
      }
    ]
  },{
    path:'/network',
    component:Network.default,
    name:"云盘",
          children:[
            {
                path: '/network/qiye',
                component: require('./components/network/qiye/qiye.vue').default,
                name: '企业网盘'
            },
            {
                path: '/network/geren',
                component: require('./components/network/geren/geren.vue').default,
                name: '个人网盘'
            },
            {
                path: '/network/yuwo',
                component: require('./components/network/yuwo/yuwo.vue').default,
                name: '与我共享'
            },
            {
                path: '/network/del',
                component: require('./components/network/del/del.vue').default,
                name: '回收站'
            }
          ]
  },{
    path:'/address',
    component:Address.default,
    name:"通讯录"
  },{
    path:'/menology',
    component:Menology.default,
    name:"日历"
  },{
    // 如果随便输入地址,转到首页
    path:'*',
    redirect:'/project'
  }
]
// 路由初始化
const router = new VueRouter({
  routes:r
})
// 设置全局守卫
router.beforeEach((to,from,next) => {
  // console.log(from);
  // console.log(to);
  document.title = to.name;
  next();
})
// 配置vue
const store = new Vuex.Store({
  state:{
    count:1
  },
  mutations:{
    ADD(state,payload){
      console.log(state,payload)
    }
  },
  actions:{
    async ADD({commit},payload){
      var data = await fetch("../data/json.json").then(res => res.json());
      console.log(payload);
      commit("ADD",payload);
    } 
  }
})
new Vue({
  el: '#app',
  store,
  router,
  // render: h => h(App)
  components:{
    App
  }
})