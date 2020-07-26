<template>
  <ul id="list">
    <li v-for="font in sortedList" :key="font.id">
      <span v-if="usePreviewOptions" class="font-title">{{
        font.title
      }}</span>
      <span v-if="usePreviewOptions" class="font-filetype">{{
        font.fileType
      }}</span>
      <span class="font-preview" :style="createStyle(font)">
        {{ usePreviewOptions ? options.string : font.title }}
      </span>
      <span v-if="!usePreviewOptions" class="font-filetype">{{
        font.fileType
      }}</span>
    </li>
  </ul>
</template>

<script>
import { sortByTitle, createStyleString } from '@/helpers/font';

export default {
  name: 'FontsList',
  props: {
    usePreviewOptions: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    createStyle(font) {
      let sObj = {
        fontFamily: `font_${font.id}`,
      };
      if (this.usePreviewOptions) {
        sObj = { ...sObj, ...this.options.style };
      }
      return createStyleString(sObj);
    },
  },
  computed: {
    sortedList() {
      return sortByTitle(this.$store.state.fonts);
    },
    options() {
      return this.$store.state.previewOptions;
    },
  },
};
</script>

<style lang="scss" scoped>
#list {
  li {
    list-style-type: none;
    min-height: 4rem;
    padding: 0.5rem 0 1rem 0;
    border-bottom: 1px solid #2c3e50;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 5rem;
    grid-column-gap: 1rem;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }

    .font-preview {
      font-size: 2rem;
      margin-top: 0.5rem;
      overflow-wrap: anywhere;
      // word-break: break-all;
      color: #212f3d;
    }

    .font-info-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .font-filetype {
      font-family: 'Beausite';
      font-size: 1rem;
      line-height: 1rem;
      height: 0.8rem;
      min-width: 5rem;
      text-align: right;
      align-self: start;
    }
  }
}
</style>
