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
	  },
	  CHANGELOGINsTATUS(state, value){
		  state.isLogined = value
	  }
  },
  actions: {
	  changeLoginStatus(context, value){
		  context.commit("CHANGELOGINsTATUS", value)
	  },
	  savaUserInfo(context, value) {
		  context.commit("SAVAUSERINFO", value)
	  }
  },
  getters: {},
};
// 帖子list
const postsAbout = {
  namespaced: true, //开启命名空间
  state: {
	  postsList: null,
  },
  mutations: {
	  SAVEPOSTSLIST(state, value){
		  state.postsList = value
	  }
  },
  actions: {
	  savePostsList(context, value) {
		  context.commit("SAVEPOSTSLIST", value)
	  }
  },
  getters: {},
};
const store = createStore({
  modules: {
    loginAbout, //登录模块
	postsAbout
  },
});

//暴露出去
export default store;
