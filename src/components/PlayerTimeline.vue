<template>
  <div class="player-timeline">
    <span class="time">{{ now | time }}</span>
    <BaseSlider :value="now" :max="duration" />
    <span class="time">{{ duration | time }}</span>
  </div>
</template>

<script>
import BaseSlider from '@/components/BaseSlider'

export default {
  props: {
    duration: {
      type: Number,
      required: true
    },
    now: {
      type: Number,
      required: true
    }
  },

  components: {
    BaseSlider
  },

  filters: {
    time (value) {
      var num = parseInt(value, 10) // don't forget the second param
      var hours = Math.floor(num / 3600)
      var minutes = Math.floor((num - (hours * 3600)) / 60)
      var seconds = num - (hours * 3600) - (minutes * 60)

      if (seconds < 10) { seconds = '0' + seconds }
      if (minutes < 10 && hours > 0) { minutes = '0' + minutes }
      if (hours > 0) {
        return `${hours}:${minutes}:${seconds}`
      }
      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style lang="scss" scoped>
.player-timeline {
  $span-time-width: minmax(38px, auto);
  display: grid;
  grid-template-columns: $span-time-width 1fr $span-time-width;
  grid-template-rows: 1fr;
  padding: 18px 10px;
}

.time {
  font-family: 'TT Commons';
  font-weight: 400;
  font-size: 14px;
  transform: translateY(.1em);

  &:first-of-type { justify-self: flex-start; }
  &:last-of-type { justify-self: flex-end; }
}
</style>
