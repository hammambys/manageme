import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent implements OnInit {
  courses?: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveCourses();
  }
  retrieveCourses(): void {
    this.courseService.getAll().subscribe(
      (data) => {
        this.courses = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
