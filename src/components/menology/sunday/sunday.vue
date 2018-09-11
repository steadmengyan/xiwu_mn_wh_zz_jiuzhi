<style lang='scss' scoped>
.box{
    position: relative;
}
table.dayofcommon{
    width: 100%;
    th{
        height:41px;
        border-right:1px solid #F3F3F3;
        border-bottom:1px solid #F3F3F3;
    }
    td{
        height: 140px;
        border-right:1px solid #F3F3F3;
        border-bottom:1px solid #F3F3F3;
        vertical-align:top;
        font-weight:100;
    }
    tr td:last-child{
        border-right:none;
    }
}
div.doyofschedule{
    position: absolute;
    top:44px;
    width: 100%;
    .box{
        height:140px;
        position: relative;
        table{
            position: absolute;
            top:30px;
            height:calc(100% / 3);
            tr{
                height:30px;
                td{
                    border:none;
                }
                td.cur{
                    background-color: #FEF0C1;
                }
            }
        }
    }
}
</style>
<template>
<div class="box">
    <table class="dayofcommon">
        <thead>
            <tr>
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
            <tr v-for='(item,index) of calender.length / 7'>
                <td v-for='i of 7' :class="{cur:calender[index * 7 + (i - 1)].cur}">{{calender[index * 7 + (i - 1)].day}}</td>
            </tr>
        </tbody>
    </table>
    <div class="doyofschedule">
        <div class="box" v-for="item of schedule">
            <table>
                <tr v-for="child of item">
                    <td v-for="txt of child" :style="{width:223 * txt.colspan + 'px'}" :colspan="txt.colspan" :class="{cur:txt.title}">{{txt.title}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    props:["theyear","themonth"],
    data(){
        return {
            year:2018,
            month:9,
            nr:'',
            st:'',
            ed:'',
            things:[
                {
                    title:'这是一个事务',
                    start:20171203,
                    end:20171205
                },
                {
                    title:'这是一个事务1',
                    start:20180107,
                    end:20180109
                },
                {
                    title:'这是一个事务2',
                    start:20180908,
                    end:20180915
                }
            ]
        }
    },
    computed:{
        calender(){
            this.year = this.theyear;
            this.month = this.themonth;
            var arr=[];
            // console.log(this.theyear,this.themonth);
            //new Date 有三个参数：参数1，年；参数2，月；参数3，默认是1，如果是0，表示上个月的最后一天，-1，前两天，3，后天
            var nowMonthLength= new Date(this.year,this.month,0).getDate();
            var nowMonthFirstWeek = new Date(this.year,this.month-1).getDay();
            var lastMonthLength= new Date(this.year,this.month-1,0).getDate();
            //每个月的上一个月是那一年的哪一个月
            var pmonth=this.month==1?12:this.month-1;
            //上一年
            var pyear=this.month==1?this.year-1:this.year;
            //下一月
            var nmonth=this.month==12?1:this.month+1;
            //下一年
            var nyear=this.month==12?this.year+1:this.year;
            //补零函数
            function buling(n){
                return  n.toString().length>1?n.toString():'0'+n.toString();
            }
            //补充上个月的最后几天
            while(nowMonthFirstWeek--){
                arr.unshift({
                    day:lastMonthLength,
                    cur:true,
                    fullDay:`${pyear}${buling(pmonth)}${buling(lastMonthLength)}`,
                });
                lastMonthLength--
            }
            //本月天数
            var _a=1;
            while(nowMonthLength--){
                arr.push({
                    day:_a,
                    cur:false,
                    fullDay:`${this.year}${buling(this.month)}${buling(_a)}`,
                })
                _a++
            }
            //下个月补全
            var nexLength=arr.length>35?42-arr.length:35-arr.length;
            _a=1;
            while(nexLength--){
                arr.push({
                    day:_a,
                    cur:true,
                    fullDay:`${nyear}${buling(nmonth)}${buling(_a)}`,
                })
                _a++
            }
            console.log(arr);
            return arr;
        },
        schedule(){
            var arr=[];//里边放的box
            //事物
            for(var i=0; i<this.calender.length/7; i++){
                arr.push([]);//里边放tr
                for(var j=0; j<3; j++){
                    arr[i].push([]);//里边放td
                    for(var k=0; k<7;k++){
                        //写td
                        arr[i][j].push({
                            colspan:1,
                            fullDay:this.calender[i * 7 + k].fullDay,
                            week:k
                        })
                    }
                }
            }
            console.log(arr);
            //处理事务  things
            this.things.forEach(item => {
                //开始日期时间戳
                var start=new Date(item.start.toString().substr(0,4),item.start.toString().substr(4,2)-1,item.start.toString().substr(6,2));
                // console.log(start);
                //结束时间的时间戳
                var end=new Date(item.end.toString().substr(0,4),item.end.toString().substr(4,2)-1,item.end.toString().substr(6,2));
                //结束时间减去开始时间计算经历了几天
                var during=(end - start) / 86400000 + 1;
                //一个信号量
                var flag=true;
                arr.forEach((week,weekidx) => {
                    //先遍历tr
                    for(var i=0;i<3; i++){
                        //遍历td
                        for(var j=0; j<7; j++){
                            if(week[i][j]){
                                //如果这个对象被删除了，就不存在了
                                if(week[i][j].fullDay==item.start && flag && !week[i][j].title){
                                    //第一周持续的时间
                                    var nowWeekDuring=during + week[i][j].week <= 7 ? during : 7-week[i][j].week;
                                    //设置title
                                    week[i][j].title=item.title;
                                    //设置持续时间
                                    week[i][j].colspan=nowWeekDuring;
                                    //删除后边的
                                    week[i].splice(j+1,nowWeekDuring-1);
                                    //上锁，防止出现3行
                                    flag=false;
                                    //以下内容就是后边跨周持续时间的内容，跟第一周没有关系了
                                    //信号量，剩余的事务持续时间
                                    var rest=during-nowWeekDuring;
                                    var count=0;
                                    while(rest>0){
                                        count++;

                                        var nextWeekDuring=rest>=7?7:rest;
                                        for(var n=0; n<3; n++){
                                            //判断 如果当前行有标题就去下一行
                                            if(arr[weekidx+count][n][0].title){
                                                continue;
                                            }
                                            //weekidx 是起始周  count垮了几周
                                            arr[weekidx+count][n][0].title=item.title;
                                            arr[weekidx+count][n][0].colspan=nextWeekDuring;
                                            arr[weekidx+count][n].splice(1,nextWeekDuring-1);
                                            break;
                                        }
                                        rest-=7;
                                    }
                                }
                            }
                        }
                    }
                })
            })
            return arr;
        }
    }
}
</script>