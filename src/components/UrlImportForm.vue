<template>
  <form @submit.prevent="submit" id="url_import">
    <input
      id="input_url"
      required
      type="text"
      placeholder="url"
      @change="setUrl"
      @input="setUrl"
    />
    <input
      id="input_name"
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
import { urlToFile } from '@/helpers/data';

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
      const file = await urlToFile(this.url, this.name);
      const font = await generateFont(file);
      if (checkUnique(font, this.$store.state.fonts)) {
        registerFont(font);
        this.$store.commit('addFont', font);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#url_import {
  display: flex;
  flex-wrap: wrap;

  * {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #input_url {
    flex: 2;
  }

  #input_name {
    flex: 1;
  }

  button {
    flex: 1;
  }
}
</style>
