<template>
  <div class="parents-and-children-like">
    <h3 class="parents-and-children-like-title">
      孩子、父母和老师都喜欢Paracraft
    </h3>
    <div class="parents-and-children-like-carousel">
      <el-carousel indicator-position="outside" arrow="always" interval="6000">
        <el-carousel-item v-for="(item,index) in statementData" :key="index">
          <div class="carousel-box">
            <div class="carousel-box-left">
              <img class="carousel-box-left-img" :src="item.portrait" alt="">
            </div>
            <div class="carousel-box-right">
              <div class="carousel-box-right-desc">
                <p class="carousel-box-right-desc-text">{{item.name}}</p>
                <p class="carousel-box-right-desc-words">{{item.text}}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParentsAndChildrenLike',
  data() {
    return {
      statementData: [
        {
          portrait: require('@/asset/images/parentsIcon/图层30.png'),
          name: '李小圆，小学一年级',
          text:
            '做动画时遇到了一些问题，结合老师的讲解，很快就解决了。在用代码编程时，能实时看到3D世界的效果，很nice。'
        },
        {
          portrait: require('@/asset/images/parentsIcon/图层301.png'),
          name: 'Summer妈妈，学员家长',
          text:
            '我家一个男娃娃，学起来兴趣很高，用Paracraft五天就做了1个动画作品，从故事情节、搭场景、人物动作等等都是自己去想的，还配了字幕。'
        },
        {
          portrait: require('@/asset/images/parentsIcon/图层302.png'),
          name: '高老师，机构老师 ',
          text:
            'Paracraft是3D动画与编程相结合，我们在传授孩子编程知识的同时，孩子写的代码能在动画中验证是否正确，很有吸引力。玩乐中去思考，玩乐中学习编程，很棒。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.parents-and-children-like {
  padding: 60px 0 30px;
  background: rgb(245, 245, 245);
  margin: 0 auto;
  max-width: 1920px;
  &-title {
    font-size: 36px;
    color: #333;
    margin: 0 0 10px;
    text-align: center;
  }
  &-carousel {
    max-width: 1205px;
    margin: 0 auto;
    /deep/ .el-carousel {
      .el-carousel__container {
        height: 200px;
        .el-carousel__arrow {
          background: #b8c0cc;
          width: 32px;
          height: 32px;
          &:hover {
            border: 1px solid #4aa8ff;
            background-color: #4aa8ff;
          }
        }
        .el-carousel__item {
          display: flex;
          justify-content: center;
          .carousel-box {
            display: flex;
            &-left {
              width: 156px;
              display: flex;
              align-items: center;
              justify-content: center;
              &-img {
                width: 126px;
                height: 126px;
                border-radius: 50%;
              }
            }
            &-right {
              width: 675px;
              line-height: 32px;
              display: flex;
              align-items: center;
              &-desc {
                padding-left: 12px;
                &-text {
                  font-size: 14px;
                  color: #8d8d8d;
                  margin: 0;
                }
                &-words {
                  color: #333;
                  font-size: 16px;
                  margin: 4px 0;
                }
              }
            }
          }
        }
      }
      .el-carousel__indicators {
        .el-carousel__indicator {
          .el-carousel__button {
            background: #4aa8ff;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .parents-and-children-like {
    &-title {
      font-size: 14px;
      text-align: left;
      padding-left: 12px;
    }
    &-carousel {
      /deep/ .el-carousel {
        .el-carousel__container {
          height: 300px !important;
          .el-carousel__item {
            display: flex;
            justify-content: center;
            .carousel-box {
              display: block;
              &-left {
                width: 100%;
                text-align: center;
                padding: 0;
              }
              &-right {
                padding: 0 50px;
                width: 100%;
                box-sizing: border-box;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

