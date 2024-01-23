<template>
    <header class="container-fluid bg-white py-3 border-bottom position-sticky top-0 z-3">
        <div
            class="container-fluid header__navbar d-flex row justify-content-center justify-content-between align-items-center">
            <div class="col-2">
                <router-link to="/">
                    <img src="@/assets/Logo.png" class="object-fit-contain logo_header" alt="Logo">
                </router-link>
            </div>
            <navigation-bar></navigation-bar>
        </div>
    </header>
</template>


<script setup>
import NavigationBar from './NavigationBar.vue'
</script>