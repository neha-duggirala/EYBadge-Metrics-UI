<template>
  <div>
    <v-snackbar v-model="$store.state.snackbar.display" bottom right :color="$store.state.snackbar.color">{{$store.state.snackbar.message}}</v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar"
};
</script>

<style>
</style>