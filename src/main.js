import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'

// Components
import vCardCustom from './components/v-card-custom.vue'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
})

app.use(router)
app.use(vuetify)

app.component('v-card-custom', vCardCustom)

app.mount('#app')
