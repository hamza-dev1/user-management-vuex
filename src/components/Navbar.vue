<template>
  
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div class="container flex flex-wrap max-md:justify-between items-center mx-auto">
    <a href="https://github.com/hamza-dev1" target="_blank" class="flex items-center md:mr-10">
        <img src="../assets/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">UsersMS</span>
    </a>
    <button @click="toggleNavbar" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div :class="hidden ? 'hidden' : ''" class="w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link to="/users" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</router-link>
        </li>
        <li>
          <router-link to="/user/add" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add user</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const hidden = ref(true);
        const toggleNavbar = () => {
            hidden.value = !hidden.value;
        }

        return {
            hidden,
            toggleNavbar
        }
    }
}
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
    @apply md:text-blue-200
}

</style>