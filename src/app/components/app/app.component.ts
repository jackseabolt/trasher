import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'; 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    started = false; 
}
