import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/service/classes.service';
import { ClassesData } from 'src/model/classesData';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  classesList: ClassesData[] = [];
  classes: ClassesData;
  isVisible=false;
  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses() {
    this.classesService.getClasses().subscribe(receivedClasses => {
      this.classesList = receivedClasses;
    })
  }

  showForm(){
    this.isVisible=true;
    this.classes=new ClassesData();
  }

  addClasses(){

    this.classesService.addClasses(this.classes).subscribe(result=>{
      console.log("added");
      this.isVisible = false;
      this.loadClasses();
    })
  }

  deleteClasses(id:Number) {
    if (confirm("Are you sure you want to delete this?")){
      this.classesService.deleteClasses(id).subscribe(result=>
        {this.loadClasses();})
    }
  }

}
