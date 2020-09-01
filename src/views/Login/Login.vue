<template>
  <section class="login">
    <div class="login-container">
      <div class="login-header">
        <h2 class="login-logo">仿饿了么外卖</h2>
        <div class="login-header-title">
          <a href="javascript:;" @click="loginType=true" :class="{on: loginType}">手机登录</a>
          <a href="javascript:;" @click="restCaptcah" :class="{on: !loginType}">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form @submit.prevent="login">
          <div :class="{on: loginType}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!phoneRight" class="get-verification"
                      :style="phoneRight?'color:black':''" @click.prevent="getCode">
                {{ sendTime >= 0 ? `${sendTime}s后重新发送` : '获取验证码' }}
              </button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册本外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginType}">
            <section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login-verification">
                <input :type="showType" minlength="6" maxlength="18" placeholder="密码" v-model="pwd">
                <div class="switch-button off" :class="flag?'on':'off'" @click.prevent.stop="passwordIsShow(flag)">
                  <div class="switch-circle" :class="{right:flag}"></div>
                  <span class="switch-text">{{ flag ? 'abc' : '' }}</span>
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img ref="captcha" class="get-verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login-submit">登录</button>
        </form>
        <a href="javascript:;" class="about-us">关于我们</a>
      </div>
    </div>
    <a href="javascript:;" class="go-back" @click="$router.back()">
      <i class="iconfont icon-jiantouzuo"></i>
    </a>
  </section>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { reqLoginPwd, reqLoginSms, reqSendCode } from '../../api/index'
export default {
  data () {
    return {
      loginType: true, // 使用手机验证码登录 还是密码登录
      sendTime: -1, // 计时的时间，默认为-1，当倒计时小于0然后再显示发送验证码
      showType: 'password', // 密码框的type属性默认为password，可以改变为text
      flag: false, // 显示密码和隐藏密码的标志
      pwd: '', // 密码
      phone: '', // 手机号
      code: '', // 手机验证码
      name: '', // 用户名
      captcha: '' // 图片验证码
    }
  },
  computed: {
    phoneRight () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 重置验证码
    restCaptcah () {
      this.loginType = false
      this.getCaptcha()
    },
    //  异步获取验证码
    async getCode () {
      if (!this.sendTime <= 0) {
        //  显示倒计时
        this.sendTime = 60
        this.intervalId = setInterval(() => {
          this.sendTime < 0 && clearInterval(this.intervalId)
          this.sendTime--
        }, 1000)
        //  发送ajax请求
        await reqSendCode(this.phone)
      }
    },
    //  显示隐藏密码的方法
    passwordIsShow (isShow) {
      if (isShow) {
        this.showType = 'password'
      } else {
        this.showType = 'text'
      }
      this.flag = !this.flag
    },
    //  登录相关的验证 以及异步登录
    async login () {
      let result
      if (this.loginType) {
        // 短信登录
        const { phoneRight, phone, code } = this
        /* eslint-disable no-useless-return */
        if (!phoneRight) {
          // 手机号码不正确
          MessageBox.alert('手机号码不正确', '提示')
          return
        } else if (!/^\d{6}$/.test(code)) {
          // 验证码格式不对
          MessageBox.alert('验证码格式不对', '提示')
          return
        }
        //  发送ajax请求验证码登录
        result = await reqLoginSms(phone, code)
      } else {
        // 密码登录
        const { pwd, name, captcha } = this
        if (!name && !pwd) {
          //  用户名和密码不能为空
          MessageBox.alert('用户名和密码不能为空', '提示')
          return
        } else if (!captcha) {
          //  图形验证码不能为空
          MessageBox.alert('图形验证码不能为空', '提示')
          return
        }
        //  发送ajax请求密码登录
        result = await reqLoginPwd({ name, pwd, captcha })
      }
      // 清除定时器
      if (this.sendTime) {
        this.sendTime = -1
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }
      //  统一处理数据
      if (result.code === 0) {
        // eslint-disable-next-line no-unused-vars
        const userInfo = result.data
        // 将user信息保存到 state 中
        this.$store.dispatch('saveUserInfo', userInfo)
        // 跳转去个人中心
        this.$router.replace('/personal')
      } else {
        //  刷新图形验证码
        this.getCaptcha()
        //  弹出警告框
        MessageBox.alert(result.msg, '提示')
        //  清空输入框
        this.pwd = ''
        this.code = ''
        this.name = ''
        this.captcha = ''
      }
    },
    //  获取图形验证码
    getCaptcha () {
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.login
  position relative
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
                  float left
                  color $bc-white-ssss
              &.on
                background $blue
              >.switch-circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid $bc-white-ssss
                border-radius 50%
                background $bc-white-s
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                transition transform .3s

                &.right
                  transform translateX(30px)
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
