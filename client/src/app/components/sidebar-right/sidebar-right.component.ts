import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css'],
})
export class SidebarRightComponent implements OnInit {
  username?: string;
  profil_dropdown_open = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
  }

  toggleProfilDropdown() {
    this.profil_dropdown_open = !this.profil_dropdown_open;
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }
}
