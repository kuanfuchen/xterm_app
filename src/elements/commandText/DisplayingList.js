class DisplayList {
  constructor(id, name){
    this.id = id;
    this.name = name;
  };
  async viewList(listAPI){
    console.log(this.id)
    // this.listInfo = await listAPI(this.id);
    // console.log(listInfo)
    //api回傳的值，排列table回傳至handleProject
  };
}
class DisplayProjectList extends DisplayList{
  viewList(){
    super.viewList();
    console.log(this.col,'col')
    console.log("app")
  }
}
class DisplayResultList extends DisplayList{

}
class DisplayDatafileList extends DisplayList{

}
export{
  DisplayProjectList,
  DisplayResultList,
  DisplayDatafileList,
}