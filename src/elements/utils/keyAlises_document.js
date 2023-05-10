const keyupEnterFun = (txt) => {
  console.log(txt,'txt')
  if(txt === undefined)return;
  const separatingTxt = txt.split(/\s/);
  return separatingTxt
}
const keyupBackspaceFun = (txt) => {
  if(txt === undefined) return;
  const storagedLen = txt.length - 1;
  txt.splice(storagedLen, 1);
}
const analyzeText = [{
  "key":"enter",
  "keyVal":13,
  "programing":(text)=> keyupEnterFun(text),
},{
  "key":"backspace",
  "keyVal":8,
  "programing":(text)=>keyupBackspaceFun(text)
}]
// module.exports = analyzeText;
export default analyzeText