import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapComponent } from './main/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import {Routes,RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

const appRoutes:Routes = [
  {
      path: '',redirectTo: '/graph',pathMatch: 'full'},
      { path: 'map',component: MapComponent,data: { title: 'map' } }
      
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0McczTB0q4J-6XWlu9FAjncjXyVO8i5k'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  
 }
