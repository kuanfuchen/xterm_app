//傳輸與建立文字格式，接收外來的object
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