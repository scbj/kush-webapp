<template>
  <li class="extension-item">
    <div class="content">
      <div class="icon"></div>
      <span class="name">Home</span>
      <div class="peoples"></div>
      <button class="button-options"></button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.extension-item {
  width: 163px;
  height: 94px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 15px #03030D14;
  border-radius: 8px;
  opacity: 1;
  padding: 14px;
}

.content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-gap: 12px;
}

.content .icon {
  width: 20px;
  height: 20px;
  background: #eee;
  border-radius: 3px;
}

.content .name {
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  color: #2e2e2e;
  opacity: 1;
  align-self: center;
  grid-column: 2 / 4;
}

.content .peoples {
  width: 88px;
  height: 16px;
  background: #eee;
  grid-row: 3 / 4;
  grid-column: 1 / 3;
}

.content .button-options {
  width: 3px;
  height: 14px;
  border: none;
  grid-row: 3 / 4;
  grid-column: 3 / 4;
}

</style>
