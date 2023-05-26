import { Subject } from 'rxjs';
const _exportTextContent$ = new Subject({});
const exportedContent = (textContent) => {
  _exportTextContent$.next(textContent);
};
const exportTextContent$ =_exportTextContent$.asObservable();
export {
  exportedContent,
  exportTextContent$,
}