<template>
  <v-card class="mx-auto" max-width="1500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>

              <v-text-field v-model = "id" label="Enter your ID" filled></v-text-field>

              <v-radio-group>
                <v-radio label="Employee" value="employee"></v-radio>
                <v-radio label="Manager" value="manager"></v-radio>
              </v-radio-group>

              <v-btn :to="{name: 'Employee', params:{id}}" x-large color="success" dark>Login</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    cards: [
        { title: "Home", flex: 4 }
      ]
  }),
  methods:{
    mounted() {
    this.$store.dispatch("getManager");
  }
  }
};
</script>
