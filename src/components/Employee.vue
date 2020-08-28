<template>
  <v-card title="Employee">
    <v-text-field label="Enter your ID" filled>{{selectedEmployee}}</v-text-field>
    <p>{{selectedEmployee}}</p>
    <p>{{this.$store.state.EmployeeObj}}</p>
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
  },
  mounted(){
          this.selectedEmployee = this.$route.params.id;
          this.$store.dispatch("getEmpById", 1)
  }
};
</script>

<style>
</style>