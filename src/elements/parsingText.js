// import analyzeJson from './utils/analyzeJSext_document' assert {type:'json'};
import analyzeJS from './utils/analyzeText_document.js';
import keyNumber from './utils/keyCode.js';
import { receivedMesDistribution } from './distributFileType.js';
import { exportedContent } from './message/export_message.js';
let storagedCode = '';
const checkedanalyzeText = (transferText) => {
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  const analyzeText = analyzeJS.map((e)=> e);
  const keyword = keyNumber.filter((ev) => ev.key === transferText)[0];
  if(keyword === undefined) {
    storagedCode += transferText;
    const transmitObject = {
      text: transferText,
      transferText
    }
    exportedContent(transmitObject)
    return
  };
  if(keyword === undefined || keyword.length === 0) return;
  const splitFinishType = keyword.programing(storagedCode, analyzeText);
  const transmitObject = {
    text: splitFinishType,
    transferText
  }
  if(typeof splitFinishType === 'string'){
    storagedCode = '';
    exportedContent(transmitObject);
    return
  };
  receivedMesDistribution(splitFinishType);
  storagedCode = '';
}
export default checkedanalyzeText;