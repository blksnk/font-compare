<template>
  <section class="retractable">
    <span class="title_bar">
      <h2>{{ title }}</h2>
      <button
        @click="retracted = !retracted"
        :title="retracted ? 'expand' : 'retract'"
      >
        <img
          :src="icons.arrow"
          :class="{
            reverse: !retracted,
          }"
          :alt="retracted ? 'expand' : 'retract'"
        />
      </button>
    </span>
    <slot v-if="!retracted"></slot>
  </section>
</template>

<script>
import arrow from '@/assets/icon/arrow.svg';
import arrowLight from '@/assets/icon/arrow_light.svg';

export default {
  name: 'Retractable',
  props: {
    title: {
      type: String,
      default: 'Default title',
      required: false,
    },
  },
  data() {
    return {
      retracted: false,
    };
  },
  computed: {
    icons() {
      const lightIcons = {
        arrow: arrowLight,
      };
      const defaultIcons = {
        arrow,
      };
      return this.$store.state.isDarkMode ? lightIcons : defaultIcons;
    },
  },
};
</script>

<style lang="scss">
.retractable {
  margin-bottom: 4rem;
  margin-right: 1rem;

  .title_bar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $c-p;
    margin-bottom: 0.5rem;

    h2 {
      border: none !important;
    }

    button,
    img {
      height: 1rem;
      width: 1rem;
    }

    button {
      padding: 0 0 0.5rem 0 !important;
      background: none !important;
    }

    img.reverse {
      transform: rotate(180deg);
    }
  }
}
</style>
