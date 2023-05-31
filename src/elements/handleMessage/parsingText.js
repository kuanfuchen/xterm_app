// import analyzeJson from './utils/analyzeJSext_document' assert {type:'json'};
import analyzeJS from '../utils/analyzeText_document.js';
import keyCode from '../utils/keyCode.js';
import { receivedMesDistribution } from './distributFileType.js';
import { exportedContent } from '../message/export_message.js';
let storagedCode = '';
const checkedanalyzeText = (transferText) => {
  console.log(transferText, 'transferText')
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  const analyzeText = analyzeJS.map((e)=> e);
  const keyword = keyCode.filter((ev) => ev.key === transferText)[0];
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
  const parsingTextFinishArr = keyword.programing(storagedCode, analyzeText);
  // parsingTextFinishArr.filter(()=>{
  // })
  const transmitObject = {
    text: parsingTextFinishArr,
    transferText
  }
  if(typeof parsingTextFinishArr === 'string'){
    storagedCode = '';
    exportedContent(transmitObject);
    return
  };
  // receivedMesDistribution(parsingTextFinishArr);
  receivedMesDistribution(transmitObject);
  storagedCode = '';
}
export default checkedanalyzeText;