import {main_Rank, child_Rank} from '../service/statusService.js';
class ChangingDir{
  constructor(name){
    this.name = name;
  }
  async displayContent(listAPI){
    console.log('displayContent');
    return await listAPI(this.name);
  }
}
const projectDir = async(api, id, name)=>{
  const projectList = await api;
  console.log(projectList, 'projectList');
  const filteredProjects = projectList.records.filter((project)=> name === project.name.toLowerCase());
  console.log(filteredProjects, 'filteredProjects')
  if(filteredProjects.length === 1){
    main_Rank.selectedType = 'project';
    main_Rank.selectedTypeName = filteredProjects[0].name;
  }
  return filteredProjects
}
const resultDir = async(api, id, name)=>{
  const resultList = await api;
  console.log(resultList,'resultList')

}
class DatafileDir extends ChangingDir{};
class PackageDir extends ChangingDir{};

export {
  projectDir,
  resultDir,
  DatafileDir,
  PackageDir,
}