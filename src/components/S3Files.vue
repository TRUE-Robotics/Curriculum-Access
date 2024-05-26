<template>
  <div>
    <h1>File List</h1>
    <ul>
      <template v-for="(content, folder) in files" :key="folder">
        <li v-if="isObject(content)">
          <button @click="toggleFolder(folder)">
            {{ folder }} ({{ isOpen(folder) ? "−" : "+" }})
          </button>
          <ul v-if="isOpen(folder)" style="margin-left: 20px">
            <file-folder
              :contents="content"
              @download="downloadFile"
            ></file-folder>
          </ul>
        </li>
        <li v-else>
          {{ folder }}
          <button @click="downloadFile(folder)">Download</button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { listFiles, downloadFile } from "@/awsService";
import FileFolder from "./FileFolder.vue";

export default {
  components: {
    FileFolder,
  },
  data() {
    return {
      files: {},
      openFolders: [],
    };
  },
  async created() {
    this.files = await listFiles("tr-curriculum-bucket");
  },
  methods: {
    toggleFolder(folder) {
      if (this.isOpen(folder)) {
        this.openFolders = this.openFolders.filter((f) => f !== folder);
      } else {
        this.openFolders.push(folder);
      }
    },
    isOpen(folder) {
      return this.openFolders.includes(folder);
    },
    isObject(value) {
      return value && typeof value === "object";
    },
    async downloadFile(key) {
      await downloadFile("tr-curriculum-bucket", key);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
