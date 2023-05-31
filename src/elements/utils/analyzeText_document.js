import {DisplayProjectList, DisplayResultList, DisplayDatafileList} from '../commandText/DisplayingList.js';
import { projectDir } from '../commandText/ChangingDir.js';
import { projectsList } from '../service/apiService.js';
const analyzeText = [
  {
    commandText:'cd',
    // project:(name)=> new ProjectDir(name),
    // api:(id) => projectsList(id),
    project:{
      api:async() => await projectsList(),
      handleAPIData:(api, id, name) => projectDir(api, id, name),
    },
    result:{
      api:async(projectID)=> await resultsList(projectID),
      handleAPIData:(api, id, name) => resultDir(api, id, name),
    },
    datafile:{
    }
    // 'result':
    // 'datafile':
  },{
    commandText:'ls',
    project:{
      handleAPIData:(api, id, name) => DisplayProjectList,
      api:() => projectsList(),
    }
  },{
    commandText:'view',
  },{
    commandText:'help',
  },
  // {
  //   text:'cd',
  //   project:{
  //     class:(name)=> new ProjectDir(name),
  //     api:(id) => projectsList(id),
  //   },
  //   result:{},
  //   datafile:{},
  // }
];
export default analyzeText;