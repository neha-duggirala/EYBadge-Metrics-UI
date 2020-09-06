<template>
  <v-app-bar class="ats-header" fixed color="#323232">
    <v-img
      class="header-logo"
      src="http://localhost:8080/ey-logo.jpg"
      max-height="90"
      max-width="90"
      to="/"
    ></v-img>
    <v-toolbar-title class="header-title" >Badge Metrics</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.ats-header {
  z-index: 9 !important ;
  height: 64px !important;
  .header-title {
    color: #FFFFFF;
    margin-left: 2%;
    font-size: 30pt;
    font-style: bold;
  }
}
</style>