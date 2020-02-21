<template>
  <div class="track-item">
    <div class="thumbnail"></div>
    <span class="title">{{ data.title }}</span>
    <span class="artist">{{ data.artist }}</span>
    <button class="button-options"></button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.track-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, 1fr);
  height: 62px;
}

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
</style>
