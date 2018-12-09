<template>
    <div class="nx-label" :class="[
    {
    'nowrap':nowrap,
    'c-red dib':red,
    'c-green dib':green,
    'c-blue dib':blue,
    'c-9 dib':cancel,
    }
    ]" >
      <span class="c-red pr5" v-if="required">*</span><slot></slot>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    //必填
    required: {
      type: Boolean,
      default: false
    },
    //不换行
    nowrap: {
      type: Boolean,
      default: false
    },
    //红色字（主要用于显示金额）
    red: {
      type: Boolean,
      default: false
    },
    //绿色字（主要用于显示已完成或可以执行）
    green: {
      type: Boolean,
      default: false
    },
    //蓝色字（主要用于显示待完成或等待执行）
    blue: {
      type: Boolean,
      default: false
    },
    //灰色字（主要用于显示已取消的）
    cancel: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style  lang="scss" scoped>
.nx-label {
  line-height: 1;
  &.nowrap {
    white-space: nowrap;
  }
}
</style>
