import { Component, OnInit, Input } from '@angular/core';

import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

	object = {
    	task_code: 'Test', 
        name: 'Test',    
        timein: '2019-10-20T09:30:00.000Z', 
        timeout: '2019-10-20T09:30:00.000Z',
        description: 'Test',
        staff: 'Test', 
        position: 'Test'
  	};
  	subtaskName;
  	timein;
  	subtaskDatein;
  	subtaskTimein;
  	subtaskDateout;
  	subtaskTimeout;
  	subtaskDescription;
  	darrin;
  	tarrin;
  	dateDatein;
  	darrout;
  	tarrout;
  	dateDateout;
  	subtaskStaff;
  	subtaskPosition;
  	notFillField = false;
  	notSelect = false;
  	notStart = false;
  	notStop = false;

	constructor(
  		private patientComponent: PatientComponent
  	) { }

  	ngOnInit() {
  	}

  	startTime(): void {	
  		const today = new Date();
		const timein = document.getElementById('timein');
		const datein = document.getElementById('datein');
		timein.innerHTML  = today.toLocaleTimeString().slice(0,-3);
		datein.innerHTML  = today.toLocaleDateString();
	 	document.getElementById("buttonin").setAttribute("disabled", "");   
		document.getElementById("buttonout").removeAttribute("disabled");		
	}
	stopTime(): void {
		const today = new Date();
		const timeout = document.getElementById('timeout');
		const dateout = document.getElementById('dateout');
		timeout.innerHTML  = today.toLocaleTimeString().slice(0,-3);
		dateout.innerHTML  = today.toLocaleDateString();
		document.getElementById("buttonout").setAttribute("disabled", ""); 
	}
	
	resetTime(): void {
		document.getElementById('timein').innerHTML = "";
		document.getElementById('datein').innerHTML = "";
		document.getElementById('timeout').innerHTML = "";
		document.getElementById('dateout').innerHTML = "";
		document.getElementById("buttonin").removeAttribute("disabled"); 
	}

  	closeDetails(): void {
  		this.patientComponent.closeDetails();
	}

	saveSubtask(): void {

		let x: any = document.getElementById("subtaskDescription");
		let y: any = document.getElementById("datein");
		let z: any = document.getElementById("dateout");
		let w: any = document.getElementById("subtaskName");

		if(w.value == '') {
			this.notSelect = true;
		} else {
			this.notSelect = false;
			this.object.name = this.subtaskName;
		}

		if(y.textContent == '') {
			this.notStart = true;
		} else {
			this.notStart = false;			
		}

		if(y.textContent !== '' && z.textContent == '') {
			this.notStop = true;
		} else {
			this.notStop = false;			
		}
		
		this.subtaskDatein = document.getElementById('datein').textContent;
		this.subtaskTimein = document.getElementById('timein').textContent;		
		this.darrin = this.subtaskDatein.split(".");
		this.tarrin = this.subtaskTimein.split(":");
		this.dateDatein = new Date(parseInt(this.darrin[2]),parseInt(this.darrin[1])-1,parseInt(this.darrin[0]),parseInt(this.tarrin[0]),parseInt(this.tarrin[1]));
		this.object.timein = this.dateDatein.toISOString();
		
		this.subtaskDateout = document.getElementById('dateout').textContent;
		this.subtaskTimeout = document.getElementById('timeout').textContent;		
		this.darrout = this.subtaskDateout.split(".");
		this.tarrout = this.subtaskTimeout.split(":");
		this.dateDateout = new Date(parseInt(this.darrout[2]),parseInt(this.darrout[1])-1,parseInt(this.darrout[0]),parseInt(this.tarrout[0]),parseInt(this.tarrout[1]));
		
		this.object.timeout = this.dateDateout.toISOString();

		this.subtaskStaff = document.getElementById('subtaskStaff').textContent;
		this.object.staff = this.subtaskStaff;

		this.subtaskPosition = document.getElementById('subtaskPosition').textContent;
		this.object.position = this.subtaskPosition;
		
		if(x.value == '') {
  			this.notFillField = true;
  			x.style.borderColor = "red";
  			this.patientComponent.openDetails();
  		} else {
  			this.object.description = this.subtaskDescription;
  			this.patientComponent.dataPatient.tasks.push(this.object);
  			this.patientComponent.closeDetails();
  		}

		
	}

}
