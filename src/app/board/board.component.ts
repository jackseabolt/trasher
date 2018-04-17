import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './board.component.html',
    selector: 'Board'
})

export class Board {
    @Input('items') items; 
    @Output('delete') delete = new EventEmitter(); 

    handleDelete() {
        this.delete.emit(); 
    }
}