const rankFileType = ['project', 'package', 'result', 'datafile', 'task']
const keyupEnterFun = (txt, analyzeText) => {
  if(txt === undefined) return;
  const txtLower = txt.toLowerCase().trim();
  const separatingTxt = txtLower.split(/\s/);
  const beHaviorArr = [];
  const correspondArr = [];
  //有關鍵字才開始存後面的文字到下一個關鍵字
  //cd project/xxx/result/xxx
  //ls project/xxx/datafile/xxx
  //view project/xxx/result/xxx
  separatingTxt.forEach((text, i) => {
    if(!correspondArr[beHaviorArr.length - 1]) correspondArr[beHaviorArr.length - 1] = [];
    const textPos = analyzeText.findIndex((keyObj) => keyObj.text === text);
    if(textPos !== -1){
      if(correspondArr.length > 0 ){
        beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt.join(' ');
        beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
      }
      beHaviorArr.push({text: text, textPosition: i, correspondArr: [], fileType: null})
    }else{
      //如果兩個以上filetype怎辦?後面會覆蓋前面?
      if(beHaviorArr.length > 0){
        const indexTxt = rankFileType.indexOf(text);
        console.log(indexTxt, 'indexTxt')
        if(indexTxt > 0 && correspondArr[beHaviorArr.length - 1].fileType === null){
          console.log(text, 'filetype')
          correspondArr[beHaviorArr.length - 1].fileType = text;
        }else{
          if(!correspondArr[beHaviorArr.length - 1].txt) correspondArr[beHaviorArr.length - 1].txt = [];
          correspondArr[beHaviorArr.length - 1].txt.push(text);
        }
        // if(indexTxt === -1){
        //   if(!correspondArr[beHaviorArr.length - 1].txt) correspondArr[beHaviorArr.length - 1].txt = [];
        //   correspondArr[beHaviorArr.length - 1].txt.push(text);
        // }else{
        //   correspondArr[beHaviorArr.length - 1].fileType = text;
        // }
      }else{
        return text;
      }
    }
  });
  if(beHaviorArr.length === 0) return txt;
  if(beHaviorArr.length === correspondArr.length){
    if(correspondArr[beHaviorArr.length - 1].txt && correspondArr[beHaviorArr.length - 1].txt.length > 0 ) beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt.join(' ');
    beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
  };
  if(beHaviorArr.length > 0) beHaviorArr.sort((a, b)=>{return a.textPosition - b.textPosition});
  console.log(beHaviorArr)
  return beHaviorArr
};
export default keyupEnterFun;