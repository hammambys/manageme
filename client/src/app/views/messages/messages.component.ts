import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  panelOpenState = false;
  nbFriends = 1;
  nbGroup = 1;
  nbPrivate = 0;
  friendsList: string[] = ['friend1', 'friend2', 'friend3'];
  groupList: string[] = ['group1', 'group2', 'group3'];
  privateList: string[] = ['user1'];

  constructor() {}

  ngOnInit(): void {}
}
