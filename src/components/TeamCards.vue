<template>
  <div id="cards">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in $store.state.TeamsList"
          :key="card.teamId"
          :cols="flex"
          class="d-flex"
        >
          <v-card class="d-flex flex-column">
            <v-img
              :src="src"
              class="black--text align-end"
              height="300"
              width="400"
            ></v-img>
            <v-list-item-title class="headline mb-1">{{card.teamName}}</v-list-item-title>
            <!-- <v-list-item-subtitle>Size is {{card.teamSize}}</v-list-item-subtitle> -->

            <v-card-actions class="justify-center">
              <v-btn icon to="/Employee/1">
                <v-icon>mdi-home</v-icon>
              </v-btn>
              <v-btn icon to="/Manager">
                <v-icon>mdi-chart-areaspline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      employeesList: "TeamsList",
    }),
  },
  data() {
    return {
      src: "http://localhost:8080/team.png",
      flex: 4,
    };
  },
};
</script>

<style>

</style>