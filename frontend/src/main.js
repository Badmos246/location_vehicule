import './style.css'

import { createApp, render } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'



import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import PrimeVue from 'primevue/config';

library.add(fas)
const vuetify = createVuetify({
    // ... your configuration
})
const app = createApp(App)


app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app
.component('fa',FontAwesomeIcon)
.mount('#app')
