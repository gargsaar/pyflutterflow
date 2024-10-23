import '@/assets/css/main.css'
import '@fontsource-variable/comfortaa';
import '@fontsource-variable/inter';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/comfortaa';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';


import App from './App.vue'
import router from './router'
import Aura from '@/presets/Aura';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.directive('tooltip', Tooltip)
app.directive('ripple', Ripple)

app.use(createPinia())
app.use(router)
app.use(ConfirmationService);
app.use(ToastService)
app.use(PrimeVue, {
  unstyled: true,
  ripple: true,
  pt: Aura
})
app.mount('#app')
