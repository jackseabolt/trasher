import { Component, Output, EventEmitter } from '@angular/core'; 
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    templateUrl: './home.component.html', 
    selector: 'Home', 
    styleUrls: ['./home.component.css'], 
    animations: [
      trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(1200)
        ])
      ])
    ]
})

export class Home {

    @Output('start') start = new EventEmitter(); 
    aboutActivated = false; 

    handleOpenAbout() {
      this.aboutActivated = true; 
    }

    handleStart() {
        this.start.emit(); 
    }
}