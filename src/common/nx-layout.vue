<template>
    <div class="row" :class="{'row-center':center}" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: true
    }
  },
  methods:{
    handleClick(){
      this.$emit('click');
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
