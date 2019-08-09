<template>
  <div class="homepage">
    <div class="homepage-banner">
      <div class="homepage-banner-buttons">
        <span class="homepage-banner-buttons-btn" @click="goDownload()"><img src="@/asset/images/下载.png" alt=""></span>
        <span class="homepage-banner-buttons-btn" @click="showVideo('https://qiniu.keepwork.com/f6bab200-bd94-11e8-9154-47b62c80c5e7.mp4?e=1564817063&token=LYZsjH0681n9sWZqCM4E2KmU6DsJOE7CAM4O3eJq:OKNxfvL4zhUTPlY6wZs4BZo7v3Y=#%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%9101.mp4')"><img src="@/asset/images/观看视频.png" alt=""></span>
      </div>
    </div>
    <div class="homepage-phrase">
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/专业少儿编程.png" alt="">专业少儿编程</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/0基础入门.png" alt="">零基础入门</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/学习编程知识.png" alt="">学习编程知识</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/制作网站.png" alt="">制作网站</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/培养罗杰思维.png" alt="">培养逻辑思维及创造能力</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/3D动画知识.png" alt="">3D动画知识</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/创建应用程序.png" alt="">创建应用程序</span>
      <span class="homepage-phrase-term"><img class="pre-icon" src="@/asset/images/打造游戏.png" alt="">打造游戏</span>
    </div>
    <div class="homepage-paracraft">
      <h3 class="homepage-paracraft-title">什么是Paracraft？</h3>
      <p class="homepage-paracraft-text">Paracraft(创意空间)是一款免费开源的3D动画与编程创作软件。</p>
      <p class="homepage-paracraft-text">你可以用它创建3D场景和人物，制作动画和电影，学习和编写计算机程序。</p>
      <p class="homepage-paracraft-text">与成千上万的用户一起学习和分享你的个人作品。</p>
      <span class="homepage-paracraft-rectangle"></span>
    </div>
    <div class="homepage-intro">
      <div class="homepage-intro-left">
        <p :class="['homepage-intro-left-text', {'is-active-term': currentSlideIndex == index}]" v-for="(item, index) in introCarouselData" :key="index" v-if="index < 5" @mouseover="locateCurrentImg(index)" @mouseout="toAutoplay()">
          {{item.text}}
          <img class="homepage-intro-left-text-icon" :src="currentSlideIndex == index ? item.activeIcon : item.icon" alt="">
        </p>
      </div>
      <div class="homepage-intro-center">
        <el-carousel height="363px" ref="centerCarousel" @change="currentSlide" :autoplay="isAutoplay">
          <el-carousel-item v-for="(item, index) in introCarouselData" :key="index">
            <img class="homepage-intro-center-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="homepage-intro-right">
        <p :class="['homepage-intro-right-text homepage-intro-right-text-phone', {'is-active-term': currentSlideIndex == index}]" v-for="(item, index) in introCarouselData" :key="index" v-if="index < 5">
          {{item.text}}
          <img class="homepage-intro-right-text-icon" :src="currentSlideIndex == index ? item.activeIcon : item.icon" alt="">
        </p>
        <p :class="['homepage-intro-right-text', {'is-active-term': currentSlideIndex == index}]" v-for="(item, index) in introCarouselData" :key="index" v-if="index >= 5" @mouseover="locateCurrentImg(index)" @mouseout="toAutoplay()">
          {{item.text}}
          <img class="homepage-intro-right-text-icon" :src="currentSlideIndex == index ? item.activeIcon : item.icon" alt="">
        </p>
      </div>
    </div>
    <our-advantages></our-advantages>
    <paracraft-works @showVideo="showVideo"></paracraft-works>
    <parents-and-children-like></parents-and-children-like>
    <acquisition></acquisition>
    <div class="homepage-download">
      <h3 class="homepage-download-title">Paracraft创意空间</h3>
      <p class="homepage-download-hint">7岁以上用户的免费3D创作软件</p>
      <a class="homepage-download-button" href="/download">下载</a>
    </div>
    <div v-if="videoDialogVisible" class="homepage-video-dialog">
      <el-dialog :visible.sync="videoDialogVisible" width="50%" center>
        <video width="100%" :src="currentToPlayerVideo" autoplay controls></video>
      </el-dialog>
    </div>
    <quick-to-top></quick-to-top>
  </div>
</template>

<script>
import VideoPlayer from '@/component/common/VideoPlayer'
import QuickToTop from './QuickToTop'
import scrollIntoView from 'scroll-into-view-if-needed'
import OurAdvantages from './OurAdvantages'
import ParacraftWorks from './ParacraftWorks'
import ParentsAndChildrenLike from './ParentsAndChildrenLike'
import Acquisition from './Acquisition'

export default {
  name: 'HomePage',
  data() {
    return {
      isAutoplay: true,
      videoDialogVisible: false,
      currentSlideIndex: 0,
      introCarouselData: [
        {
          imgUrl: require('@/asset/images/introIcon/1.png'),
          text: '用方块创建世界/模型',
          icon: require('@/asset/images/introIcon/1(1).png'),
          activeIcon: require('@/asset/images/introIcon/1(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/2.png'),
          text: '使用骨骼方块来定义',
          icon: require('@/asset/images/introIcon/2(1).png'),
          activeIcon: require('@/asset/images/introIcon/2(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/3.png'),
          text: '将方块转换为BMAX模型块',
          icon: require('@/asset/images/introIcon/3(1).png'),
          activeIcon: require('@/asset/images/introIcon/3(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/4.png'),
          text: 'BMAX模型可以像普通块一样放置，也可以作为电影块中的演员使用',
          icon: require('@/asset/images/introIcon/4(1).png'),
          activeIcon: require('@/asset/images/introIcon/4(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/5.png'),
          text:
            '使用电影方块创建带有摄像机、演员、字幕、音乐轨道甚至其他电影块的动画。',
          icon: require('@/asset/images/introIcon/5(1).png'),
          activeIcon: require('@/asset/images/introIcon/5(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/6.png'),
          text: '角色扮演演员随着时间的推移记录物理动画，如走路和跳跃等。',
          icon: require('@/asset/images/introIcon/6(1).png'),
          activeIcon: require('@/asset/images/introIcon/6(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/7.png'),
          text: '直接在单独的动画通道上调整关节',
          icon: require('@/asset/images/introIcon/7(1).png'),
          activeIcon: require('@/asset/images/introIcon/7(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/8.png'),
          text: '连接电影块按顺序播放',
          icon: require('@/asset/images/introIcon/8(1).png'),
          activeIcon: require('@/asset/images/introIcon/8(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/9.png'),
          text:
            '免费开放源码软件是用近似并行语言(NPL)编写的。使用内置编辑器或visual studio创建应用程序/插件',
          icon: require('@/asset/images/introIcon/9(1).png'),
          activeIcon: require('@/asset/images/introIcon/9(2).png')
        },
        {
          imgUrl: require('@/asset/images/introIcon/10.jpg'),
          text:
            '用于教育paracraft / npl旨在提供一种教育方式，让人们获得计算机自学知识和编程技能。',
          icon: require('@/asset/images/introIcon/10(1).png'),
          activeIcon: require('@/asset/images/introIcon/10(2).png')
        }
      ]
    }
  },
  mounted() {
    document.title = 'Paracraft创意空间-更适合青少年的3D动画创作与编程学习工具'
  },
  methods: {
    locateCurrentImg(i) {
      this.$refs.centerCarousel.setActiveItem(i)
      this.isAutoplay = false
    },
    toAutoplay() {
      this.isAutoplay = true
    },
    currentSlide(index) {
      this.currentSlideIndex = index
    },
    showVideo(videoUrl) {
      this.currentToPlayerVideo = videoUrl
      this.videoDialogVisible = true
    },
    goDownload() {
      this.$router.push({ name: 'Download' })
    }
  },
  components: {
    VideoPlayer,
    QuickToTop,
    OurAdvantages,
    ParacraftWorks,
    ParentsAndChildrenLike,
    Acquisition
  }
}
</script>
<style lang="scss" scoped>
.homepage {
  &-banner {
    background: url('../../asset/images/首页海报.png') no-repeat top center
      rgb(249, 249, 249);
    height: 570px;
    &-buttons {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 290px;
      &-btn {
        cursor: pointer;
      }
      &-btn + &-btn {
        margin-left: 35px;
      }
    }
  }
  &-phrase {
    max-width: 1200px;
    margin: 16px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-term {
      width: 23%;
      display: flex;
      align-items: center;
      justify-content: start;
      margin: 10px 0;
      .pre-icon {
        width: 47px;
        margin-right: 12px;
      }
    }
  }
  &-paracraft {
    text-align: center;
    padding: 30px 0 67px;
    background: #ffdf47;
    box-shadow: 0px 1px 1px 0px rgba(166, 166, 166, 0.4);
    max-width: 1920px;
    margin: 0 auto;
    color: #333;
    &-title {
      font-size: 36px;
    }
    &-text {
      font-size: 16px;
      padding: 0 12px;
    }

    &-rectangle {
      display: inline-block;
      width: 125px;
      height: 5px;
      background-color: #f9f9f9;
      border-radius: 3px;
    }
  }
  &-intro {
    background: rgb(245, 245, 245);
    display: flex;
    padding: 70px 0;
    justify-content: center;
    max-width: 1920px;
    margin: 0 auto;
    &-left {
      width: 308px;
      text-align: right;
      box-sizing: border-box;
      font-size: 14px;
      color: #333;
      &-text {
        position: relative;
        margin: 0 20px;
        padding: 20px 40px 20px 0;
        &-icon {
          position: absolute;
          right: 5px;
          top: 18px;
        }
      }
      .is-active-term {
        color: #399fff;
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 1px rgba(57, 159, 255, 0.38);
        border-radius: 10px;
      }
    }
    &-center {
      width: 605px;
      // min-height: 363px;
      /deep/ .el-carousel {
        width: 605px;
        height: 363px;
        .el-carousel__container {
          .el-carousel__item {
            .homepage-intro-center-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        .el-carousel__indicators {
          .el-carousel__indicator {
            .el-carousel__button {
              width: 10px;
            }
            &.is-active {
              .el-carousel__button {
                background: #409eff;
              }
            }
          }
        }
      }
    }
    &-right {
      width: 308px;
      text-align: left;
      box-sizing: border-box;
      font-size: 14px;
      color: #333;
      &-text {
        position: relative;
        margin: 0 20px;
        padding: 20px 0 20px 40px;
        &-icon {
          position: absolute;
          left: 5px;
          top: 18px;
        }
        &-phone {
          display: none;
        }
      }
      .is-active-term {
        color: #399fff;
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 1px rgba(57, 159, 255, 0.38);
        border-radius: 10px;
      }
    }
  }
  &-video-dialog {
    /deep/ .el-dialog {
      background: rgba(0, 0, 0, 0);
      box-shadow: none;
      min-width: 510px !important;
      .el-dialog__header {
        padding: 20px;
        position: relative;
        .el-dialog__headerbtn {
          border-radius: 50%;
          position: absolute;
          top: -4px;
          right: -30px;
          padding: 5px;
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          .el-icon-close:before {
            color: #fff;
            font-size: 36px;
          }
        }
      }
      .el-dialog__body {
        padding: 0;
      }
    }
  }
  &-download {
    color: #333333;
    text-align: center;
    position: relative;
    margin: 0 auto;
    max-width: 1920px;
    background-size: 100% 120%;
    &-title {
      font-size: 36px;
      margin: 60px 0 0;
    }
    &-hint {
      font-size: 20px;
      margin: 12px 0 45px;
    }
    &-button {
      width: 230px;
      height: 49px;
      line-height: 49px;
      background-color: #4aa8ff;
      border-radius: 4px;
      display: inline-block;
      color: #fff;
      text-decoration: none;
      margin: 0 0 86px;
      &:hover {
        background: rgb(51, 143, 229);
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .homepage {
    &-banner {
      background: url('../../asset/images/paracraft-phone-bg.png') no-repeat top
        center;
      height: auto;
      &-buttons {
        padding-top: 160px;
        display: flex;
        justify-content: center;
        &-btn {
          width: 30%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    &-video-dialog {
      .el-dialog {
        min-width: 85% !important;
        .el-dialog__header {
          .el-dialog__headerbtn {
            top: -2px;
            right: -20px;
            .el-icon-close:before {
              font-size: 26px;
            }
          }
        }
      }
    }
    &-phrase {
      // display: block;
      flex-wrap: wrap;
      &-term {
        width: 47%;
        justify-content: start;
        font-size: 12px;
        padding-left: 5px;
      }
    }
    &-intro {
      flex-wrap: wrap;
      padding: 12px 0;
      &-left {
        display: none;
      }
      &-center {
        /deep/ .el-carousel {
          width: 100%;
          box-sizing: border-box;
          height: auto;
          .el-carousel__container {
            height: calc(100vw / 605 * 363) !important;
            .el-carousel__item {
              .homepage-intro-center-img {
                height: 100%;
                width: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
      &-right {
        padding: 14px;
        &-text {
          padding: 10px 0 10px 34px;
          font-size: 12px;
          &-phone {
            display: block;
          }
          &-icon {
            top: 8px;
          }
        }
        .is-active-term {
          border: solid 1px #3ea2ff;
          box-shadow: none;
        }
      }
    }
    &-paracraft {
      &-title {
        font-size: 14px;
      }
      &-text {
        font-size: 12px;
      }
    }
    &-download {
      &-title {
        font-size: 14px;
        margin: 10px;
      }
      &-hint {
        font-size: 12px;
      }
      &-button {
        width: 130px;
        height: 32px;
        line-height: 32px;
        margin: 0 0 22px;
      }
    }
  }
}
</style>
