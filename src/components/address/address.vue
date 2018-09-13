<template>
    <div class="main">
        <div class="main-left">
            <div class="header">
                <span>通讯录</span>
                <img src="../../assets/txl.png" alt="">
            </div>
            <div class="sousou">
                <input type="text" value="搜索">
            </div>
            <div class="neirong">
                <div class="qunzu">
                    <img src="../../assets/qunzu.png">
                </div>
                <div class="fenzhi">
                    <img src="../../assets/fenzhi.png">
                </div>
            </div>
            <div class="add_list">
                <a href="#" @click="show()" class="zuqun">群组</a>
                <div class="add_list_ul" v-show="!isShow" :style='{height:count}'>
                    <ul>
                        <li v-for="item of vList" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                             <span><img src="../../assets/1.png"></span>
                            <router-link :to='item.url' class="lk">{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="add_list">
                <a href="#" @click="show1()">机器人</a>
                <div class="add_list_ul" v-show="!isShow1" :style="{height:height1}">
                    <ul>
                        <li v-for="item of List" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                             <span><img :src="item.img"></span>
                             <!-- <img src="../../assets/xt.png"> -->
                            <router-link :to='item.url' class="xt">{{item.title}}</router-link>
                        </li>
                    </ul>   
                </div>
            </div>
             <div class="add_list2">
                <a href="#" class="M">M</a>
                <div class="xianx"></div>
                <div class="add_list_ul">
                    <ul>
                        <li v-for="item of M" :class="['btn' , {vcur : $route.name.indexOf(item.title) != -1}]">
                             <span><img :src="item.img"></span>
                             <!-- <img src="../../assets/MM.png"> -->
                            <router-link :to='item.url' class="xt">{{item.title}}</router-link>
                        </li>
                    </ul>   
                </div>
            </div>
        </div>
        <div class="rv">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vList:[
                {
                    title:'独孤伽罗',
                    url:'/address/a_jl'
                },
                {
                    title:'哈哈',
                    url:'/address/b_hh'
                },
                {
                    title:'123',
                    url:'/address/c_123'
                }
            ],
            List:[
                 {
                    title:'日程助手',
                    url:'/address/z_ri',
                    img:'/dist/ri.png?a697c1a66d6108af69d45deea584d4ac'
                },
                {
                    title:'网盘助手',
                    url:'/address/x_wp',
                    img:'/dist/3.png?a697c1a66d6108af69d45deea584d4ac'
                },
                {
                    title:'项目助手',
                    url:'/address/c_xm',
                    img:'/dist/xm.png?a697c1a66d6108af69d45deea584d4ac'
                },
                {
                    title:'小特机器人',
                    url:'/address/v_xt',
                    img:'/dist/xt.png?a697c1a66d6108af69d45deea584d4ac'
                }
            ],
            M:[
                 {
                    title:'M',
                    url:'/address/M',
                    img:'/dist/MM.png?a697c1a66d6108af69d45deea584d4ac'
                }
            ],
            isShow:true,
            isShow1:true,
            height1:0,
            count:0
        }
    },
    methods:{
        show:function(){
            this.isShow = !this.isShow;
            if(this.count == 0){ 
                this.count = this.vList.length *  30 + 'px'
            }else{
                this.count = 0;
            }
        },
        show1:function(){
            this.isShow1 = !this.isShow1;
            if(this.height1 == 0){ 
                this.height1 = this.List.length *  30 + 'px'
            }else{
                this.height1 = 0;
            }
        }
    }
}
</script>
<style lang="scss" scoped >

html{
     overflow-y: scroll;
}
.add_list{
    margin: 10px;
}
.add_list2{
    margin: 10px;
    margin-left: 25px;
}
.add_list a{
    width: 240px;
    height: 39px;
    font-size: 13px;
}
.xianx{
    // display: inline-block;
    width: 180px;
    height: 20px;
    border-top:1px solid #ccc;
    
}
.main{
    width: 1000px;
    height:100%;
    left: -1px;
}
.main-left{
    width: 240px;
    height:800px;
    border-right:1px solid #ccc;
    background-color:rgba(253,253,253,.95);
    float: left;
}
.main .main-left .header{
    width: 240px;
    height: 50px;
    
}
.main .main-left .header span{
    position: relative;
    top:3px;
    left:15px;
}
.main .main-left .header img{
    width: 36px;
    height: 36px;
    position: relative;
    right:-145px;
    top:15px;
}
.main .main-left .sousou{
    width: 203px;
    height: 39px;
    background-color: #f3f3f3;
    position: relative;
    left:20px;
    top:10px;
    border-radius: 35px;
}
.main .main-left .sousou input{
    background: #f3f3f3;
    box-shadow: none;
    color: #666;
    height: 36px;
    font-size: 14px;
    padding-left: 28px;
    border-radius: 20px;
    border: 1px solid transparent;
    border: 0px;
    outline:none;
    cursor: pointer;
}
.main .main-right{
    width: 1039px;
    height: 100%;
    position: relative;
    right:-240px;
    top:-100px;
}
.neirong{
    display: -webkit-flex;
    flex-direction: row;
    padding: 8px 20px;
    line-height: 18px;
    border-bottom: solid 1px #f3f3f3;
    position: relative;
    margin-top: 13px;
    div{
        width: 100px;
        height: 25px;
        img{
            display: block;
            position: relative;
            left: 44px;
            top: 4px;
        }
    }
    div:nth-child(1){
        border-right:1px solid #eee;
    }
   
}
  .add_list_ul{
       position: relative;
       left:5px; 
    }
    .add_list_ul ul  li{
        height: 30px;
    }
    .add_list_ul {
        // overflow: hidden;
        // transition: all 3s ease;
        animation: add 1s  alternate forwards;
    } 
    @keyframes add{
        0%{
            height: 0;
        }
        100%{
            height: 90px;
        }
    }
.rv{
    float: left;
}
.lk{
    position: relative;
    top:-7px;
    list-style: none;
    text-decoration: none;
}
.add_list{
    position: relative;
    left:7px;
}
.add_list a{
    list-style: none;
    text-decoration: none;
    position: relative;
    left:7px;
    color:#000;
}
.xt{
    position: relative;
    top:-7px;
    list-style: none;
    text-decoration: none;
}
.add_list_ul_xy{
       position: relative;
       left:5px; 
       margin-bottom: 10px;
       margin-top: 10px;
}
.M{
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
</style>

