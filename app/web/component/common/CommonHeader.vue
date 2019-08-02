<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" class="common-header-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="top" class="common-header-menu-first"><img class="common-header-menu-logoimg" src="@/asset/images/logo.png" alt="paracraft"> <span class="common-header-menu-logo">Paracraft创意空间</span></el-menu-item>
      <el-menu-item index="download" class="pull-right">
        <el-button type="primary" class="common-header-menu-download-btn" @click="goPage('Download')">下载</el-button>
      </el-menu-item>
      <el-menu-item index="homepage" class="pull-right">
        <el-button type="primary" class="common-header-menu-homepage-btn" @click="goPage('Homepage')">首页</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import scrollIntoView from 'scroll-into-view-if-needed'

export default {
  name: 'CommonHeader',
  data() {
    return {
      activeIndex: 'top'
    }
  },
  watch: {},
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    handleSelect(index) {
      console.log('index', index)
      if (index == 'download') {
        this.$router.push({ name: 'Download' })
        return
      }
      this.$router.push({ name: 'HomePage' })
    },
    goPage(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>
<style lang="scss">
.common-header {
  max-width: 1200px;
  margin: 0 auto;
  .el-menu--horizontal.el-menu {
    min-height: 82px;
    border: none;
    .el-menu-item {
      height: 82px;
      line-height: 82px;
      font-size: 24px;
      color: #333;
      border-bottom: none;
      a {
        text-decoration: none;
      }
      &.is-active {
        border: none;
      }
    }
  }
  &-menu {
    &-homepage-btn,
    &-download-btn {
      padding: 8px 30px;
    }
  }
  .pull-right {
    float: right !important;
  }
}
</style>
