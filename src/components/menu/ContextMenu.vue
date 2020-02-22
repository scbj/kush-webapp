<template>
  <div class="context-menu" v-show="isOpened" @click.self="close">
    <div class="content" ref="content" :style="{ '--offset-y': offsetY + 'px' }">
      <ContextMenuList :items="items" />
    </div>
  </div>
</template>

<script>
import ContextMenuList from '@/components/menu/ContextMenuList.vue'

import { EventBus } from '@/reactivity/event-bus'
import { getPointerPosition, getRectPropertiesOf } from '@/utils/measure'

export default {
  components: {
    ContextMenuList
  },
  data () {
    return {
      isOpened: false,
      items: [],
      offsetY: 0
    }
  },

  mounted () {
    // Subscribe to Event Bus events
    EventBus.$on('contextMenu:open', this.open)
    EventBus.$on('contextMenu:close', this.close)
  },

  beforeDestroy () {
    // Unsubscribe from events to which we have subscribed
    EventBus.$off('contextMenu:open', this.open)
    EventBus.$off('contextMenu:close', this.close)
  },

  methods: {
    open ({ event, items }) {
      // Store active context menu items and show the modal
      this.items = items
      this.isOpened = true

      // Wait for the items to be rendered before compute the content offset Y
      this.$nextTick(() => {
        this.computeOffsetY(event)
      })
    },

    /**
     * Calculate and apply offset y to the content element.
     * @param {Event} event
     */
    computeOffsetY (event) {
      const { y } = getPointerPosition(event)
      const { height } = getRectPropertiesOf({ element: this.$refs.content })
      const hasSpaceAvailable = screen.height > y + height

      this.offsetY = hasSpaceAvailable
        ? y
        : y - height
    },

    close () {
      // Reset items array and hide the modal
      this.items = []
      this.isOpened = false
    }
  }
}
</script>

<style lang="scss" scoped>
.context-menu {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.content {
  position: absolute;
  top: var(--offset-y);
  right: 0;
  min-width: 190px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000029;
  border-radius: 4px;
}
</style>
