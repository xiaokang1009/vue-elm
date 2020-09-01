<template>
  <nav class="seller-content">
    <ul class="seller-list">
      <li class="seller-li border-1px" @click="$router.push('/seller')" v-for="(seller,sellerIndex) in sellerList" :key="sellerIndex">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 :src="seller.avatar">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">{{ seller.name }}</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <Star :score="seller.rating" :size="24"/>
                <div class="seller-rating">{{ seller.rating }}</div>
                <div class="seller-order">月售{{seller.recent_order_num}}单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">{{seller.delivery_mode.text}}</span>
              </section>
            </section>
            <section class="seller-distance">
              <div class="seller-delivery-msg">
                <span>￥18起送</span>
                <span>配送￥1</span>
              </div>
              <div class="seller-delivery-time-distance">
                <span class="distance">711m</span>
                <span class="delivery">30分钟</span>
              </div>
            </section>
            <section class="seller-activity">
              <div class="seller-activity-left" v-for="(support,a) in seller.supports" :key="a">
                <div class="seller-activity-item" v-show="index===sellerIndex||a<2">
                  <span class="seller-activity-supports" :style="'background-color:'+support.icon_color+';' ">{{ support.icon_name }}</span>
                  <span class="seller-activity-desc ellipsis">{{support.description}}</span>
                </div>
              </div>
              <div @click.stop="start(sellerIndex,2)" class="seller-activity-right">
                    <span class="seller-activity-btn">3个活动
                    <span :class="[rotate?'go':'on']" class="animete-seller-activity"></span>
                    </span>
              </div>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Star from '@/components/Star/Star'
export default {
  data () {
    return {
      rotate: false,
      index: -1,
      i: 1
    }
  },
  computed: {
    ...mapState(['sellerList'])
  },
  methods: {
    start (index, flag) {
      this.rotate = !this.rotate
      if (this.i % flag !== 0) {
        this.index = index
        this.i++
      } else {
        this.index = -1
        this.i++
      }
    }
  },
  components: {
    Star
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.seller-content // 内容
  margin-bottom 50px

  .seller-list
    .seller-li
      bottom-border-1px($border-white-c)
      width 100%

      > a
        clearfix()
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%

        .seller-left // 商家图片
          float left
          box-sizing border-box
          width 64px
          height 64px
          padding-right 10px

          .seller-img
            display block
            width 64px
            height 64px

        .seller-right //商家基本的描述
          float right
          width 77%

          .seller-detail-header //商家名称
            clearfix()
            width 100%

            .shop-title
              float left
              width 100%
              color $font-color-black
              font-size $font-size-large
              line-height 16px
              font-weight 700

          .seller-rating-order //商家评分
            clearfix()
            width 100%
            margin-top 10px

            .seller-rating-order-left
              padding 1.5px 0
              float left
              color $yellow-s
              .seller-rating
                float left
                font-size $font-size-normal
                line-height 13px
                color $yellow
                margin 0 4px

              .seller-order
                float left
                font-size $font-size-normal
                color $font-color-gray-s
                line-height 13px
                transform scale(.9)

            .seller-rating-order-right
              float right
              font-size 0

              .delivery-style
                display inline-block
                line-height 10px
                font-size $font-size-small
                padding 1px
                border-radius 2px
                transform scale(.7)

              .delivery-right
                color $bc-white-s
                margin-right 2px
                background-color $blue
                border 1px solid $blue

          .seller-distance //配送时间
            margin-top 10px
            margin-bottom 10px
            display flex
            clearfix()
            width 100%
            font-size $font-size-small

            .seller-delivery-msg
              flex 70%
              color $font-color-gray-s
              transform-origin 0 0
              transform scale(.8)
              justify-content space-between

              span:first-child
                &::after
                  content '|'
                  margin 0px 3px
                  display inline-block
                  height 12px
                  line-height 12px
                  font-size $font-size-small
                  color $font-color-gray-s
                  transform scale(.8)

            .seller-delivery-time-distance
              flex 30%
              transform scale(.8)
              font-size $font-size-small
              color $font-color-gray-s

              span:first-child
                &::after
                  content '|'
                  margin 0px 3px
                  display inline-block
                  height 12px
                  line-height 12px
                  font-size $font-size-small
                  color $font-color-gray-s
                  transform scale(.8)

          .seller-activity //商家的活动
            float left
            position relative
            width 100%
            border-top 1px solid $bc-white-ss
            clearfix()

            .seller-activity-left
              .seller-activity-item
                transform scale(0.9)
                transform-origin 0 0
                margin-top 5px
                clearfix()

                .seller-activity-supports
                  float left
                  height 14px
                  width 14px
                  line-height 14px
                  text-align center
                  border-radius 1px
                  font-size 13px
                  color $bc-white-s
                  vertical-align top

                .seller-activity-desc
                  vertical-align top
                  float left
                  font-size 13px
                  line-height 14px
                  margin-left 5px
                  width 80%
                  text-align left
                  color $font-color-black

            .seller-activity-right
              position absolute
              right 10px
              top 5px
              font-size 10px
              color $font-color-gray-s
              transform scale(0.8)

              .animete-seller-activity
                position absolute
                top 0
                right -10px
                border-left 4px solid #fff
                border-right 4px solid #fff
                border-top 5px solid $font-color-gray-s

              .go
                transform: rotate(180deg);
                transition: all .5s;

              .on
                transition: all .5s;

</style>
