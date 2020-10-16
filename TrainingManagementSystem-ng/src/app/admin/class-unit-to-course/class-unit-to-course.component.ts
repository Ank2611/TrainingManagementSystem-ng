import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { CourseService } from 'src/app/service/course.service';
import { ClassUnitData } from 'src/model/classUnitData';
import { CourseData } from 'src/model/courseData';

@Component({
  selector: 'app-class-unit-to-course',
  templateUrl: './class-unit-to-course.component.html',
  styleUrls: ['./class-unit-to-course.component.css']
})
export class ClassUnitToCourseComponent implements OnInit {
  classUnits: ClassUnitData[] = [];
  course: CourseData = new CourseData();
  courses: CourseData[] = [];
  classUnit: ClassUnitData = new ClassUnitData();
  selectedClassUnit: number;
  constructor(private courseService: CourseService, private classUnitService: ClassUnitService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadClassUnits();
    let idCourse = this.activeRoute.snapshot.paramMap.get("id");
    this.courseService.getCourse(Number(idCourse)).subscribe(receivedCourse => {
      this.course = receivedCourse;
    })
  }

  loadClassUnits() {
    this.classUnitService.getClassUnits().subscribe(received => {
      this.classUnits = received;
    })
  }
  onSelectionChange(classUnit: ClassUnitData) {
    this.selectedClassUnit = classUnit.id;
    console.log(this.selectedClassUnit);
  }

  addToCourse() {
    let idCourse = this.activeRoute.snapshot.paramMap.get("id");
    let idClassUnit = this.selectedClassUnit;
    console.log('idcourse ' + idCourse);
    console.log('idclassunit ' + this.selectedClassUnit);
    this.classUnitService.linkClassUnitInCourse(idClassUnit, Number(idCourse)).subscribe(result => {
      console.log("added!");
      window.alert("ClassUnit was assigned!");
      this.loadClassUnits();
    })
  }


}
