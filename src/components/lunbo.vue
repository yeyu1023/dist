<template>
  <div>
    <div id="head">
      <!-- <img id="head_left" src="../../../static/imgs/fangdajing.png" alt> -->
      <p id="head_center">{{name}}</p>
      <!-- <img v-if="sum" id="head_right" src="../../../static/imgs/my.png" alt> -->
      <!-- <span v-else id="head_right2">登陆/注册</span> -->
    </div>
    <div id="top">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="flmk" v-show="fenlei.length > 0"  :key="i" v-for="(v,i) in fenlei">
          <div class="spfl" :key="index" v-for="(value,index) in v">
              <img :src="'https://fuss10.elemecdn.com'+value.image_url" alt="">
              <p>{{value.title}}</p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>


  </div>
</template>
<script>
export default {
  name: "lunbo",
  data() {
    return {
      latitude: "",
      longitude: "",
      name: "",
      fenlei:[],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数  swiper4.x
        // ...
        initialSlide: 0,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  computed: {
    sum() {
      return this.$store.state.denglu;
    },
    // waimai() {
    //   return this.$store.state.waimai;
    // },
    // sousuo() {
    //   return this.$store.state.sousuo;
    // },
    // dingdan() {
    //   return this.$store.state.dingdan;
    // },
    // wode() {
    //   return this.$store.state.wode;
    // }
  },
  created() {
    // this.latitude = this.$route.query.latitude; //接收传递过来的参数
    // this.longitude = this.$route.query.longitude;
    this.getRess();
    this.fenlei2();
  },
  methods: {
    getRess() {
      const api =
        "https://elm.cangdu.org/v2/pois/" +
        this.latitude +
        "," +
        this.longitude;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.name = res.data.name;
      });
    },
    fenlei2(){
        const api = "https://elm.cangdu.org/v2/index_entry";
        this.$http({
            url:api,
            method:'get'
        }).then(res=>{
            const one = [];
            const two = [];
            // console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                if(i<8){
                    one.push(res.data[i]);
                }else{
                    two.push(res.data[i]);
                }
            }
            this.fenlei.push(one);
            this.fenlei.push(two);
        })
    }
  }
};
</script>
<style>
#head {
  width: 100%;
  height: 0.4rem;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
}
#head_left {
  width: 0.2rem;
  margin-left: 0.1rem;
}
#head_center {
  width: 50%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.2rem;
  color: white;
}
#head_right {
  width: 0.2rem;
  margin-right: 0.1rem;
}
#head_right2 {
  font-size: 0.15rem;
  margin-right: 0.1rem;
  color: white;
}
#top{
    margin-top: 0.5rem;
}
.flmk{
    display: flex;
    flex-wrap: wrap;
}
.spfl{
    width: 25%;
    margin-bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.spfl img{
    width: 0.5rem;
}

</style>
