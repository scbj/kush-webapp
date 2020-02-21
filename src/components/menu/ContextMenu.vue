<template>
  <div class="context-menu" v-show="isOpened" @click.self="close">
    <div class="content">
      <ul>
        <template v-for="(item, index) in items">
          <li :key="index" @click="onItemClick(item.handler)">
            <span>{{ item.label }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/reactivity/event-bus'

export default {
  data () {
    return {
      isOpened: false,
      items: []
    }
  },

  mounted () {
    EventBus.$on('contextMenu:open', this.open)
  },

  beforeDestroy () {
    EventBus.$off('contextMenu:open', this.open)
  },

  methods: {
    open ({ target, items }) {
      this.items = items
      this.isOpened = true
    },

    onItemClick (handler) {
      handler()
      this.close()
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
  top: 100px;
  left: 20px;
  min-width: 190px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000029;
  border-radius: 4px;
}

li {
  padding: 9px 16px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  color: #2E2E2E;

  &:first-of-type {
    padding-top: 16px;
  }

  &:last-of-type {
    padding-bottom: 16px;
  }
}
</style>
