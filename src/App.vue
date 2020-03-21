<template>
  <div id="app">
    <router-view/>
    <nav>
      <NavigationBar />
    </nav>
    <ContextMenu />
    <PlayerView />
  </div>
</template>

<script>
import ContextMenu from '@/components/menu/ContextMenu'
import NavigationBar from '@/components/menu/NavigationBar'
import PlayerView from '@/components/PlayerView'

export default {
  components: {
    ContextMenu,
    NavigationBar,
    PlayerView
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

  > .player-view {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
