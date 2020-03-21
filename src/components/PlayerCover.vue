<template>
  <div class="player-cover">
    <img :src="src" alt="Cover">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.player-cover {
  background: #eee;
  border-radius: 12px;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
