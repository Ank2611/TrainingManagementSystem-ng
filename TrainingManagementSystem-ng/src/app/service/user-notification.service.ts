import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserNotificationData } from "../../model/userNotificationData";

@Injectable({
  providedIn: 'root'
})
export class UserNotificationService {
  url='http://localhost:8080/usernotification'

  constructor(private httpClient: HttpClient) { }

  public getUserNotifications(): Observable<UserNotificationData[]>{
    return this.httpClient.get<UserNotificationData[]>(this.url+'/getUserNotifications');
  }

  public getUserNotification(id: Number): Observable<UserNotificationData>{
    return this.httpClient.get<UserNotificationData>(this.url+'/getUserNotification/'+id);
  }

  public addUserNotification(userNotificationData : UserNotificationData): Observable<any>{
    return this.httpClient.post<any>(this.url+'/addUserNotification', userNotificationData);
  }

  public updateUserNotification(userNotificationData: UserNotificationData): Observable<any>{
    return this.httpClient.put<any>(this.url+'/updateUserNotification',userNotificationData);
  }

  public delete(id: Number): Observable<UserNotificationData>{
    return this.httpClient.delete<UserNotificationData>(this.url+'/delete/'+id);
  }

  public notifyAcceptedUser(id: Number,userNotificationData:UserNotificationData): Observable<any>{
    let newurl=this.url+'/notifyAcceptedUser/'+id;
    return this.httpClient.post<any>(newurl,userNotificationData);
  }

  public unreadToReadNotification(id: Number, notificationId: Number) : Observable<any>{
    let newurl=this.url+'/unreadToReadNotification/'+id + '/'+notificationId ;
    return this.httpClient.post<any>(newurl,{id, notificationId});
  }
}
