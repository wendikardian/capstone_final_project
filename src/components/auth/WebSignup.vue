<template>
    <main>
        <form class="mt-3" @submit.prevent="register">
            <div class="container ">
                <div class="row my-5">
                    <div class="col-12 col-lg-6">
                        <div class="card p-3">
                            <h3>Sign up</h3>
                            <p>Enter your detail below</p>
                            <base-input type="text" label="Full Names" identity="fullnames" v-model="signupData.fullname"
                                placeholder="ex. Wendi Kardian"></base-input>
                            <!-- for username -->
                            <base-input type="text" label="Username" identity="username" placeholder="ex. wendikardian"
                                v-model="signupData.username">
                            </base-input>
                            <!-- for email address -->
                            <base-input type="email" label="Email Address" identity="email" placeholder="name@example.com"
                                v-model="signupData.email"></base-input>
                            <!-- for password -->
                            <base-input type="password" label="Password" identity="password"
                                placeholder="insert your password" v-model="signupData.password"
                                @keyInput="passwordCheck"></base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size: 11px"
                                :style="{ display: passwordStatusDisplay }">
                                The Password field must be at least 8 characters in length.
                            </p>
                            <!-- for confirm password -->
                            <base-input type="password" label="Confirm Password" identity="password2"
                                v-model="signupData.password2" placeholder="insert your password again"
                                @keyInput="confirmationPasswordCheck"></base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size: 11px;"
                                :style="{ display: confirmPassowrdDoesNotMatch }">
                                The Password confirmation does not match.
                            </p>
                            <p class="text-success mt-1 fw-medium" style="font-size: 11px"
                                :style="{ display: confirmPassowrdDoesMatch }">
                                The Password confirmation does match.
                            </p>
                            <base-input type="file" identity="recipeImage" label="Profile Photo" :isImage="true"
                                :value="signupData.imageLink" @change="checkImage">

                                <div>
                                    <div class="border pi-1 mt-2 rounded-circle">
                                        <img :src="signupData.imageLink" alt="" class="rounded-circle" width="140"
                                            height="150" style="object-fit: cover">
                                    </div>
                                    <div class="text-center" style="transform: translateY(-24px)">
                                        <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white">

                                        </i>
                                    </div>
                                </div>
                            </base-input>

                            <!-- add button login -->
                            <div class="mt-5 w-100 d-flex justify-content-center">

                                <base-button class="login w-100 my-3">Register </base-button>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-none d-lg-block">
                        <img src="@/assets/register.jpg" class="img-fluid" style="height: 700px; object-fit: cover;"
                            alt="Login image">
                    </div>
                </div>
            </div>
        </form>
    </main>
</template>


<script setup>

import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
import { reactive, ref } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();


const confirmPassowrdDoesNotMatch = ref("none");
const confirmPassowrdDoesMatch = ref("none");
const passwordStatusDisplay = ref("none");



const signupData = reactive({
    fullname: '',
    username: '',
    email: '',
    password: '',
    password2: '',
    isLogin: false,
    imageLink: 'https://www.w3schools.com/howto/img_avatar.png'
})

const passwordCheck = () => {
    if (signupData.password.length < 8) {
        passwordStatusDisplay.value = "block";
    } else {
        passwordStatusDisplay.value = "none";
    }
}


const confirmationPasswordCheck = () => {
    if (signupData.password2 === "") {
        confirmPassowrdDoesNotMatch.value = "none";
        confirmPassowrdDoesMatch.value = "none";
        return;
    }

    if (signupData.password !== signupData.password2) {
        confirmPassowrdDoesNotMatch.value = "block";
        confirmPassowrdDoesMatch.value = "none";
        return;
    }

    confirmPassowrdDoesNotMatch.value = "none";
    confirmPassowrdDoesMatch.value = "block";
}


const checkImage = (e) => {
    console.log(e)
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
        console.log(reader.result);
        signupData.imageLink = reader.result;
    })
}

const register = async () => {
    if(signupData.password !== signupData.password2 || signupData.password.length < 8) {
        signupData.password2 = "";
        signupData.password = "";
        confirmPassowrdDoesNotMatch.value = "none";
        confirmPassowrdDoesMatch.value = "none";
    }else { 
        await store.dispatch('auth/getRegisterData', signupData);
        router.push('/');
    }
};
</script>
