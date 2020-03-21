<template>
  <div id="app">
    <router-view/>
    <nav>
      <MiniPlayer />
      <NavigationBar />
    </nav>
    <ContextMenu />
    <PlayerView v-show="isPlayerModalActive" />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import ContextMenu from '@/components/menu/ContextMenu'
import MiniPlayer from '@/components/MiniPlayer'
import NavigationBar from '@/components/menu/NavigationBar'
import PlayerView from '@/components/PlayerView'

export default {
  components: {
    ContextMenu,
    MiniPlayer,
    NavigationBar,
    PlayerView
  },

  data () {
    return {
      playerModalActive: false
    }
  },

  computed: {
    isPlayerModalActive: get('ui/isPlayerModalActive')
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
