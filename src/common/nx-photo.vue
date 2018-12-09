<template>
   <div class="my-photo" :class="{'border':border}" >
        <div class="my-photo-full flex-xc flex-yc">
          <img :src="item|toImg"
                  class="my-photo-img" alt=""
                  @click="handleView">
        </div>
        <nx-layout class="my-photo-mask" v-if="(view&&!disabled)||download||del">  
            <div class="col tc">
                <nx-label :class="{'mb10':download||del}" v-if="view">
                <i class="el-icon-view f16 c-f" @click="handleView" >
                    <span class="f12 ml5">预览</span>
                </i>
                </nx-label>
                 <nx-label :class="{'mb10':del}" v-if="download">
                <i class="el-icon-download f16 c-f" @click="handleDownload(item)" >
                    <span class="f12 ml5">下载</span>
                </i>
                </nx-label>
                <nx-label v-if="del">
                <i class="el-icon-delete f16 c-f" @click="handleDelete" >
                    <span class="f12 ml5">删除</span>
                </i>
                </nx-label>
            </div>
        </nx-layout>
        <nx-dialog
        width="1000px"
        top="5%"
        title="图片预览"
        :visible="visible" 
        :footer="false"
        @close="visible=false" 
        v-if="!disabled">
        <nx-layout>  
            <div class="col tc">
                 <img :src="item|toImg" alt="">
            </div>
        </nx-layout>
        </nx-dialog>
    </div>
</template>

<script>
import api from "api";
export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    item: {
      type: String,
      default: ""
    },
    view: {
      type: Boolean,
      default: true
    },
    del: {
      type: Boolean,
      default: false
    },
     download: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  methods: {
    handleView() {
      this.visible = true;
    },
    handleDelete() {
      this.$emit("handleDelete");
    },
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

  },
  created() {}
};
</script>

<style lang="scss" scoped>
.my-photo {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  display: inline-block;
  &-full,
  &.auto {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  &.max {
    width: 240px;
    height: 240px;
  }
  &.small {
    width: 160px;
    height: 160px;
  }
  &.min {
    width: 80px;
    height: 80px;
  }
  &.mini {
    width: 60px;
    height: 60px;
    padding: 0;
  }
  &-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: auto;
  }
  &-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    color: #fff;
    z-index: 7;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity .3s ease-in-out;
    .el-icon-view {
      &:hover {
        color: #2fa0f9;
      }
    }
    .el-icon-download {
      &:hover {
        color: #2dd1ac;
      }
    }
    .el-icon-delete {
      &:hover {
        color: #f56c6c;
      }
    }
  }
  &:hover {
    .my-photo-mask {
      opacity: 1;
    }
  }
}
</style>
