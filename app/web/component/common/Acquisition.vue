<template>
  <div class="acquisition">
    <h3 class="acquisition-title">从Paracraft中获得更多</h3>
    <div class="acquisition-cabinet">
      <div class="acquisition-cabinet-box">
        <h4 class="acquisition-cabinet-box-title title-1">PBL项目式学习</h4>
        <p class="acquisition-cabinet-box-text">通过丰富的项目，让孩子们从多角度学习计算思维，结合项目实例，扎实掌握知识。</p>
        <a href="https://keepwork.com" target="_blank" class="acquisition-cabinet-box-more">进一步了解</a>
      </div>
      <div class="acquisition-cabinet-box">
        <h4 class="acquisition-cabinet-box-title title-2">《Paracraft编程入门》</h4>
        <p class="acquisition-cabinet-box-text">学生、家长、老师的AI与编程入门教材，适合7岁以上用户使用</p>
        <a href="https://keepwork.com/s/textbook" target="_blank" class="acquisition-cabinet-box-more">进一步了解</a>
      </div>
      <div class="acquisition-cabinet-box">
        <h4 class="acquisition-cabinet-box-title title-3">编程教学</h4>
        <p class="acquisition-cabinet-box-text">了解Paracraft如何在课堂中轻松进行编程教学</p>
        <a href="https://keepwork.com/s/lesson" target="_blank" class="acquisition-cabinet-box-more">进一步了解</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.acquisition {
  max-width: 1920px;
  margin: 0 auto;
  padding: 30px 0 66px;
  background: url('../../asset/images/acquisition/bg.png') no-repeat bottom
    center rgb(245, 245, 245);
  &-title {
    color: #333333;
    font-size: 36px;
    text-align: center;
    margin: 38px 0;
  }
  &-cabinet {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
    &-box {
      width: 366px;
      background-color: #ffffff;
      box-shadow: 0px 4px 8px 0px rgba(166, 166, 166, 0.47);
      padding-bottom: 40px;
      border-radius: 10px;
      &:hover {
        box-shadow: 0px 8px 12px 0px rgba(98, 98, 98, 0.4);
        transition: all 200ms ease-in;
      }
      &-title {
        height: 78px;
        line-height: 78px;
        text-align: center;
        margin: 0;
        color: #fff;
        font-size: 24px;
      }
      @each $img in 1, 2, 3 {
        .title-#{$img} {
          background: url('../../asset/images/acquisition/#{$img}--#{$img}.png')
            center
            top
            no-repeat;
        }
      }
      &-text {
        width: 280px;
        margin: 48px auto;
        font-size: 16px;
        text-align: center;
        min-height: 70px;
      }
      &-more {
        width: 203px;
        height: 47px;
        background: #4aa8ff;
        margin: 0 auto;
        display: block;
        line-height: 47px;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        text-decoration: none;
        &:hover {
          background: rgb(51, 143, 229);
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .acquisition {
    padding: 12px;
    &-title {
      font-size: 14px;
      padding-left: 12px;
    }
    &-cabinet {
      display: block;
      &-box {
        &-title {
          height: 57px;
          line-height: 57px;
          font-size: 14px;
        }
        &-text {
          margin: 14px;
        }
        &-more {
          height: 32px;
          line-height: 32px;
          width: 140px;
        }
        width: 80%;
        max-width: 366px;
        margin: 20px auto;
        border-radius: 12px;
        overflow: hidden;
      }
    }
  }
}
</style>

