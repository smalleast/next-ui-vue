
<template>
  <el-dialog
  :title="title"
  :visible.sync="visible"
  :width="width"
  append-to-body
  :close-on-click-modal="closeModal"
  :close-on-press-escape="closeModal"
  center
  :top="top"
  :before-close="handleClose">
  <slot></slot>
  <div slot="footer" v-if="footer" class="pb15">
    <el-button size="small" @click="handleClose">取 消</el-button>
    <el-button size="small" type="primary" @click="handleClick" :disabled="busy">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示信息"
    },
    width: {
      type: String,
      default: "500px"
    },
    top:{
      type:String
    },
    footer:{
      type:Boolean,
      default:true
    },
    close:{
      type:Boolean,
      default:false
    },
    busy:{
      type:Boolean,
      default:false
    },
    closeModal:{
      type:Boolean,
      default:true
    }
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
