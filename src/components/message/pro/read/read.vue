<template>
    <div class="new_detail">
        <div class="new_deta_main">
           <div class="new_day">
                <hr>
                <div>
                   <span class="new_bind"> 9月10日 星期一</span>
                </div>
           </div>
           <div class="new_message">
               <div class="new_ra_he">
                   <span>M</span>
               </div>
               <div class="new_me_ri">
                   <span>M</span>
                   <em>10:30</em>
                   <div class="new_me_r">
                        <span>hello</span>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
em,
i {
  font-style: normal;
}
.new_detail {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../../../assets/desktop-5.jpg") no-repeat;
  background-size: cover;
}
.new_deta_main {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 1%;
  top: 3%;
  background: #ffffff;
}
.new_day {
  position: relative;
  height: 20px;
  margin: 35px 0;
}
.new_day div {
  text-align: center;
  line-height: 20px;
  position: absolute;
  width: 100%;
}
.new_day div span {
  margin: auto;
  padding: 0 20px;
  display: inline-block;
  background-color: #fdfdfd;
  font-size: 16px;
  color: #aaa;
}
hr {
  position: absolute;
  width: 100%;
  top: 10px;
  border: none;
  height: 1px;
  margin: 0;
  background-image: linear-gradient(to right, #fff, #eee 50%, #fff);
  background-repeat: no-repeat;
}
.new_message {
  width: 70%;
  height: 62px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
}
.new_ra_he {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #000;
  background-color: rgb(239, 126, 222);
  line-height: 38px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  float: left;
}
.new_me_ri {
  width: 80%;
  position: absolute;
  left: 50px;
  font-size: 13px;
}
.new_me_ri span {
  margin-right: 10px;
}
.new_me_ri em {
  font-size: 12px;
  color: #aaa;
}
.new_me_r {
  width: 100%;
  height: 40px;
  border: 1px solid #eee;
  border-left: 2px solid;
  border-left-color: rgb(247, 108, 170);
  background: transparent;
  margin-top: 5px;
}
.new_me_r span {
  line-height: 40px;
  font-size: 14px;
  padding-left: 20px;
}
</style>
