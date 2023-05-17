<template>
  <div>
    <div ref="xterm" class="xtermStyle" style="background:black"></div>
  </div>
</template>
<script setup>
  // import "./style.css";
  import { Terminal } from "xterm";
  import { FitAddon} from 'xterm-addon-fit';
  import { ref, onMounted} from 'vue';
  // import { WebLinksAddon } from 'xterm-addon-web-links';
  // import {LinkProvider} from 'xterm-link-provider';
  import {bdpDataBase} from './service/apiService.js';
  import checkedAnalyzeText from './parsingText.js';
  const onloadXtermElement = defineEmits(['onload']);
  // const defaultTheme = {
  //   foreground: '#ffffff', // 字体
  //   background: '#1b212f', // 背景色
  //   cursor: '#ffffff', // 设置光标
  //   selection: 'rgba(255, 255, 255, 0.3)',
  //   black: '#000000',
  //   brightBlack: '#808080',
  //   red: '#ce2f2b',
  //   brightRed: '#f44a47',
  //   green: '#00b976',
  //   brightGreen: '#05d289',
  //   yellow: '#e0d500',
  //   brightYellow: '#f4f628',
  //   magenta: '#bd37bc',
  //   brightMagenta: '#d86cd8',
  //   blue: '#1d6fca',
  //   brightBlue: '#358bed',
  //   cyan: '#00a8cf',
  //   brightCyan: '#19b8dd',
  //   white: '#e5e5e5',
  //   brightWhite: '#ffffff'
  // };
  const terminal = new Terminal({
    fontSize: 18,
    cursorBlink: true,
    // rows: _rows.value,
    rows:1000,
    cols:1000,
    rendererType: 'canvas',
    fontWeight:700,
    // theme: defaultTheme,
  });
  terminal.prompt = () => {
    terminal.write(`\r\n\x1b[28m\u001b[32muser>`);
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
      checkedAnalyzeText(e.key, e.keyCode);
    })
  };
  onMounted(() => {
    onloadXtermElement('onload', bdpDataBase);
    initXterm();
  });
</script>
<style>
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
    /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
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
  .xtermStyle{
    width: 100vw;
    height:100%;
    text-align:left;
    padding-left: 10px;
    background: #000;
  }
</style>