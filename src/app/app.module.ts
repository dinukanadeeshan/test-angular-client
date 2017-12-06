import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import { HttpClientModule } from '@angular/common/http';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AddDetailsComponent} from './components/add-details/add-details.component';
import { NewhttpclientComponent } from './components/newhttpclient/newhttpclient.component';



@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    NewhttpclientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
