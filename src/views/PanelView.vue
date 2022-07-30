<template>
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
</template>

<script>
export default {
  name: "PanelView",
  data() {
    return {
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

    submitHandler(e) {
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
};
</script>
