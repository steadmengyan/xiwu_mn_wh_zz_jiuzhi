<template>
    <div>
        <ul>
            <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur : item.title==$route.name}">{{item.title}}</li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
   data () {
        return {
            tabNav:[
                {
                url:'/project/peizhi/renwu/renwu',
                title:"任务类型",
                },{
                url:'/project/peizhi/renwu/zhuangtai',
                title:"状态管理"
                },{
                url:'/project/peizhi/renwu/shuxing',
                title:"属性管理"
                },
                {
                url:'/project/peizhi/renwu/shuju',
                title:"数据管理"
                },
                {
                url:'/project/peizhi/renwu/biaoqian',
                title:"标签管理"
                },
                {
                url:'/project/peizhi/renwu/youxianji',
                title:"优先级管理"
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
<style lang="scss" scoped >
   ul{
        overflow: hidden;
        padding-left: 41px;
        height: 38px;
        line-height: 38px;
        background-color: #fff; 
        width: 100%;
       li{
           float: left;
           margin-right: 40px;
           font-size: 14px;
           color: #888;
           cursor: pointer;
       }
   }
   .cur{
       color: #22d7bb;
   }
</style>
