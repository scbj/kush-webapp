<template>
  <main>
    <header>
      <input class="search-bar" type="text">
      <div class="avatar" @click="logout"></div>
    </header>
    <KeepAlive>
      <RouterView />
    </KeepAlive>
    <nav>
      <MiniPlayer />
      <NavigationBar />
    </nav>
    <PlayerView v-show="isPlayerModalActive" />
  </main>
</template>

<script>
import { call, get } from 'vuex-pathify'

import MiniPlayer from '@/components/MiniPlayer'
import NavigationBar from '@/components/menu/NavigationBar'
import PlayerView from '@/components/PlayerView'

export default {
  components: {
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
  },

  methods: {
    logout: call('auth/logout')
  }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;

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

header {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 16px;
  margin: 16px;
}

.search-bar {
  top: 16px;
  left: 16px;
  height: 38px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 15px #03030D14;
  border-radius: 6px;
  opacity: 1;

  border: none;
}

.avatar {
  border-radius: 50%;
  top: 16px;
  left: 321px;
  width: 38px;
  height: 38px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
