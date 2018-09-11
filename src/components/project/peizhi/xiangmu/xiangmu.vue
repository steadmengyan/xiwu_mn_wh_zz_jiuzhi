<template>
    <div>
        <ul>
            <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur : item.title==$route.name}">{{item.title}}</li>
        </ul>
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
                title:"项目模板",
                },{
                url:'/project/peizhi/xiangmu/zujian',
                title:"组件管理"
                },{
                url:'/project/peizhi/xiangmu/baobiao',
                title:"报表"
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
   .body{
       padding: 15px;
       width: 100%;
       height: 100%;
       box-sizing: border-box;
       
   }
   .cur{
       color: #22d7bb;
   }
</style>
