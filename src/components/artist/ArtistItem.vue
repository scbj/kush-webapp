<template>
  <div class="artist-item">
    <div class="avatar"></div>
    <span class="name">{{ data.name }}</span>
    <button class="button-options" @click="openContextMenu"></button>
  </div>
</template>

<script>
import { EventBus } from '@/reactivity/event-bus'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    openContextMenu (event) {
      const contextMenuItems = [
        {
          label: 'Add to the queue',
          handler () { console.log('to') }
        },
        {
          label: 'Add to a playlist',
          handler () { }
        },
        {
          label: 'Share',
          handler () { }
        },
        {
          label: 'Remove',
          handler: () => alert(this.data.name)
        }
      ]
      EventBus.$emit('contextMenu:open', { event, items: contextMenuItems })
    }
  }
}
</script>

<style lang="scss" scoped>
.artist-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 62px;
}
.avatar {
  width: 42px;
  height: 42px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  opacity: 1;
  align-self: center;
  margin-right: 16px;
  border-radius: 50%;
}

.name {
  flex-grow: 1;

  text-align: left;
  font-family: 'TT Commons';
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  color: #2E2E2E;
}

.button-options {
  grid-row: 1 / 3;
  grid-column: 3 / 4;
  align-self: center;
  width: 3px;
  height: 14px;
  border: none;
}

</style>
