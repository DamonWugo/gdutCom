// 创建一个store实例
import { createStore } from "vuex";

//模块化vuex
//登录
const loginAbout = {
  namespaced: true, //开启命名空间
  state: {
	  isLogined: false,
	  userInfo: null
  },
  mutations: {
	  SAVAUSERINFO(state, value){
		  state.userInfo = value
	  }
  },
  actions: {
	  savaUserInfo(context, value) {
		  context.commit("SAVAUSERINFO", value)
	  }
  },
  getters: {},
};

const store = createStore({
  modules: {
    loginAbout, //登录模块
  },
});

//暴露出去
export default store;
