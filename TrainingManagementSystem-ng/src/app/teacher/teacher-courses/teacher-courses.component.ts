import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassUnitService } from 'src/app/service/class-unit.service';
import { CourseService } from 'src/app/service/course.service';
import { UserService } from 'src/app/service/user.service';
import { ClassUnitData } from 'src/model/classUnitData';
import { CourseData } from 'src/model/courseData';
import { UserData } from 'src/model/userData';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit {
  teacher: UserData = new UserData();
  course: CourseData = new CourseData();
  courses: CourseData[] = [];
  teachers: UserData[] = [];
  classUnits: ClassUnitData[] = [];
  classUnit: ClassUnitData = new ClassUnitData();
  selectedCourse: number;
  constructor(private userService: UserService, private courseService: CourseService,
    private classUnitService: ClassUnitService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.userService.getUser(Number(id)).subscribe(receivedUser => {
      this.teacher = receivedUser;
    })
    this.loadCoursesList();

  }

  loadCoursesList(): void {
    let idUser = this.route.snapshot.paramMap.get("id");
    this.courseService.findAllCourseByUser(Number(idUser)).subscribe(receivedCourses => {
      this.courses = receivedCourses;
    })
    
  }

  onSelectionChange(course: CourseData) {
    this.selectedCourse = course.id;
    console.log('course id ' +this.selectedCourse);
  }

}
