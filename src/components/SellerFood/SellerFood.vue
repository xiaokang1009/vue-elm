<template>
  <transition name="move">
    <div class="sellerFood" v-show="isShow">
      <div class="bgImg">
        <img :src="food.img">
      </div>
      <div class="content">
        <section class="title ellipsis">
          <span class="">{{food.name}}</span>
        </section>
        <section class="sell-rating">
          <span>月售{{food.sellCount}}份</span>&nbsp;
          <span>好评率{{food.rating}}%</span>
        </section>
        <section class="price-cartControl">
          <span class="price">
            <span class="now">￥{{ food.price }}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </span>
          <span class="cartControl-Wrapper">
            <cart-control :food="food"/>
          </span>
        </section>
        <section class="desc">
          <p>{{ food.info }}</p>
        </section>
        <section class="produce">
          <p>价格说明<i class="iconfont icon-wenhao"></i></p>
        </section>
      </div>
      <div class="close" @click="toggleShow">
        <i class="iconfont icon-guanbi1"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import CartControl from '@/components/CartControl/CartControl'
export default {
  components: { CartControl },
  props: {
    food: Object
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.sellerFood
  position fixed
  height 100%
  width 100%
  top 0
  left 0
  right 0
  z-index 200
  background $bc-white-s
  &.move-enter-active, &.move-leave-active
    transition all .3s
  &.move-enter, &.move-leave-to
    transform translateY(667px)
  .bgImg
    height 375px
    width 100%
    img
      height 375px
      width 100%
  .content
    padding 15px 15px 0 15px
    .title
      font-size $font-size-large-ss
      line-height 20px
      font-weight 700
      margin-bottom 9px
    .sell-rating
      margin-bottom 9px
      span
        font-size $font-size-normal
        color #666
    .price-cartControl
      display flex
      justify-content space-between
      margin-bottom 9px
      .price
        flex 1
        padding-top 8px
        font-weight 700
        .now
          margin-right 8px
          font-size $font-size-medium
          color rgb(240,20,20)
        .old
          text-decoration line-through
          font-size $font-size-normal
          color rgb(147,153,159)
      .cartControl-Wrapper
        flex 1
        text-align right
    .desc
      font-size $font-size-normal
      color #666
    .produce
      font-size $font-size-normal
      color #666
      margin-top 10px
      line-height 20px
      .icon-wenhao
        font-size $font-size-large-s
        display inline-block
        line-height 20px
        color #666
  .close
    position absolute
    top 10px
    right 10px
    height 20px
    width 20px
    text-align center
    border-radius 10px
    background-color rgba(0,0,0,.2)
    .icon-guanbi1
      font-size 20px
      line-height 20px
      color #fff
</style>
