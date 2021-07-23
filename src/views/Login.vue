<template>
  <div>
    <h1>Login</h1>
    <label>Email: </label>
    <b-form-input type="email" v-model="email" /><br />
    <label>Password: </label>
    <b-form-input type="password" v-model="password" /><br />
    <b-button variant="primary" @click="login()">Log in</b-button>
    <b-button square router-link to="/register">Sign Up</b-button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Login",
  data() {
    return {
      email: "ultrasoft.011@gmail.com",
      password: "Gali1271*+",
      // getData: {},
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      // console.log(`${this.email} ${this.password}`)
      try {
        const user = {
          email: this.email,
          password: this.password,
        };
        const userLogin = await axios.post(
          "http://localhost:3000/api/users/login",
          user
        );
        console.log(userLogin);
        console.log(
          "Optenemos usuari con axios" + JSON.stringify(userLogin.data)
        ); // POR QUE NOS IMPRIME OBJETO OBJETO

        this.error = false;
        this.errorMessage = "";
        localStorage.setItem("userApp", JSON.stringify(userLogin.data));
        this.$router.push({
          name: "Home",
        });
      } catch (error) {
        this.error = true;
        this.errorMessage = error.response.data.message; // como aceder al mensage
        console.log(error.response);
        console.log(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
div {
  margin: 40px;
  padding: 40px;
  background: linear-gradient(
    90deg,
    rgba(255, 180, 178, 1) 0%,
    rgba(255, 238, 238, 1) 100%
  );
}
h1 {
  margin-bottom: 50px;
  font-family: "Monoton", cursive;
  font-size: 60px;
  color: rgb(70, 62, 62);
}
</style>
