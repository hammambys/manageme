import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseMat } from 'src/app/models/courseMat.model';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
})
export class CourseEditComponent implements OnInit {
  currentCourse: Course = {
    id: 1,
    title: 'test',
    description: 'test description',
    published: false,
    hours_per_week: 8,
    groups: [],
    materials: [
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
        link: 'qj3jMkL88H8',
      },
      {
        id: 3,
        name: 'doc 1',
        description: 'description 1',
        isVideo: false,
        link: '#',
      },
      {
        id: 4,
        name: 'video 1',
        description: 'description 1',
        isVideo: true,
        link: '7ekf2nCHcbc',
      },
    ],
  };
  video: CourseMat = {
    name: '',
    description: '',
    isVideo: true,
    link: '',
  };
  document: CourseMat = {
    name: '',
    description: '',
    isVideo: false,
    link: '',
  };
  enabledVidInput = false;
  enabledDocInput = false;
  submitted = false;
  deleted = false;
  message = '';

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
  toggleVidInput(): void {
    this.enabledVidInput = !this.enabledVidInput;
  }
  toggleDocInput(): void {
    this.enabledDocInput = !this.enabledDocInput;
  }
  saveVideo(): void {
    const data: CourseMat = {
      name: this.video.name,
      description: this.video.description,
      link: this.video.link,
      isVideo: true,
    };
    if (data) {
      this.currentCourse.materials.push(data);
      this.submitted = true;
      this.message = 'Video submitted successfully!';
    }
  }
  saveDocument(): void {
    const data: CourseMat = {
      name: this.document.name,
      description: this.document.description,
      link: this.document.link,
      isVideo: false,
    };
    if (confirm('Are you sure?')) {
      this.currentCourse.materials.push(data);
      this.submitted = true;
      alert(this.message);
    }
  }
  deleteMaterial(id: any): void {
    this.currentCourse.materials.splice(
      this.currentCourse.materials.findIndex((i) => {
        return i.id === id;
      }),
      1
    );
    this.deleted = true;
    this.message = 'Element deleted successfully!';
  }
}
