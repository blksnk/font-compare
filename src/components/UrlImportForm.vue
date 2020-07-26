<template>
  <form @submit.prevent="submit" id="url_import">
    <input
      required
      type="text"
      placeholder="url"
      @change="setUrl"
      @input="setUrl"
    />
    <input
      required
      type="text"
      placeholder="name"
      @change="setName"
      @input="setName"
    />
    <button>import</button>
  </form>
</template>

<script>
import { generateFont, registerFont, checkUnique } from '@/helpers/font';

export default {
  name: 'UrlImportForm',
  data() {
    return {
      url: '',
    };
  },
  methods: {
    setUrl(e) {
      this.url = e.target.value;
    },
    setName(e) {
      this.name = e.target.value;
    },
    async submit() {
      try {
        const res = await window.fetch(this.url, {
          method: 'GET',
          mode: 'cors',
        });
        const blob = await res.blob();
        const file = new File(
          [blob],
          `${this.name}.${blob.type.split('/')[1]}`
        );
        const font = await generateFont(file);
        if (checkUnique(font, this.$store.state.fonts)) {
          registerFont(font);
          this.$store.commit('addFont', font);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#url_import {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 1rem;
}
</style>
