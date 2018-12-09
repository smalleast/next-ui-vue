<template>
    <div class="nx-delete dib dib_">
      <slot></slot><nx-icon class="icon-shanchu c-6" @click="handleClick"></nx-icon>
    </div>
</template>

<script>
import NxIcon from "./nx-icon";

export default {
  components: {
    NxIcon
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nx-delete {
  cursor: pointer;
  i {
    &:hover {
      font-size: 16px;
      color: red;
    }
  }
}
</style>
