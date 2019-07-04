//导入vue.js核心库
import Vue from 'vue'
import Vuex from 'vuex'
//导入状态state
import state from './state'
//导入状态mutations
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

// store存储器用来存储组件之间共享的数据以及共同调用的方法
const store = new Vuex.Store({
    //共享状态：类似组件中的data数据源

    state,//key和value值相同时，可如此缩写
    
    //修改状态的方法：类似于组件methods方法
    mutations,
    // getters 类似于组件中的计算属性，用来处理state状态值的
    getters,
    // actions 类似于 mutations 用来创建方法，只不过不处理状态值，调用mutetions中的方法；actions可以处理异步操作，mutations不行
    actions,
    //刷新页面的一瞬间，vuex数据消失，存到sessionStorage中，vuex会去sessionStorage中拿回数据，变相的实现了数据刷新不丢失~
    plugins: [createPersistedState({
      storage: window.sessionStorage
    })],
  })

  //导出存储的store对象，给main.js使用
  export default store;