<template>
    <div class="body">
        <div class="left">
            <div class="header">
                <span>项目</span>
            </div>
            <div class="body-list">
                <div class="search">
                    <input type="text" placeholder="搜索任务">
                </div>
                <ul>
                    <li  v-for="item of tabNav" :class="{cur : item.title==$route.name}" @click="routerGo(item.url)">{{item.title}}</li>
                </ul>
            </div>
        </div>
        <div class="right">
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
                url:'/project/peizhi',
                title:"配置中心"
                },{
                url:'/project/huishou',
                title:"回收站"
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
.body{
    width: 100%;
    height: 100%;
}
.left{
    float: left;
    position: relative;
    width: 240px;
    background: rgba(253,253,253,.95);
    border-right: 1px solid #ddd;
    height: 100%;
    .header{
        width: 100%;
        span{
            float: left;
            margin: 0 20px;
            color: #333;
            line-height: 50px;
            font-size: 16px;
        }
    }
    .body-list{
        .search{
            padding: 0 20px 10px;
            input{
                background: #f3f3f3;
                box-shadow: none;
                color: #666;
                height: 36px;
                font-size: 14px;
                padding-left: 28px;
                border-radius: 20px;
                border: 1px solid transparent;
                outline: none;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

            }
            input:hover{
                background: #fdfdfd;
                border: 1px solid #ddd;
            }
        }
        ul li{
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 2px;
            padding: 8px 20px;
            position: relative;
            cursor: pointer;
            font-size: 14px;
        }
        ul li:hover{
            box-shadow: 5px 0 8px 2px #eee;
        }
        ul li.cur{
            background: #e7f9f6;
            border-right: 4px solid #22d7bb;
        }
    }
}
.right{
    float: left;
    width: calc(100% - 241px);
    height: 100%;
    background-color:rgb(238, 238, 238);
}
</style>
