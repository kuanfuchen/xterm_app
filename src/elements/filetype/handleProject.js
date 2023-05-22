// project儲存
// import { ProjectDir} from '../commandText/ChangingDir.js';
import { DisplayProjectList } from '../commandText/DisplayingList.js';
import { projectsList } from '../service/apiService.js';
import analyzeText from '../utils/analyzeText_document.js';
import {exportedContent} from '../message/export_message.js'
const projectFormat = async (commandTextObj)=>{
  console.log(commandTextObj);
  // class放入物件內
  analyzeText.forEach(async(commdanProject)=>{
    if(commdanProject.text === commandTextObj.text){
      const projectBehavior = commdanProject.project();
      const exportProjectText= await projectBehavior.displayContent(projectsList);
      exportedContent({
        keyNum: 13,
        text: exportProjectText
      })
    }
  })
  // const handleText = analyzeText.filter((item)=>item.text === commandTextObj.text)[0];
  // const handleProgram =  handleText.project(2233)
  // handleProgram.viewList()
  // console.log(handleProgram, 'handleText')
  // console.log('projectFormat');
  //以不同行為分類至其他位置
}
const drawList = async(id, name, pageIndex = 0)=>{
  const classProjectList = new DisplayProjectList();
  const test= await classProjectList.viewList(projectsList);
  console.log(test,'test')
}
export default projectFormat;