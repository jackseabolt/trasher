import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'; 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private service: ItemService) {}
  
    items = [];
    started = false; 
    newActivated = false; 

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

}
