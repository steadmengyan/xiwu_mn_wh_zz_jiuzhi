<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目组件" v-model="searchVal">
        </div>
        <button class="lx"><i class="iconfont icon-shezhi" style="vertical-align:-1px;"></i> 类型管理</button>
        <button class="xj">+ 新建模板</button>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">组件名称</th>
                        <th>备注</th>
                        <th>支持平台</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of list">
                        <td style="text-align:left">
                            <img :src="item.i" alt="">
                            {{item.zujian}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td >
                            <i v-for="(tre,index)  of item.pingtai" :class="tre"></i>
                        </td>
                        <td>
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
            searchVal:'',
            letter:'', 
        }
    },
    created() {
        // 发送默认 GETALL
        this.$store.dispatch("YJHGETALL");
    },
     computed:{
        list: function(){
            var _this = this;
            //逻辑-->根据input的value值筛选goodsList中的数据
            var arrByZM = [];//声明一个空数组来存放数据
            for (var i=0;i<this.$store.state.YJHtodos.length;i++){
                //for循环数据中的每一项（根据name值）
                if(this.$store.state.YJHtodos[i].zujian.search(this.searchVal) != -1){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    arrByZM.push(this.$store.state.YJHtodos[i]);
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
            input:hover{
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
                vertical-align: -6px;
            }
            i{
                margin-right: 3px;
                margin-left: 3px;
                color: #cacaca!important;
            }
        }
    }
</style>
