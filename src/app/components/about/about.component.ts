import { Component, Output, EventEmitter } from '@angular/core'; 
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({ 
    selector: 'About', 
    templateUrl: './about.component.html', 
    styleUrls: ['./about.component.css'], 
    animations: [
      trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(300)
        ])
      ])
    ]
})

export class About {
    @Output('close') close = new EventEmitter(); 
    handleClose() {
        this.close.emit(); 
    }   
}