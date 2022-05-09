import { Component, OnInit } from '@angular/core';
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
  message = '';
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
  viewMode = true;
  openedVideo: CourseMat = {
    id: 1,
    name: 'test',
    link: '',
  };
  enabledVidInput = false;
  enabledDocInput = false;
  submittedVid = false;
  submittedDoc = false;

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
          this.viewMode = true;
        },
        error: (e) => console.error(e),
      });
  }

  openVideo(id: any): void {
    const selectedVideo = this.currentCourse.materials.find((e) => e.id == id);
    if (selectedVideo) {
      this.openedVideo = selectedVideo;
    }
  }
}
