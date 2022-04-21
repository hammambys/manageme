import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

const baseUrl = 'http://localhost:8080/api/groups';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Course[]> {
    console.log(this.http.get<Course[]>(baseUrl));
    return this.http.get<Course[]>(baseUrl);
  }
}
