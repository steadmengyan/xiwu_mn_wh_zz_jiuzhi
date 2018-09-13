<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目模板"  v-model="searchVal">
        </div>
        
        <button class="lx"><i class="iconfont icon-shezhi" style="vertical-align:-1px;"></i> 类型管理</button>
        <button class="xj">+ 新建模板</button>
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
                            <span>修改</span>
                            <span>删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // goodsList:[
            //     {
            //         i:'imgs/1.png',
            //         xiangmu:'事物处理',
            //         beizhu:'适用于最简单的事务管理',
            //         leixing:'通用',
            //         zhuangtai:'已启用',
            //         qiyong:true,
            //     },
            //     {
            //         i:'imgs/2.png',
            //         xiangmu:'项目管理',
            //         beizhu:'适用于通用的项目管理',
            //         leixing:'通用',
            //         zhuangtai:'已启用',
            //         qiyong:true,
            //     },
            //     {
            //         i:'imgs/3.png',
            //         xiangmu:'敏捷开发',
            //         beizhu:'适用于敏捷研发管理，包括迭代、需求和缺陷',
            //         leixing:'软件',
            //         zhuangtai:'已启用',
            //         qiyong:true,
            //     },
            //     {
            //         i:'imgs/4.png',
            //         xiangmu:'缺陷管理',
            //         beizhu:'适用于缺陷管理',
            //         leixing:'软件',
            //         zhuangtai:'已启用',
            //         qiyong:true,
            //     },
            //     {
            //         i:'imgs/5.png',
            //         xiangmu:'测试管理',
            //         beizhu:'适用于测试用例管理',
            //         leixing:'软件',
            //         zhuangtai:'已启用',
            //         qiyong:true,
            //     },
            // ],
            searchVal:'',
            letter:'', 
        }
    },
    created() {
        // 发送默认 GETALL
        this.$store.dispatch("GETALL");
    },
    methods:{
        
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
        todos(){
            console.log(this.$store.state.todos)
            return this.$store.state.todos;
        }
    }
}
</script>
<style lang="scss" scoped >
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
