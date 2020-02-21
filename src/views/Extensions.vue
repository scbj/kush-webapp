<template>
  <div class="extensions-view">
    <section class="my-extensions">
      <h2>My extensions</h2>
      <ul class="extension-list">
        <ExtensionItem />
      </ul>
    </section>
    <!-- <section class="others-extensions">
      <h2>Others</h2>
    </section> -->
  </div>
</template>

<script>
import ExtensionItem from '@/components/extension/ExtensionItem.vue'

export default {
  components: {
    ExtensionItem
  }
}
</script>

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
</style>
