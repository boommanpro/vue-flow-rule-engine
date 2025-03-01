<template>
    <svg
      :class="iconClass"
      :viewBox="viewBox"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="pathContent" :fill="color" />
    </svg>
  </template>
  
  <script>
  import svgs from './svgs.json'; // 引入 SVG 配置文件
  
  export default {
    name: 'SvgIcon',
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: null
      }
    },
    computed: {
      iconConfig() {
        return svgs[this.name] || {};
      },
      pathContent() {
        return this.iconConfig.content || '';
      },
      viewBox() {
        return this.iconConfig.viewBox || '0 0 24 24';
      },
      iconClass() {
        return {
          icon: true,
          [`icon-${this.size || this.iconConfig.defaultSize}`]: true
        };
      },
      iconSize() {
        return this.size || this.iconConfig.defaultSize;
      },
      iconColor() {
        return this.color || this.iconConfig.defaultColor;
      }
    }
  };
  </script>
  
  <style scoped>
  .icon {
    fill: v-bind(iconColor);
  }
  
  .icon-24px {
    width: 24px;
    height: 24px;
  }
  
  .icon-50px {
    width: 50px;
    height: 50px;
  }
  
  /* 添加更多大小样式 */
  </style>