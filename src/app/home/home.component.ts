import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './home.component.html', 
    selector: 'Home'
})

export class Home {
    @Output('start') start = new EventEmitter(); 

    handleStart() {
        this.start.emit(); 
    }
}