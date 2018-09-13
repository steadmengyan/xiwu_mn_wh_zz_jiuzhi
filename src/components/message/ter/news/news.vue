<style lang='scss' scoped>
.xinxi {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 15px solid #d3d3d3;
  padding-top: 15px;
  padding-left: 15px;
}
.x_xi {
  color: #b9b9b9;
  font-size: 15px;
}
.xinxi_footer {
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 170px;
  //   background-color: #f55;
}
.xinxi_inner {
  border-top: solid 1px #eee;
}
.xinxi_up {
  margin-left: 6px;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  height: 40px;
}
.xinxi_up > li {
  float: left;
  position: relative;
  display: block;
}
.xinxi_up > li > a {
  color: #aaa;
  padding: 8px 12px 8px 13px;
  position: relative;
  display: block;
}
.xinxi_down textarea {
  outline: none;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  resize: none;
  height: 63px;
  background: 0 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  padding: 0 20px;
  max-height: 124px;
}

.xinxi_con {
  height: 70%;
  margin-left: 10px;
  width: 100%;
  overflow: scroll;
}
h5 {
  font-weight: 100;
}
.xinxi_con li p {
  margin-top: 3px;
  font-size: 14px;
}
.xinxi_con li {
  padding: 6px;
  margin-top: 10px;
  list-style: none;
}
.xinxi_con li b {
  display: block;
  width: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  float: left;
  background: rgb(239, 126, 222);
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>

<template>
    <div class="xinxi">
        <div class="x_top">
            <p class="x_xi">企业公告由系统自动创建，所有企业成员都会自动加入到当前群组，该群组无法删除。</p>
        </div>

        <ul class="xinxi_con">
          <li v-for="item in rytodos">
            <b>M</b>
            <h5>
              {{item.name}} 
              <span>{{item.sj}}</span> 
              <span @click="del(item.id)">X</span>
            </h5>
            <p>{{item.title}}</p>
          </li>
        </ul>

        <div class="xinxi_footer">
            <div class="xinxi_inner">
                <ul class="xinxi_up">
                    <li>
                        <a href="jacascript:;">
                            <i class="iconfont icon-xiaolian"></i>
                        </a>
                    </li>
                    <li>
                        <a href="jacascript:;">
                            <i class="iconfont icon-noun__cc"></i>
                        </a>
                    </li>
                    <li>
                        <a href="jacascript:;">
                            <i class="iconfont icon-jiahao"></i>
                        </a>
                    </li>
                    <li>
                        <a href="jacascript:;">
                            <i class="iconfont icon-changyonggongju2"></i>
                        </a>
                    </li>
                </ul>

                
                 
                <div class="xinxi_down">
                    <textarea placeholder="按Enter发送消息" @keyup.enter="add" v-model="txt"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      txt: ""
    };
  },
  created() {
    // 发送默认 GETALL
    this.$store.dispatch("ryGETALL");
  },
  computed: {
    rytodos() {
      return this.$store.state.rytodos;
    }
  },

  methods: {
    del(id) {
      // 只需要一个id就行了
      this.$store.dispatch("ryDEL", {
        id: id
      });
    },
    add() {
      var date = new Date();
      this.sj = date.getHours() + ":" + date.getMinutes();
      // 如果为空 就 return 掉 什么都不做
      if (this.txt == "") return;
      // 随机一个8位id
      var id = "";
      var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
      for (var i = 0; i < 8; i++) {
        //~~ 相当于parseInt
        id += str[~~(Math.random() * str.length)];
      }
      // 发送add 新增命令
      this.$store.dispatch("ryADD", {
        name: this.name,
        title: this.txt,
        id: id,
        sj: this.sj
      });
      // 点击后 清空 文本框
      this.txt = "";
    }
  }
};
</script>




