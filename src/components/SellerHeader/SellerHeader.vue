<template>
  <div class="seller-header">
    <div class="seller-banner"
         :style="{ backgroundImage: `url(${sellerInfo.bgImg})` }">
      <a class="back" @click="$router.replace('/msite')">
        <i class="iconfont icon-jiantouzuo"></i>
      </a>
    </div>
    <section class="seller-content">
      <img class="content-image" :src="sellerInfo.avatar"/>
      <div class="header-content" @click="sellerShow=true">
        <h2 class="content-title">
          <span class="content-name">{{ sellerInfo.name }}</span>
          <i class="content-icon"></i>
        </h2>
        <div class="seller-message">
          <span class="seller-message-detail">评价{{ sellerInfo.score }}</span>
          <span class="seller-message-detail">月售{{ sellerInfo.sellCount }}单</span>
          <span class="seller-message-detail">饿了么专送约{{sellerInfo.deliveryTime}}分钟</span>
        </div>
      </div>

    </section>
    <section class="seller-header-discounts" @click.stop="supportIsShow=true">
      <div class="discounts-left">
        <span class="discounts-left-item" v-for="(discount,index) in sellerInfo.discounts" :key="index">
          {{discount}}
        </span>
      </div>
      <div class="discounts-right">
        {{discoutLength}}个优惠
      </div>
    </section>
    <section class="seller-header-bulletin">
      公告：<span class="bulletin-text">{{ sellerInfo.bulletin }}</span>
    </section>
    <transition name="fade">
      <section class="seller-brief-modal" v-show="sellerShow">
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-name">{{ sellerInfo.name }}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{ sellerInfo.score }}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{ sellerInfo.sellCount }}</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>饿了么专送</h3>
              <p>约{{ sellerInfo.deliveryTime }}分钟</p>
            </li>
            <li>
              <h3>{{ Number(sellerInfo.deliveryPrice).toFixed(1) }}元</h3>
              <p>配送费</p>
            </li>
            <li>
              <h3>{{ sellerInfo.distance }}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">
            {{ sellerInfo.bulletin }}
          </div>
          <div class="mask-footer" @click="sellerShow=false">
            <span class="iconfont icon-guanbi2"></span>
          </div>
        </div>
        <div class="brief-modal-cover" @click="sellerShow=false"></div>
      </section>
    </transition>
    <transition name="move">
      <section class="activity-sheet" v-show="supportIsShow">
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list">
            <li class="activity-item" v-for="(support,index) in sellerInfo.supports" :key="index">
              <span class="content-tag">{{support.name}}</span>
              <span class="activity-content">{{ support.content }}</span>
            </li>
          </ul>
          <div class="activity-sheet-close" @click="supportIsShow=false">
            <span class="iconfont icon-guanbi2"></span>
          </div>
        </div>
        <div class="activity-sheet-cover" @click="supportIsShow=false"></div>
      </section>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      sellerShow: false,
      supportIsShow: false
    }
  },
  computed: {
    ...mapState(['sellerInfo']),
    discoutLength () {
      return this.sellerInfo.discounts && this.sellerInfo.discounts.length
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.seller-header
  height 100%
  position relative
  background $bc-white-s
  color $bc-white-s
  overflow hidden
  .seller-banner
    background-size cover
    background-repeat no-repeat
    background-position 50%
    height 50px
    padding 5px 10px
    position relative
    &::before
      content ""
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      background-image linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5))
    .back
      position: absolute
      top: 10px
      left: 0
      .icon-jiantouzuo
        display: block
        padding: 5px
        font-size: $font-size-large-ss
        color: $bc-white-s
  .seller-content
    padding 30px 20px 5px 20px
    position relative
    margin-bottom 0
    display flex
    background $bc-white-s
    text-align center
    .content-image
      box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, .2);
      position: absolute;
      top: 0;
      left: 50%;
      width: 66px
      height: 66px
      border-radius: 2px
      margin-left -33px
      margin-top -12%
    .header-content
      flex 1
      width 72%
      .content-title
        font-size $font-size-large-ss
        line-height 24px
        font-weight 700
        white-space nowrap
        position relative
        display flex
        align-items center
        justify-content center
        color $font-color-black
        .content-name
          font-weight 700
          text-align left
          overflow hidden
          text-overflow ellipsis
        .content-icon
          width 20px
          position relative
          height 16px
          &::after
            content ""
            border-style solid
            border-width: 6px 0 6px 7px
            border-color transparent transparent transparent rgba(0, 0, 0, .67)
            position absolute
            left 8px
            top 3px
      .seller-message
        white-space nowrap
        height 12px
        margin-top 8px
        font-size $font-size-normal
        text-align center
        color #B3B3B3
        .seller-message-detail:not(:last-child)::after
          content " \B7 "
          opacity .2
  .seller-header-discounts
    display flex
    background #fff
    padding 5px 7px
    font-size 11px
    color #666
    margin 5px 30px
    .discounts-left
      flex 1
      .discounts-left-item
        display inline-block
        margin-left 10px
        border 1px solid rgb(255, 201, 193)
        color rgb(255, 75, 51)
        padding 0 2px
        padding-top 3px
        font-size $font-size-normal
    .discounts-right
      width 50px
      flex-shrink 0
      position relative
      padding-right 10px
      text-align right
      color: #b3b3b3
      &::after
        content ""
        display block
        border-style solid
        border-width 4px 4px 0
        border-color rgba(0, 0, 0, .57) transparent transparent
        position absolute
        top 20%
        right -3px
  .seller-header-bulletin
    background #fff
    padding 5px 15px
    font-size 11px
    color #b3b3b3
    margin 0 25px 5px 25px
  .seller-brief-modal
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    display flex
    justify-content center
    align-items center
    z-index 52
    flex-direction column
    color #333
    &.fade-enter-active,&.fade-leave-active
      transition opacity .5s
    &.fade-enter,&.fade-leave-to
      opacity 0
    .brief-modal-cover
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      background-color rgba(0, 0, 0, .5)
      z-index 1
    .brief-modal-content
      position relative
      width 80%
      padding 25px 20px
      border-radius 5px
      background #fff
      z-index 99
      display flex
      flex-direction column
      .content-title
        font-size 20px
        line-height 24px
        font-weight 700
        white-space nowrap
        position relative
        display flex
        align-items center
        justify-content center
        > span
          font-weight 600
      .brief-modal-msg
        display flex
        margin 20px -10px 0
        > li
          flex 1
          text-align center
          > h3
            font-size 15px
            font-weight 600
            color #333
            margin-bottom 8px
          > p
            font-size 12px
            color #999
      .brief-modal-title
        position relative
        text-align center
        margin 15px auto 15px
        width 85px
        background-image linear-gradient(90deg, #fff, #333 50%, #fff)
        background-size 100% 1px
        background-position 50%
        background-repeat no-repeat
        > span
          font-size 12px
          padding 0 6px
          color #999
          background-color #fff
      .brief-modal-notice
        font-size 13px
        line-height 1.54
        color #333
        overflow-y auto

      .mask-footer
        position absolute
        bottom -60px
        left 50%
        padding 3px
        border 1px solid rgba(255, 255, 255, .7)
        border-radius 50%
        transform translateX(-50%)
        span
          font-size 16px
          color rgba(255, 255, 255, .7)
  .activity-sheet
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 400
    opacity 1
    &.move-enter-active,&.move-leave-active
      transition all .5s
    &.move-enter,&.move-leave-to
      opacity 0
    .activity-sheet-content
      position absolute
      background-color #f5f5f5
      box-shadow 0 -1px 5px 0 rgba(0, 0, 0, .4)
      bottom 0
      left 0
      right 0
      z-index 100
      padding 20px 30px
      box-sizing border-box
      transition transform .2s
      will-change transform
      color #333
      .activity-sheet-title
        text-align center
        font-size 20px
        font-weight 600
        margin-bottom 20px
      .list
        font-size 16px
        height 160px
        overflow-y auto
        .activity-item
          margin-bottom 12px
          display flex
          font-size 13px
          align-items center
          .content-tag
            display inline-block
            margin-left 10px
            margin-right 10px
            border 1px solid rgb(255, 201, 193)
            color rgb(255, 75, 51)
            padding 2px
            font-size $font-size-normal
      .activity-sheet-close
        position absolute
        right 6px
        top 10px
        width 25px
        height 25px
        > span
          font-size 20px

    .activity-sheet-cover
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      opacity 0.4
      background-color rgba(0, 0, 0,.5)
</style>
