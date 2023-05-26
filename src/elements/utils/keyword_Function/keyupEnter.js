const rankFileType = ['project', 'package', 'result', 'datafile', 'task'];
const keyupEnterFun = (txt, analyzeText) => {
  if(txt === undefined) return;
  const txtLower = txt.toLowerCase().trim();
  const separatedText = txtLower.split(/\s/);
  if(separatedText.length < 1) return;
  const checkedAnlayTextIndex = analyzeText.findIndex((keyObj) => separatedText[0] === keyObj.text);
  if(checkedAnlayTextIndex === -1) return txt;
  let analyTextSite;
  analyzeText.forEach((keyObj)=>{
    const index = separatedText.findIndex((text)=>text === keyObj.text);
    if(index !== -1) analyTextSite = index;
  });
  const spliceAnalyzeText = separatedText.splice(analyTextSite, 1);
  const joinSeparatedText = separatedText.join(' ');
  const separatedBackLash = joinSeparatedText.split(/\//);
  // const rankTypeKeys = Object.keys(rankType);
  // console.log(rankTypeKeys, 'rankTypeKeys');
  const handledRank = [];
  separatedBackLash.forEach((text) => {
    const rankIndex = rankFileType.findIndex((rank) => rank === text);
    if(rankIndex !== -1){
      handledRank.push({rank:text,fileName:''})
    }else{
      if(handledRank.length === 0) {
        handledRank.push({
          rank:null,
          fileName:text
        });
      }else{
        handledRank[handledRank.length - 1].fileName += text;
      }
    }
  });
  console.log(separatedText[analyTextSite], handledRank, 'handledRank')
  //TODO: cd project/name/result/name
  //TODO: cd name/datafile/name
  const parsedFinishText = {
    handledRank,
    commandText:spliceAnalyzeText
  };
  return parsedFinishText
  // separatedBackLash.forEach((text) => {
  //   const rankIndex = rankFileType.indexOf(text);
  //   if(rankIndex !== -1){
  //     const rank = rankFileType(rankIndex);
  //   }
  // });
  // console.log(analyTextSite, 'analyTextSite');
  // console.log(spliceAnalyzeText,'spliceAnalyzeText');
  // console.log(separatedText, 'separatedText');
  // console.log(separatedBackLash, 'separatedBackLash');
  
  //有project id的話，
  // const separatingTxt = txtLower.split(/\s/);
  // const beHaviorArr = [];
  // const correspondArr = [];
  //有關鍵字才開始存後面的文字到下一個關鍵字
  //cd project/xxx/result/xxx
  //ls project/xxx/datafile/xxx
  //view project/xxx/result/xxx
  // separatingTxt.forEach((text, i) => {
  //   if(!correspondArr[beHaviorArr.length - 1]) correspondArr[beHaviorArr.length - 1] = [];
  //   const textPos = analyzeText.findIndex((keyObj) => keyObj.text === text);
  //   if(textPos !== -1){
  //     if(correspondArr.length > 0 ){
  //       beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt.join(' ');
  //       beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
  //     }
  //     beHaviorArr.push({text: text, textPosition: i, correspondArr: [], fileType: null})
  //   }else{
  //     //如果兩個以上filetype怎辦?後面會覆蓋前面?
  //     if(beHaviorArr.length > 0){
  //       const indexTxt = rankFileType.indexOf(text);
  //       console.log(indexTxt, 'indexTxt')
  //       if( indexTxt > -1 ){
  //         console.log(text, 'filetype')
  //         correspondArr[beHaviorArr.length - 1].fileType = text;
  //       }else{
  //         if(!correspondArr[beHaviorArr.length - 1].txt) correspondArr[beHaviorArr.length - 1].txt = [];
  //         correspondArr[beHaviorArr.length - 1].txt.push(text);
  //       }
  //     }else{
  //       return text;
  //     }
  //   }
  // });
  // if(beHaviorArr.length === 0) return txt;
  // if(beHaviorArr.length === correspondArr.length){
  //   if(correspondArr[beHaviorArr.length - 1].txt && correspondArr[beHaviorArr.length - 1].txt.length > 0 ) beHaviorArr[beHaviorArr.length - 1].correspondArr = correspondArr[beHaviorArr.length - 1].txt.join(' ');
  //   beHaviorArr[beHaviorArr.length - 1].fileType = correspondArr[beHaviorArr.length - 1].fileType;
  // };
  // if(beHaviorArr.length > 0) beHaviorArr.sort((a, b)=>{return a.textPosition - b.textPosition});
  // console.log(beHaviorArr)
  // return beHaviorArr
};
export default keyupEnterFun;
// 
