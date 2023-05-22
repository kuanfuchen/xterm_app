import {DisplayProjectList, DisplayResultList, DisplayDatafileList} from '../commandText/DisplayingList.js';

const analyzeText = [
  {
    'text':'cd',
    'project':(id)=> new DisplayProjectList(id),
    // 'project':
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
  }
];
export default analyzeText;