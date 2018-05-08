import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './navigation.component.html', 
    selector: 'Navigation', 
    styleUrls: ['./navigation.component.css']
})

export class Navigation {
    @Output() start = new EventEmitter(); 
    @Output() startNew = new EventEmitter();
    @Output() startAbout = new EventEmitter();
    mobileNavActive: boolean = false;   

    handleHome() {
        this.start.emit(); 
    }

    toggleMobileNav() {
        this.mobileNavActive = !this.mobileNavActive; 
    }

    handleToggleForm() {
        this.startNew.emit(); 
    }

    handleToggleAbout() {
        this.startAbout.emit(); 
    }
}