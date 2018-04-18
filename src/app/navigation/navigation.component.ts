import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './navigation.component.html', 
    selector: 'Navigation', 
    styleUrls: ['./navigation.component.css']
})

export class Navigation {
    @Output() start = new EventEmitter(); 
    @Output() startNew = new EventEmitter(); 

    handleHome() {
        this.start.emit(); 
    }

    handleToggleForm() {
        this.startNew.emit(); 
    }
}