<template>
  <div id="imported_fonts">
    <div id="empty" v-if="isEmpty">
      <span>This list is empty. Imported fonts will show up here.</span>
    </div>

    <div v-else>
      <h2>fonts</h2>
      <FontsList />
    </div>

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
  color: $c-p;

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
    margin-top: 2rem;
    margin-right: 1rem;

    * {
      font-family: 'Beausite';
      font-size: 1rem;
      line-height: 1rem;
      color: $c-p;
      height: 100%;
      background-color: $c-s;
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

.dark #imported_fonts {
  color: $c-s;

  #links * {
    color: $c-s;
    background-color: $c-p;
  }
}
</style>
