import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DOMSanitizerPipe implements PipeTransform {

  constructor(private DOMSanatizer: DomSanitizer){ }
  
  transform(img: string): any {
    const DOMImg = `background-image: url("${img}")`;
    return this.DOMSanatizer.bypassSecurityTrustStyle(DOMImg);
  }

}
