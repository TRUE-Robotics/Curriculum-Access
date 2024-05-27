<template>
  <v-app>
    <v-main>
      <password-check />
    </v-main>
  </v-app>
</template>

<script>
import PasswordCheck from "./components/PasswordCheck.vue";

export default {
  components: {
    PasswordCheck,
  },
};
</script>
