<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目报表" >
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
                    <tr v-for="item of arr">
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
            arr:[
                {
                    
                    zujian:'项目概要报表',
                    beizhu:' 展示项目中的基本统计，类型的分布等 ',
                    pingtai:[
                        'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        'iconfont icon-anzhuo'
                    ]
                }
                
            ]
        }
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
