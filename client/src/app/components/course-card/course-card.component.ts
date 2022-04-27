import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() courseTitle?: string;
  @Input() courseLevel?: string;
  @Input() nbOfHoursPerWeek?: number;

  constructor() {}

  ngOnInit(): void {}
}
