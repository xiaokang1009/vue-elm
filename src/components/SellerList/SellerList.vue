<template>
  <nav class="seller-content">
    <ul class="seller-list">
      <li class="seller-li border-1px">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 src="https://cube.elemecdn.com/f/7f/a960ececdfa22215f3db4cd7515d9jpeg.jpeg">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">福建巧味馄饨店(菏池路店)</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                </div>
                <div class="seller-rating">4.5</div>
                <div class="seller-order">月售123单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">蜂鸟专送</span>
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
              <div class="seller-activity-left">
                <div class="seller-activity-item" v-show="index===0||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(240,115,115);">减</span>
                  <span class="seller-activity-desc ellipsis">满19元减3元，满29元减6元，满48元减8元</span>
                </div>
                <div class="seller-activity-item" v-show="index===0||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(241, 136, 79);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品5.9元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===0||1>1">
                  <span class="seller-activity-supports" style="background-color: rgb(102, 102, 102);">保</span>
                  <span class="seller-activity-desc ellipsis">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                </div>
              </div>
              <div @click="start(0,2)" class="seller-activity-right">
                    <span class="seller-activity-btn">3个活动
                    <span :class="[rotate?'go':'on']" class="animete-seller-activity"></span>
                    </span>
              </div>
            </section>
          </div>
        </a>
      </li>
      <li class="seller-li border-1px">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 src="https://cube.elemecdn.com/D/9A/BD71CA2FA4DFEBD42C5F619A49D16png.png">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">当家厨房·大碗湘菜(环城北路店)</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="seller-rating">4.1</div>
                <div class="seller-order">月售183单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">蜂鸟专送</span>
              </section>
            </section>
            <section class="seller-distance">
              <div class="seller-delivery-msg">
                <span>￥15起送</span>
                <span>配送￥1</span>
              </div>
              <div class="seller-delivery-time-distance">
                <span class="distance">278m</span>
                <span class="delivery">30分钟</span>
              </div>
            </section>
            <section class="seller-activity">
              <div class="seller-activity-left">
                <div class="seller-activity-item" v-show="index===1||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(240,115,115);">减</span>
                  <span class="seller-activity-desc ellipsis">满20元减3元，满45元减6元，满70元减8元</span>
                </div>
                <div class="seller-activity-item" v-show="index===1||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(112, 188, 70);">配</span>
                  <span class="seller-activity-desc ellipsis">配送费立减2元</span>
                </div>
                <div class="seller-activity-item" v-show="index===1||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(112, 188, 70);">首</span>
                  <span class="seller-activity-desc ellipsis">首次光顾本店立减2元</span>
                </div>
                <div class="seller-activity-item" v-show="index===1||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(60, 199, 145);">赠</span>
                  <span class="seller-activity-desc ellipsis">满48元赠送310ML易拉罐加多宝一罐1份</span>
                </div>
                <div class="seller-activity-item" v-show="index===1||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(241, 136, 79);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品9.8元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===1||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(60, 199, 145);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品9.8元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===1||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(102, 102, 102);">保</span>
                  <span class="seller-activity-desc ellipsis">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                </div>
              </div>
              <div @click="start(1,2)" class="seller-activity-right">
                    <span class="seller-activity-btn">7个活动
                    <span :class="[rotate?'go':'on']" class="animete-seller-activity"></span>
                    </span>
              </div>
            </section>
          </div>
        </a>
      </li>
      <li class="seller-li border-1px">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 src="https://cube.elemecdn.com/f/7f/a960ececdfa22215f3db4cd7515d9jpeg.jpeg">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">福建巧味馄饨店(菏池路店)</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                </div>
                <div class="seller-rating">4.5</div>
                <div class="seller-order">月售123单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">蜂鸟专送</span>
              </section>
            </section>
            <section class="seller-distance">
              <div class="seller-delivery-msg">
                <span>￥20起送</span>
                <span>配送￥1</span>
              </div>
              <div class="seller-delivery-time-distance">
                <span class="distance">711m</span>
                <span class="delivery">30分钟</span>
              </div>
            </section>
            <section class="seller-activity">
              <div class="seller-activity-left">
                <div class="seller-activity-item" v-show="index===2||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(240,115,115);">减</span>
                  <span class="seller-activity-desc ellipsis">满19元减3元，满29元减6元，满48元减8元</span>
                </div>
                <div class="seller-activity-item" v-show="index===2||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(241, 136, 79);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品5.9元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===2||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(102, 102, 102);">保</span>
                  <span class="seller-activity-desc ellipsis">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                </div>
              </div>
              <div @click="start(2,2)" class="seller-activity-right">
                    <span class="seller-activity-btn">3个活动
                    <span :class="[rotate?'go':'on']" class="animete-seller-activity"></span>
                    </span>
              </div>
            </section>
          </div>
        </a>
      </li>
      <li class="seller-li border-1px">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 src="https://cube.elemecdn.com/f/7f/a960ececdfa22215f3db4cd7515d9jpeg.jpeg">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">福建巧味馄饨店(菏池路店)</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                </div>
                <div class="seller-rating">4.5</div>
                <div class="seller-order">月售123单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">蜂鸟专送</span>
              </section>
            </section>
            <section class="seller-distance">
              <div class="seller-delivery-msg">
                <span>￥20起送</span>
                <span>配送￥1</span>
              </div>
              <div class="seller-delivery-time-distance">
                <span class="distance">711m</span>
                <span class="delivery">30分钟</span>
              </div>
            </section>
            <section class="seller-activity">
              <div class="seller-activity-left">
                <div class="seller-activity-item" v-show="index===3||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(240,115,115);">减</span>
                  <span class="seller-activity-desc ellipsis">满19元减3元，满29元减6元，满48元减8元</span>
                </div>
                <div class="seller-activity-item" v-show="index===3||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(241, 136, 79);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品5.9元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===3||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(102, 102, 102);">保</span>
                  <span class="seller-activity-desc ellipsis">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                </div>
              </div>
              <div @click="start(3,2)" class="seller-activity-right">
                    <span class="seller-activity-btn">3个活动
                    <span :class="[rotate?'go':'on']" class="animete-seller-activity"></span>
                    </span>
              </div>
            </section>
          </div>
        </a>
      </li>
      <li class="seller-li border-1px">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 src="https://cube.elemecdn.com/f/7f/a960ececdfa22215f3db4cd7515d9jpeg.jpeg">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">福建巧味馄饨店(菏池路店)</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                </div>
                <div class="seller-rating">4.5</div>
                <div class="seller-order">月售123单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">蜂鸟专送</span>
              </section>
            </section>
            <section class="seller-distance">
              <div class="seller-delivery-msg">
                <span>￥20起送</span>
                <span>配送￥1</span>
              </div>
              <div class="seller-delivery-time-distance">
                <span class="distance">711m</span>
                <span class="delivery">30分钟</span>
              </div>
            </section>
            <section class="seller-activity">
              <div class="seller-activity-left">
                <div class="seller-activity-item" v-show="index===4||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(240,115,115);">减</span>
                  <span class="seller-activity-desc ellipsis">满19元减3元，满29元减6元，满48元减8元</span>
                </div>
                <div class="seller-activity-item" v-show="index===4||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(241, 136, 79);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品5.9元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===4||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(102, 102, 102);">保</span>
                  <span class="seller-activity-desc ellipsis">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                </div>
              </div>
              <div @click="start(4,2)" class="seller-activity-right">
                    <span class="seller-activity-btn">3个活动
                    <span :class="[rotate?'go':'on']" class="animete-seller-activity"></span>
                    </span>
              </div>
            </section>
          </div>
        </a>
      </li>
      <li class="seller-li border-1px">
        <a>
          <div class="seller-left">
            <img class="seller-img"
                 src="https://cube.elemecdn.com/f/7f/a960ececdfa22215f3db4cd7515d9jpeg.jpeg">
          </div>
          <div class="seller-right">
            <section class="seller-detail-header">
              <h4 class="shop-title">福建巧味馄饨店(菏池路店)</h4>
            </section>
            <section class="seller-rating-order">
              <section class="seller-rating-order-left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                </div>
                <div class="seller-rating">4.5</div>
                <div class="seller-order">月售123单</div>
              </section>
              <section class="seller-rating-order-right">
                <span class="delivery-style delivery-right">蜂鸟专送</span>
              </section>
            </section>
            <section class="seller-distance">
              <div class="seller-delivery-msg">
                <span>￥20起送</span>
                <span>配送￥1</span>
              </div>
              <div class="seller-delivery-time-distance">
                <span class="distance">711m</span>
                <span class="delivery">30分钟</span>
              </div>
            </section>
            <section class="seller-activity">
              <div class="seller-activity-left">
                <div class="seller-activity-item" v-show="index===5||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(240,115,115);">减</span>
                  <span class="seller-activity-desc ellipsis">满19元减3元，满29元减6元，满48元减8元</span>
                </div>
                <div class="seller-activity-item" v-show="index===5||1<2">
                  <span class="seller-activity-supports" style="background-color: rgb(241, 136, 79);">特</span>
                  <span class="seller-activity-desc ellipsis">特价商品5.9元起</span>
                </div>
                <div class="seller-activity-item" v-show="index===5||1<1">
                  <span class="seller-activity-supports" style="background-color: rgb(102, 102, 102);">保</span>
                  <span class="seller-activity-desc ellipsis">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                </div>
              </div>
              <div @click="start(5,2)" class="seller-activity-right">
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
export default {
  data () {
    return {
      rotate: false,
      index: -1,
      i: 1
    }
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
  }
}
</script>

<style lang="stylus" scoped>
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

              .star //2x图 3x图
                float left
                font-size 0

                .star-item
                  display inline-block
                  background-repeat no-repeat

                &.star-48
                  .star-item
                    width 20px
                    height 20px
                    margin-right 22px
                    background-size 20px 20px

                    &:last-child
                      margin-right: 0

                    &.on
                      bg-image('./images/stars/star48_on')

                    &.half
                      bg-image('./images/stars/star48_half')

                    &.off
                      bg-image('./images/stars/star48_off')

                &.star-36
                  .star-item
                    width 15px
                    height 15px
                    margin-right 6px
                    background-size 15px 15px

                    &:last-child
                      margin-right 0

                    &.on
                      bg-image('./images/stars/star36_on')

                    &.half
                      bg-image('./images/stars/star36_half')

                    &.off
                      bg-image('./images/stars/star36_off')

                &.star-24
                  .star-item
                    width 10px
                    height 10px
                    margin-right 3px
                    background-size 10px 10px

                    &:last-child
                      margin-right 0

                    &.on
                      bg-image('./images/stars/star24_on')

                    &.half
                      bg-image('./images/stars/star24_half')

                    &.off
                      bg-image('./images/stars/star24_off')

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
                  height 12px
                  width 12px
                  line-height 12px
                  text-align center
                  border-radius 1px
                  font-size 12px
                  color $bc-white-s
                  vertical-align top

                .seller-activity-desc
                  vertical-align top
                  float left
                  font-size 12px
                  line-height 12px
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
