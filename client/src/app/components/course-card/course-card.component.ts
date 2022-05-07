import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course = {
    id: 1,
    title: '',
    published: true,
    groups: [],
    materials: [],
  };
  courseTitle: string = 'default';
  courseGroup: Group[] = [];
  courseLevels: string[] = [];
  nbOfHoursPerWeek: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.courseTitle = this.course.title;
    this.courseGroup = this.course.groups;
    this.courseGroup?.forEach((e) => {
      if (e.name) {
        console.log(e);
        this.courseLevels?.push(e.name);
      }
    });
  }
}
