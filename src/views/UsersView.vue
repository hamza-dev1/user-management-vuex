<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center users mx-auto">
<div class=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" v-for="user in users" :key="user">
    <div class="relative card-header">
        <div class="cover">
            <img class="rounded-t-lg" src="../assets/images/cover.jpg" alt="">
        </div>
        <div class="absolute -bottom-10 w-full profile-pic">
            <img class="mx-auto mb-3 w-24 h-24 rounded-full shadow-lg border-4 border-white" :src="user.image" alt="Bonnie image"/>
        </div>
    </div>
    <div class="p-5 mt-5">
        <a href="#">
            <h5 class="mb-2 sm:text-base md:text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ user.name }}</h5>
        </a>
        <p class="mb-3 sm:text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">{{ user.about.substring(0, 80) }}...</p>
        <router-link :to="{ name: 'userDetail', params: { id: user.id }}" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </router-link>
    </div>
</div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'UsersView',
    setup() {
        const store = useStore();
        const usersState = computed(() => store.getters.getUsersState)
        const users = ref([
            ...usersState.value.users
        ]);
        return {
            users
        }
    }
}
</script>

<style>

</style>