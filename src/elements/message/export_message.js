//傳輸與建立文字格式，接收外來的object
import { Subject } from 'rxjs';
const _exportTextContent$ = new Subject({});
const transmitInfoToXterm = {
  transferText:'',
  fileType:'project',
  pathway:{
    isUsed:false,
    name:'',
  },
  list:{
    isUsed:false,
    exportText:''
  },
  table:{
    isUsed:false,
    exportText:''
  }
}
const exportPrompt = (fileTypeInfo) => {
  fileTypeInfo.correctProjectInfo.forEach((fileType)=>{
    transmitInfoToXterm.pathway.isUsed = true;
    transmitInfoToXterm.pathway.name = fileType.name;
    transmitInfoToXterm.transferText = 'pathway';
  })
  exportedContent(transmitInfoToXterm)
}
const exportContentToXterm = (fileTypeInfo) => {
  console.log(fileTypeInfo, 'fileTypeInfo');
  if( fileTypeInfo.commandText === 'cd' ) {
    if( fileTypeInfo.correctProjectInfo.length === 1 ) exportPrompt(fileTypeInfo);
  }
};
const exportedContent = (textContent)=>{
  _exportTextContent$.next( textContent );
}
const exportTextContent$ =_exportTextContent$.asObservable();
export {
  exportedContent,
  exportContentToXterm,
  exportTextContent$,
}