<template>
  <div>
    <div class="p-2 bg-white rounded-md">
      <form @submit="submitHandler">
        <div class="grid grid-cols-1 gap-x-4 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              @input="nameInputHandler"
              required
            />
          </div>

          <div>
            <label for="slug">Slug</label>
            <input
              type="text"
              name="slug"
              id="slug"
              v-model="slug"
              @input="slugInputHandler"
              required
            />
          </div>

          <div>
            <label for="image">Image URL</label>
            <input type="text" name="image" id="image" v-model="image" />
          </div>

          <div>
            <label for="alt">Image alt</label>
            <input type="text" name="alt" id="alt" v-model="alt" />
          </div>
        </div>

        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          v-model="description"
        ></textarea>

        <div class="grid grid-cols-1 gap-x-4 sm:grid-cols-[1fr,1fr,2fr]">
          <div>
            <label for="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="price"
              @input="priceInputHandler"
              required
            />
          </div>

          <div>
            <label for="is-available">Is Available</label>
            <select name="is-available" id="is-available" v-model="isAvailable">
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
          </div>

          <div class="flex py-2">
            <button
              type="submit"
              class="block w-full h-10 p-2 mt-auto rounded transition text-center bg-neutral-700 text-white hover:bg-neutral-800"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="mt-4 p-2 bg-white rounded-md">
      <div class="flex w-full mb-2 font-bold">
        <div class="flex-[10]">Name</div>
        <div class="flex-[10]">Slug</div>
        <div class="flex-[4]">Price</div>
        <div><CheckIcon class="opacity-0" /></div>
      </div>

      <div
        class="flex w-full my-1"
        v-for="product in products"
        :key="product.id"
      >
        <div class="flex-[10]">{{ product.name }}</div>
        <div class="flex-[10]">{{ product.slug }}</div>
        <div class="flex-[4]">{{ product.price }}</div>
        <div>
          <CheckIcon v-if="product.is_available" />
          <XIcon v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CheckIcon from "../components/icons/CheckIcon.vue";
import XIcon from "../components/icons/XIcon.vue";

export default {
  name: "PanelView",
  components: { CheckIcon, XIcon },
  data() {
    return {
      products: [],
      name: "",
      slug: "",
      image: "",
      alt: "",
      description: "",
      price: "",
      isAvailable: true,
      isSlugModified: false,
    };
  },
  methods: {
    slugify(text) {
      return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
    getProducts() {
      axios
        .get("/products")
        .then((res) => {
          if (res.data)
            this.products =
              typeof res.data.length != "undefined"
                ? res.data.reverse()
                : res.data;
        })
        .catch((err) => console.error(err));
    },

    submitHandler(e) {
      axios
        .post("/products", {
          name: this.name,
          slug: this.slug,
          image: this.image ?? null,
          alt: this.alt ?? null,
          description: this.description ?? null,
          price: this.price,
          is_available: this.isAvailable,
        })
        .then((res) => {
          if (res.status == 201) {
            this.name = "";
            this.slug = "";
            this.image = "";
            this.alt = "";
            this.description = "";
            this.price = "";
            this.isAvailable = true;

            this.getProducts();
          }
        })
        .catch((error) => console.error(error));

      e.preventDefault();
    },

    priceInputHandler() {
      this.price = this.price.replace(/[^0-9.]/g, "");
      while (/(.*[.].*[.].*)|(.*[.].{3,})/g.test(this.price))
        this.price = this.price.substring(0, this.price.length - 1);
    },
    nameInputHandler() {
      if (!this.isSlugModified) {
        this.slug = this.slugify(this.name);
      }
    },
    slugInputHandler() {
      this.isSlugModified = true;
      this.slug = this.slugify(this.slug);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
