import './lib/sc.scss';
import 'normalize.css/normalize.css';
import './index.scss';

import {createApp} from 'vue';
import App from './App.vue';

import {router} from "./router";

const app = createApp(App)
app.use(router)
app.mount('#app');
