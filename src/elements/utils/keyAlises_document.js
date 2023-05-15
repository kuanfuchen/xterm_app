const rankFileType = ['project', 'package', 'result', 'datafile', 'task']
const keyupEnterFun = (txt, analyzeText) => {
  if(txt === undefined) return;
  const separatingTxt = txt.split(/\s/);
  let beHaviorArr = [];
  const correspondArr = [];
  separatingTxt.forEach((txt, i) => {
    if(!correspondArr[beHaviorArr.length - 1]) correspondArr[beHaviorArr.length - 1] = [];
    const textPos = analyzeText.findIndex((keyObj) => keyObj.text === txt);
    if(textPos !== -1){
      if(correspondArr.length > 0 ){
        // beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1];
        beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt;
        beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
      }
      beHaviorArr.push({text: txt, textPosition:i, correspondArr: [], fileType: null})
    }else{
      //如果兩個以上filetype怎辦?後面會覆蓋前面?
      const indexTxt = rankFileType.indexOf(txt);
      if(indexTxt === -1){
        if(!correspondArr[beHaviorArr.length - 1].txt) correspondArr[beHaviorArr.length - 1].txt = [];
        correspondArr[beHaviorArr.length - 1].txt.push(txt)
      }else{
        correspondArr[beHaviorArr.length - 1].fileType = txt;
      }
      // correspondArr[beHaviorArr.length - 1].push(txt)
    }
  })
  if(beHaviorArr.length > 0) beHaviorArr.sort((a,b)=>{return a.textPosition - b.textPosition});
  // console.log(beHaviorArr,'beHaviorArr')
  return beHaviorArr
}
const keyupBackspaceFun = (txt) => {
  //remove text site
  if(txt === undefined) return;
  const separatingTxt = txt.split('');
  const storagedLen = separatingTxt.length - 1;
  separatingTxt.splice(storagedLen, 1);
  const text = separatingTxt.join('');
  console.log(text,'text')
  return text
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