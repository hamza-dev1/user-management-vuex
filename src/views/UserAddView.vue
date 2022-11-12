<template>
    
    <div class="p-5 mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 
    md:w-5/6
    lg:w-4/6
    xl:w-3/6
    ">
<form @submit.prevent="addUser">
<div :class="{ 'error' : hasError('name') }" class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="name" v-model="user.name">
    <span class="text-red-700 dark:text-red-500" v-if="hasError('name')">Please provide a value</span>
</div>
<div :class="{ 'error' : hasError('username') }" class="mb-6">
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
    <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" v-model="user.username">
    <span class="text-red-700 dark:text-red-500" v-if="hasError('username')">Please provide a value</span>
</div>

  <div :class="{ 'error' : hasError('email') }" class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" v-model="user.email">
    <span class="text-red-700 dark:text-red-500" v-if="hasError('email')">Please provide a value</span>
  </div>
<div :class="{ 'error' : hasError('phone') }" class="mb-6">
    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
    <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your phone number" v-model="user.phone">
    <span class="text-red-700 dark:text-red-500" v-if="hasError('phone')">Please provide a value</span>
</div>
<div :class="{ 'error' : hasError('about') }" class="mb-6">
<label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">About</label>
<textarea id="about" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About you..." v-model="user.about"></textarea>
    <span class="text-red-700 dark:text-red-500" v-if="hasError('about')">Please provide a value</span>
</div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>

</template>

<script>

import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'UserAddView',
    setup() {
        const store = useStore();
        const router = useRouter();
        const fieldInitalState = {
            id: computed(() => store.getters.getUsersCount ).value + 1,
            name: '',
            username: '',
            email: '',
            phone: '',
            about: '',
            image: 
                require(`@/assets/images/img${Math.floor(Math.random() * 5) + 1}.png`), // generate number between 1 and 5 (because i have 5 images)
        }
        const user = reactive({ 
            ...fieldInitalState
         });
        const missingFieldList = ref([]);

        const hasError = (field) => {
            return missingFieldList.value.includes(field);
        };

        const addUser = () => {
            missingFieldList.value.length = 0;
            for (let property of Object.keys(user)) {
                if (user[property] === '') {
                    missingFieldList.value.push(property);
                }
            }
            if (missingFieldList.value.length === 0) {
                store.dispatch('usersModule/addUser', user);
                router.push('/');
            }
        }
        return {
            addUser,
            hasError,
            missingFieldList,
            user,
        }
    }
}
</script>

<style lang="postcss" scoped>
.error {
    &> label, input, textarea {
        @apply text-red-700 dark:text-red-500;
    }
    &> input, textarea {
        @apply bg-red-50 border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400;
    }
}

.success {
    &> label, input, textarea {
        @apply text-green-700 dark:text-green-500;
    }
    &> input, textarea {
        @apply bg-green-50 border-green-500 text-green-900 placeholder-green-300 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400;
    }
}
</style>