<template>
    <main>

        <div class="container ">
            <div class="row my-5">
                <div class="col-12 col-lg-6 d-none d-lg-block">
                    <img src="@/assets/login.jpg" class="img-fluid" style="height: 700px; object-fit: cover;"
                        alt="Login image">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card p-3">
                        <h3>Login</h3>
                        <p>Enter your detail below</p>
                        <base-input type="email" label="Email Address" identity="email" placeholder="name@example.com"
                            v-model="loginData.email">
                        </base-input>
                        <base-input type="password" label="Password" identity="password" placeholder="insert your password"
                            v-model="loginData.password" ></base-input>
                        <!-- add button login -->
                        <div class="mt-5 w-100 d-flex justify-content-center">

                            <a href="profile.html" class="text-white btn btn-success w-100">Continue</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';

import { reactive } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


const store = useStore();
const router = useRouter();

const loginData = reactive({
    email: '',
    password: '',
    isLogin: false
})

</script>