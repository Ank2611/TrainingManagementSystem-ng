import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { CourseData } from 'src/model/courseData';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: CourseData = new CourseData;
  courses: CourseData[] = [];
  constructor(private activatedRoutes: ActivatedRoute, private courseService: CourseService,
    private routes: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.paramMap.get("id");
    console.log('id ' + id);
    this.courseService.getCourse(Number(id)).subscribe(courseResult => {
      this.course = courseResult;
    })
  }

  updateCourse(): void {
    console.log(this.course);
    this.courseService.updateCourse(this.course).subscribe(result => {
      this.course = result;
      this.routes.navigateByUrl("admin/course-list");
    })

  }
}
