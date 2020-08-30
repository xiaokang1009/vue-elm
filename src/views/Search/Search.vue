<template>
  <section class="search">
    <Header title="搜索"/>
    <form class="search-form" action="#">
      <input class="search-input" type="search" name="search" placeholder="请输入商家或美食名称">
      <input type="submit" name="submit" class="search-submit">
    </form>
  </section>
</template>

<script>
import Header from '@/components/header/header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.search
  width 100%

  .search-form
    clearfix()
    margin-top 45px
    background-color $bc-white-s
    padding 12px 8px
    display flex
    justify-content space-between

    input
      height 35px
      padding 0 4px
      border-radius 2px
      outline none

      &.search-input
        flex 79%
        border 4px solid $border-white-cc
        font-size $font-size-medium
        color $font-color-black
        background-color $border-white-cc

      &.search-submit
        margin-left 4px
        flex 21%
        border 4px solid $blue
        font-size $font-size-large
        color $bc-white-s
        background $blue
</style>
