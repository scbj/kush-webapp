<template>
  <div class="context-menu" v-show="isOpened" @click.self="close">
    <div class="content" ref="content" :style="{ '--offset-y': offsetY + 'px' }">
      <ContextMenuList :items="items" />
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/reactivity/event-bus'
import ContextMenuList from '@/components/menu/ContextMenuList.vue'

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
    EventBus.$on('contextMenu:open', this.open)
    EventBus.$on('contextMenu:close', this.close)
  },

  beforeDestroy () {
    EventBus.$off('contextMenu:open', this.open)
    EventBus.$off('contextMenu:close', this.close)
  },

  methods: {
    open ({ event, items }) {
      this.items = items
      this.isOpened = true

      this.$nextTick(() => {
        const { y } = event
        const contentHeight = this.$refs.content.offsetHeight
        const hasSpaceAvailable = screen.height > y + contentHeight

        this.offsetY = hasSpaceAvailable
          ? y
          : y - contentHeight
      })
    },

    close () {
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
