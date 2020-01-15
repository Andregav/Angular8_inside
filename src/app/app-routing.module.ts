import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { ListComponent }  from './list/list.component';
import { PatientComponent }  from './patient/patient.component';


const routes: Routes = [
	{ path: '', component: UnitsComponent },
	{ path: ':link', component: ListComponent },
	{ path: ':link/:linkName', component: PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
