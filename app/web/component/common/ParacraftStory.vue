<template>
  <div class="paracraft-story">
    <div class="paracraft-story-content">
      <p class="paracraft-story-content-top">Paracraft的故事</p>
      <h3 class="paracraft-story-content-title">致Paracraft创意空间用户</h3>
      <p class="paracraft-story-content-author">作者: Li, Xizhi</p>
      <p class="paracraft-story-content-author">Date: 2015.2.14</p>
      <h4 class="paracraft-story-content-slogan">前言：</h4>
      <p>Paracraft是一款免费的3D个人电影创作工具。感谢我们的用户从魔法哈奇到创意空间，又到今天的Paracraft，陪着我们团队走过了5年多的 时光。2015年2月14日，今天我们对外首次开放了Paracraft移动版的下载，包括Android版和iOS版。借此机会，我以作者的身份和大家 分享Paracraft的研发历程；我们过去解决了哪些问题，以及未来如何发展。</p>
      <h4 class="paracraft-story-content-slogan">1. 背景与介绍</h4>
      <p>2004年在我还在读大学的时候，希望发明一种计算机语言来解决人工智能的仿真与逻辑问题，于是就有了NPL语言(Neural Parallel Language)；随后，我发现很多仿真问题需要能够以3D的形态展现出来，刚好当时浙大开设了首个3D游戏引擎的课程，我报名了，并在学期结束时，写 完了一个初步的3D引擎，我给它起名为ParaEngine分布式游戏引擎，并希望它能够成为NPL语言的一个3D仿真类库。后来我本科的毕业设计和数篇 SCI论文都是围绕ParaEngine和AI自主动画系统展开的。</p>
      <p>2005年毕业后，在我父亲的研究院，我全身心的投入了ParaEngine和NPL语言的深入开发。后来我说服大学的几位同学一同工作，并成立了 ParaEngine工作室。很多人也许不知道，2006年我写过一款名叫KidsMovieCreator的单机沙盒创作软件：用户可以随心所欲的创建 世界，并通过角色扮演制作电子书和小故事。我们发行了中英文两个版本，并取得了一些收入，也因此在一个偶然的机会遇到第一个正式的投资方，并在2007年 末成立了正式公司。</p>
      <p>随后开始了漫长的创业之旅。有了团队，很多人的想法混合在一起，我仿佛迷失了方向。但是我还是很庆幸，10年来，我一直都还在探索编程的本质；对于后来能和团队一起开发出魔法哈奇，并和运营方合作至今，我是很感动的。虽有遗憾，但也不曾后悔。</p>
      <p>2012年我开始认真的关注minecraft这个沙盒游戏。刚刚看到这个产品时我仿佛看到了2006年我自己的影子，逐渐的我发现了这个产品的伟大之处 在于它解决了一个我当年百思不得其解的问题。于是2013年初，在公司出现种种危机的情况下，我却独自花费了大量时间在思考和为ParaEngine引入 一种高效的Block引擎中。对minecraft这种简化的世界观和底层编程逻辑的思考，至今还在继续。</p>
      <p>2014年，“转机”出现在生命中，有人提醒了我要用自己的眼光去看世界。我突然意识到自己进入社会的这10年简直像一个谦虚的小学生，任凭良莠不齐的商 业思维与我善良的内心自相矛盾；却忘记了自己20岁前是多么的成功。前面的成功是因为我一直在用自己的方式思考和工作。于是2013到2014年末，虽然 公司发生了很多变化，团队也只剩下不到10人，我却默默的每天在重构自己的思想，并恢复了学生时代写思维笔记的习惯，每周我会和团队分享其中的一些想法。</p>
      <p>2014年初至今，我的全部精力都在思考和编程上，这是我进入社会后，进步最快的一年。人，大学，社会，编程，产品，企业，世界，这些事物其实都是相似 的，真相总是躲在相似的背后，却被世人说得异常复杂而生迷茫。就仿佛Paracraft在用方块表达整个世界，能看到相似的用户，就能爱上这款产品；不懂 的人则永远不会理解。</p>
      <h4 class="paracraft-story-content-slogan">2. 我们已经解决和已知的问题</h4>
      <p>Paracraft创意空间这款产品刚刚起步，只做了不到1/10的内容。这1/10中，也还有好多的Bug。对于本次发布的手机版：我的目标是能够流畅 的播放所有PC端的作品。目前的版本，应该做到了。带着测试的目的我们选择公开发行目前的版本，同时也是希望电影导演们能将自己的作品展现给更多身边的 人。</p>
      <p>我自己有一个列表，记录了数百个有待解决的问题或需求。但时间有限，发布前我只重点解决了核心的电影播放问题。下面列举一些常见问题，除此之外的任何问题，希望电影导演和用户们可以提交到我们的官方网站 <a href="http://www.paracraft.cn/" class="paracraft-story-content-link" target="_blank">http://www.paracraft.cn/。</a></p>

      <p>
        我们已经知道的问题如下：<br>
        1. 为了可以流畅的播放3D电影：默认的可视距离比PC端要小，但是可以在设置中调整。因此可能导致部分电影远处场景看不见。<br>
        2. 需要内存1GB以上的手机。小内存的手机在部分世界加载一段时间后可能Crash。<br>
        3. 远处雾化，高级渲染特效和/grey效果还没有能迁移到手机端。<br>
        4. 手机端的多人创作已经完成，但是还没有开放出来。我们未来会提供一个比目前更稳定的64位的服务端方案给大家。<br>
        5. 视网膜高清屏手机可能会卡。<br>
        6. 高清屏手机可以在设置中调整UI大小。<br>
        7. 所有PC端右键的操作都采用长按处理。比如编辑电影，切换摄影机等。<br>
        8. 很多UI都还是PC端的样子，我们目前只关注电影播放，没有关注编辑。<br>
      </p>

      <h4 class="paracraft-story-content-slogan">3. Paracraft未来的发展计划</h4>
      <p>很多用户问我这个问题，我这里统一回答大家。</p>

      <p>
        2015年会主要做3件事情：<br>
        1. 任意人物动作和表情的编辑IDE：成为一款真正的动画制作工具。<br>
        2. PC端会提供一种电影级别的实时渲染模式。<br>
        3. 提供一个更稳定的64位个人服务器方案。<br>
      </p>

      <p>
        还有几件事情是我承诺一定会做的，但是目前人力不太够：<br>
        1. NPL语言的开源和插件系统：需要整理很多东西。<br>
        2. PC端永远免费：我们可能只考虑对英文版的iOS用户收费。<br>
        3. 提供Free SDK，让个人可以发布自己的Android/iOS应用App。<br>
        4. 提供外部模型导入/导出/动作编辑。<br>
      </p>

      <p>
        在这里，我真诚邀请有情怀的AAA级程序员可以联系我，与我一同完成上面的开发。Paracraft目前所有代码都是在Github上完成的，我们也接受远程工作。
      </p>

      <h4 class="paracraft-story-content-slogan">4. 致谢</h4>
      <p>
        最后我要感谢为创意剧场提供内容的导演们，尤其是奇仔，桃子，无心，阿杰，小方块。是你们的辛勤付出让我们目前简陋的工具可以大放异彩。希望你们能陪同我，见证Paracraft成为一流的3D个人电影制作工具。未来一定会有更多优秀的人加入我们的行列。</p>
      <p>感谢团队的技术和美术为Paracraft手机版提供各种资源并反复修改。</p>
      <p>感谢资方，给我们无私的赞助，能够让我去实现一个10年以上的长期规划。</p>

      <h4 class="paracraft-story-content-slogan">5. 结论</h4>
      <p>
        未来的年轻人如何与电脑相处是一个世纪难题。我7岁时照着书编写了人生第一个计算机游戏，感谢父母和我的计算机老师，使我拥有了一个和计算机一同成长的完 美童年。我的亲身经历使我懂得孩子们的潜力，我希望通过Paracraft，能让更多的年轻人拥有和我相似的童年：从玩游戏，到编程，到养成正确的思考习 惯，到利用计算机工具和语言去解决问题。希望有一天，NPL语言成为一门被教学和广泛使用的语言。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Paracraft',
  mounted() {
    document.title = 'Paracraft的故事-Paracraft创意空间'
  }
}
</script>

<style lang="scss" scoped>
.paracraft-story {
  padding: 1px;
  color: #333;
  padding: 12px;
  &-content {
    &-link {
    }
    max-width: 1200px;
    margin: 0 auto;
    p {
      font-size: 14px;
      line-height: 20px;
    }
    &-top {
      font-size: 28px;
    }
    &-title {
      text-align: center;
      font-size: 24px;
    }
    &-author {
      font-size: 18px;
      text-align: center;
      margin: 6px;
    }
    &-slogan {
      margin: 30px 0 0 0;
    }
  }
}
</style>

