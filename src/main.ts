import {createApp} from 'vue';
import App from './App.vue';
import 'normalize.css/normalize.css';
import './index.css';
import {router} from "./router";

const app = createApp(App)
app.use(router)
app.mount('#app');
