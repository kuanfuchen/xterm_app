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
class ProjectDir extends ChangingDir{};
class ResultDir extends ChangingDir{};
class DatafileDir extends ChangingDir{};
class PackageDir extends ChangingDir{};

export {
  ProjectDir,
  ResultDir,
  DatafileDir,
  PackageDir,
}