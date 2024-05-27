<!-- src/components/LoadingSpinner.vue -->
<template>
  <div class="loading-container">
    <v-progress-circular
      size="100"
      indeterminate
      color="primary"
      class="ma-4"
    ></v-progress-circular>
    <div class="loading-text">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; /* Adjust height as needed */
  text-align: center;
}
.loading-text {
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
