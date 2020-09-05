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
          <v-card class="d-flex flex-column">
            <v-img
              :src="src"
              class="black--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              width="400"
            ></v-img>
            <v-list-item-title class="headline mb-1">{{card.employeeName}}</v-list-item-title>
            <v-card-actions class="justify-center">
              <v-btn icon :to="{ name: 'Employee', params: {'id':card.employeeId}}">
                <v-icon>mdi-calculator</v-icon>
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
      src: "http://localhost:8080/office_icon.jpg",
      flex: 4,
    };
  },
};
</script>

<style>
</style>