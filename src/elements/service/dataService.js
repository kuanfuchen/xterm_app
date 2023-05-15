const storagedData = {
  project:{
    id:'',
    name:'',
    prefix:'',
    suffix:'',
    updatedAt:'',
    createdAt:'',
    dataFileNum:0,
    resultNum:0
  },
  result:{
    id:'',
    name:'',
    prefix:'',
    suffix:'',
    updatedAt:'',
    createdAt:'',
    dataFileNum:0,
    resultNum:0
  },
  dataFile:{
    id:'',
    name:'',
    prefix:'',
    suffix:'',
    updatedAt:'',
    createdAt:'',
    dataFileNum:0,
    resultNum:0
  },
  package:{
    id:'',
    name:'',
    prefix:'',
    suffix:'',
    updatedAt:'',
    createdAt:'',
    dataFileNum:0,
    resultNum:0
  },
  task:{
    id:'',
    name:'',
    prefix:'',
    suffix:'',
    updatedAt:'',
    createdAt:'',
    dataFileNum:0,
    resultNum:0
  }
};
const first_Rank = {
  enum: ['project', 'package'],
  selectedType: null,
  selectedTypeID: '',
  selectedTypeName: '',
  selectedTypePrefix: '',
  selectedTypeSuffix: '',
};
const second_Rank = {
  enum: ['result', 'datafile', 'task'],
  selectedType: null,
  selectedTypeID: '',
  selectedTypeName: '',
  selectedTypePrefix: '',
  selectedTypeSuffix: '',
};

export {
  storagedData,
  first_Rank,
  second_Rank
}