<template>
    <div class="nav">
        <h1><span>企业网盘</span></h1>
        <div class="wj">
            <span>新建</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped >
.nav{
    width:100%;
    height: 50px;
    left: -1px;
    background: yellowgreen;
}
.nav h1{
    width: 1300px;
    height: 50px;
    border: 1px solid #657;
    float: left;
}
.nav h1 span{
    margin-top: -15px;
    margin-left: 20px;
    color: #333;
    font-size: 14px;
}
.nav .wj{
    float: left;
    width: 254px;
    height: 50px;
    border: 1px solid
}
.wj span{
    display: block;
    border-radius:5px;
    text-align:center;
    width: 110px;
    height: 29px;
    border: 1px solid blue;
}   
</style>
