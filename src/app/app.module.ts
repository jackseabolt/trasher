import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule} from '@angular/router'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { About } from './components/about/about.component';
import { AppComponent } from './components/app/app.component';
import { NewItemForm } from './components/newItemForm/newItemForm.component';
import { Board } from './components/board/board.component';
import { BoardItem } from './components/boardItem/boardItem.component'; 
import { Home } from './components/home/home.component'; 
import { Navigation } from './components/navigation/navigation.component';
import { Main } from './components/main/main.component';
import { FocusItemModal } from './components/focusItemModal/focusItemModal.component';
import { SearchForm } from './components/searchForm/searchForm.component';
import { SummaryPipe } from './components/pipes/summary.pipe';
import { CapitalizeAllPipe } from './components/pipes/capitalizeall.pipe';
import { CapitalizePipe } from './components/pipes/capitalize.pipe';
import { ItemService } from './services/item.service';
import { RecaptchaModule } from 'ng-recaptcha'; 
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


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
    Ng4LoadingSpinnerModule.forRoot(),  
    RouterModule.forRoot([
      { path: '', component: Home }, 
      { path: 'main', component: Main }
    ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
