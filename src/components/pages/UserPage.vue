<template>
    <main>
        <div class="container">
            <div class="row my-5">

                <user-menu @changeComponent="$router.push($event)">

                </user-menu>
                <div class="col-12 col-lg-9 mt-5">
                    <component :is="component[getRoute]"></component>
                </div>
            </div>
        </div>

    </main>
</template>


<script setup>
import UserMenu from '../user/UserMenu.vue';
import { useRoute } from 'vue-router';
import ProfileDetail from '../user/ProfileDetail.vue';
import ChangePassword from '../user/ChangePassword.vue';
import { computed } from 'vue';

const route = useRoute();

const component = {
    "personal-info": ProfileDetail,
    "change-password" : ChangePassword
}

const getRoute = computed(() => {
    return route.params.component;
})


const userData = computed(() => {
    return store.state.auth.userLogin;
})
</script>

