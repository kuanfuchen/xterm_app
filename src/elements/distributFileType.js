import {storagedData, first_Rank, second_Rank} from './service/dataService.js';
// 由dataService檢查在哪個階層，確定階層後開啟該層指令、或是到下層指令
//可以同時，看不同階層的物件或是同階層的物件
// [project, result, datafile]
const receivedMessage = (parsingTextObj) => {
  console.log(parsingTextObj);
  // [
  //   { text: 'cd', textPosition: 0, correspondArr: [ 'text', '-public' ] },
  //   { text: 'cd', textPosition: 3, correspondArr: [ 'publicText' ] },
  //   { text: 'ls', textPosition: 5, correspondArr: [] }
  // ] 
  
}
export {
  receivedMessage,
}