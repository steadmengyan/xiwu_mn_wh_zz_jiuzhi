<template>
    <div>
        <ul>
            <li  v-for="item of tabNav" :class="{cur : item.title==$route.name}">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
   data () {
        return {
            tabNav:[
                {
                url:'/project/peizhi/xiangmu/xiangmu',
                title:"提醒管理",
                },{
                url:'/project/peizhi/xiangmu/zujian',
                title:"通知管理"
                },{
                url:'/project/peizhi/xiangmu/baobiao',
                title:"事件管理"
                }
            ]
        }
    },
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
</style>
