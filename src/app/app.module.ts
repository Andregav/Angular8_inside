import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UnitsComponent } from './units/units.component';
import { ListComponent } from './list/list.component';
import { PatientComponent } from './patient/patient.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnitsComponent,
    ListComponent,
    PatientComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
