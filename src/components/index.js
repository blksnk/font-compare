import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import ViewWrapper from '@/components/ViewWrapper.vue';
import ImportForm from '@/components/ImportForm.vue';
import UrlImportForm from '@/components/UrlImportForm.vue';
import PreviewOptions from '@/components/PreviewOptions.vue';
import ImportedFonts from '@/components/ImportedFonts.vue';
import FontsList from '@/components/FontsList.vue';

export default function globalizeComponents() {
  Vue.component('ViewWrapper', ViewWrapper);
  Vue.component('NavBar', NavBar);
  Vue.component('ImportForm', ImportForm);
  Vue.component('UrlImportForm', UrlImportForm);
  Vue.component('FontsList', FontsList);
  Vue.component('ImportedFonts', ImportedFonts);
  Vue.component('PreviewOptions', PreviewOptions);
}
