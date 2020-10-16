import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { CourseService } from 'src/app/service/course.service';
import { ClassesData } from 'src/model/classesData';
import { ClassUnitData } from 'src/model/classUnitData';
import { CourseData } from 'src/model/courseData';

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
    private route: ActivatedRoute) { }

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
 

}


