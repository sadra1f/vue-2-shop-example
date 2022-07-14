<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <router-link to="#">
      <ProductCard :data="{ name: 'test' }" />
    </router-link>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomeView",
  components: { ProductCard },
};
</script>
