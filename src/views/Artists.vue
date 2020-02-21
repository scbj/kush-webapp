<template>
  <div>
    <ListView class="artists" :items="artists">
      <template v-slot:item-template="{ item }">
        <div class="artist">
          <div class="avatar"></div>
          <span class="name">{{ item.name }}</span>
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

.artist {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 62px;

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
}

</style>
