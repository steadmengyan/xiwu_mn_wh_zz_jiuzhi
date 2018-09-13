<template>
    <div>
        <div class="header">
            <span><i class="iconfont icon-yonghu-tianchong"></i> 我的任务</span>
            <ul>
               <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur :$route.path.indexOf(item.url) != -1}">{{item.title}}</li>
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
                url:'/project/wode/fuze/huodong',
                title:"我负责的",
                },{
                url:'/project/wode/fenpei/huodong',
                title:"我分配的"
                },{
                url:'/project/wode/canyu/huodong',
                title:"我参与的"
                },{
                url:'/project/wode/chuangjian/huodong',
                title:"我创建的"
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
    .icon-yonghu-tianchong{
        color: #22d7bb;
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
        font-size: 14px;
    }
    ul li.cur{
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
</style>
