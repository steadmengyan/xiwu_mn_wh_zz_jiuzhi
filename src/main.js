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
      },
      {
        path:'/project/xiazai',
        name:'下载任务',
        component:require('./components/project/xiazai/xiazai.vue').default,
      },
      {
        path:'/project/wode',
        name:'我的任务',
        component:require('./components/project/wode/wode.vue').default,
        children:[
          {
            path:'/project/wode/fuze/',
            name:'我负责的',
            component:require('./components/project/wode/fuze/fuze.vue').default,
            children:[
              {
                path:'/project/wode/fuze/huodong',
                name:'活动任务',
                component:require('./components/project/wode/fuze/huodong/huodong.vue').default,
              },
              {
                path:'/project/wode/fuze/wancheng',
                name:'完成任务',
                component:require('./components/project/wode/fuze/wancheng/wancheng.vue').default,
              },
            ]
          },
          {
            path:'/project/wode/canyu/',
            name:'我参与的',
            component:require('./components/project/wode/canyu/canyu.vue').default,
            children:[
              {
                path:'/project/wode/canyu/huodong',
                name:'活动任务',
                component:require('./components/project/wode/canyu/huodong/huodong.vue').default,
              },
              {
                path:'/project/wode/canyu/wancheng',
                name:'完成任务',
                component:require('./components/project/wode/canyu/wancheng/wancheng.vue').default,
              },
            ]
          },
          {
            path:'/project/wode/chuangjian/',
            name:'我创建的',
            component:require('./components/project/wode/chuangjian/chuangjian.vue').default,
            children:[
              {
                path:'/project/wode/chuangjian/huodong',
                name:'活动任务',
                component:require('./components/project/wode/chuangjian/huodong/huodong.vue').default,
              },
              {
                path:'/project/wode/chuangjian/wancheng',
                name:'完成任务',
                component:require('./components/project/wode/chuangjian/wancheng/wancheng.vue').default,
              },
            ]
          },
          {
            path:'/project/wode/fenpei/',
            name:'我分配的',
            component:require('./components/project/wode/fenpei/fenpei.vue').default,
            children:[
              {
                path:'/project/wode/fenpei/huodong',
                name:'活动任务',
                component:require('./components/project/wode/fenpei/huodong/huodong.vue').default,
              },
              {
                path:'/project/wode/fenpei/wancheng',
                name:'完成任务',
                component:require('./components/project/wode/fenpei/wancheng/wancheng.vue').default,
              },
            ]
          },
        ]
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
          path: 'qiye',
          component: require('./components/network/qiye/qiye.vue').default,
          name: '企业网盘',
          children:[
            {
              path: 'guanli',
              component: require('./components/network/qiye/guanli/guanli.vue').default,
              name: '缺陷管理'  
            },
            {
              path: 'gongxiang',
              component: require('./components/network/qiye/gongxiang/gongxiang.vue').default,
              name: '资源共享' 
            },
            {
              path: 'zhidu',
              component: require('./components/network/qiye/zhidu/zhidu.vue').default,
              name: '公司制度'  
           }
          ]
          
      },
      {
          path: 'geren',
          component: require('./components/network/geren/geren.vue').default,
          name: '个人网盘'
      },
      {
          path: 'yuwo',
          component: require('./components/network/yuwo/yuwo.vue').default,
          name: '与我共享'
      },
      {
          path: 'del',
          component: require('./components/network/del/del.vue').default,
          name: '回收站'
      }
     ]
  },{
    path:'/address',
    component:Address.default,
    name:"通讯录",
    children:[
      {
        path: '/address/a_jl',
        component: require('./components/address/a_jl/a_jl.vue').default,
        name: '独孤伽罗'
      },
      {
        path: '/address/b_hh',
        component: require('./components/address/b_hh/b_hh.vue').default,
        name: '哈哈'
      },
      {
        path: '/address/c_123',
        component: require('./components/address/c_123/c_123.vue').default,
        name: '123'
      },
      {
        path: '/address/z_ri',
        component: require('./components/address/z_ri/ri.vue').default,
        name: '日程助手'
      },
      ,
      {
        path: '/address/x_wp',
        component: require('./components/address/x_wp/wp.vue').default,
        name: '网盘助手'
      }
      ,
      {
        path: '/address/c_xm',
        component: require('./components/address/c_xm/xm.vue').default,
        name: '项目助手'
      }
      ,
      {
        path: '/address/v_xt',
        component: require('./components/address/v_xt/xt.vue').default,
        name: '小特机器人'
      }
    ]
  },{
    path:'/menology',
    component:Menology.default,
    name:"日历",
    children:[
      {
        path:'/menology/week',
        component:require('./components/menology/week/week.vue').default,
        name:"周",
      },{
        path:'/menology/day',
        component:require('./components/menology/day/day.vue').default,
        name:"日",
      }
    ]
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
    count:1,
    allthings:[],
    mythings:[],
    teamthings:[],
    peoplethings:[],
    actionthings:[]
  },
  mutations:{
    ADD(state,payload){
      console.log(state,payload)
    },
    XGETALL(state,payload){
      state.mythings = payload[0];
      state.teamthings = payload[1];
      state.peoplethings = payload[2];
      var arrlist = [];
      for(var i=0;i<payload[0].length;i++){
        arrlist.push(payload[0][i]);
      }
      for(var a=0;a<payload[1].length;a++){
        arrlist.push(payload[1][a]);
      }
      for(var b=0;b<payload[2].length;b++){
        arrlist.push(payload[2][b]);
      }
      state.allthings = arrlist;
      console.log(state.mythings,state.peoplethings,state.teamthings);
    },
    XGETMY(state,payload){
      state.mythings = payload;
      console.log(state.mythings);
    },
    XGETTEAM(state,payload){
      state.teamthings = payload;
      console.log(state.teamthings);
    },
    XGETPEOPLE(state,payload){
      state.peoplethings = payload;
      console.log(state.peoplethings);
    },
    XCHANGE(state,payload){
      state.actionthings=[];
      state.actionthings.push(payload);
    },
    XADDMY(state,payload){
      state.mythings.push(payload);
      console.log(state.mythings,payload);
    },
    GETALL(state, payload) {
      state.todos = payload;
    }
  },
  actions:{
    async GETALL(context, payload) {
      //请求数据
      var data = await fetch('/mYthings/').then(res => res.json());
      console.log(data);
      context.commit('GETALL', data);
    },
    async ADD({commit},payload){
      var data = await fetch("../data/json.json").then(res => res.json());
      console.log(payload);
      commit("ADD",payload);
    },
    async XGETMY({commit},payload){
      var data = await fetch("/mythings").then(res => res.json());
			commit("XGETMY",data)
    },
    async XGETTEAM({commit},payload){
      var data = await fetch("/teamthings").then(res => res.json());
			commit("XGETATEAM",data)
    },
    async XGETPEOPLE({commit},payload){
      var data = await fetch("/peoplethings").then(res => res.json());
			commit("XGETAPEOPLE",data)
    },
    async XGETALL({commit},payload){
      var data1 = await fetch("/mythings").then(res => res.json());
      var data2 = await fetch("/teamthings").then(res => res.json());
      var data3 = await fetch("/peoplethings").then(res => res.json());
      var arrlist = [data1,data2,data3];
			commit("XGETALL",arrlist);
    },
    async XCHANGE({commit},payload){
      var data = await fetch("/actionthings/",{
				"method" :"POST",
				"headers":{
					"Content-Type": "application/json"
				},
				body:JSON.stringify(payload)
			}).then(res => res.json()); 
			commit("XCHANGE",data);
    },
    async XADDMY({commit},payload){
      var data = await fetch("/mythings/",{
				"method" :"POST",
				"headers":{
					"Content-Type": "application/json"
				},
				body:JSON.stringify(payload)
			}).then(res => res.json()); 
			commit("XADDMY",data);
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