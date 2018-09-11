<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目组件" >
        </div>
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
                    i:'imgs/6.png',
                    zujian:'看板',
                    beizhu:'用看板的方式分组展示任务',
                    pingtai:[
                        'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/7.png',
                    zujian:'迭代',
                    beizhu:'用于敏捷开发管理中的迭代管理，支持迭代统计、故事板及规划',
                    pingtai:[
                        'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/8.png',
                    zujian:'列表',
                    beizhu:'用列表的方式直观的展示任务',
                    pingtai:[
                        'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/9.png',
                    zujian:'时间',
                    beizhu:'用甘特图的方式展示任务，支持任务视图与人员视图',
                     pingtai:[
                         'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/10.png',
                    zujian:'表格',
                    beizhu:'用表格的方式展示任务，支持表头自定义',
                     pingtai:[
                         'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/11.png',
                    zujian:'报表',
                    beizhu:'提供基于任务的多维度统计，可以自定义统计报表',
                     pingtai:[
                         'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/12.png',
                    zujian:'日历',
                    beizhu:'用日历的方式直观的展示任务',
                    pingtai:[
                        'iconfont icon-diannao',
                        'iconfont icon-iphone',
                        
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'imgs/13.png',
                    zujian:'工时',
                    beizhu:'用于项目管理中的工时查看、统计与导出',
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
