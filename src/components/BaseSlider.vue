<template>
  <div class="base-slider">
    <i class="background-line"></i>
    <i class="foreground-line" :style="{ '--percent': this.completePercent }"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },

  computed: {
    completePercent () {
      return Math.min(this.value, this.max) * 100 / this.max
    }
  }
}
</script>

<style lang="scss" scoped>
.base-slider {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
}

.background-line,
.foreground-line {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: block;
  width: 100%;
  height: 2px;
}

.background-line {
  background: #f1f1f1;
}

.foreground-line {
  background: #585858;
  transform-origin: 0% 50%;
  transform: scaleX(calc(var(--percent) / 100));
}
</style>
