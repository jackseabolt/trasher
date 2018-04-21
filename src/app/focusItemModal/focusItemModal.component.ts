import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { ItemService } from '../services/item.service';

@Component({
    selector: 'FocusItemModal', 
    templateUrl: './focusItemModal.component.html', 
    styleUrls: ['./focusItemModal.component.css']
})

export class FocusItemModal {
    constructor(private service: ItemService) {}

    @Input('current') current; 
    @Output('close') close = new EventEmitter(); 
    @Output('delete') delete = new EventEmitter(); 
    @Output('resolve') resolve = new EventEmitter(); 

    handleClose() {
        this.close.emit(); 
    }

    handleDelete() {
        this.service.deleleteItem(this.current.id)
            .subscribe(res => {
                this.delete.emit();
            }),
            error => console.error(error);  
    }

    handleResolve() {
        this.service.resolveItem(this.current.id)
            .subscribe(res => {
                this.resolve.emit(); 
            }), 
            error => console.error(error);    
    }
}