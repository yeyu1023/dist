<template>
  <div>
    <div id="top">
      <img src alt class="p1">
      <div class="a1">
        <p>{{datas.cityName}}</p>
        <router-link style="color:white;" to="/location">切换城市</router-link>
      </div>
    </div>
    <div id="content">
      <input v-model="keyword" id="inp" type="text" placeholder="输入学校，商务楼，地址">
      <div id="submit" @click="sub()">提交</div>
    </div>

    <!-- 相关地址 -->
    <div id="relative">
      <ul id="ul1">
        <li :v-show="show" :key="i" v-for="(v,i) in arr">
          <router-link @click="add()" v-model="address" :to="'/waimai?geohash=' + v.geohash + '&name=' +v.name">
            {{v.name}}
            <br>
            {{v.address}}
          </router-link>
        </li>
      </ul>
    </div>
    
    <!-- <p id="search">搜索历史</p>
    <ul id="ul2">
        <li :key="i" v-for="(v,i) in addresses">{{address}}</li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      city_id: "",
      keyword: "",
      type: "",
      datas: {},
      address: "", //存储搜索的地址,点击一次赋一个值
      addresses:[],//存储搜索的地址
      arr: [],
      show: false
      // bool1:false
    };
  },
  created() {
    this.datas = this.$route.query;
    console.log(this.$route.query);
    this.sub();
    this.changeCityId(this.$route.query.city_id);
    console.log(this.$store.state.locationCityId);
  },
  methods: {
    sub() {
      const URL =
        "https://elm.cangdu.org/v1/pois?city_id=" +this.datas.city_id + "&keyword=" +this.keyword +"&type=search";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data); //返回请求到的数据
        this.show = true;
        this.arr = response.data;
      });
    },
    add(){
        this.addresses.push(this.address);
        console.log(addresses);
    },
    // 调用该方法以调用mutation里的方法给locationCityId赋值（即v，即把cityID存到store里以便其它页面使用）
    changeCityId(v){
      this.$store.commit("fuzhi",v);
    }
  },
    computed:{
      // 获取store下state里的变量locationCityId
      stateCityId(){
        return this.$store.state.locationCityId;
      }
    }
};
</script>
<style scoped>
#top {
  /* border: 1px solid black; */
  position: fixed;
  width: 100%;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.2rem;
  color: white;
  top: 0;
  margin-bottom: 5vh;
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
.a1 p {
  position: fixed;
  left: 40%;
  text-align: center;
}
#inp {
  font-size: 0.16rem;
  width: 90%;
  padding: 2%;
  /* margin-left: 2.5%; */
  border: 1px solid gray;
}
#content {
  /* border: 1px solid red; */
  padding: 2%;
  margin-top: 3%;
  background-color: #fff;
}
#submit {
  width: 90%;
  padding: 2%;
  margin-left: 2.5%;
  margin-top: 3%;
  background-color: lightskyblue;
}
#search {
  position: absolute;
  left: 2%;
  padding: 2%;
}
#relative {
  /* border: 1px solid red;  */
  margin-top: 8%;
  margin-left: 0;
}
#ul1 li {
  width: 90%;
  margin-top: 2%;
  margin-left: 2.5%;
  padding: 2%;
  border: 1px solid gainsboro;
}
</style>