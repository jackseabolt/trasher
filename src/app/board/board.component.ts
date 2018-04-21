import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'; 

@Component({
    templateUrl: './board.component.html',
    selector: 'Board', 
    styleUrls: ['./board.component.css']
})

export class Board implements OnChanges {
    @Input('items') items; 
    @Input('paginationArray') paginationArray; 
    @Input('pagination') pagination; 
    @Output('delete') delete = new EventEmitter();
    @Output('focus') focus = new EventEmitter(); 
    @Output('search') search = new EventEmitter(); 
    @Output('startNew') startNew = new EventEmitter(); 
    @Output('viewAll') viewAll = new EventEmitter();
    current = 0; 
    currentItems; 
    
    ngOnChanges() {
        this.currentItems = this.items.slice(0, 8) 
    }

    handleDelete() {
        this.delete.emit(); 
    }

    handleFocus(item) {
        this.focus.emit(item); 
    }

    handleSearch($event) {
        this.search.emit($event)
    }

    handleOpenNew() {
        this.startNew.emit(); 
    }

    handleViewAll() {
        this.viewAll.emit(); 
    }

    increaseCurrent() {
        if(this.current < this.pagination - 1) {
            this.current++; 
            this.currentItems = this.items.slice((this.current * 8), (this.current * 8 + 8));      
        } 
    }

    setCurrent(num) {
        this.current = num - 1; 
        this.currentItems = this.items.slice((this.current * 8), (this.current * 8 + 8));   
    }

    decreaseCurrent() {
        if(this.current > 0 ) {
            this.current--; 
            this.currentItems = this.items.slice((this.current * 8), (this.current * 8 + 8));
        }
    }

}