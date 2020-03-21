<template>
  <div class="volume-control">
    <BaseSlider :value="72" />
  </div>
</template>

<script>
import BaseSlider from '@/components/BaseSlider'

export default {
  components: {
    BaseSlider
  }
}
</script>

<style lang="scss" scoped>
.volume-control {
  padding: 18px calc(10px + 38px);
}
</style>
