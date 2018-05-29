import { Directive, ElementRef } from '@angular/core';

/** Highlight the attached element or an InputElement in gray */

@Directive({
    selector: '[appHighlight],input'
})
export class HighlightDirective {
    constructor(eleRef: ElementRef) {
        eleRef.nativeElement.style.backgroundColor = '#efeeed';
        console.log(`* Shared highlight called for ${eleRef.nativeElement.tagName}`);
    }
}
