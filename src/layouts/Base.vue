<template>
  <div>
    <div>
      <nav class="nav sticky">
        <router-link class="navbar-brand" to="/">Vue eCommerce</router-link>
        <div>
          <div class="profile" v-if="user.photoURL">
          <button class="button" @click="logout()" >Log Out</button>
            <span>
              <img
                :src="user.photoURL"
                class="profile-image"
                alt
              />
            </span>
            <router-link class="button center" to="/home/cart">
              <img class="cart-icon"
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt />
              <span class="cart-items">{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link  v-else class="button" to="/">Log In</router-link>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Base",
  
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart"]),
    ...mapActions("account", ["logout"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.nav {
  overflow: hidden;
  background-color: darkblue;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index:1
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
}

.profile-image {
  width: 42px;
  height: 42px;
  border-radius: 100%;
  margin-right: 2vw;
  margin-left: 2vw;
  vertical-align: middle;
}
.page-container {
  padding-top: 5.5rem;
}
.button {
  padding: 0.8rem;
  border-radius: 10px;
  font-weight: bold;
  background: darkblue;
  color: white;
}

.button:hover {
  background: #00b4b4;
}

.cart-icon {
  filter: brightness(0) invert(1);
  vertical-align: middle;
  height: 36px;
  width: auto;
}
.cart-icon:hover{
  filter: brightness(0);
}

.cart-items{
  background-color: rgba(255, 0, 0, 0.87);
  padding: 2px 5px;
  border-radius: 10px;
  color: black;
}
</style>