import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-group-card',
  templateUrl: './mini-group-card.component.html',
  styleUrls: ['./mini-group-card.component.css'],
})
export class MiniGroupCardComponent implements OnInit {
  ShowMe: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  Toggletag(): void {
    this.ShowMe = !this.ShowMe;
  }
}
