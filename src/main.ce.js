import { defineCustomElement } from 'vue';
import XtermAPP from '@/element/XtermApp.vue';
window.customElements.define('xterm-bdp-element', defineCustomElement(XtermAPP));