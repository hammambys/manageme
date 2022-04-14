import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades-card',
  templateUrl: './grades-card.component.html',
  styleUrls: ['./grades-card.component.css'],
})
export class GradesCardComponent implements OnInit {
  ShowMe: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  Toggletag(): void {
    this.ShowMe = !this.ShowMe;
  }
}
