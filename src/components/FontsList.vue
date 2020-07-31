<template>
  <ul id="list">
    <li v-for="font in $store.state.fonts" :key="font.id">
      <span class="font-info">
        <span v-if="usePreviewOptions" class="font-title"
          >{{ font.title }} &mdash;
        </span>
        <span class="font-filetype">{{ font.fileType }}</span>
      </span>

      <div class="font-manage">
        <button
          @click="() => moveFont(font, 'up')"
          class="font-manage-btn"
          title="move up"
          aria-labelledby="move up"
        >
          <img src="@/assets/icon/arrow.svg" alt="move up" />
        </button>
        <button
          @click="() => moveFont(font, 'down')"
          class="font-manage-btn"
          title="move down"
          aria-labelledby="move down"
        >
          <img
            class="reverse"
            src="@/assets/icon/arrow.svg"
            alt="move down"
          />
        </button>
        <button
          @click="() => removeFont(font)"
          class="font-manage-btn"
          title="delete"
          aria-labelledby="delete"
        >
          <img src="@/assets/icon/cross.svg" alt="delete" />
        </button>
      </div>

      <span class="font-preview" :style="createStyle(font)">
        {{ usePreviewOptions ? options.string : font.title }}
      </span>
    </li>
    <div id="list_end_bar"></div>
  </ul>
</template>

<script>
import { createStyleString, swapFontPosition } from '@/helpers/font';

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
    removeFont(font) {
      console.log(font.id);
      this.$store.commit('removeFont', font.id);
    },
    moveFont(font, direction) {
      const shifted = swapFontPosition(
        this.$store.state.fonts,
        font,
        direction
      );
      this.$store.commit('setFonts', shifted);
    },
  },
  computed: {
    options() {
      return this.$store.state.previewOptions;
    },
  },
};
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  li {
    list-style-type: none;
    min-height: 4rem;
    padding: 0.5rem 0 4rem 0;
    border-top: 1px solid #2c3e50;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 5rem;
    grid-template-rows: 1rem auto;
    grid-column-gap: 1rem;
    grid-row-gap: 0.5rem;
    align-items: center;
    flex: 1;
    min-width: 600px;
    margin-right: 1rem;

    &:last-child {
      border-bottom: none;
    }

    .font-info {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }

    .font-preview {
      font-size: 2rem;
      grid-column: 1 / span 2;
      grid-row: 2 / span 1;
      overflow-wrap: anywhere;
      color: #212f3d;
    }

    .font-info-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .font-manage {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .font-manage-btn {
        padding: 0;
        background: none;
        height: 1rem;
        align-self: end;
        justify-self: end;
        margin-left: 1rem;

        img {
          height: 1rem;

          &.reverse {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  #list_end_bar {
    width: 100%;
    height: 1px;
    background-color: $c-p;
    margin-right: 1rem;
  }
}

.dark #list {
  li {
    border-color: $c-s-dark;

    span {
      color: $c-s-dark;
    }

    .font-preview {
      color: $c-s;
    }
  }

  #list_end_bar {
    background-color: $c-s;
  }
}

@media screen and (max-width: 700px) {
  #list li {
    min-width: 400px;
  }
}

@media screen and (max-width: 600px) {
  #list li {
    min-width: 300px;
  }
}

@media screen and (max-width: 500px) {
  #list li {
    min-width: 280px;
  }
}

@media screen and (max-width: 400px) {
  #list li {
    min-width: 250px;
  }
}
</style>
