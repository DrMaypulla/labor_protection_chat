import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';

import './style.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import router from './router/index.js'
import store from './store.js';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark',
            cssLayer: false
        }
    }
});
app.use(router);
app.use(ConfirmationService);
app.use(store);
app.use(ToastService);
app.mount('#app');