<template>
  <div class="hello">
    <div class="top">
      <img id="back" @click="houtui()" src="../../static/img/back.png" alt>
      <span id="name">{{datas.name}}</span>
    </div>
    <!-- 下拉列表 -->
    <div id="top2">
      <div class="top2_left" @click="bianli()">
        <span id="span1">{{datas.name}}</span>
        <img id="img1" class="amt1" src="../../static/img/up1.png" alt>
      </div>
      <div class="top2_left" @click="paixu()">
        <span id="span2">排序</span>
        <img id="img2" src="../../static/img/up1.png" alt>
      </div>
      <div class="top2_left" @click="shaixuan()">
        <span id="span3">筛选</span>
        <img id="img3" src="../../static/img/up1.png" alt>
      </div>
      <!-- 左侧点击出现的详细部分 -->
      <div class="block" v-if="show1==1">
        <!-- 左侧菜单 -->
        <div class="left">
          <div>
          <div class="block_left" @click="yiguo()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[0].image_url" alt>
            <span>{{datas1[0].name}}</span>
            <span class="count">{{datas1[0].count}}</span>
          </div>
          <div class="block_left" @click="kuaicanB()">
            <img
              v-if="datas1[1].image_url"
              :src="'https://fuss10.elemecdn.com/'+datas1[1].image_url+'.png'"
              alt
            >
            <span>{{datas1[1].name}}</span>
            <span class="count">{{datas1[1].count}}</span>
          </div>
          <div class="block_left" @click="xiaochiB()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[2].image_url+'.png'" alt>
            <span>{{datas1[2].name}}</span>
            <span class="count">{{datas1[2].count}}</span>
          </div>
          <div class="block_left" @click="guoshuB()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[3].image_url+'.png'" alt>
            <span>{{datas1[3].name}}</span>
            <span class="count">{{datas1[3].count}}</span>
          </div>
          <div class="block_left" @click="teseB()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[4].image_url+'.jpeg'" alt>
            <span>{{datas1[4].name}}</span>
            <span class="count">{{datas1[4].count}}</span>
          </div>
          <div class="block_left" @click="shangdianB()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[5].image_url+'.png'" alt>
            <span>{{datas1[5].name}}</span>
            <span class="count">{{datas1[5].count}}</span>
          </div>
          <div class="block_left" @click="xianhuaB()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[6].image_url+'.png'" alt>
            <span>{{datas1[6].name}}</span>
            <span class="count">{{datas1[6].count}}</span>
          </div>
          <div class="block_left" @click="quanbuB()">
            <img :src="'https://elm.cangdu.org/img/default.jpg'" alt>
            <span>{{datas1[7].name}}</span>
            <span class="count">{{datas1[7].count}}</span>
          </div>
          <div class="block_left" @click="tianpinB()">
            <img :src="'https://fuss10.elemecdn.com/'+datas1[8].image_url+'.png'" alt>
            <span>{{datas1[8].name}}</span>
            <span class="count">{{datas1[8].count}}</span>
          </div>
        </div>
        </div>
        <!-- 右侧部分 -->
        <div class="right">
          <div class="kuaican rightA" v-if="show==0">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[0].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="kuaican rightA" v-if="show==1">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[1].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="xiaochi rightA" v-else-if="show==2">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[2].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="guoshu rightA" v-if="show==3">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[3].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="tese rightA" v-if="show==4">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[4].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="shangdian rightA" v-if="show==5">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[5].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="xianhua rightA" v-if="show==6">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[6].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="quanbu rightA" v-if="show==7">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[7].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
          <div class="tianpin rightA" v-if="show==8">
            <div class="rightB" :v-if="(i!==0)" :key="i" v-for="(v,i) in datas1[8].sub_categories">
              <span>{{v.name}}</span>
              <span style="float:right;">{{v.count}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间排序列表 -->
      <div id="block2" v-else-if="show1==2">
        <div ref="a" class="block_A" @click="zhineng()">
          智能排序
          <span v-if="duihao==1">√</span>
        </div>
        <div ref="b" class="block_A" @click="zuijin()">
          距离最近
          <span v-if="duihao==2">√</span>
        </div>
        <div ref="c" class="block_A" @click="xlzg()">
          销量最高
          <span v-if="duihao==3">√</span>
        </div>
        <div ref="d" class="block_A" @click="zuidi()">
          起送价最低
          <span v-if="duihao==4">√</span>
        </div>
        <div ref="e" class="block_A" @click="zuikuai()">
          配送速度最快
          <span v-if="duihao==5">√</span>
        </div>
        <div ref="f" class="block_A" @click="pingfen()">
          评分最高
          <span v-if="duihao==6">√</span>
        </div>
      </div>
      <!-- 右侧筛选列表 -->
      <div id="block3" v-else-if="show1==3">
        <div class="shaixuan_f">配送方式</div>
        <div class="shaixuan_f">
          <span class="shaixuan_span">蜂鸟转送</span>
        </div>
        <div class="shaixuan_f">商家属性(可以多选)</div>
        <div class="shaixuan_f shaixuan_e">
          <span class="shaixuan_span">品牌商家</span>
          <span class="shaixuan_span">外卖保</span>
          <span class="shaixuan_span">准时达</span>
        </div>
        <div class="shaixuan_f shaixuan_e">
          <span class="shaixuan_span">新店</span>
          <span class="shaixuan_span">在线支付</span>
          <span class="shaixuan_span">开发票</span>
        </div>
        <div class="shaixuan_b">
          <div class="shaixuan_d">清空</div>
          <div class="shaixuan_d">确定</div>
        </div>
      </div>
    </div>
    <!-- 商铺部分 -->
    <div id="sps">
      <div class="shangpu" :key="i" v-for="(v,i) in shangpu">
        <!-- 下标 id 坐标传过去 -->
        <router-link
          :to="'/dianmian?detail=' + i + '&latitude=' + latitude + '&longitude=' + longitude + '&id=' +v.id">
          <div class="shangpu-left">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path">
          </div>
          <div class="shangpu-right">
            <h4 style="margin-bottom:0.05rem;" class="pp">
              <span>品牌</span>
              {{v.name}}
              <ul class="ul1">
                <li :key="index" v-for="(value,index) in v.supports">{{value.icon_name}}</li>
              </ul>
            </h4>
            <h5 style="margin-bottom:0.05rem;">
              <!-- 评分 -->
              <span
                style="color:#57A9FF;float:right;padding:0.03rem;margin-left:0.08rem"
              >{{v.supports[1].name}}</span>
              <span
                style="background:#57A9FF;color:white;float:right;padding:0.03rem;"
              >{{v.delivery_mode.text}}</span>
              <el-rate v-model="v.rating" disabled text-color="#ff9900" style="display:inline" show-score></el-rate><br>
              <br><span style="">月售{{v.recent_order_num}}单</span>
            </h5>
            <h5 style="margin-bottom:0.05rem;">
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

<script>
export default {
  name: "lunboDetail",
  data() {
    return {
      datas: "",
      datas1: [],
      show1: 0, //控制下拉列表显示哪一栏
      show: 0, //控制左边分类内的小选项
      duihao: 0, //控制中间排序对号显示
      datas: {}, //接收传过来的数据；用户界面过来的加.name接收传过来的用户名,地址搜索进来的加.geohash接收传过来的地址
      latitude: "",
      longitude: "",
      foodData1: [],
      shangpu: [], //接收商铺信息，还要传到详细页面
      indexa: {},//传到详细页面的shangpu的下标,
      clientHeight:"",//当前屏幕宽高度
    };
  },
  watch: {},
  methods: {
    houtui() {
      this.$router.back();
    },
    huoqu() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(res.data);
        console.log(api);
        this.datas1 = res.data;
      });
    },
    //   点击消失隐藏,动画效果
    bianli() {
      //如果show1为1说明已经显示，需要隐藏
      if (this.show1 == 1) {
        this.show1 = 0;
        span1.innerHTML = this.datas.name;
        span1.style.color = "";
        img1.src = "../../static/img/up1.png";
        img1.style.transform = "rotateZ(-180deg);";
      } else {
        this.show1 = 1;
        if (this.show1 == 1) {
          span1.innerHTML = "分类";
          span1.style.color = "rgb(49, 144, 232)";
          img1.src = "../../static/img/up2.png";
          img1.style.transform = "rotateZ(180deg);";
          span2.style.color = "";
          img2.src = "../../static/img/up1.png";
          img2.style.transform = "rotateZ(-180deg);";
          span3.style.color = "";
          img3.src = "../../static/img/up1.png";
          img3.style.transform = "rotateZ(-180deg);";
        } else {
          span1.innerHTML = this.datas.name;
          span1.style.color = "";
          img1.src = "../../static/img/up1.png";
          img1.style.transform = "rotateZ(-180deg);";
        }
      }
    },

    paixu() {
      if (this.show1 == 2) {
        this.show1 = 0;
        span2.style.color = "";
        img2.src = "../../static/img/up1.png";
        img2.style.transform = "rotateZ(-180deg);";
      } else {
        this.show1 = 2;
        if (this.show1 == 2) {
          span2.style.color = "rgb(49, 144, 232)";
          img2.src = "../../static/img/up2.png";
          img2.style.transform = "rotateZ(180deg);";
          span1.innerHTML = this.datas.name;
          span1.style.color = "";
          img1.src = "../../static/img/up1.png";
          img1.style.transform = "rotateZ(-180deg);";
          span3.style.color = "";
          img3.src = "../../static/img/up1.png";
          img3.style.transform = "rotateZ(-180deg);";
        } else {
          span2.style.color = "";
          img2.src = "../../static/img/up1.png";
          img2.style.transform = "rotateZ(-180deg);";
        }
      }
    },
    shaixuan() {
      if (this.show1 == 3) {
        this.show1 = 0;
        span3.style.color = "";
        img3.src = "../../static/img/up1.png";
        img3.style.transform = "rotateZ(-180deg);";
      } else {
        this.show1 = 3;
        if ((this.show1 = 3)) {
          span3.style.color = "rgb(49, 144, 232)";
          img3.src = "../../static/img/up2.png";
          img3.style.transform = "rotateZ(180deg);";
          span1.innerHTML = this.datas.name;
          span1.style.color = "";
          img1.src = "../../static/img/up1.png";
          img1.style.transform = "rotateZ(-180deg);";
          span2.style.color = "";
          img2.src = "../../static/img/up1.png";
          img2.style.transform = "rotateZ(-180deg);";
        } else {
          span3.style.color = "";
          img3.src = "../../static/img/up1.png";
          img3.style.transform = "rotateZ(-180deg);";
        }
      }
    },
    // 下拉列表左侧分类下右边的显示部分
    yiguo() {
      this.show = 0;
    },
    kuaicanB() {
      this.show = 1;
    },
    xiaochiB() {
      this.show = 2;
    },
    guoshuB() {
      this.show = 3;
    },
    teseB() {
      this.show = 4;
    },
    shangdianB() {
      this.show = 5;
    },
    xianhuaB() {
      this.show = 6;
    },
    quanbuB() {
      this.show = 7;
    },
    tianpinB() {
      this.show = 8;
    },
    // 中间智能排序部分
    // 全部把字体颜色还原
    changeBlockColor() {
      this.$refs.a.style.color = "";
      this.$refs.b.style.color = "";
      this.$refs.c.style.color = "";
      this.$refs.d.style.color = "";
      this.$refs.e.style.color = "";
      this.$refs.f.style.color = "";
    },
    zhineng() {
      this.changeBlockColor();
      this.$refs.a.style.color = "blue";
      this.duihao = 1;
      // this.paixu();
      // 改变排序框样式，字体颜色，箭头旋转
      span2.style.color = "";
      img2.src = "../../static/img/up1.png";
      img2.style.transform = "rotateZ(-180deg);";
      this.zhinengpx();
    },
    zuijin() {
      this.changeBlockColor();
      this.$refs.b.style.color = "blue";
      this.duihao = 2;
      // 改变排序框样式，字体颜色，箭头旋转
      span2.style.color = "";
      img2.src = "../../static/img/up1.png";
      img2.style.transform = "rotateZ(-180deg);";
      this.julizj();
    },
    xlzg() {
      this.changeBlockColor();
      this.$refs.c.style.color = "blue";
      this.duihao = 3;
      // 改变排序框样式，字体颜色，箭头旋转
      span2.style.color = "";
      img2.src = "../../static/img/up1.png";
      img2.style.transform = "rotateZ(-180deg);";
      this.xiaoliangzg();
    },
    zuidi() {
      this.changeBlockColor();
      this.$refs.d.style.color = "blue";
      this.duihao = 4;
      // 改变排序框样式，字体颜色，箭头旋转
      span2.style.color = "";
      img2.src = "../../static/img/up1.png";
      img2.style.transform = "rotateZ(-180deg);";
      this.qisongjiazd();
    },
    zuikuai() {
      this.changeBlockColor();
      this.$refs.e.style.color = "blue";
      this.duihao = 5;
      // 改变排序框样式，字体颜色，箭头旋转
      span2.style.color = "";
      img2.src = "../../static/img/up1.png";
      img2.style.transform = "rotateZ(-180deg);";
      this.suduzk();
    },
    pingfen() {
      this.changeBlockColor();
      this.$refs.f.style.color = "blue";
      this.duihao = 6;
      // 改变排序框样式，字体颜色，箭头旋转
      span2.style.color = "";
      img2.src = "../../static/img/up1.png";
      img2.style.transform = "rotateZ(-180deg);";
      this.pingfenzg();
    },
    jiazaiOKtop2() {
      const api2 =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude;
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        console.log(response.data);
        this.shangpu = response.data;
      });
    },
    // 获取 排序
    zhinengpx() {
      this.jiazaiOKtop2();
      this.show1 = 0;
      console.log(this.show1);
      // this.$router.go(0);
    },
    julizj() {
      const api2 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&order_by=5";
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        this.shangpu = response.data;
      });
      this.show1 = 0;
      console.log(this.show1);
      // this.$router.go(0);
    },
    xiaoliangzg() {
      const api2 =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&order_by=6";
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        this.shangpu = response.data;
      });
      this.show1 = 0;
      console.log(this.show1);
      // this.$router.go(0);
    },
    qisongjiazd() {
      const api2 =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&order_by=1";
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        this.shangpu = response.data;
      });
      this.show1 = 0;
      console.log(this.show1);
      // this.$router.go(0);
    },
    suduzk() {
      const api2 =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&order_by=2";
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        this.shangpu = response.data;
      });
      this.show1 = 0;
      console.log(this.show1);
      // this.$router.go(0);
    },
    pingfenzg() {
      const api2 =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&order_by=3";
      this.$http({
        url: api2,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(response => {
        this.shangpu = response.data;
      });
      this.show1 = 0;
      console.log(this.show1);
      // this.$router.go(0);
    },
    changeFixed(clientHeight){ //动态修改样式
      console.log(clientHeight);
      this.$refs.homePage.style.height = clientHeight+'px';
    },
  },
  created() {
    // 从store里获取定位到的城市坐标
    var a = this.stateCityZB;
    // console.log(a);
    this.latitude = a.split(",")[0];
    this.longitude = a.split(",")[1];
    // 加载完从接口获得数据
    this.jiazaiOKtop2();
    var img1 = document.getElementById("img1");
    var span1 = document.getElementById("span1");
    var img2 = document.getElementById("img2");
    var span2 = document.getElementById("span2");
    var img3 = document.getElementById("img3");
    var span3 = document.getElementById("span3");
    var rightA = document.getElementsByClassName("rightA");
    console.log(this.$route.query);
    this.datas = this.$route.query;
    this.huoqu();
  },
  computed: {
    // 获取store下state里的变量locationCityZB,坐标
    stateCityZB() {
      return this.$store.state.locationCityZB;
    }
  },
  mounted(){
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight || document.body.clientHeight}` //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight || document.body.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
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
  z-index: 10;
}
#back {
  width: 0.15rem;
  margin-top: 0.15rem;
  margin-left: 0.15rem;
}
#name {
  position: absolute;
  left: 50%;
  bottom: 0.01rem;
  transform: translateX(-50%);
  font-weight: bold;
  /* transform: rotate(); */
}
#top2 {
  border-bottom: 1px solid rgb(224, 219, 219);
  position: fixed;
  top: 0.53rem;
  width: 100%;
  height: 0.3rem;
  background-color: white;
  /* line-height: 0.3rem; */
  /* font-size: 0.2rem; */
  /* color: white; */
  /* top: 0; */
  display: flex;
  justify-content: space-between;
  z-index: 10;
}
.top2_left {
  width: 32.5%;
  /* border: 1px solid rebeccapurple; */
  display: inline-block;
  text-align: center;
  line-height: 0.3rem;
  padding-left: 0.1rem;
  box-sizing: border-box;
}
.top2_left img {
  width: 0.3rem;
  vertical-align: top;
  transition: 0.5s;
}
.block {
  overflow: hidden;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0.83rem;
  /* top:  */
  width: 100%;
  height: 3.6rem;
  overflow-y: scroll;
  overflow: hidden;
  /* border: 1px solid black; */
}
.left {
  width: 49%;
  float: left;
  background-color: rgb(241, 239, 239);
  /* display: inline-block; */
  /* overflow-y: scroll; */
  /* overflow: hidden; */
}
.block_left{
  height: 0.4rem;
  /* border: 1px solid black; */
  font-size: 0.15rem;
  line-height: 0.4rem;
  padding: 0 0.1rem;
}
.block_left img{
  margin-top: 0.08rem;
}
.block img {
  width: 0.2rem;
  vertical-align: top;
}
.block > div {
  line-height: 0.2rem;
  padding: 0.02rem;
  box-sizing: border-box;
}
.count {
  float: right;
}
.right {
  float: right;
  width: 49%;
  padding: 0.2rem;
  box-sizing: border-box;
}
.right .rightB{
  height: 0.3rem;
  line-height: 0.3rem;
  border-bottom: 1px solid rgb(216, 216, 216) ;
}

/* 商铺部分 */
#sps {
  margin-top: 0.9rem;
  /* text-align: left; */
  background-color: white;
}
#sps_top {
  margin-top: 0.2rem;
  text-align: left;
  background-color: white;
  padding-bottom: 0.2rem;
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
  box-sizing: border-box;
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
#block2 {
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0.83rem;
  left: 0;
  /* top:  */
  width: 100%;
  /* height: 3rem; */
  /* border: 1px solid black; */
}
.block_A {
  font-size: 0.2rem;
  /* line-height: 0.3rem; */
  border-bottom: 1px solid black;
  padding: 0.1rem;
  box-sizing: border-box;
}
.block_A span {
  float: right;
}
#block3 {
  /* overflow: hidden; */
  background-color: gray;
  position: fixed;
  left: 0;
  top: 0.83rem;
  /* top:  */
  width: 100%;
  /* height: 3rem; */
  /* border: 1px solid black; */
}
.shaixuan_f {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  background-color: white;
  border-bottom: 1px solid gainsboro;
  box-sizing: border-box;
}
.shaixuan_e {
  display: flex;
  justify-content: space-between;
}
.shaixuan_span {
  padding-left: 0.1rem;
  height: 0.28rem;
  line-height: 0.3rem;
  display: inline-block;
  margin-top: 0.05rem;
  width: 24%;
  border: 1px solid gainsboro;
}
.shaixuan_b {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  height: 0.4rem;
  /* box-sizing: border-box; */
  display: flex;
  justify-content: space-between;
  background-color: rgb(148, 141, 141);
}
.shaixuan_d {
  height: 0.28rem;
  width: 48%;
  margin-top: 0.05rem;
  text-align: center;
  line-height: 0.3rem;
  display: inline-block;
  border: 1px solid gainsboro;
  background-color: white;
  border-radius: 5% 5% 5% 5% / 15% 15% 15% 15%;
}

/* 点击排序 */
</style>
