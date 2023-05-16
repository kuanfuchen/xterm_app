// [{
//   "text":"cd",
//   "class":"ChangingDir"
// },{
//   "text":"ls",
//   "class":"DisplayingList"
// },{
//   "text":"view",
//   "class":"DisplayingTable"
// },{
//   "text":"help",
//   "class":"Help"
// }]
import {DisplayProjectList, DisplayResultList, DisplayDatafileList} from '../commandText/DisplayingList.js';
const analyzeText = [
  {
    'text':'cd',
  },{
    'text':'ls',
    'project':(id)=> new DisplayProjectList(id),
    'result':(id) => new DisplayResultList(id),
    'datafile':(id) => new DisplayDatafileList(id),
  },{
    'text':'view'
  },{
    'text':'help'
  }
];
export default analyzeText;