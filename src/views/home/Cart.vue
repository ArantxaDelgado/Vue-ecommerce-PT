<template>
      <div class="cont">
        <div>
          <a
            v-for="item in cart"
            :key="item.id"
            href="#"
            class="item"
          >
            <img :src="item.imageUrl" alt height="60" width="60" />
            <p class="title">{{ item.name }}</p>
            <div class="price">
              <div>
                <p>Price</p>
                <p>${{ item.price }}</p>
              </div>
              <div>
                <p>Quantity</p>
                <p>{{ item.quantity }}</p>
              </div>
              <div>
                <p>Total</p>
                <p>${{ item.price * item.quantity }}</p>
              </div>
            </div>
          </a>
          
              <div class="checkout">
                <p class="title">Total</p>
                <div>
                  <p>Total Price</p>
                  <p>${{ totalPrice }}</p>
                </div>
              </div>
          <button
            @click="checkout()"
            type="button"
            class="button"
          >Checkout</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
    ...mapGetters("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style scoped>
.cont{
  width: 90vw;
  margin: 0 auto;
}
.item{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid rgba(128, 128, 128, 0.438);
  align-items: center;
}

.price {
  display: flex;
  gap: 2.5rem;
  justify-content: flex-end;
  color: black;
  margin-right: 5%;
}

.checkout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.3rem;
  color: black;
}
.button{
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  width: 50%;
  font-weight: bold;
}

.button:hover {
  background-color: #00b4b4;
}

</style>