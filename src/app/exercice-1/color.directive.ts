import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') private color:string;
  @HostListener('window:keydown', ['$event']) private actionKey(event: KeyboardEvent): void {
    switch(event.code){
      case "ArrowUp":
        this.color="blue";
        break;
      case "ArrowDown":
        this.color="yellow";
        break;
      case "ArrowRight":
        this.color="red";
        break;
      case "ArrowLeft":
        this.color="purple";
        break;
                  
    }
  
  };

  constructor() { }

}
