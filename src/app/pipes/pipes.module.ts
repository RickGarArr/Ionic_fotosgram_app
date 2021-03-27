import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOMSanitizerPipe } from './domsanitizer.pipe';



@NgModule({
  declarations: [DOMSanitizerPipe],
  exports: [DOMSanitizerPipe]
})
export class PipesModule { }
