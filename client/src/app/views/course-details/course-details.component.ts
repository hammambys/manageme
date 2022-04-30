import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  required: string;
  grade: number;
  due: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { required: 'quiz', grade: 11, due: '12/03/2000' },
];

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  displayedColumns: string[] = ['required', 'grade', 'due'];

  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  panelOpenStateVideos = false;
  panelOpenStateDocs = false;

  constructor() {}

  ngOnInit(): void {}
}
