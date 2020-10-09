import './lib/sc.scss';
import 'normalize.css/normalize.css';
import './index.scss';

import {createApp} from 'vue';
import App from './App.vue';

import {router} from "./router";
import './lib/svg.js'

import 'github-markdown-css';

const app = createApp(App)
app.use(router)
app.mount('#app');
