<template>
  <v-toolbar color="secondary">
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>My files</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      @input="onSearch"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-view-module</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.search);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
