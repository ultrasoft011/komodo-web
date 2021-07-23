<template>
  <div id="app">
    <div v-if="isPublic">
      <router-view />
    </div>
    <div v-else>
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import Footer from "./layout/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    isPublic() {
      console.log("this.$route.meta?.isPublic", this.$route.meta?.isPublic);
      return this.$route.meta?.isPublic ?? false; //si meta no existe no tiene que haceder apubli (?? es como un o)
      //  if(this.$route.meta){
      //     return this.$route.meta.isPublic
      // } else {
      //   return false
      // }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
