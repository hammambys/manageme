import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

const baseUrl = 'http://localhost:8080/api/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Course[]> {
    console.log(this.http.get<Course[]>(baseUrl));
    return this.http.get<Course[]>(baseUrl);
  }
  get(id: any): Observable<Course> {
    return this.http.get<Course>(`${baseUrl}/${id}`);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  /*getAllCoursesOfUser(userId:any): Observable<Course[]> {
    console.log(this.http.get<Course[]>(`${baseUrl}/${userId}`));
    return this.http.get<Course[]>(baseUrl);
  }*/
}
