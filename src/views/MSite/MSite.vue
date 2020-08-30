<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name">
       <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-login" slot="right">
        <i class="iconfont icon-dengluzhuce_huaban icon-user"></i>
      </span>
    </Header>
    <!--导航部分-->
    <nav class="msite-nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="( categorys, index ) in categorysArr" :key="index">
            <a class="go-food" href="javascript:" v-for="(category,index) in categorys" :key="index">
              <div class="food-icon">
                <img :src="baseImageUrl+category.image_url">
              </div>
              <span class="food-desc">{{ category.title }}</span>
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
import { mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Header from '@/components/header/header'
import SellerList from '@/components/SellerList/SellerList'

export default {
  data () {
    return {
      baseImageUrl: 'https://cube.elemecdn.com'
    }
  },
  mounted () {
    //  获取食品分类
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getSellerList')
  },
  computed: {
    ...mapState(['address', 'categorys']),
    categorysArr () {
      const { categorys } = this
      //  准备两个空数组
      //  空的二维数组
      let arr = []
      //  用与接受二维数组中的元素最后push到二维数组中（最大程度为8）
      let minArr = []
      categorys.forEach(c => {
        //  如果当前数组满了，再创建一个新的数组
        if (minArr.length === 8) {
          minArr = []
        }
        //  如果minArr是空的 则把minArr保存到arr数组中 至此形成一个二维数组
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    }
  },
  watch: {
    // 监视界面更新，实例化swiper
    categorys (value) { // 当categorys中有值之后再实例化swiper
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        })
      })
    }
  },
  components: {
    Header,
    SellerList
  }
}
</script>

<style lang="stylus">
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
