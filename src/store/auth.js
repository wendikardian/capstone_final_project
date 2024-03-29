import axios from "axios";
import Cookies from "js-cookie";

export default {
  namespaced: true,
  state() {
    return {
      token: Cookies.get("jwt") || null,
      tokenExpiration: null,
      userLogin: {},
      isLogin: false,
    };
  },
  mutations: {
    setToken(state, { idToken, expiresIn }) {
      state.token = idToken;
      state.tokenExpiration = expiresIn;
      Cookies.set("tokenExpirationDate", expiresIn);
      Cookies.set("jwt", idToken, { expires: 7 });
    },
    setUserLogin(state, { userData, loginStatus }) {
      state.userLogin = userData;
      state.isLogin = loginStatus;
    },
    setUserLogout(state) {
      state.token = null;
      state.userLogin = {};
      state.islogin = false;
      state.tokenExpirationDate = null;
      Cookies.remove("jwt");
      Cookies.remove("tokenExpirationDate");
      Cookies.remove("UID");
    },
  },
  actions: {
    async getRegisterData({ commit, dispatch }, payload) {
      const APIkey = "AIzaSyDADaF4o4JXVrjVsHhLXqp4OX9BK_aX9PM";
      const authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
      try {
        const { data } = await axios.post(`${authUrl}${APIkey}`, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
        console.log(data);
        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });
        const newUserData = {
          userId: data.localId,
          fullName: payload.fullname,
          username: payload.username,
          email: payload.email,
          imageLink: payload.imageLink,
        };
        Cookies.set("UID", newUserData.userId, { expires: 7 });
        await dispatch("addNewUser", newUserData);
      } catch (err) {
        console.log(err);
      }
    },
    async addNewUser({ commit, state }, payload) {
      try {
        const { data } = await axios.post(
          `https://big-project-fe-vue-default-rtdb.firebaseio.com/users.json?auth=${state.token}`,
          payload
        );
        commit("setUserLogin", { userData: payload, loginStatus: true });
      } catch (err) {
        console.log(err);
      }
    },
    async getLoginData({ commit, dispatch }, payload) {
      const APIkey = "AIzaSyDADaF4o4JXVrjVsHhLXqp4OX9BK_aX9PM";
      const authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      try {
        const { data } = await axios.post(`${authUrl}${APIkey}`, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });
        await dispatch("getUser", data.localId);
      } catch (err) {
        console.log(err);
      }
    },
    async getUser({ commit, state }, payload) {
      try {
        const { data } = await axios.get(
          `https://big-project-fe-vue-default-rtdb.firebaseio.com/users.json?auth=${state.token}`
        );
        for (let key in data) {
          if (data[key].userId === payload) {
            Cookies.set("UID", data[key].userId);
            commit("setUserLogin", { userData: data[key], loginStatus: true });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
