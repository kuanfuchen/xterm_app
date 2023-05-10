<template>
  <div>
    <div ref="xterm" class="xtermStyle"></div>
  </div>
</template>
<script setup>
  import "./allStyle.css";
  import { Terminal } from "xterm";
  import { FitAddon} from 'xterm-addon-fit';
  import { ref, onMounted, provide} from 'vue';
  import { WebLinksAddon } from 'xterm-addon-web-links';
  import {LinkProvider} from 'xterm-link-provider';
  import {bdpDataBase} from '@/service/apiService';
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
  // provide('dataService', dataService);
  // provide('terminal', terminal)
  const xterm = ref(null);
  const fitAddon = new FitAddon();
  const initXterm = () => {
    terminal.open(xterm.value);
    fitAddon.fit();
    terminal.focus();
    terminal.write('Xterm JS');
  };
  onMounted(() => {
    // onloadXtermElement('onload',dataService.bdpDataBase);
    initXterm();
  });
</script>