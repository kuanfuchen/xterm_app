import {storagedData, first_Rank, second_Rank} from './service/dataService.js';
// import error_message from './message/unexpect_message.js';
import { exportedContent } from './message/export_message.js';
import project from './filetype/handleProject.js';
import result from './filetype/handleResult.js';
import datafile from './filetype/handleDatafile.js';
// 由dataService檢查在哪個階層，確定階層後開啟該層指令、或是到下層指令
// 可以同時，看不同階層的物件或是同階層的物件
// 以傳送來的project為主要，而存檔的project為次要，以此類推。
// 傳送來為單獨result或datafile，讀取內存的project。
// 已經有result或datafile，只要給予指令就行。
// 唯有cd要記錄dataRank
// [project, result, datafile]
// const currentlyRankDataType = {
//   firstRankType: '',
//   firstRankName:'',
//   secondaryTypeRank: '',
//   secondaryNameRank: ''
// };

const currentlyRank = {
  mainRank: null,
  mainRankName: '',
  mainRankID: '',
  childRank: null,
  childRankName: '',
  childRankID: '',
};
const checkedRank = () => {
  //確認目前階層
  if(first_Rank.selectedType !== null){
    currentlyRank.mainRank = first_Rank.selectedType;
    currentlyRank.mainRankName = first_Rank.selectedTypePrefix + first_Rank.selectedTypeName + first_Rank.selectedTypeSuffix;
    currentlyRank.mainRankID = first_Rank.selectedTypeID;
    if(second_Rank.selectedType !== null){
      currentlyRank.childRank = second_Rank.selectedType;
      currentlyRank.childRankName = second_Rank.selectedTypePrefix + second_Rank.selectedTypeName + second_Rank.selectedTypeSuffix;
      currentlyRank.childRankID = second_Rank.selectedTypeID;
    }
  }
};
const receivedMesDistribution = (parsingTextObj) => {
  console.log(parsingTextObj, 'parsingTextObj');
  //[parsingTextObj{rank,'',fileName:''}
  checkedRank();
  if(parsingTextObj.rankInfo.length === 0) return;
  // { commandText:'',cd/ls/view
  //   rank:'project',
  //   fileName:'',
  // }
  //如果輸入檔案不含project、package，讀取內部擁有的內容。
  //已有的project不用送到下一層，除非是最後一層
  //檢查rank階層上下關係
  const projectIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'project');
  const packageIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'package');
  const resultIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'result');
  const datafileIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'datafile');
  const taskIndex = parsingTextObj.rankInfo.findIndex((parsingRank)=> parsingRank.rank === 'task');
  if(projectIndex > -1 && packageIndex > -1) return parsingTextObj.descript;
  if(resultIndex > -1 && datafileIndex > -1) return parsingTextObj.descript;
  if(resultIndex < projectIndex && projectIndex > -1 && resultIndex > -1 || datafileIndex < projectIndex && projectIndex > -1 && datafileIndex> -1) return parsingTextObj.descript;
  if(resultIndex > -1 && packageIndex > -1 || datafileIndex > -1 && packageIndex > -1)return parsingTextObj.descript;
  // parsingTextObj.forEach((classifyFile)=>{
  //   if(classifyFile.fileType === 'project'){
  //     return project(classifyFile);
  //   }
  //   if(currentlyRank.mainRank !== null){
  //     if(classifyFile.fileType === 'result' ) result(classifyFile);
  //     if(classifyFile.fileType === 'datafile' ) datafile(classifyFile);
  //     if(classifyFile.fileType === null){
  //       if(currentlyRank.childRank !== null){
  //         if(currentlyRank.childRank === 'result') result(classifyFile);
  //         if(currentlyRank.childRank === 'datafile') datafile(classifyFile);
  //       }else{
  //         project(classifyFile);
  //       }
  //     }
  //   }else{
  //     const transmitObject = {
  //       text:classifyFile,
  //       keyNum:13,
  //       pathway:''
  //     }
  //     exportedContent(transmitObject)
  //   }
  // })
}
export {
  receivedMesDistribution,
}