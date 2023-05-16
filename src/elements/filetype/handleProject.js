// import { ProjectDir} from '../commandText/ChangingDir.js';
import { DisplayProjectList } from '../commandText/DisplayingList.js';
import { projectsList } from '../service/apiService.js';
// import analyzeJSON from '../utils/analyzeText_document.json' assert {type:'json'};
import analyzeText from '../utils/analyzeText_document.js';
const projectFormat = (commandTextObj)=>{
  console.log(commandTextObj);
  // class放入物件內
  const handleText = analyzeText.filter((item)=>item.text === commandTextObj.text)[0];
  const handleProgram =  handleText.project(2233)
  handleProgram.viewList()
  console.log(handleProgram, 'handleText')
  // console.log('projectFormat');
  //以不同行為分類至其他位置
}
const drawList = (id, name, pageIndex = 0)=>{
  const classProjectList = new DisplayProjectList(id, name);
  classProjectList(projectsList)
}

export default projectFormat;