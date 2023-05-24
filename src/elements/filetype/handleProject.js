// project儲存
// import { ProjectDir} from '../commandText/ChangingDir.js';
import { projectsList } from '../service/apiService.js';
import analyzeText from '../utils/analyzeText_document.js';
import { exportedContent } from '../message/export_message.js';
import {storagedData, first_Rank, second_Rank } from '../service/dataService.js';
const projectFormat = async (commandTextObj)=>{
  console.log(commandTextObj);
  // class放入物件內
  analyzeText.forEach(async(commdanProject)=>{
    if(commdanProject.text === commandTextObj.text){
      let pathway = '';
      const correspondName = commandTextObj.correspondArr;
      const projectBehavior = commdanProject.project(correspondName);
      const exportProjectText = await projectBehavior.displayContent(projectsList);
      if(commandTextObj.text === 'cd' && exportProjectText !== '') {
        pathway = exportProjectText;
        storagedProject(projectObject);
      };
      exportedContent({
        keyNum: 13,
        text: exportProjectText,
        pathway,
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
const storagedProject = ( projectObject ) => {
  console.log(projectObject, 'projectObject')
  storagedData.project.id = projectObject.id;
  storagedData.project.name = projectObject.name;
  storagedData.project.updatedAt = projectObject.updatedAt;
  storagedData.project.createdAt = projectObject.createdAt;
}
export default projectFormat;