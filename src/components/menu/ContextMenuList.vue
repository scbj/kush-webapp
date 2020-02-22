<template>
  <ListView class="context-menu-list" :items="items">
    <template v-slot:item-template="{ item }">
      <ContextMenuItem
        class="item"
        :action="item.handler"
        :label="item.label"
      />
    </template>
  </ListView>
</template>

<script>
import ContextMenuItem from '@/components/menu/ContextMenuItem'
import ListView from '@/components/ListView.vue'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  components: {
    ContextMenuItem,
    ListView
  }
}
</script>

<style lang="scss" scoped>
.context-menu-list {
  padding: 9px 0;
}
</style>
