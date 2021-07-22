<template>
  <div>
    <h1>Register</h1>
    <input type="text" v-model="name" />
    <input type="text" v-model="username" />
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="register()">Sign up</button>
    <router-link to="/login">Log in</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "Andrés",
      username: "ultrasoft011",
      email: "ultrasoft.011@gmail.com",
      password: "Gali1271*+",
    };
  },
  methods: {
    click() {
      console.log(`${this.email} ${this.password}`);
    },
    async register() {
      const user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log("Usuario: ", user);
      const userRegister = await axios.post(
        "http://localhost:3000/api/users/register",
        user
      );
      console.log("Imprimir usuario en la DB", userRegister);
    },
  },
};
</script>

<style></style>
