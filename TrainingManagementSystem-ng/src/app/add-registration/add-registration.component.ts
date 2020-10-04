import { Component, OnInit } from '@angular/core';
import { CourseData } from 'src/model/courseData';
import { ParticipantRegistrationData } from 'src/model/participantRegistrationData';
import { CourseService } from '../service/course.service';
import { ParticipantRegistrationService } from '../service/participant-registration.service';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {
  participant: ParticipantRegistrationData = new ParticipantRegistrationData();
  course: CourseData= new CourseData();
  courses:CourseData[]=[];
  selectedCourse ;
  constructor(private participantRegistrationService: ParticipantRegistrationService,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(receivedCourses=>{
      this.courses=receivedCourses;
    })

  }

  onSelectionChange(course) {
    this.selectedCourse = course;
}

  addRegister(){
    console.log(this.course);
  }

}
