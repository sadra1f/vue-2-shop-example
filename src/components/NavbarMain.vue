<template>
  <nav class="w-full px-8 py-4 bg-white border-b">
    <div class="container flex items-center mx-auto">
      <div class="title">
        <router-link :to="{ name: 'home' }" class="nav-title" exact>
          <h1 class="font-bold text-xl font-plus-jakarta-sans">Vue Shop</h1>
        </router-link>
      </div>
      <div class="links">
        <router-link :to="{ name: 'home' }" class="nav-link" exact>
          Home
        </router-link>
        <router-link :to="'#'" class="nav-link" exact> Products </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMain",
};
</script>
