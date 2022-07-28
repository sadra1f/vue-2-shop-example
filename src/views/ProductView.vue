<template>
  <div class="p-2 bg-white rounded-md">
    <div class="grid gap-4 md:grid-cols-[min-content,1fr]">
      <div class="w-full md:w-72 xl:w-96">
        <div
          class="relative w-full pt-[100%] bg-neutral-100 rounded overflow-hiddens"
        >
          <p class="absolute w-full text-center top-[calc(50%-1rem)]">
            No Image
          </p>
        </div>

        <router-link
          to="#"
          class="block w-full p-2 mt-2 rounded transition text-center bg-neutral-700 text-white hover:bg-neutral-800"
          :class="
            (product.price && product.is_available) ||
            'bg-neutral-400 pointer-events-none hover:bg-neutral-400'
          "
        >
          <span v-if="product.price && product.is_available">
            Add to Cart -
            <span class="currency text-xs">$</span>
            <span class="price">{{ product.price }}</span>
          </span>
          <span v-else>Unavailable</span>
        </router-link>
      </div>

      <div class="flex flex-col">
        <h1 class="font-bold text-lg">{{ product.name }}</h1>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductView",
  data() {
    return {
      product: {},
    };
  },
  created() {
    axios
      .get(`/products/${this.$route.params.slug}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) this.product = res.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>
