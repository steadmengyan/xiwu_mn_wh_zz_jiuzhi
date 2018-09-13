import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import "babel-polyfill"

// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vuex)
Vue.use(VueRouter)// 安装路由
Vue.use(ElementUI)
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
    name:"项目"
  },{
    path:'/message',
    component:Message.default,
    name:"消息"
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
    path:'/network',
    component:Network.default,
    name:"云盘"
  },{
    path:'/address',
    component:Address.default,
    name:"通讯录"
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
    }
  },
  actions:{
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
  },
  getters:{
    my : function(state){
			console.log("我执行了",state.mythings);
    },
    team : function(state){
			console.log("我执行了",state.mythings);
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