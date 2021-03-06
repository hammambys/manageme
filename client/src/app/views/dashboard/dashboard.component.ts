import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { User } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username?: string;
  courses?: Course[] = [
    {
      id: 1,
      title: 'test',
      description: 'test description',
      published: true,
      hours_per_week: 2,
      groups: [],
      materials: [],
    },
    {
      id: 1,
      title: 'test',
      description: 'test description',
      published: true,
      hours_per_week: 2,
      groups: [],
      materials: [],
    },
  ];
  currentUser?: User;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.username = this.currentUser?.username;
    //this.retrieveTwoCoursesOfUser();
  }
  retrieveTwoCoursesOfUser(): void {
    const courses = this.currentUser?.group?.courses?.slice(0, 2);
    this.courses = courses;
  }
}
