<template>
    <div>
        <div class="min-body">
            <div class="left">
                <div class="le-t">
                    <span class="title" translate="modules.DRIVE">网盘</span>
                    
                </div>
                <div class="le-b">
                    <div class="screr">
                         <input type="text" placeholder="文件">
                    </div>
                    <ul>
                        <li  v-for="item of tabNav"  @click=" routerGo(item.url)">
                            <span>{{item.title}}</span>
                        </li>
                     </ul>
                </div>
                
            </div>
             <div class="rv">
                 <router-view></router-view>
             </div>
        </div>
        
    </div>
</template>
<script>
export default {
      data () {
    return {
      tabNav:[
        {
          url:'/network/qiye',
          title:"企业网盘",
        },{
          url:'/network/geren',
          title:"个人网盘"
        },{
         
          title:"成员"
        },{
        
          title:"标签"
        },{
          url:'/network/yuwo',
          title:"与我共享"
        },
        {
          url:'/network/del',
          title:"回收站"
        }
      ]
    }
  },
  methods:{
    routerGo(url){
      
      // 路由跳转
      this.$router.push({path:url});
      // console.log(this.$route)
    }
  }
}
</script>
<style lang="scss" scoped >
div{
    width: 100%;
    height: 100%;
    left: -1px;
    background: blue;
}
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
   
    background-color: #545;
}
.screr{
     width: 239px;
     background-color: #ffffff;
     height: 446px;
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
    line-height: 50px;
    font-size: 16px;
}
ul{ 
position: absolute;
top:100px;
 list-style: none;

}
ul li{
    border:1px solid red;
     width: 239px;
     height: 42px;
    //  margin-left:15px;
}
ul li.cur{
    background-color: red;
}
.rv{
    float: left;
    width: 1610px;
    height: 642;
background-color: yellow;
}
</style>
