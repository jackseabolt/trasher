import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NewItemForm } from './newItemForm/newItemForm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemService } from './services/item.service';
import { Board } from './board/board.component';
import { BoardItem } from './boardItem/boardItem.component'; 
import { Home } from './home/home.component'; 
import { Navigation } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NewItemForm,
    Board, 
    BoardItem, 
    Home, 
    Navigation
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    FormsModule, 
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
