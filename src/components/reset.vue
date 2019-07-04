<template>
    <div>
        <div id="top">
     <strong> <h2 style="text-align: center;">重置密码</h2></strong>
    <router-link to="/register">
    <img id="return" src="../assets/微信图片_20190619195242.png" alt="">
    </router-link>
    </div>
    <div id="inp">
        <input type="text" v-model="username" placeholder="账号"><br>
        <input type="text" v-model="oldpassWord" placeholder="旧密码"><br>
        <input type="text" v-model="Npassword" placeholder="请输入新密码"><br>
        <input type="text" v-model="confirmpassword" placeholder="请确认密码"><br>
        <input type="text" v-model="captcha_code" placeholder="验证码">
         <img :src="code&&code" alt="" id="yanzheng">
       <div id="change">
         <p>看不清</p>
        <p @click="getCode ()">换一张</p>
       </div>
        <div id="yes">
            <router-link :to="'/mine?newname='+ this.username" style="color: white; " >确认修改</router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"reset",
    data(){
        return {
             code:'',//存储验证码图片
            username:'',
            oldpassWord:'',
            Npassword:'',//存储验证码输入框的值
            confirmpassword:'',
            captcha_code:'',
        }
    },
    created(){
    this.getCode();
    this.login(); 
    },
    methods: {
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
        //修改密码
        login(){
          const api = "https://elm.cangdu.org/v2/changepassword"
          this.$http({
            url:api,
           method:'post',
           withCredentials:true,
           //请求参数
           data:{
             username :this.username,
             oldpassWord :this.oldpassWord,
             newpassword : this.Npassword,
            captcha_code:this.confirmpassword,//验证码
            confirmpassword:this.captcha_code//确认密码
           }
          }).then(res=>{
              console.log("login数据");
              if (res.data.message) {
                    // alert(res.data.message);//登陆失败
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
<style scoped>
    #top {
/* border: 1px solid black; */
position: fixed;
width: 100%;
height: 0.53rem;
line-height: 0.45rem;
background-color: rgb(49, 144, 232);
font-size: 0.15rem;
color: white;
top: 0;
margin-bottom: 5vh;
}
#return{
 position: absolute;
 left: 3%;
 top: 15%;
 width: 5%;
  color: white;
}
#inp{
    width: 100%;
    line-height: 0.25rem;
    /* background-color: #fff; */
}
#inp input{
    width: 100%;
    padding: 3%;
    font-size: 0.15rem;
    border: 1px solid gainsboro ;
}
#change{
  font-size: 0.1rem;   
  position: absolute;
  right: 2%;
  top: 60%;
  margin-bottom: 3%;
}
#yanzheng{
  position: absolute;
  right: 15%;
  top: 65%;
} 
#change p:nth-child(2){
    color: blue;
}  
#yes{
   width: 100%;
   background-color: blue; 
   padding: 3%;
   
   margin-top: 5%;
}
</style>
