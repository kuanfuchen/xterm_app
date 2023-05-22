class ChangingDir{
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
  changingPathway(){
    // console.log(this.id)
    console.log('changingPathway');
  }
}
class ProjectDir extends ChangingDir{
  super();
  async displayContent(listAPI){
    const projectList = await listAPI();
    console.log(projectList, 'projectList');
    const project = projectList.filter((project)=> this.name === project.name);
    return project;
  }
};
class ResultDir extends ChangingDir{};
class DatafileDir extends ChangingDir{};
class PackageDir extends ChangingDir{};

export {
  ProjectDir,
  ResultDir,
  DatafileDir,
  PackageDir,
}