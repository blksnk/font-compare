import Vue from 'vue';
import Vuex from 'vuex';
import { sortByTitle } from '@/helpers/font';

Vue.use(Vuex);

export const initState = {
  fonts: {},
  previewOptions: {
    string: 'Preview text',
    style: {
      fontSize: 32,
      fontWeight: 'normal',
      textTransform: 'none',
      textDecoration: 'none',
    },
  },
  isDarkMode: false,
};

export default new Vuex.Store({
  state: initState,
  mutations: {
    setFonts(state, fonts) {
      state.fonts = fonts;
    },
    resetFontList(state) {
      state.fonts = {};
    },
    updateFont(state, id, font) {
      state.fonts[id] = font;
    },
    addFont(state, font) {
      state.fonts = sortByTitle({
        ...state.fonts,
        [font.id]: font,
      });
    },
    removeFont(state, id) {
      Vue.delete(state.fonts, id);
    },
    replaceFont(state, id, newFont) {
      state.fonts[id] = { ...newFont, id };
    },
    changePreviewOption(state, changes) {
      state.previewOptions = {
        ...state.previewOptions,
        ...changes,
      };
    },
    resetPreviewOptions(state) {
      state.previewOptions = initState.previewOptions;
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  actions: {},
  modules: {},
});
