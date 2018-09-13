<template>
    <div class="body">
        <div class="left">
            <div class="header">
                <span>项目</span>
            </div>
            <div class="body-list">
                <div class="search">
                    <i class="iconfont icon-sousuo1"></i>
                    <input type="text" placeholder="搜索任务">
                </div>
                <ul>
                    <li class="li_1" @click="zhuan" >
                        <i class="iconfont icon-xiangyou" :class="{zhuans:gongzuo==true}"></i>
                        工作
                    </li>
                    <li class="li_1" :class="{cur :$route.path.indexOf(xzUrl) != -1}" v-show="gongzuo" @click="xiazai(xzUrl)"><i class="iconfont icon-yonghu-tianchong"></i> 下载任务</li>
                    <li class="li_1" :class="{cur :$route.path.indexOf(wdUrl) != -1}" v-show="gongzuo" @click="wode(wdUrl)"><i class="iconfont icon-yonghu-tianchong"></i> 我的任务</li>
                    <li class="li_1" @click="zhuan1">
                        <i class="iconfont icon-xiangyou" :class="{zhuans:xiangmu==true}"></i>
                        项目
                    </li>
                    <li  v-for="item of tabNav" :class="{cur :$route.path.indexOf(item.url) != -1}" @click="routerGo(item.url)"><i :class="item.leiming"></i> {{item.title}}</li>
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
                url:'/project/peizhi/xiangmu/xiangmu',
                title:"配置中心",
                leiming:'iconfont icon-shezhi'
                },{
                url:'/project/huishou',
                title:"回收站",
                leiming:'iconfont icon-delete'
                }
            ],
            gongzuo:false,
            xzUrl:'/project/xiazai',
            wdUrl:'/project/wode/fuze/huodong',
            xiangmu:false,
        }
    },
    methods:{
        routerGo(url){
            // 路由跳转
            this.$router.push({path:url});
            // console.log(this.$route)
        },
        zhuan(){
           this.gongzuo=!this.gongzuo;
        },
        zhuan1(){
           this.xiangmu=!this.xiangmu;
        },
        wode(url){
            this.$router.push({path:url});
        },
        xiazai(url){
            this.$router.push({path:url});
        }
    }
}
</script>
<style lang="scss" scoped >
.body{
    width: 100%;
    height: 100%;
}
.icon-sousuo1,.icon-xiangyou{
    color: #aaa;
    font-size: 14px;
}
.icon-xiangyou{
     font-size: 10px;
    position: absolute;
    top: 11px;
    left: 20px;
    
}
.icon-yonghu-tianchong{
    font-size: 15px;
    color: #22d7bb;
}
.zhuans{
    transform: rotate(45deg);
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
            position: relative;
            padding: 0 20px 10px;
            i{
                position: absolute;
                top: 62px;
                left: 30px;
            }
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
            input:focus{
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
        ul li.li_1{
            padding-left: 36px;
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
