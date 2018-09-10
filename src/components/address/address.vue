<template>
    <div class="main">
        <div class="main-left">
            <div class="header"></div>
            <div class="sousou">
                <input type="text">
            </div>
            <div class="neirong"></div>
        </div>
        <div class="main-right"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped >
.main{
    width: 1290px;
    height: 393px;
    left: -1px;
    // background: pink;
    overflow: hidden;
}

.main-left{
    width: 240px;
    height: 393px;
    background-color: yellow;
    position: relative;
}
.main .main-left .header{
    width: 240px;
    height: 50px;
    background-color:blue;
    position: absolute;
}
.main .main-left .sousou{
    width: 240px;
    height: 46px;
    background-color: green;
}
.main-right{
    width: 1050px;
    height: 393px;
    background-color: pink;
    float: left;
}

</style>

