import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationData } from "../../model/notificationData";
import { NotificationByClassesData } from "../../model/notificationByClassesData";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url = "http://localhost:8080/notification";

  constructor(private httpClient: HttpClient) { }

  public getNotifications(): Observable<NotificationData[]> {
    return this.httpClient.get<NotificationData[]>(this.url + "/getNotifications");
  }

  public getNotification(id: Number): Observable<NotificationData> {
    return this.httpClient.get<NotificationData>(this.url + "/getNotification/" + id);
  }

  public addNotification(notificationData: NotificationData): Observable<any>{
    return this.httpClient.post<any>(this.url + "/addNotification",notificationData);
  }

  public updateNotification(notificationData: NotificationData): Observable<any>{
    return this.httpClient.put<any>(this.url+ "/updateNotification",notificationData);
  }

  public deleteNotification(id: Number){
    return this.httpClient.delete(this.url+"/deleteNotification"+id);
  }

  public getAllReadNotification(idUser: Number):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getAllReadNotification/"+idUser);
  }

  public getAllUnreadNotification(idUser: Number):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getAllUnreadNotification/"+idUser);
  }

  public addNewNotificationToClasses(notificationData: NotificationData, id: Number): Observable<any>{
    let newurl=this.url+'/addNewNotificationToClasses/'+id;
    return this.httpClient.post<any>(newurl,notificationData);
  }

  public getAllNotificationByClasses(idClasses: Number): Observable<NotificationByClassesData[]>{
    return this.httpClient.get<NotificationByClassesData[]>(this.url+'/getAllNotificationByClasses/'+idClasses);
  }
}
