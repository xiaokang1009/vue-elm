<template>
  <div>
    <div class="sellerCart">
      <section class="content">
        <div class="content-left" @click="toggleShow">
          <section class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount}">
              <i class="iconfont icon-gouwuche" :class="{highlight: totalCount}"></i>
            </div>
            <div class="num" v-show="totalCount">{{totalCount}}</div>
          </section>
          <section class="price-desc">
            <section class="price" ::class="{highlight: totalPrice}">{{totalPrice ? `￥${totalPrice}` : '未选购商品'}}</section>
            <section class="desc">另需配送费{{sellerInfo.deliveryPrice}}元</section>
          </section>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">{{payText}}</div>
        </div>
      </section>
      <transition name="move">
        <section class="cart-list" v-show="showList">
          <section class="list-header">
            <h2 class="title">已选商品</h2>
            <span class="empty" @click.stop="emptyList">清空</span>
          </section>
          <section class="list-content">
            <ul>
              <li class="food ellipsis" v-for="(food,index) in cartFoods" :key="index">
                <span class="name">{{ food.name }}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartControl-wrapper">
                  <CartControl :food="food"/>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="toggleShow" v-show="showList"></div>
    </transition>
  </div>
</template>

<script>
import CartControl from '@/components/CartControl/CartControl'
import { mapState, mapGetters } from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: { CartControl },
  computed: {
    ...mapState(['cartFoods', 'sellerInfo']),
    ...mapGetters(['totalCount', 'totalPrice']),
    payClass () {
      // 返回样式
      return this.totalPrice >= this.sellerInfo.minPrice ? 'enough' : 'not-enough'
    },
    payText () {
      // 返回支付文本 ￥18起送 差多少元起送 结算
      const { totalPrice } = this
      const { minPrice } = this.sellerInfo
      return totalPrice === 0 ? `￥${minPrice}元起送`
        : totalPrice < minPrice ? `还差￥${Math.round((minPrice - totalPrice) * 100) / 100}起送` : '结算'
    },
    showList () {
      // 如果总条数为0不显示
      /* eslint-disable vue/no-side-effects-in-computed-properties */
      if (this.totalCount === 0) {
        this.isShow = false
        return false
      }
      if (this.isShow) { // 显示列表的时候，创建BScroll实例 是列表可以滑动
        this.$nextTick(() => {
          if (!this.scroll) { // 使用单例模式限制BScroll的创建次数，防止影响其他结果
            this.scroll = new BScroll('.list-content', {
              click: true
            })
          } else {
            this.scroll.refresh() // 重新刷新列表，使其第一次可以滑动
          }
        })
      }
      return this.isShow
    }
  },
  methods: {
    toggleShow () {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow
      }
    },
    emptyList () {
      this.$store.dispatch('emptyList')
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.sellerCart
  position fixed
  left 0
  bottom 0
  z-index 350
  width 100%
  height 48px
  .content
    display flex
    background #141d27
    font-size 0
    color rgba(255,255,255,0.4)
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        box-sizing border-box
        border-radius 50%
        background #141d27
        .logo
          width 100%
          height 100%
          border-radius 50%
          text-align center
          background #2b343c
          &.highlight
            background $blue
          .icon-gouwuche
            line-height 44px
            font-size 24px
            color #80858a
            &.highlight
              color #fff
        .num
          position absolute
          top 0
          right 0
          width 16px
          height 16px
          line-height 16px
          text-align center
          border-radius 8px
          font-size 9px
          font-weight 700
          color #ffffff
          background rgb(240, 20, 20)
          box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price-desc
        display inline-block
        .price
          line-height 24px
          box-sizing border-box
          font-size 14px
          font-weight 700
          color #fff
          &.highlight
            color #fff
        .desc
          padding-bottom 10px
          padding-right 20px
          line-height 10px
          font-size 10px
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        height 48px
        line-height 48px
        text-align center
        font-size 12px
        font-weight 700
        color #fff
        &.not-enough
          background #2b333b
        &.enough
          background-image $bc-img
          color #fff
  .cart-list
    position absolute
    left 0
    top 0
    z-index -1
    width 100%
    transform translateY(-100%)
    &.move-enter-active, &.move-leave-active
      transition transform 0.5s ease
    &.move-enter, &.move-leave-to
      transform translateY(0)
    .list-header
      height 40px
      line-height 40px
      padding 0 18px
      background #f3f5f7
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .title
        float left
        font-size $font-size-medium
        color rgb(7, 17, 27)
      .empty
        float right
        font-size $font-size-medium
        color rgb(0, 160, 220)
    .list-content
      padding 0 18px
      max-height 217px
      overflow hidden
      background #fff
      .food
        position relative
        padding 12px 50% 12px 0
        box-sizing border-box
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .name
          line-height 24px
          font-size $font-size-medium
          color rgb(7, 17, 27)
          padding-right 20px
        .price
          position absolute
          right 90px
          bottom 12px
          line-height 24px
          font-size $font-size-medium
          font-weight 700
          color rgb(240, 20, 20)
        .cartControl-wrapper
          position absolute
          right 0
          bottom 6px
.list-mask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 340
  opacity 0.4
  background-color #000
  &.fade-enter-active, &.fade-leave-active
    transition all 0.5s ease
  &.fade-enter, &.fade-leave-to
    opacity 0
</style>
