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
.thingsshow_box{
    position: absolute;
    left:-300px;
    top:-200px;
    width:2000px;
    height:1200px;
    background-color: rgba(178,178,178,.6);
    border-radius:10px;
    .thingsshow{
        width: 980px;
        height: 325px;
        background-color: #fff;
        position: absolute;
        left:25%;
        top:200px;
        .th_head{
            height:60px;
            width: 100%;
            border-bottom:1px solid #ccc;
            line-height:60px;
            .th_head_left{
                float: left;
                width:100px;
                text-align:center;
            }
            .th_close{
                float:right;
                margin: 10px 30px 0 0;
            }
        }
        .th_content{
            width: 100%;
            height:200px;
            p:first-child{
                height: 50px;
                line-height:50px;
                button{
                    width: 108px;
                    height:38px;
                    border:1px solid #ccc;
                    border-radius:20px;
                    background-color: #fff;
                    outline:none;
                }
                button:first-child{
                    margin-left: 500px;
                    border-color:#22D7BB;
                    color:#22D7BB;
                }
                button:last-child{
                    background-color: #FF5B57;
                    border-color:#FF5B57;
                    color:#fff;
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
                    <td v-for="txt of child" @click="thingsshowfun(txt)" :style="{width:223 * txt.colspan + 'px',height:'30px',background:txt.color}" :colspan="txt.colspan" :class="{cur:txt.title}" @dblclick="updataboxshow">{{txt.title}}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="thingsshow_box" v-show="thingsshowshow">
        <div class="thingsshow">
            <div class="th_head">
                <span class="th_head_left">345</span>
                <span class="th_close" @click="thingsshowshow = false">X</span>
            </div>
            <div class="th_content">
                <p>345 <button>参加</button> <button>暂定</button> <button @click="delfun">删除</button></p>
                <p>--</p>
                <!-- <p>全天</p>
                <p>
                    <span>组织人</span>
                </p>
                <p>
                    <span>参与人</span>
                </p>
                <p>
                    <span>描述</span>
                </p>
                <div>
                    <span>评论</span>
                    <span>赞</span>
                </div> -->
            </div class="th_bottom">
                <span>M</span>
                <input type="text" placeholder="评论内容,按ctrl和enter发送">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:["theyear","themonth","downda"],
    data(){
        return {
            year:2018,
            month:9,
            nr:'',
            st:'',
            ed:'',
            things:[
                {
                "title": "貂蝉",
                "start": 20180907,
                "end": 20180909,
                "color": "#098876",
                "id": 1,
                "isshow": true
                },
                {
                "title": "高圆圆",
                "start": 20180920,
                "end": 20180925,
                "color": "#123456",
                "id": 3,
                "isshow": true
                },
                {
                "start": 20180925,
                "end": 20180928,
                "color": "#234356",
                "id": "o1e4yexi",
                "title": "孙尚香",
                "isshow": true
                },
                {
                "start": 20180814,
                "end": 20180817,
                "color": "red",
                "id": "h0bp33hu",
                "title": "杨贵妃",
                "isshow": true
                }
            ],
            downdata:"",
            onlyshowone:[],
            thingsshowshow:false,
            sundayitem:{}
        }
    },
    beforeCreate(){
        // 鸟也执行不了
        console.log("我我我执行了");
        return this.$store.dispatch("XGETALL");
    },
    created() {
        // 发送默认 GETALL
        // console.log(this.mythings,this.teamthings,this.peoplethings)
        // console.log(this.downdata)
        this.downdata = this.downda;
        if(this.downda=="my"){
            this.things = this.$store.state.mythings;
            console.log(this.things);
        }else if(this.downda=="team"){
            this.things = this.$store.state.teamthings;
            console.log(this.things);
        }else if(this.downda=="people"){
            this.things = this.$store.state.peoplethings;
            console.log(this.things);
        }else if(this.downda=="qita"){
            this.things = this.$store.state.actionthings;
            console.log(this.things);
        }
        // this.$store.dispatch("XGETALL");
        // if(this.downdata=="my"){
        //     this.things = this.$store.state.mythings;
        //     console.log(this.things,this.$store.state.mythings);
        // }else if(this.downdata=="team"){
        //     this.things = this.$store.state.teamthings;
        //     console.log(this.things);
        // }else{
        //     this.things = this.$store.state.peoplethings;
        //     console.log(this.things);
        // }
        // console.log("我执行了");
    },
    updated(){
        console.log(this.downdata);
        this.downdata = this.downda;
        if(this.downda =="my"){
            this.things = this.$store.state.mythings;
            // console.log(this.things,this.$store.state.mythings);
        }else if(this.downda =="team"){
            this.things = this.$store.state.teamthings;
            // console.log(this.things);
        }else if(this.downda=="people"){
            this.things = this.$store.state.peoplethings;
            console.log(this.things);
        }else{
            this.things = this.$store.state.actionthings;
            console.log(this.things);
            // this.year = this.things.toString().substr(0,4);
            // this.month = this.things.toString().substr(4,2);
        }
    },
    computed:{
        calender(){
            this.year = this.theyear;
            this.month = this.themonth;
            this.downdata = this.downda;
            this.onlyshowone = this.$store.state.actionthings;
            // if(this.onlyshowone.length>0){
            //     this.things = this.onlyshowone;
            //     // var start=new Date(item.start.toString().substr(0,4),item.start.toString().substr(4,2)-1,item.start.toString().substr(6,2));
            //     this.year = this.things.toString().substr(0,4);
            //     this.month = this.things.toString().substr(4,2);
            // }
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
            // console.log(arr);
            return arr;
        },
        schedule(){
            // console.log(this.downdata,this.downda,this.things);
            
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
            // console.log(arr);
            // console.log(this.things);
            //处理事务  things
            console.log(this.things);
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
                                if(week[i][j].fullDay==item.start && flag && !week[i][j].title&& item.isshow){
                                    //第一周持续的时间
                                    var nowWeekDuring=during + week[i][j].week <= 7 ? during : 7-week[i][j].week;
                                    //设置title
                                    week[i][j].title=item.title;
                                    week[i][j].color=item.color;
                                    week[i][j].id=item.id;
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
                                            arr[weekidx+count][n][0].color=item.color;
                                            arr[weekidx+count][n][0].id=item.id;
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
            console.log(arr,this.things);
            return arr;
        },
        theupdata(){
            if(this.downdata=="my"){
                this.things = this.$store.state.mythings;
            }else if(this.downdata=="team"){
                this.things = this.$store.state.teamthings;
            }else{
                this.things = this.$store.state.peoplethings;
            }
            console.log(this.things);
        }
    },
    methods:{
        updataboxshow(){
            this.$emit("sunchildaddstr","true");
        },
        thingsshowfun(item){
            if(item.title){
                this.thingsshowshow = true;
                this.sundayitem = item;
                // console.log()
            }else{
                console.log(item);
            }
        },
        delfun(){
            var sundaydata;
            if(this.downdata=="my"){
                sundaydata = "myxthings";
            }else if(this.downdata == "team"){
                sundaydata = "teamthings";
            }else{
                sundaydata = "peoplethings";
            }
            this.thingsshowshow = false;
            this.$store.dispatch("XDELDATA",{
                sunname:sundaydata,
                sundata:this.sundayitem
            });                
        }
    }
}
</script>