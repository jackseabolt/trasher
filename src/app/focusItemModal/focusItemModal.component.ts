import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    selector: 'FocusItemModal', 
    templateUrl: './focusItemModal.component.html', 
    styleUrls: ['./focusItemModal.component.css']
})

export class FocusItemModal {
    @Input('current') current; 
}