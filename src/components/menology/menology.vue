<template>
    <div class="box">
        <div class="sun">
            <div class="s_header">
                <span>日历<i class="iconfont icon-rili"></i></span>
            </div>
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
                <p @click="mythingsshowfun"><i></i>我的日程<b></b></p>
                <transition name="fade">
                    <ul v-show="mythingsshow" transiton="fade">
                        <li v-for="item of mythings" @click="adddaythings(item)" ><i></i>{{item.title}}<b></b></li>
                    </ul>
                </transition>
                <p @click="teamthingsshowfun"><i></i>团队日程<b></b></p>
                <transition name="fade">
                    <ul v-show="teamthingsshow" transiton="fade">
                        <li v-for="item of teamthings" @click="adddaythings(item)"><i></i>{{item.title}}<b></b></li>
                    </ul>
                </transition>
                <p @click="peoplethingsshowfun"><i></i>成员日程<b></b></p>
                <transition name="fade">
                    <ul v-show="peoplethingsshow" transiton="fade">
                        <li v-for="item of peoplethings" @click="adddaythings(item)"><i></i>{{item.title}}<b></b></li>
                    </ul>
                </transition>
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
                    <button @click="newscheduleboxshow = true">新建日程</button>
                    <ul>
                        <li @click="changemonthweekdayfun(false)">月</li>
                        <li @click="changemonthweekdayfun(true)"><router-link :to="thingslist[0].url" class="fontweekday">周</router-link></li>
                        <li @click="changemonthweekdayfun(true)"><router-link :to="thingslist[1].url" class="fontweekday">日</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="moon_content">
                <sunday :theyear="theyear" :themonth="themonth" :downda="downda"></sunday>
                <div class="router_box" v-show="changemonthweekday" >
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="newschedule_box" v-show="newscheduleboxshow" @scroll="woListScroll($event)">
            <div class="newschedule" :class="{opennewschedule : opennewshow}">
                <h3>新建日程 <span @click="newscheduleboxshow = !newscheduleboxshow">X</span></h3>
                <input class="new_out_in" type="text" placeholder="日程安排,如下午02:00例会" v-model="addstr">
                <p>
                    <span>日历</span>
                    <input type="text" value="会议安排">
                </p>
                <p>
                    <span>开始日期</span>
                    <button>2018-09-12 08:10</button>
                    <span>结束日期</span>
                    <button>2018-09-12 08:40</button><br>
                    <span></span>全天
                </p>
                <p>
                    <span>参与人</span>
                    <i>M</i><b>+</b>
                </p>
                <p>
                    <span></span>
                    <a @click="opennewshow = !opennewshow">添加更多选项</a>
                </p>
                <div class="open_newschedule" v-show="opennewshow">
                    <p>
                        <span></span>打开日程排期小助手
                    </p>
                    <p><span>地点</span><input type="text"></p>
                    <p><span>重复</span><a href="#">从不重复</a></p>
                    <p><span>提醒</span><a >+添加新提醒</a></p>
                    <p><span>描述</span><input type="text"></p>
                    <p><span></span>仅参考者可见</p>
                </div>
                <p>
                    <!-- <span></span> -->
                    <button @click="postadddata">确定</button>
                    <button>取消</button>
                </p>
                <div class="posasmall">
                    <mysmall v-on:childaddstr="childaddstr"></mysmall>
                </div>
                <div class="rightposasmall">
                    <mysmall v-on:childaddstr="childaddstr"></mysmall>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sunday from "./sunday/sunday.vue";
import mysmall from "./small/small.vue";
export default {
    data(){
        return {
            year:2018,
            month:9,
            theyear:2018,
            themonth:9,
            addstr:"",
            monthlist:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            statesshow:0,
            monthshow:false,
            yearshow:false,
            changemonthweekday:false,
            opennewshow:false,
            newscheduleboxshow:false,
            mythingsshow:false,
            teamthingsshow:false,
            peoplethingsshow:false,
            mythings:[],
            teamthings:[],
            peoplethings:[],
            startenddata:[],
            downda:"my", 
            thingslist:[
                {
                    url:'/menology/week/',
                    title:"周",
                },{
                    url:'/menology/day/',
                    title:"日",
                }
            ]
        }
    },
    components:{
        sunday,mysmall
    },
    beforeCreate(){
        this.$store.dispatch("XGETALL");
    },
    updated() {
        // 发送默认 GETALL
        // console.log(this.$store.state.mythings,this.$store.state.teamthings,this.$store.state.peoplethings)   
        this.mythings = this.$store.state.mythings;
        this.teamthings = this.$store.state.teamthings;
        this.peoplethings = this.$store.state.peoplethings;
        // console.log("我执行了")
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
            // console.log(this.month)
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
                // console.log("我执行了");
            }else{
                this.yearshow = false;
                this.monthshow = false;
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
            // console.log(this.year);
            this.yearshow = false;
            this.monthshow = false;
            this.statesshow=0;
        },
        changemonthweekdayfun(obj){
            this.changemonthweekday = obj;
            // console.log(this.changemonthweekday);
        },
        mythingsshowfun(){
            this.mythingsshow = !this.mythingsshow;
            this.downda="my";
            console.log(this.downda)
        },
        teamthingsshowfun(){
            this.teamthingsshow = !this.teamthingsshow;
            this.downda="team";
            console.log(this.downda)
        },
        peoplethingsshowfun(){
            this.peoplethingsshow = !this.peoplethingsshow;
            this.downda="people";
            console.log(this.downda)
        },
        adddaythings(item){
            this.$store.dispatch("XCHANGE",item);
            this.downda="qita";
            this.theyear = item.start.toString().substr(0,4);
            this.themonth = item.end.toString().substr(4,2);
            console.log(this.theyear,this.themonth)
        },
        woListScroll(event) {
            if (event.srcElement.scrollHeight - (event.srcElement.scrollTop + event.srcElement.clientHeight) == 0) {
            　　console.log(event);
            }
            console.log(event);
        },
        postadddata(){
            var startnum;
            var endnum;
            var a = parseInt(this.startenddata[this.startenddata.length-1]);
            var b = parseInt(this.startenddata[this.startenddata.length-2]);
            if(a>b){
                startnum = a;
                endnum = b;
            }else{
                startnum = b;
                endnum =a;
            }
            var idnum = '';
            var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
            for(var i = 0; i < 8; i++) {
                idnum+= str[~~(Math.random() * str.length)]
            }
            var obj = {
                start:startnum,
                end:endnum,
                color:"red",
                id:idnum,
                title:this.addstr
            }
            this.$store.dispatch("XADDMY",obj);
            console.log(startnum,endnum);
        },
        childaddstr(data){
            console.log(data);
            this.startenddata.push(data);
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
    position: relative;
    .router_box{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color: #FDFDFD;
    }
}
.newschedule_box{
    position: absolute;
    left:-100px;
    top:-100px;
    width:2000px;
    height:1200px;
    background-color: rgba(178,178,178,.6);
    .newschedule{
        position: absolute;
        left:35%;
        top:200px;
        width: 660px;
        height: 483px;
        background-color: #fff;
        border-radius:10px;
        box-shadow:0 0 5px 5px rgb(178,178,178);
        h3{
            width: 100%;
            height:50px;
            padding:0 30px;
            line-height:50px;
            font-weight:400;
            border-bottom:1px solid #ccc;
            span{
                float:right;
                width:15px;
                height: 15px;
                margin: 0 50px 0 0;
            }
        }
        .new_out_in{
            display: block;
            width: 580px;
            padding-left:20px;
            height: 38px;
            margin:20px auto;
            line-height: 1.5;
            color: #333;
            background-color: #fff;
            background-clip: padding-box;
            border-radius: .25rem;
        }
        input{
            border: 1px solid #eee;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        input:hover{
            border-color:#22D7BB;
        }
        p{
            span:first-child{
                display:inline-block;
                width:120px;
                text-align:right;
                height:38px;
                margin:5px 0;
            }
        }
        p:nth-child(3){
            input{
                width:475px;
                height: 38px;
                padding-left:20px;
            }
        }
        p:nth-child(4){
            position: relative;
            button{
                display: inline-block;
                width: 180px;
                height: 38px;
                line-height: 38px;
                color: #333;
                background-clip: padding-box;
                border: 1px solid #eee;
                background-color: #fff;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            button:hover{
                border-color:#22D7BB;
            }
            span:nth-child(3){
                width:100px;
                display:inline-block;
                text-align:right;
            }
            span:last-child{
                display:inline-block;
                margin-left: 125px;
                margin-top: 10px;
                margin-right: 15px;
                vertical-align:bottom;
                width: 15px;
                height:15px;
                border:1px solid #ccc;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            span:last-child:hover{
                border-color:#22D7BB;
            }
        }
        p:nth-child(5){
            line-height:48px;
            i{
                display:inline-block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                border-radius: 30px;
                background-color: rgb(239, 126, 222);
                vertical-align:middle;
                text-align:center;
                color:#fff;
                margin: 0 5px;
                font-style:normal;
            }
            b{
                display:inline-block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                border-radius: 30px;
                border:1px dashed #ccc;
                vertical-align:middle;
                text-align:center;
                color:#ccc;
                margin: 0 5px;
                font-size:20px;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
            b:hover{
                border-color:#22D7BB;
                color:#22D7BB;
            }
        }
        p:nth-child(8){
            button{
                width: 106px;
                height: 38px;
                color: #fff;
                background-color: #22d7bb;
                border-color: #22d7bb;
                border-radius:20px;
                border:none;
                outline:none;
            }
            button:hover{
                box-shadow:0 0 5px 2px #22d7bb;
            }
            button:last-child{
                color:#ccc;
                background-color: #fff;
                margin-left: 10px;
            }
            button:last-child:hover{
                box-shadow:0 0 0 0 #fff;
                color:#22d7bb;
            }
        }
    }
    .opennewschedule{
        height:800px;
    }
    .open_newschedule{
        p:nth-child(1){
            line-height:48px;
        }
        p:nth-child(2){
            input{
                width:475px;
                height: 38px;
                padding-left:20px;
                margin-left: 10px;;
            }
        }
        p:nth-child(3){
            a{
                display:inline-block;
                width:445px;
                height: 38px;
                padding-left:20px;
                border:1px solid #ccc;
                margin-left: 10px;;
                line-height:38px;
                text-decoration:none;
                color:#666;
            }
            a:hover{
                border-color:#22d7bb;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
        }
        p:nth-child(4){
            a{
                display:inline-block;
                margin-left: 20px;
                color:#22d7bb;
                text-decoration:none;
            }
        }
        p:nth-child(5){
            input{
                width:475px;
                height: 38px;
                padding-left:20px;
                margin-left: 10px;
            }
        }
    }
}
.fontweekday{
    color:#333;
    text-decoration:none;
}
.fade-enter-active, .fade-leave-active {
    transition: all .5s ease 0s;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.posasmall{
    position: absolute;
    left:100px;
    top:222px;
    width:230px;
    height:300px;
    background-color: #fff;
}
.rightposasmall{
    position: absolute;
    right:100px;
    top:222px;
    width:230px;
    height:300px;
    background-color: #fff;
}
</style>