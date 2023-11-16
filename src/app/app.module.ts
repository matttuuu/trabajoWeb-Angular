import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; //Routing por defecto 
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutingComponentComponent } from './components/routing-component/routing-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    RoutingComponentComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
