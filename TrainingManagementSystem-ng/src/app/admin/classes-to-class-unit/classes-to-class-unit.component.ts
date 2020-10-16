import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { ClassesData } from 'src/model/classesData';
import { ClassUnitData } from 'src/model/classUnitData';
import { ClassesService } from "../../service/classes.service";
@Component({
  selector: 'app-classes-to-class-unit',
  templateUrl: './classes-to-class-unit.component.html',
  styleUrls: ['./classes-to-class-unit.component.css']
})
export class ClassesToClassUnitComponent implements OnInit {
  classes: ClassesData = new ClassesData();
  classesList: ClassesData[] = [];
  classUnit: ClassUnitData = new ClassUnitData();
  classUnits: ClassUnitData[] = [];
  selectedClasses: number;

  constructor(private classesService: ClassesService, private classUnitService: ClassUnitService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadClasses();
    let id = this.activeRoute.snapshot.paramMap.get("id");
    this.classUnitService.getClassUnit(Number(id)).subscribe(receivedClassUnit => {
      this.classUnit = receivedClassUnit;
    });
  }

  loadClasses() {
    this.classesService.getClasses().subscribe(receivedClasses => {
      this.classesList = receivedClasses;
    });
  }

  addToClassUnit(){
    let idClasses = this.selectedClasses;
    let idClassUnit = this.activeRoute.snapshot.paramMap.get("id");
    this.classesService.linkClassesInClassUnit(Number(idClassUnit),idClasses).subscribe(result=>{
      console.log(this.classes.subject)
      window.alert("Classes was assigned!");
      this.loadClasses();
    })
  }

  onSelectionChange(classesData: ClassesData){
    this.selectedClasses=classesData.id;
    console.log(this.selectedClasses);
  }
}
