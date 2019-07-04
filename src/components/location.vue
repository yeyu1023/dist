<template>
  <div class="location">
    <div class="top">
      <p class="p1">elm.me</p>
      <div class="a1">
        <router-link style="color:white;" to="/register">登录/注册</router-link>
      </div>
    </div>
    <!-- 选位置 -->
    <div class="top2">
      <p class="p2">当前定位城市：</p>
      <p class="p3">定位不准时，请在城市列表中选择</p>
    </div>

    <router-link :to="'/city?cityName=郑州' + '&city_id=32'">
      <p class="dqcs">郑州</p>
      </router-link>
    <ul class="ul1">
      <li v-for="(v,i) in datas" :key="i">
        <router-link :to="'/city?cityName=' + v.name + '&city_id=' +v.id">
          {{v.name}}
        </router-link>
      </li>
    </ul>

    <div id="change">
      <li :key="key" v-for="(value,key) in groupCities">
        <h3>
          {{key}}
          <span v-if="key=='A'">(按字母排序)</span>
        </h3>
        <ul>
          <li :key="i" v-for="(v,i) in value">
            <router-link style="color:black;" :to="'/city?cityName=' + v.name + '&city_id=' +v.id">
            {{v.name}}
            </router-link>
          </li>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      msg: "",
      datas: [],
      citys: "",
      names: [],
      groupCities: {}
    };
  },
  created() {
    this.dingwei();
    this.getData();
    this.getGroupCities();
  },
  methods: {
    //网络请求方式1
    dingwei() {
      const URL = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data); //返回请求到的数据
        this.citys = response.data.name;
      });
    },
    getData() {
      //get请求方式 第一个参数：地址
      const URL = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data); //返回请求到的数据
        this.datas = response.data;
      });
    },
    getGroupCities() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        console.log(res.data);
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          // console.log(arr[i]);
          this.$set(this.groupCities, arr[i], res.data[arr[i]]);
          
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.location {
  text-align: left;
  background-color: rgb(245, 245, 245);
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
}
.p1 {
  position: absolute;
  left: 0.1rem;
  top: 0;
}
.a1 {
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.top2 {
  height: 0.38rem;
  line-height: 0.38rem;
  font-size: 0.15rem;
  background-color: white;
}
.p2 {
  margin-left: 0.04rem;
  display: inline;
}
.p3 {
  margin-right: 0.04rem;
  display: inline;
}
.top3 {
  /* border: 1px solid black; */
  height: 0.38rem;
  margin-top: 0.92rem;
}
.huaxian {
  border: 1px solid rgb(245, 245, 245);
}
.dqcs {
  padding-left: 0.04rem;
  margin-top: 1px;
  line-height: 0.38rem;
  font-size: 0.2rem;
  color: rgb(49, 144, 232);
  background-color: white;
}
.ul1 {
  width: 100%;
  /* position: absolute; */
  overflow: hidden;
  background-color: white;
}
.ul1 li {
  width: 25%;
  float: left;
  /* display: inline; */
  border: 0.1% solid rgb(245, 245, 245);
  text-align: center;
  color: blue;
  line-height: 0.38rem;
  background-color: white;
}
#change,#change>li{
  width: 100%;
  line-height: 0.38rem;
}
#change li ul{
  overflow: hidden;
  text-align: center
}
#change li ul li{
  /* border: 1px solid rgb(245, 245, 245); */
  width: 25%;
  float: left;
  font-size: 0.15rem;
  line-height: 0.38rem;
  background-color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
