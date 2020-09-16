import {createRouter, createWebHashHistory} from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/Switch.vue';

const history = createWebHashHistory();
const routes = [{path: '/', component: Home}, {path: '/doc', component: Doc, children: [{
        path: 'switch', component: Switch
    }]}];
export const router = createRouter({history, routes});