import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Register global components
const requireComponent = require.context(
  // Look for files in the components directory
  './components',
  // Look in subdirectories
  true,
  // Only include "Base" prefixed .vue files
  /Base[A-Z]\w+\.(vue|js)$/,
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Gets the file name regardless of folder depth
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  el: '#app',
  render: h => h(App),
});
