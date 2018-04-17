import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './navigation.component.html', 
    selector: 'Navigation'
})

export class Navigation {
    @Output() start = new EventEmitter(); 

    handleHome() {
        this.start.emit(); 
    }
}