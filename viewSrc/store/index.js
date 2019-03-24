import Vue from "vue";
import Vuex from "vuex";
import axios, { get, post } from "@/lib/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    realname: ""
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setRealname(state, realname) {
      state.realname = realname;
    }
  },
  actions: {
    fetchUserInfo({ commit }) {
      return get("/api/user/info").then(({ data }) => {
        if (data.errno === 0) {
          commit("setUsername", data.data.username);
          commit("setRealname", data.data.realname);
        }
      });
    },
    logout({ commit }) {
      return get("/api/user/logout").then(({ data }) => {
        if (data.errno === 0) {
          commit("setUsername", "");
          commit("setRealname", "");
        }
      });
    }
  }
});
