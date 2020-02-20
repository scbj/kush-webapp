<template>
  <div id="app">
    <router-view/>
    <nav>
      <NavigationBar />
    </nav>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  components: {
    NavigationBar
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

  > nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
