let bdpApi = null;
const bdpDataBase = {
  bdpInitialize: (api)=> bdpApi = api,
  bdpElementParams$: undefined,
  bdpNotifyChanges: (e) => console.log(e, 'bdpNotifyChanges'),
  bdpIncomingMessage: (e) => console.log(e, 'bdpIncomingMessage')
};
const projectsList = async(pageSize, pageIndex, type) => await bdpApi.listProjects(pageSize, pageIndex, type);
const resultsList = async(projectId) => await bdpApi.listResults(projectId);
const packagesList = async () => await bdpApi.listPackages();
const tasksList = async(packageID)=> await bdpApi.listTasks(packageID);
const datafilesList = async(projectId) => await bdpApi.listFiles(projectId);
const getProjectInfo = async(projectID)=>await bdpApi.getProjectInfo(projectID);
const getResultInfo = async(resultID)=>await bdpApi.getResultInfo(resultID);
export {
  bdpDataBase,
  projectsList,
  resultsList,
  packagesList,
  tasksList,
  datafilesList,
  getProjectInfo,
  getResultInfo
}