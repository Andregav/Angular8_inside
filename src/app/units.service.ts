import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from './data-type';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  	constructor() { }

  	getData(): Observable<Data[]> {
  		return of(DATA);
	}

	getLink(link: string): Observable<Data> {
		return of(DATA.find(list => list.link === link));
	}


	getPatient(patient: string): Observable<Data> {		
		return of(DATA.find(patient => patient === patient));
	}
}