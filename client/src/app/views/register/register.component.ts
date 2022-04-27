import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/_services/group.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    level: 'NO_GROUP',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  groups: Group[] = [{ id: 1, level: 'master1', name: 'A' }];
  selectedValue: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.retrieveGroups();
  }

  onSubmit(): void {
    const { username, email, password, level } = this.form;
    this.authService.register(username, email, password, level).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  retrieveGroups() {
    this.groupService.getAll().subscribe(
      (data) => {
        this.groups = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
