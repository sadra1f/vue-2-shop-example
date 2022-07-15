<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <router-link v-for="product in products" :key="product.id" to="#">
      <ProductCard :data="product" />
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomeView",
  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("/products")
      .then((res) => {
        if (res.data) this.products = res.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>
