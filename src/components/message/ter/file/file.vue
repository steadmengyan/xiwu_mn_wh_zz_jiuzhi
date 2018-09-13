<template>
    <div class="box">
        <div class="top">
            <div class="top_left">
                <a href="javascript:;">
                    <i class="wjj iconfont icon-folder"></i>
                    企业公告
                    <i class="jt iconfont icon-xiala"></i>
                </a>
            </div>
            <div class="top_right">
                <button class="xinjian">
                    <i class="iconfont icon-xinjian"></i>
                    新建
                </button>
                <div class="chuan">
                    <div class="chuan_box">
                        <a class="chuan_box_left"  @click="fileClick">
                            <i class="iconfont icon-web-icon-"></i>
                            上传文件
                            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
                        </a>
                        <a class="chuan_box_right" @click="showToggle">
                            <i class="iconfont icon-arrow-bottom"></i>
                        </a>
                    </div>
                </div>
                <div v-show="isShow" class="dn">
                    <div class="dn_box">
                        <ul>
                            <li>
                                <a href="javascript:;" @click="fileClick">
                                   <div class="upload_warp_left">
                                      上传文件
                                    </div>
                                    <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    上传文件夹
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_box">
              <div class="list">
                <div class="list_name">
                  文件名
                </div>
                <div class="list_size">
                  大小
                </div>
                <div class="list_people">
                  更新人
                </div>
                <div class="list_date">
                  更新时间
                  <i class="iconfont icon-arrow-bottom"></i>
                </div>
                <div class="list_del"></div>
              </div> 
              <div v-for="item in wangpanfile" class="list">
                  <div class="list_name">
                    <i class="iconfont icon-folder" :style="{color:item.filebgc+''}"></i>
                    {{item.filename}}
                  </div>
                  <div class="list_size">
                    -
                  </div>
                  <div class="list_people">
                    <span class="names">M</span>
                    M
                  </div>
                  <div class="list_date">
                    {{item.datefile}}
                  </div>
                  <div class="list_del">
                    <a href="javascript:;" :download="item.name">
                      <i class="iconfont icon-xiazai"></i>
                    </a>
                    <i @click="tanToggle" >x</i>
                  </div>
                  <div class="tan" v-show="tanShow">
                  <div class="tan_box">
                    <div class="tan_box_top">
                      <h3>删除文件夹</h3>
                      <a href="javascript:;">
                        <i class="iconfont icon-x" @click="delToggle">x</i>
                      </a>
                    </div>
                    <div class="tan_box_bottom">
                      <div class="queren">
                        确认删除文件:
                        <span class="filen">{{item.filename}}</span>
                        ?
                      </div>
                      <div class="tan_shan">
                        <button @click="del(item.id)" class="shanchu">确认删除</button>
                        <button @click="delToggle" class="quxiao">取消</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      imgList: [],
      size: 0,
      month: "",
      hao: "",
      hour: "",
      minu: "",
      filename: "",
      state: "all",
      tanShow: false,
      filepath: ""
    };
  },
  created() {
    // 发送默认 GETALL
    this.$store.dispatch("GETFILE");
  },
  computed: {
    wangpanfile() {
      console.log(this.$store.state.wangpanfile, 111);
      // 控制显示已做未做的事
      if (this.state == "all") {
        return this.$store.state.wangpanfile;
      }
    }
  },
  methods: {
    showToggle: function() {
      this.isShow = !this.isShow;
    },
    tanToggle: function() {
      this.tanShow = !this.tanShow;
    },
    delToggle: function() {
      this.tanShow = !this.tanShow;
    },
    add() {
      // 发送add 新增命令
      var date = new Date();
      this.month = date.getMonth();
      this.hao = date.getDate();
      this.hour = date.getHours();
      this.minu = date.getMinutes();
      let r, g, b;
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      let rgb = "rgb(" + r + "," + g + "," + b + ")";

      var id = "";
      var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
      for (var i = 0; i < 8; i++) {
        //~~ 相当于parseInt
        id += str[~~(Math.random() * str.length)];
      }
      this.$store.dispatch("ADDFILT", {
        filename: this.filename,
        id: id,
        datefile:
          this.month +
          "月" +
          this.hao +
          "日" +
          " " +
          this.hour +
          ":" +
          this.minu,
        filebgc: rgb
      });
    },
    del(id) {
      // 只需要一个id就行了
      this.$store.dispatch("DELFILE", {
        id: id
      });
      console.log("删除");
      this.tanShow = !this.tanShow;
    },
    fileClick() {
      document.getElementById("upload_file").click();
      console.log(this.imgList);
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        this.fileAdd(files[i]);
        this.add();
      }
    },
    fileAdd(file) {
      this.size = this.size + file.size;
      console.log(file.name);
      this.imgList.push({
        file
      });
      this.filename = file.name;
    }
  }
};
</script>

<style lang = 'scss' scoped>
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #333;
}
.box {
  height: 100%;
  width: 100%;
  .top {
    width: 100%;
    height: 50px;
    margin: 0;
    padding: 0 15px;
    position: relative;
    background: rgba(253, 253, 253, 0.95);
    .top_left {
      float: left;
      color: #333;
      line-height: 50px;
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      a {
        font-size: 14px;
        white-space: nowrap;
        .wjj {
          color: rgb(34, 215, 187);
          font-size: 20px;
          margin: 0 10px 4px 0;
        }
        .jt {
          line-height: 0;
          vertical-align: middle;
          margin-left: 5px;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
    .top_right {
      float: right;
      right: 0;
      line-height: 48px;
      .xinjian {
        padding: 3px 20px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #22d7bb;
        background-color: #fff;
        border: 1px solid #22d7bb;
        border-radius: 4px;
        i {
          line-height: 20px;
          font-size: 14px;
        }
      }
      .chuan {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 20px;
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        border-radius: 10px;
        .chuan_box {
          /* float: left; */
          line-height: 20px;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          line-height: 20px;
          .chuan_box_left {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            padding: 3px 10px;
            margin-left: 0;
            touch-action: manipulation;
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            cursor: pointer;
            i {
              color: #fff;
            }
          }
          .chuan_box_right {
            border-left: none;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            padding: 3px 10px;
            margin-left: -1px;
            i {
              color: #fff;
            }
          }
        }
      }
      .dn {
        top: 29.4688px;
        right: 26.0156px;
        border-radius: 0;
        border: 0;
        min-width: 230px;
        z-index: 1100;
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.18);
        position: absolute;
        text-align: left;
        font-size: 14px;
        background: #fff;
        .dn_box {
          display: block;
          padding: 5px 0;
          min-width: 240px;
          ul {
            box-sizing: border-box;
            li {
              display: block;
              padding: 0;
              margin: 0 0 2px;
              cursor: pointer;
              list-style: none;
              &:hover {
                background: #f3f3f3;
                a {
                  color: #333;
                  padding-left: 26px;
                }
              }
              a {
                display: block;
                padding: 5px 18px;
                line-height: 30px;
                color: #666;
                text-decoration: none;
                box-sizing: border-box;
                line-height: 30px;
                color: #666;
                transition: padding-left 0.2s;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    padding-right: 15px;
    position: relative;
    overflow-y: auto;
    overflow-x: auto;
    padding: 15px 15px 0;
    width: 100%;
    height: calc(100% - 50px);
    .bottom_box {
      margin-bottom: 15px;
      width: 100%;
      height: 98%;
      background: #fdfdfd;
      div {
        float: left;
      }
      .list {
        line-height: 27px;
        color: #666;
        position: relative;
        padding: 14px 35px;
        font-size: 14px;
        box-sizing: border-box;
        width: 100%;
        border-bottom: solid 1px #eee;
        &:hover {
          box-shadow: 0 0 8px 2px #eee;
          background: 0 0;
          .list_del {
            display: block;
          }
        }
        .list_name {
          width: 48%;
        }
        .list_size {
          width: 10%;
        }
        .list_people {
          width: 15%;
          .names {
            background: rgb(34, 215, 187);
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            border-radius: 24px;
            text-align: center !important;
            overflow: hidden;
            zoom: 1;
            vertical-align: middle;
            color: #fff !important;
            text-shadow: transparent 0 0 0;
            padding: 0 !important;
          }
        }
        .list_date {
          width: 17%;
          i {
            font-size: 12px;
            color: #22d7bb;
          }
        }
        .list_del {
          width: 10%;
          text-align: center;
          display: none;
          i {
            color: #22d7bb;
          }
        }
      }
    }
  }
}
.tan {
  width: 100%;
  height: 100%;
  transition: opacity 0.15s linear;
  z-index: 1050;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(121, 122, 126, 0.2);
  .tan_box {
    float: none !important;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
    position: relative;
    display: flex;
    margin: 50px auto;
    flex-direction: column;
    width: 660px;
    height: 200px;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0 solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 0.3rem;
    .tan_box_top {
      padding: 0 1.875rem;
      align-items: center;
      height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      a {
        color: #ddd;
        line-height: 50px;
        i {
          font-size: 16px;
        }
      }
      h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0;
        line-height: 1.5;
        color: #333;
      }
    }
    .tan_box_bottom {
      position: relative;
      padding: 1.25rem 1.875rem 1.875rem;
      float: none !important;
      .queren {
        color: #333;
        font-size: 14px;
        float: none !important;
      }
      .tan_shan {
        float: none !important;
        button {
          display: inline-block;
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;
          padding: 0.469rem 26px;
          font-size: 0.875rem;
          line-height: 1.5;
          min-width: 106px;
          border-radius: 1.25rem;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .shanchu {
          cursor: pointer;
          color: #fff;
          background-color: #ff5b57;
          border-color: #ff5b57;
        }
        .quxiao {
          margin-left: 10px;
          cursor: pointer;
          color: #aaa;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
