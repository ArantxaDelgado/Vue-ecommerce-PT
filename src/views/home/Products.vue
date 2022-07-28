<template>
  <div class="cont">
    <section class="search-filter-container">
      <div class="search-field">
        <input v-model="search" class="search-input" type="text" placeholder="Search by name" pattern=/[a-zA-Z]/ />
      </div>
    </section>

    <div class="products">
      <div v-for="product in products" :key="product.id">        
        <ProductCard v-if="product.name.toLowerCase().includes(search)" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "../../components/products/ProductCard";

export default {
  data() {
    return {
      search: "",
    }
  },

  computed: {
    ...mapGetters("product", ["products"]),
  },

  components: { ProductCard },

  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart", "filterByName"]),
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-filter-container {
  display: flex;
  padding-left: 0.7rem;
}

.products {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  gap: 2rem;
}
</style>
