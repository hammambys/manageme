import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-card',
  templateUrl: './ds-card.component.html',
  styleUrls: ['./ds-card.component.css']
})
export class DSCardComponent implements OnInit {
  ShowMe: boolean = false;
  constructor() { }

  ngOnInit(): void { }
  Toggletag(): void {
    this.ShowMe = !this.ShowMe;
  }
}
