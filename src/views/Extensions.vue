<template>
  <div class="extensions-view">
    <section class="my-extensions">
      <h2>My extensions</h2>
      <ul class="extension-list">
      </ul>
      <ListView class="extension-list" :items="extensions">
        <template v-slot:item-template="{ item }">
          <ExtensionItem :name="item.name" @click.native="connect(item)" />
        </template>
      </ListView>
    </section>
    <!-- <section class="others-extensions">
      <h2>Others</h2>
    </section> -->
  </div>
</template>

<script>
import { dispatch, get } from 'vuex-pathify'

import ExtensionItem from '@/components/extension/ExtensionItem.vue'
import ListView from '@/components/ListView.vue'

export default {
  components: {
    ExtensionItem,
    ListView
  },

  computed: {
    extensions: get('extension/all')
  },

  mounted () {
    dispatch('extension/list')
  },

  methods: {
    connect (extension) {
      dispatch('playback/connect', {
        extensionId: extension.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.extensions-view {
  padding: 8px 0;
  margin: 16px;
}

h2 {
  text-align: left;
  font-weight: 28px;
  font-weight: 700;
  letter-spacing: 0;
  color: #2e2e2e;
  opacity: 1;
  margin-bottom: 14px;
}

.extension-list {
  display: flex;
}
</style>
