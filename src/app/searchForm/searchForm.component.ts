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
    @Output('startNew') startNew = new EventEmitter(); 
    @Output('viewAll') viewAll = new EventEmitter(); 
    
    city; 
    error; 

    submitSearch() {
        if(!this.city) {
            this.error = "You must enter a value"
            return
        }
        this.error = null; 
        let city = this.city.toLowerCase(); 
        this.service.getItemByCity(city)
            .subscribe(res => {
                console.log(res.json())
                this.search.emit(res.json())
            }), 
            err => console.error(err)
        console.log(this.city)
    }

    handleNew() {
        this.startNew.emit(); 
    }

    handleViewAll() {
        this.viewAll.emit(); 
    }
}