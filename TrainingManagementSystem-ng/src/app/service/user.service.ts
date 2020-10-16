import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserData } from "../../model/userData";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  public getUsersByType(data: string): Observable<UserData[]> {
    return this.httpClient.get<UserData[]>(this.url + '/getUsersByType/' + data);
  }

  // public getUsers():Observable<UserData[]>{
  //   return this.httpClient.get<UserData[]>(this.url+"users/getUsers");
  // }

  public addUser(user: UserData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/addUser', user);

  }

  public deleteUser(id: Number) {
    return this.httpClient.delete<any>(this.url + '/deleteUser/' + id);
  }

  public getUser(id:Number): Observable<UserData>{
    return this.httpClient.get<UserData>(this.url+'/getUser/'+id);

  }

  public updateUser(user: UserData): Observable<any>{
    return this.httpClient.put<any>(this.url+'/updateUser',user);
  }

 
}
