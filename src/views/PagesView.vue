<template>
  <div class="pages-view">
    <header-bar @showTalion="open"></header-bar>
    <router-view></router-view>
    <div class="footer"></div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'

export default {
  name: 'pages-view',
  components: { HeaderBar },
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    open: function () {
      this.talion = 'open'
    },
    close: function () {
      this.talion = ''
    }
  }
}
</script>

<style scoped>
.footer {
  margin: 20px 0;
}
</style>
