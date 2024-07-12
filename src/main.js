// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' //Ensure you import the material Design Icons
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
              components,
              directives,
              icons:{
                            iconfont: 'mdi', //set the default icon font to material Design Icons
              }
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
