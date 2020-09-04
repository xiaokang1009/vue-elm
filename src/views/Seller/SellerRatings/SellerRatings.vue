<template>
  <div class="sellerRatings">
    <section class="seller-ratings">
     <div class="seller-rating-left">
       <div class="seller-Score">
         <p class="score">{{sellerInfo.score}}</p>
       </div>
       <div class="seller-Score seller-rating">
         <span>商家评分</span>
         <Star :size="24" :score='sellerInfo.score'/>
       </div>
     </div>
      <div class="seller-rating-right">
        <div class="left">
          <div class="left-class"><span>味道</span><p>{{ sellerInfo.foodScore }}</p></div>
          <div class="left-class"><span>包装</span><p>{{ sellerInfo.packgeScore }}</p></div>
        </div>
        <div class="right">
          <span>配送</span>
          <p>{{sellerInfo.serviceScore}}</p>
        </div>
      </div>
    </section>
    <div class="split"></div>
    <section class="rating-select">
      <div class="rating-type">
        <span class="block positive " @click="setSelectType(2)" :class="{active: selectType === 2}">
          全部<span class="count">{{ sellerRatings.length }}</span>
        </span>
        <span class="block positive" @click="setSelectType(0)" :class="{active: selectType === 0}">
          满意<span class="count" >{{positiveSize}}</span>
        </span>
        <span class="block negative" @click="setSelectType(1)" :class="{active: selectType === 1}">
          不满意<span class="count">{{sellerRatings.length-positiveSize}}</span>
        </span>
      </div>
      <div class="switch" :class="{on: onlyShowText}" @click="toggleOnlyShowText">
        <span class="iconfont icon-duigouxiao"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </section>
    <section class="rating-wrapper">
      <ul>
        <li class="rating-item" v-for="(rating,index) in filterRatings" :key="index">
          <div class="avatar">
            <img width="28" height="28" :src="rating.avatar">
          </div>
          <div class="content">
            <h2 class="name">{{rating.username}}</h2>
            <div class="star-wrapper">
              <Star :size="24" :score="rating.score"/>
            </div>
            <p class="text">{{rating.text}}</p>
            <div class="recommend">
              <span class="iconfont" :class="rating.reteType===0? 'icon-tuijian': 'icon-tucao-tianchong'"></span>
              <span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
            </div>
            <div class="time">{{rating.rateTime}}</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Star from '@/components/Star/Star'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      onlyShowText: false, // 为true默认不选中 为false勾选仅有内容的评价
      selectType: 2 // 1表示不满意，0表示满意，2表示全部
    }
  },
  mounted () {
    this.$store.dispatch('getSellerRatings')
  },
  computed: {
    ...mapState(['sellerInfo', 'sellerRatings']),
    ...mapGetters(['positiveSize']),
    filterRatings () {
      // 计算条件
      const { sellerRatings, onlyShowText, selectType } = this
      // 产生一个新的过滤数组
      return sellerRatings.filter(rating => {
        const { reteType, text } = rating
        return (selectType === 2 || selectType === reteType) && (!onlyShowText || text.length > 0)
      })
    }
  },
  methods: {
    setSelectType (selectType) {
      this.selectType = selectType
    },
    toggleOnlyShowText () {
      this.onlyShowText = !this.onlyShowText
    }
  },
  components: { Star }
}
</script>

<style lang="stylus">
@import "../../../common/stylus/mixin.styl"
@import "../../../common/stylus/variable.styl"
.sellerRatings
  background-color #f5f5f5
  overflow-y auto
  .seller-ratings
    display flex
    background-color #fff
    padding 20px 0 30px 24px
    margin-bottom 8px
    .seller-rating-left
      display flex
      .seller-Score
        display flex
        flex-direction column
        justify-content center
        align-items center
        .score
          color #ff6000
      .seller-rating
        transform scale(0.7)
        align-items flex-start
        span
          font-size 14px
          margin-bottom 5px
    .seller-rating-right
      flex 1
      display flex
      .left
        flex 1
        display flex
        flex-direction row
        justify-content space-between
        padding 0 27px
        .left-class
          display flex
          flex 1
          flex-direction column
          align-items center
          justify-content space-between
          transform scale(0.8)
          span
            font-size 14px
            margin-bottom 5px
          p
            font-size 24px
      .right
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        transform scale(0.8)
        span
          font-size 14px
          margin-bottom 5px
        p
          font-size 24px
  .split
    width: 100%
    height: 16px
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    background: #f3f5f7
  .rating-select
    .rating-type
      padding 18px 0
      margin 0 18px
      font-size 0
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        line-height 16px
        border-radius 1px
        font-size 12px
        color rgb(77, 85, 93)
        background rgba(77, 85, 93, 0.2)
        &.active
          background-image $bc-img
          color #fff
        .count
          margin-left 2px
          font-size 8px
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      color rgb(147, 153, 159)
      font-size 0
      &.on
        .icon-duigouxiao
          color $blue
      .icon-duigouxiao
        display inline-block
        vertical-align top
        margin-right 4px
        font-size 24px
      .text
        display inline-block
        vertical-align top
        font-size 12px
  .rating-wrapper
    padding 0 18px
    .rating-item
      display flex
      padding 18px 0
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .avatar
        flex 0 0 28px
        width 28px
        margin-right 12px
        img
          border-radius 50%
      .content
        position relative
        flex 1
        .name
          margin-bottom 4px
          line-height 12px
          font-size 10px
          color rgb(7, 17, 27)
        .star-wrapper
          margin-bottom 10px
          padding-bottom 10px
          font-size 0
        .text
          margin-bottom 8px
          line-height 18px
          color rgb(7, 17, 27)
          font-size 12px
        .recommend
          line-height 16px
          font-size 0
          .icon-tuijian, .icon-tucao-tianchong, .item
            display inline-block
            margin 0 8px 4px 0
            font-size 9px
          .icon-tuijian
            color $yellow
          .icon-tucao-tianchong
            color rgb(147, 153, 159)

          .item
            padding 0 6px
            border 1px solid rgba(7, 17, 27, 0.1)
            border-radius 1px
            color rgb(147, 153, 159)
            background #fff
        .time
          position absolute
          top 0
          right 0
          line-height 12px
          font-size 10px
          color rgb(147, 153, 159)
</style>
