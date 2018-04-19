import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({ 
    selector: 'About', 
    templateUrl: './about.component.html', 
    styleUrls: ['./about.component.css']
})

export class About {
    @Output('close') close = new EventEmitter(); 
    handleClose() {
        this.close.emit(); 
    }   
}