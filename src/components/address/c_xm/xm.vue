<template>
      <div class="da">
          <div class="shang">
              <img src="../../../assets/wp.png">
              <p>项目助手</p>
              <span>@bot_mission</span>
              <div class="xian"></div>
          <div class="xia">
              <h2>简介</h2>
              <span>
                通过任务可以随时管理团队成员的工作，项目管理，跟踪任务进展。。
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

<style scoped>
    .da{
        width:86%;
        left:13%;
        height: 910px;
        border:15px solid #ccc;
        position: absolute;
    }
    .shang{
        /* width: 620px; */
        width: 100%;
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
    margin-left: 40px;
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
