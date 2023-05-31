const checkedCorrectRankFormat = (parsingTextObj)=>{
  //檢測輸入rank是否錯誤
  const projectIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'project');
  const packageIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'package');
  const resultIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'result');
  const datafileIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'datafile');
  const taskIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'task');
  if(projectIndex > -1 && packageIndex > -1) return parsingTextObj.descript;
  if(resultIndex > -1 && datafileIndex > -1) return parsingTextObj.descript;
  if(resultIndex < projectIndex && projectIndex > -1 && resultIndex > -1 || datafileIndex < projectIndex && projectIndex > -1 && datafileIndex> -1) return parsingTextObj.descript;
  if(resultIndex > -1 && packageIndex > -1 || datafileIndex > -1 && packageIndex > -1)return parsingTextObj.descript;
  const enterCommandTextRank = {
    mainRank: null,
    mainRankName: '',
    childRankExport:false,
    childRank: null,
    childRankName: ''
  }
  if(projectIndex > -1) {
    enterCommandTextRank.mainRank = parsingTextObj.rankInfo[projectIndex].rank;
    enterCommandTextRank.mainRankName = parsingTextObj.rankInfo[projectIndex].fileName;
  }else if(packageIndex > -1){
    enterCommandTextRank.mainRank = parsingTextObj.rankInfo[packageIndex].rank;
    enterCommandTextRank.mainRankName = parsingTextObj.rankInfo[packageIndex].fileName;
  };
  
  if(resultIndex > -1){
    enterCommandTextRank.childRank = parsingTextObj.rankInfo[resultIndex].rank;
    enterCommandTextRank.childRankName = parsingTextObj.rankInfo[resultIndex].fileName;
    enterCommandTextRank.childRankExport = true;
  }else if(datafileIndex > -1){
    enterCommandTextRank.childRank = parsingTextObj.rankInfo[datafileIndex].rank;
    enterCommandTextRank.childRankName = parsingTextObj.rankInfo[datafileIndex].fileName;
    enterCommandTextRank.childRankExport = true;
  }
  console.log(enterCommandTextRank, 'enterCommandTextRank')
  return enterCommandTextRank;
}
export default checkedCorrectRankFormat;