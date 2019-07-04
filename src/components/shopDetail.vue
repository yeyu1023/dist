<template>
  <div class="hello">
      
    <div class="top">
      <img id="img1" @click="goBack()" src="../../static/img/back.png" alt="">
      <p class="p1">商家詳情</p>
    </div>
    <!-- 活动与属性 -->
    <div class="huodong">
      <p style="color:black;font-size:0.2rem;line-height:0.4rem;border-bottom:1px solid gray;">活动与属性</p>
      <p>
        <span :style="'margin-right:0.1rem;background-color:#'+datas.activities[0].icon_color">{{datas.activities[0].icon_name}}</span>
        {{datas.activities[0].description}}<span>(APP专享)</span>
      </p>
      <p>
        <span :style="'margin-right:0.1rem;background-color:#'+datas.supports[0].icon_color">{{datas.supports[0].icon_name}}</span>
        {{datas.supports[0].description}}<span>(APP专享)</span>
      </p>
      <p>
        <span :style="'margin-right:0.1rem;background-color:#'+datas.supports[1].icon_color">{{datas.supports[1].icon_name}}</span>
        {{datas.supports[1].description}}<span>(APP专享)</span>
      </p>
      <p><span :style="'margin-right:0.1rem;background-color:#'+datas.supports[0].icon_color">票</span>该商家支持开发票，请在下单时填好发票抬头<span>(APP专享)</span></p>
    </div>
    <!-- 食品监督安全公示 -->
    <div class="safe">
      <router-link to="dianmian1">
        <p style="color:black;font-size:0.2rem;line-height:0.4rem;border-bottom:1px solid gray;">食品监督安全公示
           <span style="float:right;font-size:0.15rem;color:rgb(105, 103, 103)">企业认证详情 
             <img class="img1" style="margin-top: 0.03rem;" src="../../static/img/iconfontjiantou2.png" alt="">
             </span></p>
      </router-link>
      <div style="line-height:0.4rem;padding-left:0.5rem;">
        <p>监督检查结果： <span style="color:red;">差</span></p>
        <p>检查日期：</p>
      </div>
    </div>
    <!-- 商家信息 -->
    <div class="sjxx">
      <p style="color:black;font-size:0.2rem;line-height:0.4rem;border-bottom:1px solid gray;">商家信息</p>
      <p class="sjxx_a">{{datas.name}}</p>
      <p class="sjxx_a">地址：{{datas.address}}</p>
      <p class="sjxx_a">营业时间：[{{datas.opening_hours[0]}}]</p>
      <!-- <router-link to=""> -->
        <p class="sjxx_a">营业执照<img class="img1" src="../../static/img/iconfontjiantou2.png" alt="">
          </p> 
      <!-- </router-link> -->
      <!-- <router-link to=""> -->
        <p class="sjxx_a">餐饮服务许可证
          <img class="img1" src="../../static/img/iconfontjiantou2.png" alt="">
        </p>
         
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopDetail',
  data () {
    return {
        datas:{},
    }
  },
  created(){
    this.datas = this.$route.query;
    console.log(this.datas);
    this.huoqu();
  },
  methods:{
    // 后退
    goBack(){
      this.$router.back();
    },
    // 获取餐馆详情 需要参观ID
    huoqu(){
      const api = "https://elm.cangdu.org/shopping/restaurant/"+this.datas.id;
      this.$http({
          url:api,
          method:"get"
      }).then(res=>{
        console.log(api);
        this.datas = res.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: left;
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
.huodong{
  border-top: 0.1rem solid rgb(216, 210, 210);
  background-color: white;
  line-height: 0.2rem;
}
.huodong p{
  padding: 0.1rem;
  color: rgb(105, 103, 103);
}
.huodong p span{
  color: white;
}
.safe{
  border-top: 0.1rem solid rgb(216, 210, 210);
  background-color: white;
}
.sjxx{
  border-top: 0.1rem solid rgb(216, 210, 210);
  background-color: white;
}
.sjxx_a{
  color: black;
  width: 100%;
  line-height: 0.5rem;
  border-bottom: 0.1px solid rgb(216, 210, 210);
}
.img1{
  width: 0.3rem;
  vertical-align: bottom;
  float: right;
  margin-right: 0.05rem;
  margin-top: 0.08rem;
}
</style>
