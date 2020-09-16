import {createApp} from 'vue';
import App from './App.vue';
import 'normalize.css/normalize.css';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
const routes = [{path: '/', component: Home}, {path: '/doc', component: Doc}];
const router = createRouter({history, routes});

const app = createApp(App)
app.use(router)
app.mount('#app');
