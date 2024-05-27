<template>
  <v-toolbar color="purple" dark>
    <v-toolbar-title>My Files</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      @input="$emit('search', search)"
      :style="{ paddingRight: '25px' }"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      search: "",
    };
  },
};
</script>
