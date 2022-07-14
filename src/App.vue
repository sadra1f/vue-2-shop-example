<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <NavbarMain />
    <div class="container px-2 py-4 mx-auto sm:px-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarMain from "./components/NavbarMain.vue";

export default {
  name: "App",
  components: { NavbarMain },
};
</script>
