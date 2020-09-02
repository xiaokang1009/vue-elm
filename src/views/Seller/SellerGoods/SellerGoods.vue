<template>
  <div class="goods">
    <!-- 左边菜单列表 -->
    <section class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" @click="clickMenuItem(index)" :class="{current: index === currentIndex}" v-for="(good,index) in sellerGoods" :key="index">
          <span class="text bottom-border-1px">
            <img class="icon" :src="good.icon" v-show="good.icon">
            {{ good.name }}
          </span>
        </li>
      </ul>
    </section>
    <!-- 右边食品列表 -->
    <section ref="foodsWrapper" class="foods-wrapper">
      <ul ref="foodsUl">
        <li class="food-list-hook" v-for="(good,index) in sellerGoods" :key="index">
          <h1 class="title">{{good.name}}</h1>
          <ul>
            <li class="food-item bottom-bodrder-1px" v-for="(food,index) in good.foods" :key="index">
              <div class="icon">
                <img width="95" height="95" :src="food.img"/>
              </div>
              <div class="content">
                <p class="name-title">
                  <span class="name ellipsis">{{food.name}}</span>
                </p>
                <p class="descInfo ellipsis">{{ food.info }}</p>
                <p class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </p>
                <section class="price-cartControl">
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cart-control :food="food"/>
                  </div>
                </section>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import CartControl from '@/components/CartControl/CartControl'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      scrollY: 0, // 右侧滑动的y轴坐标
      tops: [] // 所有右侧分类li的top构成的数组
    }
  },
  mounted () {
    this.$store.dispatch('getSellerGoods', () => { // 数据更新后执行
      this.$nextTick(() => {
        // 初始化ScrollY的值
        this._initScroll()
        // 初始化tops的值
        this._initTops()
      })
    })
  },
  computed: {
    ...mapState(['sellerGoods']),
    //  计算得到当前分类的坐标
    currentIndex () {
      // 得到条件数据
      const { scrollY, tops } = this
      // 根据条件计算产生的结果  scrollY>=当前top,小于下一个top的值
      const index = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])
      // 把结果返回
      return index
    }
  },
  methods: {
    // 初始化滚动条
    _initScroll () {
      /* eslint-disable no-new */
      new BScroll('.menu-wrapper', {
        click: true
      })
      // 列表显示后创建
      this.foodsScroll = new BScroll('.foods-wrapper', {
        probeType: 2, // 惯性滑动不触发
        click: true
      })
      // 给右侧列表绑定scroll监听
      this.foodsScroll.on('scroll', ({ x, y }) => {
        // 更新scrollY的值
        this.scrollY = Math.abs(y)
      })
      // 给右侧列表绑定scrol结束的监听
      this.foodsScroll.on('scrollEnd', ({ x, y }) => {
        this.scrollY = Math.abs(y)
      })
    },
    _initTops () {
      // 初始化tops
      let tops = []
      // 收集top
      let top = 0
      tops.push(top)
      // 找到所有li分类，并转化为真数组
      const lis = [...this.$refs.foodsUl.children]
      lis.forEach(li => {
        top += li.clientHeight
        tops.push(top)
      })
      // 更新tops
      this.tops = tops
    },
    clickMenuItem (index) {
      this.scrollY = this.tops[index]
      this.foodsScroll.scrollTo(0, -this.scrollY, 500)
    }
  },
  components: {
    CartControl
  }
}
</script>

<style lang="stylus">
@import "../../../common/stylus/mixin.styl"
@import "../../../common/stylus/variable.styl"
.goods
  display flex
  margin-top 1px
  width 100%
  position: absolute
  top: 295px
  bottom: 46px
  background $bc-white-s
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      padding 17.5px 7.5px
      line-height 14px
      &.current
        position relative
        z-index 12
        margin-top -1px
        background $bc-white-s
        color $blue
        font-weight 700
      .text
        width: 56px
        vertical-align: middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: $font-size-small
        .icon
          display: inline-block
          vertical-align: middle
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat

  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147,153,159)
      background #f3f5f7
    .food-item
      display flex
      padding 10px 0
      bottom-border-1px(rgba(7,17,27,0.1))
      &:last-child
        border 0
        margin-bottom 0
      .icon
        flex 0 0 95px
        margin-right 10px
      .content
        flex 1
        padding-right 15px
        position relative
        .name-title
          display flex
          padding-right 15px
          .name
            margin  2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            width 150px
            font-weight 700
            color rgb(7,17,27)

        .descInfo, .extra
          line-height 10px
          font-size 10px
          color rgb(147,153,159)
        .descInfo
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price-cartControl
          margin-top 10px
          display flex
          position absolute
          left 0
          bottom 0
          justify-content space-between
          width 100%
          .price
            flex 1
            font-weight 700
            line-height 24px
            padding-top 6px
            .now
              margin-right 8px
              font-size $font-size-medium
              color rgb(240,20,20)
            .old
              text-decoration line-through
              font-size $font-size-normal
              color rgb(147,153,159)
          .cartcontrol-wrapper
            position absolute
            right 4px
            top 0
            line-height 24px

</style>
