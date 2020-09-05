<template>
  <v-app-bar class="ats-header" fixed color="#323232">
    <v-img
      class="header-logo"
      src="http://localhost:8080/ey-logo.jpg"
      max-height="70"
      max-width="50"
      
    ></v-img>
    <v-toolbar-title class="header-title" >EY Badge Metrics</v-toolbar-title>
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
    color: white;
    margin-left: 3%;
    font-size: 20pt;
  }
}
</style>