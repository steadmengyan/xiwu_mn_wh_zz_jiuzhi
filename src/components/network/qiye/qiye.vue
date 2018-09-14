<template>
<div>
    <div class="nav">
        <h1><span>企业网盘</span></h1>
        <div class="wj">
            <span class="jxw"><i class="iconfont icon-jiahao" id="jia"></i><b @click="showToggle()">新建</b></span>
            <div class="rig">
                <i class="iconfont icon-shangchuan" id="w"></i>
                <span class="wz" @click="fileClic()">上传文件</span>
                <!-- 文件上传必须有的 -->
                <input type="file" value="value" ref="fileupload" hidden="hidden" @change="fieldUpload()">
            </div>
        </div>
    </div>
    <div class="thboy">
        <div class="top-h">
            <div class="file-name">
                    <span>文件名</span>
            </div>           
        </div>
        <div class="dx">
            <span>大小</span>
        </div>
        <div class="dx">
            <span>更新人</span>
        </div>
        <div class="dx">
            <span>文件大小</span>
        </div>
         <div class="file-item" v-for="item of wtodos">
            <div class="file-name">
                 <div class="file-name">
                     <i class="iconfont icon-wenjian first" id="fn"></i>
                     <span>{{item.title}}</span>
                </div> 
            </div>
            <div class="file-size">
                <span> {{item.size}}--</span>
            </div>
            <div class="file-updated">
                <div class="lc-a">
                    <span class="clie">
                         <div class="ng-binding">M</div>                           
                    </span>
                    <div class="showm">
                        <span>m</span>
                    </div>
                </div>
              
            </div>
            <div class="file-time">
                 {{item.time}}
            </div>
            <div class="hide">  
                <i class="iconfont icon-xiazai" id="x"></i>
                <i class="iconfont icon-gengduo" id="g" @click="show1=!show1
                "></i>
                 <div class="wh" v-show="show1">
                    <ul>
                        <li v-for="item of data">
                            {{item.lis}}
                        </li>
                        <span class="del" @click="www=!www">删除</span>
                    </ul>
                 </div>
            </div>
           <div class="dw" v-show="www">
         <transition enter-active-class="fadeInDown" leave-active-class="zoomOutRight">
             <div class="aod"  v-show="www">
                <div class="amodal-header">
                      <a href="javascript:;" class="amodal-close"><i class="iconfont icon-guanbi" id="guan" @click="guan()"></i></a>
                    <h3 class="amodal-title ng-scope" translate="drive.ADD_FOLDER">新建文件夹</h3>
                </div>
                <br>
                 <p>确认删除文件夹<span class="hong">{{item.title}}?</span></p>
                 <p>删除后此文件夹中的文件会被一并删除</p>
                 <button  @click="del(item.id)" class="ddel">确认</button>
                   &nbsp;&nbsp;<span @click="www=!www">取消</span>
           </div>
              </transition>
         </div>
        </div>
       

        <div class="file-item" v-for="item of filelist">
            <div class="file-name">
                <img :src="item.url">
                <span>{{item.name}}</span>
            </div>
            <div class="file-size">
                <span> {{item.size}}KB</span>
            </div>
            <div class="file-updated">
                <div class="lc-a">
                    <span class="clie">
                         <div class="ng-binding">M</div>                           
                    </span>
                    <div class="showm">
                        <span>m</span>
                    </div>
                </div>
              
            </div>
            <div class="file-time">
                 {{item.time}}
            </div>
            <div class="hide">  
                <a :href="item.url" download="w3logo"><i class="iconfont icon-xiazai" id="x"></i></a>
                <i class="iconfont icon-gengduo" id="g" @click="show1==!show1"></i>
                 <div class="wh" v-show="show1">
                    <ul v-for="item of data">
                        <li>
                            {{item.lis}}
                        </li>
                        <span @click="del(item.id)">删除</span>
                    </ul>
                 </div>
            </div>
           
        </div>
        
    </div>
    




      <div class="waicheng" v-show="isShow">
         <transition enter-active-class="fadeInDown" leave-active-class="zoomOutRight">
             <div class="od"  v-show="isShow">
                <div class="modal-header">
                      <a href="javascript:;" class="modal-close"><i class="iconfont icon-guanbi" id="guan" @click="guan()"></i></a>
                    <h3 class="modal-title ng-scope" translate="drive.ADD_FOLDER">新建文件夹</h3>
                </div>
                 <input type="text" placeholder="输入文件夹的名称" class="form-control" v-model="value" @keydown.13="add()">
                    <br>
                 <p><span>所在位置</span><input type="text" placeholder="企业网盘"></p>
                 <p><span>可见范围</span><input type="text" placeholde  r="公开:企业所有成员都可以看见文件"></p>
                 <button  @click="guan()" class="del2">确认</button><span @click="isShow=!isShow" class="qux">取消</span>
                 
                 
           </div>
              </transition>
         </div>
  

    <div class="zy">   
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import 'vue2-animate/dist/vue2-animate.min.css';
export default {
    data () {
      return {
        data:[
           {
               lis:'新建文件图'
           },
           {
               lis:'设置权限'
           },
            {
               lis:'公开链接'
           },
            {
               lis:'移动'
           },
           {
               lis:'复制'
           },
            {
               lis:'下载'
           },
            {
               lis:'重命名'
           },
           {
               lis:'修改颜色'
           },
           
        ],
        // list:[
        //   {
        //     class:'iconfont icon-wenjian first',
        //     title:"公司制度",
        //   },{
        //     class:'iconfont icon-wenjian ser',
        //     title:"资料共享"
        //   },{
        //     class:'iconfont icon-wenjian tree',
        //     title:"缺陷管理"
        //   }
        // ],
        filelist:[],
        value:'', 
        show1:false,
        isShow:false,
        www:false
      }
    },
    created() {
   
    // 发送默认 GETALL
     this.$store.dispatch("whGETALL");
   },
    computed: {
      wtodos() {  
         return this.$store.state.wtodos;
      }
   
    },

    methods:{
     del(id) {
      this.www=false;
      this.$store.dispatch("whDEL", {
        id: id
      });
    },
      sj(){
            var dt = new Date();
            var iMonth = dt.getMonth()+1;
		    var iDate = dt.getDate();
	    	var iWeek = dt.getDay();
			var h = dt.getHours();
			var m = dt.getMinutes();
            var time = `${iMonth}月${iDate}日 ${h}:${m}`
            return time	
		},
    add(){

      this.isShow=false;
      var date = new Date();
      var sj=this.sj();
 
      // 如果为空 就 return 掉 什么都不做
      if (this.value == "") return;
      // 随机一个8位id
      var id = "";
      var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
      for (var i = 0; i < 8; i++) {
        //~~ 相当于parseInt
        id += str[~~(Math.random() * str.length)];
      }
      // 发送add 新增命令
      this.$store.dispatch("whADD", {
        title: this.value,
        id: id,
        time:sj,
      });
      
      this.value = "";
    },
     showToggle(){
          
            this.isShow = !this.isShow;
     },
     guan(){
          this.isShow =false;
     },
      //文件上传方法
      fileClic(){

        this.$refs.fileupload.click();
      },

      fieldUpload(){
        let time=this.sj();
        let file = {}
        let temp = this.$refs.fileupload.files[0];
        file.size = Math.round(temp.size/1024);
        file.name = temp.name;
        file.time = time;
        //获取图片base64代码  //FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL  http://blog.okbase.net/jquery2000/archive/1296.html
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
       
  },
    
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
.thboy .top-h{
    float: left;
    overflow: hidden;
    height: 55px;
 
}
 .thboy .top-h .file-name{
    margin-top: 15px;
     width: 1030px;
     height: 27px;
   
     overflow: hidden;
 }
 .file-item  .file-name{
     float: left;
    margin-top: 10  px;
     width: 1030px;
     height: 63px;  
     overflow: hidden;
 }
 .file-item  .file-name img{
     display: inline-block;
     width: 50px;
     height: 50px;
 }
  .thboy .top-h .file-name span{
      display: block;
      margin-left:15px;
      margin-top:5px;
      font-size:14px;
  }
  .thboy .dx{
      font-size: 14px;
      float: left;
      width: 120px;
      height: 27px;
      margin-top:18px;
  }
  .file-item{
      clear: both;
      width: 1540px;
      height: 60px;
      border-bottom: 1px solid #eee;
  }
  .file-item:hover {
      box-shadow:1px 1px 5px 3px rgb(200, 193, 193);
  }
  .file-item:hover .hide{
      display: block;
  }
  #fn{
     display: inline-block;
     margin-left: 15px;
     font-size:31px;
  }
  .file-size{
      float: left;
      width: 120px;
      height: 32px;
      line-height:68px;
  }
  .file-updated{
      float: left;
      width: 130px;
      height: 32px;
     color: #333;
     line-height: 68px;
     box-sizing: border-box;
  }
 .file-updated .lc-a{
        width: 40px;
        height: 30px;
  }
 .file-updated .lc-a .clie{
         display: inline-block;
         width: 24px;
         height: 24px;
         margin-top:20px;
         line-height: 24px;
         font-size: 12px;
         border-radius: 24px;
         background-color: skyblue;
         float: left;

    }
    .file-updated .lc-a .ng-binding{
        display: inline-block;
        margin-left: 10px;
    }
    .showm{
        float: left;
        display: inline-block;
        margin-left: 5px;
    }
    .file-time{
        font-size: 15px;
        color: #888;
        margin-left:-39px;
        float: left;
        line-height:68px;
        width: 170px;
        height: 32px;
    }
    .hide{
        position: relative;
        display: none;
        float: left;
        line-height:68px;  
    }
    .wh{
        box-shadow:1px 1px 5px 3px rgb(200, 193, 193);
        position: absolute;
        top:43px;
        width: 240px;
        height: 406px;
     
    }
    .wh ul li{
        width: 240px;
        height: 40px;
    }
    .wh .del{
        display: block;
        margin-left: 10px;
    }

    #x{
        color: skyblue;
    }
    #g{
        color: skyblue;
    }
    .zy{
      position: absolute;
      top: 0;
      
    }
    .first{
    
        color: rgb(112, 118, 250);
    }
    .tree{
        color: rgb(34, 215, 187);
    }
    .ser{
         color: rgb(102, 192, 96);
    }
    .waicheng{
        position: absolute;
        top: 0;
        left: -80px;
        width: 1920px;
        height:1000px;
        background-color: #666;
        opacity: 0.5;
    }
    .waicheng .od{
        border-radius:5px; 
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        width: 660px;
        height: 341px;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        margin:150px auto;
    }
    .modal-header {
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #666;
     border-top-left-radius: .3rem;
     border-top-right-radius: .3rem;
    }
    .modal-header .modal-close {
       order: 1;
    }
    .modal-close {
      color: #ddd;
      line-height: 50px;
    }
    .modal-header h3{
     color: #000;
     line-height:50px;
     display: inline-block;
     margin-left:20px;
     font-size: 1rem;
     font-weight: 500;
    }
    .modal-title {
     margin-bottom: 0;
     line-height: 1.5;
    }
    #guan{
     display:inline-block;
     margin-top:-16px;
    font-size: 30px;
    }
    .form-control{
     display: block;
     width: 100%;
     margin-top:25px;
     line-height:3;
     color: #333;
     background-color: #fff;
     background-clip: padding-box;
     border: 1px solid #666;
     border-radius: .25rem;
     transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }



     .dw{
        position: absolute;
        top: 0;
        left: -80px;
        width: 1920px;
        height:1000px;
        background-color: #666;
        opacity: 0.5;
    }
    .dw .aod{
        border-radius:5px; 
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        width: 660px;
        height: 341px;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        margin:150px auto;
    }
    .amodal-header {
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #666;
     border-top-left-radius: .3rem;
     border-top-right-radius: .3rem;
    }
    .amodal-header .amodal-close {
       order: 1;
    }
    .amodal-close {
      color: #ddd;
      line-height: 50px;
    }
    .amodal-header h3{
     color: #000;
     line-height:50px;
     display: inline-block;
     margin-left:20px;
     font-size: 1rem;
     font-weight: 500;
    }
    .amodal-title {
     margin-bottom: 0;
     line-height: 1.5;
    }
   .hong {
     color: #ff5b57;
     word-break: break-word;
     font-size: 14px;
    }
    .ddel{
     cursor: pointer;
     color: #fff;
     background-color: #ff5b57;
     border-color: #ff5b57;
     display: inline-block;
     white-space: nowrap;
     vertical-align: middle;
     user-select: none;
     border: 1px solid transparent;
     padding: .469rem 26px;
     font-size: .875rem;
     line-height: 1.5;
     min-width: 106px;
     border-radius: 1.25rem;
     transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
     .dw .aod p{
         display:block;
         margin-left: 10px;
     }
     .dw .aod button{
         display:inline-block;
         margin-top:10px;
         margin-left: 10px;
     }
     .dw .aod button span{
         display: inline-block;
         line-height:30px;
     }
     .waicheng .od p{
         display:inline-block;
         margin-left:28px;
         margin-top:5px;
     }
      .waicheng .od p span{
          color: #888;
          font-size: 14px;

      }
      .waicheng .od p input{
        margin-left:12px;
        border-color: #22d7bb;
        width: 499px;
        height: 38px;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }
   
     .del2{
     cursor: pointer;
     color: #fff;
     background-color: #ff5b57;
     border-color: #ff5b57;
     display: inline-block;
     white-space: nowrap;
     vertical-align: middle;
     user-select: none;
     border: 1px solid transparent;
     padding: .469rem 26px;
     font-size: .875rem;
     line-height: 1.5;
     border-radius: 1.25rem;
     margin-left:28px;
     margin-top:17px;
     
    }
     .qux{
        display:inline-block;
        margin-left:11px;
        position: relative;
        top:12px;


    }
</style>
