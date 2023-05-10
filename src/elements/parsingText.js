import analyzeText from './utils/analyzeText_document.json' assert {type:'json'};
import keyAliases from './utils/keyAlises_document.js';
const checkedAnalyzeText = (transferText, num)=>{
  const behaviorText = analyzeText.map((e)=> e);
  const specialKey = keyAliases.filter((ev) => ev.keyVal === num)[0];
  if(specialKey.length === 0) return;
  const separatedTextArr = specialKey.programing(transferText);
  if(num !== 13) return;
  let beHaviorArr = [];
  behaviorText.forEach((txt)=>{
    const textPosition = separatedTextArr.findIndex((indexText) => txt.text === indexText);
    if(textPosition !== -1){
      beHaviorArr.push({text:txt.text, textPosition})
    }
  });
  // behaviorText.forEach((text)=> {
  //   const textPosition = separatedTextArr.findIndex((indexText) => text === indexText);
  //   if(textPosition !== -1){
  //     beHaviorArr.push({text, textPosition})
  //   }
  // })
  const test = [];
  if(beHaviorArr.length > 0){
    beHaviorArr.sort((a,b)=>{return a.textPosition - b.textPosition});
    console.log(separatedTextArr, 'separatedTextArr');
    separatedTextArr.map((sep, i) => {
      for(let j = 0 ; beHaviorArr.length > j ; j++){
        // test[j] = []
        if(beHaviorArr[j].textPosition !== i){
          console.log(sep)
          // test[j].push(sep)
        }
      }
    })
  }
  // console.log(test, 'test')
  // return beHaviorArr;
  //之後如何取出需要的文字與順序?
  // [{alazyText, text}]
}
checkedAnalyzeText('ls text -public cd publicText ls', 13);

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
