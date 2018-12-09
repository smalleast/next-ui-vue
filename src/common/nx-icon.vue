<template>
    <i class="nx-icon iconfont" @click="handleClick"><slot></slot></i>
</template>

<script>
    export default {
        methods:{
            handleClick(){
                this.$emit('click');
            }
        }
    }
</script>

