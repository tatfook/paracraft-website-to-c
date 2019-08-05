<template>
  <div class="common-footer">
    <div class="common-footer-center">
      <div class="common-footer-center-part-1">
        <img src="@/asset/images/footerImg/图层97.png" alt="">
      </div>
      <div class="common-footer-center-part-2" v-for="(i,index) in listData" :key="index">
        <h4 class="common-footer-center-part-2-title">{{i.title}}</h4>
        <ul class="common-footer-center-part-2-list">
          <li class="common-footer-center-part-2-item" v-for="(j, num) in i.secondaryList" :key="num">
            <a class="common-footer-center-part-2-item-link" :href="j.linkUrl" :target="index == 0 && num == 0 ? '' : '_blank'">{{j.title}}</a>
          </li>
        </ul>
      </div>
      <div class="common-footer-center-part-3">
        <h4 class="common-footer-center-part-2-title">找到我们</h4>
        <a href="https://weibo.com/u/5676054156" target="_blank"><img class="common-footer-center-part-3-img" src="@/asset/images/footerImg/图层284.png" alt=""></a>
        <a href="mailto:lixizhi@paraengine.com"><img class="common-footer-center-part-3-img" src="@/asset/images/footerImg/图层285.png" alt=""></a>
      </div>
      <div class="common-footer-center-part-4">
        <img src="@/asset/images/footerImg/图层288.png" alt="">
      </div>
    </div>
    <div class="common-footer-phone">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item :title="i.title" name="1" v-for="(i,index) in listData" :key="index">
          <ul class="common-footer-center-part-2-list">
            <li class="common-footer-center-part-2-item" v-for="(j, num) in i.secondaryList" :key="num">
              <a class="common-footer-center-part-2-item-link" :href="j.linkUrl" :target="index == 0 && num == 0 ? '' : '_blank'">{{j.title}}</a>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="找到我们" name="4">
          <h4 class="common-footer-center-part-2-title">找到我们</h4>
          <a href="https://weibo.com/u/5676054156" target="_blank"><img class="common-footer-center-part-3-img" src="@/asset/images/footerImg/图层284.png" alt=""></a>
          <a href="mailto:lixizhi@paraengine.com"><img class="common-footer-center-part-3-img" src="@/asset/images/footerImg/图层285.png" alt=""></a>
        </el-collapse-item>
        <el-collapse-item title="微信公众号" name="4">
          <img src="@/asset/images/footerImg/图层288.png" alt="">
        </el-collapse-item>
      </el-collapse>
    </div>
    <p class="common-footer-bottom">© Tatfook | 粤ICP备14002196号 | {{visitCount}} visits today</p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'CommonFooter',
  mounted() {
    axios
      .post('https://api-stage.keepwork.com/core/v0/keepworks/page_visit', {
        url: window.location.href
      })
      .then(response => {
        this.visitCount = response.data
      })
      .catch(error => console.log(error))
  },
  data() {
    return {
      visitCount: 0,
      listData: [
        {
          title: 'Paracraft创意空间',
          secondaryList: [
            {
              title: 'Paracraft首页',
              linkUrl: ''
            },
            {
              title: '下载Paracraft',
              linkUrl: ''
            },
            {
              title: '作品社区',
              linkUrl: 'https://keepwork.com'
            },
            {
              title: '相关书籍',
              linkUrl: 'https://keepwork.com/s/textbook'
            }
          ]
        },
        {
          title: '资源',
          secondaryList: [
            {
              title: '学习资源',
              linkUrl: 'https://keepwork.com/s'
            },
            {
              title: '更新日志',
              linkUrl: ''
            }
          ]
        },
        {
          title: '公司',
          secondaryList: [
            {
              title: '关于我们',
              linkUrl: 'https://biz.keepwork.com/companyProfile'
            },
            {
              title: '商务合作',
              linkUrl: 'https://biz.keepwork.com'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.common-footer {
  background: url('../../asset/images/footerImg/foot.png') center top no-repeat
    #fff;
  padding-top: 156px;
  position: relative;
  overflow: hidden;
  &-center {
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: solid 1px #5d98e9;
    display: flex;
    &-part-2 {
      width: 156px;
      padding: 0 22px;
      &-title {
        font-size: 16px;
        color: #fff;
        line-height: 32px;
        margin: 0;
      }
      &-list {
        padding: 0;
      }
      &-item {
        list-style: none;
        &-link {
          color: #dadada;
          text-decoration: none;
          line-height: 32px;
          font-size: 14px;
        }
      }
    }
    &-part-3 {
      width: 156px;
      margin-left: 200px;
      &-img {
        width: 55px;
        margin-right: 20px;
      }
    }
    &-part-4 {
    }
  }
  &-bottom {
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
  &-phone {
    display: none;
  }
}
@media screen and (max-width: 769px) {
  .common-footer {
    padding: 40px 10px;
    background-size: auto 100%;
    &-center {
      display: none;
    }
    &-phone {
      display: block;
      /deep/ .el-collapse {
        .el-collapse-item {
          .el-collapse-item__header {
            background: none;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

