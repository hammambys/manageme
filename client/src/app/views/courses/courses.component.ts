import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { User } from 'src/app/models/user.model';
import { CourseService } from 'src/app/_services/course.service';
import { GroupService } from 'src/app/_services/group.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses?: Course[] = [
    {
      id: 1,
      title: 'test',
      description: 'test description',
      published: true,
      hours_per_week: 2,
      groups: [{ name: 'master1' }, { name: 'ing2' }],
      materials: [],
    },
  ];
  currentUser?: User;
  constructor(
    private courseService: CourseService,
    private groupService: GroupService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.currentUser = user;
    //this.retrieveCoursesOfUser();
  }

  retrieveCoursesOfUser(): void {
    console.log(this.currentUser);
    this.courses = this.currentUser?.group?.courses;
  }

  /*retrieveAllCourses(): void {
    this.courseService.getAll().subscribe(
      (data) => {
        this.groupService.getAllUsersByGroup(1).subscribe((data) => {
          console.log(data);
        });

        this.courses = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }*/
}
