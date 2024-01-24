
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { watchEffect } from 'vue';

const store = useStore();
const router = useRouter();
const userData = computed(() => {
  return store.state.auth.userLogin;
})



const logout = () => {
  store.commit('auth/setUserLogout');
  router.push('/');
}



</script>

<template>
  <div
    class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none"
    style="text-align: right">
    <div class="icon-container">
      <i class="fa-solid fa-chart-bar"></i>
      <span class="icon-badge">1</span>
    </div>

    <div class="icon-container">
      <i class="fa-solid fa-heart"></i>
      <span class="icon-badge">2</span>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
          <img :src="userData.imageLink" class="avatar-img" />
        </a>
        <ul class="dropdown-menu">
          <router-link to="/user/personal-info" class="dropdown-item">My Profile</router-link>
          <router-link to="/user/favorite-recipes" class="dropdown-item">Favorited Recipes</router-link>
          <router-link to="/user/user-recipe" class="dropdown-item">My Recipes</router-link>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li class="dropdown-item" @click="logout">Logout</li>
        </ul>
      </li>
    </ul>
  </div>
</template>



<style>
.avatar-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.icon-container {
  position: relative;
}

.icon-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 4px 8px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 7px;
}
</style>