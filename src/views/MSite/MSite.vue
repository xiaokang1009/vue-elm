<template>
  <section class="msite">
    <!--首页头部-->
    <Header title="湖南省衡阳市石鼓区青山街道向群路18号">
       <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-login" slot="right">
        <i class="iconfont icon-yonghu"></i>
      </span>
    </Header>
    <!--导航部分-->
    <nav class="msite-nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/1.jpg">
              </div>
              <span class="food-desc">地方小吃</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/2.jpg">
              </div>
              <span class="food-desc">美食</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/3.jpg">
              </div>
              <span class="food-desc">药店</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/4.jpg">
              </div>
              <span class="food-desc">准时达</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/5.jpg">
              </div>
              <span class="food-desc">海鲜特惠</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/6.jpg">
              </div>
              <span class="food-desc">素食简餐</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/7.jpg">
              </div>
              <span class="food-desc">甜品饮品</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/8.jpg">
              </div>
              <span class="food-desc">米粉面馆</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/9.jpg">
              </div>
              <span class="food-desc">大牌惠吃</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/10.jpg">
              </div>
              <span class="food-desc">特色湘菜</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/11.jpg">
              </div>
              <span class="food-desc">夜间小吃</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/12.jpg">
              </div>
              <span class="food-desc">新店特惠</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/13.jpg">
              </div>
              <span class="food-desc">特色西餐</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/14.jpg">
              </div>
              <span class="food-desc">水果蔬菜</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/15.jpg">
              </div>
              <span class="food-desc">汉堡披萨</span>
            </a>
            <a class="go-food" href="javascript:">
              <div class="food-icon">
                <img src="./images/nav/16.jpg">
              </div>
              <span class="food-desc">炸鸡炸串</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附件商家-->
    <div class="msite-seller-list">
      <div class="seller-header">
        <i class="iconfont icon-liebiao"></i>
        <span class="seller-header-title">附近商家</span>
      </div>
      <seller-list/>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Header from '@/components/header/header'
import SellerList from '@/components/SellerList/SellerList'

export default {
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  },
  components: {
    Header,
    SellerList
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
.msite //商家首页
  width 100%

  .msite-nav //商家首页轮播图
    margin-top 45px
    background $bc-white-s
    height 200px
    width 100%
    padding 10px 0

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          .go-food
            width 25%

            .food-icon
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            .food-desc
              display block
              width 100%
              text-align center
              font-size $font-size-medium-s
              color $font-color-gray-s

      .swiper-pagination
        > span.swiper-pagination-bullet-active
          background $blue

  .msite-seller-list //附近商家
    top-border-1px($bc-white-sss)
    background $bc-white-s

    .seller-header //附近商家列表
      padding 10px 10px 0

      .icon-liebiao
        margin-right 5px
        color $font-color-gray
        font-size 14px

      .seller-header-title
        color $font-color-gray
        font-size $font-size-medium
        line-height 20px
</style>
