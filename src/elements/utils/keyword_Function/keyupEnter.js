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
    const index = separatedText.findIndex((text) => text === keyObj.text);
    if(index !== -1) analyTextSite = index;
  });
  const spliceAnalyzeText = separatedText.splice(analyTextSite, 1);
  const joinSeparatedText = separatedText.join(' ');
  const separatedBacksLash = joinSeparatedText.split(/\//);
  const rankInfo = [];
  //辨識rank，相符合+1位置存檔name，再次辨識rank，以此類推，若不是直接回傳error
  separatedBacksLash.forEach((text, i) => {
    const checkedRankType = i % 2 === 0 ? true : false;
    if(checkedRankType){
      const rankIndex = rankFileType.indexOf(text);
      if(rankIndex !== -1){
        rankInfo.push({rank:text,fileName:''});
      }else{
        rankInfo.length = 0;
        return
      }
    }else{
      if(rankInfo.length > 0) rankInfo[rankInfo.length - 1].fileName += text;
    }
  });
  if(rankInfo.length === 0) return txt;
  let findCoverRank = -1;
  const checkedCoverRank = [];
  console.log(rankInfo , 'rankInfo')
  rankInfo.forEach((item)=>{
    if(checkedCoverRank.length === 0){checkedCoverRank.push(item.rank)}
    else{
      findCoverRank = checkedCoverRank.indexOf(item.rank);
      if(findCoverRank !== -1) return
    }
  })
  if(findCoverRank !== -1) return txt;
  const parsedFinishText = {
    rankInfo,
    commandText: spliceAnalyzeText[0],
    descript:txt
  };
  if(parsedFinishText.commandText.length === 0) return txt;
  return parsedFinishText;
};
export default keyupEnterFun;
// 
