<template>
  <v-list>
    <template v-for="(content, folder) in filteredContents" :key="folder">
      <v-list-group
        v-if="isFolder(content)"
        prepend-icon="mdi-folder"
        append-icon="mdi-chevron-down"
        v-model="openFolders[folder]"
        class="folder-icon"
        @click="toggleFolder(folder)"
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-html="highlight(folder)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <curriculum-display
          :contents="content"
          :search="search"
          @download="downloadFile"
        ></curriculum-display>
      </v-list-group>
      <v-list-item v-else>
        <template v-slot:prepend>
          <v-avatar :color="getFileColor(folder)">
            <v-icon color="white">{{ getFileIcon(folder) }}</v-icon>
          </v-avatar>
        </template>
        <v-list-item-content>
          <v-list-item-title v-html="highlight(folder)"></v-list-item-title>
          <v-list-item-subtitle>{{
            formatDate(content.lastModified)
          }}</v-list-item-subtitle>
          <v-btn icon @click="$emit('download', folder)">
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-list-item-content>
        <v-list-item-action> </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { reactive, computed, onMounted } from "vue";

export default {
  name: "CurriculumDisplay",
  props: {
    contents: {
      type: Object,
      required: true,
    },
    search: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const openFolders = reactive({});

    // Function to recursively set all folders to open
    const setAllFoldersOpen = (contents, openState) => {
      for (const [key, value] of Object.entries(contents)) {
        if (typeof value === "object" && !value.lastModified) {
          openState[key] = true;
          setAllFoldersOpen(value, openState);
        }
      }
    };

    // Set all folders to open on mount
    onMounted(() => {
      setAllFoldersOpen(props.contents, openFolders);
    });

    const filteredContents = computed(() => {
      const filterContents = (contents) => {
        const result = {};
        for (const [key, value] of Object.entries(contents)) {
          if (
            props.search === "" ||
            key.toLowerCase().includes(props.search.toLowerCase())
          ) {
            result[key] = value;
          } else if (
            value &&
            typeof value === "object" &&
            !value.lastModified
          ) {
            const filtered = filterContents(value);
            if (Object.keys(filtered).length > 0) {
              result[key] = filtered;
            }
          }
        }
        return result;
      };
      return filterContents(props.contents);
    });

    return {
      openFolders,
      filteredContents,
    };
  },
  methods: {
    isFolder(value) {
      return value && !value.lastModified;
    },
    highlight(text) {
      if (!this.search) return text;
      return text.replace(
        new RegExp(`(${this.search})`, "gi"),
        '<span class="highlight">$1</span>'
      );
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
    async downloadFile(key) {
      this.$emit("download", key);
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
