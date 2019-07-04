<template>
  <div class="hello">
    <div class="top">
      <img id="img1" @click="goBack()" src="../../static/img/back.png" alt>
      <p class="p1">食品安全监督公示</p>
    </div>
    <!-- 食品监督安全公示 -->
    <div class="safe">
      <p style="padding-left: 0.15rem;font-size:0.2rem;line-height:0.4rem;border-bottom:1px solid gray;">食品监督安全公示</p>
      <div style="line-height:0.4rem;padding-left:0.5rem;">
        <p>监督检查结果： <span style="color:red;">差</span></p>
        <p>检查日期：</p>
      </div>
    </div>
    <!-- 工商登记信息 -->
    <div class="dengji">
      <p style="padding-left: 0.15rem;font-size:0.2rem;line-height:0.4rem;border-bottom:1px solid gray;">工商登记信息</p>
      <p class="p2">企业名称</p>
      <p class="p2">工商执照注册号</p>
      <p class="p2">注册资本</p>
      <p class="p2">注册地址</p>
      <p class="p2">属地监管所</p>
      <p class="p2">法定代表人</p>
      <p class="p2">经营范围</p>
    </div>
    <!-- 餐饮许可证 -->
    <div class="xkz">
      <p style="padding-left: 0.15rem;font-size:0.2rem;line-height:0.4rem;border-bottom:1px solid gray;">餐饮许可证</p>
      <p class="p2">营业范围</p>
      <p class="p2">许可证有效期</p>
      <p class="p2">许可证号</p>
      <p class="p2">发证时间</p>
      <p class="p2">发证机关</p>
    </div>
    <div class="xkzs">
      <p style="padding-left: 0.15rem;font-size:0.2rem;line-height:0.4rem;">许可证书</p>
      <div style="background-color:gray">
        <img src="../../static/img/touxiang3.png" alt="">
        <img src="../../static/img/touxiang3.png" alt="">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "dianmian1",
  data() {
    return {
      datas: {}, //店面下标，坐标
      shangpu: [],
      shipin: ""
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  created() {
  }
};
</script>

<style>
.hello {
  text-align: left;
  color: black;
}
.top {
  /* border: 1px solid black; */
  position: fixed;
  width: 100%;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.2rem;
  color: white;
  top: 0;
  text-align: center;
  z-index: 15;
}
#img1{
  position: fixed;
  height: 0.3rem;
  top: 0.11rem;
  left: 0.11rem;
}
.safe,.dengji,.xkz,.xkzs{
  border-top: 0.1rem solid rgb(216, 210, 210);
  background-color: white;
}
.p2{
  line-height: 0.3rem;
  margin-left: 0.2rem;
}
</style>
