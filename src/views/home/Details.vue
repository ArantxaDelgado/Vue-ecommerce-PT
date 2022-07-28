<template>
  <div class="container-fluid">
    
        <img :src="product.imageUrl" alt />

    <div class="text">
      <div class="product-name">{{ product.name }}</div>
      <p class="product-description">{{ product.content }}</p>
      <div>
        <p class="price">Price</p>
        <p class="product-price">${{ product.price }}</p>
      </div>
      <AddToCart :product="product" v-if="user.uid" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../../components/details/AddToCart";
export default {
  data() {
    return {
      isInCardProp: false,
    };
  },
  
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"]),
  },

  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails"]),
  },

  mounted() {
    this.productDetails(this.$route.params.idProduct);
  },
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  gap: 1rem;
}

.image-product {
  width: 100%;
}

.text {
  text-align: left;
}

.product-name {
  font-size: 3.5rem;
}

.product-description {
  text-align: justify;
  font-size: 1.2rem;
}

.price {
  font-size: 1.5rem;
  margin: 0;
}

.product-price {
  font-size: 2rem;
  margin: 0;
}

.card * {
  max-height: 85vh;
}


</style>
