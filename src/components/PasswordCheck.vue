<template>
  <div>
    <div v-if="authenticated">
      <router-view></router-view>
    </div>
    <div v-else>
      <h1>Access Denied</h1>
    </div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  data() {
    return {
      authenticated: false,
    };
  },
  created() {
    this.checkPassword();
  },
  methods: {
    checkPassword() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const password = urlParams.get("password");
        const envPassword = process.env.VUE_APP_ACCESS_PASSWORD;
        if (password === envPassword || config.dev) {
          this.authenticated = true;
          console.log("Authenticated");
        } else {
          this.authenticated = false;
          console.log("Not authenticated");
        }
      } catch (e) {
        console.log("Could not check password", e);
      }
    },
  },
};
</script>
