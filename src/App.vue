<template>
  <div id='app'>
    <router-view/>
    <footer-guide v-show="$route.meta"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodType} from './api'
  import {mapActions} from 'vuex'

  export default {
    components: {FooterGuide},
    mounted() {
      this.getAddress()
    },
    methods:{
      ...mapActions(['getAddress'])
    }
  }
</script>
<style lang="stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>

