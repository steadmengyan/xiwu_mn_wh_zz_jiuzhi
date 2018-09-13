<template>
    <div class="module">
        <!-- class="animated fadeInDown" -->
        <div class="mask" v-show="isShow" ></div>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
            <div class="modal-backdrop" v-show="isShow">
                <header class="modal-header">
                    <a href="javascript:;" class="modal-close ng-scope" @click="xiaoshi"><i class="iconfont icon-guanbi"></i></a>
                    <h3 class="modal-title ng-binding ng-scope">
                        新建项目模板
                    </h3>
                </header>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">模板名称</label>
                        <input type="text" class="form-control" v-model="mingcheng">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">模板类型</label>
                        <input type="text" class="form-control"  v-model="leixing">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">备注</label>
                        <textarea class="form-control"  v-model="beizhu"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">图标</label>
                        <p style="padding-left:10px;overflow:hidden">
                            <span v-for="(item,index) in tubiao" :class="{active:index == num}"@click="tab(index)">
                                <img :src="item">
                            </span>
                        </p>
                    </div>
                    <div class="form-group">
                        <div class="offset-sm-2 col-sm-10 ">
                            <div class="btn-pair">
                                <button class="btn btn-primary ng-binding" @click="add">确定</button>
                                <button class="btn btn-link btn-link-info ng-binding" @click="xiaoshi">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="mask" v-show="isShow1" ></div>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
            <div class="modal-backdrop" v-show="isShow1" style="height:180px">
                <header class="modal-header">
                    <a href="javascript:;" class="modal-close ng-scope" @click="xiaoshi1"><i class="iconfont icon-guanbi"></i></a>
                    <h3 class="modal-title ng-binding ng-scope">
                        删除项目模板
                    </h3>
                </header>
                <div style="padding:10px 30px">
                    <p style="font-size:16px">确定要删除<span style="color:red;">{{xm}}</span>吗</p>
                    <button class="btn btn-primary ng-binding" style="margin-left:0;margin-top:20px;" @click="shanchu">确认</button>
                    <button class="btn btn-link btn-link-info ng-binding" style="margin-top:20px;" @click="xiaoshi1">取消</button>
                </div>
            </div>
        </transition>

        <div class="mask" v-show="isShow2" ></div>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
            <div class="modal-backdrop" v-show="isShow2">
                <header class="modal-header">
                    <a href="javascript:;" class="modal-close ng-scope" @click="xiaoshi"><i class="iconfont icon-guanbi"></i></a>
                    <h3 class="modal-title ng-binding ng-scope">
                        修改项目模板
                    </h3>
                </header>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">模板名称</label>
                        <input type="text" class="form-control" v-model="mingcheng1">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">模板类型</label>
                        <input type="text" class="form-control"  v-model="leixing1">
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">备注</label>
                        <textarea class="form-control"  v-model="beizhu1"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label ng-binding">图标</label>
                        <p style="padding-left:10px;overflow:hidden">
                            <span v-for="(item,index) in tubiao" :class="{active:index == num}"@click="tab(index)">
                                <img :src="item">
                            </span>
                        </p>
                    </div>
                    <div class="form-group">
                        <div class="offset-sm-2 col-sm-10 ">
                            <div class="btn-pair">
                                <button class="btn btn-primary ng-binding" @click="gaibian">确定</button>
                                <button class="btn btn-link btn-link-info ng-binding" @click="xiaoshi2">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
       
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目模板"  v-model="searchVal">
        </div>
        <button class="lx"><i class="iconfont icon-shezhi" style="vertical-align:-1px;"></i> 类型管理</button>
        <button class="xj" @click="xianshi">+ 新建模板</button>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">项目模板</th>
                        <th>备注</th> 
                        <th>类型</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of list">
                        <td style="text-align:left">
                            <img :src="item.i" alt="">
                            {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td style="text-align:left">
                            {{item.leixing}}
                        </td>
                        <td style="">
                            <span :class='{qy: item.qiyong==true}'>
                                {{item.zhuangtai}}
                            </span>
                        </td>
                        <td>
                            <span @click="change(item)">修改</span>
                            <span @click="del(item.id,item.xiangmu)">删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// import  'animate.css'
import 'vue2-animate/dist/vue2-animate.min.css';
export default {
    data(){
        return{
            isShow2:false,
            isShow1:false,
            isShow:false,
            searchVal:'',
            letter:'', 
            tubiao:[
                'imgs/1.png',
                'imgs/2.png',
                'imgs/3.png',
                'imgs/4.png',
                'imgs/5.png'
            ],
            mingcheng:'',
            leixing:'',
            beizhu:'',
            mingcheng1:'',
            leixing1:'',
            beizhu1:'',
            num:0,
            xm:'',
            ids:'',
            ids1:'',
            i:''
        }
    },
    created() {
        // 发送默认 GETALL
        this.$store.dispatch("GETALL");
    },
    methods:{
        xianshi(){
            this.isShow=!this.isShow;
        },
        xiaoshi(){
            this.isShow=false;
        },
        xiaoshi1(){
            this.isShow1=false;
        },
        xiaoshi2(){
            this.isShow2=false;
        },
        tab(index) {
            this.num = index;
        },
        add(){
            console.log(333);
            // 如果为空 就 return 掉 什么都不做
            if (this.leixing == "" || this.mingcheng == '' || this.beizhu=='' ) return;
            // 随机一个8位id
            var id = "";
            var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
            for (var i = 0; i < 8; i++) {
                //~~ 相当于parseInt
                id += str[~~(Math.random() * str.length)];
            }
            // 发送add 新增命令
            this.$store.dispatch("YJHADD", {
                i:this.tubiao[this.num],
                xiangmu:this.mingcheng,
                beizhu:this.beizhu,
                leixing:this.leixing,
                zhuangtai:'未启用',
                qiyong:false
            });
            // 点击后 清空 文本框
            this.leixing = ""
            this.beizhu = ""
            this.mingcheng = ""
            this.isShow=false
        },
        del(id,xiangmu) {
            // 只需要一个id就行了
            // this.$store.dispatch("YJHDEL", {
            //     id: id
            // });
            
            this.ids=id;
            this.xm=xiangmu;
            this.isShow1=!this.isShow1;
            
        },
        shanchu(){
            console.log(566);
            this.isShow1=!this.isShow1;
            this.$store.dispatch("YJHDEL", {
                id: this.ids
            });
        },
        change(item) {
            this.isShow2=!this.isShow2
            this.ids1=item.id;
            this.mingcheng1=item.xiangmu
            this.beizhu1=item.beizhu
            this.leixing1=item.leixing,
            this.i=this.num
        },
        gaibian(){
            this.isShow2=false;
            this.$store.dispatch("YJHCHANGETITLE", {
                id:this.ids1,
                xiangmu:this.mingcheng1,
                beizhu:this.beizhu1,
                leixing:this.leixing1,
                i:this.tubiao[this.i]
            }); //changetitle
        }
    },
    computed:{
        list: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i<this.$store.state.todos.length;i++){
                //for循环数据中的每一项（根据name值）
                if(this.$store.state.todos[i].xiangmu.search(this.searchVal) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.$store.state.todos[i]);
                    //向空数组中添加数据
                }
            }
            //逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
            //判断，如果要letter不为空，说明要进行排序
            if(this.letter != ''){
                arrByZM.sort(function( a , b){
                    if(_this.original){
                        return b[_this.letter] - a[_this.letter];
                    }else{
                        return a[_this.letter] - b[_this.letter];
                    }
                });
            }
            //一定要记得返回筛选后的数据
            return arrByZM;
        },
    }
}
</script>
<style lang="scss" scoped >
    
    .modal-close{
        float: right;
        text-decoration: none;
    }
    .btn-primary{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        margin-left: 70px;
    }
    .btn{
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
        outline: none;
        cursor: pointer;
    }
    .mask{
        padding-left: 70px;
        left: -70px;top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(178, 178, 178);
        z-index: 999;
        opacity: 0.5;
    }
    .modal-backdrop{
        width: 660px;
        height: 383px;
        background-color: #fff;
        position: absolute;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.4);
        z-index: 9999;
        border-radius: 5px;
        top: 50%;
        left: 50%;
        margin-top: -300px;
        margin-left: -330px;
    }
    .modal-header{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        padding:0 30px;
        line-height: 50px;
        h3{
            font-weight: 500;
            font-size: 18px;
        }
    }
    .modal-body{
        padding: 20px 30px 30px 30px;
        .form-group{
            margin-top: 16px;
            overflow: hidden;
            label{
                float: left;
                color: #888;
                font-size: 14px;
                font-weight: 400;
                text-align: right;
                margin-bottom: 0;
                padding-top: 6px;
                width: 10%;
            }
            .form-control{
                margin-left: 10px;
                padding: .469rem .875rem;
                font-size: .875rem;
                float: left;
                width: 80%;
                line-height: 1.5;
                color: #333;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #eee;
                border-radius: .25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            span{
                float: left;
                width: 34px;
                height: 34px;
                border-radius: 5px;
                margin-right: 10px;
                margin-bottom: 10px;
                border:1px solid #eee;
                text-align: center;
                img{
                    margin-top: 5px;
                }
            }
            span.active{
                border: 1px solid #22d7bb;
            }
        }
    }
    .qy{
        background: #22d7bb;
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        box-sizing: border-box;
        
    }
    .xj{
        float: right;
        color: rgb(255, 255, 255);
        background-color: rgb(34, 215, 187);
        border-color: rgb(34, 215, 187);
        min-width: 70px;
        line-height: 1.5;
        border: 0;
        width: 124px;
        height: 36px;
        box-sizing: border-box;
        border-radius: 30px;
        cursor: pointer;
        margin-left: 14px;
        outline: none;
    }
    .lx{
        background:white;
        float: right;
        color: rgb(136, 136, 136);
        border: 1px solid rgb(221, 221, 221);
        min-width: 70px;
        line-height: 1.5;
        width: 124px;
        height: 36px;
        box-sizing: border-box;
        border-radius: 30px;
        cursor: pointer;
        margin-left: 14px;
        outline: none;
    }
    .module{
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;
        .left{
            position: relative;
            float: left;
            width: 300px;
            .icon-sousuo1{
                position: absolute;
                top: 10px;
                left: 10px;
            }
            input{
                padding: 8px 0;
                padding-left: 34px;
                padding-right: 14px;
                display: block;
                width: 100%;
                line-height: 1.5;
                color: #333;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #eee;
                border-radius: .25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                box-sizing: border-box;
                outline: none;
            }
            input:focus{
                border-color: #22d7bb;
            }
        }
        .pad{
            width: 100%;
            box-sizing: border-box;
            padding-top: 20px;
            background-color: #fff;
            float: left;
            table{
                width: 100%;
                box-sizing: border-box;
                border-collapse: collapse;
                thead th{
                    background-color: #f3f3f3;
                    vertical-align: bottom;
                    font-weight: 400;
                    border-bottom: 1px solid #eee;
                }
            }
            table,th,td,tr{
                border: 1px solid #eee;
            }
            th,td{
                font-size: 14px;
                padding: 12px 15px;
                display: table-cell;
                text-align: center;
                color: #666;
            }
            img{
                vertical-align: -5px;
            }
        }
    }
    
</style>
