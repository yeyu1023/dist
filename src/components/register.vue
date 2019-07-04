<template>
  <div id="hello">
    <div id="top">
     <strong> <h2 style="text-align: center;">密码登陆</h2></strong>
    <img src="" alt="">
    </div>
     <div id="content">
       <input type="text" v-model="username" placeholder="账号"><br>
       <input type="text" v-model="password" placeholder="密码"><br>
       <input type="text" v-model="codeNumber" placeholder="验证码">
       <img :src="code&&code" alt="" id="yanzheng">
       <div id="change">
         <p>看不清</p>
        <p @click="getCode ()">换一张</p>
       </div>
        
         <div id="font">
           <p>温馨提示：未注册过的账号，登陆时将自动注册</p>
       <p>注册过的用户，可凭账号密码登陆</p>
         </div>
      <div id="register" @click="login()">登陆</div>
       <router-link id="reset" to="/reset">重置密码?</router-link> 
     </div>
     
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      code:'',//存储验证码图片
            username:'',
            password:'',
            codeNumber:''//存储验证码输入框的值
    }
  },
    created () {
       //首先获取验证码（进入页面就有验证码） 
       this.getCode();
    },
    methods: {
        //可以在点击之后就切换
        getCode(){
         const api = "https://elm.cangdu.org/v1/captchas";
         this.$http({
           url:api,
           method:'post',
           withCredentials:true//用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
         }).then(res=>{
             console.log("验证码数据");
             console.log(res);
             this.code = res.data.code
         })
        },
        //登陆，点击之后请求数据，不能写在created里面
        login(){
          const api = "https://elm.cangdu.org/v2/login"
          this.$http({
            url:api,
           method:'post',
           withCredentials:true,
           //请求参数
           data:{
             username :this.username,
             password :this.password,
             captcha_code : this.codeNumber
           }
          }).then(res=>{
              console.log("login数据");
              console.log(res);
              if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"mine",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
                }

          })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top{
  position: fixed;
  top: 0;
background-color:blue;
width: 100%;
display: flex;
justify-content: space-between;
line-height: 0.38rem;
color: white;
text-align: center;
}
#content{
  width: 95%;
  position: absolute;
  left: 2%;
  
}
#content input{
line-height: 0.42rem;
}
#content input{
  width: 100%;
  font-size: 0.15rem;
  line-height: 0.5rem;
}

#content p:nth-child(1){
 color: gray;
}
#content p:nth-child(2){
  width: 100%;
  position: absolute;
  left: 5%;
color: blue;
  /* border: 1px solid black; */
}
#register{
  margin-top: 5%;
  background-color:green;
  color: white;
  line-height: 0.38rem;
}
#yanzheng{
  position: absolute;
  right: 15%;
  top: 45%;
}
#change{
  font-size: 0.15rem;   
  position: absolute;
  right: 2%;
  top: 45%;
  margin-bottom: 3%;
}
#font{
  margin-top: 5%;
  
}
#reset{
  position: absolute;
  bottom: -20%;
  right: 10%;
  }
</style>

 