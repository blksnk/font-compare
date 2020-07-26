<template>
  <div id="options_container">
    <h2>text options</h2>
    <div id="options_list">
      <span>custom</span>
      <input
        id="o_string"
        type="text"
        placeholder="Preview text"
        @input="(e) => onChange(e, 'string', false)"
      />

      <span>generated</span>
      <button
        @click="(e) => generateText('custom')"
        :class="{ active: displayText === 'custom' }"
      >
        custom
      </button>
      <button
        @click="(e) => generateText('sentence')"
        :class="{ active: displayText === 'sentence' }"
      >
        sentence
      </button>
      <button
        @click="(e) => generateText('alphabet')"
        :class="{ active: displayText === 'alphabet' }"
      >
        alphabet
      </button>
      <button
        @click="(e) => generateText('numbers')"
        :class="{ active: displayText === 'numbers' }"
      >
        numbers
      </button>
    </div>

    <h2>style options</h2>
    <div id="options_list">
      <span>size</span>
      <input
        :value="options.style.fontSize"
        type="number"
        @input="(e) => onChange(e, 'fontSize')"
        @change="(e) => onChange(e, 'fontSize')"
      />

      <span>weight</span>
      <button
        @click="(e) => changeStyleOption('fontWeight', 'normal')"
        :class="{ active: options.style.fontWeight === 'normal' }"
      >
        normal
      </button>
      <button
        @click="(e) => changeStyleOption('fontWeight', 'bold')"
        :class="{ active: options.style.fontWeight === 'bold' }"
      >
        bold
      </button>

      <span>transform</span>
      <button
        @click="(e) => changeStyleOption('textTransform', 'none')"
        :class="{ active: options.style.textTransform === 'none' }"
      >
        none
      </button>
      <button
        @click="(e) => changeStyleOption('textTransform', 'capitalize')"
        :class="{ active: options.style.textTransform === 'capitalize' }"
      >
        capitalize
      </button>
      <button
        @click="(e) => changeStyleOption('textTransform', 'lowercase')"
        :class="{ active: options.style.textTransform === 'lowercase' }"
      >
        lowercase
      </button>
      <button
        @click="(e) => changeStyleOption('textTransform', 'uppercase')"
        :class="{ active: options.style.textTransform === 'uppercase' }"
      >
        uppercase
      </button>

      <span>decoration</span>
      <button
        @click="(e) => changeStyleOption('textDecoration', 'none')"
        :class="{ active: options.style.textDecoration === 'none' }"
      >
        none
      </button>
      <button
        @click="(e) => changeStyleOption('textDecoration', 'underline')"
        :class="{ active: options.style.textDecoration === 'underline' }"
      >
        underline
      </button>
      <button
        @click="(e) => changeStyleOption('textDecoration', 'line-through')"
        :class="{ active: options.style.textDecoration === 'line-through' }"
      >
        line through
      </button>
      <button
        @click="(e) => changeStyleOption('textDecoration', 'overline')"
        :class="{ active: options.style.textDecoration === 'overline' }"
      >
        overline
      </button>
    </div>
  </div>
</template>

<script>
import { presetText } from '@/helpers/string';

export default {
  name: 'PreviewOptions',
  data() {
    return {
      displayText: 'custom',
      customText: 'Preview Text',
    };
  },
  methods: {
    onChange(e, name, isStyle = true) {
      if (isStyle) {
        this.changeStyleOption(
          name,
          e.target.type === 'number' ? Number(e.target.value) : e.target.value
        );
      } else if (name === 'string') {
        this.displayText = 'custom';
        this.customText = e.target.value;
        this.changeOption(name, e.target.value || 'Preview text');
      }
    },
    changeStyleOption(name, value) {
      this.$store.commit('changePreviewOption', {
        style: {
          ...this.options.style,
          [name]: value,
        },
      });
    },
    changeOption(name, value) {
      this.$store.commit('changePreviewOption', { [name]: value });
    },
    generateText(value) {
      this.displayText = value;
      this.changeOption(
        'string',
        value === 'custom' ? this.customText : presetText(value)
      );
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
#options_container {
  margin-bottom: 4rem;
}
#options_list {
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1.5rem;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 4rem;

  button,
  input,
  span {
    height: 100%;
    width: 100%;
  }

  span {
    margin-top: 0.25rem;
  }

  #o_string {
    grid-column: span 4;
  }
}
</style>
