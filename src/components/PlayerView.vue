<template>
  <div class="player-view">
    <PlayerCover :src="activeTrack.thumbnail"/>
    <PlayerTimeline
      :duration="activeTrack.duration"
      :now="28"
      @changed="new Error('Not implemented')"
    />
    <div class="track-infos">
      <TrackTitle>{{ activeTrack.title }}</TrackTitle>
      <TrackChannel>{{ activeTrack.channel }}</TrackChannel>
    </div>

    <PlaybackControls
      :playing="playing"
      @changeStatus="toggleStatus"
      @nextTrack="next"
      @previousTrack="previous"
      @activateShuffle="new Error('Not implemented')"
      @activateLoop="new Error('Not implemented')"
    />

    <VolumeControl @changed="new Error('Not implemented')" />
  </div>
</template>

<script>
import { call, get } from 'vuex-pathify'

import PlaybackControls from '@/components/PlaybackControls'
import PlayerCover from '@/components/PlayerCover'
import PlayerTimeline from '@/components/PlayerTimeline'
import TrackTitle from '@/components/TrackTitle'
import TrackChannel from '@/components/TrackChannel'
import VolumeControl from '@/components/VolumeControl'

export default {
  components: {
    PlaybackControls,
    PlayerCover,
    PlayerTimeline,
    TrackTitle,
    TrackChannel,
    VolumeControl
  },

  computed: {
    activeTrack: get('playback/activeTrack'),
    playing: get('playback/playing')
  },

  methods: {
    next: call('playback/next'),
    previous: call('playback/previous'),
    toggleStatus: call('playback/toggleStatus')
  }
}
</script>

<style lang="scss" scoped>
.player-view {
  background: white;
  padding: 16px;
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr repeat(2, auto);
  grid-template-columns: 1fr;
}

.track-infos {
  align-self: center;
  margin: 0 2em;

  .track-title {
    margin-bottom: 14px;
  }
}
</style>
