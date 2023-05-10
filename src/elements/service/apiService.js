let bdpApi = null;
const bdpDataBase = {
  bdpInitialize:(api)=> bdpApi = api,
  bdpElementParams$: undefined,
  bdpNotifyChanges: (e) => console.log(e, 'bdpNotifyChanges'),
  bdpIncomingMessage: (e) => console.log(e, 'bdpIncomingMessage')
};

module.exports = {
  bdpDataBase
}