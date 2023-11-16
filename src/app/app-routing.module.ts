import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Student } from './models/student';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { RoutingComponentComponent } from './components/routing-component/routing-component.component';
import { AppComponent } from './app.component';


const routes: Routes = [ 

  { path: '', component: AppComponent } ,
  { path: 'componenteTabla', component: FirstComponentComponent } ,
  { path: 'appRoutingComponent', component: RoutingComponentComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
