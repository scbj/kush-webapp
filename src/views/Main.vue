<template>
  <div>
    <header>
      <input class="search-bar" type="text">
      <div class="avatar"></div>
    </header>
    <KeepAlive>
      <RouterView />
    </KeepAlive>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 16px;
  margin: 16px;
}

.search-bar {
  top: 16px;
  left: 16px;
  height: 38px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 15px #03030D14;
  border-radius: 6px;
  opacity: 1;

  border: none;
}

.avatar {
  border-radius: 50%;
  top: 16px;
  left: 321px;
  width: 38px;
  height: 38px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
