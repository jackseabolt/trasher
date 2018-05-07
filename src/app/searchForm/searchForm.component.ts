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
                // packaging searchTerm with search results 
                let data = Object.assign({}, res.json(), {
                    searchTerm: this.city
                })
                this.search.emit(data)
            }), 
            err => console.error(err)
    }

    handleNew() {
        this.startNew.emit(); 
    }

    handleViewAll() {
        this.viewAll.emit(); 
        this.city = null; 
    }
}