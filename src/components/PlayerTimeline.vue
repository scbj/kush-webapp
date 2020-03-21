<template>
  <div class="player-timeline">
    I'm a {{ now }} timeline {{ duration }}
  </div>
</template>

<script>
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
  }
}
</script>
