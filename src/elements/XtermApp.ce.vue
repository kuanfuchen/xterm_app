<template>
  <div>
    <p class="redtext">Xterm Component</p>
    <div ref="xterm" class="xtermStyle"></div>
  </div>
</template>
<script setup>
  import { Terminal } from "xterm";
  import { FitAddon} from 'xterm-addon-fit';
  import { ref, onMounted} from 'vue';
  import { Subject, takeUntil } from "rxjs";
  // import { WebLinksAddon } from 'xterm-addon-web-links';
  // import {LinkProvider} from 'xterm-link-provider';
  import { bdpDataBase } from './service/apiService.js';
  import checkedAnalyzeText from './parsingText.js';
  import {exportTextContent$} from './message/export_message.js';
  const compSubject$ = new Subject();
  const onloadXtermElement = defineEmits(['onload']);
  const terminal = new Terminal({
    fontSize: 18,
    cursorBlink: true,
    // rows: _rows.value,
    rows:1000,
    cols:1000,
    rendererType: 'canvas',
    fontWeight:700,
  });
  let pathway = '';
  terminal.prompt = () => {
    terminal.write(`\r\n\x1b[28m\u001b[32muser>${pathway}`);
  };
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
      console.log(e, 'e');
      checkedAnalyzeText(e.key, e.keyCode);
    })
  };
  exportTextContent$.pipe(takeUntil(compSubject$)).subscribe((transferObj) => {
    if(transferObj.transferText === 'Enter'){
      terminal.clearSelection();
      terminal.clearTextureAtlas();
      if(transferObj.text !== '') terminal.write(`\r\n${transferObj.text}`);
      if(transferObj.pathway !== undefined) pathway = transferObj.pathway;
      terminal.prompt();
    }else if(transferObj.transferText === 'Backspace'){
      if(terminal._core.buffer.x > 5 ) terminal.write('\b \b');
    }else{
      terminal.write(transferObj.text);
    }
    terminal.scrollToBottom();
  })
  onMounted(() => {
    onloadXtermElement('onload', bdpDataBase);
    initXterm();
  });
</script>
<style lang="scss">
  .redtext{
    color: red;
  }
  .xtermStyle{
    width: 100vw;
    height:100%;
    text-align:left;
    padding-left: 10px;
    background: black;
  }
  .xterm {
    cursor: text;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }
  .xterm.focus,
  .xterm:focus {
    outline: none;
  }
  .xterm .xterm-helpers {
    position: absolute;
    top: 0;
    z-index: 5;
  }
  .xterm .xterm-helper-textarea {
    padding: 0;
    border: 0;
    margin: 0;
    /* Move textarea out of the screen to the far left, so that the cursor is not visible */
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -5;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
  }
  .xterm .composition-view {
    /* TODO: Composition position got messed up somewhere */
    background: #000;
    color: #FFF;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
  }
  .xterm .composition-view.active {
    display: block;
  }

  .xterm .xterm-viewport {
    /* On OS X this is required in order for the scroll bar to appear fully opaque */
    background-color: #000;
    overflow-y: scroll;
    cursor: default;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .xterm .xterm-screen {
    position: relative;
  }

  .xterm .xterm-screen canvas {
    position: absolute;
    left: 0;
    top: 0;
  }

  .xterm .xterm-scroll-area {
    visibility: hidden;
  }

  .xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -9999em;
    line-height: normal;
  }

  .xterm.enable-mouse-events {
      /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
    cursor: default;
  }

  .xterm.xterm-cursor-pointer,
  .xterm .xterm-cursor-pointer {
    cursor: pointer;
  }

  .xterm.column-select.focus {
    /* Column selection mode */
    cursor: crosshair;
  }

  .xterm .xterm-accessibility,
  .xterm .xterm-message {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    color: transparent;
  }

  .xterm .live-region {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .xterm-dim {
    opacity: 0.5;
  }

  .xterm-underline-1 { text-decoration: underline; }
  .xterm-underline-2 { text-decoration: double underline; }
  .xterm-underline-3 { text-decoration: wavy underline; }
  .xterm-underline-4 { text-decoration: dotted underline; }
  .xterm-underline-5 { text-decoration: dashed underline; }

  .xterm-strikethrough {
    text-decoration: line-through;
  }

  .xterm-screen .xterm-decoration-container .xterm-decoration {
    z-index: 6;
    position: absolute;
  }
  .xterm-decoration-overview-ruler {
    z-index: 7;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
  }
  .xterm-decoration-top {
    z-index: 2;
    position: relative;
  }
</style>