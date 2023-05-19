// import analyzeJson from './utils/analyzeJSext_document' assert {type:'json'};
import analyzeJS from './utils/analyzeText_document.js';
import keyAliases from './utils/keyAlises_document.js';
import { receivedMesDistribution } from './distributFileType.js';
import { exportedContent } from './message/export_message.js';
let storagedCode = '';
const checkedanalyzeText = (transferText, keyNum) => {
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  const analyzeText = analyzeJS.map((e)=> e);
  const keyword = keyAliases.filter((ev) => ev.keyVal === keyNum)[0];
  if(keyword === undefined) {
    storagedCode += transferText;
    console.log(transferText, 'transferText')
    const transmitObject = {
      text: transferText,
      keyNum
    }
    exportedContent(transmitObject)
    return
  };
  if(keyword === undefined || keyword.length === 0) return;
  const splitFinishType = keyword.programing(storagedCode, analyzeText);
  const transmitObject = {
    text: splitFinishType,
    keyNum
  }
  if(typeof splitFinishType === 'string'){
    storagedCode = '';
    exportedContent(transmitObject);
    console.log(transmitObject, 'transmitObject')
    return
  };
  receivedMesDistribution(splitFinishType);
  storagedCode ='';
}
// checkedanalyzeJSext('ls project TEXT -public cd ', 13);
// checkedanalyzeJSext('txtls', 13)
// checkedanalyzeJSext('ls', 13)
export default checkedanalyzeText;
//