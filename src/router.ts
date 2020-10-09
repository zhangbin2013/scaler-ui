import {createRouter, createWebHashHistory} from "vue-router";
import {h} from 'vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import DocDemo from './components/DocDemo.vue';
import Markdown from './components/Markdown.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';

const history = createWebHashHistory();

const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});

const routes = [
	{path: '/', component: Home},
	{
		path: '/doc', component: Doc, children:
			[
				{path: '', component: DocDemo},
				{path: 'intro', component: md('intro')},
				{path: 'get-started', component: md('get-started')},
				{path: 'install', component: md('install')},
				{path: 'switch', component: SwitchDemo},
				{path: 'button', component: ButtonDemo},
				{path: 'dialog', component: DialogDemo},
				{path: 'tabs', component: TabsDemo},
			]
	}];
export const router = createRouter({history, routes});
