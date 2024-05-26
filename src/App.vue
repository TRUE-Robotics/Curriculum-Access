<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card class="mx-auto">
          <v-toolbar color="secondary">
            <v-btn icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title>My files</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-view-module</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list lines="two">
            <v-list-subheader inset>Folders</v-list-subheader>
            <file-folder
              :contents="files"
              @download="downloadFile"
            ></file-folder>
          </v-list>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { listFiles, downloadFile } from "@/awsService";
import FileFolder from "./components/FileFolder.vue";

export default {
  components: {
    FileFolder,
  },
  data() {
    return {
      files: {},
    };
  },
  async created() {
    this.files = await listFiles("tr-curriculum-bucket");
  },
  methods: {
    async downloadFile(key) {
      await downloadFile("tr-curriculum-bucket", key);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
