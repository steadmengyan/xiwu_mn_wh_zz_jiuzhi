<template>
<div>
    <div class="nav">
        <h1><span>与我共享</span></h1>
        <div class="wj">
            <span class="jxw"><i class="iconfont icon-jiahao" id="jia"></i><b>新建</b></span>
            <div class="rig">
                <i class="iconfont icon-shangchuan" id="w"></i>
                <span class="wz" @click="fileClic()">上传文件</span>
                <!-- 文件上传必须有的 -->
                <input type="file" value="value" ref="fileupload" hidden="hidden" @change="fieldUpload()">
            </div>
        </div>
    </div>
    <div class="thboy">
        <div class="zj">
            <span><i class="iconfont icon-text7wenben" id="wb"></i></span>
            <p>没有文件</p>
       </div>
    </div>
          <div class="zy">   
                  <router-view></router-view>

          </div>
</div>
</template>
<script>
export default {
    data () {
      return {
        list:[
          {
            title:"公司制度",
          },{
            title:"资料共享"
          },{
            title:"缺陷管理"
          }
        ],
        filelist:[],
      }
    },
    methods:{
      //文件上传方法
      fileClic(){
     
        this.$refs.fileupload.click();
      },
      fieldUpload(){
        let file = {}
        let temp = this.$refs.fileupload.files[0];
        file.size = Math.round(temp.size/1024);
        file.name = temp.name;
        file.time = this.DateZh(temp.lastModified)
        //获取图片base64代码
        let filereader = new FileReader()
        if(temp){
          filereader.readAsDataURL(temp);
        }
        filereader.addEventListener('load',()=>{
          file.url =  filereader.result
          console.log(file)
          this.filelist.push(file);
        })
                 
      },
      //时间出理函数
      DateZh(value){
          let values = Number(value);
          let time = new Date(values);
          let year =time.getFullYear();
          let month = time.getMonth()+1;
          let day = time.getDate();
          let hour = time.getHours();
          let m = time.getMinutes();
          let s = time.getSeconds();
          let riqi = `${month}月${day}日 ${hour}:${m}`
          return riqi
      },
       loca(){

        if(this.filelist.length!=''){
             console.log(this.filelist);
            localStorage.setItem("user",JSON.stringify(this.filelist));    
        }
         
       },
    },
    created () {
         this.loca();
    }


}
</script>
<style lang="scss" scoped >
.nav{
    width:100%;
    height: 50px;
    left: -1px;
    background: #fff;
}
.nav h1{
    width: 1300px;
    height: 50px;

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
 
}
.wj .jxw{
    background-color: #fff;
    float: left;
    font-size: 14px;
    display: block;
    border-radius:5px;
    text-align:center;
    width: 90px;
    height: 29px;
    border: 1px solid blue;
    margin-top: 10px;
}  
.wj span b{
    color:skyblue;
    display: inline-block;
    margin-top: 5px;
} 
.rig{
    margin-top:10px;
    float: right;
    width: 136px;
    height: 29px;
    background-color:skyblue;
    border-radius:5px;
}
.rig .wz{
    display:inline-block;
    color: #fff;
    margin-top: 5px;
}
#jia{
    color: skyblue;
}
#w{
    color:#fff;
    margin-top: 5px;
}
.thboy{
    overflow: hidden;
    width: 1540px;
    height: 688px;
    background-color: #fff;
    margin:15px auto 15px 15px;
  
}
.zj{
 width: 1850px;
 height: 144px;

 margin-top:300px;
}
.zj span{
    display: inline-block;
    margin-left:750px;
}
.zj p{
    color: #666;
    position: relative;
    top: 15px;
    left:750px;
}
#wb{

color: #666;
 font-size:80px;
}


</style>