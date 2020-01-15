import { Component, OnInit } from '@angular/core';
import { Data } from '../data-type';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

	units: Data[];

  	constructor(
  		private unitsService: UnitsService
  	) { }

  	ngOnInit() {
  		this.getUnits();
  	}

  	getUnits(): void {
  		this.unitsService.getData().subscribe(units => this.units = units);
  	}
}
