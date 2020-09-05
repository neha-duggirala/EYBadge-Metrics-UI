<template>
  <div id="cards">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in $store.state.employeesList"
          :key="card.employeeId"
          :cols="flex"
          class="d-flex"
        >
          <v-card class="d-flex flex-column" height="400" width="375">
            <v-img
              :src="src"
              class="black--text align-end"
            ><v-card-title>{{card.employeeName}}</v-card-title></v-img>
            <!-- <v-card-text style="myStyle" v-text="card.employeeName"></v-card-text> -->
            <v-card-actions>
              <v-btn icon :to="{ name: 'Employee', params: {'id':card.employeeId}}" >
                <v-icon>mdi-chart-areaspline</v-icon>
              </v-btn>
              <v-btn icon to="/TeamCards">
                <v-icon>mdi-graph</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
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
      employeesList: "employeesList",
    }),
  },
  data() {
    return {
      src: "http://localhost:8080/man.png",
      flex: 4,
    };
  }
};
</script>

<style>
.v-card__title {

  color: #FFFF00;
}
</style>