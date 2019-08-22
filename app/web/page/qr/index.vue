<template>
  <div class="qr-download">
    <img v-show="isCantDownload" class="qr-download-tips" src="../../asset/images/qr-tips.png" alt="">
  </div>
</template>


<script>
import Vue from 'vue'
import router from './qr.router'
import { get } from '@/api'
export default {
  name: 'QR',
  router,
  data() {
    return {
      isCantDownload: false
    }
  },
  async mounted() {
    let url = this.$route.query.url
    if (!url) {
      url = await this.getAndroidApkURL()
    }
    setTimeout(() => this.emitDownload(url), 800)
  },
  methods: {
    async getAndroidApkURL() {
      const { android_apk } = await get('keepworks/paracraft_download_url')
      return android_apk
    },
    emitDownload(url) {
      if (this.checkBrowser()) {
        this.isCantDownload = true
        return
      }
      const link = document.createElement('a')
      link.download = 'paracraft.apk'
      link.style.display = 'none'
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    checkBrowser() {
      const userAgent = navigator.userAgent
      return /MicroMessenger/i.test(userAgent) || /MQQBrowser/i.test(userAgent)
    }
  }
}
</script>

<style lang="scss" scoped>
.qr-download {
  &-tips {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
}
</style>