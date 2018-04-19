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
    current = null;  

    ngOnInit() {
        this.service.getAllItems()
            .subscribe(res => {
                this.items = res.json().items; 
                console.log(this.items)
            }), error => {
                console.error(error)
            }
    }

    handleNewItem() {
        this.service.getAllItems()
        .subscribe(res => {
            this.items = res.json().items; 
            console.log(this.items)
        }), error => {
            console.error(error)
        }
    }

    handleFocus($event) {
        this.current = $event
        console.log(this.current)
    }


}