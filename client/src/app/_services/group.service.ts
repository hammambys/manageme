import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:8080/api/groups';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(baseUrl);
  }
  getAllUsersByGroup(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/${id}/users`);
  }
  getAllCoursesByGroup(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/${id}/courses`);
  }
}
