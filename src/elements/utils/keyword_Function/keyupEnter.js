const rankFileType = ['project', 'package', 'result', 'datafile', 'task'];
const keyupEnterFun = (txt, analyzeText) => {
  if(txt === undefined) return;
  const txtLowerCase = txt.toLowerCase().trim();
  const separatedText = txtLowerCase.split(/\s/);

  if(separatedText.length < 1) return;
  const checkedAnlayTextIndex = analyzeText.findIndex((keyObj) => separatedText[0] === keyObj.commandText);
  console.log(checkedAnlayTextIndex, 'checkedAnlayTextIndex')
  if(checkedAnlayTextIndex === -1) return txt;
  let analyTextSite;
  analyzeText.forEach((keyObj)=>{
    const index = separatedText.findIndex((text) => text === keyObj.text);
    if(index !== -1) analyTextSite = index;
  });
  const analyzeCommandText = separatedText.splice(analyTextSite, 1);
  // 移去command text
  const joinSeparatedText = separatedText.join(/\s/);
  console.log(joinSeparatedText, 'joinSeparatedText')
  // 移去指令再組合
  const combinedText = /\//g;
  const separatedBacksLash = joinSeparatedText.split(combinedText);
  console.log(separatedBacksLash, 'separatedBacksLash');
  //['project','project','result','result'];project取名project,result取名result
  // const separatedBacksLash = joinSeparatedText.split(/\//);
  const rankInfo = [];
  //cd project/projectName/resultName
  //cd projectName/resultName
  //cd 
  //辨識rank，相符合+1位置存檔name，再次辨識rank，以此類推，若不是直接回傳error(X)
  //直接indexOf搜索project、result、datafile字眼，如果取相同名稱也會錯誤
  //project/改變路徑名稱?
  //如果projectname有result字眼
  // project/projectname
  // result/resultname
  // datafile/datafilename
  // project/projectname/new name
  // project/projectname/.../.../...
  // project/~~~/result/~~
  // const test = [
  //   {
  //     filetype:'project',
  //     name:['projectname','New name','...'],
  //     commandText:'cd',
  //   },{
  //     fileType:'result',
  //     name:['...'],
  //     commandText:'cd',
  //   }
  // ]
  // $project/result/$result/resultname
  separatedBacksLash.forEach((text) => {
    const checkedRankType = rankFileType.indexOf(text);
    if(checkedRankType !== -1){
      if(rankInfo.length > 0 && rankInfo[rankInfo.length - 1].otherWord.length === 0)return rankInfo[rankInfo.length - 1].otherWord.push(text);
      rankInfo.push({
        fileType: text,
        otherWord:[],
        commandText:analyzeCommandText[0]
      })      
    }else{
      if(rankInfo.length > 0) rankInfo[rankInfo.length - 1].otherWord.push(text);
    }
  })
  console.log(rankInfo, 'rankInfo')
  return txt
  // 如果project有'result'或是result有'project'該如何切割
  // ['project','projectname','...','result','resultname','...']
  
  // separatedBacksLash.forEach((text, i) => {
  //   const checkedRankType = i % 2 === 0 ? true : false;
  //   if(checkedRankType){
  //     const rankIndex = rankFileType.indexOf(text);
  //     if(rankIndex !== -1){
  //       rankInfo.push({rank:text,fileName:''});
  //     }else{
  //       rankInfo.length = 0;
  //       return
  //     }
  //   }else{
  //     if(rankInfo.length > 0) rankInfo[rankInfo.length - 1].fileName += text;
  //   }
  // });
  // if(rankInfo.length === 0) return txt;
  // let findCoverRank = -1;
  // const checkedCoverRank = [];
  // rankInfo.forEach((item)=>{
  //   if(checkedCoverRank.length === 0){checkedCoverRank.push(item.rank)}
  //   else{
  //     findCoverRank = checkedCoverRank.indexOf(item.rank);
  //     if(findCoverRank !== -1) return
  //   }
  // })
  // if(findCoverRank !== -1) return txt;
  // const parsedFinishText = {
  //   rankInfo,
  //   commandText: analyzeCommandText[0],
  //   descript:txt
  // };
  // if(parsedFinishText.commandText.length === 0) return txt;
  // return parsedFinishText;
};
export default keyupEnterFun;
