<template>
    <div class="card p-2 p-lg-5">
        <h4>Edit profile</h4>
        <div class="d-flex justify-content-between mt-4">
            <p class="font-weight-bold">Photo</p>
            <div class="upload-image d-flex align-items-center justify-content-end" style="gap: 20px;">
                <!-- icon profile -->
                <!-- <h1 class="fas fa-user"></h1> -->
                <img :src="userData.imageLink" alt="" class="img-avatar-profile">
                <div class="col-6 col-lg-12">

                    <input type="file" class="form-control w-100" id="exampleFormControlInput1"
                    :value="userData.imageLink"
                        placeholder="name@example.com">
                </div>
                <!-- font awesome icon trash -->


                <i class="fas fa-trash">
                </i>

                <!-- if icon trash clicked input will be reset -->

            </div>
        </div>
        <base-input type="text" label="Fullname" identity="fullname" v-model="userData.fullName">
        </base-input>
        <base-input type="text" label="Username" identity="username" v-model="userData.username">
        </base-input>
        <base-input type="email" label="Email" identity="email" v-model="userData.email">
        </base-input>
        <div class="d-flex justify-content-end mt-4">
            <button type="button" class="btn btn-success">Update Profile</button>
        </div>
    </div>
</template>


<script setup>

import BaseInput from '../ui/BaseInput.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore();
const userData = computed(() => {
    return store.state.auth.userLogin;
})

console.log(userData)


</script>

<style>
.img-avatar-profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
</style>