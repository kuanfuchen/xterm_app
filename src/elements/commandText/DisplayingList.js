class DisplayList {
  constructor(id, name){
    this.id = id;
    this.name = name;
  };
  async displayContent(listAPI){
    console.log('superapp');
    return await listAPI(this.id);
  };
}
class DisplayProjectList extends DisplayList{
  async displayContent(listAPI){
    const getProjectList = await super.displayContent(listAPI);
    if(getProjectList.records.length === 0) return `\r\n don't Project`;
    const projectListHeader = `\u001b[93mProject name \u001b[37m| Create time`
    let projectListContent = '';
    getProjectList.records.forEach((record)=>{
      projectListContent += `\r\n\u001b[36m${record.name} \u001b[37m${record.createdAt} \x1b[8m${record.id}\x1b[28m`;
    })
    return projectListHeader + projectListContent;
  }
}
class DisplayResultList extends DisplayList{
  async displayContent(listAPI){
    const getResultList = await super.displayContent(listAPI);
    if(getResultList.records.length === 0) return `\r\n don't result`;
    const resultListHeader = `\u001b[93mResult name \u001b[37m| Create time`;
    let resultListContent = '';
    getResultList.records.forEach(()=>{
      resultListContent += `\r\n\u001b[36m${record.name} \u001b[37m${record.createdAt} \x1b[8m${record.id}\x1b[28m`;
    })
    return resultListHeader + resultListContent;
  }
}
class DisplayDatafileList extends DisplayList{
  displayContent(listAPI){
    return super.displayContent(listAPI);
  }
}
export{
  DisplayProjectList,
  DisplayResultList,
  DisplayDatafileList,
}