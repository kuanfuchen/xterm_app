import {storagedData, first_Rank, second_Rank} from './service/dataService.js';
import error_message from './message/unexpect_message.js';
import project from './filetype/handleProject.js';
import result from './filetype/handleResult.js';
import datafile from './filetype/handleDatafile.js';
// 由dataService檢查在哪個階層，確定階層後開啟該層指令、或是到下層指令
// 可以同時，看不同階層的物件或是同階層的物件
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
  checkedRank();
  parsingTextObj.forEach((classifyFile)=>{
    if(classifyFile.fileType === 'project')return project(classifyFile);
    if(currentlyRank.mainRank !== null){
      if(classifyFile.fileType === 'result' ) result(classifyFile);
      if(classifyFile.fileType === 'datafile' ) datafile(classifyFile);
      if(classifyFile.fileType === null){
        if(currentlyRank.childRank !== null){
          if(currentlyRank.childRank === 'result') result(classifyFile);
          if(currentlyRank.childRank === 'datafile') datafile(classifyFile);
        }else{
          project(classifyFile);
        }
      }
    }else{
      error_message(classifyFile)
    }
  })
}
export {
  receivedMesDistribution,
}