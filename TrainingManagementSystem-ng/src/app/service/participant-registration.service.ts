import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ParticipantRegistrationData } from "../../model/participantRegistrationData";
@Injectable({
  providedIn: 'root'
})
export class ParticipantRegistrationService {

  constructor(private httpClient: HttpClient) { }
  url='http://localhost:8080/participant'

  public getParticipantRegistrations():Observable<ParticipantRegistrationData[]>{
    return this.httpClient.get<ParticipantRegistrationData[]>(this.url+'/getParticipantRegistrations');
  }

  public addParticipantRegistration(participant: ParticipantRegistrationData):Observable<any>{
    return this.httpClient.post<any>(this.url+'/addParticipantRegistration',participant);
  }

}
