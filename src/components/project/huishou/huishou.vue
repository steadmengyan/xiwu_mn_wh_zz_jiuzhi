<template>
    <div>
        <div class="header">
            <i class="iconfont icon-delete"></i> 回收站
        </div>
        <div class="body">
            <div class="box">
                <img src="imgs/b2.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="scss" scoped >
    .body{
        padding: 15px;
        .box{
            height: 800px;
            background-color: #fff;
            text-align: center;
            img{
                margin-top: 20%;
            }
        }
    }
    .header{
        background: rgba(253,253,253,.97);
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
    }
    .icon-delete{
        color: #22d7bb;
    }
</style>
