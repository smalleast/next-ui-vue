<template>
    <el-tooltip class="item" effect="dark" :content="disabled?'禁用':tipContent" placement="top">
      <slot></slot>
      <div class="nx-button dib dib_ rel"
      :class="disabled?'cursor-not':'cursor'" 
      :del="del" 
      :edit="edit"
      :detail="detail"
      :pass="pass"
      :dismissed="dismissed"
      :release="release"
      :undoLine="undoLine"
      :disabled="disabled"
      :application="application"
      :bonus="bonus"
      @click="handleClick">
          
          <nx-icon
          class="c-6 f16"
          :class="[
          {
            'icon-shanchu':del,
            'icon-pingjia':edit,
            'icon-detail':detail,
            'icon-pass':pass,
            'icon-jujue':dismissed,
            'icon-fasong':release,
            'icon-xiaxian':undoLine,
            'icon-shenqing':application,
            'icon-offer f20':bonus
          }]"></nx-icon>
      </div>
    </el-tooltip>
</template>

<script>
import NxIcon from "./nx-icon";

export default {
  data() {
    return {
      tipContent: ""
    };
  },
  props: {
    //删除
    del: {
      type: Boolean,
      default: false
    },
    //修改
    edit: {
      type: Boolean,
      default: false
    },
    //详情
    detail: {
      type: Boolean,
      default: false
    },
    //通过
    pass: {
      type: Boolean,
      default: false
    },
    //驳回
    dismissed: {
      type: Boolean,
      default: false
    },
    //发布
    release: {
      type: Boolean,
      default: false
    },
    //撤消
    undoLine: {
      type: Boolean,
      default: false
    },
    //申请
    application:{
      type:Boolean,
      default:false
    },
    //奖金管理
    bonus:{
      type:Boolean,
      default:false
    },
    //禁用
    disabled: {
      type: Boolean,
      default: false
    },
    tip: {
      type: String,
      default: ""
    }
  },
  components: {
    NxIcon
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
    init() {
      if (this.disabled) {
        this.tipContent = "禁用";
      }
      if (this.del) {
        this.tipContent = "删除";
      }
      if (this.edit) {
        this.tipContent = "编辑";
      }
      if (this.detail) {
        this.tipContent = "详情";
      }
      if (this.pass) {
        this.tipContent = "审批通过";
      }
      if (this.dismissed) {
        this.tipContent = "驳回";
      }
      if (this.release) {
        this.tipContent = "发布";
      }
      if (this.undoLine) {
        this.tipContent = "撤消";
      }
      if (this.application) {
        this.tipContent = "申请";
      }
      if (this.bonus) {
        this.tipContent = "奖金管理";
      }
      if (this.tip) {
        this.tipContent = this.tip;
      }
    }
  },
  created() {
    this.init();
  },
  updated() {
    this.init();
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nx-button {
  &[del="true"],
  &[dismissed="true"],
  &[undoLine="true"] {
    &:hover {
      i {
        color: #f56c6c;
      }
    }
  }
  &[edit="true"],
  &[pass="true"],
  &[release="true"],
  &[application="true"],
  &[bonus="true"] {
    &:hover {
      i {
        color: #4d7cfe;
      }
    }
  }
  &[detail="true"] {
    &:hover {
      i {
        color: #2dd1ac;
      }
    }
  }
  &[disabled="true"],
  &[disabled="disabled"] {
    i {
      color: #ccc;
    }
    &:hover {
      i {
        color: #ccc;
      }
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
  }
}
</style>
