<template>
    <div>
        <ul>
            <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur : item.title==$route.name}">{{item.title}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
   data () {
        return {
            tabNav:[
                {
                url:'/project/peizhi/anquan/juese',
                title:"角色管理",
                },{
                url:'/project/peizhi/anquan/anquan',
                title:"安全管理"
                },{
                url:'/project/peizhi/anquan/quanxian',
                title:"权限管理"
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
