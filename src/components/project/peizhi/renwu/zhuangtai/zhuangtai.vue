<template>
    <div style="padding:15px;box-sizing: border-box;">
        <div class="module">
        <div class="left">
             <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索任务状态" >
        </div>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">任务状态</th>
                        <th>备注</th>
                        <th>类型</th>
                        <th>分组</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <span :class="[{wancheng:item.leixing=='已完成'},{weikaishi:item.leixing=='未开始'},{jinxingzhong:item.leixing=='进行中'}]">
                                {{item.xiangmu}}
                            </span>
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td >
                            {{item.leixing}}
                        </td>
                        <td style="text-align:left">
                            {{item.zhuangtai}}
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    xiangmu:'未开始',
                    beizhu:'用于初始状态',
                    leixing:'未开始',
                    zhuangtai:'通用状态'
                },
                {
                    xiangmu:'进行中',
                    beizhu:'任务正在处理',
                    leixing:'进行中',
                    zhuangtai:'通用状态'
                },
                {
                    xiangmu:'已完成',
                    beizhu:'任务已完成',
                    leixing:'已完成',
                    zhuangtai:'通用状态'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped >
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
            span{
                padding: 5px 10px;
            }
            .wancheng{
                background: rgb(232, 251, 248);
            }
            .weikaishi{
                background: rgb(254, 238, 238);
            }
            .jinxingzhong{
                background: rgb(255, 245, 231);
            }
            .guanbi{
                background: rgb(235, 248, 238);
            }
        }
    }
</style>
