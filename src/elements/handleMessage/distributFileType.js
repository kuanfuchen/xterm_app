import { first_Rank, second_Rank} from '../service/statusService.js';
// import error_message from './message/unexpect_message.js';
import { exportedContent } from '../message/export_message.js';
import checkedEnterFormat from './distributFileType.js';
import project from '../filetype/project.js';
import result from '../filetype/result.js';
import datafile from '../filetype/datafile.js';
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
const handledMainRank = (rankFormat, fileName, commandText)=>{
  //發送至project、package搜索相同命名的id，存至statusService再回傳
  if(rankFormat === 'project') project(fileName, commandText);
  // if(rankFormat === 'package') package(fileName, commandText);
  checkedSavedRank();
}
const receivedMesDistribution = (parsingTextObj) => {
  if(parsingTextObj.rankInfo.length === 0) return;
  //[parsingTextObj{rank,'',fileName:''}
  console.log(parsingTextObj, 'parsingTextObj');
  const handledFormat = checkedEnterFormat(parsingTextObj);
  if(typeof handledFormat === 'string') return exportedContent(handledFormat);
  checkedSavedRank();
  // { commandText:'',cd/ls/view
  //   rank:'project',
  //   fileName:'',
  // }
  //如果輸入檔案不含project、package，讀取內部擁有的內容。
  //已有的project不用送到下一層，除非是最後一層
  //檢查rank階層上下關係
  // const enterCommandTextRank = {
  //   mainRank: null,
  //   mainRankName: '',
  //   childRank: null,
  //   childRankName: ''
  // }
  // const mainRankID = currentlyRank.mainRankID;
  // const childRankID = currentlyRank.childRankID;
  if(handledFormat.mainRank !== null){
    handledMainRank(handledFormat.mainRank, handledFormat.mainRankName, parsingTextObj.commandText)
    // if(handledWorstFormat.mainRank === 'project') return project(handledWorstFormat.mainRankName)
    // if(handledWorstFormat.mainRank === 'package') return package(handledWorstFormat.mainRankName, true)
  }else{
  }
}
export {
  receivedMesDistribution,
}