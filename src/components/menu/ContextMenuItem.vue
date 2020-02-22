<template>
  <div class="context-menu-item" @click="onItemClick">
    <span>{{ label }}</span>
  </div>
</template>

<script>
import { EventBus } from '@/reactivity/event-bus'

export default {
  props: {
    action: {
      type: Function,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },

  methods: {
    onItemClick (handler) {
      this.action()
      EventBus.$emit('contextMenu:close')
    }
  }
}
</script>

<style lang="scss" scoped>
.context-menu-item {
  padding: 9px 16px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  color: #2E2E2E;
}
</style>
