import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipantRegistrationData } from 'src/model/participantRegistrationData';
import { ParticipantRegistrationService } from "../../service/participant-registration.service";
import { UserNotificationService } from "../../service/user-notification.service";
import { Location } from "@angular/common";
import { UserNotificationData } from 'src/model/userNotificationData';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  participants: ParticipantRegistrationData[] = [];
  participant: ParticipantRegistrationData=new ParticipantRegistrationData();
  userNotification: UserNotificationData=new UserNotificationData();

  constructor(private participantRegistrationService: ParticipantRegistrationService,
      private userNotificationService: UserNotificationService,
        private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants(): void{
    this.participantRegistrationService.getParticipantRegistrations().subscribe(receivedList => {
      this.participants = receivedList;
    })

  }

  delete(id: Number) {
    if (confirm("Are you sure you want to delete this?")) {
      this.participantRegistrationService.deleteParticipantRegistration(id).subscribe(result => {
        this.loadParticipants();
      })
    }
  }

  accepted(id: number, idUser: number, idCourse: number){
    console.log('id register '+id)
    
    this.participant.id=id;
    this.participant.userDto.id=idUser;
    this.participant.courseDto.id=idCourse;
    this.participantRegistrationService.getParticipation(id).subscribe(participationResult=>{
      this.participant=participationResult;
      
    })
    
    console.log('participant '+this.participant.id);
    console.log('user id ' + this.participant.userDto.id);
    console.log('course id ' + this.participant.courseDto.id);
    
    this.participant.accepted=true;
    this.participantRegistrationService.updateParticipant(this.participant).subscribe(updUser=>{
      this.participant=updUser;
      this.userNotificationService.notifyAcceptedUser(idUser,this.userNotification);
      this.loadParticipants();}
      );
      
  }

  goBack(): void{
    this.location.back();
  }
}
