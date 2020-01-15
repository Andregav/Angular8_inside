import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Data } from '../data-type';
import { UnitsService } from '../units.service';

import { Task } from '../data_task-types';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

	patient: Data;
	dataPatient;
  openTask = false;
  tasks: Task[];
  patient_info = true;
  patient_history = false;
  patient_labs = false;
  isDisabled = true;
  buttonSaveTask = false;
  darrin;
  tarrin;
  timeOpen: any; 

  objectTask = {
    task_number: 339,
    task_code: 'DIAGtest', 
    task__status: 'Done',
    dx: 'Test',    
    timeOpen: '2019-09-01T16:51:50.969Z', 
    timeClose: new Date(),
    description: 'Test',
    staff: "Test", 
    position: 'Test'
  };
  
  


	constructor(
  	private route: ActivatedRoute,    
    private unitsService: UnitsService,
    private taskService: TaskService,
  	private location: Location
  ) { }

  ngOnInit() {  
     this.getPatient();
     this.getDataTask();
  }
   
  getPatient(): void {
    const link = this.route.snapshot.paramMap.get('linkName');
	  const links = link.replace(/([A-Z])/g, ' $1').trim();
    this.unitsService.getPatient(links).subscribe(patient => this.patient = patient);
    const linkData = this.patient.patient;
    this.dataPatient = linkData.find(patient => patient.name === links);
  }

  goBack(): void {
    this.location.back();
  }

  openDetails(): void {
    this.openTask = true;
  }

  closeDetails(): void {
    this.openTask = false;
  }

  getDataTask(): void {
      this.taskService.getDataTask().subscribe(tasks => this.tasks = tasks);
  }

  getPatientInfo(): void {
    document.getElementById("patient-info").classList.add("active");
    document.getElementById("patient-history").classList.remove("active");
    document.getElementById("patient-labs").classList.remove("active");
    this.patient_info = true;
    this.patient_history = false;
    this.patient_labs = false;
  }

  getPatientHistory(): void {
    document.getElementById("patient-info").classList.remove("active");
    document.getElementById("patient-history").classList.add("active");
    document.getElementById("patient-labs").classList.remove("active");
    this.patient_info = false;
    this.patient_history = true;
    this.patient_labs = false;
  }
  getPatientLab(): void {
    document.getElementById("patient-info").classList.remove("active");
    document.getElementById("patient-history").classList.remove("active");
    document.getElementById("patient-labs").classList.add("active");
    this.patient_info = false;
    this.patient_history = false;
    this.patient_labs = true;
  }
  editTextarea(): void {
    this.isDisabled = !this.isDisabled;
  }

  taskDescription = this.dataPatient;

  openTaskDescription(task: Data): void {
    this.taskDescription = task;
  }
  closeTaskDescription(): void {
    this.taskDescription = false;
  }

  statusTask(value: any): void {
    if(value == "done") 
      this.buttonSaveTask = true;
     else 
      this.buttonSaveTask = false;    
  }

  saveTask(): void {
    this.objectTask.task_number = +document.getElementById('task_number').textContent;
    //this.objectTask.dx = this.dataPatient.dx;
    this.darrin = document.getElementsByClassName('sign-block__date')[0].textContent.split(".");
    this.tarrin = document.getElementsByClassName('sign-block__time')[0].textContent.split(":");
    this.timeOpen = new Date(parseInt(this.darrin[2]),parseInt(this.darrin[1])-1,parseInt(this.darrin[0]),parseInt(this.tarrin[0]),parseInt(this.tarrin[1]));
    this.objectTask.timeOpen = this.timeOpen;
    this.tasks.push(this.objectTask);

    this.dataPatient.task__description = '';
    this.dataPatient.dx = '';
    this.dataPatient.tasks = [];
  }

}
 