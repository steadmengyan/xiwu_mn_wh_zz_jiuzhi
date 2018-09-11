<template>
    <div class="box">
        <div class="sun">
            <div class="s_header">
                <span>日历<i class="iconfont icon-rili"></i></span>
            </div>
            <div class="s_menlogy">
                <p class="s_m_title" @click="changemonthyear">
                    <button @click="minusmonth" class="lbtn">&lt;</button>
                    <span>{{year}}年{{month}}月</span>
                    <button @click="addmonth" class="rbtn">&gt;</button>
                </p>
                <table>
                    <thead>
                        <tr>
                            <td>日</td>
                            <td>一</td>
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(item,index) of calender.length / 7'>
                            <td v-for='i of 7' :class="{gray:calender[index * 7 + (i - 1)].cur}">{{calender[index * 7 + (i - 1)].day}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="changemonth" v-show="monthshow">
                    <ul>
                        <li v-for="(item,index) of monthlist" @click="changmonth(index)">{{item}}</li>
                    </ul>
                </div>
                <div class="changeyear" v-show="yearshow">
                    <ul>
                        <li v-for="(item,index) of returnyear" @click="changeyearfun(index+1)">20{{item}}</li>
                    </ul>
                </div>
            </div>
            <div class="myday">
                <p><i></i>我的日程<b></b></p>
                <ul>
                    <li v-for="item of things"><i></i>{{item}}<b></b></li>
                </ul>
                <p><i></i>团队日程<b></b></p>
                <p><i></i>成员日程<b></b></p>
            </div>
        </div>
        <div class="moon">
            <div class="m_header">
                <div class="m_h_left">
                    <span>日程安排</span>
                </div>
                <div class="m_h_center">
                    <button @click="theminusmonth"  class="lbtn">&lt;</button>
                    <span>{{theyear}}年{{themonth}}月</span>
                    <button @click="theaddmonth"  class="rbtn">&gt;</button>
                </div>
                <div class="m_h_right">
                    <button>新建日程</button>
                    <ul>
                        <li>月</li>
                        <li>周</li>
                        <li>日</li>
                    </ul>
                </div>
            </div>
            <div class="moon_content">
                <sunday :theyear="theyear" :themonth="themonth" ></sunday>
            </div>
        </div>
    </div>
</template>
<script>
import sunday from "./sunday/sunday.vue";
export default {
    data(){
        return {
            year:2018,
            month:9,
            theyearandmonth:{
                theyear:"2018",
                themonth:"9"
            },
            theyear:2018,
            themonth:9,
            monthlist:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            statesshow:0,
            monthshow:false,
            yearshow:false,
            things:[
                "貂蝉",
                "杨贵妃",
                "高圆圆",
                "西施"
            ]
        }
    },
    components:{
        sunday
    },
    computed:{
        calender(){
            var arr=[];
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
            // console.log(this.returnyear)
            return arr;
        },
        returnyear(){
            var thisyear = parseInt(this.year.toString().substr(2,4));
            // console.log(thisyear);
            var a = 5;
            var b = 0;
            var returny = [];
            while(a--){
                b++;
                // console.log(thisyear,b*20)
                if(thisyear<=b*20){
                    if(b=1){
                        for(var c = 1;c<21;c++){
                            if(c<10){
                                var d = "0"+c;
                                returny.push(d);
                                // console.log(d);
                            }else{
                                returny.push(c);
                            }
                        }
                        return returny
                    }else{
                        for(var c = b-20;c<b+1;c++){
                            returny.push(c);
                        }
                        return returny
                    }
                }
            }
            // return thisyear;
        }
    },
    methods:{
        minusmonth(){
            this.month--;
            if(this.month<1){
                this.year--;
                this.month = 12;
            }
        },
        addmonth(){
            this.month++;
            if(this.month>12){
                this.year++;
                this.month = 1;
            }
        },
        theminusmonth(){
            this.themonth--;
            if(this.themonth<1){
                this.theyear--;;
                this.themonth = 12;
            }
        },
        theaddmonth(){
            this.themonth++;
            if(this.themonth>12){
                this.theyear++;
                this.themonth = 1;
            }
        },
        changmonth(index){
            this.month = index+1;
            console.log(this.month)
            this.yearshow = false;
            this.monthshow = false;
            this.statesshow = 0;
        },
        changemonthyear(){
            if(this.statesshow==0){
                this.statesshow++;
                this.monthshow = true;
            }else if(this.statesshow ==1){
                // statesshow
                this.yearshow = true;
                this.monthshow = false;
                this.statesshow=0;
            }else{
                this.statesshow=0;
            }
        },
        changeyearfun(index){
            var numindex = 0;
            if(index<10){
                numindex = "0"+index;
            }else{
                numindex = index;
            }
            this.year = parseInt("20"+numindex);
            console.log(this.year);
        }
    }
}
</script>
<style lang="scss" scoped >
.box{
    width: 100%;
    height: 100%;
    left: -1px;
    background: #FCFCFC;
    .sun{
        width: 222px;
        height:100%;
        float: left;
        border-right:1px solid #ccc;
    }
    .moon{
        float:right;
        width: 1610px;
        height: 100%;
    }
}
.sun .s_header{
    height: 50px;
    span{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    a{
        float:right;
    }
}
.sun .s_menlogy{
    width: 202px;
    height: 240px;
    padding: 10px;
    text-align:center;
    position: relative;
    .s_m_title{
        font-weight:600;
    }
    .s_m_title button{
        width: 24px;
        height: 27px;
        border:none;
        outline:none;
        background-color: #FCFCFC;
    }
    .s_m_title button.lbtn{
        float: left;
    }
    .s_m_title button.rbtn{
        float: right;
    }
    table{
        width: 100%;
        font-weight:100;
        font-size:13px;
    }
    table td{
        height:27px;
    }
    table td.gray{
        color:#ccc;
    }
    .changemonth{
        position: absolute;
        top:45px;
        left:0;
        width: 100%;
        height:200px;
        background-color:#FCFCFC;
        li{
            width:50px;
            height:20px;
            margin:10px;
            border:1px solid #ccc;
            display:inline-block;
        }
    }
    .changeyear{
        position: absolute;
        top:45px;
        left:0;
        width: 100%;
        height:200px;
        background-color:#FCFCFC;
        li{
            width:40px;
            font-size:14px;
            height:20px;
            margin:5px;
            border:1px solid #ccc;
            display:inline-block;
        }
    }
}
.myday{
    width:100%;
    text-align:left;
    p{
        width: 98%;
        height:40px;
        border-right:2% solid transparent;
        line-height:40px;
        // position: relative;
    }
    p:hover{
        background-color: #E7F9F6;
        border-right:5px solid #22D7BB;
        box-shadow:0 0 5px 2px #ccc;
    }
    ul li{
        height:40px;
        line-height:40px;
        i{
            margin: 5px 10px 0 50px;
            background-color: yellow;
        }
    }
    ul li:hover{
        box-shadow:0 0 5px 2px #ccc;
    }
    i{
        display:inline-block;
        width: 14px;
        height: 15px;
        margin: 5px 10px 0 10px;
    }
}
.m_header{
    width: 100%;
    height:50px;
    div{
        float: left;
        line-height:50px;
        ul{
            float: right;
            width: 214px;
            height: 26px;
            margin-top: 10px;
            line-height:26px;
            text-align:center;
            li{
                float:left;
                width:70px;
                height: 28px;
                border:1px solid #22d7bb;
                border-right:none;
            }
            li:nth-child(3){
                border-right:1px solid #22d7bb;
            }
        }
    }
    div.m_h_left{
        span{
            margin-left: 60px;
            position: relative;
        }
        span:before{
            content:"";
            width:25px;
            height:25px;
            position:absolute;
            left:-25px;
            top:0;
        }
    }
    div.m_h_center{
        text-align:center;
        button{
            width: 24px;
            height: 27px;
            border:none;
            outline:none;
            background-color: #FCFCFC;
        }
        button.lbtn{
            display:inline-block;
        }
        button.rbtn{
            display:inline-block;
        }
    }
    div.m_h_right{
        button{
            display:inline-block;
            color: #fff;
            background-color: #22d7bb;
            border-color: #22d7bb;
            width: 116px;
            height: 28px;
            border-radius:10px;
            border:none;
            outline:none;
        }
    }
}
.m_header .m_h_left,.m_h_center{
    width: 543px;
}
.m_header .m_h_right{
    float:right;
    width: 474px;
    color:#666;
}
.moon_content{
    width: 1580px;
    height: calc(100% - 90px);
    border: 15px;
    background-color: #FDFDFD;
    border:15px solid #EEEEEE;
}
</style>