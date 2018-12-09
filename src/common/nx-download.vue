<template>
    <div class="nx-download dib"  @click="handleDownload(item)">
        <slot>
            <div class="pr15 link-text">{{(title||item)|toFile(len)}}</div>
        </slot>
    </div>
</template>

<script>
import api from "api";

export default {
  props: {
    title: {
      type: [String, Number]
    },
    item: {
      type: [String, Number]
    },
    len: {
      type: [String, Number],
      default: 12
    }
  },
  methods: {
    async handleDownload(key) {
      let res = await this.downloadFileByKey(key);
    },
    async downloadFileByKey(key) {
      return new Promise(resolve => {
        api.files.downloadFileByKey(key).then(res => {
          resolve(res);
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.nx-download {
  border-radius: 3px;
}
</style>
