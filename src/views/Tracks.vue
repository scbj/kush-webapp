<template>
  <div>
    <div class="buttons">
      <button class="button button-play-all">Play All</button>
      <button class="button button-random">Random</button>
    </div>
    <ListView class="tracks" :items="tracks">
      <template v-slot:item-template="{ item }">
        <TrackItem :data="item">
          <span>Hello, world!</span>
        </TrackItem>
      </template>
    </ListView>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue'
import TrackItem from '@/components/track/TrackItem.vue'

export default {
  components: {
    ListView,
    TrackItem
  },

  computed: {
    tracks () {
      return [
        {
          title: 'Waterfall (Lucy Remix)',
          artist: 'Rrose'
        },
        {
          title: "Hope he'll never die [яaш мvzak]",
          artist: 'Soft Blade'
        },
        {
          title: 'I Give U My Love',
          artist: 'Uncle Po'
        },
        {
          title: 'SATRN',
          artist: 'deadmau5'
        },
        {
          title: 'Ylang Ylang',
          artist: 'Fkj'
        },
        {
          title: 'Miracle Inside',
          artist: 'Silat Beksi'
        },
        {
          title: 'Waterfall (Lucy Remix)',
          artist: 'Rrose'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.buttons {
  border-radius: 6px;
  opacity: 1;
  margin: 16px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 19px;
}

.button {
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 15px #03030D14;
  border-radius: 6px;
  opacity: 1;
  border: none;

  font-family: 'TT Commons';
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  color: #2E2E2E;
}

.button-random {
  background: #4642bb;
  color: #ffffff;
  box-shadow: 0px 4px 13px #36339BB5;
}

.tracks {
  margin: 16px;
}
</style>
