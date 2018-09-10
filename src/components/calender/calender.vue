<template>
    <div class="box">
        <div class="sun">
            <div class="s_header">
                <span>日历</span>
            </div>
            <div class="s_menlogy">
                <p>
                    <button>&lt;</button>
                    <span>2019年九月</span>
                    <button>&gt;</button>
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
                        <tr v-for="parse of 6">
                            <td v-for="item of 7">{{item * parse}}</td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                    <li>我的日程
                        <ul>
                            <li>关云长</li>
                            <li>张翼德</li>
                            <li>吕小布</li>
                        </ul>
                    </li>
                    <li>团队日程</li>
                    <li>成员日程</li>
                </ul>
            </div>
        </div>
        <div class="moon">
            <div class="m_header">
                <div class="m_h_left">
                    <span>日程安排</span>
                </div>
                <div class="m_h_center">
                    <button>&lt;</button>
                    <span>2019年九月</span>
                    <button>&gt;</button>
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
                        <tr v-for="parse of 6">
                            <td v-for="item of 7">{{item * parse}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
}
.moon_content{
    width: 1580px;
    height: calc(100% - 90px);
    border: 15px;
    background-color: #FDFDFD;
    border:15px solid #EEEEEE;
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
}
.m_header .m_h_left,.m_h_center{
    width: 543px;
}
.m_header .m_h_right{
    float:right;
    width: 474px;
}
</style>