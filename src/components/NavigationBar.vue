<template>
  <div class="navigation-bar">
    <!-- <svgicon
      icon="icon-music"
      height="20"
      width="20"
    /> -->
    <template v-for="item in items">
      <RouterLink class="item" :key="item.label" :to="item.route">
        <div class="icon"></div>
        <span class="label">{{ item.label }}</span>
      </RouterLink>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          label: 'Tracks',
          route: '/'
        },
        {
          label: 'Artists',
          route: '/artists'
        },
        {
          label: 'Playlists',
          route: '/playlists'
        },
        {
          label: 'Extensions',
          route: '/extensions'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px;
}

.item {
  position: relative;
  color: #4642bb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.label {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-family: 'TT Commons';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  color: #4642BB;
  opacity: 0;
}

.icon {
  background: #ccc;
  width: 20px;
  height: 20px;
}

.router-link-exact-active {
  .icon {
    transform: translateY(-9px);
  }

  .label {
    opacity: 1;
  }
}
</style>
