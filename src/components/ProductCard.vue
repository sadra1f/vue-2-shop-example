<template>
  <div class="p-2 bg-white rounded-md">
    <div
      class="relative w-full pt-[100%] bg-neutral-100 rounded overflow-hiddens"
    >
      <p class="absolute w-full text-center top-[calc(50%-1rem)]">No Image</p>
    </div>
    <div class="cart-content-c pt-2">
      <h3 class="font-bold">{{ data.name }}</h3>
      <p class="h-24 sm:h-32 lg:h-20 overflow-hidden">
        <span v-if="data.description">
          {{
            data.description.length > charLength
              ? `${data.description.slice(0, charLength)}...`
              : data.description
          }}
        </span>
      </p>
      <p class="pt-2" v-if="data.price && data.is_available">
        <span class="currency text-xs">$</span>
        <span class="price">{{ data.price }}</span>
      </p>
      <p class="pt-2" v-else>Unavailable</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    data: Object,
  },
  data() {
    return {
      charLength: 72,
    };
  },
};
</script>
