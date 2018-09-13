<template>
    <div>
        <div class="min-body">
            <div class="left">
                <div class="le-t">
                    <span class="title" translate="modules.DRIVE">网盘</span>

                </div>
                <div class="le-b">
                    <div class="screr">
                        <i class="iconfont icon-ai219" id="f"></i><input type="text" placeholder="文件" >
                    </div>
                    <ul class="fist">
                        <li  @click="showToggle(index)" v-for="(item,index) of json" :class="{active:isShow==index}">
                            <router-link :to='item.url' class="lvl0 "><span class="title"><i :class="item.class" ></i>{{item.title}}</span></router-link>      
                              <div class="secon" v-show="xs">
                                <ul>
                                   <li @click="routerGo1(item.url)" v-for="(item,index) of list"> 
                                        <a href="javascript:;" class="lvl0"><span class="title"><i class="iconfont icon-wenjian"></i>{{item.title}}</span></a>  
                                    </li>
                                </ul>
                             </div>
                        </li>
                    
                     </ul>
                </div>
                
            </div>
             <div class="rv">
                 <router-view> 

                 </router-view>
             </div>
        </div>
        
    </div>
</template>
<script>
export default {
      data () {
          return{
               list:[
               {
                   title:'资料共享',
                   url: '/network/qiye/guanli/'    
               },
               {
                   title:'缺陷管理',
                   url:'/network/qiye/gongxiang/'   
               },
               {
                   title:'公司制度',
                   url:'/network/qiye/zhidu/'   
               }
           ],
            json:[
               {
                   title:'企业网盘',
                   url: '/network/qiye/',
                   class:'iconfont icon-wenjian first'    
               },
               {
                   title:'个人网盘',
                   url: '/network/geren/',
                   class:'iconfont icon-wenjian ser'       
               },
               {
                   title:'成员',
                  url: '/network/geren/',
                   class:'iconfont icon-xiaotuziCduan_'     
               },
               {
                   title:'标签',
                     url: '/network/geren/',
                   class:'iconfont icon-xiaotuziCduan_'     
               },
                {
                   title:'与我共享',
                   url:'/network/yuwo/',
                   class:'iconfont icon-fenxiang'     
               },
                {
                   title:'回收站',
                   url:'/network/del/',
                   class:'iconfont icon-fenxiang'     
               }
           ],
              isShow:0,
              xs:false
          }
  },
  methods:{
    routerGo(url){
      
      // 路由跳转
      this.$router.push({path:url});

    },
      routerGo1(url){
      
      // 路由跳转
      this.$router.push({path:url});

    },
    showToggle(index){
         this.isShow=index;
         var odiv =document.getElementsByClassName("secon");
         console.log(index);
        if(index==0){
          odiv[0].style.display="block";
        }else{
            odiv[0].style.display="none";
            
        }
	 }

  }
}
</script>
<style lang="scss" scoped >
.min-body{
    width: 1850px;
    height:684px;
    background-color:red;
}
.left{
    width: 240px;
    height: 684px;
    float: left;
    background-color: yellowgreen;
}
.le-t{
    width: 239px;
    height: 50px;
    background-color:#f3f3f3;
}
.le-b{
    
    width: 239px;
    height: 631px;
    background-color:#fff;
}

.le-b .fist .secon{
    margin-left:15px;
    width: 240px;
    height:120px;
    // background-color: salmon;
}

.screr{
     width: 239px;
     background-color: #ffffff;
     height:46px;
     position: relative;

}
.screr input{
    margin-top: 5px;
    background: #f3f3f3;
    box-shadow: none;
    color: #666;
    height: 30px;
    font-size: 14px;
    padding-left: 70px;
    border-radius: 20px;
    border: 1px solid transparent;
}
.title{
    float: left;
    margin: 0 20px;
    color: #333;
    line-height: 40px;
    font-size: 16px;
}
.fist{ 
clear: both;

list-style: none;
}
.fist li{
 text-align: -webkit-match-parent;
}
.fist li.cur{
    background-color: red;
}
#f{
    position: absolute;
    top: 13px;
    left:10px;
}

.a.lvl0 {
    padding-left: 20px!important;
}
.active {
    color: #22d7bb;
    background: #e7f9f6;
    border-right: 4px solid #22d7bb;
    text-decoration: none;
}
.fist  :nth-child(0) a span i{
     color:red;
    }
.fist li a {
    font-size:14px; 
    display: flex;
    flex-direction: row;
    padding:-40px 10px 8px 18px;
    line-height: 24px;
    cursor: pointer;
    color: #666;
    transition: all .2s;
    text-decoration: none;
}
.fist li  .title {
    flex: 1 1 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.show{
    display: block;
}
 .first{
    
        color: rgb(112, 118, 250);
    }
 .ser{
         color: rgb(102, 192, 96);
    }
.rv{
  
    float: left;
    width: 1610px;
    height: 642px;
    background-color:#ddd;;
}
</style>
