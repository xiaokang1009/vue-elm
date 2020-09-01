<template>
  <div class="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import FooterGuide from '@/components/FooterGuide/FooterGuide'

export default {
  mounted () {
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5

</style>
