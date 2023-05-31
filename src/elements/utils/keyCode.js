import keyupBackspaceFun from './keyword_Function/keyupBackspace.js';
import keyupEnterFun from './keyword_Function/keyupEnter.js';
const analyzeText = [{
  key: "Enter",
  // "keyVal": 13,
  programing:(text,analyzeText) => keyupEnterFun(text,analyzeText),
},{
  key: "Backspace",
  // "keyVal":8,
  programing:(text) => keyupBackspaceFun(text),
}];
export default analyzeText;