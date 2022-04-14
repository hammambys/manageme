import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username?: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
  }
}
