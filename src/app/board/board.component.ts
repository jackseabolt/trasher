import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './board.component.html',
    selector: 'Board', 
    styleUrls: ['./board.component.css']
})

export class Board {
    @Input('items') items; 
    @Output('delete') delete = new EventEmitter();
    @Output('focus') focus = new EventEmitter(); 
    @Output('search') search = new EventEmitter(); 
    @Output('startNew') startNew = new EventEmitter(); 

    handleDelete() {
        this.delete.emit(); 
    }

    handleFocus(item) {
        this.focus.emit(item); 
    }

    handleSearch($event) {
        console.log($event)
        this.search.emit($event)
    }

    handleOpenNew() {
        this.startNew.emit(); 
    }

}