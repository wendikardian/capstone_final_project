<template>
    <div class="card p-2 p-lg-5">
        <h4>Change Password</h4>
        <base-input type="password" label="Old Password" identity="oldpassword" v-model="changePasswordData.oldPassword">
        </base-input>
        <base-input type="password" label="New Password" identity="newpassword" v-model="changePasswordData.newPassword">
        </base-input>
        <base-input type="password" label="Confirm New Password" identity="password"
            v-model="changePasswordData.newPassword2">
        </base-input>
        <div class="d-flex justify-content-end mt-4">
            <base-button>Update Profile</base-button>
        </div>
    </div>
</template>


<script setup>
import { reactive, ref } from "vue";
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from "../ui/BaseButton.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';


const changePasswordData = reactive({
    oldPassword: '',
    newPassword: '',
    newPassword2: '',
})

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