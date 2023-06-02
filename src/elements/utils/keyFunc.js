import keyupBackspaceFun from './keyword_Function/keyupBackspace.js';
import keyupEnterFun from './keyword_Function/keyupEnter.js';
// import keyupTabFun from './keyword_Function/keyupTab.js';
const analyzeText = [{
  key: "Enter",
  programing:(text,analyzeText) => keyupEnterFun(text,analyzeText),
},{
  key: "Backspace",
  programing:(text) => keyupBackspaceFun(text),
},{
  key:"tab",
  // programing:(text) => keyupTabFun(text)
}];
export default analyzeText;