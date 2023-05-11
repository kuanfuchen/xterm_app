import apiService from './service/dataService.js';
// 由dataService檢查在哪個階層，確定階層後開啟該層指令、或是到下層指令
//可以同時，看不同階層的物件或是同階層的物件
const receivedMessage = (parsingTextObj)=>{
  console.log(apiService);
}
receivedMessage();