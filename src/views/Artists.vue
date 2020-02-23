<template>
  <div>
    <ListView class="artists" :items="artists">
      <template v-slot:item-template="{ item }">
        <ArtistItem :data="item" />
      </template>
    </ListView>
  </div>
</template>

<script>
import ArtistItem from '@/components/artist/ArtistItem.vue'
import ListView from '@/components/ListView.vue'

import { dispatch, get } from 'vuex-pathify'

export default {
  components: {
    ArtistItem,
    ListView
  },

  computed: {
    artists: get('artist/all')
  },

  mounted () {
    dispatch('artist/list')
  }
}
</script>

<style scoped lang="scss">
.artists {
  margin: 16px;
}

</style>
