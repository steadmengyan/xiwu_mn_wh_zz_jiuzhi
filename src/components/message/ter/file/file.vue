<style lang='scss' scoped>
ul {
  list-style: none;
}
.wenjian {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-top: 15px solid #d3d3d3;
  border-bottom: 15px solid #d3d3d3;
  border-left: 15px solid #d3d3d3;
  padding: 15px 15px;
}
.w_top .btns {
  padding: 5px 15px;
  border-radius: 30px;
  background: #22d7bb;
  border: 0;
  color: #fff;
  float: right;
  margin-right: 30px;
  padding-left: 30px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}
.w_top .btns::before {
  position: relative;
  left: -5px;
}
.w_top .name_wen {
  margin-top: 30px;
  border-bottom: 1px solid #eeeeee;
}
.w_top .name_wen li {
  float: left;
  color: #888;
  height: 40px;
  line-height: 35px;
  font-size: 14px;
  width: calc(100% / 4.2);
  padding-left: 10px;
}
</style>
<template>
  <div class="wenjian">
    <div class="w_top">            
      <button class="btns iconfont icon-noun__cc">上传文件</button>
      <div style="clear:both"></div>
      <ul class="name_wen">
          <li>文件名</li>
          <li>大小</li>
          <li>上传者</li>
          <li>上传时间</li>
          <div style="clear:both"></div>
      </ul>          
    </div>
  </div>
</template>

<script>
export default {};
</script>




