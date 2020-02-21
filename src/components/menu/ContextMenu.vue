<template>
  <div class="context-menu" v-show="isOpened" @click="close">
    Yo
  </div>
</template>

<script>
import { get, dispatch } from 'vuex-pathify'

export default {
  computed: {
    isOpened: get('contextMenu/isOpened')
  },

  methods: {
    close () {
      dispatch('contextMenu/close')
    }
  }
}
</script>

<style lang="scss" scoped>
.context-menu {
  background: rgba(200,200,200,0.4);
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
