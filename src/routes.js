import UserPage from './components/pages/UserPage.vue';
import Cookies from "js-cookie";
import {store} from "./store/index.js";

const checkAuth = () => {
    const jwtCookie = Cookies.get("jwt");
    const expirationDate = Cookies.get("tokenExpirationDate");
    const userId = Cookies.get("UID");
  
    if(jwtCookie ){ 
      if(new Date().getTime() <  +expirationDate){
        store.commit('auth/setToken', { 
          idToken : jwtCookie,
          expiresIn : expirationDate  
        });
        store.dispatch('auth/getUser', userId);
        return true;
      }else { 
        store.commit('auth/setUserLogout');
        return false;
      }
    }else { 
      return false
    }
  }
  

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/pages/HomePage.vue')
    }, {
        path : '/login',
        name : 'Login',
        component : () => import('./components/auth/WebLogin.vue')
    }, { 
        path: '/signup',
        name : 'Signup',
        component : () => import('./components/auth/WebSignup.vue')
    } , {
        path : '/user/:component',
        name: 'userPage',
        component : UserPage,
        beforeEnter : (to, from, next) => {
          checkAuth() ? next() : next({name : "login"});
        }
      },
]