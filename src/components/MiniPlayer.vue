<template>
  <div class="mini-player" @click="openPlayer">
    <div class="infos">
      <span class="channel">{{ activeTrack.channel }}</span>
      •
      <span class="title">{{ activeTrack.title }}</span>
    </div>
  </div>
</template>

<script>
import { get, call } from 'vuex-pathify'

export default {
  computed: {
    activeTrack: get('playback/activeTrack'),
    playing: get('playback/playing')
  },

  methods: {
    openPlayer: call('ui/openPlayer')
  }
}
</script>

<style lang="scss" scoped>
.mini-player {
  background: white;
  width: 100%;
  padding: 15px;
}

.infos {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.channel,
.title {
  font-family: 'TT Commons';
  font-weight: 400;
  font-size: 16px;
  color: #2e2e2e;
}

.title {
  font-weight: 600;
}
</style>
