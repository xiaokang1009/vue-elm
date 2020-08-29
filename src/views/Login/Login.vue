<template>
  <section class="login">
    <div class="login-container">
      <div class="login-header">
        <h2 class="login-logo">仿饿了么外卖</h2>
        <div class="login-header-title">
          <a href="javascript:;" @click="isShowPhone" :class="onShowPhone">手机登录</a>
          <a href="javascript:;" @click="isShowPwd" :class="onShowPwd">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form>
          <div :class="onShowPhone">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get-verification">获取验证码</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login-hint">
              温馨提示：未注册本外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="onShowPwd">
            <section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login-verification">
                <input type="password" minlength="6" placeholder="密码">
                <div class="switch-button off">
                  <div class="switch-circle"></div>
                  <span class="switch-text">...</span>
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get-verification" src="./images/captcha.svg">
              </section>
            </section>
          </div>
          <button class="login-submit">登录</button>
        </form>
        <a href="javascript:;" class="about-us">关于我们</a>
      </div>
      <a href="javascript:;" class="go-back" @click="$router.back()">
        <i class="iconfont icon-jiantouzuo"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      on: 'on',
      onShowPwd: '',
      onShowPhone: 'on'
    }
  },
  methods: {
    isShowPhone () {
      this.onShowPhone = this.on
      this.onShowPwd = ''
    },
    isShowPwd () {
      this.onShowPhone = ''
      this.onShowPwd = this.on
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.login
  width 100%
  height 100%
  background $bc-white-s
  .login-container
    padding-top 60px
    width 80%
    margin 0 auto
    .login-header
      .login-logo
        font-size 40px
        font-weight bold
        color $blue
        text-align center
      .login-header-title
        padding-top 40px
        text-align center
        >a
          color $font-color-black
          font-size $font-size-medium
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color $blue
            font-weight 700
            border-bottom 2px solid $blue

    .login-content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid $bc-white-ssss
            border-radius 4px
            outline 0
            font 400 $font-size-medium Arial
            &:focus
              border 1px solid $blue
          .login-message
            position relative
            margin-top 16px
            height 48px
            font-size $font-size-medium
            background $bc-white-s
            .get-verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color $bc-white-ss
              font-size $font-size-medium
              border transparent
          .login-verification
            position relative
            margin-top 16px
            height 48px
            font-size $font-size-medium
            background-color $bc-white-s
            .switch-button
              font-size $font-size-small
              border 1px solid $bc-white-ssss
              border-radius 8px
              transition background-color.3s,border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color $bc-white-s
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background $bc-white-s
                .switch-text
                  float right
                  color $bc-white-ssss
              &.on
                background $blue
              >.switch-circle
                //transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid $bc-white-ssss
                border-radius 50%
                background $bc-white-s
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
          .login-hint
            margin-top $font-size-small
            color $font-color-gray
            font-size 14px
            line-height 20px
            >a
              color $blue
        .login-submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background-image $bc-img
          color $bc-white-s
          text-align center
          font-size 16px
          line-height 42px
          border 0
    .about-us
      display block
      font-size $font-size-small
      margin-top 20px
      text-align center
      color $font-color-gray
  .go-back
    position absolute
    top 5px
    left 5px
    width 30px
    height 30px
    >.iconfont
      font-size $font-size-large-ss
      color $font-color-gray
</style>
