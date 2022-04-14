import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }
}
