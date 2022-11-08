<template>
  <Navbar />
  <div class="w-11/12 lg:container mx-auto my-5">
  <router-view/>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar"

export default {
  name: "App",
  components: {
    Navbar
  },
  setup() {
    
  },
}
</script>
<style lang="postcss">
</style>