import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tooltip from './directives/tooltip'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faEnvelope, faProjectDiagram, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faEnvelope, faProjectDiagram, faUser, faGithub, faBlogger, faPhone)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('tooltip', tooltip)
app.use(router)
app.mount('#app')