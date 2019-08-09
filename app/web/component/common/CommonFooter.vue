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
            <a class="common-footer-center-part-2-item-link" :href="j.linkUrl" :target="index == 0 && (num == 0 || num == 1) ? '' : '_blank'">{{j.title}}</a>
          </li>
        </ul>
      </div>
      <div class="common-footer-center-part-3">
        <h4 class="common-footer-center-part-2-title">找到我们</h4>
        <a href="https://weibo.com/u/5676054156" target="_blank" class="common-footer-center-part-3-img"></a>
        <a href="mailto:lixizhi@paraengine.com" class="common-footer-center-part-3-img common-footer-center-part-3-img-email"></a>
      </div>
      <div class="common-footer-center-part-4">
        <img src="@/asset/images/footerImg/图层288.png" alt="">
        <p class="common-footer-center-part-4-text">公众号：paracraft</p>
      </div>
    </div>
    <div class="common-footer-phone">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item :title="i.title" :name="index" v-for="(i,index) in listData" :key="index">
          <ul class="common-footer-center-part-2-list">
            <li class="common-footer-center-part-2-item" v-for="(j, num) in i.secondaryList" :key="num">
              <a class="common-footer-center-part-2-item-link" :href="j.linkUrl" :target="index == 0 && (num == 0 || num == 1) ? '' : '_blank'">{{j.title}}</a>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="找到我们" name="4">
          <h4 class="common-footer-center-part-2-title">找到我们</h4>
          <a href="https://weibo.com/u/5676054156" target="_blank"><img class="common-footer-center-part-3-img" src="@/asset/images/footerImg/图层284.png" alt=""></a>
          <a href="mailto:lixizhi@paraengine.com"><img class="common-footer-center-part-3-img" src="@/asset/images/footerImg/图层285.png" alt=""></a>
        </el-collapse-item>
        <el-collapse-item title="微信公众号" name="5">
          <img src="@/asset/images/footerImg/图层288.png" alt="">
        </el-collapse-item>
      </el-collapse>
    </div>
    <p class="common-footer-bottom">© Tatfook | <a class="common-footer-bottom-link" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602002093" target="_blank">粤ICP备14002196号</a> | {{visitCount}} visits today</p>
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
      activeName: '0',
      visitCount: 0,
      listData: [
        {
          title: 'Paracraft创意空间',
          secondaryList: [
            {
              title: 'Paracraft首页',
              linkUrl: `${window.location.origin}/`
            },
            {
              title: '下载Paracraft',
              linkUrl: `${window.location.origin}/download`
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
              linkUrl:
                'https://www.evernote.com/shard/s177/client/snv?noteGuid=f876e8cb-4563-4b26-ba23-55524609b79d&noteKey=89b1fed1ca2e1eb1&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs177%2Fsh%2Ff876e8cb-4563-4b26-ba23-55524609b79d%2F89b1fed1ca2e1eb1&title=%2523%2523%2BParaCraft%2BChange%2BLog%2B2019'
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
          &:hover {
            color: #fff;
          }
        }
      }
    }
    &-part-3 {
      width: 156px;
      margin-left: 200px;
      &-img {
        margin: 23px 20px 0 0;
        width: 40px;
        height: 40px;
        display: inline-block;
        background: url('../../asset/images/footerImg/未点击(2).png') no-repeat
          center center;
        background-size: 100%;
        &:hover {
          background: url('../../asset/images/footerImg/图层284.png') no-repeat
            center center;
          background-size: 100%;
        }
      }
      &-img-email {
        background: url('../../asset/images/footerImg/未点击(1).png') no-repeat
          center center;
        background-size: 100%;
        &:hover {
          background: url('../../asset/images/footerImg/图层285.png') no-repeat
            center center;
          background-size: 100%;
        }
      }
    }
    &-part-4 {
      text-align: center;
      padding-top: 9px;
      &-text {
        color: #fff;
        font-size: 14px;
        margin: 2px 0;
      }
    }
  }
  &-bottom {
    color: #fff;
    font-size: 14px;
    text-align: center;
    &-link {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: rgb(211, 204, 204);
      }
    }
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
          .el-collapse-item__wrap {
            background: transparent;
          }
        }
      }
    }
  }
}
</style>

