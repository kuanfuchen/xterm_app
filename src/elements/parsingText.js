// import analyzeJson from './utils/analyzeJSext_document' assert {type:'json'};
import analyzeJS from './utils/analyzeText_document.js';
import keyAliases from './utils/keyAlises_document.js';
import { receivedMesDistribution } from './distributFileType.js';
import { exportedContent } from './message/export_message.js';
// import { removedTextContentExport } from './message/export_message.js'
// import receivedMessage from './message/message.js';
let storagedCode = '';
const checkedanalyzeText = (transferText, num) => {
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  const analyzeText = analyzeJS.map((e)=> e);
  const specialKey = keyAliases.filter((ev) => ev.keyVal === num)[0];
  if(specialKey === undefined) {
    storagedCode += transferText;
    console.log(transferText, 'transferText')
    exportedContent(transferText)
    // return transferText;
  };
  console.log(specialKey,'specialKey');
  if(specialKey === undefined || specialKey.length === 0) return;
  const transferTextLower = storagedCode.toLowerCase().trim();
  // console.log(transferTextLower,'transferTextLower')
  // const transferTextLower = transferText.toLowerCase().trim();
  const splitFinishType = specialKey.programing(transferTextLower, analyzeText);
  if(typeof splitFinishType === 'string' ){
    // removedTextContentExport(splitFinishType)
    // return splitFinishType
    exportedContent(splitFinishType);
    return
  };
  // if(typeof splitFinishType === Array) {
  if(specialKey.key === 'enter') {
    receivedMesDistribution(splitFinishType);
    storagedCode = '';
  };
  // }
}
// checkedanalyzeJSext('ls project TEXT -public cd ', 13);
// checkedanalyzeJSext('txtls', 13)
// checkedanalyzeJSext('ls', 13)
export default checkedanalyzeText;
//