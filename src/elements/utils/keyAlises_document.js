const rankFileType = ['project', 'package', 'result', 'datafile', 'task']
const keyupEnterFun = (txt, analyzeText) => {
  if(txt === undefined) return;
  const separatingTxt = txt.split(/\s/);
  const beHaviorArr = [];
  const correspondArr = [];
  //有關鍵字才開始存後面的文字到下一個關鍵字
  separatingTxt.forEach((text, i) => {
    if(!correspondArr[beHaviorArr.length - 1]) correspondArr[beHaviorArr.length - 1] = [];
    const textPos = analyzeText.findIndex((keyObj) => keyObj.text === text);
    if(textPos !== -1){
      if(correspondArr.length > 0 ){
        beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt;
        beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
      }
      beHaviorArr.push({text: text, textPosition:i, correspondArr: [], fileType: null})
    }else{
      //如果兩個以上filetype怎辦?後面會覆蓋前面?
      
      if(beHaviorArr.length > 0){
        const indexTxt = rankFileType.indexOf(text);
        if(indexTxt === -1){
          beHaviorArr
          if(!correspondArr[beHaviorArr.length - 1].txt) correspondArr[beHaviorArr.length - 1].txt = [];
          correspondArr[beHaviorArr.length - 1].txt.push(text)
        }else{
          correspondArr[beHaviorArr.length - 1].fileType = text;
        }
      }else{
        return text;
      }
    }
  });
  if(beHaviorArr.length === 0) return txt;
  if(beHaviorArr.length === correspondArr.length){
    beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt;
    beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
  }
  if(beHaviorArr.length > 0) beHaviorArr.sort((a,b)=>{return a.textPosition - b.textPosition});
  return beHaviorArr
}
const keyupBackspaceFun = (txt) => {
  console.log('keyupBackspaceFun',txt)
  //remove text site
  if(txt === undefined) return;
  const separatingTxt = txt.split('');
  const storagedLen = separatingTxt.length - 1;
  separatingTxt.splice(storagedLen, 1);
  const text = separatingTxt.join('');
  console.log(text,'text');
  return text;
}
const analyzeText = [{
  "key": "enter",
  "keyVal": 13,
  "programing":(text,analyzeText) => keyupEnterFun(text,analyzeText),
},{
  "key": "backspace",
  "keyVal":8,
  "programing":(text) => keyupBackspaceFun(text)
}]
// module.exports = analyzeText;
export default analyzeText