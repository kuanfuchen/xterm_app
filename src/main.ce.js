import { defineCustomElement } from 'vue';
import XtermAPP from '@/elements/XtermApp.ce.vue';
window.customElements.define('xterm-bdp-element', defineCustomElement(XtermAPP));