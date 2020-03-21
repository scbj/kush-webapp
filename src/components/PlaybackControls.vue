<template>
  <div class="playback-controls">
    <div class="button-loop" @click="$emit('activateLoop')"></div>
    <div class="button-previous" @click="$emit('previousTrack')"></div>
    <div class="button-play-pause" @click="$emit('changeStatus')"></div>
    <div class="button-next" @click="$emit('nextTrack')"></div>
    <div class="button-shuffle" @click="$emit('activateShuffle')"></div>
  </div>
</template>

<style lang="scss" scoped>
.playback-controls {
  display: grid;
  grid-template-columns: 1fr repeat(3, auto) 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 20px 24px;
}

.button-play-pause {
  background: white;
  border: 1px solid #707070;
  border-radius: 50%;
  width: 49px;
  height: 49px;
  margin: 0 17px;
}

.button-previous,
.button-next {
  background: #ebebeb;
  border-radius: 50%;
  width: 26px;
  height: 26px;
}

.button-loop,
.button-shuffle {
  flex-grow: 1;
  background: white;
  border: 2px solid #ebebeb;
  border-radius: 3px;
  width: 17px;
  height: 17px;
}

.button-loop { justify-self: flex-start; }
.button-shuffle { justify-self: flex-end; }
</style>
