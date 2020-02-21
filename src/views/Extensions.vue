<template>
  <div class="extensions-view">
    <section class="my-extensions">
      <h2>My extensions</h2>
      <ul class="extension-list">
        <li class="extension-item">
          <div class="item-content">
            <div class="icon"></div>
            <span class="name">Home</span>
            <div class="peoples"></div>
            <button class="button-options"></button>
          </div>
        </li>
      </ul>
    </section>
    <section class="others-extensions">
      <h2>Others</h2>
    </section>
  </div>
</template>

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

.extension-item {
  width: 163px;
  height: 94px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 15px #03030D14;
  border-radius: 8px;
  opacity: 1;
  padding: 14px;
}

.item-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-gap: 12px;
}

.item-content .icon {
  width: 20px;
  height: 20px;
  background: #eee;
  border-radius: 3px;
}

.item-content .name {
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  color: #2e2e2e;
  opacity: 1;
  align-self: center;
  grid-column: 2 / 4;
}

.item-content .peoples {
  width: 88px;
  height: 16px;
  background: #eee;
  grid-row: 3 / 4;
  grid-column: 1 / 3;
}

.item-content .button-options {
  width: 3px;
  height: 14px;
  border: none;
  grid-row: 3 / 4;
  grid-column: 3 / 4;
}
</style>
