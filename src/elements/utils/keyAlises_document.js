import keyupBackspaceFun from './keyword_Function/keyupBackspace.js';
import keyupEnterFun from './keyword_Function/keyupEnter.js';
const analyzeText = [{
  "key": "enter",
  "keyVal": 13,
  "programing":(text,analyzeText) => keyupEnterFun(text,analyzeText),
},{
  "key": "backspace",
  "keyVal":8,
  "programing":(text) => keyupBackspaceFun(text),
}]
export default analyzeText;