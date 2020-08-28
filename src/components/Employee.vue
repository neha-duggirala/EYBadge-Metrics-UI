<template>
  <v-card title="Employee">
    <v-text-field v-model="id" label="Enter your ID" filled>{{selectedEmployee}}</v-text-field>
  </v-card>
</template>

<script>
export default {
  name: "Employee",
  data()
  {
      return{
      selectedEmployee: this.$route.params.id
      }
  }
};
</script>

<style>
</style>