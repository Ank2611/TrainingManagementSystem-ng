import { Component, OnInit } from '@angular/core';
import { ParticipantRegistrationData } from 'src/model/participantRegistrationData';
import { ParticipantRegistrationService } from "../../service/participant-registration.service";
@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  participants: ParticipantRegistrationData[] = [];

  constructor(private participantRegistrationService: ParticipantRegistrationService) { }

  ngOnInit(): void {
    this.participantRegistrationService.getParticipantRegistrations().subscribe(receivedList => {
      this.participants = receivedList;
    })
  }

  delete(id: Number) {
    if (confirm("Are you sure you want to delete this?")) {
      this.participantRegistrationService.deleteParticipantRegistration(id).subscribe(result => {
        this.ngOnInit();
      })
    }
  }


}
