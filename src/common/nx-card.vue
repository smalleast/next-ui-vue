<template>
   <div @click="handleClick" class="cursor">
    <el-card :shadow="shadow" >
      <slot></slot>
    </el-card>
   </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    shadow: {
      type: String,
      default: "hover"
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", "");
    }
  },
  watch: {}
};
</script>

