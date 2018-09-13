<template>
       <div class="ba"> 
            <div class="top">
                <img src="../../../assets/bg.jpg" alt="">
                 <p>M   <a href="#">@17600978244</a></p>
                 <div class="ddd">
                     <a href="#">M</a>
                 </div>
            </div>
            <div class="fp">
                <span><i class="iconfont icon-mingpian"></i>技术总监&nbsp;&nbsp;&nbsp;  |</span>
                <span><i class="iconfont icon-youxiang"></i>暂无&nbsp;&nbsp;&nbsp; |</span>
                <span><i class="iconfont icon-dianhua1"></i>17600978244</span> 
                <img src="../../../assets/bj.png" alt="">
                <img src="../../../assets/fp.png" alt="">
            </div>
            <div class="rw">
                <div class="q">
                    <div class="zuo">
                        <p>|</p><p>M&nbsp;的任务</p>
                    </div>
                    <div class="you" style="float:right;">
                        <span><i><img src="../../../assets/fang.png"></i><a href="#">按截止日期</a></span>
                        <div class="myry">
                            <img src="../../../assets/myrw.png">
                        </div>
                    </div>
                </div>
                <div class="w">
                    <div class="yi" style="float:left;">
                        <span>0</span>
                        <p>已完成</p>
                    </div>
                    <div class="dai" style="float:left;">
                        <span>0</span>
                        <p>已完成</p>
                    </div>
                    <div class="yan" style="float:left;">
                        <span>0</span>
                        <p>已完成</p>
                    </div>
                </div>
                <div class="e">
                    <div class="zuo">
                        <p>|</p><p>今日日程</p>
                        <div class="mysj">
                            <img src="../../../assets/mysj.png">
                        </div>
                        </div>
                </div>
                <div class="r">
                        <div class="zuo">
                        <p>|</p><p>详细资料</p>
                        <div class="phone">手机</div>
                        <div class="mb">17600978244</div>
                        <div class="phone">邮箱</div>
                        <div class="mb">暂无</div>
                        <div class="phone">部门</div>
                        <div class="mb">暂无</div>
                        <div class="phone">职位</div>
                        <div class="mb">技术总监</div>
                    </div>
                </div>
            </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
    .iconfont{
        font-size: 22px;
       
        padding-right: 5px;
        padding-top: 10px;
        color: #ccc;
    }
    .ba{
        width: 1055px;
        height: 800px;
        position: absolute;
        /* background-color: #ccc; */
    }
     .top{
        width: 1055px;
        height: 200px;
        position: relative;
        background-color:pink;
    }
    .top img{
        width: 1400px;
        height: 200px;
    }
    .top p{
        position: relative;
        font-size: 20px;
        top:-50px;
        left:150px;
    }
     .top a{
        font-size: 17px;
        list-style: none;
        text-decoration:none;
        color:#ccc;
     }
    .fp{
        width: 1055px;
        height: 50px;
        position: relative;
        background-color:#fff;
    }
    .fp span{
        width: 65px;
        height: 50px;
        /* float: left; */
        position: relative;
        font-size: 15px;
        top:5px;
        left: 140px;
        color:#333;
        padding-left: 20px;
    }
    .fp img{
         position: relative;
        right: -450px;
        top:15px;
        margin-left: -20px;
        margin-right:15px;
    }
   
    .ddd{
        width: 110px;
        height: 110px;
        background-color:rgb(239, 126, 222);
        border-radius:50%;
        position: relative;
        z-index: 999;
        left:20px;
        top:-90px;
    }
    .ddd a{
        font-size: 45px;
        line-height: 105px;
        text-decoration: none;
        color:#fff;
        padding-left:30px;
    }
     .rw{
        width: 100%;
        height: 350px;
        top:15px;
        position: relative;
    }
    .rw .q{
        width: 750px;
        height: 552px;
        border:15px solid #ccc;
        background-color:rgb(253,253,253);
        border-right:none;
        float: left;
    }
    .rw .w{
        width: 245px;
        height: 110px;
        border:15px solid #ccc;
        float: left;
        border-bottom:none;

    }
    .rw .e{
        width: 245px;
        height: 213px;
        border:15px solid #ccc;
        background-color: rgb(253,253,253);
        float: left;
        border-bottom:none;
    }
    .rw .r{
        width: 245px;
        height: 200px;
        border:15px solid #ccc;
        float: left;
    }
    .zuo p:nth-child(1){
        padding-top: 15px;
        padding-left:15px;
        padding-right:5px;
        color:aqua;
        font-weight:bold;
        display: inline-block;
    }
    .zuo p:nth-child(2){
          padding-top: 13px;
        padding-left:5px;
        padding-right:5px;
        display: inline-block;
    }
    .you{
        width: 120px;
        height: 30px;
        margin-right:25px;
        margin-top:-20px;
        /* padding-top:-10px; */
        border:1px solid #ddd;
        border-radius: 4px;
    }
    
    .you span a{
         text-align: center;
         line-height: 30px;
         padding-left: px;
        text-decoration: none;
        color: #888;
        background-color: transparent;
        background-image: none;
        border-color: #ddd;
        font-size: 15px;
}
.you span img{
        position: relative;
        top:7px;
}
.yi{
    width: 50px;
    height: 30px;
    margin:15px;
    margin-top: 32px;
}
.yi span{
    font-size: 22px;
   padding-left:15px;
}
.dai span{
    font-size: 22px;
   padding-left:15px;
}
.yan span{
    font-size: 22px;
   padding-left:15px;
   font-family: "Helvetica Neue","Hiragino Sans GB",stheiti,"Microsoft Yahei","微软雅黑",tahoma,sans-serif;
    
}

.dai{
    width: 50px;
    height: 30px;
    margin:15px;
    margin-top: 32px;
}
.yan{
    width: 50px;
    height: 30px;
    margin:15px;
    margin-top: 32px;
}
p{
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666;
}
.phone{
    margin-top: 10px;
    margin-right: 35px;
    width: 60px;
    text-align: right;
    color: #aaa;
}
.mb{
    margin-top: -20px;
    margin-right: 60px;
    color: #666;
    text-align: right;
    font-size: 14px;
    word-break: break-all;
}
.myry{
    width: 200px;
    height: 200px;
    margin: 150px -300px;
} 
.mysj{
    width: 50px;
    height: 50px;
    margin-left: 65px;
    margin-top: 30px;
}

    





    

</style>
