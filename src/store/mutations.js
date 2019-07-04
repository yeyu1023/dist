export default {
    //通过store.commit('方法名'，附加参数)调用
    //创建方法 increAdd,第一个参数：接收state状态属性，第二个参数在之后，是组件中调用该方法时，传递的参数
    fuzhi(state, a) {
      this.state.locationCityId = a;
    },
    fuzhiZB(state, a) {
      this.state.locationCityZB = a;
    },
  }