<template>
  <div class="parents-and-children-like">
    <h3 class="parents-and-children-like-title">
      孩子、父母和老师都喜欢Paracraft
    </h3>
    <div class="parents-and-children-like-carousel">
      <el-carousel indicator-position="outside" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
          <div class="carousel-box">
            <div class="carousel-box-left">
              <img class="carousel-box-left-img" src="@/asset/images/ourAdvantagesImg/1-比Minecraft更进一步/1 完善的3D场景编辑器.png" alt="">
              <p class="carousel-box-left-text">李小圆，小学一年级</p>
            </div>
            <div class="carousel-box-right">
              <p>做动画时遇到了一些问题，结合老师的讲解，很快就解决了。在用代码编程时，能实时看到3D世界的效果，很nice。</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.parents-and-children-like {
  padding: 60px 0;
  &-title {
    font-size: 36px;
    color: #333;
    margin: 0 0 50px;
    text-align: center;
  }
  &-carousel {
    max-width: 1205px;
    margin: 0 auto;
    /deep/ .el-carousel {
      .el-carousel__container {
        .el-carousel__arrow {
          background: #4aa8ff;
        }
        .el-carousel__item {
          .carousel-box {
            border: 1px solid red;
            display: flex;
            justify-content: center;
            &-left {
              width: 126px;
              &-img {
                width: 126px;
                height: 126px;
                border: 1px solid red;
                border-radius: 50%;
              }
              &-text {
                font-size: 14px;
                color: #8d8d8d;
              }
            }
            &-right {
              width: 675px;
              border: 1px solid red;
              padding: 20px 0 0 33px;
              line-height: 32px;
            }
          }
        }
      }
      .el-carousel__indicators  {
        .el-carousel__indicator {
          .el-carousel__button {
            background: #4aa8ff;
          }
        }
      }
    }
  }
}
</style>

