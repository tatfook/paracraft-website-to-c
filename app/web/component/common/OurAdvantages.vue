<template>
  <div class="our-advantages">
    <h3 class="our-advantages-title">我们的优势</h3>
    <div class="our-advantages-box">
      <div class="our-advantages-box-carousel">
        <el-carousel height="397px" ref="centerCarousel_1" indicator-position="outside" @change="currentSlide_1" :autoplay="isAutoplay_1">
          <el-carousel-item v-for="(item, index) in advantagesCarouselData_1" :key="index">
            <img class="our-advantages-box-carousel-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="our-advantages-box-text">
        <h4 class="our-advantages-box-text-title">比Minecraft更进一步</h4>
        <p :class="['our-advantages-box-text-desc',{'is-active-term': currentSlideIndex_1 == index}]" v-for="(item, index) in advantagesCarouselData_1" :key="index" @mouseover="locateCurrentImg(1)(index)" @mouseout="toAutoplay(1)">
          <img class="our-advantages-box-text-desc-icon" :src="currentSlideIndex_1 == index ? item.activeIcon : item.icon" alt="">
          {{item.text}}
        </p>
        <p class="our-advantages-box-text-ad">随心所欲创造属于你的3D动画与游戏</p>
      </div>
    </div>
    <div class="our-advantages-box our-advantages-box-2">
      <div class="our-advantages-box-text our-advantages-box-text-2">
        <h4 class="our-advantages-box-text-title">比Scratch更强大</h4>
        <p :class="['our-advantages-box-text-desc our-advantages-box-text-2-desc',{'is-active-term': currentSlideIndex_2 == index}]" v-for="(item, index) in advantagesCarouselData_2" :key="index" @mouseover="locateCurrentImg(2)(index)" @mouseout="toAutoplay(2)">
          <img class="our-advantages-box-text-desc-icon our-advantages-box-text-2-desc-icon-phone" :src="currentSlideIndex_2 == index ? item.activeIcon : item.icon" alt="">
          {{item.text}}
          <img class="our-advantages-box-text-desc-icon our-advantages-box-text-2-desc-icon" :src="currentSlideIndex_2 == index ? item.activeIcon : item.icon" alt="">
        </p>
        <p class="our-advantages-box-text-ad">从可视化编程，到文本编程，到发布专业应用程序</p>
      </div>
      <div class="our-advantages-box-carousel">
        <el-carousel height="397px" ref="centerCarousel_2" indicator-position="outside" @change="currentSlide_2" :autoplay="isAutoplay_2">
          <el-carousel-item v-for="(item, index) in advantagesCarouselData_2" :key="index">
            <img class="our-advantages-box-carousel-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="our-advantages-box">
      <div class="our-advantages-box-carousel">
        <el-carousel height="397px" ref="centerCarousel_3" indicator-position="outside" @change="currentSlide_3" :autoplay="isAutoplay_3">
          <el-carousel-item v-for="(item, index) in advantagesCarouselData_3" :key="index">
            <img class="our-advantages-box-carousel-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="our-advantages-box-text">
        <h4 class="our-advantages-box-text-title">不只是教学工具</h4>
        <p :class="['our-advantages-box-text-desc',{'is-active-term': currentSlideIndex_3 == index}]" v-for="(item, index) in advantagesCarouselData_3" :key="index" @mouseover="locateCurrentImg(3)(index)" @mouseout="toAutoplay(3)">
          <img class="our-advantages-box-text-desc-icon" :src="currentSlideIndex_3 == index ? item.activeIcon : item.icon" alt="">
          {{item.text}}
        </p>
        <p class="our-advantages-box-text-ad">专业领域的应用还在不断增加中</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OurAdvantages',
  data() {
    return {
      currentSlideIndex_1: 0,
      currentSlideIndex_2: 0,
      currentSlideIndex_3: 0,
      isAutoplay_1: true,
      isAutoplay_2: true,
      isAutoplay_3: true,
      advantagesCarouselData_1: [
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/1 完善的3D场景编辑器.png'),
          text: '完善的3D场景编辑器',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/2 制作3D骨骼动画角色.png'),
          text: '制作3D骨骼动画角色',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/3 直接在3D世界中编程.png'),
          text: '直接在3D世界中编程',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/4 沉浸式游戏与学习体验.png'),
          text: '沉浸式游戏与学习体验',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        }
      ],
      advantagesCarouselData_2: [
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/比Scratch更强大/2-3D.png'),
          text: '从2D到3D全面升级Scratch命令',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/比Scratch更强大/积木式编程.png'),
          text: '积木式编程与代码编程一键切换',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/比Scratch更强大/开发从简单到复杂的3的游戏.png'),
          text: '开发从简单到复杂的3D动画与游戏',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/比Scratch更强大/作品分享到社区或发布到手机商店.png'),
          text: '作品可分享到社区或发布到手机应用商店',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        }
      ],
      advantagesCarouselData_3: [
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/不只是教学工具/积累15年，自主研发NPL语言.png'),
          text: '积累15年，自主研发NPL语言',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/不只是教学工具/强大的功能足以胜任商业开发.png'),
          text: '强大的功能足以胜任商业开发',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/不只是教学工具/已经用来编写专业3D引擎.png'),
          text: '已经用来编写专业3D引擎',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        },
        {
          imgUrl: require('@/asset/images/ourAdvantagesImg/不只是教学工具/500W万用户.png'),
          text: '编写的大型网游拥有500多万注册用户',
          icon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/待播放.png'),
          activeIcon: require('@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/当前播放.png')
        }
      ]
    }
  },
  methods: {
    currentSlide_1(index) {
      this.currentSlideIndex_1 = index
    },
    currentSlide_2(index) {
      this.currentSlideIndex_2 = index
    },
    currentSlide_3(index) {
      this.currentSlideIndex_3 = index
    },
    locateCurrentImg(suffix) {
      return i => {
        this.$refs[`centerCarousel_${suffix}`].setActiveItem(i)
        this[`isAutoplay_${suffix}`] = false
      }
    },
    toAutoplay(suffix) {
      this[`isAutoplay_${suffix}`] = true
    }
  }
}
</script>
<style lang="scss" scoped>
.our-advantages {
  padding: 64px 0 0;
  margin: 0 auto;
  max-width: 1200px;
  &-title {
    font-size: 36px;
    color: #333;
    text-align: center;
    margin: 0 0 8px;
  }
  &-box {
    display: flex;
    padding: 25px 0 0 0;
    & + .our-advantages-box {
      border-top: solid 1px #ededed;
    }
    margin-bottom: 66px;
    &-carousel {
      width: 666px;
      /deep/ .el-carousel {
        .el-carousel__container {
          .el-carousel__item {
            .our-advantages-box-carousel-img {
              width: 100%;
            }
          }
        }
        .el-carousel__indicators {
          .el-carousel__indicator {
            .el-carousel__button {
              background: #b8c0cc;
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
    &-text {
      flex: 1;
      padding-left: 46px;
      &-title {
        font-size: 24px;
        color: #333;
      }
      &-desc {
        display: flex;
        align-items: center;
        color: #333;
        padding: 10px;
        &-icon {
          margin-right: 10px;
        }
      }
      .is-active-term {
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 1px rgba(57, 159, 255, 0.38);
        border-radius: 10px;
      }
      &-ad {
        font-size: 20px;
        color: #3ea2ff;
      }
    }
    &-text-2 {
      text-align: right;
      padding: 0 46px 0 0;
      &-desc {
        justify-content: flex-end;
        &-icon {
          margin: 0 0 0 10px;
          transform: rotate(180deg);
          &-phone {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .our-advantages {
    padding: 10px 0;
    &-title {
      font-size: 14px;
      margin-bottom: 10px;
      text-align: left;
      padding-left: 10px;
    }
    &-box {
      flex-wrap: wrap;
      margin-bottom: 12px;
      &-carousel {
        width: calc(100vw);
        /deep/ .el-carousel {
          .el-carousel__container {
            height: calc(100vw / 666 * 420) !important;
          }
        }
      }
      &-text {
        padding: 10px;
        text-align: left;
        &-title {
          font-size: 14px;
          padding-left: 12px;    
        }
        &-ad {
          font-size: 12px;
        }
        &-desc {
          text-align: left;
          font-size: 12px;
          padding: 5px 10px 5px 28px;
          &-icon {
            transform: rotate(90deg);
          }
        }
        .is-active-term {
          box-shadow: none;
          border: solid 1px #3ea2ff;
        }
        &-2 {
          padding: 10px;
          &-desc {
            justify-content: flex-start;
            &-icon {
              display: none;
              &-phone {
                display: block;
              }
            }
          }
        }
      }
      &-2 {
        flex-wrap: wrap-reverse;
      }
    }
  }
}
</style>