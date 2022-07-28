<template>
  <div>
    <div class="cont">
      <div class="login-card">
        <img
          src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
          width="150"
          alt=""
        />

        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />

        <button @click="login()" type="submit" class="button">
          Login
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions("account", ["login"]),
  },
};
</script>

<style scoped>
.cont {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 40%;
  height: 65%;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.267);
  border-right: 2px solid rgba(0, 0, 0, 0.267);
  border-left: 2px solid rgba(0, 0, 0, 0.267);
  border-bottom: 3px solid rgba(0, 0, 0, 0.267);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.form-control {
  height: 50px;
  width: 100%;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  width: 100%;
  font-weight: bold;
}

.button:hover {
  background-color: #00b4b4;
}
</style>
