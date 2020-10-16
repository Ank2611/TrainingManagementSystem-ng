import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { ClassesService } from 'src/app/service/classes.service';
import { ClassesData } from 'src/model/classesData';
import { ClassUnitData } from 'src/model/classUnitData';

@Component({
  selector: 'app-classes-by-class-unit',
  templateUrl: './classes-by-class-unit.component.html',
  styleUrls: ['./classes-by-class-unit.component.css']
})
export class ClassesByClassUnitComponent implements OnInit {
  classes: ClassesData = new ClassesData();
  classesList: ClassesData[] = [];
  classUnit: ClassUnitData = new ClassUnitData();
  classUnits: ClassUnitData[] = [];
  selectedClass: number;
  constructor(private classesService: ClassesService, private classUnitService: ClassUnitService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get("id");
    this.classUnitService.getClassUnit(Number(id)).subscribe(received=>{
      this.classUnit=received;
    });
    console.log("id unit" +id)
    this.loadClasses();
  }

  loadClasses(): void {
    let idClassUnit = this.route.snapshot.paramMap.get("id");
    console.log(idClassUnit);
    this.classesService.getAllByIdClassUnit(Number(idClassUnit)).subscribe(receivedClasses => {
      this.classes = receivedClasses;
    });
  }

  onSelectionChange(classes: ClassesData) {
    this.selectedClass = classes.id;
  }
}
