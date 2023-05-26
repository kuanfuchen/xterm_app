class ChangingDir{
  constructor(name){
    this.name = name;
  }
  async displayContent(listAPI){
    console.log('displayContent');
    return await listAPI(this.name);
  }
}
// class ProjectDir extends ChangingDir{
//   async displayContent(listAPI){
//     const projectList = await super.displayContent(listAPI);
//     const lowerProjectName = this.name.toLowerCase();
//     const filteredProjects = projectList.records.filter((project)=> lowerProjectName === project.name.toLowerCase());
//     if(filteredProjects.length === 1 && filteredProjects[0].name){
//       return filteredProjects[0].name;
//     }else if(filteredProjects.length > 1){
//       const projectListHeader = `\u001b[93mProject name \u001b[37m| Create time`;
//       let projectListContent = '';
//       filteredProjects.forEach((project)=>{
//         projectListContent +=`\r\n\u001b[36m${project.name} \u001b[37m${project.createdAt} \x1b[8m${project.id}\x1b[28m`
//       })
//       return projectListHeader + projectListContent;
//     }else{
//       return `\r\n don't Project`
//     }
//   }
// };
const ProjectDir = async(api, id, name)=>{
  const lowerProjectName = name.toLowerCase();
  const projectList = await api(id);
  const filteredProjects = projectList.records.filter((project)=> lowerProjectName === project.name.toLowerCase());
  if(filteredProjects.length === 1 && filteredProjects[0].name){
    return filteredProjects[0].name;
  }else if(filteredProjects.length > 1){
    const projectListHeader = `\u001b[93mProject name \u001b[37m| Create time`;
    let projectListContent = '';
    filteredProjects.forEach((project)=>{
      projectListContent +=`\r\n\u001b[36m${project.name} \u001b[37m${project.createdAt} \x1b[8m${project.id}\x1b[28m`
    })
    return projectListHeader + projectListContent;
  }else{
    return `\r\n don't Project`
  }
}
class ResultDir extends ChangingDir{};
class DatafileDir extends ChangingDir{};
class PackageDir extends ChangingDir{};

export {
  ProjectDir,
  ResultDir,
  DatafileDir,
  PackageDir,
}