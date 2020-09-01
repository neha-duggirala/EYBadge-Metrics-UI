<template>
  <div v-bind:class="{ 'ats-sidebar-expanded': sideBarExpanded }">
    <Header></Header>
    <v-app>
      <div class="d-flex">
        <div>
          <Navigation></Navigation>
        </div>
        <v-content class="ats-container">
          <router-view></router-view>
        </v-content>
      </div>
      <Snackbar></Snackbar>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import Snackbar from "./components/SnackBar.vue";

export default {
  name: "App",

  components: {
    Header,
    Navigation,
    Footer,
    Snackbar
  },

  data: () => ({
    sideBarExpanded: false
  })
};
</script>
<style lang="scss">
html{
  overflow: auto !important;
}
.ats-container {
  margin: 79px 15px 15px 15px;
  .v-content__wrap {
    margin-top: 0;
  }
}
</style>