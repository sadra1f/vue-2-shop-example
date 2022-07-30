<template>
  <nav class="sticky w-full py-4 bg-white border-b z-50 md:top-0">
    <div
      class="container px-4 flex flex-col items-center mx-auto sm:px-8 md:flex-row"
    >
      <div class="nav-main flex justify-between items-center">
        <router-link :to="{ name: 'home' }" class="nav-title" exact>
          <h1 class="font-bold text-xl font-plus-jakarta-sans">Vue Shop</h1>
        </router-link>

        <button
          class="cursor-pointer inline-block md:hidden"
          @click="showLinks = !showLinks"
        >
          <MenuIcon v-if="!showLinks" />
          <CloseIcon v-else />
        </button>
      </div>
      <div
        class="nav-links text-center pt-2 transition-enable duration-300 overflow-hidden disable md:pt-0 md:enable"
        :class="showLinks ? 'enable' : ''"
      >
        <router-link :to="{ name: 'home' }" class="nav-link" exact>
          Home
        </router-link>
        <router-link :to="{ name: 'products' }" class="nav-link" exact>
          Products
        </router-link>

        <router-link :to="'#'" class="nav-link inline-block md:hidden" exact>
          Panel
        </router-link>
        <router-link :to="'#'" class="nav-link inline-block md:hidden" exact>
          Cart
        </router-link>
      </div>
      <div class="nav-icons">
        <router-link :to="'#'" class="nav-icon hidden md:inline-block" exact>
          <UserIcon />
        </router-link>
        <router-link :to="'#'" class="nav-icon hidden md:inline-block" exact>
          <CartIcon />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from "./icons/CartIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import UserIcon from "./icons/UserIcon.vue";

export default {
  name: "NavbarMain",
  components: { CartIcon, MenuIcon, CloseIcon, UserIcon },
  data() {
    return {
      BREAK_POINT: 768,
      showLinks: false,
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler(event) {
      if (event.target.innerWidth >= this.BREAK_POINT && this.showLinks)
        this.showLinks = false;
    },
  },
};
</script>
