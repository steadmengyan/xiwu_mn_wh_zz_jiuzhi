<style lang='scss' scoped>
.s_menlogy{
    width:100%;
    height: 100%;
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
</style>
<template>
    <div class="s_menlogy">
        <p class="s_m_title">
            <button @click="minusmonth" class="lbtn">&lt;</button>
            <span @click="changemonthyear">{{year}}年{{month}}月</span>
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
                    <td v-for='i of 7' :class="{gray:calender[index * 7 + (i - 1)].cur}" @click="pulldata(calender[index * 7 + (i - 1)].day)">{{calender[index * 7 + (i - 1)].day}}</td>
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
</template>
<script>
export default {
    data(){
        return {
            year:2018,
            month:9,
            monthshow:false,
            yearshow:false,
            monthlist:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        }
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
        changemonthyear(){
            if(this.statesshow==0){
                this.statesshow++;
                this.monthshow = true;
            }else if(this.statesshow ==1){
                // statesshow
                this.yearshow = true;
                this.monthshow = false;
                this.statesshow=0;
                // console.log("我执行了");
            }else{
                this.yearshow = false;
                this.monthshow = false;
                this.statesshow=0;
            }
        },
        changmonth(index){
            this.month = index+1;
            // console.log(this.month)
            this.yearshow = false;
            this.monthshow = false;
            this.statesshow = 0;
        },
        changeyearfun(index){
            var numindex = 0;
            if(index<10){
                numindex = "0"+index;
            }else{
                numindex = index;
            }
            this.year = parseInt("20"+numindex);
            // console.log(this.year);
            this.yearshow = false;
            this.monthshow = false;
            this.statesshow=0;
        },
        pulldata(index){
            var indexnum;
            var monthnum;
            if(index<10){
                indexnum = "0"+index;
            }else{
                indexnum = index;
            }
            if(this.month<10){
                monthnum = "0"+this.month;
            }else{
                monthnum = this.month;
            }
            var str = this.year.toString()+monthnum.toString()+indexnum.toString();
            this.$emit("childaddstr",str)
        }
    }
}
</script>
