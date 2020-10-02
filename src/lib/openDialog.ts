import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
	const {title, content, ok, cancel, closeOnClickOverlay} = options;
	const div = document.createElement('div');
	document.body.append(div);

	const close = () => {
		app.unmount(div);
		div.remove();
	};

	const app = createApp({
		render() {
			return h(Dialog, {
				visible: true,
				'onUpdate:visible': (newV) => {
					console.log(newV);
					if(newV === false){
						close();
					}
				},
				closeOnClickOverlay: closeOnClickOverlay,
				ok, cancel
			}, {title, content})
		}
	})
	app.mount(div);
}
