import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './style.css'
import '../public/fontface.css'
Vue.config.productionTip = false

// Import all base components
const requireComponent = require.context('./components', true, /Base[A-Z]/)
requireComponent.keys().forEach(fileName => {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
  Vue.component(baseComponentName, baseComponentConfig)
})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
