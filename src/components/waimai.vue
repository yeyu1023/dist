<template>
  <div class="hello">
    <div class="top">
      <img id="img1" @click="goBack()" src="../../static/img/fangdajing.png" alt>
      <p class="p1">{{datas.name}}</p>
      <router-link :to="'/mine?'"></router-link>
      <img v-if="!bool" id="img2" src="../../static/img/imgs/wd1.png" alt>
      <div v-if="bool" class="a1">
        <router-link style="color:white;" to="/register">登录/注册</router-link>
      </div>
    </div>

    <!-- 中间轮播部分 -->
    <div id="center" v-if="show">
      <!-- 左边 -->
      <swiper :options="swiperOption" ref="mySwiper" id="lunbo">
        <swiper-slide>
          <div id="one">
            <div :key="i" v-for="(v,i) in bo1" class="bo1">
              <router-link
                :to="'/lunboDetail?detail=' + i + '&latitude=' + latitude + '&longitude=' + longitude + '&name=' + v.title"
              >
                <div class="bo2">
                  <img :src="'https://fuss10.elemecdn.com'+v.image_url">
                </div>
                <div class="bo3">{{v.title}}</div>
              </router-link>
            </div>
          </div>
        </swiper-slide>
        <!-- 右边 -->
        <swiper-slide>
          <div id="two">
            <div :key="i" v-for="(v,i) in bo2" class="bo1">
              <router-link
                :to="'/lunboDetail?detail=' + i + '&latitude=' + latitude + '&longitude=' + longitude"
              >
                <div class="bo2">
                  <img :src="'https://fuss10.elemecdn.com'+v.image_url">
                </div>
                <div class="bo3">{{v.title}}</div>
              </router-link>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>

    <!-- 下面商铺部分 -->
    <div id="sps_top">
      <img src="../../static/img/Group-.png">附近商家
    </div>
    <div id="sps">
      <div class="shangpu" :key="i" v-for="(v,i) in shangpu">
        <!-- 下标 id 坐标传过去 -->
        <router-link
          :to="'/dianmian?detail=' + i + '&latitude=' + latitude + '&longitude=' + longitude + '&id=' +v.id"
        >
          <div class="shangpu-left">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path">
          </div>
          <div class="shangpu-right">
            <h4 style="margin-bottom:0.1rem;" class="pp">
              <span>品牌</span>
              {{v.name}}
              <ul class="ul1">
                <li :key="index" v-for="(value,index) in v.supports">{{value.icon_name}}</li>
              </ul>
            </h4>
            <h5 style="margin-bottom:0.1rem;">
              <!-- 评分 -->
              <span
                style="color:#57A9FF;float:right;padding:0.03rem;margin-left:0.08rem"
              >{{v.supports[1].name}}</span>
              <span
                style="background:#57A9FF;color:white;float:right;padding:0.03rem;">
                {{v.delivery_mode.text}}</span>
              <el-rate v-model="v.rating" disabled text-color="#ff9900" style="display:inline" show-score></el-rate><br>
              <br><span>月售{{v.recent_order_num}}单</span>
            </h5>
            <h5 style="margin-bottom:0.1rem;">
              <!-- 起送 -->
              <span>￥{{v.float_minimum_order_amount}}起送/{{v.piecewise_agent_fee.tips}}</span>
              <span style="float:right;color:blue;padding:0.02rem;">40分钟</span>
              <span style="float:right;padding:0.02rem;">10公里 /</span>
            </h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

<script>
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "waimai",
  data() {
    return {
      msg: "",
      show: false,
      bool: false, //未登录时为false
      datas: {}, //接收传过来的数据；用户界面过来的加.name接收传过来的用户名,地址搜索进来的加.geohash接收传过来的地址
      latitude: "",
      longitude: "",
      foodData1: [],
      shangpu: [], //接收商铺信息，还要传到详细页面
      indexa: {}, //传到详细页面的shangpu的下标
      a: [],
      bo1: [],
      bo2: [],
      b: [],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数  swiper4.x
        // ...
        // initialSlide: 0,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  methods: {
    goBack() {
      // 返回上一个历史记录
      // this.$router.go(-1);
      // 或者
      this.$router.back();
    },
    jiazaiOKtop1() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(res => {
        //  加载完成，取消加载动画
        loadingInstance.close();
        console.log("加载完页面，请求的外面数据");
        console.log(res.data);
        this.foodData1 = res.data;
        this.show = true;
        for (var i = 0; i < this.foodData1.length / 2; i++) {
          this.$set(this.bo1, i, this.foodData1[i]);
        }
        var l = -1;
        for (var i = 8; i < this.foodData1.length; i++) {
          l++;
          this.$set(this.bo2, l, this.foodData1[i]);
        }
      });
    },
    jiazaiOKtop2() {
      const api2 = "https://elm.cangdu.org/shopping/restaurants?latitude=" + this.latitude + "&longitude=" + this.longitude;
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        console.log(response.data);
        this.shangpu = response.data;
      });
    },
    toMine() {
      this.$router.go("/mine");
    },
    // 调用该方法以调用mutation里的方法给locationCityZB赋值（即v，即把坐标存到store里以便其它页面使用）
    changeCityZB(v) {
      this.$store.commit("fuzhiZB", v);
    }
  },
  created() {
    // 正在加载动画效果
    loadingInstance = Loading.service({
      fullscreen: true,
      text: "正在加载",
      spinner: "el-icon-loading"
    });
    if (this.$route.query) {
      this.bool = true;
    } else {
      this.bool = false;
    }
    // 上一个页面传来的数据（坐标）
    console.log(this.$route.query);
    this.datas = this.$route.query;
    this.latitude = this.datas.geohash.split(",")[0];
    this.longitude = this.datas.geohash.split(",")[1];
    // this.$store.state.locationCityZB
    console.log(this.latitude);
    console.log(this.longitude);
    // 加载完从接口获得数据
    this.jiazaiOKtop1();
    this.jiazaiOKtop2();
    //把坐标放到store里
    this.changeCityZB(this.datas.geohash);
  },
  computed: {
    // 获取store下state里的变量locationCityZB,坐标
    stateCityZB() {
      return this.$store.state.locationCityZB;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: rgb(245, 245, 245);
}
.top {
  /* border: 1px solid black; */
  position: fixed;
  width: 100%;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.17rem;
  color: white;
  top: 0;
  text-align: center;
  z-index: 15;
}
#img1 {
  position: fixed;
  height: 0.3rem;
  top: 0.11rem;
  left: 0.11rem;
}
#img2 {
  position: fixed;
  height: 0.3rem;
  top: 0.11rem;
  right: 0.11rem;
}
.a1 {
  position: absolute;
  right: 0.1rem;
  top: 0;
}
#lunbo {
  /* width: 100%; */
  margin-top: 0.53rem;
  /* height: 3rem; */
  /* border: 1px solid black; */
  background-color: white;
}
#one {
  /* width: 200%; */
  overflow: hidden;
}
.bo1 {
  width: 25%;
  /* border: 1px solid black; */
  float: left;
  margin-bottom: 0.2rem;
}
.bo2 img {
  width: 50%;
}
.bo3{
  color:rgb(53, 52, 52);
}
#sps {
  text-align: left;
  background-color: white;
}
#sps_top {
  margin-top: 0.2rem;
  text-align: left;
  background-color: white;
  padding: 0.08rem 0 0.16rem 0.12rem;
  box-sizing: border-box;
}
#sps_top img {
  width: 0.2rem;
  vertical-align: bottom;
}
.shangpu {
  width: 100%;
  border-bottom: 1px solid grey;
  overflow: hidden;
  padding: 0.13rem 0.08rem 0.03rem;
  /* padding-top: 0.13rem; */
  box-sizing: border-box;
}
.shangpu .shangpu-left img {
  width: 0.7rem;
}
.shangpu-left {
  height: 100%;
  display: inline-block;
}
.shangpu-right {
  width: 78%;
  height: 100%;
  float: right;
  display: inline-block;
  /* border: 1px solid black; */
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.shangpu-right > .pp span {
  background-color: rgb(255, 217, 48);
  font-size: 0.1rem;
  font-weight: bold;
  margin-right: 0.08rem;
}
.shangpu-right h4 li {
  list-style-type: none;
  display: inline-block;
  margin-right: 0.03rem;
  border: 0.01rem solid rgb(220, 220, 245);
}
.ul1 {
  display: inline-block;
  float: right;
  margin-left: 0.08rem;
}
</style>
