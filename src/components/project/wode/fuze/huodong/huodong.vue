<template>
    <div style="padding:15px">
        <ul >
            <li class="pad" v-for="item of arr">
                <p style="color: rgb(170, 170, 170);"><span style="color:black;font-size:16px;">{{item.name}}</span> <span style="color:rgb(34, 215, 187);">{{item.sp1}}</span> / <span style="color:rgb(255, 196, 66);">{{item.sp2}}</span> / <span style="color: rgb(170, 170, 170);">{{item.sp3}}</span></p>
                <div class="line"></div>
                <p class="tj"><i class="iconfont icon-iconfont707"></i> 添加新任务</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                arr:[
                    {
                        name:'收件箱',
                        sp1:'0',
                        sp2:'0',
                        sp3:'0',
                    },
                    {
                        name:'今天要做',
                        sp1:'0',
                        sp2:'0',
                        sp3:'0',
                    },
                    {
                        name:'下一步要做',
                        sp1:'0',
                        sp2:'0',
                        sp3:'0',
                    }
                    ,
                    {
                        name:'以后要做',
                        sp1:'0',
                        sp2:'0',
                        sp3:'0',
                    }
                    
                ]
            }
        }
    }
</script>
<style lang="scss" scoped >
    .pad{
        width: 280px;
        box-sizing: border-box;
        padding: 20px 10px 20px 10px;
        background-color: #fff;
        border-radius: 5px;
        float: left;
        margin-right: 14px;
        span{
            font-size: 14px;
        }
        .line{
            width: 100%;
            height: 6px;
            margin-top: 15px;
            background: rgb(221, 221, 221);
            border-radius: 10px;
        }
        .tj{
            padding-top: 15px;
            font-size: 14px;
        }
    }
</style>