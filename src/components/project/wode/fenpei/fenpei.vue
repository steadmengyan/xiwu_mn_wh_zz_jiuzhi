<template>
    <div>
        <ul>
            <li  v-for="item of tabNav" :class="{cur :$route.path.indexOf(item.url) != -1}" @click="routerGo(item.url)"><i :class="item.leiming"></i> {{item.title}}</li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                tabNav:[
                    {
                    url:'/project/wode/fenpei/huodong',
                    title:"活动任务",
                    },{
                    url:'/project/wode/fenpei/wancheng',
                    title:"完成任务",
                    }
                ],
            }
        },
        methods:{
            routerGo(url){
                // 路由跳转
                this.$router.push({path:url});
                // console.log(this.$route)
            },
        }
    }
</script>
<style lang="scss" scoped >
    ul{
        height: 38px;
        line-height: 38px;
        background-color: #fff;
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        padding-left: 41px;
        li{
            float: left;
            font-size: 14px;
            margin-right: 40px;
            color: rgb(136, 136, 136);
        }
    }
    .cur{
        color: rgb(34, 215, 187);
    }
</style>