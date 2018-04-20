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
import { Main } from './main/main.component';
import { RouterModule} from '@angular/router'; 
import { FocusItemModal } from './focusItemModal/focusItemModal.component';
import { SearchForm } from './searchForm/searchForm.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { About } from './about/about.component';
import { RecaptchaModule } from 'ng-recaptcha'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CapitalizeAllPipe } from './pipes/capitalizeall.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewItemForm,
    Board, 
    BoardItem, 
    Home, 
    Navigation, 
    Main, 
    FocusItemModal, 
    SearchForm, 
    SummaryPipe, 
    CapitalizePipe,
    CapitalizeAllPipe, 
    About
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpModule, 
    RecaptchaModule.forRoot(), 
    RouterModule.forRoot([
      { path: '', component: Home }, 
      { path: 'main', component: Main }
    ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
