<template>
  <!-- 控制星星的显示的组件 -->
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc, index) in scoreItem" :class="sc" :key="index"></span>
  </div>
</template>

<script>
const CLASS_ON = 'on' //  full star
const CLASS_HALF = 'half' //  half star
const CLASS_OFF = 'off' //  off star
export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    scoreItem () {
      const { score } = this
      const scoreArr = []
      const scoreInteger = Math.floor(score)
      // 将满星传入到数组中 满星数量等于小数前面的整数
      for (let i = 0; i < scoreInteger; i++) {
        scoreArr.push(CLASS_ON)
      }
      // 将半星传入到数组中 当小数后面的数大于等于5为半星
      score * 10 - scoreInteger * 10 >= 5 && scoreArr.push(CLASS_HALF)
      //  如果数组的长度小于5，就把offpush到scoreArr
      scoreArr.length < 5 && scoreArr.push(CLASS_OFF)
      return scoreArr
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
@import "../../common/stylus/variable.styl"
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
        bg-image('./images/star48_on')

      &.half
        bg-image('./images/star48_half')

      &.off
        bg-image('./images/star48_off')

  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px

      &:last-child
        margin-right 0

      &.on
        bg-image('./images/star36_on')

      &.half
        bg-image('./images/star36_half')

      &.off
        bg-image('./images/star36_off')

  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px

      &:last-child
        margin-right 0

      &.on
        bg-image('./images/star24_on')

      &.half
        bg-image('./images/star24_half')

      &.off
        bg-image('./images/star24_off')

</style>
