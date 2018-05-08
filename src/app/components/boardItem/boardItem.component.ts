import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { ItemService } from '../../services/item.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    templateUrl: './boardItem.component.html', 
    selector: 'BoardItem', 
    styleUrls: ['./boardItem.component.css']
})

export class BoardItem {
    constructor(private service: ItemService) {}
    
    @Input('item') item; 
    @Output('delete') delete = new EventEmitter; 
    
    handleDelete() {
        console.log(this.item.id)
        this.service.deleleteItem(this.item.id)
            .subscribe(res => {
                this.delete.emit();
            }),
            error => console.error(error);  
    }
}