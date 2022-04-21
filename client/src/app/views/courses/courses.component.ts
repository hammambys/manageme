import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses?: Course[];
  title: string = '';
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
