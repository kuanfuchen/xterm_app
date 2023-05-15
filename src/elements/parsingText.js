import analyzeJson from './utils/analyzeText_document.json' assert {type:'json'};
import keyAliases from './utils/keyAlises_document.js';
import { receivedMesDistribution } from './distributFileType.js'
const checkedAnalyzeText = (transferText, num)=>{
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  const analyzeText = analyzeJson.map((e)=> e);
  const specialKey = keyAliases.filter((ev) => ev.keyVal === num)[0];
  // console.log(specialKey)
  if(specialKey === undefined || specialKey.length === 0) return;
  const splitFinObj = specialKey.programing(transferText, analyzeText);
  if(typeof splitFinObj === Array) receivedMesDistribution(splitFinObj);
}
checkedAnalyzeText('cd project text -public  ls', 13);
// checkedAnalyzeText('txtls', 8)
// checkedAnalyzeText('ls', 13)
// export
// {
//   text: 'cd',
//   textPosition: 0,
//   correspondArr: [ 'text', '-public', '' ],
//   fileType: 'project'
// },
// const moveUpText = ()=>{};
// const moveDownText = ()=>{};
// const moveToRightText = ()=>{};
// const moveToLeftText = ()=> [];

// const removedText = (transferCode) => {
//   const storagedLen = transferCode.length - 1;
//   transferCode.splice(storagedLen, 1);
// };
// const checkedKeyAliases = (keyNum) => {
//   const filterAliase = keyAliases.filter((e)=> {if(keyNum === e.keyVal)return e})[0];
//   if(filterAliase.length === 0) return;
//   if(filterAliase.keyVal === 13) checkedAnalyzeText('cd text ls');
// }
// checkedKeyAliases(13);
export default checkedAnalyzeText;
