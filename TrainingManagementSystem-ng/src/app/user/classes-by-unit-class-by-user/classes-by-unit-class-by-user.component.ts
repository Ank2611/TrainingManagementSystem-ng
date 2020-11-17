import { Component, OnInit } from '@angular/core';
import { ClassesData } from '../../../model/classesData';
import {ClassUnitData} from '../../../model/classUnitData';
import { ClassesService } from "../../service/classes.service";
import { ClassUnitService } from "../../service/class-unit.service";
import { ActivatedRoute } from "@angular/router";
import {Location } from '@angular/common';


@Component({
  selector: 'app-classes-by-unit-class-by-user',
  templateUrl: './classes-by-unit-class-by-user.component.html',
  styleUrls: ['./classes-by-unit-class-by-user.component.css']
})
export class ClassesByUnitClassByUserComponent implements OnInit {

  classesList: ClassesData[] = [];
  classes: ClassesData = new ClassesData();
  classUnit: ClassUnitData = new ClassUnitData();
  classUnits: ClassUnitData[] = [];
  selectedClass: number;

  constructor(private classesService: ClassesService, 
    private classUnitService: ClassUnitService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.classUnitService.getClassUnit(Number(id)).subscribe(received => {
      this.classUnit = received;
    });
    console.log("id unit" + id)
    this.loadClasses();
  }

  loadClasses(): void {
    let idClassUnit = this.route.snapshot.paramMap.get("id");
    console.log(idClassUnit);
    this.classesService.getAllByIdClassUnit(Number(idClassUnit)).subscribe(receivedClasses => {
      this.classesList = receivedClasses;
    });
  }

  onSelectionChange(classes: ClassesData) {
    this.selectedClass = classes.id;
  }


  goBack(): void{
    this.location.back();
  }

}
