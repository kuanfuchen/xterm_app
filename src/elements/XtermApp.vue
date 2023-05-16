<template>
  <div>
    <div ref="xterm" class="xtermStyle"></div>
  </div>
</template>
<script setup>
  import "./allStyle.css";
  import { Terminal } from "xterm";
  import { FitAddon} from 'xterm-addon-fit';
  import { ref, onMounted} from 'vue';
  // import { WebLinksAddon } from 'xterm-addon-web-links';
  // import {LinkProvider} from 'xterm-link-provider';
  import {bdpDataBase} from './service/apiService.js';
  import checkedAnalyzeText from './parsingText';
  const onloadXtermElement = defineEmits(['onload']);
  const terminal = new Terminal({
    fontSize: 18,
    cursorBlink: true,
    // rows: _rows.value,
    rows:1000,
    cols:1000,
    rendererType: 'canvas',
    fontWeight:700,
    theme: defaultTheme,
  });
  terminal.prompt = () => {
    terminal.write(`\r\n\x1b[28m\u001b[32muser>`);
  };
  // provide('dataService', dataService);
  // provide('terminal', terminal)
  const xterm = ref(null);
  const fitAddon = new FitAddon();
  const initXterm = () => {
    terminal.open(xterm.value);
    fitAddon.fit();
    terminal.focus();
    terminal.write('Xterm JS');
    terminal.prompt();
    terminal.onKey(async(ev)=>{
      const e = ev.domEvent;
      checkedAnalyzeText(e, e.keyCode);
    })
  };
  onMounted(() => {
    onloadXtermElement('onload', bdpDataBase);
    initXterm();
  });
</script>