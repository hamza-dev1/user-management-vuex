<template>
  <div class="home flex flex-col justify-center items-center mt-10 mx-auto md:w-1/2">
    <img src="../assets/images/logo.png" alt="">
    <h1 class="text-2xl mt-6">UsersMS a vuex project for managing users</h1>

<div class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-6">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Users</h5>
        <router-link to="/users" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </router-link>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4" v-for="user in users" :key="user.id">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" :src="user.image" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <router-link :to="{ name: 'userDetail', params: {'id': user.id}}" class="text-base font-medium text-gray-900 truncate dark:text-white">
                            {{ user.name }}
                        </router-link>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {{ user.email }}
                        </p>
                    </div>
                    <router-link :to="{ name: 'userUpdate', params: {'id': user.id}}" class="inline-flex items-center text-base font-semibold text-blue-600 hover:underline dark:text-blue-500">
                        Edit
                    </router-link>
                </div>
            </li>
        </ul>
   </div>
</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    const store = useStore();
    const users = computed(() => store.getters.getTopUsers).value;
    return {
        users,
    }
  }
}
</script>
