import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ParticipantRegistrationData } from "../../model/participantRegistrationData";
@Injectable({
  providedIn: 'root'
})
export class ParticipantRegistrationService {

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:8080/participant'

  public getParticipantRegistrations(): Observable<ParticipantRegistrationData[]> {
    return this.httpClient.get<ParticipantRegistrationData[]>(this.url + '/getParticipantRegistrations');
  }

  public getParticipation(id: Number): Observable<ParticipantRegistrationData> {
    return this.httpClient.get<ParticipantRegistrationData>(this.url + '/getParticipantRegistration/' + id);
  }

  // public findAllByUserType(data: string) : Observable<ParticipantRegistrationData[]>{
  //   return this.httpClient.get<ParticipantRegistrationData[]>(this.url+'/findAllByUserType/'+data);
  // }

  public addParticipantRegistration(participant: ParticipantRegistrationData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/addParticipantRegistration', participant);
  }

  public deleteParticipantRegistration(id: Number) {
    return this.httpClient.delete(this.url + '/delete/' + id);
  }

  public updateParticipant(participant: ParticipantRegistrationData): Observable<any> {
    return this.httpClient.put<any>(this.url + '/updateParticipantRegistration', participant);
  }

 
}
