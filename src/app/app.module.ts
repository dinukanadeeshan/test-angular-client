import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AddDetailsComponent} from './components/add-details/add-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
