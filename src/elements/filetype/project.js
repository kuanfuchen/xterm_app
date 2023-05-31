// project儲存
import analyzeText from '../utils/analyzeText_document.js';
import { exportContentToXterm } from '../message/export_message.js';
import { main_Rank } from '../service/statusService.js';
const projectFormat = async(fileName, commandText, isExportMeg, projectId, keyCode) => {
  console.log(keyCode, 'keyCode')
  const exportProjectInfo = {
    keyCode: 'Enter',
    commandText,
    correctProjectInfo:[]
  }
  analyzeText.forEach(async(item) => {
    if(commandText === item.commandText){
      console.log(fileName,'fileName')
      const api = await item.project.api();
      exportProjectInfo.correctProjectInfo = await item.project.handleAPIData(api, projectId, fileName);
      if(!isExportMeg) await exportContentToXterm(exportProjectInfo)
    }
  })
  console.log(main_Rank, 'main_Rank');
};
export default projectFormat;