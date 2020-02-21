<template>
  <div>
    <div class="buttons">
      <button class="button button-play-all">Play All</button>
      <button class="button button-random">Random</button>
    </div>
    <ListView class="tracks" :items="tracks">
      <template v-slot:item-template="{ item }">
        <div class="track">
          <div class="thumbnail"></div>
          <span class="title">{{ item.title }}</span>
          <span class="artist">{{ item.artist }}</span>
          <button class="button-options"></button>
        </div>
      </template>
    </ListView>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  components: {
    ListView
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

.track {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, 1fr);
  height: 62px;

  .thumbnail {
    grid-row: 1 / 3;
    width: 42px;
    height: 42px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    opacity: 1;
    align-self: center;
    margin-right: 16px;
    border-radius: 6px;
  }

  .title {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    align-self: flex-end;

    font-family: 'TT Commons';
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    color: #2E2E2E;
  }

  .artist {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    align-self: flex-start;

    font-family: 'TT Commons';
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    color: #6C6C6C;
    opacity: 1;
  }

  .title,
  .artist {
    justify-self: flex-start;
  }

  .button-options {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
    align-self: center;
    width: 3px;
    height: 14px;
    border: none;
  }
}

</style>
