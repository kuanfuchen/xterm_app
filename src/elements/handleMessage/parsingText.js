import analyzeJS from '../utils/analyzeText_document.js';
import keyCode from '../utils/keyFunc.js';
import { receivedMegDistribution } from './distributFileType.js';
import { exportedContent } from '../message/export_message.js';
let storagedCode = '';
const regExpBackLash = /\//g;
const checkedanalyzeText = (transferText) => {
  //讀取好需要的keyup  && command將文字切割後傳至下方distributionfiletype接收
  
  const analyzeText = analyzeJS.map((e)=> e);
  const keyword = keyCode.filter((ev) => ev.key === transferText)[0];
  
  if(keyword === undefined) {
    console.log(transferText, 'transferText');
    if(transferText === '/') {
      console.log('/');
      const judgeBacksLash = checkedTypeText(storagedCode, transferText);
      storagedCode += judgeBacksLash
    }else{
      storagedCode += transferText;
    }
    const transmitObject = {
      text: transferText,
      transferText
    };
    exportedContent(transmitObject);
    return
  };
  return
  if(keyword === undefined || keyword.length === 0) return;
  const parsingTextFinishArr = keyword.programing(storagedCode, analyzeText);
  const transmitObject = {
    text: parsingTextFinishArr,
    transferText
  };
  if(transferText === 'Backspace'){
    storagedCode = parsingTextFinishArr;
    return exportedContent(transmitObject);
  };
  if(typeof parsingTextFinishArr === 'string'){
    exportedContent(transmitObject);
    storagedCode = '';
    return
  };
  receivedMegDistribution(transmitObject);
  storagedCode = '';
}
const checkedTypeText = (txt, transferText) => {
  const typeTxt = ['/project/', '/result/', '/datafile/', '/package/', '/task/'];
  //檢測是否有以上字眼剪下
  //輸入/時候，檢查字眼是否是/project/，/result/，/datafile/。。。
  let isTxt = false;
  const wholeTxt = txt + transferText
  for(let i = 0 ; typeTxt.length > i ; i++){
    const textLen =  typeTxt[i].length;
    const txtlen = wholeTxt.length;
    const remainTxtLen = txtlen - textLen;
    if(remainTxtLen < 0) return '/';
    const txtSlice = wholeTxt.slice(remainTxtLen, txtlen);
    console.log(txtSlice, 'txtSlice')
    if(typeTxt[i] === txtSlice){
      isTxt = true
    }
  }
  if(isTxt){
    isTxt = false;
    return '/';
  }else{
    return '$';
  }
  //檢查/type是否正確。不正確變更/符號，只求切割文字正確
  //檢查/是否接正確的type，不正確變更符號
}
export default checkedanalyzeText;