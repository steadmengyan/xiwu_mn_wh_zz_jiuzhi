<template>
      <div class="da">
          <div class="shang">
              <img src="../../../assets/ke.png">
              <p>项目助手</p>
              <span>@bot_drive</span>
              <div class="xian"></div>
          <div class="xia">
              <h2>简介</h2>
              <span>
                通过网盘可以管理企业内部资料，随时与团队成员分享，支持企业网盘和个人网盘，以及不同文件夹的权限配置。
              </span>
              <img src="../../../assets/daxiaoxi.png">
          </div>
          </div>
          
      </div> 
</template>

<script>
export default {

}
</script>

<style>
    .da{
        width: 1024px;
        height: 601px;
        border:15px solid #ccc;
        position: absolute;
    }
    .shang{
        width: 620px;
        height: 250px;
        margin: 65px 40%;
        position: relative; 
    }
    .shang p{
        color: #666;
        font-weight: 700;
        font-size: 24px;
        margin-top: 10px;
        margin-left:30px;
    }
    .shang span {
        position: relative;
        display: block;
        color: #888;
        font-size: 16px;
       margin-top: 30px;
        margin-left:30px;
    }
    .xian{
        width: 625px;
        border:1px solid #eee;
        position: relative;
        top:15px;
        left:-190px;
    }
    .xia{
        width: 625px;
        height: 125px;
        position: absolute;
    }
    .xia h2{
        font-weight: 700;
        color: #aaa;
        font-size: 13px;
        position: relative;
        top:48px;
    }
    .xia span:nth-child(2){
    margin-left: 45px;
    /* margin-top: 60px; */
    width: 300px;
    font-size: 15px;
    color: #666;
    }
    .xia img{
        position: relative;
        top:70px;
        left: 20px;
    }

    
</style>
