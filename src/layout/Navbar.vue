<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Your Library</b-nav-item>
          <b-nav-item href="#">Artist</b-nav-item>
          <b-nav-item href="#">Liked Songs</b-nav-item>
          <b-nav-item href="#">Emotions</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-nav tabs align="center">
          <b-button variant="danger">Log out</b-button>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
