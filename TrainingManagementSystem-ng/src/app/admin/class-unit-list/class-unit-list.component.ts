import { Component, OnInit } from '@angular/core';
import { ClassUnitData } from 'src/model/classUnitData';
import { ClassUnitService } from "../../service/class-unit.service";

@Component({
  selector: 'app-class-unit-list',
  templateUrl: './class-unit-list.component.html',
  styleUrls: ['./class-unit-list.component.css']
})
export class ClassUnitListComponent implements OnInit {
  classUnitList: ClassUnitData[] = [];
  isFormVisible = false;
  classUnit: ClassUnitData;

  constructor(private classUnitService: ClassUnitService) { }

  ngOnInit(): void {
    this.classUnitService.getClassUnits().subscribe(result => {
      this.classUnitList = result;
    })
  }


  public showForm() {
    this.isFormVisible = true;
    this.classUnit = new ClassUnitData();
  }

  delete(id: number) {
    if (confirm("Are you sure you want to delete this?")) {
      this.classUnitService.deleteClassUnit(id).subscribe(result => {
        this.ngOnInit();
      });
    }
  }

  addClassUnit() {
    this.classUnitService.addClassUnit(this.classUnit).subscribe(classUnit => {
      console.log(this.classUnit);
      console.log("added");
      this.isFormVisible = false;
      this.ngOnInit();
    });
  }

}
