import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseData } from 'src/model/courseData';
import { ParticipantRegistrationData } from 'src/model/participantRegistrationData';
import { UserData } from 'src/model/userData';
import { CourseService } from '../service/course.service';
import { ParticipantRegistrationService } from '../service/participant-registration.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {
  participant: ParticipantRegistrationData = new ParticipantRegistrationData();
  course: CourseData = new CourseData();
  courses: CourseData[] = [];
  selectedCourse: number;
  user: UserData = new UserData();

  constructor(private participantRegistrationService: ParticipantRegistrationService,
    private courseService: CourseService, private userService: UserService,
    private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCourses();
    let idUser = this.activeRoute.snapshot.paramMap.get("id");
    this.userService.getUser(Number(idUser)).subscribe(receivedUser=>{
      this.user=receivedUser;
    })
  }

  loadCourses(): void{
    this.courseService.getCourses().subscribe(receivedCourses => {
      this.courses = receivedCourses;
    })
  }

  onSelectionChange(course: CourseData) {
    this.selectedCourse = course.id;
    console.log(this.selectedCourse);
  }

  addRegister():void {

    let idUser = this.activeRoute.snapshot.paramMap.get("id");
    this.participant.courseDto.id=this.selectedCourse;
    this.participant.userDto.id=Number(idUser);
    
    this.participant.date=new Date();
    this.participant.accepted=true;
    console.log('user id ' + this.participant.userDto.id);
    console.log('course id ' + this.participant.courseDto.id);
    this.participantRegistrationService.addParticipantRegistration(this.participant).subscribe(received=>{
    console.log("added");
    this.loadCourses();
    })
  }

}
