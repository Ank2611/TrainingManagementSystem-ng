import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ClassUnitData } from "../../model/classUnitData";
import { ClassUnitByUserData } from 'src/model/classUnitByUserData';

@Injectable({
  providedIn: 'root'
})
export class ClassUnitService {

  url = "http://localhost:8080/classUnit";

  constructor(private httpClient: HttpClient) { }

  public getClassUnits(): Observable<ClassUnitData[]> {
    return this.httpClient.get<ClassUnitData[]>(this.url + "/getClassUnits");
  }

  public getClassUnit(id: Number): Observable<ClassUnitData> {
    return this.httpClient.get<ClassUnitData>(this.url + '/getClassUnit/' + id);
  }

  public updateClassUnit(classUnit: ClassUnitData): Observable<any> {
    return this.httpClient.put<any>(this.url + '/updateClassUnit', classUnit);
  }

  public deleteClassUnit(id: Number) {
    return this.httpClient.delete(this.url + '/deleteClassUnit/' + id);
  }

  public addClassUnit(classUnit: ClassUnitData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/addClassUnit', classUnit);
  }

  public linkClassUnitInCourse(idCourse: Number, idClassUnit: Number): Observable<any> {
    let newUrl = this.url + "/linkClassUnitInCourse/" + idCourse + "/" + idClassUnit;
    return this.httpClient.post<any>(newUrl, { idCourse, idClassUnit });

  }

  public getClassUnitsByIdCourse(idCourse: Number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/getClassUnitsByIdCourse/' + idCourse);
  }

  public getAllClassUnitByUser(idUser: Number): Observable<ClassUnitByUserData[]> {
    return this.httpClient.get<ClassUnitByUserData[]>(this.url + '/getAllClassUnitByUser/' + idUser);
  }
}
