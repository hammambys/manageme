import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  selected: Date | null;

  constructor() {
    this.selected = new Date(2020, 0, 1);
  }

  ngOnInit(): void {}
}
