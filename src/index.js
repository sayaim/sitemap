import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    userName: ''
  },
  mutations: {
    auth(state, user){
      state.isLogin = true;
      state.userName = user;
    }
  },
  actions: {
    fetch(context, user){
      context.commit('auth', user);
    }
  },
  modules: {
  }
})