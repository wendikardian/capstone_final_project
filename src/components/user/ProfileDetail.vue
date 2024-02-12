


<template>
    <div class="card p-2 p-lg-5" v-if="userData">
        <h4>Edit profile</h4>
        <div class="d-flex justify-content-between mt-4">
            <p class="font-weight-bold">Photo</p>
            <div class="upload-image d-flex align-items-center justify-content-end" style="gap: 20px;">
                <img :src="userData.imageLink" alt="" class="img-avatar-profile">
                <div class="col-6 col-lg-12">
                    <input type="file" class="form-control w-100" id="exampleFormControlInput1"
      placeholder="name@example.com" @change="handleFileChange">
                </div>
                <i class="fas fa-trash">
                </i>

            </div>
        </div>
        <base-input type="text" label="Fullname" identity="fullname" v-model="userData.fullName">
        </base-input>
        <base-input type="text" label="Username" identity="username" v-model="userData.username">
        </base-input>
        <base-input type="email" label="Email" identity="email" v-model="userData.email" :value="userData.email"
        
        >
        </base-input>
        <div class="d-flex justify-content-end mt-4">
            <button type="button" class="btn btn-success"
            @click="updateData"
            >Update Profile</button>
        </div>
    </div>
</template>


<script setup>

import BaseInput from '../ui/BaseInput.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { onMounted, reactive } from 'vue';



const store = useStore();
const userData = computed(() => {
    return store.state.auth.userLogin;
})

const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            userData.value.imageLink = e.target.result;
        };
        reader.readAsDataURL(file);
        console.log(userData.value.imageLink)
      }
}

// const userDetail = reactive({
//     imageLink : '',
//     fullName : '',
//     email : '',
//     userId : '',
//     username : ''
// })

// onMounted(() => {
//     Object.assign(userDetail, store.state.auth.userLogin)
// })

console.log(userData)
const updateData = () => {
    console.log(userData.value)
}


</script>

<style>
.img-avatar-profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
</style>