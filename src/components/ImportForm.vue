<template>
  <label id="form" @drop.prevent="onDrop" @dragover.prevent="onDragOver">
    click / drag and drop here.
    <input
      @change="onChange"
      type="file"
      accept="font/woff, font/woff2, font/otf, font/ttf, application/vnd.ms-fontobject"
      multiple
    />
  </label>
</template>

<script>
import { generateFont, registerFont, checkUnique } from '@/helpers/font';

export default {
  name: 'ImportForm',
  props: {
    defaultNbr: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onChange(e) {
      this.addFonts([...e.target.files]);
    },
    onDrop(e) {
      this.addFonts(
        [...e.dataTransfer.items].map((item) => item.getAsFile())
      );
    },
    onDragOver(e) {
      e.preventDefault();
    },
    async addFonts(files) {
      try {
        const fonts = await Promise.all(
          files.map((file) => generateFont(file))
        );
        fonts.forEach((font) => {
          if (checkUnique(font, this.$store.state.fonts)) {
            registerFont(font);
            this.$store.commit('addFont', font);
          }
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#form {
  width: 100%;
  height: 8rem;
  margin-bottom: 2rem;
  background-color: $c-s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
    outline: 1px solid $c-p;
  }

  input {
    display: none;
  }
}

.dark #form {
  background-color: $c-p;

  &:hover {
    outline-color: $c-s;
  }
}
</style>
