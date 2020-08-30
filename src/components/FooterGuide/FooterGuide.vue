<template>
  <!-- 使用编程时路由导航来实现路由的切换功能 -->
  <div class="footer-guide">
    <span class="guide-item " :class="{on:'/msite'===$route.path}" @click.stop="goOn('/msite')">
      <span class="item-icon">
        <i class="iconfont icon-elm"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide-item" :class="{on:'/search'===$route.path}" @click.stop="goOn('/search')">
      <span class="item-icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on:'/order'===$route.path}" @click.stop="goOn('/order')">
      <span class="item-icon">
        <i class="iconfont icon-order"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on:'/personal'===$route.path}" @click.prevent="goOn('/personal')">
      <span class="item-icon">
        <i class="iconfont icon-personal"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goOn (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/variable.styl"
@import "../../common/stylus/mixin.styl"
.footer-guide
  position fixed !important
  display flex
  z-index 100
  left 0
  right 0
  bottom 0
  height 50px
  width 100%
  background-color $bc-white-s

  .guide-item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    color $font-color-gray
    margin 5px
    &.on
      color $blue

    span
      font-size $font-size-small
      margin-top 2px
      margin-bottom 2px

      .iconfont
        font-size $font-size-large-sss
</style>
