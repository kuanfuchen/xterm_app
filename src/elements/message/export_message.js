import { Subject } from 'rxjs';
const _exportTextContent$ = new Subject({});
const exportedContent = (textContent) => {
  console.log(textContent)
  _exportTextContent$.next(textContent);
};
const exportTextContent$ =_exportTextContent$.asObservable();
export {
  exportedContent,
  exportTextContent$,
}