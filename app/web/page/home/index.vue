<template>
  <el-container id='app' class="index-page-container">
    <el-header class="index-page-container-header" ref="header" v-if="hiddenHeaderAndFooter">
      <common-header></common-header>
    </el-header>
    <el-main class="index-page-container-main">
      <router-view></router-view>
    </el-main>
    <el-footer class="index-page-container-footer" v-if="hiddenHeaderAndFooter">
      <common-footer></common-footer>
    </el-footer>
  </el-container>
</template>

<script>
import Vue from 'vue'
import router from './home.router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CommonHeader from '@/component/common/CommonHeader'
import CommonFooter from '@/component/common/CommonFooter'

Vue.use(ElementUI)

export default {
  name: 'App',
  router,
  computed: {
    hiddenHeaderAndFooter() {
      return this.$route.name === 'EmailContent' ? false : true
    }
  },
  mounted() {
    const language = navigator.appName === 'Netscape' ? navigator.language : navigator.browserLanguage
    if (language.indexOf('zh') === -1) {
      this.$confirm('Do you switch to English ?', '', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then(res => {
        window.location.href = 'http://paracraft.org/'
      }).catch(e => {
        console.error(e)
      })
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>
<style lang="scss">
body {
  display: flex;
  min-height: 100vh;
  margin: 0;
  min-width: 1280px;
  overflow-x: scroll;
}
.index-page-container {
  min-height: 100%;
  &-main {
    padding: 0;
    padding-top: 82px;
  }
  &-header.el-header {
    padding: 0;
    height: auto !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
    background-color: #fff;
  }
  &-footer.el-footer {
    padding: 0;
    height: auto !important;
    background-color: #282828;
  }
}
@media screen and (max-width: 769px) {
  body {
    max-width: 100px;
    min-width: 100%;
    overflow: auto;
  }
}
</style>

