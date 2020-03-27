<template>
  <div id="app">
    <router-view/>
    <ContextMenu />
  </div>
</template>

<script>

import ContextMenu from '@/components/menu/ContextMenu'

export default {
  components: {
    ContextMenu
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss';
@import './assets/styles/fonts.scss';

#app {
  font-family: 'TT Commons', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
