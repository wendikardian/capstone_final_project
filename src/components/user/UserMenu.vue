<template>
    <div class="col-12 col-lg-3">
        <div class="row mt-4">
            <h2>Settings</h2>
        </div>
        <div class="row mt-4" @click="menuClicked('personal-info')">
            <a href="">Profile Detail</a>
        </div>
        <div class="row mt-4" @click="menuClicked('change-password')">
            <a href="">Change Password</a>
        </div>
        <div class="row mt-4" @click="menuClicked('transaction-history')">
            <a href="">Transaction History</a>
        </div>
    </div>
</template>


<script setup>
const emit = defineEmits(['changeComponent']);


const menuClicked = option => {
    emit('changeComponent', option);
}
</script>