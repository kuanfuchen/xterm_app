import analyzeText from '../utils/analyzeText_document.js';
import { exportContentToXterm } from '../message/export_message.js';
const resultFormat = async(fileName, commandText, isExportMeg, resultId)=>{
  const exportResultInfo = {
    keyCode:'Enter',
    commandText,
    correctResultInfo:[]
  }
  console.log(resultId,'resultId')
  analyzeText.forEach(async(item)=>{
    if(commandText === item.commandText){
      const api = item.result.api();
      exportResultInfo.correctResultInfo = await item.result.handleAPIData(api, resultId, fileName);
      await exportContentToXterm(exportProjectInfo)
    }
  })
}
export default resultFormat;