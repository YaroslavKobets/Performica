import { initLazyLoad } from './modules/lazyLoad.js'
import { initHome } from './modules/home.js'
import { initForm } from './modules/form.js'
import './modules/popup.js';
import './modules/sidebar.js';

initLazyLoad()
initForm()

document.addEventListener('DOMContentLoaded', () => {

	initHome()

});

