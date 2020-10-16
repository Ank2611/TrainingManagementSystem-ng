import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ClassesData } from "../../model/classesData";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/classes";

  public getClasses(): Observable<ClassesData[]> {
    return this.httpClient.get<ClassesData[]>(this.url + "/getClasses");
  }

  public getClassesById(id: Number): Observable<ClassesData> {
    return this.httpClient.get<ClassesData>(this.url + "/getClasses/" + id);
  }


  public updateClasses(classes: ClassesData): Observable<any> {
    return this.httpClient.put<any>(this.url + '/updateClasses', classes);
  }

  public deleteClasses(id: Number) {
    return this.httpClient.delete(this.url + '/deleteClasses/' + id);
  }

  public addClasses(classes: ClassesData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/addClasses', classes);
  }


  public linkClassesInClassUnit(idClassUnit: Number, idClasses: Number): Observable<any> {
    let newUrl = this.url + "/linkClassesInClassUnit/" + idClassUnit + "/" + idClasses;
    return this.httpClient.post<any>(newUrl, { idClassUnit, idClasses });

  }

  public getAllByIdClassUnit(id: Number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/getAllByIdClassUnit/' + id);
  }
}
