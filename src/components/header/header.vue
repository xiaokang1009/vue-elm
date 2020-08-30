<template>
  <!--header组件部分，提供给每个需要header的组件使用-->
  <header class="header">
    <slot name="left"></slot>
    <span class="header-title">
        <span class="header-title-text ellipsis">{{title}}</span>
      </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.header //商家首页头部
  position fixed
  left 0
  top 0
  width 100%
  height 45px
  z-index 100
  background-image $bc-img

  .header-search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%

    .icon-sousuo
      font-size $font-size-large-sss
      color $bc-white-s

  .header-title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    color $bc-white-s
    font-size $font-size-large-sss
    text-align center

    .header-title-text
      font-size $font-size-large-ss
      color $bc-white-s
      display block

  .header-login
    position absolute
    right 15px
    top 50%
    font-size $font-size-medium
    color $bc-white-s
    transform translateY(-50%)

    .icon-user
      font-size $font-size-large-sss
      color $bc-white-s

</style>
