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
         <div class="file-item" v-for="item of temp">
            <div class="file-name">
                 <div class="file-name">
                     <i class="iconfont icon-wenjian first" id="fn"></i>
                     <span>{{item.value}}</span>
                </div> 
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
                <i class="iconfont icon-xiazai" id="x"></i>
                <i class="iconfont icon-gengduo" id="g"></i>
            </div>
        </div>
        <div class="file-item" v-for="item of list">
            <div class="file-name">
                <i :class="item.class" id="fn"></i>
                <span>{{item.title}}</span>
            </div>
            <div class="file-size">
                <span> ----</span>
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
                 9月10日 20:17
            </div>
            <div class="hide">  
                <i class="iconfont icon-xiazai" id="x"></i>
                <i class="iconfont icon-gengduo" id="g"></i>
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
                <i class="iconfont icon-xiazai" id="x"></i>
                <i class="iconfont icon-gengduo" id="g"></i>
            </div>
        </div>
        
    </div>
     <div class="waicheng" v-show="isShow">
         <div class="od">
             <div class="modal-header">
                  <a href="javascript:;" class="modal-close"><i class="iconfont icon-guanbi" id="guan" @click="guan()"></i></a>
                  <h3 class="modal-title ng-scope" translate="drive.ADD_FOLDER">新建文件夹</h3>
            </div>
               <input type="text" placeholder="输入文件夹的名称" class="form-control" v-model="value" @keydown.13="addList()">
               <button  @click="guan()">确认</button>
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
            class:'iconfont icon-wenjian first',
            title:"公司制度",
          },{
            class:'iconfont icon-wenjian ser',
            title:"资料共享"
          },{
            class:'iconfont icon-wenjian tree',
            title:"缺陷管理"
          }
        ],
        filelist:[],
        value:'',
        array:[],
        temp:[],
        count:0,
        isShow:false
        
      }
    },
    methods:{
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
       setLocal(name,value){
         window.localStorage.setItem(name,value)
        },
            //获取本地
       getLocal(name){
         let temp = window.localStorage.getItem(name)
         return temp
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
        addList(){
            var time=this.sj();
            console.log(time)
            let value={};
            value.value =this.value;
            value.time=time;
            this.array.push(value);
            // console.log(this.array);
            value = JSON.stringify(value);
            this.setLocal("name"+this.count,value);
            this.count++;
            
        },
        getList(){
            let i = 0
            while(1){
            let value = this.getLocal("name"+i)
               i++;
            if(!value){
                break;
            }else{
                value = JSON.parse(value);
                this.temp.push(value)
                    }
                }
                console.log(this.temp)
            },
    },
    created () {
      this.getList();
      this.array = this.temp 
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
    margin-top: 15px;
     width: 1030px;
     height: 63px;  
     overflow: hidden;
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
         float: left;
        line-height:68px;
      
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
</style>
