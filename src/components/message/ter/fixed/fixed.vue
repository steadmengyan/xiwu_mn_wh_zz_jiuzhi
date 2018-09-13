<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <img src="../../../../assets/7.png" alt="">
            <span>没有固定的消息</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.new_detail {
  width: 100%;
  height: 100%;
  // background: #dadad8;
  position: relative;
  background: url("../../../../assets/desktop-5.jpg") no-repeat;
  background-size: cover;
  .new_deta_main {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0%;
    top: 0%;
    background: #fff;
    border-top: 15px solid #d3d3d3;
    border-bottom: 15px solid #d3d3d3;
    border-left: 15px solid #d3d3d3;
    img {
      display: inline-block;
      font-size: 70px;
      color: #ccc;
      position: relative;
      left: 45%;
      top: 140px;
    }
    span {
      font-size: 18px;
      color: #ccc;
      position: relative;
      left: 36%;
      top: 160px;
    }
  }
}
</style>
