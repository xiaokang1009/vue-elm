<template>
  <div class="cartcontrol">
    <transition name="move">
      <section class="iconfont icon-jian" v-show="food.count" @click="updateFoodCount(false)"></section>
    </transition>
    <section class="cart-count" v-show="food.count">{{ food.count }}</section>
    <section class="iconfont icon-jia" @click="updateFoodCount(true)"></section>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (flag) {
      this.$store.dispatch('updateFoodCount', { flag, food: this.food })
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.cartcontrol
  font-size 0
  .icon-jian
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
    &.move-enter-active, &.move-leave-active
      transition all .3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size $font-size-normal
    color rgb(147, 147, 159)
  .icon-jia
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
</style>
