import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'; 
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'Main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class Main implements OnInit {
    constructor(private service: ItemService, private spinnerService: Ng4LoadingSpinnerService) {}

    items = [];
    started = false; 
    newActivated = false;
    aboutActivated = false; 
    current = null; 
    pagination = 1; 
    paginationArray = []; 
    searchTerm = null; 

    ngOnInit() {
        this.handleGetAll();
    }

    handleGetAll() {
        this.spinnerService.show();
        this.service.getAllItems()
        .subscribe(res => {
            this.items = res.json().items.sort().reverse(); 
            this.pagination = Math.ceil(this.items.length / 8); 
            let paginationArray = []; 
            for(let i = 1; i <= this.pagination; i++) {
                paginationArray.push(i)
            } 
            this.paginationArray = paginationArray;
            this.spinnerService.hide(); 
        }), error => {
            this.spinnerService.hide(); 
            console.error(error)
        }
    }

    handleNewItem() {
        this.current = null; 
        this.getItems();
    }

    getItems() {
        this.service.getAllItems()
        .subscribe(res => {
            this.items = res.json().items.sort().reverse();
            const newCurrent = this.items.filter(item => item.description == this.current.description)
            this.pagination = Math.ceil(this.items.length / 8);
            let paginationArray = []; 
            for(let i = 1; i <= this.pagination; i++) {
                paginationArray.push(i)
            } 
            this.paginationArray = paginationArray; 
            this.current = newCurrent[0]; 
        }), error => {
            console.error(error)
        }
    }

    handleFocus($event) {
        this.current = $event
    }

    handleCloseModal() {
        this.current = null; 
    }

    handleSearch($event) {
        this.searchTerm = $event.searchTerm; 
        this.items = $event.items;
        this.pagination = Math.ceil(this.items.length / 8); 
        let paginationArray = []; 
        for(let i = 1; i <= this.pagination; i++) {
            paginationArray.push(i)
        } 
        this.paginationArray = paginationArray; 
    }

}