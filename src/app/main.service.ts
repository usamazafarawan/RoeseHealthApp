import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available at the root level
})
export class AddMarginService {
  constructor() { }
  inputMargin(margin:string){
    const inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        const inputType = inputs[i].getAttribute("type");
       
        if (inputType === "date" || inputType === "text" || inputType === "time") {
          
          inputs[i].style.marginTop = margin
        }
        
      }
  }
  // Add your service methods here
}