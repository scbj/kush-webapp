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

export default {
  components: {
    ArtistItem,
    ListView
  },

  computed: {
    artists () {
      return [
        {
          name: 'Bonga'
        },
        {
          name: 'Coccolino Deep'
        },
        {
          name: 'Emeli Sandé'
        },
        {
          name: 'Le DJ Nab'
        },
        {
          name: 'Martin Roth'
        },
        {
          name: 'Noel Harrison'
        },
        {
          name: 'Orelse'
        },
        {
          name: 'Qarcii'
        },
        {
          name: 'Short Notice'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.artists {
  margin: 16px;
}

</style>
