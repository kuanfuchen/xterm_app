import {DisplayProjectList, DisplayResultList, DisplayDatafileList} from '../commandText/DisplayingList.js';
import { ProjectDir } from '../commandText/ChangingDir.js';
import { projectsList } from '../service/apiService.js'
const analyzeText = [
  {
    text:'cd',
    // project:(name)=> new ProjectDir(name),
    // api:(id) => projectsList(id),
    project:{
      api:(id) => projectsList(id),
      handleAPIData:(api, id, name) => ProjectDir(api, id, name),
    }
    // 'result':
    // 'datafile':
  },{
    'text':'ls',
    'project':(id)=> new DisplayProjectList(id),
    'result':(id) => new DisplayResultList(id),
    'datafile':(id) => new DisplayDatafileList(id),
    // 'project':{
    //   class:(id)=> new DisplayProjectList(id),
    //   // api:
    // }
  },{
    'text':'view',
  },{
    'text':'help',
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