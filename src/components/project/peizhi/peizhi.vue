<template>
    <div>
        <div class="header">
            <span>配置中心</span>
            <ul>
               <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur : item.title==$route.name}">{{item.title}}</li>
            </ul>
        </div>
        <div class="body">
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
                url:'/project/peizhi/xiangmu/xiangmu',
                title:"项目",
                },{
                url:'/project/peizhi/renwu',
                title:"任务"
                },{
                url:'/project/peizhi/anquan',
                title:"安全"
                },{
                url:'/project/peizhi/gaoji',
                title:"高级"
                },{
                url:'/project/peizhi/quanju',
                title:"全局"
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
    .header{
        background: rgba(253,253,253,.97);
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        span{
            float: left;
        }
    }
    ul{
        overflow: hidden;
        float: right;
        width: 60%;
    }
    ul li{
        float: left;
        padding:0 20px;
        cursor: pointer;
        margin-right: 20px;
    }
    ul li.cur{
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
</style>
