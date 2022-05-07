import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseMat } from 'src/app/models/courseMat.model';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  docs: CourseMat[] = [
    {
      id: 1,
      name: 'doc 1',
      description: 'description 1',
      isVideo: false,
      link: '#',
    },
    {
      id: 2,
      name: 'video 1',
      description: 'description 1',
      isVideo: true,
      link: '#',
    },
    {
      id: 3,
      name: 'doc 2',
      description: 'description 2',
      isVideo: false,
      link: '#',
    },
  ];
  message = '';
  currentCourse: Course = {
    title: '',
    description: '',
    published: false,
    hours_per_week: 8,
    groups: [],
  };
  viewMode = true;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getCourse(this.route.snapshot.params['id']);
  }

  getCourse(id: string): void {
    this.courseService.get(id).subscribe({
      next: (data) => {
        this.currentCourse = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateCourse(): void {
    this.message = '';

    this.courseService
      .update(this.currentCourse.id, this.currentCourse)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This course was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }
  activateEdit(): void {
    this.viewMode = false;
  }
}
