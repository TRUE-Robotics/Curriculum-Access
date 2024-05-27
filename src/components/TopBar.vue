<template>
  <v-toolbar color="white" dark>
    <v-toolbar-title :style="{ paddingLeft: '150px' }"
      >Curriculum Access</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      @input="$emit('search', search)"
      :style="{ paddingRight: '150px' }"
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
