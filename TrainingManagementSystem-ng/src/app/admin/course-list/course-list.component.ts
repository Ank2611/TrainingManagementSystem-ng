import { Component, OnInit } from '@angular/core';
import { CourseData } from 'src/model/courseData';
import { CourseService } from '../../service/course.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: CourseData[] = [];
  isFormVisible = false;
  course: CourseData = new CourseData();

  constructor(private courseService: CourseService) { }


  ngOnInit(): void {
    this.courseService.getCourses().subscribe(receivedCourses => {
      this.courses = receivedCourses;
    });

  }

  public showForm() {
    this.isFormVisible = true;
    this.course = new CourseData();
  }

  addCourse() {
    this.courseService.addCourse(this.course).subscribe(course => {
      console.log(this.course);
      console.log("added");
      this.isFormVisible = false;
      this.ngOnInit();
    });
  }

  delete(id: number) {
    if (confirm("Are you sure you want to delete this?")) {
      this.courseService.deleteCourse(id).subscribe(result => {
        this.ngOnInit();
      });
    }
  }
}
