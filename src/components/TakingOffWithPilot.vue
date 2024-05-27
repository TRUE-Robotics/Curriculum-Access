<template>
  <v-app>
    <v-main>
      <top-bar @search="searchFiles"></top-bar>
      <v-container>
        <v-card class="mx-auto">
          <file-folder
            :contents="filteredFiles"
            folder=""
            @downloadFolder="downloadFolder"
            @downloadFile="downloadFile"
          ></file-folder>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { listFiles, downloadFile, downloadFolder } from "@/awsService";
import FileFolder from "./FileFolder.vue";
import TopBar from "./TopBar.vue";

export default {
  components: {
    FileFolder,
    TopBar,
  },
  data() {
    return {
      files: {},
      searchQuery: "",
    };
  },
  computed: {
    filteredFiles() {
      if (!this.searchQuery) {
        return this.files;
      }
      const filter = (contents) => {
        const result = {};
        for (const [name, item] of Object.entries(contents)) {
          if (this.isFolder(item)) {
            const filteredContents = filter(item);
            if (Object.keys(filteredContents).length > 0) {
              result[name] = filteredContents;
            }
          } else if (
            name.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) {
            result[name] = item;
          }
        }
        return result;
      };
      return filter(this.files);
    },
  },
  async created() {
    this.files = await listFiles("taking-off-with-pilot");
  },
  methods: {
    async downloadFile(key) {
      await downloadFile("taking-off-with-pilot", key);
    },
    async downloadFolder(key) {
      await downloadFolder("taking-off-with-pilot", key);
    },
    searchFiles(query) {
      this.searchQuery = query;
    },
    isFolder(value) {
      return value && !value.lastModified;
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
