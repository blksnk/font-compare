<template>
  <ViewWrapper id="compare">
    <h1>stylize and compare</h1>
    <PreviewOptions />

    <div v-if="!isEmpty">
      <h2 id="list_title">preview</h2>
      <FontsList usePreviewOptions />
    </div>
    <p v-else>
      Imported fonts will show up here. You currently haven't added any.<br />
      Go to the <router-link to="/">Select page</router-link> to import some.
    </p>
  </ViewWrapper>
</template>

<script>
export default {
  name: 'Compare',
  computed: {
    isEmpty() {
      return Object.keys(this.$store.state.fonts).length === 0;
    },
  },
};
</script>

<style lang="scss">
#compare {
  padding-right: 0;

  #list_title {
    border: none !important;
  }
}
</style>
