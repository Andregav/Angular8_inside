import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Data } from '../data-type';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  link: Data;
  toggle = true;

	constructor(
  	private route: ActivatedRoute,    
    private unitsService: UnitsService,
  	private location: Location
  ) { }

  ngOnInit() {  
     this.getLink();
  }
   
  getLink(): void {
    const link = this.route.snapshot.paramMap.get('link');
    this.unitsService.getLink(link).subscribe(link => this.link = link);
    let linkData = this.link.patient;
    var newName = {linkName: 'test'};
    for (let key in linkData) {
        newName.linkName = linkData[key].name.replace(/\s/g, '');
        Object.assign(linkData[key], newName);
        
    }
  }

  goBack(): void {
    this.location.back();
  }

  sortName(): void {
    this.toggle = !this.toggle;
    let patients = this.link.patient;
    patients.sort((a, b) => this.toggle ? <any>+(a.name > b.name) || <any>-(a.name < b.name) : <any>-(a.name > b.name) || <any>+(a.name < b.name));
  }

  sortDx(): void {
    this.toggle = !this.toggle;
    let patients = this.link.patient;
    patients.sort((a, b) => this.toggle ? <any>+(a.dx > b.dx) || <any>-(a.dx < b.dx) : <any>-(a.dx > b.dx) || <any>+(a.dx < b.dx));
  }
  sortVisit() {
    this.toggle = !this.toggle;
    let patients = this.link.patient;
    patients.sort((a, b) => this.toggle ? <any>+(a.date > b.date) || <any>-(a.date < b.date) : <any>-(a.date > b.date) || <any>+(a.date < b.date));
  }
  sortStaff() {
    this.toggle = !this.toggle;
    let patients = this.link.patient;
    patients.sort((a, b) => this.toggle ? <any>+(a.staff > b.staff) || <any>-(a.staff < b.staff) : <any>-(a.staff > b.staff) || <any>+(a.staff < b.staff));
  }

  onSearch() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("listInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("list");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}