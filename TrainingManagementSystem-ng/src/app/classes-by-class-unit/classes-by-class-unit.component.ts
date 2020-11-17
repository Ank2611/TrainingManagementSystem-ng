import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassUnitService } from '../service/class-unit.service';
import { ClassesService } from '../service/classes.service';
import { ClassesData } from '../../model/classesData';
import { ClassUnitData } from '../../model/classUnitData';
import { Location } from '@angular/common';

@Component({
  selector: 'app-classes-by-class-unit',
  templateUrl: './classes-by-class-unit.component.html',
  styleUrls: ['./classes-by-class-unit.component.css']
})
export class ClassesByClassUnitComponent implements OnInit {

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
