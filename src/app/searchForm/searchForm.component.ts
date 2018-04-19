import { Component, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../services/item.service';  

@Component({
    selector: 'SearchForm', 
    templateUrl: './searchForm.component.html', 
    styleUrls: ['./searchForm.component.css']
})

export class SearchForm {
    constructor(private service: ItemService) {}
    
    @Output('search') search = new EventEmitter();
    
    city; 

    submitSearch() {
        let city = this.city.toLowerCase(); 
        this.service.getItemByCity(city)
            .subscribe(res => {
                console.log(res.json())
                this.search.emit(res.json())
            }), 
            err => console.error(err)
        console.log(this.city)
    }
}