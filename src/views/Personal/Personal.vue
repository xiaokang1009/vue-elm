<template>
  <div class="personal">
    <section class="personal-number">
      <router-link to="/login" class="personal-link">
        <div class="personal-image">
          <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg"/>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录&ensp;/&ensp;注册</p>
          <P>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </P>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou"></i>
        </span>
      </router-link>
    </section>
    <section class="personal-info-data">
      <a href="javascript:;" class="data-list">
        <p class="money-pack">
          <span v-if="userNotLogin" class="iconfont icon-hongbao"></span>
          <span v-else class="number "><b style="color:#FF5F3E;">3</b>个</span>
        </p>
        <p class="money-desc">红包</p>
      </a>
      <a href="javascript:;" class="data-list">
        <p class="money-pack">
          <span v-if="userNotLogin" class="iconfont icon-jifen01"></span>
          <span v-else class="number "><b style="color:#6AC20B;">0</b>个</span>
        </p>
        <p class="money-desc">红包</p>
      </a>
    </section>
    <!-- 列表 -->
    <section class="personal-list-data">
      <section class="personal-list">
        <a href="javascript:;" class="personal-item">
          <aside class="icon">
            <span class="iconfont color-blue icon-weizhi-tianchong"></span>
          </aside>
          <div class="item-text">
            我的地址<span class="iconfont icon-jiantou"></span>
          </div>
        </a>
      </section>
      <section class="personal-list">
        <a href="javascript:;" class="personal-item">
          <aside class="icon">
            <span class="iconfont icon-shangcheng"></span>
          </aside>
          <div class="item-text">
            金币商城<span class="iconfont icon-jiantou"></span>
          </div>
        </a>
        <a href="javascript:;" class="personal-item">
          <aside class="icon">
            <span class="iconfont icon-liwu"></span>
          </aside>
          <div class="item-text">
            分享拿20元现金
            <span class="iconfont icon-jiantou"></span>
          </div>
        </a>
      </section>
      <section class="personal-list">
        <a href="javascript:;" class="personal-item">
          <aside class="icon">
            <span class="iconfont color-blue icon-kefu"></span>
          </aside>
          <div class="item-text">
            我的客服<span class="iconfont icon-jiantou"></span>
          </div>
        </a>
        <a href="javascript:;" class="personal-item">
          <aside class="icon">
            <span class="iconfont color-blue icon-eliaomo"></span>
          </aside>
          <div class="item-text">
            下载饿了么app<span class="iconfont icon-jiantou"></span>
          </div>
        </a>
        <a href="javascript:;" class="personal-item">
          <aside class="icon">
            <span class="iconfont color-blue icon-guize1"></span>
          </aside>
          <div class="item-text">
            规则中心<span class="iconfont icon-jiantou"></span>
          </div>
        </a>
      </section>
    </section>
    <!-- 隐私政策 -->
    <section class="privacy-policy">
      <a href="javascript:;" class="prpo-go">隐私政策</a>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userNotLogin: true
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.personal
  width 100%

  .personal-number
    .personal-link
      clearfix()
      position relative
      display flex
      background-image $bc-img
      padding 20px 10px

      .personal-image
        flex 16%
        height 60px
        width 60px
        overflow hidden
        vertical-align middle

        img
          height 60px
          width 60px
          border-radius 50%

      .user-info
        flex 75%
        margin-top 8px
        margin-left 20px

        p
          font-weight 700
          font-size $font-size-large-s
          color $bc-white-s

          &.user-info-top
            padding-bottom 8px

          .user-icon
            display inline-block

            width 14px
            height 14px

            .icon-mobile
              font-size $font-size-medium
              vertical-align middle

          .icon-mobile-number
            display inline-block
            vertical-align bottom
            padding 2px 0
            font-size $font-size-normal
            color $bc-white-s

      .arrow
        flex 10%
        width 12px
        height 12px
        position absolute
        right 15px
        top 40%

        .icon-jiantou
          color $bc-white-s
          font-weight 700
          font-size $font-size-normal

  .personal-info-data
    width 100%
    height 84px
    display flex
    background-color #ffffff
    border-bottom 1px solid $border-white

    .data-list
      flex 1
      border-right 1px solid $border-white
      text-align center

      &:last-child
        border 0

      .money-pack
        margin 15px 0 5px 0

        .icon-hongbao
          color #FF5F3E

        .icon-jifen01
          color #6AC20B

        .iconfont
          font-size 30px

        .number
          font-size $font-size-medium
          color $font-color-black

          b
            font-size 30px
            font-weight 700

      .money-desc
        font-size $font-size-small
        color $font-color-gray-s
        font-weight 700

  .personal-list-data
    .personal-list
      margin-top 10px
      width 100%
      border 1px solid $border-white
      align-items center
      background-color $bc-white-s

      .personal-item
        display flex
        padding-left 25px

        .icon
          flex 10%
          display block
          margin 10px 0 10px -12px
          vertical-align center

          .iconfont
            font-size 20px

          .color-blue
            color $blue

          .icon-shangcheng
            color #94D94A
          .icon-liwu
            color #FC7B53

        .item-text
          flex 94%
          padding 12px 10px 10px 0
          display flex
          justify-content space-between
          color $font-color-black
          border-top 1px solid $border-white
          width 100%

          .icon-jiantou
            color #bbbbbb

        &:first-child
          .item-text
            border 0
  .privacy-policy
    margin 23px 0
    text-align center
    color $blue
    font-size $font-size-large
    .prpo-go
      color inherit
</style>
