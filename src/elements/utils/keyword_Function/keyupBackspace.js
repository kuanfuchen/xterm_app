const keyupBackspaceFun = (txt) => {
  console.log('keyupBackspaceFun',txt)
  //remove text site
  if(txt === undefined) return;
  const separatingTxt = txt.split('');
  const storagedLen = separatingTxt.length - 1;
  separatingTxt.splice(storagedLen, 1);
  const text = separatingTxt.join('');
  console.log(text,'text');
  return text;
}
export default keyupBackspaceFun;