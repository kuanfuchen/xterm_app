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
const exportPrompt = (projectInfo)=>{
  projectInfo.correctProjectInfo.forEach((project)=>{
    transmitInfoToXterm.pathway.isUsed = true;
    transmitInfoToXterm.pathway.name = project.name;
    transmitInfoToXterm.transferText = 'pathway';
  })
  exportedContent(transmitInfoToXterm)
}
const exportContentToXterm = (fileTypeInfo) => {
  console.log(fileTypeInfo, 'fileTypeInfo');
  if(fileTypeInfo.commandText === 'cd' ) {
    if(fileTypeInfo.correctProjectInfo.length === 1) exportPrompt(fileTypeInfo);
  }
};
const exportedContent = (textContent)=>{
  _exportTextContent$.next(textContent);
}
const exportTextContent$ =_exportTextContent$.asObservable();
export {
  exportedContent,
  exportContentToXterm,
  exportTextContent$,
}