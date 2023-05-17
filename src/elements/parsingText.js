// import analyzeJson from './utils/analyzeText_document' assert {type:'json'};
import analyzeT from './utils/analyzeText_document.js';
import keyAliases from './utils/keyAlises_document.js';
import { receivedMesDistribution } from './distributFileType.js';
let storagedCode = '';
const checkedAnalyzeText = (transferText, num) => {
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  const analyzeText = analyzeT.map((e)=> e);
  const specialKey = keyAliases.filter((ev) => ev.keyVal === num)[0];
  if(specialKey === undefined) {
    storagedCode += transferText;
    console.log(storagedCode, 'storagedCode')
  };
  console.log(specialKey,'specialKey');
  if(specialKey === undefined || specialKey.length === 0) return;
  // const transferTextLower = storagedCode.toLowerCase().trim();
  // console.log(transferTextLower,'transferTextLower')
  const transferTextLower = transferText.toLowerCase().trim();
  const splitFinObj = specialKey.programing(transferTextLower, analyzeText);
  if(typeof splitFinObj === 'string') return;
  // if(typeof splitFinObj === Array) {
  console.log('Object')
  if(specialKey.key === 'enter') {
    console.log('enter')
    receivedMesDistribution(splitFinObj);
    storagedCode = '';
  };
  // }
}
checkedAnalyzeText('ls project TEXT -public cd ', 13);
// checkedAnalyzeText('txtls', 13)
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
