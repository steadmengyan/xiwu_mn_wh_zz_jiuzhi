<template>
    <div style="padding:15px">
        <table>
            <thead>
                <tr>
                    <th width="80px">#</th>
                    <th width="189px">编号</th>
                    <th width="189px">状态</th>
                    <th width="449px">标题</th>
                    <th width="209px">负责人</th>
                    <th width="249px">截止时间</th>
                    <th class="clear-border" width="209px">任务类型</th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>
<style lang="scss" scoped >
    table{
        width: 100%;
        background-color: #fff;
        border-collapse: collapse;
        thead{
            tr{
                th{
                    font-weight: 400;
                    height: 50px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: rgb(238, 238, 238);
                }
            }
        }
    }
</style>