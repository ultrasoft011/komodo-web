<template>
  <div>
    <h1>Login</h1>
    <label>Email: </label>
    <b-form-input type="email" v-model="email" /><br />
    <label>Password: </label>
    <b-form-input type="password" v-model="password" /><br />
    <b-button variant="outline-primary" @click='login()'>Log in</b-button>
    <router-link to="/register">Sign up</router-link>
    <p>{{ getData }}</p>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      getData: {},
    };
  },
  methods: {
    async login() {
      // console.log(`${this.email} ${this.password}`)
      const dataGet = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(dataGet);
      this.getData = dataGet.data;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
div {
  margin: 60px;
  padding: 50px;
  background: linear-gradient(
    90deg,
    rgba(255, 180, 178, 1) 0%,
    rgba(255, 238, 238, 1) 100%
  );
}
h1 {
  font-family: "Monoton", cursive;
  color: rgb(70, 62, 62);
}
</style>
