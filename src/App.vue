<template>
  <div id='app'>
    <router-view/>
    <footer-guide v-show="$route.meta"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodType} from './api'

  export default {
    components: {FooterGuide},
    mounted() {
      this.$store.dispatch("getShops")
    }
  }
</script>
<style lang="stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>

