import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'; 

@Component({
    selector: 'Main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class Main implements OnInit {
    constructor(private service: ItemService) {}
  
    items = [];
    started = false; 
    newActivated = false;
    aboutActivated = false; 
    current = null;  

    ngOnInit() {
        this.handleGetAll();
    }

    handleGetAll() {
        this.service.getAllItems()
        .subscribe(res => {
            this.items = res.json().items.sort().reverse(); 
            console.log(this.items)
        }), error => {
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
            
            console.log(newCurrent[0]) 
            this.current = newCurrent[0]

            console.log(this.items)
        }), error => {
            console.error(error)
        }
    }

    handleFocus($event) {
        this.current = $event
        console.log(this.current)
    }

    handleCloseModal() {
        this.current = null; 
    }

    handleSearch($event) {
        this.items = $event.items; 
    }

}