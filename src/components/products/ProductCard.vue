<template>
  <div class="cards">
    <img :src="product.imageUrl" class="product-image" />
    <div class="body">
      <div class="product-info">
        <h5 class="product-name">{{ product.name }}</h5>
        <h5 class="product-price">{{ product.price }}$</h5>      
      </div>
      
      <router-link
          type="button"
          class="button"
          :to="'home/details/' + product.id"
        >More Info</router-link>
        
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["product"]
};
</script>

<style>
a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

a:hover {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.cards {
  width: auto;
  margin-bottom: 1.7rem;
  margin-left: 0.3rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.336);
}

.body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(128, 128, 128, 0.336);
  border-right: 1px solid rgba(128, 128, 128, 0.336);
}

.product-info {
  display: flex;
  justify-content: space-between;
}


.product-image {
  height: 300px;
}

.button {
  background-color: #007BFF;
  padding: 0.8rem;
}

.button:hover {
  background-color: #00b4b4;
}
</style>