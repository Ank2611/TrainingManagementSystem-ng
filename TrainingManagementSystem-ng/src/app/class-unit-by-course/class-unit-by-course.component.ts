import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassUnitService } from '../service/class-unit.service';
import { CourseService } from '../service/course.service';
import { ClassUnitData } from '../../model/classUnitData';
import { CourseData } from '../../model/courseData';
import { Location } from '@angular/common';

@Component({
  selector: 'app-class-unit-by-course',
  templateUrl: './class-unit-by-course.component.html',
  styleUrls: ['./class-unit-by-course.component.css']
})
export class ClassUnitByCourseComponent implements OnInit {
classUnit: ClassUnitData= new ClassUnitData();
classUnits: ClassUnitData[]=[];
course: CourseData= new CourseData();
courses: CourseData[]=[];
selectedClassUnit: number;

  constructor(private classUnitService: ClassUnitService, private courseService: CourseService,
    private route: ActivatedRoute, private router: Router,private location: Location) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get("id");
    this.courseService.getCourse(Number(id)).subscribe(receivedCourse=>{
      this.course=receivedCourse;
    });
    this.loadClassUnit();
  }

  loadClassUnit(): void{
    let idCourse=this.route.snapshot.paramMap.get("id");
    this.classUnitService.getClassUnitsByIdCourse(Number(idCourse)).subscribe(received=>{
      this.classUnits=received;
    })
  }

  onSelectionChange(classUnit: ClassUnitData){
    this.selectedClassUnit=classUnit.id;
  }
 
  goBack(): void{
    this.location.back();
  }
}


