<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <div>
        <v-toolbar-title>EY Employee Performance Metrics</v-toolbar-title>
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="ats-container">
      <router-view></router-view>
    </v-content>
    <v-main></v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>