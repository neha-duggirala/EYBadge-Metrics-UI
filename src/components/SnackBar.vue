<template>
  <div>
    <v-snackbar v-model="$store.state.display" bottom right :color="$store.state.color">{{$store.state.message}}</v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar"
};
</script>

<style>
</style>