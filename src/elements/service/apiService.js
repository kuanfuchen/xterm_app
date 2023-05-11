let bdpApi = null;
const bdpDataBase = {
  bdpInitialize:(api)=> bdpApi = api,
  bdpElementParams$: undefined,
  bdpNotifyChanges: (e) => console.log(e, 'bdpNotifyChanges'),
  bdpIncomingMessage: (e) => console.log(e, 'bdpIncomingMessage')
};
const projectLists = async(pageSize, pageIndex, type) => await bdpApi.listProjects(pageSize, pageIndex, type);
const resultLists = async(id) => await bdpApi.listResults(id);
const packageLists = async () => await bdpApi.listPackages();
const taskLists = async(packageID)=> await bdpApi.listTasks(packageID);
const getProjectInfo = async(projectID)=>await bdpApi.getProjectInfo(projectID);
const getResultInfo = async(resultID)=>await bdpApi.getResultInfo(resultID);
module.exports = {
  bdpDataBase,
  projectLists,
  resultLists,
  packageLists,
  taskLists,
  getProjectInfo,
  getResultInfo
}