import { main_Rank, child_Rank} from '../service/statusService.js';
// import error_message from './message/unexpect_message.js';
import { exportedContent } from '../message/export_message.js';
import checkedCorrectRankFormat from './handleWrongFormat.js';
import projectFormat from '../filetype/project.js';
import resultFormat from '../filetype/result.js';
// import datafile from '../filetype/datafile.js';
// 由StatusService檢查在哪個階層，確定階層後開啟該層指令、或是到下層指令
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
const checkedSavedRank = () => {
  //確認目前階層
  if(main_Rank.selectedType !== null){
    currentlyRank.mainRank = main_Rank.selectedType;
    currentlyRank.mainRankName = main_Rank.selectedTypePrefix + main_Rank.selectedTypeName + main_Rank.selectedTypeSuffix;
    currentlyRank.mainRankID = main_Rank.selectedTypeID;
    if(child_Rank.selectedType !== null){
      currentlyRank.childRank = child_Rank.selectedType;
      currentlyRank.childRankName = child_Rank.selectedTypePrefix + child_Rank.selectedTypeName + child_Rank.selectedTypeSuffix;
      currentlyRank.childRankID = child_Rank.selectedTypeID;
    }
  }
};
const handledMainRank = (rankFormat, fileName, isExportMeg, commandText)=>{
  //發送至project、package搜索相同命名的id，存至statusService再回傳
  if(rankFormat === 'project') projectFormat(fileName, commandText, isExportMeg);
  // if(rankFormat === 'package') package(fileName, commandText);
  checkedSavedRank();
}
const handledChildRank = (rankFormat, fileName, isExportMeg, commandText)=>{
  if(rankFormat === 'result') resultFormat(fileName, commandText, isExportMeg)
}
const receivedMegDistribution = (transmitObject) => {
  const parsingTextObj = transmitObject.text;
  
  if(parsingTextObj.rankInfo.length === 0) return;
  const formatAssort = checkedCorrectRankFormat(parsingTextObj);
  if(typeof formatAssort === 'string') return exportedContent(formatAssort);
  checkedSavedRank();
  // { commandText:'',cd/ls/view
  //   rank:'project',
  //   fileName:'',
  // }
  //如果輸入檔案不含project、package，讀取內部擁有的內容。
  //已有的project不用送到下一層，除非是最後一層
  //檢查rank階層上下關係
  //
  // const enterCommandTextRank = {
  //   mainRank: null,
  //   mainRankName: '',
  //   childRankExport:false,
  //   childRank: null,
  //   childRankName: ''
  // }
  //優先使用傳入資料mainRank，mainRank沒有資料由saveData取出。都沒有直接輸出沒有資料
  if(formatAssort.mainRank !== null){
    handledMainRank(formatAssort.mainRank, formatAssort.mainRankName, formatAssort.childRankExport, parsingTextObj.commandText );
    // if(handledWorstFormat.mainRank === 'project') return project(handledWorstFormat.mainRankName)
    // if(handledWorstFormat.mainRank === 'package') return package(handledWorstFormat.mainRankName, true)
  }
  if(formatAssort.childRank !== null){
    handledChildRank(formatAssort.childRank, formatAssort.childRankName, formatAssort.childRankExport, parsingTextObj.commandText);
  }
}
export {
  receivedMegDistribution,
}