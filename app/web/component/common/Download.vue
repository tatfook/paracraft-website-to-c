<template>
  <div class="download">
    <div class="download-welcome">
      <div class="download-welcome-center">
        <p class="download-welcome-center-title">欢迎下载Paracraft</p>
        <p class="download-welcome-center-version"><span class="download-welcome-center-version-new">最新版本：{{downloadURL.version}}</span> <a href="https://www.evernote.com/shard/s177/client/snv?noteGuid=f876e8cb-4563-4b26-ba23-55524609b79d&noteKey=89b1fed1ca2e1eb1&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs177%2Fsh%2Ff876e8cb-4563-4b26-ba23-55524609b79d%2F89b1fed1ca2e1eb1&title=%2523%2523%2BParaCraft%2BChange%2BLog%2B2019" class="download-welcome-center-version-update">更新日志</a></p>
        <p class="download-welcome-center-count">
          <span class="download-welcome-center-count-diamonds" v-for="(i,index) in optimizeDownloadCount" :key="index">{{i}}</span>人下载使用
        </p>
      </div>
    </div>
    <div class="download-center">
      <p class="download-center-guide"><a class="download-center-guide-link" href="https://keepwork.com/official/docs/sales/common/install_guide" target="_blank">点击这里</a>查看安装指引</p>
      <div class="download-center-cabinet">
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/Windows-8.png" alt="">
            <p class="download-center-cabinet-box-recommend">Windows版（推荐）</p>
            <a :href="downloadURL.window_install" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight ">下载</a>
          </div>
        </div>
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/Windows-8.png" alt="">
            <p class="download-center-cabinet-box-recommend">Windows教学版</p>
            <a :href="downloadURL.window_zip" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight ">下载</a>
            <p class="download-center-cabinet-box-hint">推荐学校、培训机构下载使用</p>
          </div>
        </div>
      </div>
      <div class="download-center-cabinet download-center-cabinet-phone">
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <div class="download-center-cabinet-box-cover">
              <img src="@/asset/images/下载页/下载安装/phone_android.png" alt="">
              <qrcode :value="QRUrl" :options="QROptions" class="download-center-cabinet-box-QR"></qrcode>
            </div>
            <p class="download-center-cabinet-box-recommend">Android版</p>
            <a :href="downloadURL.android_apk" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight ">下载</a>
            <a :href="downloadURL.android_huawei" target="_blank" class="download-center-cabinet-box-hint-phone" @click="addDownloadCount">小米应用商店打开</a>
          </div>
        </div>
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/mac.png" alt="">
            <p class="download-center-cabinet-box-recommend">Mac版</p>
            <a :href="downloadURL.mac" target="_blank" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight ">应用商店打开</a>
          </div>
        </div>

      </div>
      <div class="download-center-cabinet">
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/phone_android拷贝.png" alt="">
            <p class="download-center-cabinet-box-recommend">iOS版</p>
            <a href="https://apps.apple.com/cn/app/paracraft/id1422411677" target="_blank" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight ">应用商店打开</a>
          </div>
        </div>
        <div class="download-center-cabinet-box-wrap download-center-cabinet-box-wrap-empty"></div>
      </div>
      <div class="download-center-paracraft">
        <p class="download-center-paracraft-title download-center-paracraft-title-beta">Paracraft Beta测试版</p>
        <a href="http://cdn.keepwork.com/paracraft/win32/ParaCraft_beta.zip?ver=009" class="download-center-paracraft-button">Paracraft Beta 下载</a>
      </div>
      <div class="download-center-paracraft">
        <p class="download-center-paracraft-title">用Win10虚拟机安装Paracraft</p>
        <p class="download-center-paracraft-hint">适合WindowsXP，Linux，MacOS用户：<a class="download-center-paracraft-hint-guide" href="https://keepwork.com/official/docs/references/paracraft_vm" target="_blank">点击这里查看安装指南</a>。</p>
      </div>
      <div class="download-center-paracraft download-center-paracraft-code ">
        <p class="download-center-paracraft-title">源代码</p>
        <p class="download-center-paracraft-hint">paracraft使用NPL语言开发，是免费开源的。如果你希望参与贡献代码，请到Github上联系我。</p>
        <p class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://github.com/LiXizhi" target="_blank">https://github.com/LiXizhi</a></p>
        <p class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://github.com/LiXizhi/ParacraftSDK" target="_blank">https://github.com/LiXizhi/ParacraftSDK</a></p>
      </div>
    </div>
    <div class="download-abstract">
      <div class="download-abstract-intro">
        <div class="download-abstract-intro-box">
          <div class="download-abstract-intro-box-content">
            <img class="download-abstract-intro-box-content" src="@/asset/images/下载页/all_devices_banner.png" alt="">
            <p class="download-abstract-intro-box-content-text">Paracraft创意空间是一款面向7岁以上用户的免费的3D创作软件。你可以用它创建3D电影场景，演员，动作，摄影机，字幕，配音，立体视频输出等。 提供PC和手机版下载。下载后可观赏百部优秀3D电影作品，创造属于你的电影世界。<a class="download-center-paracraft-hint-guide" href="/paracraftStory">点击了解更多</a></p>
          </div>
        </div>
        <div class="download-abstract-intro-box">
          <div class="download-abstract-intro-box-content">
            <img class="download-abstract-intro-box-content-img" src="@/asset/images/下载页/paracraft_app_logo.png" alt="">
            <h4 class="download-abstract-intro-box-content-title">Paracraft创意空间</h4>
            <p class="download-abstract-intro-box-content-text">3D个人电影创作软件</p>
            <p class="download-abstract-intro-box-content-text">开源</p>
            <p class="download-abstract-intro-box-content-text">Paracraft SDK，源代码，材质包，插件请看
              <a class="download-center-paracraft-hint-guide" target="_blank" href="https://keepwork.com/official/docs/Resource/intro">这里</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="download-center">
      <div class="download-center-paracraft download-center-paracraft-code ">
        <p class="download-center-paracraft-title">更新日志:</p>
        <p class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://www.evernote.com/shard/s177/client/snv?noteGuid=f876e8cb-4563-4b26-ba23-55524609b79d&noteKey=89b1fed1ca2e1eb1&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs177%2Fsh%2Ff876e8cb-4563-4b26-ba23-55524609b79d%2F89b1fed1ca2e1eb1&title=%2523%2523%2BParaCraft%2BChange%2BLog%2B2019" target="_blank">· 查看最新的更新日志</a></p>
      </div>
      <div class="download-center-paracraft download-center-paracraft-code ">
        <p class="download-center-paracraft-title">其它下载:</p>
        <p class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="http://cdn.keepwork.com/tools/ChromeForWinXP.zip">· Chrome浏览器 WinXP版</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { get, post } from '@/api'
export default {
  name: 'Download',
  data() {
    return {
      downloadCount: '',
      downloadURL: {}
    }
  },
  computed: {
    optimizeDownloadCount() {
      this.downloadCount = 103200 + this.downloadCount
      return this.downloadCount.toString().split('')
    },
    QROptions() {
      return {
        width: 80,
        height: 80
      }
    },
    QRUrl() {
      return `${window.location.origin}/qrDownload`
    }
  },
  async mounted() {
    window.scrollTo(0, 0)
    document.title = '下载-Paracraft创意空间'
    await Promise.all([this.getDownloadCount(), this.getdownloadURL()])
  },
  methods: {
    async getDownloadCount() {
      const res = await get('keepworks/paracraft_download_count')
      this.downloadCount = res
    },
    addDownloadCount() {
      post('keepworks/paracraft_download_count', {})
        .then(response => {
          this.downloadCount = response
        })
        .catch(error => console.error(error))
    },
    async getdownloadURL() {
      const url = await get('keepworks/paracraft_download_url')
      this.downloadURL = url
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  &-welcome {
    background: #1e7cfc;
    padding: 30px 30px 38px;
    &-center {
      max-width: 1200px;
      margin: 0 auto;
      color: #fff;
      &-title {
        margin: 0;
        font-size: 36px;
      }
      &-version {
        &-new {
          margin-right: 30px;
        }
        &-update {
          color: #fff;
          text-decoration: none;
          &:hover {
            color: #dadada;
          }
        }
      }
      &-count {
        margin: 0;
        &-diamonds {
          display: inline-block;
          background: #fff;
          color: #1e7cfc;
          padding: 0 4px;
          margin-right: 4px;
        }
      }
    }
  }
  &-center {
    max-width: 1200px;
    margin: 0 auto;
    &-guide {
      min-height: 62px;
      line-height: 62px;
      background: #e7f5ed;
      text-align: center;
      &-link {
        text-decoration: none;
        color: #ff8150;
        &:hover {
          color: #e17247;
        }
      }
    }
    &-cabinet {
      display: flex;
      padding: 40px 0;
      align-items: flex-start;
      &-phone {
        background: rgb(232, 245, 234);
      }
      &-box {
        flex: 1;
        text-align: center;
        align-items: center;
        img {
          width: auto;
          height: 80px;
        }
        &-cover {
          width: 50px;
          margin: 0 auto;
          position: relative;
        }
        &-QR {
          position: absolute;
          right: -110px;
          top: 0;
        }
        &-wrap {
          display: flex;
          align-items: center;
          flex: 1;
        }
        &-desc {
          display: flex;
          padding: 7px;
          border-radius: 4px;
          margin: 14px auto;
          max-width: 142px;
          border: 1px solid #409eff;
          justify-content: center;
          color: #409eff;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: rgb(51, 143, 229);
            border: 1px solid rgb(51, 143, 229);
          }
          &-highlight {
            background: #409eff;
            color: #fff;
            &:hover {
              background: rgb(51, 143, 229);
              color: #fff;
            }
          }
          &-img {
            width: 20px;
            margin-right: 4px;
          }
        }
        &-hint {
          font-size: 14px;
          color: #8d8d8d;
          &-phone {
            max-width: 176px;
            color: #32b16c;
            margin: 0 auto;
            font-size: 16px;
            display: block;
            cursor: pointer;
            text-align: center;
            &:hover {
              color: #328654;
            }
          }
        }
      }
    }
    &-paracraft {
      border-bottom: 1px solid #d9d9d9;
      &-title {
        color: #333;
        font-size: 24px;
        margin: 53px 0 20px;
        &-beta {
          margin-top: 16px;
        }
      }
      &-hint {
        color: #8d8d8d;
        font-size: 16px;
        &-guide {
          color: #399fff;
          text-decoration: none;
          &:hover {
            color: #2c82d2;
          }
        }
      }
      &-code {
        border: none;
      }
      &-button {
        display: inline-block;
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 4px;
        background: #409eff;
        color: #fff;
        width: 158px;
        text-align: center;
        margin-bottom: 16px;
      }
    }
  }
  &-abstract {
    background: rgb(249, 248, 248);
    padding: 68px 0 74px;
    &-intro {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      &-box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        &-content {
          &-title {
            margin: 40px 0 10px 0;
          }
          &-text {
            max-width: 478px;
            color: #8d8d8d;
            font-size: 16px;
            margin: 0 auto;
            line-height: 24px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .download {
    &-welcome {
      &-center {
        padding-left: 12px;
        &-title {
          font-size: 16px;
          padding: 12px 0 0 0;
          font-weight: bold;
        }
        &-version {
          font-size: 12px;
        }
        &-count {
          font-size: 12px;
        }
      }
    }
    &-center {
      &-guide {
        font-size: 12px;
        margin: 0;
        min-height: 40px;
        line-height: 40px;
      }
      &-cabinet {
        flex-wrap: wrap;
        padding: 0;
        &-box {
          min-width: 220px;
          border-bottom: 10px solid rgb(249, 249, 249);
          padding: 26px 0;
          &-wrap-empty {
            display: none;
          }
          &-hint {
            font-size: 12px;
            &-phone {
              max-width: 220px;
            }
          }
        }
      }
      &-paracraft {
        &-title {
          font-size: 14px;
          padding-left: 12px;
          margin-top: 17px;
        }
        &-hint {
          font-size: 12px;
          padding: 0 12px;
        }
        &-button {
          margin-left: 12px;
        }
      }
    }
    &-abstract {
      background: #fff;
      border-top: 10px solid rgb(249, 249, 249);
      border-bottom: 10px solid rgb(249, 249, 249);
      &-intro {
        flex-wrap: wrap;
        &-box {
          min-width: 260px;
          margin: 12px;
          &-content {
            width: 100%;
            max-width: 480px;
            &-title {
              font-size: 14px;
            }
            &-text {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

