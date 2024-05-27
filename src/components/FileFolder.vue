<template>
  <v-list>
    <v-list-group v-for="(item, name) in contents" :key="name" :value="name">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-if="isFolder(item)"
          v-bind="props"
          prepend-icon="mdi-folder"
          :title="name"
        >
          <template v-slot:prepend>
            <v-avatar :color="getFileColor(name)">
              <v-icon color="white">mdi-folder</v-icon>
            </v-avatar>
          </template>
          <template v-slot:append>
            <v-btn
              icon
              @click="
                $emit(
                  'downloadFolder',
                  folder == '' ? name : folder + '/' + name
                )
              "
            >
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </template>
        </v-list-item>

        <v-list-item
          v-else
          class="list-item"
          no-action="true"
          @click="$emit('download', folder == '' ? name : folder + '/' + name)"
          :title="name"
          :subtitle="formatDate(item.lastModified)"
        >
          <template v-slot:prepend>
            <v-avatar :color="getFileColor(name)">
              <v-icon color="white">{{ getFileIcon(name) }}</v-icon>
            </v-avatar>
          </template>
          <template v-slot:append>
            <v-btn
              icon
              @click="
                $emit('download', folder == '' ? name : folder + '/' + name)
              "
            >
              <v-icon>mdi-download</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </template>

      <file-folder
        :contents="item"
        :folder="folder == '' ? name : folder + '/' + name"
        @download="downloadFile"
      ></file-folder>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: "FileFolder",
  props: {
    contents: {
      type: Object,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      openFolders: [],
    };
  },
  methods: {
    toggleFolder(name) {
      if (this.isOpen(name)) {
        this.openFolders = this.openFolders.filter((f) => f !== name);
      } else {
        this.openFolders.push(name);
      }
      console.log(this.openFolders);
    },
    isOpen(name) {
      return this.openFolders.includes(name);
    },
    isFolder(value) {
      return value && !value.lastModified;
    },
    async downloadFile(key) {
      this.$emit("download", key);
    },

    getFileIcon(filename) {
      if (filename.endsWith(".pdf")) return "mdi-file-pdf";
      if (filename.endsWith(".docx")) return "mdi-file-word";
      if (filename.endsWith(".pptx")) return "mdi-file-powerpoint";
      return "mdi-file-document";
    },
    getFileColor(filename) {
      if (filename.endsWith(".pdf")) return "red";
      if (filename.endsWith(".docx")) return "blue";
      if (filename.endsWith(".pptx")) return "orange";
      return "grey-lighten-1";
    },
    formatDate(value) {
      if (!value) return "";
      const date = new Date(value);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
.highlight {
  background-color: yellow;
}
.folder-icon .v-icon {
  color: purple !important;
}
</style>
