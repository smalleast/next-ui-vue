<template>
  <el-breadcrumb separator="/" class="mb30">
      <el-breadcrumb-item v-for="(item,index) in lists" :key="index">
        <i class="el-icon-menu" v-if="index===0"></i><span v-if="!item.link" class="pl8">{{item.title}}</span> 
        <router-link v-if="item.link" :to="{name:item.link}">{{item.title}}</router-link>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  props: {
    lists: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

