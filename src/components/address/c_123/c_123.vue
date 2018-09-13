<template>
    <div class="zong">
        <img src="../../../assets/2.png">
        <span>123</span> 
        <span>1人</span>
        <div class="kang">
            <span><img src="../../../assets/M.png"></span>
            <p><img src="../../../assets/fa.png"></p>
       </div>
 </div>
   
</template>

<script>
export default {

}
</script>

<style scoped>
    .zong{
        width:86%;
        position: absolute;
        left: 13%;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 20px;
}
    .zong img{
        margin-left: 10px;
    }
  .zong span:nth-child(2){
      position: relative;
      top:-5px;
    /* margin-left:5px; */
   }
   .zong span:nth-child(3){
      position: relative;
      top:-5px;
       color:#ccc
   }
    
    .kang{
        width: 100%;
        height: 860px;
        border: 15px solid #ccc;
        position: absolute;
    }
    .kang span img{
        margin-top: 25px;
        margin-left: 20px;
    }
      .kang p img{
        margin-top: 15px;
        margin-left: 20px;
    }

</style>
