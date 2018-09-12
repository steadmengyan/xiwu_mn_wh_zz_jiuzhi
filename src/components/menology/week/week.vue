<style lang='scss' scoped>
table{
    width:100%;
    height:100%;
    th{
        width:clac(100% / 8);
        height: 40px;
    }
    td{
        height: 40px;
    }
}
</style>
<template>
<div class="box">
<table>
    <thead>
        <tr>
            <th></th>
            <th>周日</th>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th>周六</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>全天</td>
            <td v-for="item of 7"></td>
        </tr>
        <tr v-for="(item,index) of returnweek">
            <td>{{item}}</td>
            <td v-for="item of 7"></td>
        </tr>
    </tbody>
</table>
</div>
    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        returnweek(){
            var a = 11;
            var hourlist = [];
            var sharkstr = "";
            for(var i=0;i<24;i++){
                a++;
                if(a>12){
                    a=1;
                }
                if(i<13){
                    sharkstr = a+"am时";
                }else{
                    sharkstr = a+"pm时";
                }
                hourlist.push(sharkstr);
            }
            console.log(hourlist);
            return hourlist;
        }
    }
}
</script>