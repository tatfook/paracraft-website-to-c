<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" class="common-header-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="top" class="common-header-menu-first"><img class="common-header-menu-logoimg" src="@/asset/images/logo.png" alt="paracraft"> <span class="common-header-menu-logo">Paracraft创意空间</span> <i @click="onChangeLanguge" class="icon-english1 iconfont en-change-icon"></i></el-menu-item>
      <el-menu-item index="download" class="pull-right el-menu-item-download-button">
        <el-button type="primary" :class="['common-header-menu-download-btn', {'is-active-btn': isDownloadPage}]" @click="goPage('Download')">下载</el-button>
      </el-menu-item>
      <el-menu-item index="homepage" class="pull-right">
        <el-button type="primary" :class="['common-header-menu-download-btn',  {'is-active-btn':isHomepage }]" @click="goPage('Homepage')">首页</el-button>
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
  computed: {
    isHomepage() {
      return this.$route.name == 'HomePage' ? true : false
    },
    isDownloadPage() {
      return this.$route.name == 'Download' ? true : false
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    handleSelect(index) {
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
    },
    onChangeLanguge() {
      window.location.href = 'http://paracraft.org/'
    }
  }
}
</script>
<style lang="scss">
.common-header {
  max-width: 1200px;
  margin: 0 auto;
  .en-change-icon {
    font-size: 34px;
    margin-left: 10px;
    transition: all .2s ease-in-out;
    &:hover {
      color: #4AA8FF;
    }
  }
  .el-menu--horizontal.el-menu {
    min-height: 82px;
    border: none;
    .el-menu-item {
      height: 82px;
      line-height: 82px;
      font-size: 24px;
      color: #333;
      border-bottom: none;
      padding-left: 0;
      &-download-button {
        padding-right: 0;
      }
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
      background: #b8c0cc;
      border: none;
    }
    .is-active-btn {
      background: #1e7cfc;
    }
  }
  .pull-right {
    float: right !important;
  }
}
@media screen and (max-width: 769px) {
  .common-header {
    &-menu {
      &-logoimg {
        width: 34px;
      }
      &-logo {
        font-size: 14px;
        font-weight: bold;
      }
      &-download-btn,
      &-homepage-btn {
        padding: 6px 10px;
      }
    }
    .el-menu--horizontal.el-menu {
      .el-menu-item {
        padding: 0 10px;
      }
    }
  }
}
</style>
