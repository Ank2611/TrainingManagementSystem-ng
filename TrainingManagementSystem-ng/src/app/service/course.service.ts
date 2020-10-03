import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CourseData } from 'src/model/courseData';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/course";

  public getCourses(): Observable<CourseData[]> {
    return this.httpClient.get<CourseData[]>(this.url + '/getCourses');
  }

  public addCourse(course: CourseData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/addCourse', course)
  };

  public updateCourse(course: CourseData): Observable<any> {
    return this.httpClient.put<any>(this.url + '/updateCourse', course);
  }

  public getCourse(id: number): Observable<CourseData> {
    return this.httpClient.get<CourseData>(this.url + '/getCourse/' + id);
  }

  public deleteCourse(id: number){
    return this.httpClient.delete(this.url+'/deleteCourse/'+id);
  } 
}
