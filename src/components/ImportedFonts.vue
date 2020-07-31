<template>
  <div id="imported_fonts">
    <h2>fonts</h2>
    <div id="empty" v-if="isEmpty">
      <span>This list is empty. Imported fonts will show up here.</span>
    </div>

    <FontsList />

    <div id="links" v-if="!isEmpty">
      <button @click="reset">
        reset selection
      </button>
      <router-link to="/compare">
        compare fonts
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportedFonts',
  methods: {
    reset() {
      this.$store.commit('resetFontList');
    },
  },
  computed: {
    isEmpty() {
      return Object.keys(this.$store.state.fonts).length === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
#imported_fonts {
  margin-top: 3rem;
  color: #2c3e50;

  h2 {
    border-bottom: none;
  }

  #empty {
    margin-top: 1rem;
  }

  #links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4rem;
    grid-gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid #2c3e50;
    margin-right: 1rem;

    * {
      font-family: 'Beausite';
      font-size: 1rem;
      line-height: 1rem;
      color: #2c3e50;
      height: 100%;
      background-color: #dcd7bc;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
